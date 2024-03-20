import * as THREE from "three";
import {useThree} from '@react-three/fiber'
export default function InteractionTest() {

    const {camera, scene, raycaster, pointer } = useThree()


    // const handleClick = (e: any) => {
    //     console.log("e", e);
    //     e.stopPropagation(); // 이벤트 전달 막음
    //     e.object.material.color = new THREE.Color('green');
    // }

    const handleGroupClick = (e: any) => {
        console.log("e", e);
        raycaster.setFromCamera(pointer, camera);
        const intersects = raycaster.intersectObject(e.eventObject, true);
        console.log("intersects", intersects);
        
        if(intersects.length > 0) {
            console.log("intersects[0]", intersects[0])
            const mesh = intersects[0].object as THREE.Mesh | any;
            mesh.material.color = new THREE.Color('red');
        }
    }

    return (
        <>
            <ambientLight/>
            <directionalLight intensity={5}/>
            <group onClick={handleGroupClick}>
                <mesh
                    // onClick={handleClick}
                      position={[-2,0,0]}
                    // onContextMenu={(e) => console.log('context menu')}
                    // onDoubleClick={(e) => console.log('double click')}
                    // onWheel={(e) => console.log('wheel spins')}
                    // onPointerUp={(e) => console.log('up')}
                    // onPointerDown={(e) => console.log('down')}
                    // onPointerOver={(e) => console.log('Over')}
                    // onPointerOut={(e) => console.log('Out')}
                    // onPointerEnter={(e) => console.log('enter')}
                    // onPointerLeave={(e) => console.log('leave')}
                    // onPointerMove={(e) => console.log('move')}
                    // onPointerMissed={() => console.log('missed')}
                    // onUpdate={(self) => console.log('props have been updated')}
                >
                    <boxGeometry/>
                    <meshBasicMaterial/>
                </mesh>
                <mesh
                    // onClick={handleClick}
                      position={[0,0,0]}
                >
                    <boxGeometry/>
                    <meshBasicMaterial/>
                </mesh>
                <mesh
                    // onClick={handleClick}
                      position={[2,0,0]}
                >
                    <boxGeometry/>
                    <meshBasicMaterial/>
                </mesh>
            </group>
        </>
    )
}