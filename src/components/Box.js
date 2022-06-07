import { useBox } from '@react-three/cannon';
import { RoundedBox } from '@react-three/drei';
import { useDragConstraint } from '../helpers';

export const Box = (props) => {
  const [ref] = useBox(() => ({
    ...props.physics,
    args: props.args,
    position: props.position
  }));

  const bind = useDragConstraint(ref);

  return (
    <RoundedBox castShadow receiveShadow ref={ref} args={props.args} {...bind}>
      <meshStandardMaterial color={props.color} />
    </RoundedBox>
  );
};
