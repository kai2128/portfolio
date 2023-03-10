import React from 'react'

import { TbTriangleInvertedFilled } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'
interface Props {}
const Hero = (props: Props) => {
  function scrollToSection() {
    document.getElementById('section')?.scrollIntoView({ block: 'end', inline: 'end', behavior: 'smooth' })
  }
  return (
    <section className='w-screen h-screen relative'>
      <div className='text-background'>portfolio</div>
      <div className='flex justify-center items-center h-full relative z-10 flex-col max-w-[1100px] mx-auto'>
        <div className='text-4xl md:text-5xl tracking-wider uppercase font-extralight lg:self-start absolute top-36 md:top-44'>
          <div className='hero-title'>kai2128 portfolio</div>

          <div className='flex md:flex-col justify-start items-start absolute gap-1'>
            <Link href='https://github.com/kai2128' target='_blank' referrerPolicy='no-referrer' className='icon-link'>
              <AiFillGithub></AiFillGithub>
            </Link>
          </div>
        </div>

        <ul className='list-square text-lg bottom-44 md:text-2xl font-light md:block md:self-end md:space-y-2 md:bottom-60 absolute'>
          <li>Web Developer</li>
          <li>Software Engineer</li>
          <li>Programmer</li>
        </ul>
      </div>
      <button className='absolute bottom-14 md:bottom-28 p-10 w-full flex justify-center items-center z-30' onClick={() => scrollToSection()}>
        <TbTriangleInvertedFilled className='text-xl scale-x-150 animate-bounce'></TbTriangleInvertedFilled>
      </button>
    </section>
  )
}

export default Hero
