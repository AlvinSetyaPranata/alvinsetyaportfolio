import React from 'react'

function Home() {

  const section_baseclass =  " py-6 px-4"


  return (
    <div className='container w-full h-max py-8 box-border grid place-items-center'>
      <section className={"grid place-items-center box-border" + section_baseclass}>
          <h1 className='text-3xl font-bold text-lavender-600 p-2'>Hi, i'm Alvin Setya Pranata</h1>
          <h2 className='text-2xl text-center font-semibold text-slate-400'>A Young blood who like to develop
Mobile, Web, and Desktop App</h2>
          <button className='bg-lavender-600 text-white rounded-md px-5 py-[12px] font-semibold text-lg my-[30px]'>Hire Me</button>
      </section>
    </div>
  )
}

export default Home