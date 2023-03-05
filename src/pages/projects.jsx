import { motion } from 'framer-motion'
import React from 'react'
import Quotes from '@/components/Quotes'
import Image from 'next/image'


function index() {
    const image_baseclass = "max-w-[200px] xl:max-w-[500px] rounded-md"

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
            <section className='px-2 py-12'>
                <Quotes head="It's showtime!" body="All collection of my projects that i've worked" delay={0.5}/>
                <motion.div 
                className='grid grid-cols-1 md:grid-cols-2 w-full gap-16 place-items-center mt-16'
                variants={containersVariants}
                initial='init'
                whileInView='visible'
                >
                    <motion.div variants={imgVariants}>
                        <Image className='rounded-md' loading='lazy' src="/sheetwriter.png" alt="img" width={500} height={500} />
                    </motion.div>
                    <motion.div variants={imgVariants}>
                        <Image className='rounded-md' src="/weebstore.png" alt="img" width={500} height={500}/>
                    </motion.div>
                    <motion.div variants={imgVariants}>
                        <Image className='rounded-md' src="/simat.png" alt="img" width={500} height={500}/>
                    </motion.div>
                    <motion.div variants={imgVariants}>
                        <Image className='rounded-md' src="/kraeplit.png" alt="img" width={500} height={500}/>
                    </motion.div>

                </motion.div>
            </section>
        </motion.div>
    )
}

export default index