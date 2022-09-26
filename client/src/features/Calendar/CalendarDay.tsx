import { useAppSelector } from '../../hooks'

interface CalendarProps {
  date: Date,
  isInTheCurrentMonth: Boolean
}

const CalendarDay = ({date, isInTheCurrentMonth} : CalendarProps) => {
  const currentDate = useAppSelector((state) => state.calendar.currentDate)

  return (
    <div className={`
      calendar-day 
      ${!isInTheCurrentMonth && 'not-current-month-day'}
      ${(currentDate === date.toISOString()) && 'today'}
    `}>
      {`${date.getDate()}`}
    </div>
  )
}

export default CalendarDay