import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Concentric-circle tunnel shader — inspired by Sleep Well Creatives.
 * Alternating blue/cream rings that pulse and shift with scroll.
 */
const tunnelVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const tunnelFragmentShader = `
  uniform float uTime;
  uniform float uScroll;
  uniform vec2 uResolution;
  varying vec2 vUv;

  void main() {
    // Center UV
    vec2 center = vUv - 0.5;
    float dist = length(center);
    float angle = atan(center.y, center.x);
    
    // Concentric rings — scroll drives expansion
    float ringFreq = 18.0;
    float scrollOffset = uScroll * 12.0;
    float timeOffset = uTime * 0.3;
    
    float rings = sin((dist * ringFreq - scrollOffset - timeOffset) * 3.14159) * 0.5 + 0.5;
    
    // Sharp ring edges (step-like)
    float sharpRings = smoothstep(0.35, 0.5, rings);
    
    // Colors — royal blue and cream
    vec3 royalBlue = vec3(0.0, 0.18, 0.47);
    vec3 brightBlue = vec3(0.29, 0.47, 1.0);
    vec3 cream = vec3(0.87, 0.83, 0.73);
    vec3 deepBlue = vec3(0.0, 0.10, 0.30);
    
    // Mix between blue and cream based on ring pattern
    vec3 ringColor = mix(royalBlue, cream, sharpRings);
    
    // Add subtle bright blue highlights on ring edges
    float ringEdge = pow(abs(sin((dist * ringFreq - scrollOffset - timeOffset) * 3.14159 * 2.0)), 8.0);
    ringColor += brightBlue * ringEdge * 0.3;
    
    // Center vortex glow — brighter center
    float centerGlow = 1.0 - smoothstep(0.0, 0.5, dist);
    centerGlow = pow(centerGlow, 2.0);
    ringColor = mix(ringColor, cream, centerGlow * 0.4);
    
    // Subtle rotation distortion
    float spiral = sin(angle * 3.0 + dist * 10.0 - uTime * 0.5) * 0.03;
    ringColor += cream * spiral;
    
    // Outer fade to deep blue
    float outerFade = smoothstep(0.6, 0.2, dist);
    
    // Pulsing intensity
    float pulse = sin(uTime * 0.8) * 0.05 + 0.95;
    
    // Final color
    vec3 finalColor = mix(deepBlue, ringColor, outerFade) * pulse;
    
    // Vignette
    float vignette = 1.0 - smoothstep(0.3, 0.72, dist);
    
    gl_FragColor = vec4(finalColor, vignette);
  }
`;

// Floating dots scattered around the tunnel
const TunnelDots = ({ scrollProgress }: { scrollProgress: number }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 200;

  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const sz = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Distribute in a disc
      const angle = Math.random() * Math.PI * 2;
      const r = 0.15 + Math.random() * 0.85;
      pos[i * 3] = Math.cos(angle) * r * 2.5;
      pos[i * 3 + 1] = Math.sin(angle) * r * 2.5;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.5;
      sz[i] = 1.0 + Math.random() * 3.0;
    }
    return { positions: pos, sizes: sz };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.z = state.clock.getElapsedTime() * 0.02 + scrollProgress * 2;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.015}
        color="#DED4BA"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const ConcentricTunnel = ({ scrollProgress }: { scrollProgress: number }) => {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uScroll: { value: 0 },
      uResolution: { value: new THREE.Vector2(1, 1) },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      materialRef.current.uniforms.uScroll.value = scrollProgress;
    }
  });

  return (
    <mesh>
      <planeGeometry args={[4, 4]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={tunnelVertexShader}
        fragmentShader={tunnelFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
};

interface ScrollTunnelProps {
  scrollProgress: number;
}

const ScrollTunnel = ({ scrollProgress }: ScrollTunnelProps) => {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 2], fov: 60, near: 0.1, far: 10 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ConcentricTunnel scrollProgress={scrollProgress} />
        <TunnelDots scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default ScrollTunnel;
