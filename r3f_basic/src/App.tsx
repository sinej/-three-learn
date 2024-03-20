import './App.css'
import { Canvas } from '@react-three/fiber'
import LightTest from './lightTest.tsx';
import { OrbitControls } from '@react-three/drei';

function App() {

  return (
    <>
      <Canvas
        camera={{
          fov:75,
          near:1,
          far:100,
          position:[5,5,5]
        }}
      >
        <color attach="background" args={['white']} />
        <OrbitControls />
        <axesHelper args={[6]} />
        <gridHelper args={[10, 10]} />
        <LightTest />
      </Canvas>
    </>
  )
}

export default App
