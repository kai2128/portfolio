import type { PropsWithChildren } from 'react'
import React from 'react'
import DesktopNavbar from '@/components/DesktopNavbar'

interface Props {
  // decoration?: JSX.Element
}

const SectionLayout: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <section id='section' className='relative h-screen w-screen flex items-center justify-center md:px-52 snap-start'>
      <div className='text-background'>introduction</div>
      <div className='relative h-[calc(100%-300px)] z-20 bg-white/90 flex min-w-min'>
        <DesktopNavbar></DesktopNavbar>
        <h2 className='section-header'>Introduction</h2>
        <div className='section-container'>
          {children}
        </div>
        <div className='box--top-right'></div>
        <div className='box--bot-left'></div>
        <div className='box--bot-right'></div>
      </div>
      {/* {decoration && decoration} */}
      <div className='bg-dotted h-64 w-64 absolute bottom-10 right-5'></div>
      <div className='absolute left-6 bottom-6 flex gap-5'>
        <div className='rounded-full bg-[rgb(34,255,254)] w-5 h-5'></div>
        <div className='rounded-full bg-[rgb(253,35,249)] w-5 h-5'></div>
        <div className='rounded-full bg-[rgb(255,253,64)] w-5 h-5'></div>
      </div>
    </section>
  )
}

export default SectionLayout
