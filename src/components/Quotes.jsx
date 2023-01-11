import { motion } from 'framer-motion'
import React from 'react'


function Quotes({ head, body }) {

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
                duration: 1
            }
        },
    }

    return (
        <div className='gap-y-[10px] grid place-items-center'>
            <motion.h2
                className='text-4xl md:text-6xl font-bold text-lavender-600 text-center md:whitespace-nowrap'
                variants={quotesVariants}
                initial="hide"
                whileInView="visible"
            >{head}</motion.h2>
            <p className='text-lg  md:text-xl font-semibold text-slate-400'>{body}</p>
        </div>)
}

export default Quotes