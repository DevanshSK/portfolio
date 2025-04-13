/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React, { useCallback, useState } from 'react'
import Globe from "react-globe.gl";
import Button from '../common/cta-button/Button';
// import SpotlightCard from '../common/spotlight-card/SpotlightCard';
import { GlowingEffect } from '../common/glowing-card/GlowingCard';
// import Button from '../elements/Button';

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
        <div id="about">
            <section className='c-space pt-10 mt-10 mb-20' >
                {/* <section className='c-space mt-20 mb-20' > */}
                <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">

                    <div className="col-span-1 xl:row-span-3 relative">
                        <GlowingEffect
                            spread={60}
                            glow={true}
                            disabled={false}
                            proximity={150}
                            inactiveZone={0.01}
                            className='rounded-lg'
                        />
                        {/* <SpotlightCard className='bg-black-200'> */}
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
                                <p className="grid-subtext">Half artist, half engineer, all developer. I blend the creativity of frontend design with the precision of backend architecture to create digital ecosystems where form and function dance in perfect harmony.</p>
                                {/* <p className="grid-subtext">Digital architect who transforms caffeine into code. I craft pixel-perfect frontends and bulletproof backends with equal passion, turning &apos;impossible&apos; requirements into elegant solutions that users never want to close.</p> */}
                            </div>
                        </div>
                        {/* </SpotlightCard> */}

                    </div>

                    <div className="col-span-1 xl:row-span-3">
                        {/* <SpotlightCard className='bg-black-200'> */}
                        <GlowingEffect
                            spread={60}
                            glow={true}
                            disabled={false}
                            proximity={150}
                            inactiveZone={0.01}
                            className='rounded-lg'
                        />
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
                                <p className='grid-subtext'>React whisperer who makes components sing in harmony. I wield the MERN stack like a digital Swiss Army knife, crafting experiences that feel like magic to users while being maintainable marvels for developers.</p>
                                {/* <p className='grid-subtext'>React ecosystem specialist who treats performance optimization like an extreme sport. My applications built with MERN, Next.js, and React Native don&apos;t just run—they fly, while maintaining rock-solid reliability.</p> */}
                                {/* <p className='grid-subtext'>I specialize in building robust and scalable applications using MERN, Next.js, Spring Boot with Java, and React Native.</p> */}
                            </div>
                        </div>
                        {/* </SpotlightCard> */}
                    </div>

                    <div className="col-span-1 xl:row-span-4">
                        {/* <SpotlightCard className='bg-black-200'> */}
                        <GlowingEffect
                            spread={60}
                            glow={true}
                            disabled={false}
                            proximity={150}
                            inactiveZone={0.01}
                            className='rounded-lg'
                        />
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
                                    {"The sun never sets on my availability"}
                                    {/* {"I am very flexible with timezone communications and locations."} */}
                                </p>
                                <p className="grid-subtext mb-10">
                                    I&apos;m based in Gwalior, India. I&apos;ve mastered the art of being virtually present across all time zones. Your 3AM emergency is my &apos;let me solve that right now&apos; moment.
                                </p>
                                {/* <Button name='Contact Me' isBeam containerClass='w-full mt-10' /> */}
                                <Button
                                    text="Contact Me"
                                    className="md:w-80 md:h-16 w-60 h-12"
                                    id="contact"
                                />
                            </div>
                        </div>
                        {/* </SpotlightCard> */}
                    </div>

                    <div className="xl:col-span-2 xl:row-span-3">
                        {/* <SpotlightCard className='bg-black-200'> */}
                        <GlowingEffect
                            spread={60}
                            glow={true}
                            disabled={false}
                            proximity={150}
                            inactiveZone={0.01}
                            className='rounded-lg'
                        />
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
                                <p className="grid-headtext">The beautiful logic of creation</p>
                                <p className="grid-subtext">
                                    My fascination with code lies in its perfect balance: mathematical precision meets artistic expression. I live for those moments when complex challenges surrender to elegant solutions.
                                </p>
                            </div>
                        </div>
                        {/* </SpotlightCard> */}
                    </div>

                    <div className="xl:col-span-1 xl:row-span-2">
                        {/* <SpotlightCard className='bg-black-200'> */}
                        <GlowingEffect
                            spread={60}
                            glow={true}
                            disabled={false}
                            proximity={150}
                            inactiveZone={0.01}
                            className='rounded-lg'
                        />
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
                        {/* </SpotlightCard> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About