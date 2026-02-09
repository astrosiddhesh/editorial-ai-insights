import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const tunnelVertexShader = `
  varying vec2 vUv;
  varying float vZ;
  void main() {
    vUv = uv;
    vZ = position.z;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const tunnelFragmentShader = `
  uniform float uTime;
  uniform float uScroll;
  varying vec2 vUv;
  varying float vZ;

  void main() {
    // Ring pattern along the tunnel
    float rings = sin((vZ + uScroll * 20.0) * 2.0 + uTime * 0.5) * 0.5 + 0.5;
    
    // Glow lines
    float lines = pow(sin(vUv.x * 3.14159 * 32.0) * 0.5 + 0.5, 8.0);
    float linesFade = pow(sin(vUv.x * 3.14159 * 16.0 + uTime) * 0.5 + 0.5, 12.0);
    
    // Colors
    vec3 color1 = vec3(0.0, 0.18, 0.47);  // Royal blue
    vec3 color2 = vec3(0.29, 0.47, 1.0);  // Bright blue  
    vec3 color3 = vec3(0.87, 0.83, 0.73); // Cream
    
    vec3 baseColor = mix(color1, color2, rings);
    baseColor += color3 * (lines * 0.15 + linesFade * 0.1);
    
    // Depth fog
    float depth = smoothstep(-20.0, 0.0, vZ);
    float alpha = depth * 0.6 * (0.3 + rings * 0.4 + lines * 0.3);
    
    // Edge glow
    float edge = pow(abs(sin(vUv.x * 3.14159)), 0.3);
    alpha *= edge;
    
    gl_FragColor = vec4(baseColor, alpha);
  }
`;

const Tunnel = ({ scrollProgress }: { scrollProgress: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { camera } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      materialRef.current.uniforms.uScroll.value = scrollProgress;
    }

    // Move camera through the tunnel based on scroll
    const z = THREE.MathUtils.lerp(0, -18, scrollProgress);
    camera.position.z = z;
    camera.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.02;
  });

  return (
    <mesh ref={meshRef} rotation={[0, 0, Math.PI / 2]}>
      <cylinderGeometry args={[2, 2, 25, 64, 64, true]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={tunnelVertexShader}
        fragmentShader={tunnelFragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.BackSide}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
};

// Small floating particles inside the tunnel
const TunnelParticles = ({ scrollProgress }: { scrollProgress: number }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 300;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.random() * 1.5;
      pos[i * 3] = Math.cos(angle) * r;
      pos[i * 3 + 1] = Math.sin(angle) * r;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 24;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.position.z = scrollProgress * -18;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#4a7fff"
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

interface ScrollTunnelProps {
  scrollProgress: number;
}

const ScrollTunnel = ({ scrollProgress }: ScrollTunnelProps) => {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 0], fov: 75, near: 0.1, far: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Tunnel scrollProgress={scrollProgress} />
        <TunnelParticles scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default ScrollTunnel;
