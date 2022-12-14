import React from 'react'
import CircleLink from '../../components/CircleLink'
import Decoration from '../../components/Decoration'

function Home() {

  const section_baseclass = " min-h-screen box-border min-w-full"
  const base_blockquote = 'mx-auto text-white text-2xl text-center max-w-[30ch] font-bold my-4 '
  const base_catagories = 'text-white px-4 py-2 rounded-md font-semibold cursor-pointer text-sm '

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
    <>
      <div className='container h-max box-border max-w-[1200px] grid w-full mx-auto relative'>

        {/* hero sections */}
        <section className={"flex flex-col " + section_baseclass}>
          <Decoration />

          <div className='grid place-items-center px-4 md:place-items-start'>
            <h1 className='text-5xl text-center font-bold text-lavender-600 md:text-7xl md:text-left'>Innovate beyond limits</h1>
            <h2 className='text-lg md:text-xl text-center md:text-left font-semibold text-slate-400 max-w-[40ch] mt-[5px] md:max-w-[50ch]'>Hi i'm Alvin Setya, a young blood who like to develop
              Mobile, Web, and Desktop App</h2>
            <div className='my-8 flex flex-col md:flex-row gap-8 justify-center py-4'>
              <a className='bg-lavender-600 text-white rounded-md px-[150px] py-[12px] font-semibold text-md  border-2 border-lavender-600 hover:text-lavender-600 outline-none hover:bg-white text-center'>Hire Me</a>
              <a className='bg-white text-lavender-600 border-2 border-lavender-600 rounded-md px-[150px] py-[12px] font-semibold text-md  outline-none hover:text-white hover:bg-lavender-600 text-center' href="#contact-me">Contact Me</a>

            </div>
          </div>
        </section>


        {/* roles section */}
        <section className={"flex items-center flex-col py-32  " + section_baseclass}>
          {/* <div className='text-center'>
            <h2 className='text-4xl md:text-6xl font-bold text-lavender-600'>"Your word is your honor"</h2>
            <span className='text-slate-400 text-xl  md:text-xl font-semibold'>A collection that i've made with myself</span>
          </div>

          <div className='grid gap-32'>
            <Group title="UI DESIGNS" images={ui_designs} />
            <Group title="UI DESIGNS" images={ui_designs} />
          </div> */}

          <h2 className='text-3xl md:text-5xl font-bold text-lavender-600 text-center'>"We must use time as a tool, not as a couch"</h2>
          <span className='text-xl  md:text-xl font-semibold'>John F. Kennedy</span>

          <div className='w-full mt-24 px-6'>
            <h2 className='font-bold text-3xl'>I'm expirienced at</h2>
          </div>

          <div className='grid md:grid-cols-2 mt-24 gap-24'>

            <div className='px-4 py-2 grid place-items-center gap-y-12'>
              <img src="/ui-ux.png" alt="logo" className='w-[300px]'/>
              <h3 className='font-bold text-2xl'>UI/UX Designs</h3>
            </div>

            <div className='px-4 py-2 grid place-items-center gap-y-12'>
              <img src="/mobile-dev.png" alt="logo" className='w-[250px]'/>
              <h3 className='font-bold text-2xl'>Mobile Development</h3>
            </div>

            <div className='px-4 py-2 grid place-items-center gap-y-12'>
              <img src="/desktop-dev.png" alt="logo" className='w-[400px]'/>
              <h3 className='font-bold text-2xl'>Desktop Development</h3>
            </div>

            <div className='px-4 py-2 grid place-items-center gap-y-12'>
              <img src="/backend-dev.png" alt="logo" className='w-[190px]'/>
              <h3 className='font-bold text-2xl'>Backend Development</h3>
            </div>

          </div>
        </section>
      </div>

      <section className='relative z-10 py-12 h-fit w-full section-full bg-lavender-600' id="contact-me">
        <div className='max-w-[1200px] mx-auto justify-center px-8'>
          <h2 className='text-3xl md:text-5xl font-bold text-white mb-4'>Interested to hire me?</h2>
          <p className='text-white text-xl font-semibold mb-12 md:mb-16 text-left'>Contatct me on</p>
          <div className='flex items-center gap-4 md:gap-6'>
            <CircleLink linkTo="mailto:comand.alvin@gmail.com?subject=We want to hire you&body=messege" url="/gmail.png" />
            <CircleLink linkTo="https://wa.me/6285334277450" url="/wa.png" />
          </div>
        </div>

        <button className='right-[10%] md:right-[25%] top-[40%] text-lavender-500 font-semibold text-sm md:text-base py-[12px] md:py-[12px] px-6 bg-white absolute'>My Projects</button>
      </section>

    </>
  )
}

export default Home