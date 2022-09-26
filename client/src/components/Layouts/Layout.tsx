import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Calendar from '../../features/Calendar/Calendar'
import Journal from '../../features/Journal/Journal'
import Settings from '../../features/Settings/Settings'
import Header from '../Header/Header'
import Main from '../Main/Main'

const Layout = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}>
          <Route index element={<Journal/>}/>
          <Route path='calendar' element={<Calendar/>}/>
          <Route path='settings' element={<Settings/>}/>
        </Route>
      </Routes>
      
    </div>
  )
}

export default Layout