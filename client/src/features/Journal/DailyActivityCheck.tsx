import React from 'react'
import bookAndLamp from '../../images/bookAndLamp.svg'
import foodPlate from '../../images/foodPlate.svg'
import gameController from '../../images/gameController.svg'
import groupFriends from '../../images/groupFriends.svg'
import heart from '../../images/heart.svg'
import musicNote from '../../images/musicNote.svg'
import shoppingBags from '../../images/shoppingBags.svg'
import sleepMoon from '../../images/sleepMoon.svg'
import travelCar from '../../images/travelCar.svg'
import workoutBarbell from '../../images/workoutBarbell.svg'

const DailyActivityCheck = () => {
  const imageSources=[bookAndLamp, foodPlate, gameController, groupFriends, heart, musicNote, shoppingBags, sleepMoon, travelCar, workoutBarbell]
  const imagesArray= imageSources.map((image) => {
    return (
      <div className="activity-icon-container">
        <img className='activity-icon' src={image} alt='activity-icon'/>
      </div>
      
    )
  })
  return (
    <>
      <h3>What did you do today?</h3>
      <div id="all-activities-container">
        {imagesArray}
      </div>
      
    </>
  )
}

export default DailyActivityCheck