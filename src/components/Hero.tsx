import React from 'react'

import { TbTriangleInvertedFilled } from 'react-icons/tb'
import { AiFillGithub } from 'react-icons/ai'
import Link from 'next/link'
interface Props {}

const Hero = (props: Props) => {
  return (
    <section className='w-screen h-screen relative'>
      <div className='text-background'>portfolio</div>
      <div className='flex justify-center items-center h-full relative z-10 flex-col'>
        <div className='text-5xl tracking-wider uppercase font-extralight md:self-start mb-[25rem] lg:ml-[15rem] md:mb-[25rem] md:ml-[4rem] ml-8 relative'>
          <div className='hero-title'>kai2128 portfolio</div>

          <div className='flex md:flex-col justify-start items-start absolute gap-1'>
            <Link href='https://github.com/kai2128' target='_blank' referrerPolicy='no-referrer' className='icon-link'>
              <AiFillGithub></AiFillGithub>
            </Link>
          </div>
        </div>

        <ul className='list-square text-2xl font-light md:self-end lg:mr-[5rem] mr-[3rem] mb-[5rem] space-y-2'>
          <li>Web Developer</li>
          <li>Software Engineer</li>
          <li>Programmer</li>
        </ul>
      </div>
      <button className='absolute bottom-28 p-10 w-full flex justify-center items-center z-30' onClick={() => document.getElementById('section')?.scrollIntoView()}>
        <TbTriangleInvertedFilled className='text-xl scale-x-150 animate-bounce'></TbTriangleInvertedFilled>
      </button>
    </section>
  )
}

export default Hero
