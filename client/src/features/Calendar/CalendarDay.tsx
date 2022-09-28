import { render } from '@testing-library/react'
import { useAppSelector } from '../../hooks'

interface CalendarProps {
  date: Date,
  isInTheCurrentMonth: Boolean
}

const CalendarDay = ({date, isInTheCurrentMonth} : CalendarProps) => {
  const currentDate = useAppSelector((state) => state.calendar.currentDate)

// TODO:On initial render, should fetch information from DB. 

  return (
    <div className={`
      calendar-day 
      ${!isInTheCurrentMonth && 'not-current-month-day'}
      ${(currentDate === date.toISOString()) && 'today'}
    `}>
      {`${date.getDate()}`}
      {/* TODO: Need to add three icons (Mood, Activity, Journal).
      If a mood/activity/journal was recorded for that day include  */}
    </div>
  )
}

export default CalendarDay