import { useEffect, useRef } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import * as THREE from 'three';

/**
 * CameraController — driven by scrollProgress (0→1).
 * Uses a keyframe array to lerp camera position + target as user scrolls.
 */

// Camera keyframes: [position, lookAt target]
const CAM_KEYFRAMES = [
  { pos: [0,  0.4, 8.0], target: [0, 0, 0] },   // 0 — Hero wide
  { pos: [0,  0.4, 5.5], target: [0, 0, 0] },   // 1 — Zoom in
  { pos: [3.5, 1.2, 4.5], target: [0, 0, 0] },  // 2 — Side angle rotation
  { pos: [0,  3.5, 6.0], target: [0, 0, 0] },   // 3 — High angle (exploded)
  { pos: [0,  0.5, 5.0], target: [0, 0, 0] },   // 4 — Front (reassembly)
  { pos: [-4, 1.5, 4.0], target: [0, 0, 0] },   // 5 — Journey left
  { pos: [0,  0.0, 11.0], target: [0, 0, 0] },  // 6 — Wide (product collection)
  { pos: [2.5, 1.0, 5.0], target: [0, 0.2, 0] },// 7 — Tech callouts
  { pos: [0,  0.5, 6.0], target: [0, 0, 0] },   // 8 — Quality scan
  { pos: [0,  0.6, 7.5], target: [0, 0.3, 0] }, // 9 — Final reveal pullback
];

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function lerp3(a, b, t) {
  return [lerp(a[0], b[0], t), lerp(a[1], b[1], t), lerp(a[2], b[2], t)];
}

// Smooth step for camera interpolation
function smoothStep(t) {
  return t * t * (3 - 2 * t);
}

export default function CameraController({ scrollProgress = 0 }) {
  const { camera } = useThree();
  const targetRef = useRef(new THREE.Vector3());

  useEffect(() => {
    // Set initial FOV
    camera.fov = 45;
    camera.near = 0.1;
    camera.far = 200;
    camera.updateProjectionMatrix();
  }, [camera]);

  useFrame(() => {
    const totalFrames = CAM_KEYFRAMES.length - 1;
    const raw = scrollProgress * totalFrames;
    const idx = Math.min(Math.floor(raw), totalFrames - 1);
    const frac = smoothStep(raw - idx);

    const curr = CAM_KEYFRAMES[idx];
    const next = CAM_KEYFRAMES[Math.min(idx + 1, totalFrames)];

    const pos = lerp3(curr.pos, next.pos, frac);
    const tgt = lerp3(curr.target, next.target, frac);

    // Smooth damping for camera position (70% lerp per frame for snappy feel)
    camera.position.x = lerp(camera.position.x, pos[0], 0.06);
    camera.position.y = lerp(camera.position.y, pos[1], 0.06);
    camera.position.z = lerp(camera.position.z, pos[2], 0.06);

    // Smooth target
    targetRef.current.x = lerp(targetRef.current.x, tgt[0], 0.06);
    targetRef.current.y = lerp(targetRef.current.y, tgt[1], 0.06);
    targetRef.current.z = lerp(targetRef.current.z, tgt[2], 0.06);

    camera.lookAt(targetRef.current);
    camera.updateProjectionMatrix();
  });

  return null;
}
