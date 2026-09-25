import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Dynamic lighting system that responds to scroll phase (0–9).
 * Phase 0–1: Dramatic cinematic single key + cold fill
 * Phase 2:   Three-point orbit lighting
 * Phase 3–4: Overhead soft lighting (exploded / reassembly)
 * Phase 5:   Side key for camera journey
 * Phase 6:   Multi-point ambient (product collection)
 * Phase 7–8: Cool technical lighting
 * Phase 9:   Bright premium studio
 */

const PHASE_CONFIGS = [
  // Phase 0 — Hero: dramatic amber key, cold blue fill
  { ambientIntensity: 0.3, keyColor: '#E8C97A', keyIntensity: 3.5, keyPos: [5, 5, 3], fillColor: '#1a3a8a', fillIntensity: 1.2, fillPos: [-5, 2, -2], rimColor: '#C9A84C', rimIntensity: 0.8, rimPos: [0, -3, -5] },
  // Phase 1 — Zoom in
  { ambientIntensity: 0.25, keyColor: '#E8C97A', keyIntensity: 4, keyPos: [4, 6, 3], fillColor: '#0d2060', fillIntensity: 1.0, fillPos: [-4, 1, -3], rimColor: '#C9A84C', rimIntensity: 1.2, rimPos: [0, -2, -6] },
  // Phase 2 — 180° rotation
  { ambientIntensity: 0.3, keyColor: '#ffffff', keyIntensity: 3.5, keyPos: [-4, 5, 3], fillColor: '#2a1a60', fillIntensity: 1.5, fillPos: [5, 1, -2], rimColor: '#E8C97A', rimIntensity: 1.5, rimPos: [2, -2, -4] },
  // Phase 3 — Exploded
  { ambientIntensity: 0.6, keyColor: '#dde8ff', keyIntensity: 2.5, keyPos: [0, 8, 2], fillColor: '#334466', fillIntensity: 1.2, fillPos: [-4, 0, 4], rimColor: '#aabbff', rimIntensity: 1.0, rimPos: [4, -1, -3] },
  // Phase 4 — Reassembly
  { ambientIntensity: 0.5, keyColor: '#E8C97A', keyIntensity: 3.0, keyPos: [3, 6, 3], fillColor: '#223344', fillIntensity: 1.0, fillPos: [-3, 1, -3], rimColor: '#C9A84C', rimIntensity: 1.2, rimPos: [0, -2, -5] },
  // Phase 5 — Camera journey
  { ambientIntensity: 0.35, keyColor: '#ffffff', keyIntensity: 3.0, keyPos: [-5, 4, 2], fillColor: '#1a2040', fillIntensity: 0.8, fillPos: [5, 1, -2], rimColor: '#E8C97A', rimIntensity: 2.0, rimPos: [0, -3, -4] },
  // Phase 6 — Product collection
  { ambientIntensity: 0.7, keyColor: '#E8C97A', keyIntensity: 2.5, keyPos: [0, 7, 5], fillColor: '#334466', fillIntensity: 1.5, fillPos: [-5, 2, 0], rimColor: '#aaddff', rimIntensity: 1.0, rimPos: [5, -2, -3] },
  // Phase 7 — Technology
  { ambientIntensity: 0.4, keyColor: '#88aaff', keyIntensity: 3.0, keyPos: [3, 5, 3], fillColor: '#001133', fillIntensity: 0.8, fillPos: [-4, 1, -3], rimColor: '#aaddff', rimIntensity: 2.0, rimPos: [0, -3, -5] },
  // Phase 8 — Quality scan
  { ambientIntensity: 0.3, keyColor: '#aaddff', keyIntensity: 2.5, keyPos: [0, 6, 4], fillColor: '#001133', fillIntensity: 0.6, fillPos: [-4, 0, -3], rimColor: '#88ccff', rimIntensity: 2.5, rimPos: [0, -4, -5] },
  // Phase 9 — Final reveal
  { ambientIntensity: 0.8, keyColor: '#fff5e0', keyIntensity: 5.0, keyPos: [4, 6, 4], fillColor: '#334455', fillIntensity: 2.0, fillPos: [-4, 2, -2], rimColor: '#E8C97A', rimIntensity: 3.0, rimPos: [0, -2, -4] },
];

function lerpColor(a, b, t) {
  const ca = new THREE.Color(a);
  const cb = new THREE.Color(b);
  return ca.lerp(cb, t);
}

function lerpScalar(a, b, t) {
  return a + (b - a) * t;
}

function lerpVec(a, b, t) {
  return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
}

export default function Lighting({ scrollProgress = 0 }) {
  const keyRef = useRef();
  const fillRef = useRef();
  const rimRef = useRef();

  useFrame(() => {
    const totalPhases = PHASE_CONFIGS.length - 1;
    const raw = scrollProgress * totalPhases;
    const phaseIndex = Math.min(Math.floor(raw), totalPhases - 1);
    const phaseFrac = raw - phaseIndex;

    const curr = PHASE_CONFIGS[phaseIndex];
    const next = PHASE_CONFIGS[Math.min(phaseIndex + 1, totalPhases)];

    if (keyRef.current) {
      keyRef.current.color.copy(lerpColor(curr.keyColor, next.keyColor, phaseFrac));
      keyRef.current.intensity = lerpScalar(curr.keyIntensity, next.keyIntensity, phaseFrac);
      const kp = lerpVec(curr.keyPos, next.keyPos, phaseFrac);
      keyRef.current.position.set(...kp);
    }
    if (fillRef.current) {
      fillRef.current.color.copy(lerpColor(curr.fillColor, next.fillColor, phaseFrac));
      fillRef.current.intensity = lerpScalar(curr.fillIntensity, next.fillIntensity, phaseFrac);
      const fp = lerpVec(curr.fillPos, next.fillPos, phaseFrac);
      fillRef.current.position.set(...fp);
    }
    if (rimRef.current) {
      rimRef.current.color.copy(lerpColor(curr.rimColor, next.rimColor, phaseFrac));
      rimRef.current.intensity = lerpScalar(curr.rimIntensity, next.rimIntensity, phaseFrac);
      const rp = lerpVec(curr.rimPos, next.rimPos, phaseFrac);
      rimRef.current.position.set(...rp);
    }
  });

  return (
    <>
      {/* Ambient — always present */}
      <ambientLight intensity={0.3} color="#1a1a2a" />

      {/* Key light */}
      <pointLight ref={keyRef} position={[5, 5, 3]} intensity={3.5} color="#E8C97A" castShadow shadow-mapSize={[1024, 1024]} />

      {/* Fill light */}
      <pointLight ref={fillRef} position={[-5, 2, -2]} intensity={1.2} color="#1a3a8a" />

      {/* Rim / back light */}
      <pointLight ref={rimRef} position={[0, -3, -5]} intensity={0.8} color="#C9A84C" />

      {/* Ground bounce */}
      <pointLight position={[0, -4, 0]} intensity={0.4} color="#E8C97A" />
    </>
  );
}
