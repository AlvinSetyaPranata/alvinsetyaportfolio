import { motion } from 'framer-motion'
import React from 'react'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import CircleLink from '../../components/CircleLink'
import Decoration from '../../components/Decoration'
import Quotes from '../../components/Quotes'


function Home() {

  const section_baseclass = " min-h-screen box-border min-w-full"
  const contact = useRef()

  const heroVariants = {
    'hideHeading': {
      x: -200,
      opacity: 0
    },
    'visibleHeading': {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    'hideDesc': {
      y: 50,
      opacity: 0
    },
    'visibleDesc': {
      y: 0,
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 0.5
      },
    },

    'onHover': {
      scale: 1.12
    }
  }

  const containersVariants = {
    'init': {},
    'visible': {
      transition: {
        staggerChildren: 0.3,
      }
    }
  }

  const skillVariants = {
    'init': {
      scale: 0
    },
    'visible': {
      scale: 1,
      transition: {
        ease: 'easeIn',
        duration: 0.5,
      }
    },
  }

  const contactsVariants = {
    'init': {
      rotate: '90deg'
    },

    'visible': {
      rotate: '0deg',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    }
  }

  const parentVariants = {
    'initial': {
      x: 0,
      opacity: 0
    },

    'visible': {
      x: [-500, 0],
      opacity: [0, 0.5, 0.75, 1],
      transition: {
        ease: "easeIn",
        duration: 1,
      }
    },

    'exit': {
      x: [0, -500],
      opacity: 0,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      }
    }
  }

  return (
    <motion.div
      exit={{ x: -500, opacity: 0, transition: { ease: "easeOut", duration: 0.5 } }}
    >
      <motion.div className='container h-max box-border max-w-[1200px] grid w-full mx-auto relative'>

        {/* hero sections */}
        <section className={`flex flex-col ${section_baseclass}`}>
          <Decoration />

          <div className='grid my-auto place-items-center md:px-4 md:place-items-start'>
            <motion.h1
              className='text-4xl text-center font-bold text-lavender-600 md:text-7xl md:text-left font-headings'
              initial="hideHeading"
              whileInView="visibleHeading"
              variants={heroVariants}
              viewport={{ once: false }}
            >Innovate beyond limits</motion.h1>

            <motion.h2
              className='text-base md:text-xl text-center md:text-left font-semibold text-slate-400 max-w-[40ch] mt-[5px] md:max-w-[50ch]'
              variants={heroVariants}
              initial="hideDesc"
              whileInView="visibleDesc"
              viewport={{ once: false }}
            >Hi i'm Alvin Setya, a young blood who like to develop
              Mobile, Web, and Desktop App</motion.h2>
            <div className='my-8 flex flex-wrap md:flex-row gap-8 justify-center py-4 box-border w-fit items-center'>
              <motion.button
                className='bg-lavender-600 text-white rounded-md px-[120px] md:px-[150px] py-4 font-semibold text-md  border-2 border-lavender-600 hover:text-lavender-600 outline-none hover:bg-white text-center'
                variants={heroVariants}
                whileHover="onHover"
              >
                <Link to="/about">Introduce me</Link>
              </motion.button>
              <motion.button
                className='bg-white text-lavender-600 border-2 border-lavender-600 rounded-md px-[120px] md:px-[150px] py-4 font-semibold text-md  outline-none hover:text-white hover:bg-lavender-600 text-center'
                variants={heroVariants}
                whileHover="onHover"
                onClick={() => contact.current.scrollIntoView({ behavior: 'smooth' })}
              >Let's connect</motion.button>

            </div>
          </div>
        </section>


        {/* roles section */}
        <section className={`flex items-center flex-col py-8 ${section_baseclass}`}>
          <Quotes head='"We must use time as a tool, not as a couch"' body="John F. Kennedy" />


          <div className='w-full mt-24 px-6'>
            <h2 className='font-bold text-2xl md:text-3xl'>My fields are at</h2>
          </div>

          <motion.div
            className='grid md:grid-cols-2 mt-24 gap-24'
            variants={containersVariants}
            initial="init"
            whileInView="visible"
          >

            <motion.div
              className='px-4 py-2 grid place-items-center gap-y-12'
              variants={skillVariants}
            >
              <img src="/ui-ux.png" alt="logo" className='w-[200px] md:w-[300px]' />
              <h3 className='font-bold text-xl md:text-2xl'>UI/UX Designs</h3>
            </motion.div>

            <motion.div
              className='px-4 py-2 grid place-items-center gap-y-12'
              variants={skillVariants}
            >
              <img src="/mobile-dev.png" alt="logo" className='w-[150px] md:w-[250px]' />
              <h3 className='font-bold text-xl md:text-2xl'>Mobile Development</h3>
            </motion.div>

            <motion.div
              className='px-4 py-2 grid place-items-center gap-y-12'
              variants={skillVariants}
            >
              <img src="/desktop-dev.png" alt="logo" className='w-[200px] md:w-[400px]' />
              <h3 className='font-bold text-xl md:text-2xl'>Desktop Development</h3>
            </motion.div>

            <motion.div
              className='px-4 py-2 grid place-items-center gap-y-12'
              variants={skillVariants}
            >
              <img src="/backend-dev.png" alt="logo" className='w-[90px] md:w-[190px]' />
              <h3 className='font-bold text-xl md:text-2xl'>Backend Development</h3>
            </motion.div>

          </motion.div>
        </section>
      </motion.div>

      <section className='relative z-10 py-12 h-fit w-full section-full bg-lavender-600 overflow-hidden' ref={contact}>
        <motion.div
          className='max-w-[1200px] mx-auto justify-center px-8'
          variants={containersVariants}
          initial="init"
          whileInView="visible"
        >
          <motion.h2
            className='text-2xl md:text-5xl font-bold text-white mb-4'
            variants={contactsVariants}
          >Interested to hire me?</motion.h2>
          <motion.p
            className='text-white text-xl font-semibold mb-12 md:mb-16 text-left'
            whileInView={{ scale: 1, transition: { type: "tween", duration: 0.4 } }}
            initial={{ scale: 0 }}>Contact me on</motion.p>
          <div className='flex items-center gap-4 md:gap-6'>
            <CircleLink linkTo="mailto:comand.alvin@gmail.com?subject=We want to hire you&body=messege" url="/gmail.png" />
            <CircleLink linkTo="https://wa.me/6285334277450" url="/wa.png" />
          </div>
        </motion.div>

        <button className='right-[10%] md:right-[25%] top-[50%] md:top-[40%] text-lavender-500 font-semibold text-sm md:text-base py-[12px] md:py-[12px] px-4 md:px-6 bg-white absolute rounded-md'>My Projects</button>
      </section>

    </motion.div>
  )
}

export default Home