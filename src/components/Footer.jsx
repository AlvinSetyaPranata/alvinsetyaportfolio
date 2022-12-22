import React from 'react'

function Footer() {
    const icon_class = "w-[30px]"

    return (
        <div className='w-full grid place-items-center bg-white py-6'>
            <h2 className='text-lg font-bold mb-6'>Created and Designed by Alvinsetya</h2>
            <div className="flex w-[200px] justify-evenly items-center">
                <img src="/ig.png" alt="ig-icon" className={icon_class}/>
                <img src="/github.png" alt="ig-icon" className={icon_class}/>
            </div>
        </div>
    )
}

export default Footer