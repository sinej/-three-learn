import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei';
import InteractionTest from "./InteractionTest.tsx";
// import MaterialTest from "./MaterialTest.tsx";
// import LightTest from './LightTest.tsx';

function App() {

  return (
    <>
      <Canvas
        shadows
        camera={{
          position:[5,5,5]
        }}
      >
        <color attach="background" args={['black']} />
        <OrbitControls />
        <axesHelper args={[6]} />
        <gridHelper args={[10, 10]} />
        {/*<MaterialTest/>*/}
        {/*<LightTest />*/}
        <InteractionTest />
      </Canvas>
    </>
  )
}

export default App
