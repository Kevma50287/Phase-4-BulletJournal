import { Person, BarChart, Search, CalendarMonth, AutoStories } from '@mui/icons-material'
import './Header.scss'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { SetStateAction, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import DeleteIcon from '@mui/icons-material/Delete';

interface HeaderProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  showModal: boolean
}


const Header = ({ setShowModal, showModal }: HeaderProps) => {
  //const [showModal, setShowModal] =  useState(false)


  //useParams to retrieve username for proper routing
  const location = useLocation().pathname
  const navigate = useNavigate()
  const areWeAtJournals = (location: string) => {
    const array = location.split("/")
    if (array.includes('journals')) {
      return true
    } else {
      return false;
    }
  };
  const params = useParams();
  const username = params.username;

  const handleToggle = () => {
    setShowModal(!showModal);
  };

  const handleLogout = () => {
    document.cookie = "jwt= ;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
    navigate('/')
  }

  // conditionally render the journal trash can delete when we are in journals

  return (
    <div className="navbar-div">
      <div className='nav-item-container'>
        <div className="icon-container">
          <Link to={`/user/${username}/calendar`}>
            <CalendarMonth className="header-icon" />
          </Link>
        </div>

        {areWeAtJournals(location) && (
          <div className="icon-container">
            <DeleteIcon className="header-icon" />
          </div>
        )}

        {areWeAtJournals(location) && (
          <div className="icon-container">
            <AddIcon onClick={handleToggle} className="header-icon" />
          </div>
        )}

        <div className="icon-container">
          <Link to={`/user/${username}/journals`}>
            <AutoStories className="header-icon" />
          </Link>
        </div>
        <div className="icon-container">
          <Link to={`/user/${username}/profile`}>
            <Person className="header-icon" />
          </Link>
        </div>
        <div className='icon-container'>
          <LogoutIcon className='header-icon' onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
};

export default Header