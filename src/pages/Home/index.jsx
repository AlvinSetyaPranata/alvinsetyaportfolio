import React, { useState } from 'react'
import Group from '../../components/Group'
import Card from '../../components/Card'
import CircleLink from '../../components/CircleLink'
import Decoration from '../../components/Decoration'

function Home() {

  const section_baseclass = " min-h-screen box-border min-w-full"
  const base_blockquote = 'mx-auto text-white text-2xl text-center max-w-[30ch] font-bold my-4 '
  const base_catagories = 'text-white px-4 py-2 rounded-md font-semibold cursor-pointer text-sm '

  const [catagories, setCatagories] = useState(1)

  const loadProjects = (id) => {
    if (id === 1) {
      return [
        { name: "Sheetwriter", url: "/sheetwriter.png", date: '12-08-2022' },
        { name: "Weebstore", url: "/weebstore.png", date: "13-07-2022" }
      ]
    } else return []
  }


  return (
    <div className='container h-max box-border grid w-full'>

      {/* hero sections */}
      <section className={"flex flex-col " + section_baseclass}>
        <Decoration />
        
        <div className='grid place-items-center px-2 xl:place-items-start'>
          <h1 className='text-4xl font-bold text-lavender-600 xl:text-7xl'>Innovate beyond limits</h1>
          <h2 className='text-xl text-center xl:text-left font-semibold text-slate-400 max-w-[40ch] mt-[5px]'>Hi i'm Alvin Setya, a young blood who like to develop
            Mobile, Web, and Desktop App</h2>
          <button className='bg-lavender-600 text-white rounded-md px-[100px] xl:px[100px] py-[12px] font-semibold text-md my-[40px]'>Hire Me</button>
        </div>
      </section>


      {/* roles section */}
      <section className={"flex py-6 h-max overflow-hidden" + section_baseclass}>
        {/* <div className='w-fit h-max py-4'>
          <p className='rotate-180 mb-[250px] text-2xl font-bold text-lavender-500' style={{ writingMode: 'vertical-lr' }}>UI DESIGNS</p>
          <p className='rotate-180 mt-[250px] text-2xl font-bold text-lavender-500' style={{ writingMode: 'vertical-lr' }}>UI DESIGNS</p>
        </div> */}

        <div className='flex h-fit items-center w-full gap-x-16 py-4'>
          <p className='rotate-180 text-2xl font-bold text-lavender-500' style={{ writingMode: 'vertical-lr' }}>UI DESIGNS</p>
          <div className='flex gap-x-32 w-full h-full px-2 overflow-x-auto showcase'>
              <div className='w-[350px] xl:w-[450px] rounded-md flex-shrink-0'>
                <img src="/sheetwriter.jpg" className='w-full h-full rounded-md' alt="asd" />
              </div>
          </div>
        </div>


      </section>

      <section className={'bg-lavender-500 px-4 py-12' + section_baseclass + ' min-h-max'}>
        <div className='w-full h-max'>
          <h2 className='text-2xl font-bold text-white mb-4'>Interested to hire me?</h2>
          <p className='text-white text-lg mb-6 font-semibold'>Contatct me on</p>
          <div className='flex items-center'>
            <CircleLink linkTo="mailto:comand.alvin@gmail.com?subject=We want to hire you&body=messege" url="/gmail.png" />
            <CircleLink linkTo="https://wa.me/6285334277450" url="/wa.png" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home