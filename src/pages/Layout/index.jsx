import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../../components/Navbar'


function Layout() {
  return (
    <div className="min-w-screen h-max bg-red-500">
        <Navbar />
        <Outlet />
    </div>
  )
}

export default Layout