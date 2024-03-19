import { useRef } from "react";
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'
import {Box, Cone, Sphere} from "@react-three/drei";
const ThreeElements = () => {
    const boxRef = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        // boxRef.current.rotation.x += delta;
        // boxRef.current.position.x += 0.01;
        // boxRef.current.scale.x += 0.01;
        // scence.rotation.x = THREE.MathUtils.degToRad(45)
        // scence.rotation.x += 0.01;
        // groupRef.current.rotation.x += delta;
    })

    // const geometry = new THREE.BoxGeometry(1,1,1);
    // const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);



    return (
        <>
            <directionalLight position={[5,5,5]}/>
            <Sphere position={[2, 0, 0]}>
                <meshStandardMaterial color="green"/>
            </Sphere>
            <Cone>
                <meshStandardMaterial color="green"/>
            </Cone>
            <Box position={[-2, 0, 0]}>
                <meshStandardMaterial color="green"/>
            </Box>
            {/*<mesh geometry={new THREE.BoxGeometry(1,1,1)}>*/}
            {/*    <meshStandardMaterial color="blue"/>*/}
            {/*</mesh>*/}
            {/*<mesh ref={boxRef}*/}
            {/*   position={[2, 0, 0]}*/}
            {/*>*/}
            {/*    <boxGeometry/>*/}
            {/*    <meshStandardMaterial color="red"/>*/}
            {/*</mesh>*/}
        </>
    );
}

export default ThreeElements;