import React, { useState } from 'react'
import axios from 'axios'
import { useAppSelector } from '../hooks';


export default function EditProfile() {


  const user = useAppSelector((store) => store.user);
  
// handle change function to update objecct way OBJKETJFHRJ

// handle submit function 
  const [userInfo, setUserInfo] = useState({...user})
  console.log(userInfo)

// writing patch 
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
