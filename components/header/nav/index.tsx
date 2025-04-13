import React, { useState, forwardRef } from 'react'
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation';
import { menuSlide } from '../animation';
import NavLink from './navlink';
import Curve from './curve';
import Footer from './footer';

interface NavItem {
    title: string;
    href: string;
    id: string;
}

interface NavProps{
    closeNav: () => void;
}

const navItems: NavItem[] = [
    {
        title: "Home",
        href: "/",
        id: "home",
    },
    {
        title: "About",
        href: "/#about",
        id: "about",
    },
    {
        title: "Work",
        href: "/#projects",
        id: "projects",
    },
    {
        title: "Contact",
        href: "/#contact",
        id: "contact",
    },
]

const Nav = forwardRef<HTMLDivElement, NavProps>(({closeNav}, ref) => {
    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState<string>(pathname);

    
    return (
        <motion.div
            ref={ref}
            variants={menuSlide}
            initial="initial"
            animate="enter"
            exit="exit"
            className='menu h-screen bg-black w-full max-w-lg fixed right-0 top-0 text-black z-[90]'
            // className='menu h-screen bg-lightbg w-full max-w-lg fixed right-0 top-0 text-black z-[90]'
        >
            <div className="body box-border h-full p-16 sm:p-[100px] flex flex-col justify-between">
                <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className="nav flex flex-col text-[56px] gap-3  my-8">
                    <div className="header text-accent-blue border-b-2 border-b-black-100 uppercase text-xs mb-10 pb-2">
                    {/* <div className="header text-black-100 border-b-2 border-b-black-100 uppercase text-xs mb-10 pb-2"> */}
                        <p>Navigation</p>
                    </div>
                    {
                        navItems.map((data, index) => {
                            return <NavLink
                                key={index}
                                data={{ ...data, index }}
                                closeNav={closeNav}
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
});

Nav.displayName = 'Nav';

export default Nav