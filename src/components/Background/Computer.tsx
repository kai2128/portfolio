import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Environment, Preload, Stage } from '@react-three/drei'
import CanvasLoader from '../CanvasLoader'
import { ComputerModel } from './ComputerModel'

// https://stackoverflow.com/questions/65604888/trigger-react-suspense-state-while-developing
// const SuspenseTrigger = () => {
//   throw new Promise(() => { })
// }

export function Computer() {
  return (
    <Canvas frameloop='always' shadows gl={{ preserveDrawingBuffer: true }} camera={{ fov: 35, zoom: 0.7, near: 1, far: 1000 }} dpr={[1, 2]}>
      <Suspense fallback={<CanvasLoader></CanvasLoader>}>
        <ambientLight intensity={0.25}></ambientLight>
        <Stage
          intensity={0.5}
          environment={null!}
          preset={'portrait'}
          shadows
        >
          <Environment path='/models/' files="venice_sunset_1k.hdr"></Environment>
          <ComputerModel></ComputerModel>
        </Stage>
        {/* <SuspenseTrigger /> */}
      </Suspense>
      <Preload all></Preload>
    </Canvas>
  )
}
