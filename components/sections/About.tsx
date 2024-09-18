import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import Globe from "react-globe.gl";
import Button from '../elements/Button';

const About = () => {
    const [isCopied, setIsCopied] = useState<boolean>(false);

    const handleCopyClick = useCallback(() => {
        navigator.clipboard.writeText("work.devanshsk@gmail.com");

        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 2000)
    }, [setIsCopied]);


    return (
        <section className='c-space mt-5 mb-20'>
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="relative w-full sm:h-[276px] h-[200px]">
                            <Image
                                src="/assets/grid1.png"
                                alt="Grid 1"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div className="">
                            <p className='grid-headtext'>Hi, I&apos;m Devansh</p>
                            <p className="grid-subtext">Throughout my development journey, I have honed my skills in Frontend, Backend and Mobile development, with a focus on scalable solutions for real world problems.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="relative w-full sm:h-[276px] h-[200px]">
                            <Image
                                src="/assets/grid2.png"
                                alt="grid-2"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>I specialize in building robust and scalable applications using MERN, Next.js, Spring Boot with Java, and React Native.</p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                // backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            // labelsData={[{ lat: 26, lng: 78, text: 'Gwalior, India', color: 'white', size: 15 }]}
                            />
                        </div>
                        <div className="">
                            <p className="grid-headtext">
                                I am very flexible with timezone communications and locations.
                            </p>
                            <p className="grid-subtext">
                                I&apos;m based in Gwalior, India and open to remote work opportunities.
                            </p>
                            <Button name='Contact Me' isBeam containerClass='w-full mt-10' />
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <div className="relative w-full sm:h-[266px] h-[200px]">
                            <Image
                                src="/assets/grid3.png"
                                alt="grid-3"
                                fill
                                className="object-contain"
                            />
                        </div>

                        <div>
                            <p className="grid-headtext">My passion for coding</p>
                            <p className="grid-subtext">
                                Solving problems and creating through code is my passion, not just my profession. I thrive on exploring new technologies and continuously enhancing my skills.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <div className="relative w-full md:h-[126px] sm:h-[276px] h-[200px]">
                            <Image
                                src="/assets/grid4.png"
                                alt="grid-4"
                                fill
                                className="object-cover sm:object-top"
                            />
                        </div>

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact Me</p>

                            <div className="copy-container" onClick={handleCopyClick}>
                                <img src={isCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                                {/* <div className="relative">
                                    <Image
                                        src={isCopied ? '/assets/tick.svg' : '/assets/copy.svg'}
                                        alt="copy"
                                        fill
                                    />
                                </div> */}
                                <p className="md:text-xl font-medium text-gray_gradient text-white">work.devanshsk@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About