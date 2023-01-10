import React from 'react'

function CardSkills({ url, name, desc, reversed = false }) {
    return (
        <div className={`flex justify-evenly w-full items-center ${reversed ? 'flex-row-reverse' : ''}`}>
            <div className='img-scale-wrapper'>
                <img src={url} alt="image" className='w-[400px] rounded-md' />
            </div>

            <div className={`${reversed ? 'text-right' : ''}`}>
                <h3 className='text-3xl font-bold'>{name}</h3>
                <p className='text-xl font-semibold'>{desc}</p>
                <button className='mt-12 px-6 py-4 bg-lavender-600 rounded-md text-white font-semibold'>View projects</button>
            </div>
        </div>
    )
}

export default CardSkills