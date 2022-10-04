import React, { useEffect , useState} from 'react'
import { useAppSelector} from '../hooks'



export default function Profile() {
    const user = useAppSelector(store => store.user)
    const [profile, setProfile] = useState([])
    console.log(user)
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     fetch(``)
    //     .then(res => res.json())
    //     .then(user => {})
    // })



  return (
    <div>Profile</div>
  )
}
