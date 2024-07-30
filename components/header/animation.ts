import { Variants } from "framer-motion";

interface Transition {
    duration: number;
    ease?: number[];
    delay?: number;
}

interface Animation{
    x?: string | number;
    scale?: number;
    transition?: Transition;
}

interface MenuSlide extends Variants {
    initial: Animation;
    enter: Animation;
    exit: Animation;
}

interface Slide extends Variants {
    initial: Animation;
    enter: (i: number) => Animation;
    exit: (i: number) => Animation;
}

interface Scale extends Variants {
    open: Animation;
    closed: Animation;
}

export const menuSlide: MenuSlide = {
    initial: { x: "calc(100% + 100px)" },
    enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }
};

export const slide: Slide = {
    initial: { x: 80 },
    enter: (i: number) => ({ x: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
    exit: (i: number) => ({ x: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })
};

export const scale: Scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } }
};