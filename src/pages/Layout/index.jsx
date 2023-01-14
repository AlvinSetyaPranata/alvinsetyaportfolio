import React, { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Navlink from '../../components/Navlink'
import Footer from '../../components/Footer'

function Layout() {

  const [active, setActive] = useState("")

  const activeToggle = () => {
    if (active === "active") {
      setActive("")
    } else {
      setActive("active")
    }
  }


  return (
    <div className="min-w-screen h-max">
      <Navlink isActive={active} Activetoogle={activeToggle} />
      <Navbar state={active} activeController={activeToggle} />
      <Suspense>
        <div
          className='overflow-x-hidden'
        >
          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </div>
  )
}

export default Layout