import React, { useState } from 'react'
import Group from '../../components/Group'
import Card from '../../components/Card'
import CircleLink from '../../components/CircleLink'

function Home() {

  const section_baseclass = " min-h-screen box-border min-w-full"
  const base_blockquote = 'mx-auto text-white text-2xl text-center max-w-[30ch] font-bold my-4 '
  const base_catagories = 'text-white px-4 py-2 rounded-md font-semibold cursor-pointer text-sm '

  const [catagories, setCatagories] = useState(1)


  return (
    <div className='container h-max box-border grid w-full'>
      <section className={"grid place-items-center" + section_baseclass}>
        <div className='grid place-items-center px-2'>
          <h1 className='text-2xl font-bold text-lavender-600'>Hi, i'm Alvin Setya Pranata</h1>
          <h2 className='text-xl text-center font-semibold text-slate-400 max-w-[40ch] mt-[5px]'>A Young blood who like to develop
            Mobile, Web, and Desktop App</h2>
          <button className='bg-lavender-600 text-white rounded-md px-5 py-[12px] font-semibold text-lg my-[40px]'>Hire Me</button>
        </div>
      </section>

      <section className={"bg-lavender-600 py-6 h-max overflow-hidden" + section_baseclass}>
        <blockquote className={base_blockquote}>"Explore, Learn, Apply"</blockquote>

        <div className='w-full h-max flex flex-col items-center mt-[30px] p-4 gap-y-[40px]'>
          <Group url="/react-icon.png" desc="The most popular frontend framework in nowdays, i used it to make a fast and Reactive web page" names="React JS" />
          <Group url="/flutter.png" desc="Framework that developed by Google, this framework comes with nice UI, cross platform and fast performance " names="Flutter" />
          <Group url="/django-logo.png" desc="This badboy framework has less code to help me to build backend system quickly and scallable " names="Django" />
        </div>
      </section>

      <section className={"py-6 h-max " + section_baseclass}>
        <blockquote className={base_blockquote + "text-black"}>"Is about the projects"</blockquote>

        <div className='w-full mt-[50px] h-full p-2 box-border'>
          <div className='h-fit bg-lavender-600 w-full flex px-3 py-4 rounded-md justify-evenly xl:w-[900px] xl:mx-auto'>
            <p className={catagories === 1 ? base_catagories + "text-black bg-white" : base_catagories} onClick={() => setCatagories(1)}>UI Design</p>
            <p className={catagories === 2 ? base_catagories + "text-black bg-white" : base_catagories} onClick={() => setCatagories(2)}>Projects</p>
          </div>
          <div className='h-max w-full mt-5 grid place-items-center py-2 gap-6 xl:grid-cols-2'>
            <Card url="/sheetwriter.png" title="Sheetwriter" date="12-90-20" />
            <Card url="/weebstore.png" title="Sheetwriter" date="12-90-20" />
          </div>
        </div>
      </section>
      <section className={'bg-lavender-500 px-4 py-12' + section_baseclass + ' min-h-max'}>
        <div className='w-full h-max'>
          <h2 className='text-2xl font-bold text-white mb-4'>Interested to hire me?</h2>
          <p className='text-white text-lg mb-6'>Contatct me on</p>
          <div className='flex items-center'>
            <CircleLink linkTo="/asd" url="/gmail.png" />
            <CircleLink linkTo="/asd" url="/wa.png" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home