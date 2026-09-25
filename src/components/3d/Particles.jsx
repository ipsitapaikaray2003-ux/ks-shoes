import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const GOLD = new THREE.Color('#C9A84C');
const SILVER = new THREE.Color('#aabbcc');

export default function Particles({ count = 500, scrollProgress = 0 }) {
  const meshRef = useRef();

  // Pre-generate particle positions and random offsets
  const { positions, phases, speeds } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const ph = new Float32Array(count);
    const sp = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Distribute in a sphere of radius 14
      const r = 8 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
      ph[i] = Math.random() * Math.PI * 2;
      sp[i] = 0.3 + Math.random() * 0.7;
    }
    return { positions: pos, phases: ph, speeds: sp };
  }, [count]);

  // Build geometry with pre-set positions
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const t = clock.getElapsedTime();
    // Slow drift rotation + scroll-responsive speed
    const speed = 0.015 + scrollProgress * 0.04;
    meshRef.current.rotation.y = t * speed;
    meshRef.current.rotation.x = t * speed * 0.4;

    // Pulse opacity subtly
    meshRef.current.material.opacity = 0.35 + 0.15 * Math.sin(t * 0.5);
  });

  return (
    <points ref={meshRef} geometry={geometry}>
      <pointsMaterial
        size={0.025}
        color={GOLD}
        transparent
        opacity={0.4}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
