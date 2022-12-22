import React from 'react'

function Navbar({ state, controller }) {

  const svg_base_class = 'p-2 border-[2px] border-lavender-500 rounded-md stroke-lavender-500 con'

  return (
    <div className="w-full flex justify-between items-center p-6 box-border bg-white max-w-[1024px] sticky xl:left-[50%] xl:translate-x-[-50%] z-9">
      <img src="/logo.svg" alt="logo" width={60} />
      <div className={state === "active" ? svg_base_class + "active" : svg_base_class } onClick={() => controller()}>
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