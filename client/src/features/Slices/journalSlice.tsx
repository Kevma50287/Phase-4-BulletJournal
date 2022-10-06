import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { JournalState } from '../../types/JournalType'

const initialState:JournalState = {
  currentJournalId: 0,
  journal_entries: []
} 

export const journalSlice = createSlice({
  name: "journal",
  initialState: initialState,
  reducers:{
    setJournalEntries: (state, action:PayloadAction<Array<Object>>) => {
      state.journal_entries = action.payload
    },
    setCurrentJournalId: (state, action: PayloadAction<number>) => {
      state.currentJournalId = action.payload
    },
  }
})

export const {setJournalEntries, setCurrentJournalId} = journalSlice.actions

export default journalSlice.reducer