import { workExperience } from '@/data'
import React from 'react'

const Experience = () => {
  return (
    <div className='py-10' id='testimonials'>
        <h1 className='heading'>
            My {" "}
            <span className='text-purple'>Specializations</span>
        </h1>
        <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
            {/* {workExperience.map((card) => (
                <Button>
                    
                </Button>
            ))} */}
        </div>
    </div>
  )
}

export default Experience