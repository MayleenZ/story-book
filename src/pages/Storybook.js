/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-filename-extension */
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

function Box() {
  const myMesh = useRef();

  useFrame(({ clock }) => {
    myMesh.current.rotation.x = clock.getElapsedTime();
    myMesh.current.rotation.y = clock.getElapsedTime();
    myMesh.current.rotation.z = clock.getElapsedTime();
  });

  return (
    <mesh ref={myMesh}>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function Storybook() {
  return (
    <Canvas>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <Box />
    </Canvas>
  );
}
