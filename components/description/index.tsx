import React, { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import { slideUp, opacity } from './anim'
import RoundedButton from '../common/rounded-button'

const Description = () => {

    const phrase = "I help organizations navigate the digital world by developing web and mobile applications custom-fit to their needs, ensuring high standards of quality and performance.";

    const description = useRef<HTMLDivElement>(null);
    const isInView = useInView(description);

    return (
        <div ref={description} className='description md:px-[80px] lg:px-[100px] my-20 md:my-[180px] flex justify-center'>
            <div className="body flex flex-col lg:flex-row max-w-[1440px] gap-[50px] relative">
                <p className='m-0 text-2xl md:text-[36px] md:leading-snug gap-2'>
                    {
                        phrase.split(" ").map((word, index) => (
                            <span key={index} className='mask relative overflow-hidden inline-flex mr-[3px]'>
                                <motion.span className='mr-[3px]' key={index} variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} >{word}</motion.span>
                            </span>
                        ))
                    }
                </p>
                <motion.p className='m-0 text-[18px] w-[80%] font-light' variants={opacity} animate={isInView ? "open" : "closed"}>
                    My passion for web and mobile development, combined with a keen eye for design and user experience, enables me to create seamless, engaging digital experiences.
                </motion.p>
                <div data-scroll data-scroll-speed={0.1}>
                    <RoundedButton className="button absolute top-[85%] sm:top-[85%] left-[calc(100%-200px)] w-[180px] h-[180px] bg-accent text-white rounded-[50%] flex items-center justify-center cursor-pointer">
                        <p className='m-0 text-base font-light relative z-[1]'>About Me</p>
                    </RoundedButton>
                </div>
            </div>
        </div>
    )
}

export default Description