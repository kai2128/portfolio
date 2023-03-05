import React from 'react'

import { TbTriangleInvertedFilled } from 'react-icons/tb'
interface Props {}

const Hero = (props: Props) => {
  return (
    <section className='w-screen h-screen relative snap-start'>
      <div className='text-background'>portfolio</div>
      <div className='flex justify-center items-center'>

      </div>
      <TbTriangleInvertedFilled className='text-xl scale-x-150 absolute left-1/2 bottom-32 animate-bounce cursor-pointer'></TbTriangleInvertedFilled>
    </section>
  )
}

export default Hero
