import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const TorusKnotMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const t = state.clock.getElapsedTime();
    
    // Gentle auto-rotation
    meshRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
    meshRef.current.rotation.y += 0.003;
    meshRef.current.rotation.z = Math.cos(t * 0.2) * 0.1;

    // Mouse follow
    const pointer = state.pointer;
    mouseRef.current.x += (pointer.x * viewport.width * 0.05 - mouseRef.current.x) * 0.02;
    mouseRef.current.y += (pointer.y * viewport.height * 0.05 - mouseRef.current.y) * 0.02;
    meshRef.current.position.x = mouseRef.current.x;
    meshRef.current.position.y = mouseRef.current.y;
  });

  const color = useMemo(() => new THREE.Color('hsl(220, 100%, 23%)'), []);

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={1.2}>
        <torusKnotGeometry args={[1, 0.35, 128, 16, 2, 3]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.15}
          metalness={0.9}
          distort={0.15}
          speed={2}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
};

const HeroTorusKnot = () => {
  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'auto' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <directionalLight position={[-3, -2, 4]} intensity={0.5} color="#4a7fff" />
        <pointLight position={[0, 3, 2]} intensity={0.8} color="#ddd5c4" />
        <TorusKnotMesh />
      </Canvas>
    </div>
  );
};

export default HeroTorusKnot;
