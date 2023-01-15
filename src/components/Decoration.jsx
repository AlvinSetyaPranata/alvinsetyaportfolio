import React from 'react'
import { motion } from 'framer-motion'



function Decoration() {
  const base_image = "relative w-[100px]"

  const decor2Variants = {
    'path-initial': {
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
    },

    'path-animate': {
      strokeDashoffset: 0,
      transition: {
        ease: 'easeIn',
        repeat: Infinity,
        duration: 1,
        delay: 0.2,
        repeatType: "reverse",
        repeatDelay: 1.2
      }
    },

    circleInitial: { r: 0 },

    circleAnimate: delay => ({
      r: 35.5582,
      transition: {
        type: 'spring',
        delay: delay,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 1.2
      }
    })
  }


  const decor3Variants = {
    orbitAnimate: {
      rotate: '90deg',
      transition: {
        repeat: Infinity,
        repeatType: 'reverse'
      }
    }
  }




  return (
    <div className='hidden md:block w-full h-[300px] md:min-h-[400px] box-border'>
      <img src="decor-1.png" alt="decoration-1" className={`${base_image} animate-spin-slow left-[20%] top-[50%]`} />


      <img src="decor-1.png" alt="decoration-1" className={`${base_image} animate-spin-slow-reverse left-[28%] top-[20%]`} />

      <svg className={`${base_image} w-[150px] left-[50%]`} height="342" viewBox="0 0 293 342" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group 48">
          <motion.circle variants={decor2Variants}
            initial='circleInitial' animate='circleAnimate' custom={0.3} cx="35.5583" cy="35.5583" fill="#B1ADFB" />
          <circle id="Ellipse 39_2" cx="257.442" cy="305.801" r="35.5583" fill="#B1ADFB" />
          <motion.path
            variants={decor2Variants}
            initial='path-initial'
            animate='path-animate'
            id="Vector 7"
            d="M36.47 36.9807C-10.2114 159.52 227.865 63.8226 254.707 124.509C281.548 185.195 46.9734 209.703 46.9734 248.215C46.9734 286.727 173.582 284.49 254.707 307.734" stroke="#9590F3" stroke-width="4" stroke-linecap="round" />
          <circle id="Ellipse 40" cx="35.5582" cy="35.5582" r="27.0243" fill="white" />
          <circle id="Ellipse 40_2" cx="257.441" cy="305.801" r="27.0243" fill="white" onClick={() => console.log(pathRef.current)} />
        </g>
      </svg>

    </div>
  )
}

export default Decoration