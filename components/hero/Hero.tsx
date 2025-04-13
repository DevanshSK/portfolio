import MobileRight from './MobileRight'
import IridescenceBg from './IridescenceBg'
import HeroContent from './HeroContent'

const Hero = () => {
    return (
        <div id='home' className='pb-4 sm:pb-[1.5vh] pt-20 sm:pt-[1.5vh] flex flex-col h-screen px-5 sm:px-2 min-h-screen'>
        {/* <div className='pb-4 sm:pb-16 pt-20 sm:pt-20 flex flex-col h-screen sm:px-10 px-5 min-h-screen'> */}
            <div className="relative flex-1">
                
                <MobileRight />
                <div className=" w-full h-full z-0 flex items-center justify-center rounded-3xl overflow-hidden">
                    <IridescenceBg
                        color={[0, 1, 1]}
                        mouseReact={true}
                        amplitude={0.1}
                        speed={1.0}
                    />
                </div>

                <HeroContent />
                
            </div>
            {/* <div className="bg-red-300 relative grid place-items-center flex-1 rounded-2xl"> */}
                {/* <div className="w-8 h-8 absolute top-0 right-32 bg-black"></div> */}
                {/* <div className="absolute text-white bg-black flex items-center justify-center top-0 right-0 w-32 h-16">Test</div> */}
                {/* <span className='text-black'>Hi there</span> */}
            {/* </div> */}
        </div>
    )
    
}

export default Hero

// return (
    //     <div className='pb-20 pt-28 border-b border-b-red/[0.15] sm:px-10 px-5'>
    //         {/* <div>
    //             <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
    //             <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
    //             <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
    //         </div> */}

    //         <div className="h-fit w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
    //             <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    //         </div>

    //         <div className='flex justify-center relative my-44 z-[5]'>
    //             <div className="max-w-[89vw] ms:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
    //                 <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-90'>
    //                     Empowering Users with Next.js and React Native
    //                 </h2>

    //                 <TextGenerateEffect
    //                     className='text-center text-[40px] md:text-5xl lg:text-6xl font-generalsans'
    //                     words='Crafting Ideas into Seamless' 
    //                     specialWords='Web Experiences'
    //                     // words='Crafting Ideas into Seamless Web and Mobile Experiences' 
    //                     // words='Transforming Concepts into Seamless Experiences' 
    //                 />

    //                 <p className='text-white text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl font-medium'>
    //                     Hi! I&apos;m Devansh, a Full-Stack Developer and DevOps Enthusiast.
    //                 </p>
                    
    //                 <a href="#about">
    //                     <Button 
    //                         containerClass="sm:w-fit w-full sm:min-w-96 mt-4"
    //                         isBeam
    //                         name='Show My Work'
    //                     />
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // )