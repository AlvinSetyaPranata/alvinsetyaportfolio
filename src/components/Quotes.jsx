import { motion } from 'framer-motion'
import React from 'react'


function Quotes({ head, body, delay=0 }) {

    const quotesVariants = {
        "hide": {
            opacity: 0,
            y: -100
        },
        "visible": {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                duration: 1,
                delay: delay
            }
        },
    }

    return (
        <div className='gap-y-[10px] grid place-items-center'>
            <motion.h2
                className='text-3xl xl:text-6xl font-bold text-lavender-600 text-center md:whitespace-nowrap'
                variants={quotesVariants}
                initial="hide"
                whileInView="visible"
            >{head}</motion.h2>
            <p className='text-base text-center md:text-xl font-semibold text-slate-400'>{body}</p>
        </div>)
}

export default Quotes