import clsx from 'clsx'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import style from './style.module.scss'
import { useSectionStore } from '@/stores/section'
import type { ValidSection } from '@/stores/section'
import { useRandomTextHover } from '@/hooks/randomTextHover'

interface Props { }

function NavbarLink({ name }: { name: ValidSection }) {
  const { switchSection, active } = useSectionStore()
  const el = useRef<HTMLAnchorElement>(null)
  useRandomTextHover(el, name.substring(1))

  return (
    <Link ref={el} href={name} onClick={() => switchSection(name)} className={clsx(active === name && style.active)}>
      {name.substring(1)}
    </Link>
  )
}

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
        <NavbarLink name='#about'></NavbarLink>
        <NavbarLink name='#skills'></NavbarLink>
        <NavbarLink name='#projects'></NavbarLink>
        <NavbarLink name='#contact'></NavbarLink>
      </nav>
    </>
  )
}

export default Navbar
