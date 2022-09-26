import { formControlClasses } from '@mui/material'
import React from 'react'
import { useAppSelector } from '../../hooks'

interface CalendarProps {
  date: Date,
  isInTheCurrentMonth: Boolean
}

const CalendarDay = ({date, isInTheCurrentMonth} : CalendarProps) => {
  const currentDate = useAppSelector((state) => state.calendar.selectedDate)

  return (
    <div className={`
      calendar-day 
      ${!isInTheCurrentMonth && 'not-current-month-day'}
      ${currentDate === date.toISOString().substring(0,10) && 'today'}
    `}>
      {`${date.getDate()}`}
    </div>
  )
}

export default CalendarDay