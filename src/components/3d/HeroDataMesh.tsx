import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Neural-network-inspired 3D mesh — data nodes connected by edges,
 * with a morphing icosahedron core. Relevant to Data/AI identity.
 */

// Glowing connection lines between nodes
const ConnectionLines = ({ nodes }: { nodes: THREE.Vector3[] }) => {
  const linesRef = useRef<THREE.LineSegments>(null);

  const geometry = useMemo(() => {
    const positions: number[] = [];
    // Connect nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].distanceTo(nodes[j]);
        if (dist < 1.8) {
          positions.push(nodes[i].x, nodes[i].y, nodes[i].z);
          positions.push(nodes[j].x, nodes[j].y, nodes[j].z);
        }
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geo;
  }, [nodes]);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      linesRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.03) * 0.1;
    }
  });

  return (
    <lineSegments ref={linesRef} geometry={geometry}>
      <lineBasicMaterial color="#4a7fff" transparent opacity={0.15} />
    </lineSegments>
  );
};

// Floating data nodes
const DataNodes = ({ nodes }: { nodes: THREE.Vector3[] }) => {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, sizes } = useMemo(() => {
    const pos = new Float32Array(nodes.length * 3);
    const sz = new Float32Array(nodes.length);
    nodes.forEach((node, i) => {
      pos[i * 3] = node.x;
      pos[i * 3 + 1] = node.y;
      pos[i * 3 + 2] = node.z;
      sz[i] = 2 + Math.random() * 4;
    });
    return { positions: pos, sizes: sz };
  }, [nodes]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.03) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={nodes.length} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#4a7fff"
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

// Core morphing shape — icosahedron with noise displacement
const CoreMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();
  const color = useMemo(() => new THREE.Color('hsl(220, 100%, 13%)'), []);

  const vertexShader = `
    uniform float uTime;
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    // Simplex noise function
    vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
    vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
    vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
    
    float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0);
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
      vec3 i  = floor(v + dot(v, C.yyy));
      vec3 x0 = v - i + dot(i, C.xxx);
      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min(g.xyz, l.zxy);
      vec3 i2 = max(g.xyz, l.zxy);
      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy;
      vec3 x3 = x0 - D.yyy;
      i = mod289(i);
      vec4 p = permute(permute(permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
        + i.y + vec4(0.0, i1.y, i2.y, 1.0))
        + i.x + vec4(0.0, i1.x, i2.x, 1.0));
      float n_ = 0.142857142857;
      vec3 ns = n_ * D.wyz - D.xzx;
      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_);
      vec4 x = x_ * ns.x + ns.yyyy;
      vec4 y = y_ * ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);
      vec4 b0 = vec4(x.xy, y.xy);
      vec4 b1 = vec4(x.zw, y.zw);
      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));
      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
      vec3 p0 = vec3(a0.xy, h.x);
      vec3 p1 = vec3(a0.zw, h.y);
      vec3 p2 = vec3(a1.xy, h.z);
      vec3 p3 = vec3(a1.zw, h.w);
      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
      p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
    }
    
    void main() {
      vNormal = normal;
      vPosition = position;
      
      float noise = snoise(position * 1.5 + uTime * 0.3) * 0.25;
      vec3 newPosition = position + normal * noise;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `;

  const fragmentShader = `
    varying vec3 vNormal;
    varying vec3 vPosition;
    uniform float uTime;
    
    void main() {
      // Deep navy base
      vec3 deepNavy = vec3(0.0, 0.08, 0.2);
      vec3 royalBlue = vec3(0.0, 0.18, 0.47);
      vec3 brightBlue = vec3(0.29, 0.47, 1.0);
      
      // Fresnel for edge glow
      vec3 viewDir = normalize(cameraPosition - vPosition);
      float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
      
      // Mix colors based on normals and fresnel
      vec3 baseColor = mix(deepNavy, royalBlue, fresnel * 0.6);
      
      // Specular glints — the blue highlights like Sleep Well
      float specular = pow(max(dot(reflect(-viewDir, vNormal), vec3(0.5, 0.5, 1.0)), 0.0), 16.0);
      baseColor += brightBlue * specular * 1.5;
      
      // Moving highlight bands
      float band = sin(vPosition.y * 4.0 + uTime * 0.5) * 0.5 + 0.5;
      baseColor += brightBlue * band * fresnel * 0.4;
      
      gl_FragColor = vec4(baseColor, 0.95);
    }
  `;

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
  }), []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    
    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.x = Math.sin(t * 0.15) * 0.15;

    // Mouse follow — subtle
    const pointer = state.pointer;
    mouseRef.current.x += (pointer.x * viewport.width * 0.03 - mouseRef.current.x) * 0.015;
    mouseRef.current.y += (pointer.y * viewport.height * 0.03 - mouseRef.current.y) * 0.015;
    meshRef.current.position.x = mouseRef.current.x;
    meshRef.current.position.y = mouseRef.current.y;

    // Update shader time
    (meshRef.current.material as THREE.ShaderMaterial).uniforms.uTime.value = t;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
      <mesh ref={meshRef} scale={2.2}>
        <icosahedronGeometry args={[1, 6]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
        />
      </mesh>
    </Float>
  );
};

const HeroDataMesh = () => {
  // Generate node positions in a spherical distribution
  const nodes = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 60; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.5 + Math.random() * 1.5;
      pts.push(new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi)
      ));
    }
    return pts;
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: 'auto' }}
      >
        <CoreMesh />
        <DataNodes nodes={nodes} />
        <ConnectionLines nodes={nodes} />
      </Canvas>
    </div>
  );
};

export default HeroDataMesh;
