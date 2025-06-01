"use client";
import Hero from "@/components/hero/Hero";
import PreLoader from "@/components/preloader";
import About from "@/components/sections/About";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
// import Experience from "@/components/sections/experience/Experience";
// import Footer from "@/components/sections/Footer";
import Projects from "@/components/sections/Projects";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
// import Lenis from 'lenis';

export default function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  // useEffect( () => {

  //   const lenis = new Lenis()


  //   function raf(time: number) {

  //     lenis.raf(time)

  //     requestAnimationFrame(raf)

  //   }




  //   requestAnimationFrame(raf)

  // }, [])

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = "default";
          window.scrollTo(0, 0);
        }, 2000);
      }
    )()
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <PreLoader />}
      </AnimatePresence>
      {/* <main className="relative overflow-hidden flex justify-center items-center flex-col mx-auto"> */}
      <main className="relative overflow-hidden">
        <Hero />
        {/* <Experience /> */}
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
