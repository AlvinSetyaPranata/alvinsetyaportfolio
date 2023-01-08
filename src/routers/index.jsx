<<<<<<< HEAD
import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../pages/Layout'
// import Home from '../pages/Home'

const Home = lazy(() => import("../pages/Home"))

=======
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
import { Home } from '../pages'
>>>>>>> master

function Routers() {
  return (
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
        </Route>
      </Routes>
=======
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/home' element={<Home />} />
            </Route>
        </Routes>
>>>>>>> master
    </BrowserRouter>
  )
}

export default Routers