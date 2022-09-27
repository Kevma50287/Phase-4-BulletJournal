
import React from 'react'
import { Outlet } from 'react-router-dom'
import "./LoginLayout.scss"

const LoginLayout = () => {
  return (
    <div className='flex'>
      <div id='logo-container'>
        <img src='' alt='Logo'/>
      </div>
      <div id="login-container">
        <h1>Welcome to Yumo!</h1>
        <h4>Your personal, light-weight bullet journal, mood tracker, and activity tracker!</h4>
        <div id="form-container">
          <Outlet/>
        </div>
      </div>
    </div>
    
  )
}

export default LoginLayout