import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CardSkills from '@/components/CardSkills'
import CircleLink from '@/components/CircleLink'
import Group from '@/components/Group'
import Quotes from '@/components/Quotes'


function About() {
    const section_baseclass = " h-max py-16  xl:py-24 box-border min-w-full"

    const containersVariants = {
        'init': {},
        'visible': {
            transition: {
                staggerChildren: 0.3,
            }
        }
    }

    const contactsVariants = {
        'init': {
            rotate: '90deg'
        },

        'visible': {
            rotate: '0deg',
            transition: {
                type: 'tween',
                duration: 0.2
            }
        }
    }

    const parentVariants = {
        'initial': {
            opacity: 0
        },

        'visible': {
            opacity: [0, 0.5, 0.75, 1],
            transition: {
                ease: "easeIn",
                duration: 0.5,
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
            variants={parentVariants}
            initial='init'
            animate='visible'
            exit='exit'
        >
            <div className='container h-max box-border max-w-[1200px] grid w-full mx-auto'>
                <section className={'pt-24 ' + section_baseclass}>
                    <div className='mx-auto grid place-items-center w-full xl:gap-y-[60px] gap-y-[30px]'>
                        <div className='w-[300px] xl:w-[600px] md:w-[500px] h-max relative bg-red-500'>
                            <Image src="/photo.png" className='min-w-full' alt="photo" width={400} height={400} placeholder='blur' blurDataURL='/blur.svg'/>
                        </div>

                        <Quotes head="True learning begins with right intention" body="Alvin Setya Pranata" />
                    </div>
                </section>

                <section className={`${section_baseclass} flex flex-col gap-y-[80px] px-4 py-16`}>
                    <div className='flex flex-col gap-y-[20px]'>
                        <motion.h3
                            className='font-bold text-3xl xl:text-4xl'
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { type: "spring", duration: 1 } }}
                        >Let me introduce myself</motion.h3>
                        <motion.p
                            className='font-semibold text-base xl:text-lg text-slate-400'
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { type: "tween", duration: 0.5 } }}
                        >My name is Alvin Setya Pranata, I'm college student's that focusing on Desktop, Website, and Mobile development, i've been expirienced for about 4 years, I started to get involved in programming when I was 14 years old, and since then I have been in first grade of high school, I learned about programming language self-taught, and I often work together with my classmates to make a project that can improve skills and knowledge</motion.p>
                    </div>
                    <div className='flex flex-col gap-y-[20px]'>
                        <motion.h3
                            className='font-bold text-3xl xl:text-4xl'
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1, transition: { type: "spring", duration: 1, delay: 0.3 } }}
                        >My Expirience</motion.h3>
                        <motion.p
                            className='font-semibold text-lg xl:text-xl text-slate-400'
                            initial={{ y: 100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1, transition: { type: "tween", duration: 0.5, delay: 0.3 } }}>
                            I've been working with popular framework such as React JS, Django, and Postgress to build website, and I once won 3rd place in a web design festival contest in Universitas Muhamaadiyah, and I also have expirience in freelancer</motion.p>
                    </div>
                </section>

                <section className={section_baseclass}>

                    <Quotes head='"Your skills is your both hand"' body="I'm expirienced with technologies such as" />

                    <motion.div className='grid grid-cols-1 xl:grid-cols-2 gap-16 mt-16 place-items-center' variants={containersVariants} initial="init" whileInView="visible">
                        <Group name="React JS" image="/react.png" desc="Understand how to make code more cleaner, how to create custom hooks, and how to use built-in hooks according to a specfic case, and integrating with the backend" />
                        <Group name="Django" image="/django-logo.png" desc="django is backend framework written in python. it use MVT architecture and it has many built-in features" />
                        <Group name="Figma" image="/figma.png" desc="Pretty much understand how to wireframing and make an ui/ux that can easily implemented by the frontend engineer without having a trouble" />
                        <Group name="Postgresql" image="/postgresql.png" desc="A database system that have a lot features that other system doesn't have and also it's easy to learn" />
                        <Group name="Framer Motion" image="/framer.png" desc="Like a GSAP which can handle animation, but it's easy to work within reactjs and make code more clean. also it can create an animation from scratch" />
                        <Group name="Tailwindcss" image="/tailwind.svg" desc="Most of my web projects use this framework because it has an ability to write css inline. this is one of the advantages that i like to save my production time" />
                        <Group name="Next JS" image="/nextjs.png" desc="The React framework for the web. this framework use turbopack as it's bundler which faster than webpack. Next are used by some of the world's largest companies. next enables us to create full-stack web application by extending the latest features of reactjs." />
                    </motion.div>
                </section>

                <section className={`grid gap-y-16 px-4 ${section_baseclass}`}>

                    <Quotes head='"Your project is your plant that you grow"' body="Latest projects that i've made" />

                    <h2 className='text-2xl xl:text-3xl font-bold'>My latest projects</h2>
                    <motion.div
                        className='grid gap-y-24'
                        variants={containersVariants}
                        initial="init"
                        whileInView="visible"
                    >
                        <CardSkills img_url="/weebstore.png" name="Weebstore" desc="A right place for otaku that have anything they needed" url=""/>
                        <CardSkills img_url="/simat.png" name="SIMAT Online" desc="A web based application to help student manage their school activities" reversed={true} delay={0.4} url="https://github.com/AlvinSetyaPranata/SIMAT-UIM"/>
                    </motion.div>
                </section>

                <section className={`px-2 xl:px-6 ${section_baseclass}`}>

                    <Quotes head='"Take a breath for a while"' body='I also do some other activities in my spare time' />


                    <div className='grid mt-16 justify-center gap-y-24'>
                        <div className='flex justify-between items-center gap-x-16 xl:gap-x-24 px-2'>
                            <div className='xl:max-w-[50%]'>
                                <h3 className='text-xl xl:text-3xl font-bold'>Watching animes</h3>
                                <p className='text-sm xl:text-xl font-semibold mt-4 max-w-[500px] text-slate-400'>I like watching an animes because sometimes it gives me some motivation and new idea</p>
                            </div>
                            <Image src="/anime.jpg" width={400} height={400} alt="img" className='w-[100px] md:max-w-[200px] xl:w-[200px]' />
                        </div>

                        <div className='flex justify-between items-center gap-x-16 xl:gap-x-24 relative w-full px-2'>
                            <div className='xl:-w-[50%]'>
                                <h3 className='text-xl xl:text-3xl font-bold'>Playing games</h3>
                                <p className='text-base text-slate-400 xl:text-xl font-semibold'>Playing game help me to reduce my stress level</p>
                            </div>
                            <Image src="/game.jpg" alt="img" width={400} height={400} className='w-[120px] md:max-w-[300px] xl:w-[300px]' />
                        </div>
                    </div>
                </section>
            </div>


            <section className='relative z-10 py-12 h-fit w-full section-full bg-lavender-600 overflow-hidden'>
                <motion.div
                    className='max-w-[1200px] mx-auto justify-center px-4 md:px-8'
                    variants={containersVariants}
                    initial="init"
                    whileInView="visible"
                >
                    <motion.h2
                        className='text-2xl md:text-4xl font-bold text-white mb-4'
                        variants={contactsVariants}
                    >Interested to collaborate me?</motion.h2>
                    <motion.p
                        className='text-white text-xl font-semibold mb-12 xl:mb-16 text-left'
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1, transition: { type: "tween", duration: 0.4 } }}
                    >Contact me on</motion.p>
                    <div className='flex items-center gap-4 xl:gap-6 mt-16'>
                        <CircleLink linkTo="mailto:comand.alvin@gmail.com?subject=We want to hire you&body=messege" url="/gmail.png" />
                        <CircleLink linkTo="https://wa.me/6285334277450" url="/wa.png" />
                        <CircleLink linkTo="https://www.linkedin.com/in/alvin-setya-3b23511b6" url="/linkedin.png" />
                    </div>
                </motion.div>

                <button className='right-[10%] xl:right-[25%] top-[50%] xl:top-[40%] text-lavender-500 font-semibold text-sm xl:text-base py-[12px] xl:py-[12px] px-4 xl:px-6 bg-white absolute rounded-md'>
                    <Link href="/projects">My Projects</Link>
                </button>
            </section>
        </motion.div>
    )
}

export default About