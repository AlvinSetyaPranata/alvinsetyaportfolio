import React from 'react'

function Group({ image, name, desc}) {


    return (
        <div className='container px-6 py-4 rounded-md md:flex gap-8 max-w-[600px] items-center grid place-items-center'>
            <img src={image} alt="image" className='w-[100px] md:w-[60px]' />                

            <div>
                <h3 className='font-bold text-center md:text-left text-2xl'>{name}</h3>
                <p className='text-slate-400 text-center md:text-left text-lg font-semibold mt-2'>{desc}</p>
            </div>
        </div>

        )
}

export default Group