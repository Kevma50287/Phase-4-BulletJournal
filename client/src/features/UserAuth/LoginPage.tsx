import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { useAppDispatch } from '../../hooks'
import { setUser } from '../Slices/userSlice'

const LoginPage = () => {
  //States
  const initialLoginState = {
    username: "",
    password: ""
  }
  const[loginCredentials,setLoginCredentials] = useState(initialLoginState) /* "" */
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

<<<<<<< HEAD
  //UseEffects

  useEffect (() => {
    //Saves the fetch data to state
    const getUserProfile = async () => {
      const res = await axios.get('http://localhost:3000/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('jwt')}`
        }
      })
      const data = res.data
      if (data){
        dispatch(setUser(data))
        console.log(data)
        navigate(`/user/${data.username}/`)
      } else {
        console.log("Error - Invalid Token")
        return false
      }
    }
    //If nil is not returned then it was successful, and state has been updated
    getUserProfile()
  }, [])

=======
>>>>>>> JournalEntries
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

  const handleLoginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3000/login', {user:loginCredentials}, {
        headers: {
          'Content-Type':'application/json'
        }
      })
      // If response is accepted then we store the token to local storage
      if (response.status === 202){
        const data = response.data
        const jsonWebToken = data.jwt
        const user = data.user
        const journals = data.journals
        const userObj = {...user, journals:journals}
        dispatch(setUser(userObj))
        localStorage.setItem("jwt", jsonWebToken)
        navigate(`/user/${user.username}/`)
      }
    } catch (err:any) {
      //If there's an error we throw a window alert
      const response = err.response
      const error = response.data.message
      alert(error)
    }
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
              type='password'
              name='password'
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