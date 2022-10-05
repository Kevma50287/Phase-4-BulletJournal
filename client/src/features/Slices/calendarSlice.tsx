import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CalendarState } from '../../types/CalendarType';

//Dates saved as an ISOString
const currentDate = new Date().toISOString()

const initialState:CalendarState = {
  currentDate: currentDate,
  selectedDate: currentDate
}


//TODO: To refactor increment and decrement
export const calendarSlice = createSlice({
  name: "calendar",
  initialState: initialState,
  reducers:{
    setSelectedDate: (state, action: PayloadAction<string>) => {
      state.selectedDate = action.payload  
    },
    incrementSelectedDateMonth:(state) => {
      const newDateObj = new Date(state.selectedDate)
      const incrementedNewDateObj = new Date(newDateObj.setMonth(newDateObj.getMonth() + 1))
      state.selectedDate = incrementedNewDateObj.toISOString()
    },
    decrementSelectedDateMonth:(state) => {
      const newDateObj = new Date(state.selectedDate)
      const decrementedNewDateObj = new Date(newDateObj.setMonth(newDateObj.getMonth() - 1))
      state.selectedDate = decrementedNewDateObj.toISOString()
    },
    incrementSelectedDateYear:(state) => {
      const newDateObj = new Date(state.selectedDate)
      const incrementedNewDateObj = new Date(newDateObj.setFullYear(newDateObj.getFullYear() + 1))
      state.selectedDate = incrementedNewDateObj.toISOString()
    },
    decrementSelectedDateYear:(state) => {
      const newDateObj = new Date(state.selectedDate)
      const decrementedNewDateObj = new Date(newDateObj.setFullYear(newDateObj.getFullYear() - 1))
      state.selectedDate = decrementedNewDateObj.toISOString()
    },
  },
})

export const {setSelectedDate, incrementSelectedDateMonth, incrementSelectedDateYear, 
  decrementSelectedDateMonth, decrementSelectedDateYear} = calendarSlice.actions

export default calendarSlice.reducer
