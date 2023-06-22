/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useMemo, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { createPortal, useFrame, useThree } from '@react-three/fiber'
import type { Mesh } from 'three'
import { Color, PerspectiveCamera, RGBAFormat, Scene, Vector2, WebGLRenderTarget } from 'three'

import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass'
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass'

import gsap from 'gsap'
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass'
import { VignetteShader } from 'three/examples/jsm/shaders/VignetteShader'
import { HorizontalBlurShader } from 'three/examples/jsm/shaders/HorizontalBlurShader'
import { VerticalBlurShader } from 'three/examples/jsm/shaders/VerticalBlurShader'
import Screen from './Screen'

import { useIsMobile } from '@/hooks/useIsMobile'

export function ComputerModel(props) {
  const { nodes, materials } = useGLTF('./models/computer.glb')
  const mesh = useRef<Mesh>(null)
  const rotationX = useRef<number>(0)
  const rotationY = useRef<number>(0)
  const lerp = useRef({
    x: {
      current: 0,
      target: 0,
      ease: 0.1,
    },
    y: {
      current: 0,
      target: 0,
      ease: 0.1,
    },
  })

  const isMobile = useIsMobile()
  function handleOrientation(event: DeviceOrientationEvent) {
    if (event.alpha == null || event.beta == null || event.gamma == null)
      return

    const { beta, gamma, alpha } = event
    rotationX.current = (beta - 90) / 90
    rotationY.current = gamma / 90
    lerp.current.x.target = rotationX.current * 0.95
    lerp.current.y.target = rotationY.current * 0.95
  }

  function handleMouseMoveDesktop(event: MouseEvent) {
    rotationX.current = (event.clientY - window.innerHeight / 2) / window.innerHeight
    rotationY.current = (event.clientX - window.innerWidth / 2) / window.innerWidth
    lerp.current.x.target = rotationX.current * 0.05
    lerp.current.y.target = rotationY.current * 0.85
  }

  useEffect(() => {
    if (isMobile)
      window.addEventListener('deviceorientation', handleOrientation)
    else
      document.addEventListener('mousemove', handleMouseMoveDesktop)

    return () => {
      if (isMobile)
        window.removeEventListener('deviceorientation', handleOrientation)
      else
        document.removeEventListener('mousemove', handleMouseMoveDesktop)
    }
  }, [isMobile])
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y = lerp.current.y.current
      mesh.current.rotation.x = lerp.current.x.current
      lerp.current.x.current = gsap.utils.interpolate(lerp.current.x.current, lerp.current.x.target, 0.2)
      lerp.current.y.current = gsap.utils.interpolate(lerp.current.y.current, lerp.current.y.target, 0.2)
    }
  })

  const cam = useRef()
  const { gl } = useThree()
  const [scene, target, composer, camera] = useMemo(() => {
    const camera = new PerspectiveCamera(75, 1, 0.1, 100)
    camera.position.set(0, 0, 2.5)
    const scene = new Scene()
    scene.background = new Color('black')
    const target = new WebGLRenderTarget(1024, 1024, {
      format: RGBAFormat,
      stencilBuffer: false,
    })
    target.samples = 8

    const composer = new EffectComposer(gl, target)
    composer.addPass(new RenderPass(scene, camera))
    composer.addPass(new UnrealBloomPass(new Vector2(window.innerWidth, window.innerHeight), 0.6, 2.0, 0.75))
    composer.addPass(new FilmPass(0.5, 0.5, 500, 0))
    composer.addPass(new ShaderPass(VignetteShader))
    const effectHBlur = new ShaderPass(HorizontalBlurShader)
    const effectVBlur = new ShaderPass(VerticalBlurShader)

    composer.addPass(effectHBlur)
    composer.addPass(effectVBlur)
    return [scene, target, composer, camera]
  }, [cam.current])

  useFrame((state) => {
    state.gl.setRenderTarget(target)
    state.gl.render(scene, camera)
    composer.render(state.clock.getDelta())
    state.gl.setRenderTarget(null)
  })
  return (
    <>
      {createPortal(<Screen />, scene)}
      <group ref={mesh} {...props} dispose={null}>
        <mesh
          name="stand001"
          castShadow
          receiveShadow
          geometry={nodes.stand001.geometry}
          material={materials.stand}
          position={[-0.08, 0.65, -0.69]}
          userData={{ name: 'stand.001' }}
        />
        <mesh
          name="bezel001"
          castShadow
          receiveShadow
          geometry={nodes.bezel001.geometry}
          material={materials.bezel}
          position={[-0.08, 1.77, -1.06]}
          userData={{ name: 'bezel.001' }}
        />
        <group
          name="leverBase001"
          position={[0.45, 0.58, 0.54]}
          userData={{ name: 'leverBase.001' }}
        >
          <mesh
            name="Cube018"
            castShadow
            receiveShadow
            geometry={nodes.Cube018.geometry}
            material={materials.metal}
          />
          <mesh
            name="Cube018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube018_1.geometry}
            material={materials.black}
          />
        </group>
        <mesh
          name="controlPanel001"
          castShadow
          receiveShadow
          geometry={nodes.controlPanel001.geometry}
          material={materials['Material.001']}
          position={[-0.08, 0.47, 0.25]}
          userData={{ name: 'controlPanel.001' }}
        />
        <mesh
          name="base001"
          castShadow
          receiveShadow
          geometry={nodes.base001.geometry}
          material={materials.base}
          position={[-0.08, 0.34, -0.27]}
          userData={{ name: 'base.001' }}
        />
        <mesh
          name="leverHead001"
          castShadow
          receiveShadow
          geometry={nodes.leverHead001.geometry}
          material={materials.leverHead}
          position={[0.45, 0.85, 0.57]}
          userData={{ name: 'leverHead.001' }}
        />
        <mesh
          name="lever001"
          castShadow
          receiveShadow
          geometry={nodes.lever001.geometry}
          material={materials['metal.001']}
          position={[0.45, 0.58, 0.54]}
          userData={{ name: 'lever.001' }}
        />
        <mesh
          name="button001"
          castShadow
          receiveShadow
          geometry={nodes.button001.geometry}
          material={materials.button}
          position={[0.45, 0.65, 0.19]}
          userData={{ name: 'button.001' }}
        />
        <mesh
          name="screen"
          castShadow
          receiveShadow
          geometry={nodes.screen.geometry}
          material={materials.screen}
          position={[-0.08, 1.77, 0.03]}
          userData={{ name: 'screen' }}
        >
          <meshStandardMaterial attach='material' map={target.texture}></meshStandardMaterial>

          {/* UV check */}
          {/* <meshStandardMaterial attach='material' map={new TextureLoader().load(
            'https://threejs.org/examples/textures/uv_grid_opengl.jpg',
            (tex: Texture) => {
              tex.wrapS = tex.wrapT = RepeatWrapping
              tex.repeat.set(1, 1)
              // tex.repeat.set(3, 1)
            },
          )} ></meshStandardMaterial> */}
        </mesh>
        <mesh
          name="keycaps001"
          castShadow
          receiveShadow
          geometry={nodes.keycaps001.geometry}
          material={materials.keycaps}
          position={[-0.57, 0.71, 0.11]}
          userData={{ name: 'keycaps.001' }}
        />
        <mesh
          name="monitor001"
          castShadow
          receiveShadow
          geometry={nodes.monitor001.geometry}
          material={materials.monitor}
          position={[-0.08, 1.77, -1.06]}
          userData={{ name: 'monitor.001' }}
        />
        <mesh
          name="Text001"
          castShadow
          receiveShadow
          geometry={nodes.Text001.geometry}
          material={materials.keycaps}
          position={[-0.78, 0.28, 0.86]}
          userData={{ name: 'Text.001' }}
        />
      </group>
    </>
  )
}

useGLTF.preload('./models/computer.glb')
