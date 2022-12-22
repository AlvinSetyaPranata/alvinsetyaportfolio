import React, { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Navlink from '../../components/Navlink'
import Footer from '../../components/Footer'

function Layout() {

  const [active, setActive] = useState("")

  const activeToggle = () => {
    console.log(active)
    if (active === "active") {
      setActive("")
    } else {
      setActive("active")
    }
  }

  return (
    <div className="min-w-screen h-max overflow-hidden">
      <Navlink isActive={active}/>
      <Navbar state={active} controller={activeToggle} />
      <Suspense>
        <div className="h-max max-w-[1024px] mx-auto">

          <Outlet />
        </div>
      </Suspense>
      <Footer />
    </div>
  )
}

export default Layout