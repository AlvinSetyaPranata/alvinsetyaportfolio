import React from 'react'
import { Link } from 'react-router-dom'

function Navlink({ isActive, Activetoogle }) {
    const base_class = " text-xl w-[300px] bg-white rounded-md py-3 px-4 font-bold text-lavender-600"


    return (
        <div className={`md:hidden ${isActive === "active" ? "navigation active" : "navigation"}`}>
            <div className='relative top-[50%] w-full grid place-items-center gap-y-[30px]'>
                <Link to="/" onClick={() => Activetoogle()} className={base_class}>Home</Link>
                <Link to="/about" className={base_class} onClick={() => Activetoogle()}>About</Link>
                <Link to="/projects" className={base_class} onClick={() => Activetoogle()}>Project</Link>
            </div>
        </div>
    )
}

export default Navlink