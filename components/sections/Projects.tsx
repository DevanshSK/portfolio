import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../common/title-header";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const rydeRef = useRef<HTMLDivElement>(null);
    const libraryRef = useRef<HTMLDivElement>(null);
    const ycDirectoryRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });
    }, []);

    return (
        <div
            className="px-5 md:px-20 py-10 md:py-20 md:pb-10"
            id='projects'
        >

            <TitleHeader
                title='My Recent Work'
                sub='🚀 Things I’ve Built Recently'
            />

            <div
                ref={sectionRef}
                className='app-showcase my-20 w-full flex items-center justify-center'
            >
                <div className="w-full">
                    <div className="showcaseLayout flex xl:flex-row flex-col gap-10 justify-between">

                        <div ref={rydeRef} className="first-project-wrapper h-full flex flex-col justify-between xl:w-[60%]">
                            <div className="image-wrapper xl:h-[70vh] md:h-[50vh] h-96 relative rounded-xl xl:px-5 2xl:px-12 py-0 bg-[#b8dfaa]">
                                {/* <div className="image-wrapper xl:h-[70vh] md:h-[50vh] h-96 relative"> */}
                                <img className="w-full h-full object-contain rounded-xl" src="/images/intervu-mockup.png" alt="InterVu Mockup" />
                                {/* <img className="w-full h-full object-cover rounded-xl absolute inset-0" src="/images/react-native-jobs.png" alt="Intervu Platform" /> */}
                            </div>
                            <div className="text-content space-y-5 mt-5">
                                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                                    {"InterVu: Conducting Interviews Made Simple with a Powerful, User-Friendly Appcalled InterVu"}
                                    {/* {"Conducting Interviews Made Simple with a Powerful, User-Friendly Appcalled InterVu"} */}
                                </h2>
                                <p className="text-white-50 md:text-xl">
                                    A powerful, user-Friendly interview platform built with NextJS, Convex, Stream, & Clerk for a fast and smooth interview experience.
                                </p>
                            </div>
                        </div>

                        <div className="project-list-wrapper flex md:flex-row flex-col xl:flex-col gap-10 xl:w-[40%] overflow-hidden">
                            <div className="project" ref={libraryRef}>
                                <div className="image-wrapper xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl xl:px-5 2xl:px-12 py-0 bg-[#FFEFDB]">
                                    <img
                                        className="w-full h-full object-contain rounded-xl"
                                        src="/images/add-learn-mockup.png"
                                        // src="/images/project2.png"
                                        alt="ADD Learn mockup"
                                    />
                                </div>
                                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">ADD Learn - An Online E-Learning Platform</h2>
                            </div>

                            <div className="project" ref={ycDirectoryRef}>
                                <div className="image-wrapper xl:h-[37vh] md:h-52 lg:h-72 h-64 relative rounded-xl xl:px-5 2xl:px-12 py-0 bg-[#FFE7EB]">
                                    <img className="w-full h-full object-contain rounded-xl" src="/images/add-trends-mockup.png" alt="ADD Trends Mockup" />
                                </div>
                                <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mt-5">ADD Trends - A Clothing Ecommerce App</h2>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects