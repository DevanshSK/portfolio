import MobileRight from './MobileRight'
import IridescenceBg from './IridescenceBg'
import HeroContent from './HeroContent'

const Hero = () => {
    return (
        <div id='home' className='pb-4 sm:pb-[1.5vh] pt-20 sm:pt-[1.5vh] flex flex-col h-screen px-5 sm:px-2 min-h-screen'>
        {/* <div className='pb-4 sm:pb-16 pt-20 sm:pt-20 flex flex-col h-screen sm:px-10 px-5 min-h-screen'> */}
            <div className="relative flex-1">
                
                <MobileRight />
                <div className=" w-full h-[calc(100vh-96px)] sm:h-full z-0 flex items-center justify-center rounded-3xl overflow-hidden">
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