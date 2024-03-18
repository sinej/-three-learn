import { useRef } from "react";
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'


const ThreeElements = () => {
 const boxRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        // boxRef.current.rotation.x += delta;
        // boxRef.current.position.y += delta;
        // boxRef.current.scale.z += 0.01;
    })



 return (
  <>
      <directionalLight position={[5,5,5]}/>
      <mesh rotation={[THREE.MathUtils.degToRad(45),THREE.MathUtils.degToRad(45),0]}
            ref={boxRef}
      >
          <boxGeometry />
          {/*<sphereGeometry/> 원형 */}
          <meshStandardMaterial color="red"/>
      </mesh>
  </>
 );
}

export default ThreeElements;