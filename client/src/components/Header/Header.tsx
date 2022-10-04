import { Person, BarChart, Search, CalendarMonth, AutoStories } from '@mui/icons-material'
import './Header.scss'
import { Link, useLocation, useParams } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
  //useParams to retrieve username for proper routing
  const params = useParams()
  const username = params.username
  const paramJournalId = params.journal_id
  console.log(paramJournalId)
  return (
    <div id="header">
      <div className='icon-container'>
        <Link to={`/user/${username}/calendar`}>
          <CalendarMonth className='header-icon' />
        </Link>
      </div>
      <div className='icon-container'>
        <Link to={``}>
          <AddIcon className='header-icon' />
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