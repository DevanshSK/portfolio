/* eslint-disable @next/next/no-img-element */
import React from 'react'

interface Props {
    text: string;
    className: string;
    id: string;
}

const Button = ({ text, className, id }: Props) => {
    return (
        <a
            onClick={(e) => {
                e.preventDefault(); // Stop the link from jumping instantly

                const target = document.getElementById("about"); // Find the section with ID "counter"

                // Only scroll if we found the section and an ID is passed in
                // taht prevents the contact button from scrolling to the top
                if (target && id) {
                    // const offset = window.innerHeight * 0.15; // Leave a bit of space at the top

                    // // Calculate how far down the page we need to scroll
                    // const top =
                    //     target.getBoundingClientRect().top + window.pageYOffset - offset;

                    // // Scroll smoothly to that position
                    // window.scrollTo({ top, behavior: "smooth" });
                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }}
            className={`${className ?? ""} cta-wrapper relative z-20 cursor-pointer`} // Add base + extra class names
        >
            <div className="cta-button px-4 py-4 rounded-lg bg-[#282732] flex justify-center items-center relative cursor-pointer overflow-hidden group">
                <div className="bg-circle absolute -right-10 origin-center top-1/2 -translate-y-1/2 w-[120%] h-[120%] group-hover:size-10 group-hover:bg-accent-blue group-hover:right-10 rounded-full bg-[#d9ecff] transition-all duration-500" />
                <p className="text uppercase md:text-lg text-black transition-all duration-500 group-hover:text-accent-blue group-hover:-translate-x-5 xl:translate-x-0 -translate-x-5">{text}</p>
                <div className="arrow-wrapper group-hover:bg-accent-blue transition-all duration-500 size-10 rounded-full absolute right-10 top-1/2 -translate-y-1/2 flex justify-center items-center overflow-hidden">
                    <img src="/images/arrow-down.svg" alt="arrow" className='size-5 xl:-translate-y-32 translate-y-0 animate-bounce group-hover:translate-y-0 transition-all duration-500' />
                </div>
            </div>
        </a>
    );
};

export default Button;