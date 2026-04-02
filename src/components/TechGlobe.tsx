import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Text,
  Float,
  Icosahedron,
  PerspectiveCamera,
  OrbitControls,
  Billboard,
} from "@react-three/drei";
import * as THREE from "three";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Node.js",
  "Tailwind",
  "Java",
  "Spring",
  "FastAPI",
  "SQL",
  "Docker",
  "AWS",
  "GraphQL",
  "Three.js",
  "Recoil",
  "Framer",
  "Git",
  "Rust",
];

function TechWord({
  children,
  position,
  color,
}: {
  children: string;
  position: THREE.Vector3;
  color: string;
}) {
  return (
    <Billboard position={position}>
      <Text
        fontSize={0.32}
        color={color}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        {children}
      </Text>
    </Billboard>
  );
}

function TechCloud({ count = technologies.length, radius = 5 }) {
  const groupRef = useRef<THREE.Group>(null);

  const words = useMemo(() => {
    const temp = [];
    const phi = Math.acos(-1) * (3 - Math.sqrt(5));

    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const pos = new THREE.Vector3(x, y, z).multiplyScalar(radius);
      const hue = (i / count) * 0.1 + 0.6;
      const color = new THREE.Color().setHSL(hue, 0.8, 0.7);

      temp.push({
        name: technologies[i % technologies.length],
        pos,
        color: `#${color.getHexString()}`,
      });
    }
    return temp;
  }, [count, radius]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2; // Spun smoothly
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Base Structure - Main Wireframe */}
      <Icosahedron args={[3, 1]}>
        <meshStandardMaterial
          color="#1e3a8a"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          wireframe
          transparent
          opacity={0.2}
        />
      </Icosahedron>

      {/* Atmospheric Glow Layer */}
      <Icosahedron args={[3.1, 1]}>
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.05}
        />
      </Icosahedron>

      {/* Technology Words */}
      {words.map((word, i) => (
        <TechWord key={i} position={word.pos} color={word.color}>
          {word.name}
        </TechWord>
      ))}

      <pointLight intensity={12} color="#3b82f6" distance={10} />
    </group>
  );
}

export default function TechGlobe() {
  return (
    <div className="w-full h-[600px] relative mt-12 mb-20 flex items-center justify-center bg-transparent group overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.1)_0%,_transparent_75%)] pointer-events-none" />

      <div className="w-full h-full max-w-5xl relative z-10">
        <Canvas
          dpr={[1, 1]} // Flat DPR for performance
          gl={{ powerPreference: "high-performance", antialias: false }}
          camera={{ position: [0, 0, 11], fov: 40 }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={1.5} />
            <pointLight
              position={[10, 10, 10]}
              intensity={20}
              color="#3b82f6"
            />
            <TechCloud radius={4.5} />
            <OrbitControls
              enableZoom={false}
              autoRotate={false}
              enablePan={false}
            />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <p className="text-blue-400 font-black tracking-[1em] mb-1 opacity-50 uppercase text-[10px]">
          Evolving Tech
        </p>
        <div className="h-[1px] w-32 bg-blue-500/30 mx-auto" />
      </div>
    </div>
  );
}
