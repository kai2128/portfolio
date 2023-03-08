import clsx from 'clsx'
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import style from './style.module.scss'
import { useSectionStore } from '@/stores/section'
import type { ValidSection } from '@/stores/section'
import { useRandomTextHover } from '@/hooks/randomTextHover'

interface Props { }

function NavbarLink({ name, toggleOpen }: { name: ValidSection; toggleOpen: React.Dispatch<React.SetStateAction<Boolean | undefined>> }) {
  const { switchSection, active } = useSectionStore()
  const el = useRef<HTMLAnchorElement>(null)
  useRandomTextHover(el, name.substring(1))
  const nameId = name.substring(1)
  function handleNavigationClick() {
    toggleOpen(false)
    switchSection(name)
    document.getElementById('section')?.scrollIntoView({ block: 'end' })
  }

  return (
    <Link ref={el} href={name} onClick={() => handleNavigationClick()} className={clsx(active === name && style.active)}>
      nameId
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
        <NavbarLink toggleOpen={toggleOpen} name='#about'></NavbarLink>
        <NavbarLink toggleOpen={toggleOpen} name='#skills'></NavbarLink>
        <NavbarLink toggleOpen={toggleOpen} name='#projects'></NavbarLink>
        <NavbarLink toggleOpen={toggleOpen} name='#contact'></NavbarLink>
      </nav>
    </>
  )
}

export default Navbar
