import { usePlane } from '@react-three/cannon';
import { MeshReflectorMaterial } from '@react-three/drei';

export const Floor = (props) => {
  const [ref] = usePlane(() => ({ type: 'Static', ...props }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[50, 50]} />
      <MeshReflectorMaterial
        color={props.color}
        blur={[20, 20]}
        resolution={1024}
        mixBlur={1}
        mixStrength={3}
        depthScale={1}
        minDepthThreshold={0.85}
        metalness={0}
        roughness={1}
      />
    </mesh>
  );
};
