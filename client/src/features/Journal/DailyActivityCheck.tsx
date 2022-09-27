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
import ActivityButton from './ActivityButton'

const DailyActivityCheck = () => {
  const imageSources=[bookAndLamp, foodPlate, gameController, groupFriends, heart, musicNote, shoppingBags, sleepMoon, travelCar, workoutBarbell]
  const imagesArray= imageSources.map((image) => {
    return (
      <ActivityButton image={image} />
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