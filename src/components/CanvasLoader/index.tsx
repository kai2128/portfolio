import { Html, useProgress } from '@react-three/drei'
import React from 'react'
import style from './style.module.scss'

interface Props { }

const CanvasLoader = (props: Props) => {
  const { progress } = useProgress()
  return (
    <Html>
      <div className='absolute -top-0 -left-0 -translate-x-1/2 -translate-y-1/2 -z-10'>
        <div className={style['loader-background']}>
          <div className='uppercase bg-background font-semibold px-10 pb-1 relative border-b-[0.25rem] border-b-primary/20'>
            loading
            <div className={style['progress-bar']} style={{ width: `${progress.toFixed(2)}%` }}></div>
          </div>
        </div>
      </div>
      <p style={{
        color: '#f1f1f1',
        fontSize: 14,
        fontWeight: 800,
        marginTop: 40,
      }}></p>
    </Html>
  )
}

export default CanvasLoader
