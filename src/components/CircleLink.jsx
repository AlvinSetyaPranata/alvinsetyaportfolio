import React from 'react'

function CircleLink({url, linkTo}) {
  return (
    <div className='rounded-full p-2 md:mr-2'>
        <a href={linkTo} className='w-full h-full'>
            <img src={url} alt="icon" />
        </a>
    </div>
  )
}

export default CircleLink