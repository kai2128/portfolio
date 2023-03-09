import Link from 'next/link'
import React, { useRef } from 'react'
import clsx from 'clsx'
import style from './style.module.scss'
import type { ValidSection } from '@/stores/section'
import { useSectionStore } from '@/stores/section'
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

const DesktopNavbar = (props: Props) => {
  return (
    <nav className={style.nav}>
      <div className={style['navbar-desktop']}>
        <NavbarLink name='#about'></NavbarLink>
        <NavbarLink name='#skills'></NavbarLink>
        <NavbarLink name='#projects'></NavbarLink>
        <NavbarLink name='#contact'></NavbarLink>
        <NavbarLink name='#comments'></NavbarLink>
      </div>
    </nav>
  )
}

export default DesktopNavbar
