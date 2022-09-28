import React, { useState } from 'react'

interface emotionButtonProps {
  image:string
}

const EmotionButton = ({image}: emotionButtonProps) => {
  const [toggleMouseDown, setToggleMouseDown]= useState(false)

  // the once true optional paramater allows the event to only run once before it is removed
  const handleToggleMouseDown = (e:React.MouseEvent) => {
    setToggleMouseDown(e => !e)
    document.addEventListener("mouseup", () => {
      setToggleMouseDown(e => !e)
    }, {once:true})
  }

  const condition = image.split(".")[0].split("/").pop()?.split("Panda")[0]
  const handleSelect = (e:React.MouseEvent) => {
    
  }

  return (
    <div 
      className={`emotion-icon-container ${toggleMouseDown&& "scale-down-center"}`} 
      onMouseDown={(e)=> handleToggleMouseDown(e)}
      draggable={false}
      onClick={(e) => handleSelect(e)}
    >
      <img className='emotion-icon' draggable={false} src={image} alt='depressed panda'/>
    </div>
  )
}

export default EmotionButton