import React from 'react'

function Group({ title, images, reversed=false }) {

    const reverse = reversed === false ? 'vertical-lr' : 'vertical-rl'

    return (
        <div className={`flex h-fit items-center w-full pl-4 overflow-x-hidden gap-6 ${reversed===false ? 'flex-row' : 'flex-row-reverse'}`}>
            <p className='rotate-180 text-xl md:text-2xl font-bold text-lavender-500' style={{ writingMode: reverse, textOrientation: 'mixed' }}>{title}</p>
            <div className={`flex gap-x-16 w-full h-full overflow-x-auto showcase ${reversed===false ? 'flex-row' : 'flex-row-reverse'}`}>
                {images.map((item) => {
                    return (
                        <div className='w-[350px] relative xl:w-[450px] rounded-md flex-shrink-0 '>
                            <img src={item.url} className='w-full h-full rounded-md' alt="asd" />
                            <div className='absolute w-full h-full bg-[rgba(0,0,0,.5)] z-20 top-0 left-0 rounded-md grid place-items-center opacity-0 hover:opacity-100 transition-all'>
                                <div>
                                    <p className='text-white font-semibold text-center text-xl'>{item.name}</p>
                                    <p className='text-white text-center text-lg'>{item.date}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Group