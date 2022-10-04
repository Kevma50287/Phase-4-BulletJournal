import { Settings } from '@mui/icons-material';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layouts/Layout';
import LoginLayout from './components/Layouts/LoginLayout';
import Calendar from './features/Calendar/Calendar';
import JournalSlider from './features/Journal/JournalSlider';
import { JournalSliderData } from './features/Journal/JournalSliderData';
import LoginPage from './features/UserAuth/LoginPage';
import SignUpPage from './features/UserAuth/SignUpPage';
import store from './store';
import JournalEntry from './features/Journal/JournalEntry'


function App() {
  return (
    <Provider store={store} >
      <BrowserRouter>
        <div className="App">
          <div>
            <Routes>
              <Route path="/" element={<LoginLayout/>}>
                <Route index element={<LoginPage/>}/>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='signup' element={<SignUpPage/>}/>
              </Route>
              {/* TODO: The username routes should only be accessible if the user is logged in */}
              {/* If the user is not logged in then unauthorized should be returned */}
              <Route path='/user/:username' element={<Layout/>}>
                <Route index element={<JournalSlider/>}/>
                <Route path='journals' element={<JournalSlider/>}> 
                </Route>
                <Route path='journals/:journal_id/journal_entries/:journal_entry_id' element={<JournalEntry/>}/>
                <Route path='calendar' element={<Calendar/>}/>
                <Route path='settings' element={<Settings/>}/>
                {/* TODO: Add statistics and profile */}
                {/* <Route path='stats' element={<Statistics/>}/> */}
                {/* <Route path='profile' element={<Profile/>}/> */}
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
