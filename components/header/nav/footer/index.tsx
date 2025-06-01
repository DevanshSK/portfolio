import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer flex w-full text-accent-blue justify-start text-sm gap-10'>
      <Link target="_blank" href="https://github.com/DevanshSK">Github</Link>
      {/* <Link href="">Instagram</Link> */}
      <Link target="_blank" href="https://x.com/devansh_sk">Twitter</Link>
      <Link target="_blank" href="https://www.linkedin.com/in/devanshsk/">LinkedIn</Link>
    </div>
  )
}

export default Footer