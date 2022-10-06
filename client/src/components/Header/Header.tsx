import { Person, BarChart, Search, CalendarMonth, AutoStories } from '@mui/icons-material'
import './Header.scss'
import { Link, useLocation, useParams } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import { SetStateAction, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';

interface HeaderProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  showModal: boolean
}


const Header = ({setShowModal, showModal}:HeaderProps) => {
//const [showModal, setShowModal] =  useState(false)


  //useParams to retrieve username for proper routing
  const dispatch = useAppDispatch()
  const modalState = useAppSelector(state => state.modal)
  const location = useLocation().pathname
  const areWeAtJournals = (location:string) => {
    const array = location.split("/")
    if (array.includes('journals')){
      return true
    } else {
      return false
    }
  }
  const params = useParams()
  const username = params.username
  
  const handleToggle = () => {
    setShowModal(!showModal)
  
  
  }

  

    return(
      <div id="header">
        <div className='icon-container'>
          <Link to={`/user/${username}/calendar`}>
            <CalendarMonth className='header-icon' />
          </Link>
        </div>
        <div className='icon-container'>
        { areWeAtJournals(location) && <AddIcon className='header-icon'
        onClick={handleToggle} 
        />  }
       </div>
        <div className='icon-container'>
          <Search className='header-icon' />
        </div>
        <div className='icon-container'>
          <Link to={`/user/${username}/journals`}>
            <AutoStories className='header-icon' />  
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