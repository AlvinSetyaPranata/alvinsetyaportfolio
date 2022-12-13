import React from 'react'

function Navbar() {
  return (
    <div className="absolute w-full bg-blue-500 flex justify-between items-center px-4 py-6 box-border">
      <div>
        <img src="/logo.svg" alt="logo" width={50}/>
      </div>

      <div className='p-2 bg-red-500'>
        <svg viewBox='-10 -10 120 100' width={40} fill="none">
          <path d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 25 v 70" strokeLinejoin='round' strokeLinecap='round' strokeWidth={20} stroke="black"></path>
        </svg>
      </div>
    </div>
  )
}

export default Navbar