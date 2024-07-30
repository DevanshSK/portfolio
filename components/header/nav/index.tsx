import React, {useState} from 'react'
import {motion} from "framer-motion";
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import NavLink from './navlink';
import Curve from './curve';
import Footer from './footer';

interface NavItem{
    title: string;
    href: string;
}

const navItems: NavItem[] = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Work",
        href: "/#work",
    },
    {
        title: "About",
        href: "/#about",
    },
    {
        title: "Contact",
        href: "/#contact",
    },
]

const Nav = () => {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname);
  return (
    <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className='menu h-screen bg-slate w-full max-w-lg fixed right-0 top-0 text-black z-[90]'
    >
        <div className="body box-border h-full p-16 sm:p-[100px] flex flex-col justify-between">
            <div onMouseLeave={() => {setSelectedIndicator(pathname)}} className="nav flex flex-col text-[56px] gap-3  my-8">
                <div className="header text-black-100 border-b-2 border-b-black-100 uppercase text-xs mb-10 pb-2">
                    <p>Navigation</p>
                </div>
                {
                    navItems.map((data, index) => {
                        return <NavLink
                            key={index}
                            data={{...data, index}}
                            isActive={selectedIndicator == data.href}
                            setSelectedIndicator={setSelectedIndicator}
                        />
                    })
                }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}

export default Nav