import { Settings } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layouts/Layout';
import LoginLayout from './components/Layouts/LoginLayout';
import Calendar from './features/Calendar/Calendar';
import JournalSlider from './features/Journal/JournalSlider';
import LoginPage from './features/UserAuth/LoginPage';
import SignUpPage from './features/UserAuth/SignUpPage';
import JournalEntry from './features/Journal/JournalEntry'
import Profile from './features/Profile'
import { useEffect } from 'react';
import axios from 'axios';
import { setUser } from './features/Slices/userSlice';
import { useAppSelector } from './hooks';

import EditProfile from './features/EditProfile';

import { setCurrentJournalId, setJournalEntries } from './features/Slices/journalSlice';




function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useAppSelector(state => state.user)
  const location = useLocation().pathname

  const getUserProfile = async () => {
    const cookieString = document.cookie.split('jwt=')[1]
    const res = await axios.get('http://localhost:3000/profile', {
      headers: {
        Authorization: `Bearer ${cookieString}`
      }
    })
    const data = res.data
    const primary_journal_id = data.primary_journal_id
    const resEntries = await axios.get(`http://localhost:3000/journals/${primary_journal_id}/journal_entries`, {
      headers: {
        Authorization: `Bearer ${cookieString}`
      }
    })
    const journal_entries = resEntries.data
    dispatch(setJournalEntries(journal_entries))
    dispatch(setCurrentJournalId(primary_journal_id))
    if (data) {
      dispatch(setUser(data))
      if (location === '/' || location === '/login') {
        navigate(`/user/${data.username}/`)
      }
    } else {
      console.log("Error - Invalid Token")
      return false
    }
  }

  useEffect(() => {
    const cookieString = document.cookie.split('jwt=')[1]
    if (cookieString && (user.id === 0)) {
      getUserProfile()
    }
  }, [])

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path="/" element={<LoginLayout />}>
            <Route index element={<LoginPage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='signup' element={<SignUpPage />} />
          </Route>
          {/* TODO: The username routes should only be accessible if the user is logged in */}
          {/* If the user is not logged in then unauthorized should be returned */}
          <Route path='/user/:username' element={<Layout />}>
            <Route index element={<Profile />} />
            <Route path='journals' element={<JournalSlider />} />
            <Route path='journals/:journal_id/journal_entries/:journal_entry_id' element={<JournalEntry />} />
            <Route path='calendar' element={<Calendar />} />
            <Route path='settings' element={<Settings />} />
            {/* TODO: Add statistics and profile */}
            {/* <Route path='stats' element={<Statistics/>}/> */}
            <Route path='profile' element={<Profile />} />
            <Route path='edit' element={<EditProfile />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App
