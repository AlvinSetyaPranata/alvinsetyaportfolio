import React from 'react'
import { Link } from 'react-router-dom'

function CircleLink({url, linkTo}) {
  return (
    <div className='rounded-full p-2 mr-2'>
        <Link to={linkTo} className='w-full h-full'>
            <img src={url} alt="icon" />
        </Link>
    </div>
  )
}

export default CircleLink