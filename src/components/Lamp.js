import { useState } from 'react';
import {
  useCylinder,
  useSphere,
  useDistanceConstraint,
  usePointToPointConstraint
} from '@react-three/cannon';
import { SpotLight } from '@react-three/drei';
import { Object3D } from 'three';
import { useDragConstraint } from '../helpers';

export const Lamp = (props) => {
  const [target] = useState(() => new Object3D());
  const [fixed] = useSphere(() => ({
    collisionFilterGroup: 0,
    type: 'Static',
    args: [0.2],
    ...props
  }));
  const [lamp] = useCylinder(() => ({
    mass: 1,
    args: [0.15, 0.5, 0.75, 16],
    angularDamping: 0.95,
    linearDamping: 0.95,
    material: { friction: 0.9 },
    ...props
  }));
  const bind = useDragConstraint(lamp);
  useDistanceConstraint(fixed, lamp, {
    distance: 2,
    pivotA: [0, 0, 0],
    pivotB: [0, 2, 0]
  });
  usePointToPointConstraint(fixed, lamp, {
    pivotA: [0, 0, 0],
    pivotB: [0, 2, 0]
  });
  return (
    <mesh ref={lamp} {...bind}>
      <cylinderGeometry args={[0.15, 0.5, 0.75, 32]} />
      <meshStandardMaterial />
      <SpotLight
        castShadow
        target={target}
        position={[0, -0.05, 0]}
        color={'#ffdd8f'}
        penumbra={0.2}
        radiusTop={0.2}
        radiusBottom={40}
        distance={60}
        angle={0.65}
        attenuation={20}
        anglePower={5}
        intensity={1}
        opacity={0.2}
      />
      <primitive object={target} position={[0, -1, 0]} />
    </mesh>
  );
};
