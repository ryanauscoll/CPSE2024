import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

export const ModelAnimationType = {
  SpringUp: 'spring-up',
  LaptopOpen: 'laptop-open',
};

export const deviceModels = {
  phone: {
    url: 'assets/iphone-11.glb',
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp,
  },
  laptop: {
    url: 'assets/macbook-pro.glb',
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen,
  },
};

const DeviceModel = ({ modelType }) => {
  const { url, position } = deviceModels[modelType];
  const model = useGLTF(url);
  const ref = useRef();

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <primitive ref={ref} object={model.scene} position={[position.x, position.y, position.z]}>
        <meshStandardMaterial attach="material" />
      </primitive>
      <OrbitControls />
    </Canvas>
  );
};

export default DeviceModel;