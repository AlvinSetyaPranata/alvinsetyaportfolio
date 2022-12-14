import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'


function Layout() {
  return (
    <div className="min-w-screen h-max">
      <Navbar />
      <Suspense>
        <div className="py-[90px] h-screen max-w-[1024px]">
          <Outlet />
        </div>
      </Suspense>
    </div>
  )
}

export default Layout