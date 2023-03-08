import React from 'react'

import { TbTriangleInvertedFilled } from 'react-icons/tb'
interface Props {}

const Hero = (props: Props) => {
  return (
    <section className='w-screen h-screen relative'>
      <div className='text-background'>portfolio</div>
      <div className='flex justify-center items-center'>

      </div>
      <button className='absolute bottom-28 p-10 w-full flex justify-center items-center' onClick={() => document.getElementById('section')?.scrollIntoView()}>
        <TbTriangleInvertedFilled className='text-xl scale-x-150 animate-bounce'></TbTriangleInvertedFilled>
      </button>
    </section>
  )
}

export default Hero
