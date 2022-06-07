import { Canvas } from '@react-three/fiber';
import { Stats } from '@react-three/drei';
import {
  BrightnessContrast,
  EffectComposer
} from '@react-three/postprocessing';
import { Physics } from '@react-three/cannon';

import { Floor, Lamp, Box } from './components';
import { Cursor } from './helpers';

export default function App() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{
        fov: 15,
        position: [-20, 10, 20],
        near: 1,
        far: 100
      }}
      gl={{ logarithmicDepthBuffer: true }}>
      <color attach="background" args={['#1169fe']} />
      <fog attach="fog" args={['#1169fe', 30, 40]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[-4, 4, -2]} intensity={0.25} color={'red'} />

      <Physics allowSleep={false} iterations={15} gravity={[0, -75, 0]}>
        <Cursor />
        <Floor
          position={[0, -1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          color={'#1169fe'}
        />
        <Lamp position={[0, 5, 0]} />
        <group position={[0, 0, -0.5]}>
          <Box
            args={[1, 1, 1]}
            position={[0.5, 0, 1]}
            physics={{ mass: 1, linearDamping: 0.95, angularDamping: 0.95 }}
            color={'#49E39D'}
          />
          <Box
            args={[2, 1, 1]}
            position={[0, 0, 0]}
            physics={{ mass: 1, linearDamping: 0.95, angularDamping: 0.95 }}
            color={'#000'}
          />
          <Box
            args={[1, 1, 1]}
            position={[-0.5, 0, 1]}
            physics={{ mass: 1, linearDamping: 0.95, angularDamping: 0.95 }}
            color={'#CC91FF'}
          />
          <Box
            args={[1, 1, 1]}
            position={[0.5, 1, 0]}
            physics={{ mass: 1, linearDamping: 0.95, angularDamping: 0.95 }}
            color={'#FFEC42'}
          />
        </group>
      </Physics>

      <EffectComposer multisampling={0}>
        <BrightnessContrast brightness={0} contrast={0.1} />
      </EffectComposer>

      <Stats showPanel={0} className="stats" />
    </Canvas>
  );
}
