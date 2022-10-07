import { render } from '@testing-library/react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { setSelectedDate } from '../Slices/calendarSlice'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useNavigate } from 'react-router-dom';

interface CalendarProps {
  date: Date,
  isInTheCurrentMonth: Boolean
}

const CalendarDay = ({ date, isInTheCurrentMonth }: CalendarProps) => {
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.user)
  const currentDate = useAppSelector((state) => state.calendar.currentDate)
  const selectedDate = useAppSelector((state) => state.calendar.selectedDate)
  const journal_entries = useAppSelector((state) => state.journal.journal_entries)
  const journal_id = useAppSelector((state) => state.journal.currentJournalId)
  const dispatch = useAppDispatch()

  const colorsTable: { [index: string]: string } = {
    depressed: 'depressed-color',
    sad: 'sad-color',
    neutral: 'neutral-color',
    happy: 'happy-color',
    superHappy: 'superHappy-color'
  }

  const entryForThisDay = journal_entries.filter((entry) => {
    const dateObj = new Date(entry.date)
    return dateObj.toDateString() === date.toDateString()
  })

  const index = journal_entries.indexOf(entryForThisDay[0])
  console.log(index)

  const emotion = entryForThisDay[0]?.emotion
  const entry = entryForThisDay[0]?.entry

  const handleGoToEntry = () => {
    navigate(`/user/${user.username}/journals/${journal_id}/journal_entries/${index + 1}`)
  }


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
          `} onClick={handleGoToEntry}>
          {
            entry &&
            <TextSnippetIcon className='text-icon' />
          }
        </div>
      }

    </div>
  )
}

export default CalendarDay