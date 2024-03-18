import { useRef } from "react";
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'


const ThreeElements = () => {
 const boxRef = useRef<THREE.Mesh>(null);
    useFrame((state, delta) => {
        boxRef.current.rotation.x += delta;
        boxRef.current.position.x += 0.01;
        boxRef.current.scale.x += 0.01;
    })



 return (
  <>
      <directionalLight position={[5,5,5]}/>
      <mesh ref={boxRef}
            position={[0,0,0]}
            scale={[1,1,1]}
            rotation={[
                THREE.MathUtils.degToRad(0),
                THREE.MathUtils.degToRad(0),
                THREE.MathUtils.degToRad(0),
            ]}
      >
          <boxGeometry />
          {/*<sphereGeometry/> 원형 */}
          <meshStandardMaterial color="red"/>
      </mesh>
  </>
 );
}

export default ThreeElements;