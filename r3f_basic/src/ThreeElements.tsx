import {useEffect, useRef} from "react";
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber'
import { useControls } from "leva";

const ThreeElements = () => {
    const boxRef = useRef<THREE.Mesh>(null);
    const boxCopyRef = useRef<THREE.Mesh>(null);

    const boxControl = useControls({
        // width: {value: 1, min: 0.1, max: 10, step: 0.1},
        // height: {value: 1, min: 0.1, max: 10, step: 0.1},
        // depth: {value: 1, min: 0.1, max: 10, step: 0.1},
        // widthSeg: {value: 1, min: 0.1, max: 10, step: 0.1},
        // heightSeg: {value: 1, min: 0.1, max: 10, step: 0.1},
        // depthSeg: {value: 1, min: 0.1, max: 10, step: 0.1},
        radius: {value: 1, min: 0.1, max: 10, step: 0.1},
        seg: {value: 32, min: 1, max: 100, step: 1},
        thetaStart: {value: 0, min: 0, max: 360, step: 0.1},
        thetaLength: {value: 360, min: 1, max: 360, step: 0.1},
    })

    // useFrame((state, delta) => {
        // boxRef.current.rotation.x += delta;
        // boxRef.current.position.x += 0.01;
        // boxRef.current.scale.x += 0.01;
        // scence.rotation.x = THREE.MathUtils.degToRad(45)
        // scence.rotation.x += 0.01;
        // groupRef.current.rotation.x += delta;
    // })

    useEffect(() => {
        boxCopyRef.current.geometry = boxRef.current.geometry;
    }, [boxControl])

    // const geometry = new THREE.BoxGeometry(1,1,1);
    // const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
    // const cube = new THREE.Mesh(geometry, material);
    // scene.add(cube);



    return (
        <>
            <directionalLight position={[5,5,5]}/>
            {/*<Sphere position={[2, 0, 0]}>*/}
            {/*    <meshStandardMaterial color="green"/>*/}
            {/*</Sphere>*/}
            {/*<Cone>*/}
            {/*    <meshStandardMaterial color="green"/>*/}
            {/*</Cone>*/}
            {/*<Box position={[-2, 0, 0]}>*/}
            {/*    <meshStandardMaterial color="green"/>*/}
            {/*</Box>*/}
            <mesh
                ref={boxRef}
               position={[0, 0, 0]}
            >
                <circleGeometry args={[
                    boxControl.radius,
                    boxControl.seg,
                    THREE.MathUtils.degToRad(boxControl.thetaStart),
                    THREE.MathUtils.degToRad(boxControl.thetaLength),

                ]}/>
                <meshStandardMaterial wireframe />
            </mesh>
            <mesh ref={boxCopyRef}>
                <meshStandardMaterial color="red"/>
            </mesh>
        </>
    );
}

export default ThreeElements;