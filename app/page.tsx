"use client";
import Description from "@/components/description";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import PreLoader from "@/components/preloader";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { FaHome } from "react-icons/fa";

// import RecentProjects from "@/components/RecentProjects";
const RecentProjects = dynamic(() => import('@/components/RecentProjects'), { ssr: false })

export default function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(true);

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
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero />
          <Description />
          <RecentProjects />
        </div>
        <div className="noise"></div>

      </main>
    </>
  );
}
