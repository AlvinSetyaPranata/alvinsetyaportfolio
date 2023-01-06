import React from 'react'

function Decoration() {
  const base_image = "w-[100px] relative "

  return (
    <div className='w-full min-h-[380px]'>
        <img src="decor-1.png" alt="decoration-1" className={base_image + "animate-spin-slow left-[20%] top-[20%]"} />
        <img src="decor-1.png" alt="decoration-1" className={base_image + "animate-spin-slow-reverse left-[28%] top-[20%]"} />
    </div>
  )
}

export default Decoration