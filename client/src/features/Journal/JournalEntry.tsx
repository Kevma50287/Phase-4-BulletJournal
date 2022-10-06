import React, { useState } from 'react'
import './JournalEntry.scss'
import { useAppSelector } from '../../hooks'
import DailyEmotionCheck from './DailyEmotionCheck'
import DailyActivityCheck from './DailyActivityCheck'
import { useParams } from 'react-router-dom'


// Need to type the key of the object as a string
interface journalProps {
  emotion:string,
  entry:string,
  date:string,
  activities:{[key:string]:boolean}
}

const Journal = () => {
  const params = useParams()
  const currentEntryId = params.journal_entry_id
  const idToNumber = Number(currentEntryId) - 1

  const journalState = useAppSelector(state => state.journal)
  const journalEntries = journalState.journal_entries
  
  //Get the latest entry
  const currentEntry = journalEntries[idToNumber]
  console.log(currentEntry)

  const blankState:journalProps = {
    emotion:"",
    entry:"",
    date:"",
    activities: {
      "study":false,
      "dining":false,
      "gaming":false,
      "workout":false,
      "friends":false,
      "dating":false,
      "music":false,
      "shopping":false,
      "nap":false,
      "travel":false
    }
  }

  //Combine latest entry with blank state to create the inital state on page load
  const createInitialState = (entry:any, blankState:journalProps) => {
    if (entry === undefined){
      return blankState
    } else {
      //Create a copy of blankState
      let initialState:journalProps = {...blankState}

      //Update the copy with the most recent entries
      initialState.emotion = entry.emotion
      initialState.entry = entry.entry
      initialState.date = entry.date
      //For each activity seen, set that activity value to true
      entry.activities.forEach((activity:string) => {
        initialState.activities[activity] = true
      })
      return initialState
    }
  }

  const initialState = createInitialState(currentEntry, blankState)

  const [journalEntry, setJournalEntry] = useState(initialState)
  const [addEntry, setAddEntry] = useState({})
 
 // when boolean is false its going to show header when its true it wont show header 

 // 

  //Generate dateObj

  // FIXME:May need to keep date separate from Calendar State
  const currentDate = useAppSelector((state) => state.calendar.currentDate)
  const selectedDate = useAppSelector((state) => state.calendar.selectedDate)
  const dateObj = new Date(selectedDate)

  //Handler Functions
  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournalEntry({...journalEntry, entry:e.target.value})
  }

  const handleActivities = (name: string) => {
    const entries = journalEntry.activities
    const entriesCopy = {...entries}
    //Check is acitvity name exists in object
    if (entries.hasOwnProperty(name)){
      //If so change change the value of it and set it
      entriesCopy[name] = !entriesCopy[name]
      const newJournalEntry = {...journalEntry}
      newJournalEntry.activities = entriesCopy
      setJournalEntry(newJournalEntry) 
    }
  }

  const handleEmotion = (condition:string) => {
    //To deselect emotion
    if (condition === journalEntry.emotion){
      setJournalEntry({...journalEntry, emotion:""})
    } else { //To set emotion
      setJournalEntry({...journalEntry, emotion:condition})
    }
  }

  // TODO:Add useEffect on dateObj to fetch relevant data of the selectedDate

  //TODO: Add submit to backend 
   const handleSave = async (e: any) => {
     e.preventDefault()
      await fetch(`http://localhost:3000/journals`, {
       method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      }, 
       body: JSON.stringify({

          
       })
     })
     .then(req => req.json())
     .then(res => {

     })
   }

  //TODO: Add delete entry

  
  
  return (
    <div id="journal">
      <div id='leftpage'>
        <DailyEmotionCheck setEmotion={handleEmotion} currentEmotion={journalEntry.emotion} />
        <DailyActivityCheck setActivities={handleActivities} currentActivities={journalEntry.activities} />
      </div>
      <div id='rightpage'>
        <div id='journal-date'>
          {journalEntry.date.length > 0 ? new Date(journalEntry.date).toDateString() : dateObj.toDateString()}
        </div>
        <form id='diary-input-container' onSubmit={handleSave}>
          <textarea id='diary-input' value={journalEntry.entry} onChange={e => handleTextInput(e)}/>
          <button type='submit' id='diary-save-button'> Save Entry </button>
        </form>
      </div>
    </div>
  )
}
 
export default Journal