import { AnimatePresence } from 'framer-motion'
import React, { lazy } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from '../pages/Layout'

const Home = lazy(() => import("../pages/Home"))
const About = lazy(() => import("../pages/About"))
const Projects = lazy(() => import("../pages/Projects"))

function Routers() {

  const location = useLocation()

  return (
      <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
      </AnimatePresence>
  )
}

export default Routers