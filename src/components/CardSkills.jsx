import { motion } from 'framer-motion'
import React from 'react'


function CardSkills({ url, name, desc, reversed = false, delay = 0}) {
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
        className={`grid place-items-center md:flex justify-center md:justify-evenly w-full items-center gap-6 md:gap-0 ${reversed ? 'flex-row-reverse' : ''}`}
        variants={variants}
        >
            <div className='img-scale-wrapper'>
                <img src={url} alt="image" className='md:w-[400px] rounded-md' />
            </div>

            <div className={`text-left ${reversed ? 'text-right' : ''}`}>
                <h3 className='text-2xl md:text-3xl font-bold'>{name}</h3>
                <p className='text-base md:text-lg text-slate-400 font-semibold'>{desc}</p>
                <button className='mt-8 p-4 md:px-6 md:py-4 bg-lavender-600 rounded-md text-white font-semibold'>View projects</button>
            </div>
        </motion.div>
    )
}

export default CardSkills