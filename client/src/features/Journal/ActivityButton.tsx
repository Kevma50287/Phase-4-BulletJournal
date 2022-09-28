import React, { useState } from 'react'

interface activityButtonProps {
  image:string
  name:string
}

const ActivityButton = ({image, name}: activityButtonProps) => {
  const [toggleMouseDown, setToggleMouseDown]= useState(false)

  // the once true optional paramater allows the event to only run once before it is removed
  const handleToggleMouseDown = (e:React.MouseEvent) => {
    setToggleMouseDown(e => !e)
    document.addEventListener("mouseup", () => {
      setToggleMouseDown(e => !e)
    }, {once:true})
  }


  // TODO:Set activity function
  
  // const handleSetActivity = (e) => {

  // }

  return (
    <div 
      className={`activity-icon-container ${toggleMouseDown&& "scale-down-center"}`} 
      onMouseDown={(e)=> handleToggleMouseDown(e)}
      draggable={false}
      // onClick={handleSetActivity}
    >
      <img className='activity-icon' draggable={false} src={image} alt='activity icon'/>
    </div>
  )
}

export default ActivityButton