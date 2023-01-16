import { motion } from 'framer-motion'
import React from 'react'
import { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navlink({ isActive, Activetoogle }) {


    const containerRef = useRef()

    const currentLoc = useLocation()

    const baseClass = 'text-xl w-[300px] bg-lavender-600 border-white border-2 rounded-md py-3 px-4 font-bold text-white hover:translate-x-[20px] hover:transition-all hover:duration-300 hover:ease-in transition-transform duration-300 ease-out'
    
    const activeClass = 'text-xl w-[300px] bg-white rounded-md py-3 px-4 font-bold text-lavender-600 transition-transform duration-300 ease-out transition-transform duration-300 ease-out'



    function handleClick() {
        console.log(containerRef.current.className.add)
        Activetoogle()
    }

    function getState(loc) {
        console.log(currentLoc.pathname, loc)
        if (currentLoc.pathname === loc) {
            return activeClass
        } else {
            return baseClass
        }
    }


    return (
        <div ref={containerRef} className={`md:hidden bg-lavender-600 h-screen w-full fixed z-20 ${isActive === "active" ? "translate-y-0 opacity-1 transition-all ease-in duration-500" : "translate-y-[-100%] opacity-0 transition-all ease duration-500"}`}>
            <div className='relative top-[50%] w-full grid place-items-center gap-y-[30px]'>
                <Link to="/" onClick={() => handleClick()} className={getState('/')}>Home</Link>
                <Link to="/about" className={getState('/about')} onClick={() => handleClick()}>About</Link>
                <Link to="/projects" className={getState('/projects')} onClick={() => handleClick()}>Project</Link>
            </div>
        </div>
    )
}

export default Navlink