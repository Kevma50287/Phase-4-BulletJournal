import { Person, BarChart, Search, CalendarMonth, AutoStories } from '@mui/icons-material'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <div id="header">
      <div className='icon-container'>
        <Link to='/calendar'>
          <CalendarMonth className='header-icon' />
        </Link>
      </div>
      <div className='icon-container'>
        <Search className='header-icon' />
      </div>
      <div className='icon-container'>
        <Link to='/'>
          <AutoStories className='header-icon' />  
        </Link>
      </div>
      <div className='icon-container'>
        <Link to='/stats'>
          <BarChart className='header-icon' /> 
        </Link>
      </div>
      <div className='icon-container'>
        <Link to='/profile'>
          <Person className='header-icon' />  
        </Link>
      </div>
    </div>
  )
}

export default Header