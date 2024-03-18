import './App.css'
import {Canvas} from "@react-three/fiber";
import ThreeElements from "./ThreeElements.tsx";
import {OrbitControls} from "@react-three/drei";

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
            {/* Math.PI = 180 */}
            {/* Math.PI * 2 = 360 */}
            {/* Math.PI / 4 = 45 */}
            <OrbitControls
                // minAzimuthAngle={-Math.PI / 4}
                // maxAzimuthAngle={Math.PI / 4}
                // minPolarAngle={Math.PI / 6}
                // maxPolarAngle={Math.PI - Math.PI / 6}
            />
            <axesHelper args={[5]}/>
            <gridHelper args={[20,20,0xff0000,'teal']}/>
            <ThreeElements/>
        </Canvas>
    </>
  )
}

export default App
