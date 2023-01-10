import React, { lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from '../pages/Layout'

const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const Projects = lazy(() => import("../pages/Projects"))

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Routers