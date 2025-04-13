import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { slide, scale } from '../../animation'

type NavLinkProps = {
  data: {
    title: string;
    href: string;
    index: number;
    id: string;
  };
  isActive: boolean;
  closeNav: () => void;
  setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
}

const NavLink = ({
  data, isActive, setSelectedIndicator, closeNav
}: NavLinkProps) => {

  const { title, href, index, id } = data;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
        closeNav();
    }
}

  return (
    <motion.div
      className='link relative flex items-center'
      onMouseEnter={() => { setSelectedIndicator(href) }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className='indicator w-[10px] h-[10px] bg-accent-blue rounded-[50%] absolute -left-[30px]'
      >
      </motion.div>
      <Link onClick={(e) => handleScroll(e, id)} className='decoration no-underline text-accent-blue font-light' href={href}>{title}</Link>
    </motion.div>
  )
}

export default NavLink