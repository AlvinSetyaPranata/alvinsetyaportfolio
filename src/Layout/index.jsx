import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../components/Navbar"

function Layout() {
  return (
    <div className='container w-full mx-auto h-screen'>
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout