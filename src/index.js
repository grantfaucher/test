import { StrictMode } from 'react';
import { render } from 'react-dom';

import './index.css';
import { Canvas } from './components';

function App() {
  return (
    <StrictMode>
      <Canvas>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </StrictMode>
  );
}

render(<App />, document.getElementById('root'));
