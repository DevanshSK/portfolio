/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { words } from '@/data'
import Button from '@/components/common/cta-button/Button'
import { useRouter } from 'next/navigation'

const HeroContent = () => {
    const router = useRouter();
    const handleViewResume = () => {
        console.log("Viewing Resume")
        window.open("https://drive.google.com/file/d/1-E5LFvFOVm63F-j0Jrv0MJBHc0draCat/view?usp=sharing")
    }

    return (
        <>
            <div className='bg-black z-0 min-h-[60%] sm:min-h-[50%] w-[80%] sm:w-[60%] rounded-tr-3xl md:w-[65%] lg:w-[750px] md:max-w-[750px] absolute bottom-0 left-0 p-8 px-0 sm:px-5 pr-0 '>
                <div className="hero-wrapper flex flex-col gap-7">

                    <div className="hero-text flex flex-col justify-center lg:text-[60px] text-[30px] font-semibold relative z-10 pointer-events-none">
                        <h1>
                            <span>Turning</span>

                            <span className='slide absolute pt-0 px-2 md:px-5 py-[30px] h-[48px] lg:h-[78px] md:translate-y-1 translate-y-0 overflow-hidden'>
                                <span className='wrapper'>
                                    {words.map((word, index) => (
                                        <span
                                            key={index}
                                            className='flex items-center md:gap-3 gap-1 pb-2'
                                        >
                                            <img
                                                src={word.imgPath}
                                                alt='person'
                                                className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-[#d9ecff]'
                                            />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h2 className='md:text-nowrap'>into Digital Excellence</h2>
                        {/* <h2>into Real Projects</h2> */}
                        {/* <h2>that Deliver Results</h2> */}
                    </div>

                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none mr-5">
                        {/* {"Hi, I'm Devansh. I build exceptional web experiences that perform as good as they look."} */}
                        {/* {"Your vision, my expertise. React specialist making digital products that matter."} */}
                        {"Your vision, my expertise. Developer by trade, problem-solver by nature. Building digital products that matter."}
                        {/* <br/> */}
                        {/* {"React specialist making digital products that matter."} */}
                        {/* {"Developer by trade, problem-solver by nature. Building tomorrow's web today."} */}
                        {/* {"I code with purpose. Every line matters, every interface counts."} */}
                        {/* {"Full-stack developer who delivers. Let's create something amazing together."} */}
                    </p>
                    <Button
                        text="View Resume"
                        className="md:w-80 md:h-16 w-60 h-12"
                        id="resume"
                        onClick={handleViewResume}
                    />
                </div>
                {/* <div className="corner absolute bottom-[60%] sm:bottom-1/2 lg:bottom-[54.5%] left-0 z-10 -rotate-90"></div> */}
                {/* <div className="corner absolute bottom-0 left-3/4 sm:left-[60%] md:left-[60%] lg:left-[min(60%,42rem)] z-10 -rotate-90"></div> */}

                {/* Laptop screen fixes */}
                <div className="corner absolute top-0 left-0 z-10 -rotate-90 -translate-y-6"></div>
                <div className="corner absolute bottom-0 right-0 z-10 -rotate-90 translate-x-6"></div>

            </div>
        </>
    )
}

export default HeroContent