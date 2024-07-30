import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { slide, scale } from '../../animation'

type NavLinkProps = {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: React.Dispatch<React.SetStateAction<string>>;
}

const NavLink = ({
  data, isActive, setSelectedIndicator
}: NavLinkProps) => {

  const { title, href, index } = data;

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
        className='indicator w-[10px] h-[10px] bg-black-100 rounded-[50%] absolute -left-[30px]'
      >
      </motion.div>
      <Link className='decoration no-underline text-black font-light' href={href}>{title}</Link>
    </motion.div>
  )
}

export default NavLink