"use client";

import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Icosahedron, Points, PointMaterial, Sphere, ContactShadows, PresentationControls } from '@react-three/drei';
import * as THREE from 'three';

const coreTechnologies = [
  "Next.js", "React", "TypeScript", "Python", "Node.js", "Tailwind"
];

function CrystalLattice() {
  const meshRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);
  
  // Create points for the lattice corners
  const points = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2.1, 1);
    return geo.attributes.position.array as Float32Array;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.05;
      meshRef.current.rotation.z = Math.sin(t * 0.2) * 0.1;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * -0.03;
    }
  });

  return (
    <group>
      {/* Outer Crystal Shell */}
      <Icosahedron ref={meshRef} args={[2, 1]}>
        <meshStandardMaterial
          color="#3b82f6"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.15}
          wireframe
        />
      </Icosahedron>

      {/* Internal Pulsing Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere args={[0.6, 32, 32]}>
          <meshStandardMaterial
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={2}
          />
        </Sphere>
      </Float>

      {/* Connection Points */}
      <Points ref={pointsRef} positions={points} stride={3}>
        <PointMaterial
          transparent
          color="#fbbf24"
          size={0.15}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>

      {/* Core Glow */}
      <pointLight intensity={8} color="#fbbf24" distance={10} />
      <ambientLight intensity={0.2} />
    </group>
  );
}

function OrbitingLabel({ name, index, count }: { name: string; index: number; count: number }) {
  const ref = useRef<THREE.Group>(null);
  const radius = 4.5;
  const speed = 0.2;
  const offset = (index / count) * Math.PI * 2;

  useFrame((state) => {
    const t = state.clock.getElapsedTime() * speed + offset;
    if (ref.current) {
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.z = Math.sin(t) * radius;
      ref.current.position.y = Math.sin(t * 0.5) * 1.5;
      ref.current.quaternion.copy(state.camera.quaternion);
    }
  });

  return (
    <group ref={ref}>
      <Text
        fontSize={0.28}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {name}
        <meshBasicMaterial color="#fbbf24" />
      </Text>
    </group>
  );
}

export default function TechGlobe() {
  return (
    <div className="w-full h-[600px] relative mt-12 mb-20 flex items-center justify-center bg-transparent group">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.05)_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="w-full h-full max-w-5xl relative z-10 cursor-grab active:cursor-grabbing">
        <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 12], fov: 35 }}>
          <Suspense fallback={null}>
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
            >
              <group scale={1.2}>
                <CrystalLattice />
                {coreTechnologies.map((name, i) => (
                  <OrbitingLabel 
                    key={name} 
                    name={name} 
                    index={i} 
                    count={coreTechnologies.length} 
                  />
                ))}
              </group>
            </PresentationControls>
            <ContactShadows resolution={512} scale={20} blur={2} opacity={0.15} far={10} color="#000" />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none">
        <p className="text-primary/40 text-[10px] uppercase font-black tracking-[0.8em] mb-1">Interconnected</p>
        <div className="h-[1px] w-12 bg-primary/20 mx-auto" />
      </div>
    </div>
  );
}
