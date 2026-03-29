"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleSphere(props: any) {
  const ref = useRef<THREE.Points>(null!);
  const sphere = useMemo(() => {
    const positions = new Float32Array(2500 * 3); // Slightly denser for "not too dusty but bright"
    for (let i = 0; i < 2500; i++) {
       const u = Math.random();
       const v = Math.random();
       const theta = 2 * Math.PI * u;
       const phi = Math.acos(2 * v - 1);
       const r = 1.6; // Slightly larger sphere
       positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
       positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
       positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere as Float32Array} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#fbbf24" // Golden dust
          size={0.018} // Slightly larger for brightness
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8} // Much brighter
        />
      </Points>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="w-full h-[400px] md:h-[600px] relative pointer-events-auto cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <ParticleSphere />
      </Canvas>
    </div>
  );
}
