import React from 'react'

function CircleLink({url, linkTo}) {
  return (
    <div className='rounded-full w-max md:mr-2 bg-white'>
        <a href={linkTo}>
            <img src={url} className='w-[40px] md:w-[50px]' alt="icon" />
        </a>
    </div>
  )
}

export default CircleLink