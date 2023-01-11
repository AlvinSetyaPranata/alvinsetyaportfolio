import React from 'react'

function Group({ image, name, desc, width=50, height=50 }) {


    return (
        <div className='container px-6 py-4 rounded-md flex gap-x-8 max-w-[600px] items-center'>
            <img src={image} alt="image" className={`flex-shrink-0 flex-grow-0 w-[${width}px] h-[${height}px] aspect-auto`} />                

            <div>
                <h3 className='font-bold text-2xl'>{name}</h3>
                <p className='text-slate-400 text-lg font-semibold mt-2'>{desc}</p>
            </div>
        </div>

        )
}

export default Group