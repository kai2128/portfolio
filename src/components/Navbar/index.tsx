import clsx from 'clsx'
import Link from 'next/link'
import React, { useState } from 'react'
import style from './style.module.scss'

interface Props { }

const Navbar = (props: Props) => {
  const [isOpen, toggleOpen] = useState<Boolean>()

  return (
    <>
    <div className={style['menu-button-wrap']} onClick={() => toggleOpen(!isOpen)}>
        <button className={clsx(style['menu-button'], isOpen && style.open)}>
        <span></span>
      </button>
    </div>
      <nav className={clsx(style.navbar, isOpen && style.open)} onClick={() => toggleOpen(!isOpen)}>
      <Link href='#about'>
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
    </nav>
    </>
  )
}

export default Navbar
