import React from 'react'

const MagicButton = ({
    title, icon, position, handleClick, otherClasses, wrapperClasses
}: {
    title: string;
    icon: React.ReactNode;
    position: string;
    handleClick?: () => void;
    otherClasses?: string;
    wrapperClasses?: string;
}) => {
    // return (
    //     <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10" onClick={handleClick}>
    //         <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    //         <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
    //             {position === 'left' && icon}
    //             {title}
    //             {position === 'right' && icon}
    //         </span>
    //     </button>
    // )

    return (
        <div className={`relative inline-flex group ${wrapperClasses}`}>
            {/* <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-[conic-gradient(from_90deg_at_50%_50%,#44BCFF_0%,#FF44EC_50%,#FF675E_100%)] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div> */}
            {/* <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#EB5837]  to-[#FF44EC] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div> */}
            <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#EB5837] via-[#eb8b37]  to-[#EB5837] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

            <button onClick={handleClick} title="" className={`relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 ${otherClasses}`} role="button">
                {position === 'left' && icon}
                {title}
                {position === 'right' && icon}
            </button>
        </div>
    )
}

export default MagicButton