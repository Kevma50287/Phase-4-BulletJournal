import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  //States
  const initialLoginState = {
    username: "",
    password: ""
  }
  const[loginCredentials,setLoginCredentials] = useState(initialLoginState)
  const navigate = useNavigate()

  //Handlers
  const handleLoginCredentials = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const{name,value} = e.target
    setLoginCredentials(
        {...loginCredentials,
        [name]:value}
    )
  }

  const navigateToSignup = () => {
    navigate('/signup')
  }

  const handleLoginSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <h5>Please login:</h5>
      <form id="login-form" onSubmit={e => handleLoginSubmit(e)}>
          <div>
            <input 
              type='text'
              name='username'
              className='authFormInputs'
              value={loginCredentials.username}
              placeholder='Username'
              onChange={handleLoginCredentials}
            />
          </div>
          <div>
            <input 
              type='text'
              name='username'
              className='authFormInputs'
              value={loginCredentials.password }
              placeholder='Password'
              onChange={handleLoginCredentials}
            />
          </div>
          <button type='submit'>Login</button>
          <h5 className="authButton" onClick={navigateToSignup}><u>Sign Up Here</u></h5>
        </form>
    </>
        
  )
}

export default LoginPage