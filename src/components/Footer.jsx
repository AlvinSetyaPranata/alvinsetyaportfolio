import React from 'react'

function Footer() {

    return (
        <div className='w-full flex items-center justify-center bg-white py-12 px-4 md:py-12 overflow-hidden md:px-24'>

            <div className='w-full flex items-center mx-auto md:mx-0 px-2 box-border justify-between'>
                <div className='w-full md:w-max'>
                    <p className='font-semibold text-base text-center md:text-left md:text-lg'>Designed and Created by</p>
                    <h2 className='font-bold text-2xl text-center md:text-left md:text-4xl'>Alvin Setya Pranata</h2>

                    <div className="flex max-w-[300px] mt-8 md:mt-12 gap-x-[60px] justify-center md:justify-start items-center px-2 mx-auto">
                        <a href=""><img src="/ig.png" alt="ig-icon" className="w-[30px] md:w-[40px]" /></a>
                        <a href="https://github.com/AlvinSetyaPranata"><img src="/github.png" alt="ig-icon" className="w-[30px] md:w-[40px]" /></a>
                    </div>
                </div>

                <div className='md:grid place-items-center hidden'>
                    <h2 className='font-semibold text-center whitespace-nowrap text-xl'>This website is built on</h2>
                    <div className='flex justify-center items-center gap-x-[40px] mt-[20px] w-full'>
                        <img src="/tailwind.svg" className='w-[40px]' alt="logo" />

                        <img src="/reactjs.png" alt="logo" className='w-[40px] flex-shrink-0 flex-grow-0' />

                        <img src="/framer.png" alt="logo" className='w-[35px] flex-shrink-0 flex-grow-0' />
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer