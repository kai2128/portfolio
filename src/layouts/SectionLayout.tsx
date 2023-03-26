import type { PropsWithChildren } from 'react'
import React, { useEffect, useRef } from 'react'
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc'

import { CSSTransition, SwitchTransition } from 'react-transition-group'
import DesktopNavbar from '@/components/DesktopNavbar'
import { useSectionStore } from '@/stores/section'

const SectionLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const { sectionTitle, triggerEntrance, nextSection, previousSection } = useSectionStore()
  const bgTextRef = useRef<HTMLDivElement>(null)
  const bodyRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting) {
        triggerEntrance()
        observer.unobserve(bodyRef.current!)
      }
    })
    observer.observe(bodyRef.current!)
    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <section id='section' className='relative h-screen w-screen flex items-center justify-center md:px-52 z-10 snap-center'>
      <DesktopNavbar></DesktopNavbar>
      <SwitchTransition>
        <CSSTransition key={sectionTitle} nodeRef={bodyRef} classNames='expand' addEndListener={(done) => { bodyRef.current?.addEventListener('transitionend', done, false) }}>
          <div ref={bodyRef} className='section-box'>
            <div className='relative bg-white/90 h-full'>
              <h2 className='section-header' ref={headerRef}>
                {sectionTitle}
                <div className='cover'></div>
              </h2>
              <div className='section-container'>
                {children}
              </div>
              <div className='box--top-right'></div>
              <div className='box--bot-left'></div>
              <div className='box--bot-right'></div>
            </div>
          </div>
        </CSSTransition>
      </SwitchTransition>
      <SwitchTransition>
        <CSSTransition key={sectionTitle} nodeRef={bgTextRef} classNames='fade' addEndListener={(done) => { bgTextRef.current?.addEventListener('transitionend', done, false) }}>
          <div className='text-background-deco' ref={bgTextRef}>{sectionTitle}</div>
        </CSSTransition>
      </SwitchTransition>
      <div className='bg-dotted h-64 w-64 absolute bottom-10 right-5'></div>
      <div className='absolute md:left-6 md:bottom-6 bottom-6 flex gap-5'>
        <div className='rounded-full bg-[rgb(34,255,254)] w-5 h-5'></div>
        <div className='rounded-full bg-[rgb(253,35,249)] w-5 h-5'></div>
        <div className='rounded-full bg-[rgb(255,253,64)] w-5 h-5'></div>
      </div>
      <div className='section-navigation'>
        <button onClick={previousSection}>
          <VscTriangleLeft></VscTriangleLeft>
        </button>
        <button onClick={nextSection}>
          <VscTriangleRight></VscTriangleRight>
        </button>
      </div>
    </section>
  )
}

export default SectionLayout
