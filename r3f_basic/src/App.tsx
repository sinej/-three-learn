import './App.css'
import {Canvas} from "@react-three/fiber";
import ThreeElements from "./ThreeElements.tsx";

function App() {

  return (
    <>
        <Canvas
            // orthographic
            camera={{
                near: 1,
                far: 20,
                fov: 75,
                position: [3,3,0]
            }}
        >
            <ThreeElements/>
        </Canvas>
    </>
  )
}

export default App
