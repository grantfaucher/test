import { Canvas as CanvasFiber } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';

export const Canvas = ({ children }) => {
  return (
    <CanvasFiber
      flat
      dpr={[1, 2]}
      camera={{
        fov: 10,
        position: [1, Math.PI / 3, 1]
      }}
      gl={{ logarithmicDepthBuffer: true }}>
      <color attach="background" args={['#78756e']} />
      <ambientLight intensity={1} />

      {children}

      <OrbitControls minDistance={75} maxDistance={600} />
      <Stats showPanel={0} className="stats" />
    </CanvasFiber>
  );
};
