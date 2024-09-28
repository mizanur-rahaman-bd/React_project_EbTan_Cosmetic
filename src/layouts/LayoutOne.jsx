import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'

const LayoutOne = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    
    
    </>
  )
}

export default LayoutOne