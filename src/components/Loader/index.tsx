import { Html, useProgress } from '@react-three/drei'
import React from 'react'
import style from './style.module.scss'

interface Props { }

const Loader = (props: Props) => {
  const { progress } = useProgress()
  return (
    <Html>
      <div className={style['loader-background']}>
        <div className='uppercase bg-background font-semibold px-10 pb-1 relative border-b-[0.25rem] border-b-primary/20'>
          loading
          <div className={style['progress-bar']} style={{ width: `${progress.toFixed(2)}%` }}></div>
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

export default Loader
