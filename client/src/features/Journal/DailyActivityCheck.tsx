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

interface ActivityCheckProps {
  setActivities: Function
  currentActivities: {[key:string]:boolean}
}

const DailyActivityCheck = ({setActivities, currentActivities}:ActivityCheckProps) => {
  const imageSources=[
    {[bookAndLamp]:"study"}, 
    {[foodPlate]:"dining"}, 
    {[gameController]:'gaming'}, 
    {[groupFriends]: 'friends'}, 
    {[heart]: 'dating'}, 
    {[musicNote]: 'music'}, 
    {[shoppingBags]:'shopping'}, 
    {[sleepMoon]:'nap'}, 
    {[travelCar]:'travel'}, 
    {[workoutBarbell]:'workout'}
  ]
  
  const imagesArray= imageSources.map((image) => {
    const key = Object.keys(image)[0]
    const value = image[key]
    return (
      <ActivityButton image={key} name={value} setActivities={setActivities} currentActivities={currentActivities} />
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