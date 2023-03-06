import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import style from './style.module.scss'
import type { ValidSection } from '@/stores/section'
import { useSectionStore } from '@/stores/section'

interface Props { }

function NavbarLink({ name }: { name: ValidSection }) {
  const { switchSection, active } = useSectionStore()
  return (
    <Link href={name} onClick={() => switchSection(name)} className={clsx(active === name && style.active)}>
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
      </div>
    </nav>
  )
}

export default DesktopNavbar
