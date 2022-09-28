import React, { useState } from 'react'
import './Journal.scss'
import { useAppSelector } from '../../hooks'
import DailyEmotionCheck from './DailyEmotionCheck'
import DailyActivityCheck from './DailyActivityCheck'

const Journal = () => {
  const [journalEntry, setJournalEntry] = useState({
    emotion:"",
    entry:"",
    date:"",
    activities: {
      study:false,
      dining:false,
      gaming:false,
      workout:false,
      friends:false,
      dating:false,
      music:false,
      shopping:false,
      nap:false,
      travel:false
    }
  })

  //Generate dateObj

  // FIXME:May need to keep date separate from Calendar State
  const currentDate = useAppSelector((state) => state.calendar.currentDate)
  const selectedDate = useAppSelector((state) => state.calendar.selectedDate)
  const dateObj = new Date(selectedDate)

  //Handler Functions
  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournalEntry({...journalEntry, entry:e.target.value})
  }

  const handleActivities = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

  }

  const handleEmotion = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    
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
        <DailyEmotionCheck setEmotion={handleEmotion} />
        <DailyActivityCheck setActivities={handleActivities} />
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