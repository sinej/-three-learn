import { useRef } from "react";
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'


const ThreeElements = () => {
 const boxRef = useRef<THREE.Mesh>(null);
 const groupRef = useRef<THREE.Group>(null);
    useFrame((state, delta) => {
        // boxRef.current.rotation.x += delta;
        // boxRef.current.position.x += 0.01;
        // boxRef.current.scale.x += 0.01;
        // scence.rotation.x = THREE.MathUtils.degToRad(45)
        // scence.rotation.x += 0.01;
        groupRef.current.rotation.x += delta;
    })



 return (
     <>
         <directionalLight position={[5, 5, 5]}/>
         <group position={[0,0,0]} ref={groupRef}>
             <mesh ref={boxRef}
                   position={[0, 0, 0]}
                   scale={[1, 1, 1]}
                   rotation={[
                       THREE.MathUtils.degToRad(0),
                       THREE.MathUtils.degToRad(0),
                       THREE.MathUtils.degToRad(0),
                   ]}
             >
                 <boxGeometry/>
                 {/*<sphereGeometry/> 원형 */}
                 <meshStandardMaterial color="red"/>
             </mesh>
             <mesh ref={boxRef}
                   position={[0, 2, 0]}
                   scale={[1, 1, 1]}
                   rotation={[
                       THREE.MathUtils.degToRad(0),
                       THREE.MathUtils.degToRad(0),
                       THREE.MathUtils.degToRad(0),
                   ]}
             >
                 <boxGeometry/>
                 {/*<sphereGeometry/> 원형 */}
                 <meshStandardMaterial color="green"/>
             </mesh>
             <mesh ref={boxRef}
                   position={[2, 0, 0]}
                   scale={[1, 1, 1]}
                   rotation={[
                       THREE.MathUtils.degToRad(0),
                       THREE.MathUtils.degToRad(0),
                       THREE.MathUtils.degToRad(0),
                   ]}
             >
                 <axesHelper args={[3]}/>
                 <boxGeometry/>
                 {/*<sphereGeometry/> 원형 */}
                 <meshStandardMaterial color="blue"/>
             </mesh>
         </group>
     </>
 );
}

export default ThreeElements;