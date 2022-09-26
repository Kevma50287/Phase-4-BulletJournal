import React from 'react'
import DailyActivityCheck from './DailyActivityCheck'
import DailyEmotionCheck from './DailyEmotionCheck'

const LeftPage = () => {
  return (
    <div id='leftpage'>
      <DailyEmotionCheck/>
      <DailyActivityCheck/>
    </div>
  )
}

export default LeftPage