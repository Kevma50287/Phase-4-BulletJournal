import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CalendarState } from '../../types/CalendarType';

const dateObj = new Date();
const currentDate = dateObj.toISOString()
const currentDateOnlyDateFormat = currentDate.substring(0, 10)

const initialState:CalendarState = {
  currentDate: currentDateOnlyDateFormat,
  selectedDate: currentDateOnlyDateFormat
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
      state.selectedDate = incrementedNewDateObj.toISOString().substring(0, 10)
    },
    decrementSelectedDateMonth:(state) => {
      const newDateObj = new Date(state.selectedDate)
      const decrementedNewDateObj = new Date(newDateObj.setMonth(newDateObj.getMonth() - 1))
      state.selectedDate = decrementedNewDateObj.toISOString().substring(0, 10)
    },
    incrementSelectedDateYear:(state) => {
      const newDateObj = new Date(state.selectedDate)
      const incrementedNewDateObj = new Date(newDateObj.setFullYear(newDateObj.getFullYear() + 1))
      state.selectedDate = incrementedNewDateObj.toISOString().substring(0, 10)
    },
    decrementSelectedDateYear:(state) => {
      const newDateObj = new Date(state.selectedDate)
      const decrementedNewDateObj = new Date(newDateObj.setFullYear(newDateObj.getFullYear() - 1))
      state.selectedDate = decrementedNewDateObj.toISOString().substring(0, 10)
    },
  },
})

export const {setSelectedDate, incrementSelectedDateMonth, incrementSelectedDateYear, 
  decrementSelectedDateMonth, decrementSelectedDateYear} = calendarSlice.actions
export default calendarSlice.reducer
