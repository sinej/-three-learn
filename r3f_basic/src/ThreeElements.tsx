import * as THREE from 'three';

type Props = {

};

const ThreeElements = (props: Props) => {
 const {} = props;
 return (
  <>
      <directionalLight position={[5,5,5]}/>
      <mesh rotation={[THREE.MathUtils.degToRad(45),THREE.MathUtils.degToRad(45),0]}>
          <boxGeometry />
          <meshStandardMaterial color="red"/>
      </mesh>
  </>
 );
}

export default ThreeElements;