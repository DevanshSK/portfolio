"use client";
import Hero from "@/components/hero/Hero";
import dynamic from 'next/dynamic'

const About = dynamic(
    () => import('@/components/sections/About'),
    { ssr: false }
)
const Projects = dynamic(
    () => import('@/components/sections/Projects'),
    { ssr: false }
)
const Clients = dynamic(
    () => import('@/components/sections/Clients'),
    { ssr: false }
)
const Contact = dynamic(
    () => import('@/components/sections/Contact'),
    { ssr: false }
)


// import About from "@/components/sections/About";
// import Projects from "@/components/sections/Projects";
// import Clients from "@/components/sections/Clients";
// import Contact from "@/components/sections/Contact";



import PreLoader from "@/components/preloader";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

// export const dynamic = "force-dynamic";

export default function Home() {

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isMounted, setIsMounted] = useState<boolean>(false);

    // useEffect( () => {

    //   const lenis = new Lenis()


    //   function raf(time: number) {

    //     lenis.raf(time)

    //     requestAnimationFrame(raf)

    //   }




    //   requestAnimationFrame(raf)

    // }, [])

    useEffect(() => {
        // if (typeof window === 'undefined') return;
        setIsMounted(true);
        let timerId = setTimeout(() => {
            setIsLoading(false);
            document.body.style.cursor = "default";
            window.scrollTo(0, 0);
        }, 2000);


        return () => {
            clearTimeout(timerId);
        }
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <PreLoader />}
            </AnimatePresence>
            <main className="relative overflow-hidden">
                <Hero />
                <div className="max-w-7xl mx-auto">
                    <About />
                    <Projects />
                    <Clients />
                </div>
                <Contact />

            </main>
        </>
    );
}
