import React from 'react'

function index() {
    const section_baseclass = " h-max py-32 box-border min-w-full"
    const image_baseclass = "w-[500px] rounded-md"

    return (
        <div className='container h-max box-border max-w-[1200px] grid w-full mx-auto'>
            <section className={section_baseclass}>
                <div className='text-center'>
                    <h2 className='text-4xl md:text-6xl font-bold text-lavender-600'>"It's showtime!"</h2>
                    <span className='text-slate-400 text-lg  md:text-xl font-semibold'>All collection of my projects that i've worked</span>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 w-full gap-16 place-items-center mt-16'>
                    <img src="/sheetwriter.png" className={image_baseclass} alt="img" />
                    <img src="/weebstore.png" className={image_baseclass} alt="img" />
                </div>
            </section>
        </div>
    )
}

export default index