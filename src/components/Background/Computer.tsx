import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Preload, Stage } from '@react-three/drei'
import CanvasLoader from '../CanvasLoader'
import { ComputerModel } from './ComputerModel'
// function ComputerModel() {
//   const computer = useGLTF('./models/computer.glb')
//   const mesh = useRef<Mesh>(null)
//   const [rotationX, setRotationX] = useState<number>(0)
//   const [rotationY, setRotationY] = useState<number>(0)
//   useEffect(() => {
//     document.addEventListener('mousemove', (event) => {
//       setRotationY(((event.clientX - window.innerWidth / 2) * 1) / window.innerWidth)
//       setRotationX(((event.clientY - window.innerHeight / 2) * 0.2) / window.innerHeight)
//     })
//   }, [])

//   useFrame(({ clock }) => {
//     const delta = clock.getDelta()
//     mesh.current.rotation.y = rotationY
//     mesh.current.rotation.x = rotationX
//   })
//   return (
//     <mesh ref={mesh} castShadow>
//       <hemisphereLight intensity={0.15} groundColor='black'></hemisphereLight>
//       <pointLight></pointLight>
//       <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024}></spotLight>
//       <primitive object={computer.scene} position={[0, -1.8, 0]} scale={[1.5, 1.5, 1.5]}></primitive>
//     </mesh>
//   )
// }

export function Computer() {
  return (
    <Canvas frameloop='always' shadows gl={{ preserveDrawingBuffer: true }} camera={{ fov: 35, zoom: 0.7, near: 1, far: 1000 }} dpr={[1, 2]}>
      <Suspense fallback={<CanvasLoader></CanvasLoader>}>
        <ambientLight intensity={0.25}></ambientLight>
        <Stage
          intensity={0.5}
          preset={'portrait'}
          shadows
        >
          <ComputerModel></ComputerModel>
        </Stage>
      </Suspense>
      <Preload all></Preload>
    </Canvas>
  )
}
