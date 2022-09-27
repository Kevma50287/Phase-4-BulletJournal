import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  //States
  const initialSignUpState = {
    username: "",
    password: "",
    password_confirmation:""
  }
  const[signUpCredentials,setSignUpCredentials] = useState(initialSignUpState)
  const navigate = useNavigate()

  //Handlers
  const handleSignUpCredentials = (e: React.ChangeEvent<HTMLInputElement>)=>{
    const{name,value} = e.target
    setSignUpCredentials(
        {...signUpCredentials,
        [name]:value}
    )
  }

  const navigateToLogin = () => {
    navigate('/login')
  }

  return (
    <>
        <h5>Please SignUp:</h5>
        <form id="signUp-form">
          <div>
            <input 
              type='text'
              name='username'
              className='authFormInputs'
              value={signUpCredentials.username}
              placeholder='Username'
              onChange={handleSignUpCredentials}
            />
          </div>
          <div>
            <input 
              type='text'
              name='password'
              className='authFormInputs'
              value={signUpCredentials.password }
              placeholder='Password'
              onChange={handleSignUpCredentials}
            />
          </div>
          <div>
            <input 
              type='text'
              name='password_confirmation'
              className='authFormInputs'
              value={signUpCredentials.password_confirmation }
              placeholder='Confirm Password'
              onChange={handleSignUpCredentials}
            />
          </div>
          <button type='submit'>SignUp</button>
          <h5 className="authButton" onClick={navigateToLogin}><u>Go to Login</u></h5>
        </form>
  </>
  )
  }
export default SignUpPage