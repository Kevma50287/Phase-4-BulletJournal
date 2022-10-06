import React from 'react'
import { Outlet } from 'react-router-dom'


interface MainProps {
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>

}

const Main = ({showModal, setShowModal}:MainProps) => {
  return (
    <div>
      <Outlet context={[showModal, setShowModal]}/>
    </div>
  )
}

export default Main