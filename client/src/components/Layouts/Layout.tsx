import Header from '../Header/Header'
import Main from '../Main/Main'
import { useState } from 'react'

const Layout = () => {

  const [showModal, setShowModal] =  useState(false)

  return (
    <div>
      <Header showModal={showModal} setShowModal={setShowModal}/>
      <Main setShowModal={setShowModal} showModal={showModal}/>
    </div>
  )
}

export default Layout