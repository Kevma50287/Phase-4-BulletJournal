import React, { useState } from 'react'

interface activityButtonProps {
  image:string
  name:string
  setActivities:Function
  currentActivities:{[key:string]:boolean}
}

const ActivityButton = ({image, name, setActivities, currentActivities}: activityButtonProps) => {
  const [toggleMouseDown, setToggleMouseDown]= useState(false)

  // the once true optional paramater allows the event to only run once before it is removed
  const handleToggleMouseDown = (e:React.MouseEvent) => {
    setToggleMouseDown(e => !e)
    document.addEventListener("mouseup", () => {
      setToggleMouseDown(e => !e)
    }, {once:true})
  }

  return (
    <div 
      className={`
        activity-icon-container 
        ${toggleMouseDown&& "scale-down-center"}
        ${currentActivities[`${name}`]&& "button-selected"}
      `} 
      onMouseDown={(e)=> handleToggleMouseDown(e)}
      draggable={false}
      onClick={e => setActivities(name)}
    >
      <img className='activity-icon' draggable={false} src={image} alt='activity icon'/>
    </div>
  )
}

export default ActivityButton