import React from 'react'

function Group({ url, desc, names }) {
    return (
        <div className='bg-white py-7 px-2 grid gap-y-6 rounded-md box-border max-w-[300px] md:card-md'>
            <div className='flex flex-col items-center justify-center gap-y-4 md:card-icon-md'>
                <img src={url} alt="react-icon" className='w-[70px] h-max md:w-[60px]' />
                <h2 className='text-3xl font-semibold text-center'>{names}</h2>
            </div>

            <div className='px-2'>
                <p className="font-semibold text-md text-slate-500 text-center md:text-left">{desc}
                </p>
            </div>
        </div>
    )
}

export default Group