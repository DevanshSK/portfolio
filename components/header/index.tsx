"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoundedButton from "../common/rounded-button";

import dynamic from "next/dynamic";
import Nav from "./nav";

const Magnetic = dynamic(() => import('../common/magnetic'), {
    ssr: false,
});


export default function Header() {
    const header = useRef<HTMLDivElement>(null);
    const [isActive, setIsActive] = useState<boolean>(false);
    const pathname = usePathname()
    const button = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isActive) setIsActive(false);
    }, []);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(button.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => { gsap.to(button.current, { scale: 1, duration: 0.25, ease: "power1.out" }) },
                onEnterBack: () => { gsap.to(button.current, { scale: 0, duration: 0.25, ease: "power1.out" }); setIsActive(false); }
            }
        });
    }, [])

    return (
        <>
            <div ref={header} className="header absolute flex z-[10] top-0 text-white p-[35px] justify-between w-full font-light box-border items-center">
                <div className="logo group/logo flex cursor-pointer">
                    <p className="copyright group-hover/logo:rotate-[360deg] m-0 transition-all duration-500 ease-nav">&copy;</p>
                    <div className="name group-hover/logo:pr-[55px] flex relative overflow-hidden whitespace-nowrap ml-[5px] transition-all duration-500 ease-nav">
                        <p className="code-by group-hover/logo:-translate-x-full relative transition-all duration-500 ease-nav">Code by</p>
                        <p className="devansh group-hover/logo:-translate-x-[65px] relative transition-all duration-500 ease-nav pl-[0.3em]">Devansh</p>
                        <p className="singh-kushwah group-hover/logo:-translate-x-[65px] absolute transition-all duration-500 ease-nav left-[130px] pl-[0.3em]">Singh Kushwah</p>
                    </div>
                </div>

                <div className="nav flex flex-col md:flex-row items-end md:items-center">
                    <Magnetic>
                        <div className="el flex flex-col relative z-[10] p-[2px] md:p-4 cursor-pointer group/el">
                            <a className="cursor-pointer" href="#">About</a>
                            <div className="indicator hidden md:block absolute w-[5px] h-[5px] top-[45px] left-1/2 bg-white rounded-[50%] scale-0 -translate-x-1/2 transition-all duration-500 ease-nav group-hover/el:scale-100"></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className="el flex flex-col relative z-[10] p-[2px] md:p-4 cursor-pointer group/el">
                            <a className="cursor-pointer" href="#">Work</a>
                            <div className="indicator hidden md:block absolute w-[5px] h-[5px] top-[45px] left-1/2 bg-white rounded-[50%] scale-0 -translate-x-1/2 transition-all duration-500 ease-nav group-hover/el:scale-100"></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className="el flex flex-col relative z-[10] p-[2px] md:p-4 cursor-pointer group/el">
                            <a className="cursor-pointer" href="#">Contact</a>
                            <div className="indicator hidden md:block absolute w-[5px] h-[5px] top-[45px] left-1/2 bg-white rounded-[50%] scale-0 -translate-x-1/2 transition-all duration-500 ease-nav group-hover/el:scale-100"></div>
                        </div>
                    </Magnetic>
                    
                </div>
            </div>
            <div ref={button} className="header-button-container scale-0 fixed right-0 z-[100]">
                <RoundedButton onClick={() => {setIsActive(!isActive)}} 
                    className="button relative m-5 w-20 h-20 rounded-[50%] bg-accent cursor-pointer flex items-center justify-center"
                >
                    <div className={`burger w-full relative z-[50] before:-top-[5px] after:top-[5px] 
                        before:content-[""] before:block before:h-[2px] before:rounded-md before:w-[40%] before:m-auto before:bg-black-100 before:relative before:transition-transform before:duration-300 
                        after:content-[""] after:block after:h-[2px] after:rounded-md after:w-[40%] after:m-auto after:bg-black-100 after:relative after:transition-transform after:duration-300  
                        ${isActive ? "burgerActive before:-rotate-45 before:top-[1px] after:rotate-45 after:top-[1px]" : ""}`}></div>
                </RoundedButton>
            </div>
            <AnimatePresence>
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    )
}