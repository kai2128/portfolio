import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import clsx from 'clsx'
import gsap, { Power2 } from 'gsap'
import React, { useEffect, useLayoutEffect, useRef } from 'react'
import style from './style.module.scss'

interface Props {
}

const LoadingIndicator = () => {
  const isFetching = useIsFetching()
  const isMutating = useIsMutating()
  const loader = useRef<HTMLDivElement>(null)
  let timeline: ReturnType<typeof gsap.timeline>
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeline = gsap.timeline({
        repeat: -1,
        repeatRefresh: true,
      })
        .to(loader.current!.childNodes[0], { ease: Power2.easeIn, backgroundColor: 'hsl(0, 0, 70%)' })
        .to(loader.current!.childNodes[1], { ease: Power2.easeIn, backgroundColor: 'hsl(0, 0, 0%)' }, '<=0.1')
        .to(loader.current!.childNodes[1], { ease: Power2.easeIn, backgroundColor: 'hsl(0, 0, 70%)' })
        .to(loader.current!.childNodes[2], { ease: Power2.easeIn, backgroundColor: 'hsl(0, 0, 0%)' }, '<=0.1')
        .to(loader.current!.childNodes[2], { ease: Power2.easeIn, backgroundColor: 'hsl(0, 0, 70%)' })
        .to(loader.current!.childNodes[3], { ease: Power2.easeIn, backgroundColor: 'hsl(0, 0, 0%)' }, '<=0.1')
        .to(loader.current!.childNodes[3], { ease: Power2.easeIn, backgroundColor: 'hsl(0, 0, 70%)' })
        .to(loader.current!.childNodes[0], { ease: Power2.easeIn, backgroundColor: 'hsl(0, 0, 0%)' }, '<=0.1')
    }, loader)
    timeline.pause()
    return () => ctx.revert()
  })
  useEffect(() => {
    if (timeline === undefined)
      return

    if (isFetching || isMutating || true)
      timeline.play()
    else
      timeline.pause()
  }, [isFetching, isMutating])
  return (
    <div className={clsx(style['loading-indicator'], (isFetching || isMutating) && style.loading)}>
      <div ref={loader} className={style.loader}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadingIndicator
