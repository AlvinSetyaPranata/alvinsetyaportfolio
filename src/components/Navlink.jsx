import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

function Navlink({ isActive, Activetoogle }) {
    const base_class = " text-xl w-[300px] bg-white rounded-md py-3 px-4 font-bold text-lavender-600"


    const containerRef = useRef()


    function handleClick() {
        console.log(containerRef.current.className.add)
        Activetoogle()
    }


    return (
        <div ref={containerRef} className={`md:hidden ${isActive === "active" ? "navigation active" : "navigation"}`}>
            <div className='relative top-[50%] w-full grid place-items-center gap-y-[30px]'>
                <Link to="/" onClick={() => handleClick()} className={base_class}>Home</Link>
                <Link to="/about" className={base_class} onClick={() => handleClick()}>About</Link>
                <Link to="/projects" className={base_class} onClick={() => handleClick()}>Project</Link>
            </div>
        </div>
    )
}

export default Navlink