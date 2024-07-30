import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer flex w-full justify-start text-sm gap-10'>
      <Link href="https://github.com/DevanshSK">Github</Link>
      <Link href="">Instagram</Link>
      <Link href="https://www.linkedin.com/in/devanshsk/">LinkedIn</Link>
    </div>
  )
}

export default Footer