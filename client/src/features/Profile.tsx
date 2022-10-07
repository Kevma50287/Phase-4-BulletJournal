import { useState } from 'react'
import { useAppSelector } from '../hooks'
import { Link } from 'react-router-dom';
import "./Profile.scss"
import FriendCard from '../components/FriendCard';


// const modal = useAppSelector((store) => store.modal)

export default function Profile() {
  const user = useAppSelector((store) => store.user);
  const [profile, setProfile] = useState([]);
  console.log(user);

  const friendsArray = user.friends?.map(friend => {
    return (
      <FriendCard friend={friend} />
    )
  })

  return (
    <div className="profile-container">
      <div>
        <h1 className="profile-heading">Your Profile</h1>
      </div>
      <div className='container-for-split'>
        <div className='profile-pic-div'>
          <img className="user-picture-in-profile"
            src='https://a.ltrbxd.com/resized/avatar/upload/6/3/1/3/7/9/4/shard/avtr-0-1000-0-1000-crop.jpg?v=77f97932b5'
            alt="profile"
          />
          <Link className="link-to-edit" to={`/user/${user.username}/edit`}><button className="edit-button">Edit Profile</button></Link>
        </div>
        <div>
          <h1 className='quote-text'> "Dont be lame"
          </h1>
        </div>
        <div>
          <h3 className='quote-text'>Journal prompt of the Day:</h3>
          <h3 className='quote-text'>"What emotions am I holding on to?
            How can I detach or neutralize this emotion? "</h3>
        </div>
        <div className="recently-updated-journals">
          <h2 className="recently-updated-journals">Recently Updated Journals</h2>
        </div>
        <div className='friends-container'>
          <h1 className='friends-heading'>
            Your Friends
          </h1>
          <div className='friends-list'>
            {friendsArray}
          </div>
        </div>
      </div>
    </div>
  );
}
