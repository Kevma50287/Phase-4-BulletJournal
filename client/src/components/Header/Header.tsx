import { Person, CalendarMonth, AutoStories } from '@mui/icons-material'
import './Header.scss'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppSelector } from '../../hooks';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { setJournalEntries } from '../../features/Slices/journalSlice';
import axios from 'axios';

interface HeaderProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  showModal: boolean
}


const Header = ({ setShowModal, showModal }: HeaderProps) => {
  //const [showModal, setShowModal] =  useState(false)


  //useParams to retrieve username for proper routing
  const location = useLocation().pathname
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const username = params.username;
  const currentEntryId = Number(params.journal_entry_id)
  const idToNumber = currentEntryId - 1

  const journalState = useAppSelector(state => state.journal)
  const journalEntries = journalState.journal_entries

  //Get the latest entry
  const currentEntry = journalEntries[idToNumber]


  const areWeAtJournals = (location: string) => {
    const array = location.split("/")
    if (array.includes('journals')) {
      return true
    } else {
      return false;
    }
  };

  const areWeAtJournalEntries = (location: string) => {
    const array = location.split("/")
    if (array.includes('journal_entries')) {
      return true
    } else {
      return false;
    }
  };

  const handleToggle = () => {
    setShowModal(!showModal);
  };
  const handleDelete = async () => {
    if (areWeAtJournalEntries(location)) {
      const cookieString = document.cookie.split('jwt=')[1]
      const res = await axios.delete(
        `http://localhost:3000/journals/${params.journal_id}/journal_entries/${currentEntry.id}`,
        {
          headers: {
            Authorization: `Bearer ${cookieString}`
          }
        }
      )
      const data = res.data.journal_entry
      const filter = journalEntries.filter((entry) => entry.id !== data.id)
      dispatch(setJournalEntries(filter))
    }
  }

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
            <DeleteIcon className="header-icon" onClick={handleDelete} />
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