import React, { useState } from 'react'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../hooks';
import "./EditProfile.scss"
import { Link } from 'react-router-dom';
import { setUser } from './Slices/userSlice';

export default function EditProfile() {

  const dispatch = useAppDispatch()
  const user = useAppSelector((store) => store.user);

  // handle change function to update objecct way OBJKETJFHRJ

  // handle submit function 
  const [userInfo, setUserInfo] = useState({
    username: user.username,
    password: "",
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    phone_number: user.phone_number,
    profile_picture: user.profile_picture
  })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setUserInfo(
      {
        ...userInfo,
        [name]: value
      }
    )
  }


  // writing patch 

  const editProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    const cookieString = document.cookie.split('jwt=')[1]
    const res = await axios
      .patch(`http://localhost:3000/edit`, userInfo, {
        headers: {
          Authorization: `Bearer ${cookieString}`
        }
      })
    const data = res.data
    if (data) {
      dispatch(setUser(data))
    }


  }

  return (
    <div className='edit-container'>
      <form className='edit-profile-form' name='form' onSubmit={editProfile} >
        <div className='edit-title'>
          Edit Profile
        </div>
        <div className='edit-profile-container'>
          <div className='edit-profile-div'>
            <input
              type="text"
              name="username"
              className='editFormInputs'
              value={userInfo.username}
              placeholder='Username'
              onChange={handleChange}
            />
          </div>
          <div className='edit-profile-div'>
            <input
              type='password'
              name='password'
              className='editFormInputs'
              value={userInfo.password}
              placeholder='Password'
              onChange={handleChange}
            />
          </div>
          <div className='edit-profile-div'>
            <input
              type='email'
              name='email'
              className='editFormInputs'
              value={userInfo.email}
              placeholder='Email'
              onChange={handleChange}
            />
          </div>
          <div className='edit-profile-div'>
            <input
              type='text'
              name='first_name'
              className='editFormInputs'
              value={userInfo.first_name}
              placeholder='First Name'
              onChange={handleChange}
            />
          </div>
          <div className='edit-profile-div'>
            <input
              type='text'
              name='last_name'
              className='editFormInputs'
              value={userInfo.last_name}
              placeholder='Last Name'
              onChange={handleChange}
            />
          </div>
          <div className='edit-profile-div'>
            <input
              type='text'
              name='phone_number'
              className='editFormInputs'
              value={userInfo.phone_number}
              placeholder='Phone Number'
              onChange={handleChange}
            />
          </div>
          <div className='edit-profile-div'>
            <input
              type='text'
              name='profile_picture'
              className='editFormInputs'
              value={userInfo.profile_picture}
              placeholder='Profile picture'
              onChange={handleChange}
            />
          </div>
        </div>
        <br />



        <input className="submit-button" type="submit" value="submit" />
        <br />
        <Link className='back-to-profile' to={`/user/${user.username}/`}>Back to Profile</Link>
      </form>
    </div>
  )
}
