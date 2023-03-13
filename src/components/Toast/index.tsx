import clsx from 'clsx'
import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import style from './style.module.scss'
import { useToastStore } from '@/stores/toast'

const Toast = () => {
  const { toast } = useToastStore()
  const divRef = useRef<HTMLDivElement>(null)
  return (
    <CSSTransition nodeRef={divRef} in={toast.isActive} timeout={500} classNames={{
      enter: style.in,
      enterDone: style.in,
      exit: style.out,
    }}>
      <div ref={divRef} className={clsx(style.toast)}>
        <div className={style.container}>
          <div className={style.body}>
            {toast.message}
          </div>
        </div>
      </div>
    </CSSTransition>
  )
}

export default Toast
