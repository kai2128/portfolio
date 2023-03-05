import Link from 'next/link'
import React from 'react'

type Props = {}

const DesktopNavbar = (props: Props) => {
  return (
    <nav className='absolute -left-16 top-1/2 -translate-x-1/2 -translate-y-1/2'>
      <div className='navbar-desktop'>
        <Link href='#about' className='active'>
          About
        </Link>
        <Link href='#'>
          Resume
        </Link>
        <Link href='#'>
          Skills
        </Link>
        <Link href='#'>
          Project
        </Link>
        <Link href='#'>
          Contact
        </Link>

      </div>
    </nav>
  )
}

export default DesktopNavbar