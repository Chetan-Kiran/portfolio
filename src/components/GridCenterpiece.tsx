import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function Hyperspace() {
  const count = 1000;
  const meshRef = useRef<THREE.Points>(null!);
  
  // Create stars with initial z positions spread out
  const [positions, velocities] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 50; // Deep Z spread
      vel[i] = 0.2 + Math.random() * 0.5; // Random speeds
    }
    return [pos, vel];
  }, []);

  useFrame((state, _delta) => {
    const posAttr = meshRef.current.geometry.attributes.position;
    for (let i = 0; i < count; i++) {
      let z = posAttr.getZ(i);
      z += velocities[i] * 2; // Fast forward
      if (z > 5) z = -45; // Reset to back of tunnel
      posAttr.setZ(i, z);
    }
    posAttr.needsUpdate = true;
    
    // Slight tilt based on mouse
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, state.mouse.y * 0.2, 0.1);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, -state.mouse.x * 0.2, 0.1);
  });

  return (
    <Points ref={meshRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#fbbf24"
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
      />
    </Points>
  );
}

export default function GridCenterpiece() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center glass-card rounded-[2rem] overflow-hidden group border border-amber-500/20 bg-black shadow-[0_0_50px_rgba(251,191,36,0.1)]">
      <div className="absolute inset-0 z-0">
        <Canvas dpr={[1, 2]}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
          <Suspense fallback={null}>
            <Hyperspace />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center p-8 pointer-events-none">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
           className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/20"
        >
          <h3 className="text-xl font-black text-amber-400 tracking-[0.3em] uppercase">Warp Drive</h3>
        </motion.div>
      </div>
      
      {/* Visual Glitch/Speed Lines */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60 pointer-events-none" />
    </div>
  );
}
