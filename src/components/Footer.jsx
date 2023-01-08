<<<<<<< HEAD
import React from 'react'

function Footer() {

    return (
        <div className='w-full flex justify-between items-center bg-white py-8 px-6 md:py-16'>
            {/* <h2 className='text-lg md:text-2xl font-bold mb-6'>Created and Designed by Alvinsetya</h2>
            <div className="flex w-[200px] justify-evenly items-center">
                <a href=""><img src="/ig.png" alt="ig-icon" className={icon_class}/></a>
                <a href="https://github.com/AlvinSetyaPranata"><img src="/github.png" alt="ig-icon" className={icon_class}/></a>
            </div> */}

            <div className='w-[1400px] flex justify-between items-center mx-auto'>
                <div>
                    <p className='font-semibold text-sm md:text-xl'>Designed and Created by</p>
                    <h2 className='font-bold text-xl md:text-4xl'>Alvin Setya Pranata</h2>

                    <div className="flex w-[300px] mt-8 md:mt-12 gap-x-[20px] md:justify-evenly items-center px-2">
                        <a href=""><img src="/ig.png" alt="ig-icon" className="w-[30px] md:w-[40px]" /></a>
                        <a href="https://github.com/AlvinSetyaPranata"><img src="/github.png" alt="ig-icon" className="w-[30px] md:w-[40px]" /></a>
                    </div>
                </div>

                <div className='grid place-items-center'>
                    <h2 className='font-semibold text-base text-center whitespace-nowrap md:text-2xl'>This website is built on</h2>
                    <div className='flex justify-center items-center gap-x-[20px] md:gap-x-[40px] mt-[10px] w-full'>
                        <div className='flex flex-col items-center gap-y-[5px] justify-evenly'>
                            <img src="/tailwind.png" className='w-[35px] md:w-[40px]' alt="logo" />
                            <p className='font-bold text-sm md:text-lg'>Tailwind</p>

                        </div>


                        <div className='flex flex-col items-center gap-y-[5px]'>
                            <img src="/reactjs.png" alt="logo" className='w-[35px] md:w-[40px] flex-shrink-0 flex-grow-0' />
                            <p className='font-bold text-sm md:text-lg '>React JS</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
=======
import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-evenly w-screen box-border overflow-hidden py-[40px]">
      <h2 className="text-lg font-semibold mb-[30px]">
        Designed and Created by Alvinsetya
      </h2>
      <div className="flex justify-evenly max-w-[400px] min-w-[350px] py-2">
        <button>
          <img src="../../public/github.png" alt="icon" />
        </button>
        <button>
          <img src="../../public/ig.png" alt="icon" />
        </button>
      </div>
    </div>
  );
>>>>>>> master
}

export default Footer