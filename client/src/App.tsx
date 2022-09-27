import { Settings } from '@mui/icons-material';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import Layout from './components/Layouts/Layout';
import LoginLayout from './components/Layouts/LoginLayout';
import Calendar from './features/Calendar/Calendar';
import Journal from './features/Journal/Journal';
import LoginPage from './features/UserAuth/LoginPage';
import SignUpPage from './features/UserAuth/SignUpPage';
import store from './store';

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
              <Route path='/user/:username' element={<Layout/>}>
                <Route index element={<Journal/>}/>
                <Route path='journal' element={<Journal/>}/>
                <Route path='calendar' element={<Calendar/>}/>
                <Route path='settings' element={<Settings/>}/>
                {/* TODO: Add statistics */}
                {/* <Route path='stats' element={<Statistics/>}/> */}
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
