import React from 'react'
import GradientText from '../common/gradient-text/GradientText'

const HeroContent = () => {
    return (
        <>
            <div className='bg-black z-0 min-h-[60%] sm:min-h-[50%] w-[75%] sm:w-[60%] rounded-tr-3xl md:w-1/2 absolute bottom-0 left-0 p-8'>
                <p className='text-3xl sm:text-4xl'>Crafting digital experiences that look good and work even better</p>
            </div>
            <div className="corner absolute bottom-[60%] sm:bottom-1/2 left-0 z-10 -rotate-90"></div>
            <div className="corner absolute bottom-0 left-3/4 sm:left-[60%] md:left-[50%] z-10 -rotate-90"></div>
        </>
    )
}

export default HeroContent