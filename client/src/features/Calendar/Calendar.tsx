import './Calendar.scss'
import { useAppSelector, useAppDispatch } from '../../hooks'
import { decrementSelectedDateMonth, decrementSelectedDateYear, incrementSelectedDateMonth, incrementSelectedDateYear } from '../Slices/calendarSlice'
import { v4 as uuid } from 'uuid'
import CalendarDay from './CalendarDay'
import { loadPlugin } from 'immer/dist/internal'

const Calendar = () => {
  const dispatch = useAppDispatch()

  //Store the currentDate and selectedDate freom the store
  const currentDate = useAppSelector((state) => state.calendar.currentDate)
  const selectedDate = useAppSelector((state) => state.calendar.selectedDate)

  //Array of months and days. Will retrieve value at index selectedMonth
  const daysArr = ['Sun', 'Mon', 'Tue','Wed', 'Thu', 'Fri', 'Sat']
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]

  
  //Create dateObj for today and retrieve month and year for calendar header
  const dateObj = new Date(selectedDate)
  const selectedMonth = dateObj.getMonth()
  const selectedYear = dateObj.getFullYear()

  //Create a date object for the First and Last Day of the Month
  const firstDayOfTheMonth:number = new Date(dateObj.getFullYear(), dateObj.getMonth(), 1).getDay()
  const numberOfDaysInTheMonth:number = new Date(dateObj.getFullYear(), dateObj.getMonth() + 1, 0).getDate()


  // TODO: To Refactor later so that we aren't crating 42 new elements everytime. 
  // We should be able to just change the content of each one after
  // setting an initial array of 42 objects

  const getCalendarDays = (firstDayOfTheMonth:number, numberOfDaysInTheMonth:number) => {
    let daysArr = []

    //Creates CalendarDays for the previous month that shows in current month
    for (let i = firstDayOfTheMonth - 1; i > -1 ; i--) {
      let prevMonthDateObj = new Date(selectedDate)
      prevMonthDateObj.setDate(i * -1)
      daysArr.push(<CalendarDay key={uuid()} date={prevMonthDateObj} isInTheCurrentMonth={false} />)
    }

    //Create CalendarDays for the current month
    for (let i = 0; i < numberOfDaysInTheMonth ; i++) {
      let currMonthDateObj = new Date(selectedDate)
      currMonthDateObj.setDate(i+1)
      daysArr.push(<CalendarDay key={uuid()} date={currMonthDateObj} isInTheCurrentMonth={true} />)
    }

    //Create CalendarDays for remaining calendar days
    const daysLeftToRender = 42 - daysArr.length
    for (let i = 0; i < daysLeftToRender; i++) {
      let nextMonthDateObj = new Date(selectedYear, selectedMonth + 1, 1 + i)
      daysArr.push(<CalendarDay key={uuid()} date={nextMonthDateObj} isInTheCurrentMonth={false} />)
    }
    return daysArr
  }

  const displayArrayOfDays = getCalendarDays(firstDayOfTheMonth, numberOfDaysInTheMonth)

  return (
    <div id="calendar-container" >
      {/* Section above CalendarBody creates the header */}
      <div className='calendar-button' onClick={e => dispatch(decrementSelectedDateYear())}>{"<<"}</div>
      <div className='calendar-button' onClick={e => dispatch(decrementSelectedDateMonth())}>{"<"}</div>
      <div id='calendar-header-month-and-year'> {`${monthNames[selectedMonth]} ${selectedYear}`} </div>
      <div className='calendar-button' onClick={e => dispatch(incrementSelectedDateMonth())}>{">"}</div>
      <div className='calendar-button' onClick={e => dispatch(incrementSelectedDateYear())}>{">>"}</div>
      {daysArr.map((day) => {
        let unique = uuid()
        return (
          <div key={unique} className="days-of-the-week">
            {day}
          </div>
        )
      })}
      {displayArrayOfDays}
    </div>
  )
}

export default Calendar