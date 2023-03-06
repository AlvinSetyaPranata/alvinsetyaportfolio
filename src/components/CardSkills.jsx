import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'


function CardSkills({ img_url, name, desc, url ,reversed = false, delay = 0}) {
    const variants = {
        init: {
            x: -200,
            opacity: 0
        },

        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: 0.8,
                delay: delay
            }
        }
    }
    
    return (
        <motion.div 
        className={`grid place-items-center md:flex md:justify-evenly w-full items-center gap-6 md:gap-0 xl:gap-16 ${reversed ? 'flex-row-reverse' : ''}`}
        variants={variants}
        >
            <div className='img-scale-wrapper'>
                <Image src={img_url} alt="image" width={400} height={400} className='md:w-[400px] rounded-md' placeholder='blur' blurDataURL='/blur.svg'/>
            </div>

            <div className={`text-left ${reversed ? 'text-right' : ''}`}>
                <h3 className='text-2xl md:text-3xl font-bold'>{name}</h3>
                <p className='text-base md:text-lg text-slate-400 font-semibold mt-2'>{desc}</p>
                <button className='mt-8 p-4 md:px-6 md:py-4 bg-lavender-600 rounded-md text-white font-semibold text-sm'>
                <a href={url}>
                    View projects
                </a>
                </button>
            </div>
        </motion.div>
    )
}

export default CardSkills