import { Person, BarChart, Search, CalendarMonth, AutoStories } from '@mui/icons-material'
import './Header.scss'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  //useParams to retrieve username for proper routing
  const params = useParams()
  const username = params.username
  return (
    <div id="header">
      <div className='icon-container'>
        <Link to={`/user/${username}/calendar`}>
          <CalendarMonth className='header-icon' />
        </Link>
      </div>
      <div className='icon-container'>
        <Search className='header-icon' />
      </div>
      <div className='icon-container'>
        <Link to={`/user/${username}/journal`}>
          <AutoStories className='header-icon' />  
        </Link>
      </div>
      <div className='icon-container'>
        <Link to={`/user/${username}/stats`}>
          <BarChart className='header-icon' /> 
        </Link>
      </div>
      <div className='icon-container'>
        <Link to={`/user/${username}/profile`}>
          <Person className='header-icon' />  
        </Link>
      </div>
    </div>
  )
}

export default Header