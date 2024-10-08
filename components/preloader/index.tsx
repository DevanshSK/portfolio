'use client';
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { opacity, slideUp } from './anim';

const words = ["Hello", "Bonjour", "Ciao", "Olà", "やあ", "Hallå", "Guten tag", "Hallo"]

interface Dimension {
    width: number;
    height: number;
}

const PreLoader = () => {
    const [index, setIndex] = useState<number>(0);
    const [dimension, setDimension] = useState<Dimension>({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect( () => {
        setDimension({width: window.innerWidth, height: window.innerHeight})
    }, [])

    useEffect(() => {
        if (index == words.length - 1) return;
        setTimeout(() => {
            setIndex(index + 1);
        }, index == 0 ? 1000 : 150);
    }, [index]);


    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`

    const curve = {
        initial: {
            d: initialPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1]}
        },
        exit: {
            d: targetPath,
            transition: {duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3}
        }
    }


    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            animate="enter"
            exit="exit"
            className='introduction h-screen w-screen flex items-center justify-center fixed z-[500] bg-white-800'
        >
            {dimension.width > 0 && 
            <>
                <motion.p className='flex text-black-100 font-generalsans font-normal text-[42px] items-center absolute z-[1500]' variants={opacity} initial="initial" animate="enter" exit="exit" ><span className='block w-[10px] h-[10px] bg-black-100 rounded-[50px] mr-[10px]'></span>{words[index]}</motion.p>
                <svg className='absolute top-0 w-full h-[calc(100%+300px)]'>
                    <motion.path className="fill-white-800" variants={curve} initial="initial" exit="exit"></motion.path>
                </svg>
            </>
            }
        </motion.div>
    )
}

export default PreLoader