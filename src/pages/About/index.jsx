import { motion } from 'framer-motion'
import React from 'react'
import CardSkills from '../../components/CardSkills'
import CircleLink from '../../components/CircleLink'
import Group from '../../components/Group'
import Quotes from '../../components/Quotes'


function About() {
    const section_baseclass = " h-max py-24 box-border min-w-full"

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


    return (
        <>
            <div className='container h-max box-border max-w-[1200px] grid w-full mx-auto'>
                <section className={'pt-24 ' + section_baseclass}>
                    <div className='mx-auto grid place-items-center w-full gap-y-[60px]'>
                        <div className='w-[500px]'>
                            <motion.img
                                src="photo.jpg"
                                alt="photo"
                                initial={{ width: 0, opacity: 0 }}
                                whileInView={{ width: "100%", opacity: 1, transition: { type: "spring", duration: 1 } }}

                            />
                        </div>

                        <Quotes head="True learning begins with right intention" body="Alvin Setya Pranata" />
                    </div>
                </section>

                <section className={'flex flex-col gap-y-[80px] px-4 ' + section_baseclass}>
                    <div className='flex flex-col gap-y-[20px]'>
                        <h3 className='font-bold text-3xl md:text-4xl'>Let me introduce myself</h3>
                        <p className='font-semibold text-lg'>My name is Alvin Setya Pranata, I'm college student's that focusing on Desktop, Website, and Mobile development, i've been expirienced for about 4 years, I started to get involved in programming when I was 14 years old, and since then I have been in first grade of high school, I learned about programming language self-taught, and I often work together with my classmates to make a project that can improve skills and knowledge</p>
                    </div>
                    <div className='flex flex-col gap-y-[20px]'>
                        <h3 className='font-bold text-3xl md:text-4xl'>My Expirience</h3>
                        <p className='font-semibold text-lg md:text-xl'>I've been working with popular framework such as React JS, Django, and Postgress to build website, and I once won 3rd place in a web design festival contest in Universitas Muhamaadiyah, and I also have expirience in freelancer</p>
                    </div>
                </section>

                <section className={section_baseclass}>
                    {/* <div className='text-center'>
                        <h2 className='text-4xl md:text-6xl font-bold text-lavender-600'>"Your skills is your both hand"</h2>
                        <span className='text-slate-400 text-lg  md:text-xl font-semibold'>I'm expirienced with technologies such as</span>
                    </div> */}

                    <Quotes head='"Your skills is your both hand"' body="I'm expirienced with technologies such as" />

                    <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 place-items-center' variants={containersVariants} initial="init" whileInView="visible">
                        <Group name="React JS" image="/react.png" desc="Understand how to make code more cleaner, how to create custom hooks, and how to use built-in hooks according to a specfic case, and integrating with the backend" />
                        <Group name="Django" image="/django-logo.png" desc="django is backend framework written in python, i often use it to make an API, authentication using JWT's token, user management, and other stuff's" />
                        <Group name="Figma" image="/figma.png" desc="Pretty much understand how to wireframing and make an ui/ux that can easily implemented by the frontend engineer without having a trouble" />
                        <Group name="Postgresql" image="/postgresql.png" desc="I use this database system to integrate with my backend, because compared to other systems postgresql is more secure and open source projects" />
                        <Group name="Framer Motion" image="/framer.png" desc="Like a GSAP which can handle animation, but it's easy to work within reactjs and make code more clean. also it can create an animation from scratch" />
                        <Group name="Tailwind" image="/tailwind.png" desc="Most of my web projects use this framework because it has an ability to style directly in classnames without having to write in seperate css file. this awesome because it save my production time" />
                    </motion.div>
                </section>

                <section className={`grid gap-y-16 px-4 ${section_baseclass}`}>
                    {/* <div className='text-center'>
                        <h2 className='text-4xl md:text-6xl font-bold text-lavender-600'>"Your project is your plant you grow"</h2>
                        <span className='text-slate-400 text-lg  md:text-xl font-semibold'>Latest projects that i've made</span>
                    </div> */}

                    <Quotes head='"Your project is your plant you grow"' body="Latest projects that i've made" />

                    <h2 className='text-3xl font-bold'>My latest projects</h2>
                    <motion.div
                        className='grid gap-y-32'
                        variants={containersVariants}
                        initial="init"
                        whileInView="visible"
                    >
                        <CardSkills url="/weebstore.png" name="Weebstore" desc="A right place for otaku that have anything they needed" />
                        <CardSkills url="/sheetwriter.png" name="Sheetwriter" desc="An application that help my father to make his work more efficient" reversed={true} />
                    </motion.div>
                </section>

                <section className={`px-6 ${section_baseclass}`}>
                    <div className='text-center'>
                        <h2 className='text-4xl md:text-6xl font-bold text-lavender-600'>"Take a breath for a while"</h2>
                        <span className='text-slate-400 text-lg  md:text-xl font-semibold'>I also do some other activities in my spare time</span>
                    </div>

                    <div className='grid mt-16 justify-center gap-y-16'>
                        <div className='flex justify-center items-center gap-x-12 md:gap-x-24'>
                            <div className='max-w-[50%]'>
                                <h3 className='text-2xl md:text-3xl font-bold'>Watching animes</h3>
                                <p className='text-lg md:text-xl font-semibold'>I like watching an animes because sometimes it gives me some motivation and new idea</p>
                            </div>
                            <img src="/anime.jpg" alt="img" width="200px" />
                        </div>

                        <div className='flex justify-center items-center gap-x-24'>
                            <div className='md:max-w-[50%]'>
                                <h3 className='text-2xl md:text-3xl font-bold'>Playing games</h3>
                                <p className='text-lg md:text-xl font-semibold'>Playing game help me to reduce my stress level</p>
                            </div>
                            <img src="/game.jpg" alt="img" className='w-[200px] md:w-[350px]' />
                        </div>
                    </div>
                </section>
            </div>


            <section className='relative z-10 py-12 h-fit w-full section-full bg-lavender-600 overflow-hidden'>
                <motion.div
                    className='max-w-[1200px] mx-auto justify-center px-8'
                    variants={containersVariants}
                    initial="init"
                    whileInView="visible"
                >
                    <motion.h2
                        className='text-3xl md:text-5xl font-bold text-white mb-4'
                        variants={contactsVariants}
                    >Interested to collaborate me?</motion.h2>
                    <motion.p
                        className='text-white text-xl font-semibold mb-12 md:mb-16 text-left'
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1, transition: { type: "tween", duration: 0.4 } }}
                    >Contact me on</motion.p>
                    <div className='flex items-center gap-4 md:gap-6'>
                        <CircleLink linkTo="mailto:comand.alvin@gmail.com?subject=We want to hire you&body=messege" url="/gmail.png" />
                        <CircleLink linkTo="https://wa.me/6285334277450" url="/wa.png" />
                    </div>
                </motion.div>

                <button className='right-[10%] md:right-[25%] top-[40%] text-lavender-500 font-semibold text-sm md:text-base py-[12px] md:py-[12px] px-6 bg-white absolute'>My Projects</button>
            </section>
        </>
    )
}

export default About