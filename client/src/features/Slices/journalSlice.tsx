import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { JournalState } from '../../types/JournalType'

const initialState:JournalState = {
  currentJournal: null,
  journal_entries: []
} 

export const journalSlice = createSlice({
  name: "journal",
  initialState: initialState,
  reducers:{
    setJournalEntries: (state, action:PayloadAction<Object>) => {
      console.log(action)
    }
  }
})

export const {setJournalEntries} = journalSlice.actions

export default journalSlice.reducer