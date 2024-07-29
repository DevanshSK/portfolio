import React, { useEffect, useRef } from 'react';
import Magnetic from '../magnetic';
import "./RoundedButton.css"

type Props = {
    children: React.ReactNode;
    backgroundColor: string;
    [key: string]: any;
}

const RoundedButton = ({ children, backgroundColor = "#455CE9", ...attributes }: Props) => {
    const circle = useRef<HTMLDivElement>(null);
    const timeline = useRef<gsap.core.Timeline | null>(null);
    let timeoutId: NodeJS.Timeout | null = null;

    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current
            .to(circle.current, { top: "-25%", width: "150%", duration: 0.4, ease: "power3.in" }, "enter")
            .to(circle.current, { top: "-150%", width: "125%", duration: 0.25 }, "exit");
    }, []);

    const manageMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeline.current?.tweenFromTo('enter', 'exit');
    };

    const manageMouseLeave = () => {
        timeoutId = setTimeout(() => {
            timeline.current?.play();
        }, 300);
    };

    return (
        <Magnetic>
            <div className='roundedButton rounded-[3em] border-[1px] border-[#888888] cursor-pointer relative flex items-center justify-center px-[60px] py-4'
                style={{
                    overflow: "hidden"
                }}
                onMouseEnter={manageMouseEnter}
                onMouseLeave={manageMouseLeave}
                {...attributes}
            >
                {children}
                <div ref={circle} style={{ backgroundColor }} className="circle w-full h-[150%] absolute rounded-[50%] top-full"></div>
            </div>
        </Magnetic>
    )
}

export default RoundedButton