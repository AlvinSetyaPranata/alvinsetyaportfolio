import React from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navlink({ isActive }) {
    const loc = useLocation().pathname
    const base_class = " text-xl w-[300px] bg-white rounded-md py-3 px-4 font-bold text-lavender-600"

    const handleClick = () => {
        console.log("Hello worlds")
    }

    return (
        <div className={`md:hidden ${isActive === "active" ? "navigation active" : "navigation"}`}>
            <div className='relative top-[50%] w-full grid place-items-center gap-y-[30px]'>
                <Link to="/" onClick={() => handleClick()} className={base_class}>Home</Link>
                <Link to="/about" className={base_class} onClick={() => handleClick()}>About</Link>
                <Link to="/project" className={base_class}>Project</Link>
            </div>
        </div>
    )
}

export default Navlink