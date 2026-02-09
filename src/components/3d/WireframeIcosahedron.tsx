import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const Icosahedron = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const color = useMemo(() => new THREE.Color('hsl(220, 70%, 42%)'), []);
  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.5, 1), []);
  const edgesGeo = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.08;
      meshRef.current.rotation.y = t * 0.12;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.x = t * 0.08;
      edgesRef.current.rotation.y = t * 0.12;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <group>
        <mesh ref={meshRef} geometry={geo}>
          <meshStandardMaterial
            color={color}
            transparent
            opacity={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>
        <lineSegments ref={edgesRef} geometry={edgesGeo}>
          <lineBasicMaterial color={color} transparent opacity={0.4} />
        </lineSegments>
      </group>
    </Float>
  );
};

const WireframeIcosahedron = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#4a7fff" />
        <Icosahedron />
      </Canvas>
    </div>
  );
};

export default WireframeIcosahedron;
