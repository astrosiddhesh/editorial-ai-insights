import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const Sphere = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const color = useMemo(() => new THREE.Color('hsl(45, 70%, 91%)'), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.15;
    meshRef.current.rotation.y = t * 0.1;
  });

  return (
    <mesh ref={meshRef} scale={1.8}>
      <icosahedronGeometry args={[1, 8]} />
      <MeshDistortMaterial
        color={color}
        roughness={0.1}
        metalness={0.3}
        distort={0.4}
        speed={3}
        transparent
        opacity={0.35}
      />
    </mesh>
  );
};

const MorphingSphere = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 3]} intensity={0.8} color="#ddd5c4" />
        <pointLight position={[-2, -1, 2]} intensity={0.5} color="#4a7fff" />
        <Sphere />
      </Canvas>
    </div>
  );
};

export default MorphingSphere;
