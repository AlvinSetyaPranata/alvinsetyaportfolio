import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "../../components/Navbar"
import Transition from "../../components/Transition";
import Footer from "../../components/Footer";

// fix footer


function Layout() {
  return (
    <div className='container min-w-screen min-h-screen max-h-max max-w-screen'>
        <Navbar />
        <Transition />        
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout