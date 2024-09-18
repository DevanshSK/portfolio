import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Button from './elements/Button'

const Hero = () => {
    return (
        <div className='pb-20 pt-28 border-b border-b-white/[0.15] sm:px-10 px-5'>
            {/* <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
            </div> */}

            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>

            <div className='flex justify-center relative my-20 z-[5]'>
                <div className="max-w-[89vw] ms:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-90'>
                        Empowering Users with Next.js and React Native
                    </h2>

                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl font-generalsans'
                        words='Crafting Ideas into Seamless' 
                        specialWords='Web Experiences'
                        // words='Crafting Ideas into Seamless Web and Mobile Experiences' 
                        // words='Transforming Concepts into Seamless Experiences' 
                    />

                    <p className='text-white text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl font-medium'>
                        Hi! I&apos;m Devansh, a Full-Stack Developer and DevOps Enthusiast.
                    </p>
                    
                    <a href="#about">
                        {/* <MagicButton 
                            title="Show My Work"
                            icon={<FaLocationArrow />}
                            position='right'
                            otherClasses='gap-4'
                            wrapperClasses='mt-5'
                        /> */}
                        <Button 
                            containerClass="sm:w-fit w-full sm:min-w-96 mt-4"
                            isBeam
                            name='Show My Work'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero