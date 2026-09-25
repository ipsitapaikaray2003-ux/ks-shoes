import { useRef, forwardRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Procedural Sneaker Model built from Three.js primitives.
 *
 * Component refs are exposed so ShoeExploded.jsx can animate them apart.
 *
 * Architecture:
 *   <group> (shoe root)
 *     <group ref="upperRef">    — Upper / Vamp
 *     <group ref="tongueRef">   — Tongue
 *     <group ref="laceRef">     — Lace system
 *     <group ref="midsoleRef">  — Midsole
 *     <group ref="outsoleRef">  — Outsole
 *     <group ref="heelRef">     — Heel counter / collar
 *     <group ref="insoleRef">   — Insole (internal, semi-visible)
 *
 * SWAP GUIDE: To replace with a real GLB, remove the procedural geometry
 * and uncomment the <useGLTF> block at the bottom. All refs and the parent
 * component interface remain unchanged.
 */

// ── Material palette ──────────────────────────────────────────────────────────
const MATS = {
  upper:   { color: '#1a1a2e', metalness: 0.05, roughness: 0.75 },
  accent:  { color: '#C9A84C', metalness: 0.6,  roughness: 0.3  },
  midsole: { color: '#2a2a3a', metalness: 0.1,  roughness: 0.65 },
  outsole: { color: '#111118', metalness: 0.05, roughness: 0.9  },
  tongue:  { color: '#242438', metalness: 0.05, roughness: 0.8  },
  lace:    { color: '#E8C97A', metalness: 0.4,  roughness: 0.5  },
  insole:  { color: '#2e2e1a', metalness: 0.0,  roughness: 0.9  },
};

function Mat({ type }) {
  const m = MATS[type];
  return <meshStandardMaterial color={m.color} metalness={m.metalness} roughness={m.roughness} />;
}

// ── Sub-components ─────────────────────────────────────────────────────────────

// Main upper body of the shoe (side profile)
function Upper() {
  return (
    <group>
      {/* Main body — flattened sphere */}
      <mesh position={[0, 0.22, 0]} scale={[1, 0.52, 0.45]}>
        <sphereGeometry args={[1, 32, 20]} />
        <Mat type="upper" />
      </mesh>
      {/* Toe box — rounded front protrusion */}
      <mesh position={[0.82, 0.06, 0]} scale={[0.38, 0.32, 0.42]}>
        <sphereGeometry args={[1, 24, 16]} />
        <Mat type="upper" />
      </mesh>
      {/* Collar / ankle opening — torus ring */}
      <mesh position={[-0.75, 0.32, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[0.28, 0.07, 12, 32]} />
        <Mat type="accent" />
      </mesh>
      {/* Side mesh panel (accent strip) */}
      <mesh position={[0.1, 0.28, 0.44]} rotation={[0.1, 0, 0]} scale={[0.85, 0.3, 0.04]}>
        <boxGeometry args={[1, 1, 1]} />
        <Mat type="accent" />
      </mesh>
      <mesh position={[0.1, 0.28, -0.44]} rotation={[-0.1, 0, 0]} scale={[0.85, 0.3, 0.04]}>
        <boxGeometry args={[1, 1, 1]} />
        <Mat type="accent" />
      </mesh>
    </group>
  );
}

// Tongue
function Tongue() {
  return (
    <group>
      <mesh position={[0.2, 0.55, 0]} scale={[0.42, 0.45, 0.32]}>
        <boxGeometry args={[1, 1, 1]} />
        <Mat type="tongue" />
      </mesh>
      {/* Tongue logo tab */}
      <mesh position={[0.2, 0.72, 0]} scale={[0.18, 0.08, 0.28]}>
        <boxGeometry args={[1, 1, 1]} />
        <Mat type="accent" />
      </mesh>
    </group>
  );
}

// Lace system — 6 lace bars
function Laces() {
  const bars = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      x: 0.55 - i * 0.18,
      y: 0.56,
    }));
  }, []);

  return (
    <group>
      {bars.map((b, i) => (
        <mesh key={i} position={[b.x, b.y, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[0.05, 0.38, 0.05]}>
          <cylinderGeometry args={[1, 1, 1, 8]} />
          <Mat type="lace" />
        </mesh>
      ))}
      {/* Lace running line */}
      <mesh position={[0.1, 0.63, 0.22]} rotation={[0, 0, 0.15]} scale={[0.025, 0.95, 0.025]}>
        <cylinderGeometry args={[1, 1, 1, 8]} />
        <Mat type="lace" />
      </mesh>
      <mesh position={[0.1, 0.63, -0.22]} rotation={[0, 0, 0.15]} scale={[0.025, 0.95, 0.025]}>
        <cylinderGeometry args={[1, 1, 1, 8]} />
        <Mat type="lace" />
      </mesh>
    </group>
  );
}

// Midsole — the cushioning platform
function Midsole() {
  return (
    <group>
      {/* Main midsole body */}
      <mesh position={[0, -0.34, 0]} scale={[2.1, 0.22, 0.52]}>
        <boxGeometry args={[1, 1, 1]} />
        <Mat type="midsole" />
      </mesh>
      {/* Heel stack — thicker at heel */}
      <mesh position={[-0.72, -0.28, 0]} scale={[0.62, 0.32, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <Mat type="midsole" />
      </mesh>
      {/* Air unit / cushion visual */}
      <mesh position={[-0.58, -0.28, 0]} scale={[0.36, 0.18, 0.38]}>
        <sphereGeometry args={[1, 16, 10]} />
        <meshStandardMaterial color="#C9A84C" metalness={0.4} roughness={0.3} transparent opacity={0.7} />
      </mesh>
      {/* Forefoot cushion */}
      <mesh position={[0.55, -0.32, 0]} scale={[0.32, 0.14, 0.36]}>
        <sphereGeometry args={[1, 16, 10]} />
        <meshStandardMaterial color="#C9A84C" metalness={0.4} roughness={0.3} transparent opacity={0.55} />
      </mesh>
    </group>
  );
}

// Outsole — the ground contact surface
function Outsole() {
  return (
    <group>
      {/* Flat outsole base */}
      <mesh position={[0, -0.46, 0]} scale={[2.15, 0.1, 0.55]}>
        <boxGeometry args={[1, 1, 1]} />
        <Mat type="outsole" />
      </mesh>
      {/* Lug pattern — forefoot */}
      {Array.from({ length: 5 }).map((_, i) => (
        <mesh key={i} position={[0.65 - i * 0.3, -0.52, 0]} scale={[0.14, 0.08, 0.55]}>
          <boxGeometry args={[1, 1, 1]} />
          <Mat type="outsole" />
        </mesh>
      ))}
      {/* Heel lug */}
      <mesh position={[-0.78, -0.52, 0]} scale={[0.28, 0.1, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <Mat type="outsole" />
      </mesh>
    </group>
  );
}

// Heel counter
function Heel() {
  return (
    <group>
      {/* Heel counter shell */}
      <mesh position={[-0.8, 0.12, 0]} scale={[0.34, 0.42, 0.44]}>
        <sphereGeometry args={[1, 20, 14]} />
        <Mat type="upper" />
      </mesh>
      {/* Heel logo plate */}
      <mesh position={[-1.06, 0.15, 0]} scale={[0.04, 0.22, 0.28]}>
        <boxGeometry args={[1, 1, 1]} />
        <Mat type="accent" />
      </mesh>
    </group>
  );
}

// Insole — barely visible, inside the shoe
function Insole() {
  return (
    <mesh position={[0, -0.06, 0]} scale={[1.88, 0.05, 0.44]}>
      <boxGeometry args={[1, 1, 1]} />
      <Mat type="insole" />
    </mesh>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────

const ShoeModel = forwardRef(function ShoeModel(
  { rotation = [0, 0, 0], scale = 1, children },
  ref
) {
  const groupRef = useRef();

  // Expose internal refs via forwarded ref object
  const upperRef = useRef();
  const tongueRef = useRef();
  const laceRef = useRef();
  const midsoleRef = useRef();
  const outsoleRef = useRef();
  const heelRef = useRef();
  const insoleRef = useRef();

  // Set refs on parent if provided
  if (ref) {
    ref.current = {
      root: groupRef,
      upper: upperRef,
      tongue: tongueRef,
      lace: laceRef,
      midsole: midsoleRef,
      outsole: outsoleRef,
      heel: heelRef,
      insole: insoleRef,
    };
  }

  return (
    <group ref={groupRef} rotation={rotation} scale={scale}>
      <group ref={upperRef}>  <Upper /> </group>
      <group ref={tongueRef}> <Tongue /> </group>
      <group ref={laceRef}>   <Laces /> </group>
      <group ref={midsoleRef}><Midsole /></group>
      <group ref={outsoleRef}><Outsole /></group>
      <group ref={heelRef}>   <Heel /> </group>
      <group ref={insoleRef}> <Insole /></group>
      {children}
    </group>
  );
});

export default ShoeModel;

/*
 * ── REAL GLB SWAP GUIDE ────────────────────────────────────────────────────
 * When you have a real shoe model at /public/models/ks-shoe.glb:
 *
 * 1. npm install @react-three/drei (already installed)
 * 2. In this file, replace the procedural JSX with:
 *
 *    import { useGLTF } from '@react-three/drei';
 *
 *    const ShoeModel = forwardRef(({ rotation, scale }, ref) => {
 *      const { scene } = useGLTF('/models/ks-shoe.glb');
 *      return <primitive object={scene} rotation={rotation} scale={scale} />;
 *    });
 *
 *    useGLTF.preload('/models/ks-shoe.glb');
 *
 * 3. The rest of the system (ShoeExploded, ScrollExperience) uses the same
 *    interface and requires no changes.
 * ──────────────────────────────────────────────────────────────────────────
 */
