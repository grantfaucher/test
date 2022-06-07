import { useBox } from '@react-three/cannon';
import { useDragConstraint } from '../helpers';

export const Object = (props) => {
  const [ref] = useBox(() => ({
    mass: 1,
    linearDamping: 0.95,
    angularDamping: 0.95,
    args: [1, 1, 1]
  }));

  const bind = useDragConstraint(ref);

  return (
    <mesh
      castShadow
      receiveShadow
      ref={ref}
      geometry={props.geometry}
      material={props.material}
      {...bind}></mesh>
  );
};
