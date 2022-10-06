import { render } from '@testing-library/react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setSelectedDate } from '../Slices/calendarSlice'

interface CalendarProps {
  date: Date,
  isInTheCurrentMonth: Boolean
}

const CalendarDay = ({date, isInTheCurrentMonth} : CalendarProps) => {
  const currentDate = useAppSelector((state) => state.calendar.currentDate)
  const selectedDate = useAppSelector((state) => state.calendar.selectedDate)
  const journal_entries = useAppSelector((state) => state.journal.journal_entries)
  const dispatch = useAppDispatch()
  
  const colorsTable:{[index:string]:string} = {
    depressed: 'depressed-color',
    sad: 'sad-color',
    neutral:'neutral-color',
    happy:'happy-color',
    superHappy:'superHappy-color'
  }

  const entryForThisDay = journal_entries.filter((entry) => {
    const dateObj = new Date(entry.date)
    return dateObj.toDateString() === date.toDateString()
  })

  

  const emotion = entryForThisDay[0]?.emotion
  const entry = entryForThisDay[0]?.entry
  
  

// TODO:On initial render, should fetch information from DB

  return (
    <div className={`
      calendar-day 
      ${!isInTheCurrentMonth && 'not-current-month-day'}
      ${(currentDate === date.toISOString()) && 'today'}
      ${(selectedDate === date.toISOString()) && 'selected-day'}
    `}
      onClick={e => dispatch(setSelectedDate(date.toISOString()))}
    >
      {`${date.getDate()}`}
      {/* TODO: Need to add three icons (Mood, Activity, Journal).
      If a mood/activity/journal was recorded for that day include  */}
        {emotion && 
          <div className={`
            ${emotion && `${colorsTable[emotion]}`}
            mood-circle
          `}>
          </div>
        }
      
    </div>
  )
}

export default CalendarDay