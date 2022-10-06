import React, { useState } from 'react'
import axios from 'axios'
import { useAppSelector } from '../hooks';
import "./EditProfile.scss"
import { Link } from 'react-router-dom';

export default function EditProfile() {


  const user = useAppSelector((store) => store.user);
  
// handle change function to update objecct way OBJKETJFHRJ

// handle submit function 
  const [userInfo, setUserInfo] = useState({
    username: "",
    password : "",
    first_name : "",
    last_name : "",
    email : "",
    phone_number: ""

  })
  console.log(userInfo)
  

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
const{name,value} = e.target 
setUserInfo(
    {...userInfo,
    [name]:value}
)
}


// writing patch 

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
};

const editProfile = async () => {
  const cookieString = document.cookie.split('jwt=')[1]
const res = await axios
        .patch(`http://localhost:5000/user/${userInfo.username}/edit`, userInfo, {
            headers: { 
                Authorization: `Bearer ${cookieString}` 
            }
        })
    console.log(res);


    }

  return (
    <div className='edit-container'>
        <form className='edit-profile-form' name='form' onSubmit={e => handleSubmit(e)} >
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
              value={userInfo.password }
              placeholder='Password'
              onChange={handleChange}
            /> 
            </div>
            <div className='edit-profile-div'>
             <input 
            type='email'
              name='email'
              className='editFormInputs'
              value={userInfo.email }
              placeholder='Email'
              onChange={handleChange}
            /> 
            </div>
            <div className='edit-profile-div'>
             <input 
            type='text'
              name='first_name'
              className='editFormInputs'
              value={userInfo.first_name }
              placeholder='First Name'
              onChange={handleChange}
            /> 
            </div>
            <div className='edit-profile-div'>
             <input 
            type='text'
              name='last_name'
              className='editFormInputs'
              value={userInfo.last_name }
              placeholder='Last Name'
              onChange={handleChange}
            /> 
            </div>
            <div className='edit-profile-div'>
             <input 
            type='text'
              name='phone_number'
              className='editFormInputs'
              value={userInfo.phone_number }
              placeholder='Phone Number'
              onChange={handleChange}
            /> 
            </div>
            </div>
            <br/>
	
	
	
				<input className="submit-button" type="submit" value="submit" />
				<br/>
				<Link className='back-to-profile' to={`/user/${user.username}/`}>Back to Profile</Link> 
        </form>
    </div>
  )
}
