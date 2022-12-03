import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { faUser, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navlink() {  
  const variants = {
    "animate" : (custom) => ({
      y: ["-200px", "0px"],
      transition: {
        ease: "easeIn",
        delay: custom * 0.2,
      },
    })
  }

  return (
    <div className=' p-6 absolute z-20 right-[-2px] mt-8 max-h-[140] items-center h-[130px] box-border overflow-hidden flex flex-col top-5 gap-y-10'>
      <motion.div
        animate='animate'
        variants={variants}
        custom={1}
        >-
        <Link className='bg-lavender-500 rounded-full py-[8px] px-[10px]'>
          <FontAwesomeIcon icon={faHome} className="text-white"/>          
        </Link>
      </motion.div>
      <motion.div
        animate='animate'
        variants={variants}
        custom={2}
        >
        <Link className='bg-whtie rounded-full py-[8px] px-[10px] bg-white hover:bg-lavender-500'>
          <FontAwesomeIcon icon={faUser} className="text-lavender-600"/>          
        </Link>
      </motion.div>
    </div>
  )
}

export default Navlink