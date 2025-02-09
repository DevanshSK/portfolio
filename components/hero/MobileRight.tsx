import React from 'react'

const MobileRight = () => {
    return (
        <>
            <div className="absolute sm:hidden text-white bg-black flex rounded-bl-3xl items-center justify-center top-0 right-0 w-28 h-16"></div>
            <div className="corner sm:hidden absolute top-0 right-28 z-10 rotate-90"></div>
            <div className="corner sm:hidden absolute top-16 right-0 z-10 rotate-90"></div>
        </>
    )
}

export default MobileRight