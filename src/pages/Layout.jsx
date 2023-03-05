import React, { Suspense, useState } from 'react'
import Navbar from '@/components/Navbar'
import Navlink from '@/components/Navlink'
import Footer from '@/components/Footer'

function Layout({children}) {

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
      <Suspense fallback="<p>Loading....</p>">
        <div
          className='overflow-x-hidden'
        >
          {children}
        </div>
      </Suspense>
      <Footer />
    </div>
  )
}

export default Layout