import { Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import type { Mesh } from 'three'

interface Props { }

const Screen = (props: Props) => {
  const mesh = useRef<Mesh>(null)
  useFrame(() => {
    mesh.current.rotation.y += 0.01
  })
  const [text] = useTypewriter({
    words: [
      '(o^ ^o)/',
      '(^ ^#)',
      '{(>_<)}',
      'o(>< )o',
      '(o_O) !',
      '(x_x)',
      'w(°-°)w',
      '(O_O;)',
      '(°ロ°) !',
    ],
    loop: true,
    delaySpeed: 2000,
    typeSpeed: 250,
  })
  return (
    <>
        <mesh ref={mesh} rotation={[-15, 0, 0]}>
          <boxGeometry ></boxGeometry>
          <meshNormalMaterial attach="material" wireframe />
        </mesh>
      <Text font='http://fonts.gstatic.com/s/dotgothic16/v15/v6-QGYjBJFKgyw5nSoDAGH7M6Xk.woff'>
        {text}
      </Text>
    </>
  )
}

export default Screen
