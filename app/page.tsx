"use client";
import Clients from "@/components/Clients";
import Description from "@/components/description";
import Experience from "@/components/Experience";
import FuzzyOverlay from "@/components/FuzzyFilter";
import Hero from "@/components/Hero";
import PreLoader from "@/components/preloader";
import About from "@/components/sections/About";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { VelocityText } from "@/components/VelocityText";
import { navItems } from "@/data";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
// import { FaHome } from "react-icons/fa";

// import RecentProjects from "@/components/RecentProjects";
const RecentProjects = dynamic(() => import('@/components/RecentProjects'), { ssr: false })

export default function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          // setIsLoading(false);
          // document.body.style.cursor = "default";
          // window.scrollTo(0, 0);
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
        <div className="max-w-7xl mx-auto">
          <Hero />
          <Description />
          <About />

        </div>

        {/* <FuzzyOverlay /> */}
      </main>
    </>
  );
}
