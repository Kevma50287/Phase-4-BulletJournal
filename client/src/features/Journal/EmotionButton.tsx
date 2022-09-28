import React, { useState } from 'react'

interface emotionButtonProps {
  image:string
  setEmotion:Function
  currentEmotion:string
}

const EmotionButton = ({image, setEmotion, currentEmotion}: emotionButtonProps) => {
  const [toggleMouseDown, setToggleMouseDown]= useState(false)

  // the once true optional paramater allows the event to only run once before it is removed
  const handleToggleMouseDown = (e:React.MouseEvent) => {
    setToggleMouseDown(e => !e)
    document.addEventListener("mouseup", () => {
      setToggleMouseDown(e => !e)
    }, {once:true})
  }

  const condition = image.split(".")[0].split("/").pop()?.split("Panda")[0]

  return (
    <div 
      className={`
        emotion-icon-container 
        ${toggleMouseDown&& "scale-down-center"}
        ${(currentEmotion === condition)&& "button-selected"}
      `} 
      onMouseDown={(e)=> handleToggleMouseDown(e)}
      draggable={false}
      onClick={(e) => setEmotion(condition)}
    >
      <img className='emotion-icon' draggable={false} src={image} alt='depressed panda'/>
    </div>
  )
}

export default EmotionButton