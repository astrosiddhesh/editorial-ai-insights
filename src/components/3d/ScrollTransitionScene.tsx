import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const transitionVertexShader = `
  uniform float uTime;
  uniform float uMorph;
  varying vec3 vNormal;
  varying vec3 vPosition;

  vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
  }

  void main() {
    vNormal = normal;
    vPosition = position;
    
    float noise = snoise(position * (1.5 + uMorph * 2.0) + uTime * 0.3);
    vec3 newPosition = position + normal * noise * (0.1 + uMorph * 0.4);
    
    // Scale based on morph
    float s = 1.0 + uMorph * 0.5;
    newPosition *= s;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`;

const transitionFragmentShader = `
  uniform float uTime;
  uniform float uMorph;
  varying vec3 vNormal;
  varying vec3 vPosition;

  void main() {
    vec3 viewDir = normalize(cameraPosition - vPosition);
    float fresnel = pow(1.0 - abs(dot(viewDir, vNormal)), 2.5);
    
    vec3 color1 = vec3(0.0, 0.18, 0.47);
    vec3 color2 = vec3(0.29, 0.47, 1.0);
    vec3 color3 = vec3(0.87, 0.83, 0.73);
    
    vec3 baseColor = mix(color1, color2, uMorph);
    vec3 finalColor = mix(baseColor, color3, fresnel * 0.6);
    
    float alpha = 0.4 + fresnel * 0.4 + uMorph * 0.2;
    
    gl_FragColor = vec4(finalColor, alpha);
  }
`;

interface TransformingObjectProps {
  scrollProgress: number;
}

const TransformingObject = ({ scrollProgress }: TransformingObjectProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMorph: { value: 0 },
    }),
    []
  );

  useFrame((state) => {
    if (!groupRef.current || !materialRef.current) return;
    const t = state.clock.getElapsedTime();
    
    materialRef.current.uniforms.uTime.value = t;
    materialRef.current.uniforms.uMorph.value = scrollProgress;

    // Rotate faster as scroll progresses
    groupRef.current.rotation.y = t * 0.2 + scrollProgress * Math.PI * 2;
    groupRef.current.rotation.x = Math.sin(t * 0.3) * 0.2 + scrollProgress * 0.5;
    
    // Move across viewport based on scroll
    const xOffset = Math.sin(scrollProgress * Math.PI) * viewport.width * 0.2;
    const yOffset = Math.cos(scrollProgress * Math.PI * 2) * 0.5;
    groupRef.current.position.x = xOffset;
    groupRef.current.position.y = yOffset;
  });

  return (
    <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
      <group ref={groupRef}>
        <mesh>
          <icosahedronGeometry args={[1, 32]} />
          <shaderMaterial
            ref={materialRef}
            vertexShader={transitionVertexShader}
            fragmentShader={transitionFragmentShader}
            uniforms={uniforms}
            transparent
            side={THREE.DoubleSide}
            depthWrite={false}
          />
        </mesh>
        
        {/* Outer wireframe ring */}
        <mesh scale={1.3 + scrollProgress * 0.5}>
          <torusGeometry args={[1, 0.02, 16, 64]} />
          <meshBasicMaterial color="#4a7fff" transparent opacity={0.2 + scrollProgress * 0.3} />
        </mesh>
        
        {/* Second ring perpendicular */}
        <mesh scale={1.3 + scrollProgress * 0.5} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[1, 0.015, 16, 64]} />
          <meshBasicMaterial color="#ddd5c4" transparent opacity={0.15 + scrollProgress * 0.2} />
        </mesh>
      </group>
    </Float>
  );
};

interface ScrollTransitionSceneProps {
  scrollProgress: number;
}

const ScrollTransitionScene = ({ scrollProgress }: ScrollTransitionSceneProps) => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <TransformingObject scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  );
};

export default ScrollTransitionScene;
