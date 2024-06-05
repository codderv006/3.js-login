import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const FloatingParticles = () => {
  const group = useRef();

  // Create a group of particles
  const numParticles = 100;
  const particles = [...Array(numParticles)].map(() => ({
    position: [Math.random() * 8 - 4, Math.random() * 4 - 2, Math.random() * 8 - 4],
    scale: Math.random() * 0.05 + 0.01, // Random scale between 0.01 and 0.06
    color: new THREE.Color(Math.random(), Math.random(), Math.random()),
    velocity: new THREE.Vector3(Math.random() * 0.01 - 0.005, Math.random() * 0.01 - 0.005, Math.random() * 0.01 - 0.005),
  }));

  useFrame(() => {
    // Update particle positions
    particles.forEach((particle) => {
      particle.position[0] += particle.velocity.x;
      particle.position[1] += particle.velocity.y;
      particle.position[2] += particle.velocity.z;

      // Wrap particles around the screen
      if (particle.position[0] > 4) particle.position[0] = -4;
      if (particle.position[0] < -4) particle.position[0] = 4;
      if (particle.position[1] > 2) particle.position[1] = -2;
      if (particle.position[1] < -2) particle.position[1] = 2;
      if (particle.position[2] > 4) particle.position[2] = -4;
      if (particle.position[2] < -4) particle.position[2] = 4;
    });

    // Update group position
    group.current.rotation.y += 0.001;
    group.current.rotation.z += 0.001;
  });

  return (
    <group ref={group}>
      {particles.map((particle, index) => (
        <mesh key={index} position={particle.position}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshBasicMaterial color={particle.color} />
        </mesh>
      ))}
    </group>
  );
};

const Background = () => {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', background: '##a8a7a7' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <FloatingParticles />
    </Canvas>
  );
};

export default Background;
