"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RoundedButton from "../common/rounded-button";

import dynamic from "next/dynamic";

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
            <div ref={header} className="header absolute flex z-[1] top-0 text-white p-[35px] justify-between w-full font-light box-border items-center">
                <div className="logo group/logo flex cursor-pointer">
                    <p className="copyright group-hover/logo:rotate-[360deg] m-0 transition-all duration-500 ease-nav">&copy;</p>
                    <div className="name group-hover/logo:pr-[55px] flex relative overflow-hidden whitespace-nowrap ml-[5px] transition-all duration-500 ease-nav">
                        <p className="code-by group-hover/logo:-translate-x-full relative transition-all duration-500 ease-nav">Code by</p>
                        <p className="devansh group-hover/logo:-translate-x-[65px] relative transition-all duration-500 ease-nav pl-[0.3em]">Devansh</p>
                        <p className="singh-kushwah group-hover/logo:-translate-x-[65px] absolute transition-all duration-500 ease-nav left-[130px] pl-[0.3em]">Singh Kushwah</p>
                    </div>
                </div>

                <div className="nav flex items-center gap-5">
                    <Magnetic>
                        <div className="el">
                            <a href="#">Work</a>
                            <div className="indicator"></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className="el">
                            <a href="#">About</a>
                            <div className="indicator"></div>
                        </div>
                    </Magnetic>
                    <Magnetic>
                        <div className="el">
                            <a href="#">Contact</a>
                            <div className="indicator"></div>
                        </div>
                    </Magnetic>
                </div>
            </div>
            <div ref={button} className="header-button-container">
                <RoundedButton onClick={() => {setIsActive(!isActive)}} 
                    className="button"
                >
                    <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
                </RoundedButton>
            </div>
            <AnimatePresence>
                {isActive && <Nav />}
            </AnimatePresence>
        </>
    )
}