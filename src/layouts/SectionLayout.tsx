import type { PropsWithChildren } from 'react'
import React from 'react'

interface Props {}

const SectionLayout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <section className='relative h-screen w-screen flex items-center justify-center px-52'>
      <div className='absolute uppercase tracking-tighter -top-5 -right-[20vw] text-[15vw] text-outline'>introduction</div>
      <div className='border border-gray-500 relative h-[calc(100%-300px)] z-20 px-8 py-8 bg-white/60'>
        {children}
        <div className='box top'></div>
      </div>
      <div className='bg-dotted h-64 w-64 absolute bottom-10 right-5'></div>
    </section>
  )
}

export default SectionLayout
