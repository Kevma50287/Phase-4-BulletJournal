import React from 'react'
import LeftPage from './LeftPage'
import RightPage from './RightPage'
import './Journal.scss'

const Journal = () => {
  return (
    <div id="journal">
      <LeftPage />
      <RightPage />
    </div>
  )
}

export default Journal