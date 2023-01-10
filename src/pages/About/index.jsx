import React from 'react'
import CardSkills from '../../components/CardSkills'
import Group from '../../components/Group'

function About() {
    const section_baseclass = " h-max py-32 box-border min-w-full"

    const ui_designs = [
        {
            url: "/sheetwriter.png",
            name: "Sheetwriter",
            date: "3 November 2022"
        },
        {
            url: "/weebstore.png",
            name: "Weebstore",
            date: "5 December 2022"
        }
    ]


    return (
        <div className='container h-max box-border max-w-[1200px] grid w-full mx-auto'>
            <section className={'pt-24 ' + section_baseclass}>
                <div className='mx-auto grid place-items-center w-full gap-y-[60px]'>
                    <img src="photo.jpg" alt="photo" className='w-[500px]' />
                    <div className='gap-y-[10px] grid place-items-center'>
                        <h2 className='text-4xl md:text-6xl font-bold text-lavender-600 text-center md:whitespace-nowrap'>"True learning begins with right intention"</h2>
                        <span className='text-lg  md:text-xl font-semibold text-slate-400'>Alvin Setya Pranata</span>
                    </div>
                </div>
            </section>

            <section className={'flex flex-col gap-y-[80px] px-4 ' + section_baseclass}>
                <div className='flex flex-col gap-y-[20px]'>
                    <h3 className='font-bold text-3xl md:text-4xl'>Let me introduce myself</h3>
                    <p className='font-semibold text-lg'>My name is Alvin Setya Pranata, I'm college student's that focusing on Desktop, Website, and Mobile development, i've been expirienced for about 4 years, I started to get involved in programming when I was 14 years old, and since then I have been in grade 1 of high school, I learned about programming language self-taught, and I often work together with my classmates to make a project that can improve skills and knowledge</p>
                </div>
                <div className='flex flex-col gap-y-[20px]'>
                    <h3 className='font-bold text-3xl md:text-4xl'>My Expirience</h3>
                    <p className='font-semibold text-lg md:text-xl'>I've been working with popular framework such as React JS, Django, and Postgress to build website, and I once won 3rd place in a web design festival contest in Universitas Muhamaadiyah, and I also have expirience in freelancer</p>
                </div>
            </section>

            <section className={'grid gap-y-16 px-4 ' + section_baseclass}>
                <div className='text-center'>
                    <h2 className='text-4xl md:text-6xl font-bold text-lavender-600'>"Your project is your plant you grow"</h2>
                    <span className='text-slate-400 text-lg  md:text-xl font-semibold'>A collection of projects that i've worked</span>
                </div>

                <h2 className='text-3xl font-bold'>My latest projects</h2>
                <div className='grid gap-y-32'>
                    <CardSkills url="/sheetwriter.png" name="Sheetwriter" desc="An application that help my father to make his work more efficient" />
                    <CardSkills url="/weebstore.png" name="Weebstore" desc="A right place for otaku that have anything they needed" reversed={true} />
                </div>
            </section>

            <section className={section_baseclass}>
                <div className='text-center'>
                    <h2 className='text-4xl md:text-6xl font-bold text-lavender-600'>"Take a breath for a while"</h2>
                    <span className='text-slate-400 text-lg  md:text-xl font-semibold'>I also do some other activities in my spare time</span>
                </div>

                <div className='grid mt-16 justify-center gap-y-16'>
                    <div className='flex justify-center items-center gap-x-24'>
                        <div className='max-w-[50%]'>
                            <h3 className='text-3xl font-bold'>Watching animes</h3>
                            <p className='text-xl font-semibold'>I like watching an animes because sometimes it gives me some motivation and new idea</p>
                        </div>
                        <img src="/anime.jpg" alt="img" width="200px"/>
                    </div>
                    
                    <div className='flex justify-center items-center gap-x-24'>
                        <div className='max-w-[50%]'>
                            <h3 className='text-3xl font-bold'>Playing games</h3>
                            <p className='text-xl font-semibold'>Playing game help me to reduce my stress level</p>
                        </div>
                        <img src="/game.jpg" alt="img" width="350px"/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About