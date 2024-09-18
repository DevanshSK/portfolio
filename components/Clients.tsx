import React from 'react'
import { Cover } from './ui/SparcleText/Cover'

const Clients = () => {
    return (
        <div id='testimonials' className='py-20'>
            <h1 className='heading'>
                Kind words from {" "}
                <Cover><span className='text-primary'>Satisfied Clients</span></Cover>
                {/* <span className='text-purple'>satisfied clients</span> */}
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">

            </div>
        </div>
    )
}

export default Clients