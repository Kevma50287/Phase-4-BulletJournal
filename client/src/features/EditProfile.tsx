import React, { useState } from 'react'
import axios from 'axios'
import { useAppSelector } from '../hooks';


export default function EditProfile() {


  const user = useAppSelector((store) => store.user);
  
// handle change function to update 

// handle submit function 
  const [userInfo, setUserInfo] = useState({...user})
  console.log(userInfo)

// writing patch 
const editProfile = async () => {
const res = await axios
        .patch(`http://localhost:5000/user/${userInfo.username}/edit`, {
            headers: { 
                Authorization: `Bearer ${localStorage.getItem('jwt')}` 
            },
            body: JSON.stringify(userInfo)
        })
    console.log(res);


    }

  return (
    <div>EditProfile
        <form name='form' >
            {/* input value={userInfo.first_name} */}
            <input

            >
            </input>
        </form>
    </div>
  )
}
