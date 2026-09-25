import { useRef, forwardRef, useEffect, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Environment, AdaptiveDpr } from '@react-three/drei';
import * as THREE from 'three';
import ShoeModel from './ShoeModel';
import ShoeExploded from './ShoeExploded';
import CameraController from './CameraController';
import Lighting from './Lighting';
import Particles from './Particles';

/**
 * ShoeScene — the main Three.js Canvas.
 *
 * Props:
 *   scrollProgress  — 0→1 controlling everything
 *   phase           — integer 0–9 for discrete phase logic
 *   isMobile        — boolean for performance reduction
 */

// Phase boundaries
const PHASE_MAP = [0, 0.1, 0.25, 0.4, 0.55, 0.65, 0.75, 0.82, 0.88, 0.94, 1.0];

function getPhase(progress) {
  for (let i = PHASE_MAP.length - 2; i >= 0; i--) {
    if (progress >= PHASE_MAP[i]) return i;
  }
  return 0;
}

function getPhaseProgress(progress) {
  const phase = getPhase(progress);
  const start = PHASE_MAP[phase];
  const end   = PHASE_MAP[phase + 1] ?? 1;
  return Math.max(0, Math.min(1, (progress - start) / (end - start)));
}

// Inner scene content (must be inside Canvas)
function SceneContent({ scrollProgress, isMobile }) {
  const shoeRefs = useRef({});
  const shoeGroupRef = useRef();

  const phase = getPhase(scrollProgress);
  const phaseProgress = getPhaseProgress(scrollProgress);

  // Continuous base rotation of the shoe
  useFrame(({ clock }) => {
    if (!shoeGroupRef.current) return;
    const t = clock.getElapsedTime();

    // Determine shoe rotation based on phase
    let targetRotY = 0;
    if (phase === 0) {
      // Hero: slow ambient rotation
      shoeGroupRef.current.rotation.y = t * 0.18;
    } else if (phase === 1) {
      // Zoom in: continue rotating
      shoeGroupRef.current.rotation.y = t * 0.18 + phaseProgress * 0.5;
    } else if (phase === 2) {
      // 180° rotation controlled by scroll
      shoeGroupRef.current.rotation.y = phaseProgress * Math.PI;
    } else if (phase === 3) {
      // Exploded view: hold at 180°
      shoeGroupRef.current.rotation.y = Math.PI + phaseProgress * 0.3;
    } else if (phase === 4) {
      // Reassembly: rotate back
      shoeGroupRef.current.rotation.y = Math.PI + 0.3 - phaseProgress * 0.6;
    } else if (phase === 5) {
      // Camera journey: shoe rotates with camera
      shoeGroupRef.current.rotation.y = Math.PI * 0.5 + phaseProgress * Math.PI;
    } else if (phase === 6) {
      // Product collection: shoe in center, gentle float
      shoeGroupRef.current.rotation.y = Math.PI * 1.5 + t * 0.12;
    } else if (phase === 7 || phase === 8) {
      // Tech / Quality: fixed front view + slow rotation
      shoeGroupRef.current.rotation.y = t * 0.08;
    } else if (phase === 9) {
      // Final reveal: elegant slow rotation
      shoeGroupRef.current.rotation.y = t * 0.22;
    }

    // Gentle float animation
    const floatY = Math.sin(t * 0.8) * 0.06;
    shoeGroupRef.current.position.y = floatY;
  });

  // Exploded progress (phase 3 = explode, phase 4 = reassemble)
  let explodedProgress = 0;
  if (phase === 3) explodedProgress = phaseProgress;
  if (phase === 4) explodedProgress = 1 - phaseProgress;

  const particleCount = isMobile ? 200 : 500;

  return (
    <>
      {/* Camera */}
      <CameraController scrollProgress={scrollProgress} />

      {/* Lighting */}
      <Lighting scrollProgress={scrollProgress} />

      {/* Atmospheric particles */}
      <Particles count={particleCount} scrollProgress={scrollProgress} />

      {/* Main shoe */}
      <group ref={shoeGroupRef}>
        <ShoeModel ref={shoeRefs} scale={1.15} />
        {/* Exploded view animator — only active in phases 3–4 */}
        <ShoeExploded shoeRefs={shoeRefs} progress={explodedProgress} />
      </group>

      {/* Ground reflection plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial
          color="#080808"
          metalness={0.9}
          roughness={0.1}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Background environment */}
      <fog attach="fog" args={['#050505', 10, 40]} />
    </>
  );
}

// ── Canvas wrapper ────────────────────────────────────────────────────────────

export default function ShoeScene({ scrollProgress = 0, isMobile = false }) {
  return (
    <Canvas
      dpr={isMobile ? [1, 1] : [1, 1.5]}
      camera={{ position: [0, 0.4, 8], fov: 45, near: 0.1, far: 200 }}
      gl={{
        antialias: !isMobile,
        alpha: false,
        powerPreference: 'high-performance',
      }}
      shadows={!isMobile}
      style={{ background: '#050505' }}
    >
      <AdaptiveDpr pixelated />
      <color attach="background" args={['#050505']} />
      <SceneContent scrollProgress={scrollProgress} isMobile={isMobile} />
    </Canvas>
  );
}
