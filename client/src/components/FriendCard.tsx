import { Friend } from "../types/UserType"

interface friendCardProps {
  friend: any
}

const FriendCard = ({ friend }: friendCardProps) => {
  return (
    <img className="friends-image" src={friend.profile_picture} alt="profile pic" />
  )
}

export default FriendCard