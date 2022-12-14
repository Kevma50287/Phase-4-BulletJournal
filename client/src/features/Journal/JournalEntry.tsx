import React, { useEffect, useState } from 'react'
import './JournalEntry.scss'
import { useAppDispatch, useAppSelector } from '../../hooks'
import DailyEmotionCheck from './DailyEmotionCheck'
import DailyActivityCheck from './DailyActivityCheck'
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import axios from 'axios'
import { journalProps } from '../../types/JournalType'
import { setJournalEntries } from '../Slices/journalSlice';

// Need to type the key of the object as a string


const Journal = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const showModal: any = useOutletContext();
  const params = useParams()
  const currentEntryId = Number(params.journal_entry_id)
  const idToNumber = currentEntryId - 1

  const journalState = useAppSelector(state => state.journal)
  const journalEntries = journalState.journal_entries
  const journalEntriesLength = journalEntries.length

  //Get the latest entry
  const currentEntry = journalEntries[idToNumber]

  const blankState: journalProps = {
    emotion: "",
    entry: "",
    date: "",
    activities: {
      "study": false,
      "dining": false,
      "gaming": false,
      "workout": false,
      "friends": false,
      "dating": false,
      "music": false,
      "shopping": false,
      "nap": false,
      "travel": false
    }
  }

  //Combine latest entry with blank state to create the inital state on page load
  const createInitialState = (entry: any, blankState: journalProps) => {
    if (entry === undefined || showModal[0] === true) {
      return blankState
    } else {
      //Create a copy of blankState
      let initialState: journalProps = { ...blankState }

      //Update the copy with the most recent entries
      initialState.emotion = entry.emotion
      initialState.entry = entry.entry
      initialState.date = entry.date
      //For each activity seen, set that activity value to true
      entry.activities.forEach((activity: string) => {
        initialState.activities[activity] = true
      })
      return initialState
    }
  }

  //Create the initial state
  const initialState = createInitialState(currentEntry, blankState)
  //Controlled form inputs
  const [journalEntry, setJournalEntry] = useState(initialState)


  //Whenever the params or currentEntry changes we need to update the state
  useEffect(() => {
    //isMounted flag for the return function so state changes will not be made if params change outside of ./journal_entries
    const updatedState = createInitialState(currentEntry, blankState)
    setJournalEntry(updatedState)
  }, [params, currentEntry, showModal[0]]) //blankState not expected to ever change so not included


  const handlePageChange = (n: number) => {
    const newPage = currentEntryId + n
    if (newPage > 0 && newPage <= journalEntriesLength) {
      navigate(`/user/${params.username}/journals/${params.journal_id}/journal_entries/${newPage}`)
    } else {
      alert("No more entries")
    }
  }

  /////////////////////////// DATE HANDLERS ///////////////////////////////

  // FIXME:May need to keep date separate from Calendar State
  const currentDate = useAppSelector((state) => state.calendar.currentDate)
  const selectedDate = useAppSelector((state) => state.calendar.selectedDate)
  const dateObj = new Date(currentDate)

  //Handler Functions
  const handleTextInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJournalEntry({ ...journalEntry, entry: e.target.value })
  }

  const handleActivities = (name: string) => {
    const entries = journalEntry.activities
    const entriesCopy = { ...entries }
    //Check is acitvity name exists in object
    if (entries.hasOwnProperty(name)) {
      //If so change change the value of it and set it
      entriesCopy[name] = !entriesCopy[name]
      const newJournalEntry = { ...journalEntry }
      newJournalEntry.activities = entriesCopy
      setJournalEntry(newJournalEntry)
    }
  }

  const handleEmotion = (condition: string) => {
    //To deselect emotion
    if (condition === journalEntry.emotion) {
      setJournalEntry({ ...journalEntry, emotion: "" })
    } else { //To set emotion
      setJournalEntry({ ...journalEntry, emotion: condition })
    }
  }

  //PATCH
  const handleSave = async () => {
    const cookieString = document.cookie.split('jwt=')[1]
    const activityKeyValuePairArray = Object.entries(journalEntry.activities)
    const activityArray = activityKeyValuePairArray.filter(([key, value]) => value).map((arr) => arr[0])
    const formattedPatchObj = { ...journalEntry, activities: activityArray }
    const res = await axios.patch(
      `http://localhost:3000/journals/${params.journal_id}/journal_entries/${currentEntry.id}`,
      formattedPatchObj,
      {
        headers: {
          Authorization: `Bearer ${cookieString}`
        }
      }
    )
    const data = res.data
    //update our journal entry array with the positive server response and then set journal entries
    const updated = journalEntries.map((entry) => {
      if (entry.id === data.id) {
        return data
      } else {
        return entry
      }
    })
    dispatch(setJournalEntries(updated))
  }

  //DELETE
  const handleDelete = async () => {
    const cookieString = document.cookie.split('jwt=')[1]
    const res = await axios.delete(
      `http://localhost:3000/journals/${params.journal_id}/journal_entries/${currentEntry.id}`,
      {
        headers: {
          Authorization: `Bearer ${cookieString}`
        }
      }
    )
    const data = res.data.journal_entry
    const filter = journalEntries.filter((entry) => entry.id !== data.id)
    dispatch(setJournalEntries(filter))
  }



  //CREATE
  const handleCreate = async () => {
    const cookieString = document.cookie.split('jwt=')[1]
    const activityKeyValuePairArray = Object.entries(journalEntry.activities)
    const activityArray = activityKeyValuePairArray.filter(([key, value]) => value).map((arr) => arr[0])
    const formattedPostObj = { ...journalEntry, activities: activityArray, date: currentDate }
    const res = await axios.post(
      `http://localhost:3000/journals/${params.journal_id}/journal_entries`,
      formattedPostObj,
      {
        headers: {
          Authorization: `Bearer ${cookieString}`
        }
      }
    )
    const data = res.data
    const newArray = [...journalEntries, data]
    dispatch(setJournalEntries(newArray))
  }

  //handle submit, two functions for the save button
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (showModal[0] === true || currentEntry === undefined) {
      handleCreate()
    } else {
      handleSave()
    }
    showModal[1](false)
  }
  // FIXME: DATEs are one day back
  return (
    <div id="journal">
      <div id='leftpage' >
        <DailyEmotionCheck setEmotion={handleEmotion} currentEmotion={journalEntry.emotion} />
        <DailyActivityCheck setActivities={handleActivities} currentActivities={journalEntry.activities} />
        <FaArrowAltCircleLeft className="left-arrow" onClick={() => handlePageChange(-1)} />
      </div>
      <div id='rightpage'>
        <div id='journal-date'>
          {journalEntry.date.length > 0 ? new Date(journalEntry.date).toDateString() : dateObj.toDateString()}
        </div>
        <form id='diary-input-container' onSubmit={handleSubmit}>
          <textarea id='diary-input' value={journalEntry.entry} onChange={e => handleTextInput(e)} />
          <div id="save-delete-container">
            <button type='submit' id='diary-save-button'> Save Entry </button>
            <button id='diary-delete-button' onClick={handleDelete}> Delete Entry </button>
          </div>
        </form>
        <FaArrowAltCircleRight className='right-arrow' onClick={() => handlePageChange(1)} />
      </div>
    </div>
  )
}

export default Journal
