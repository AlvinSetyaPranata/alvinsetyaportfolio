import React from 'react'
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

            <section className={'grid gap-y-16 ' + section_baseclass}>
                <div className='text-center'>
                    <h2 className='text-4xl md:text-6xl font-bold text-lavender-600'>"Your project is your proof"</h2>
                    <span className='text-slate-400 text-lg  md:text-xl font-semibold'>A collection of projects that i've worked</span>
                </div>

                <div className='grid gap-24'>
                    <Group title="UI DESIGNS" images={ui_designs} />
                    <Group title="UI DESIGNS" images={ui_designs} reversed={true}/>
                </div>
            </section>
        </div>
    )
}

export default About