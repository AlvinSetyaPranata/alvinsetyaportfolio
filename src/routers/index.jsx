import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../pages/Home'


function Routers() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers