import './App.css'
import {Canvas} from "@react-three/fiber";
import ThreeElements from "./ThreeElements.tsx";
function App() {

  return (
    <>
        <Canvas>
            <ThreeElements/>
        </Canvas>
    </>
  )
}

export default App
