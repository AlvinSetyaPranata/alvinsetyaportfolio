import { motion } from 'framer-motion'
import React from 'react'
import Quotes from '../../components/Quotes'


function index() {
    const section_baseclass = " h-max px-2 py-12 box-border min-w-full"
    const image_baseclass = "w-[400px] md:w-[500px] rounded-md"

    const parentVariants = {
        'initial': {
            scale: 0.5,
            x: 0,
            opacity: 0
        },

        'visible': {
            x: [500, 0],
            opacity: [0, 0.5, 0.75, 1],
            scale: [0.5, 1],
            transition: {
                ease: "easeIn",
                duration: 1,

                scale: {
                    duration: 0.5,
                    delay: 1
                },
            }
        },

        'exit' : { 
            scale: 0.5, 
            x: [0, 500], 
            opacity: 0, 
            transition: { 
                ease: "easeOut", 
                duration: 0.5,
                x: {
                    duration: 0.5,
                    delay: 0.4
                },
                
                opacity: {
                    duration: 0.5,
                    delay: 0.5
                }
            } 
        }
    }

    const containersVariants = {
        'init' : {},
        'visible' : {
            staggerChildren: 0.3,
        }
    }

    const imgVariants = {
        'init' : {
            scale: 0,
            opacity: 0
        },

        'visible' : {
            scale: 1,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 0.5,
                delay: 1.2
            }
        }
    }

    return (
        <motion.div
            className='container h-max box-border max-w-[1200px] grid w-full mx-auto'
            initial='init'
            animate='visible'
            exit='exit'
            variants={parentVariants}
        >
            <section className={section_baseclass}>
                <Quotes head="It's showtime!" body="All collection of my projects that i've worked" delay={0.5}/>
                <motion.div 
                className='grid grid-cols-1 md:grid-cols-2 w-full gap-16 place-items-center mt-16'
                variants={containersVariants}
                initial='init'
                whileInView='visible'
                >
                    <motion.img variants={imgVariants} src="/sheetwriter.png" className={image_baseclass} alt="img" />
                    <motion.img variants={imgVariants} src="/weebstore.png" className={image_baseclass} alt="img" />
                </motion.div>
            </section>
        </motion.div>
    )
}

export default index