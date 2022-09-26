import React, { useState } from 'react'
import { useAppSelector } from '../../hooks'

const RightPage = () => {
  const currentDate = useAppSelector((state) => state.calendar.currentDate)
  const selectedDate = useAppSelector((state) => state.calendar.selectedDate)

  //Controlled Form Inputs
  const [textInput, setTextInput] = useState("")

  //Handler Functions
  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(e.target.value)
  }

  //TODO: Add submit to backend 
  const handleSave = (e: any) => {
    e.preventDefault()
    console.log(textInput)
  }

  //TODO: Add delete entry

  //Generate dateObj
  const dateObj = new Date(selectedDate)

  return (
    <div id='rightpage'>
      <div id='journal-date'>{dateObj.toDateString()}</div>
      <form id='diary-input-container' onSubmit={handleSave}>
        <textarea id='diary-input' value={textInput} onChange={e => handleTextInput(e)}/>
        <button type='submit' id='diary-save-button'> Save Entry </button>
      </form>
    </div>
  )
}

export default RightPage