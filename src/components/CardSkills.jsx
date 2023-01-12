import { motion } from 'framer-motion'
import React from 'react'


function CardSkills({ url, name, desc, reversed = false }) {
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
                duration: 0.8
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
                <h3 className='text-3xl md:text-3xl font-bold'>{name}</h3>
                <p className='text-lg font-semibold'>{desc}</p>
                <button className='mt-12 px-6 py-4 bg-lavender-600 rounded-md text-white font-semibold'>View projects</button>
            </div>
        </motion.div>
    )
}

export default CardSkills