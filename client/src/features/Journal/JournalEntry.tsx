import React, { useState } from 'react'
import './JournalEntry.scss'
import { useAppSelector } from '../../hooks'
import DailyEmotionCheck from './DailyEmotionCheck'
import DailyActivityCheck from './DailyActivityCheck'


// Need to type the key of the object as a string
interface journalProps {
  emotion:string,
  entry:string,
  date:string,
  activities:{[key:string]:boolean}
}

const Journal = () => {
  const initialState:journalProps = {
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
  const [journalEntry, setJournalEntry] = useState(initialState)

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
  const handleSave = (e: any) => {
    e.preventDefault()
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
          {dateObj.toDateString()}
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