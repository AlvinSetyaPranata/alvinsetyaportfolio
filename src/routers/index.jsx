import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../pages/Layout'
// import Home from '../pages/Home'

const Home = lazy(() => import("../pages/Home"))


function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers