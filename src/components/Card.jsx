import React from 'react'

function Card({ url, title, date }) {
  return (
    <div className='bg-white rounded-lg max-w-[400px] max-h-[300px] relative z-10'>
      <img src={url} alt="sheetwriter" className='w-full' />
      <div className='bg-slate-800 absolute w-full h-full inset-0 text-center grid place-items-center opacity-0 hover:opacity-70 opacity-trans'>
        <div className='grid gap-y-2'>
          <p className='text-white text-xl font-bold'>{title}</p>
          <span className='text-white'>{date}</span>
        </div>
      </div>

    </div>
  )
}

export default Card