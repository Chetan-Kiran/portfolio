"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function Hyperspace() {
  const count = 1500;
  const meshRef = useRef<THREE.Points>(null!);
  
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50; 
      vel[i] = 0.5 + Math.random() * 1.5; // Faster for "Hyper" feel
    }
    return [pos, vel];
  }, []);

  useFrame((state, delta) => {
    const posAttr = meshRef.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      let z = posAttr.getZ(i);
      z += velocities[i] * 3; 
      if (z > 10) z = -40; // Reset
      posAttr.setZ(i, z);
    }
    posAttr.needsUpdate = true;
    
    // Smooth tilt
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, state.mouse.y * 0.3, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, -state.mouse.x * 0.3, 0.1);
  });

  return (
    <Points ref={meshRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff" 
        size={0.16} 
        sizeAttenuation={true}
        depthWrite={false}
        opacity={1}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function GridCenterpiece() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center glass-card rounded-[2rem] overflow-hidden group border border-amber-500/20 bg-black shadow-[0_0_50px_rgba(251,191,36,0.1)]">
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 1.5]} gl={{ preserveDrawingBuffer: false, antialias: false }}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={90} />
          <Suspense fallback={null}>
            <Hyperspace />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center p-8 pointer-events-none">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="bg-black/60 backdrop-blur-xl px-6 py-2 rounded-full border border-amber-500/30 shadow-[0_0_20px_rgba(251,191,36,0.2)]"
        >
          <h3 className="text-xl font-black text-amber-400 tracking-[0.4em] uppercase">Hyper Drive</h3>
        </motion.div>
      </div>
      
      {/* Speed Overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000_100%)] opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40 pointer-events-none" />
    </div>
  );
}
