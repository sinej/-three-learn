import {useEffect, useRef} from "react";
import { useFrame } from '@react-three/fiber'
import * as THREE from "three";
import {useTexture} from "@react-three/drei";
const ThreeElements = () => {

    const meshRef = useRef<THREE.Mesh>(null);
    const groupRef = useRef<THREE.Group>(null);

    const metcap = useTexture('./imgs/matcap1.jpg')

    useFrame((state, delta) => {

    })

    useEffect(() => {
        for(let i = 0; i < groupRef.current!.children.length; i++) {
            const mesh = groupRef.current!.children[i] as THREE.Mesh;
            mesh.geometry = meshRef.current!.geometry;
            mesh.position.x = i * 2;

        }

        // meshCopyRef1.current!.geometry = meshRef.current.geometry;
        // meshCopyRef2.current!.geometry = meshRef.current.geometry;
    }, []);


    return (
        <>
            <directionalLight position={[5, 5, 5]} intensity={2}/>
            {/*<fog attach={"fog"} args={['blue', 3 ,10]}/>*/}
            <mesh
                ref={meshRef}
                position={[0, 0, 0]}
            >
                <sphereGeometry/>
                {/*<boxGeometry/>*/}
                <meshStandardMaterial
                    visible={false}
                    color="green"
                />
            </mesh>

            <group ref={groupRef}>
                <mesh>
                    <boxGeometry/>
                    <meshStandardMaterial
                        wireframe
                    />
                </mesh>
                <mesh>
                    <boxGeometry/>
                    <meshStandardMaterial
                        color="red"
                        visible={true}
                        transparent={false}
                        opacity={1}
                        side={THREE.FrontSide}
                        alphaTest={1}
                        depthTest={true}
                        depthWrite={true}
                        fog={true}
                    />
                </mesh>
                <mesh>
                    <boxGeometry/>
                    <meshStandardMaterial
                        color="red"
                        visible={true}
                        transparent={false}
                        opacity={1}
                        side={THREE.FrontSide}
                        alphaTest={1}
                        depthTest={true}
                        depthWrite={true}
                        fog={false}

                        emissive={"black"}
                    />
                </mesh>
                <mesh>
                    <boxGeometry/>
                    <meshStandardMaterial
                        color="red"
                        visible={true}
                        transparent={false}
                        opacity={1}
                        side={THREE.FrontSide}
                        alphaTest={1}
                        depthTest={true}
                        depthWrite={true}
                        fog={true}
                        emissive={"black"}
                        specular={"fff"}
                        shininess={40}
                        flatShading={true}
                    />
                </mesh>
                <mesh>
                    <meshNormalMaterial/>
                </mesh>
                <mesh>
                    <meshDepthMaterial/>
                </mesh>
                <mesh>
                    <meshDepthMaterial matcap={metcap} />
                </mesh>
                <mesh>
                    <meshToonMaterial/>
                </mesh>
            </group>
        </>
    );
}

export default ThreeElements;