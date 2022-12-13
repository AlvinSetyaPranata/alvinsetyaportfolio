import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../Layout'
import { Home } from '../pages'

function Routers() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path='/home' element={<Home />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers