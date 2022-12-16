import React from 'react'
import Group from '../../components/Group'

function Home() {

  const section_baseclass = " min-h-screen box-border min-w-full"


  return (
    <div className='container h-max box-border grid w-full'>
      <section className={section_baseclass}>
        <div className='grid place-items-center px-2 relative top-[25%]'>
          <h1 className='text-2xl font-bold text-lavender-600'>Hi, i'm Alvin Setya Pranata</h1>
          <h2 className='text-xl text-center font-semibold text-slate-400 max-w-[40ch] mt-[5px]'>A Young blood who like to develop
            Mobile, Web, and Desktop App</h2>
          <button className='bg-lavender-600 text-white rounded-md px-5 py-[12px] font-semibold text-lg my-[40px]'>Hire Me</button>
        </div>
      </section>

      <section className={"bg-lavender-600 py-4 h-max overflow-hidden" + section_baseclass}>
          <blockquote className='mx-auto text-white text-2xl text-center max-w-[30ch] font-bold my-4'>"Explore, Learn, Apply"</blockquote>

          <div className='w-full h-max flex flex-col items-center mt-[30px] p-4 gap-y-[40px]'>
            <Group url="/react-icon.png" desc="The most popular frontend framework in nowdays, i used it to make a fast and Reactive web page" names="React JS"/>
            <Group url="/flutter.png" desc="Framework that developed by Google, this framework comes with nice UI, cross platform and fast performance " names="Flutter"/>
            <Group url="/django-logo.png" desc="This badboy framework has less code to help me to build backend system quickly and scallable " names="Django"/>
          </div>

      </section>
    </div>
  )
}

export default Home