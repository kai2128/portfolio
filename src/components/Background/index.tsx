import React from 'react'
import { Computer } from './Computer'

interface Props {}

const Background = (props: Props) => {
  return (
    <div className='fixed w-screen h-screen top-0 left-0 z-[5]'>
      <Computer></Computer>
    </div>
  )
}

export default Background
