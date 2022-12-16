import React from 'react'

function Navbar() {
  return (
    <div className="mx-auto w-full flex justify-between items-center p-6 box-border bg-white max-w-[1024px]">
      <img src="/logo.svg" alt="logo" width={60} />

      <div className='p-2 border-[3px] border-lavender-500 con rounded-md stroke-lavender-500'>
        <svg viewBox='0 -10 100 100' fill="none">
          <path d="m 20 20 h 60 " className="ham-path-1"></path>
          <path d="m 20 40 h 60 " className="ham-path-2"></path>
          <path d="m 20 60 h 60 " className="ham-path-3"></path>

        </svg>
      </div>
    </div>
  )
}

export default Navbar