import React, { lazy } from 'react'
import { Routes, Route, HashRouter } from 'react-router-dom'
import Layout from '../pages/Layout'

const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const Projects = lazy(() => import("../pages/Projects"))

function Routers() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default Routers