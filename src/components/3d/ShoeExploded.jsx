import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { gsap } from 'gsap';
import * as THREE from 'three';

/**
 * ShoeExploded — animates shoe parts between assembled and exploded states.
 * 
 * Props:
 *   shoeRefs  — { upper, tongue, lace, midsole, outsole, heel, insole }
 *   progress  — 0 (assembled) → 1 (fully exploded)
 */

// Assembled positions (relative to root group)
const ASSEMBLED = {
  upper:   { pos: [0, 0, 0],    rot: [0, 0, 0] },
  tongue:  { pos: [0, 0, 0],    rot: [0, 0, 0] },
  lace:    { pos: [0, 0, 0],    rot: [0, 0, 0] },
  midsole: { pos: [0, 0, 0],    rot: [0, 0, 0] },
  outsole: { pos: [0, 0, 0],    rot: [0, 0, 0] },
  heel:    { pos: [0, 0, 0],    rot: [0, 0, 0] },
  insole:  { pos: [0, 0, 0],    rot: [0, 0, 0] },
};

// Exploded positions — each part flies out in a different direction
const EXPLODED = {
  upper:   { pos: [0,  2.4, 0],    rot: [0.3, 0, 0] },
  tongue:  { pos: [0.5, 3.5, 1.2], rot: [-0.3, 0.2, 0] },
  lace:    { pos: [0.2, 4.5, 0.5], rot: [0.5, 0, 0] },
  midsole: { pos: [0, -2.2, 0],    rot: [-0.2, 0, 0] },
  outsole: { pos: [0, -3.6, 0],    rot: [-0.4, 0, 0] },
  heel:    { pos: [-2.5, 0, -1.5], rot: [0, -0.4, 0] },
  insole:  { pos: [0, 1.2, 1.0],   rot: [0.8, 0, 0] },
};

function lerp3(a, b, t) {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];
}

// Smooth eased interpolation (ease-in-out)
function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

export default function ShoeExploded({ shoeRefs, progress = 0 }) {
  useFrame(() => {
    if (!shoeRefs?.current) return;
    const refs = shoeRefs.current;
    const t = easeInOut(Math.max(0, Math.min(1, progress)));

    const parts = ['upper', 'tongue', 'lace', 'midsole', 'outsole', 'heel', 'insole'];

    parts.forEach((key) => {
      const ref = refs[key];
      if (!ref?.current) return;

      const aPos = ASSEMBLED[key].pos;
      const ePos = EXPLODED[key].pos;
      const aRot = ASSEMBLED[key].rot;
      const eRot = EXPLODED[key].rot;

      const pos = lerp3(aPos, ePos, t);
      const rot = lerp3(aRot, eRot, t);

      ref.current.position.set(...pos);
      ref.current.rotation.set(...rot);
    });
  });

  return null; // purely behavioral, no JSX output
}
