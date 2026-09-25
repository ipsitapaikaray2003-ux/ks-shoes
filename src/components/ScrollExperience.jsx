import { useEffect, useRef, useState, Suspense, lazy } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Hero3D from './Hero3D';
import Manufacturing from './Manufacturing';
import Products from './Products';
import Technology from './Technology';
import Quality from './Quality';
import CTA from './CTA';

gsap.registerPlugin(ScrollTrigger);

// Lazy-load the heavy 3D canvas
const ShoeScene = lazy(() => import('./3d/ShoeScene'));

// Phase boundaries (must match ShoeScene.jsx PHASE_MAP)
const PHASE_MAP = [0, 0.1, 0.25, 0.4, 0.55, 0.65, 0.75, 0.82, 0.88, 0.94, 1.0];

function getPhase(progress) {
  for (let i = PHASE_MAP.length - 2; i >= 0; i--) {
    if (progress >= PHASE_MAP[i]) return i;
  }
  return 0;
}

function getPhaseProgress(progress, phase) {
  const start = PHASE_MAP[phase];
  const end   = PHASE_MAP[phase + 1] ?? 1;
  return Math.max(0, Math.min(1, (progress - start) / (end - start)));
}

// ── Exploded labels (Phase 3) ─────────────────────────────────────────────────
function ExplodedLabels({ phaseProgress, isVisible }) {
  const labels = [
    { text: 'BREATHABLE UPPER',   style: { top: '15%', left: '62%' } },
    { text: 'ADVANCED LACING',    style: { top: '8%',  left: '50%' } },
    { text: 'COMFORT INSOLE',     style: { top: '38%', left: '64%' } },
    { text: 'IMPACT ABSORPTION',  style: { top: '65%', left: '62%' } },
    { text: 'ENGINEERED OUTSOLE', style: { top: '78%', left: '50%' } },
    { text: 'HEEL COUNTER',       style: { top: '45%', left: '6%'  } },
  ];

  const opacity = isVisible
    ? Math.min(1, (phaseProgress - 0.3) * 5) * Math.max(0, 1 - (phaseProgress - 0.85) * 8)
    : 0;

  return (
    <div className="overlay-phase exploded-labels" style={{ opacity }}>
      <div className="exploded-title">
        <span className="exploded-eyebrow">ANATOMY OF PRECISION</span>
        <h2 className="exploded-headline">EVERY COMPONENT.<br /><span className="headline-accent">PERFECTED.</span></h2>
      </div>
      {labels.map((l, i) => {
        const labelDelay = i * 0.1;
        const labelOpacity = Math.min(1, Math.max(0, (phaseProgress - 0.3 - labelDelay) * 6));
        return (
          <div
            key={l.text}
            className="exploded-label"
            style={{
              ...l.style,
              opacity: labelOpacity,
              transform: `translateX(${(1 - labelOpacity) * 20}px)`,
              transition: 'opacity 0.3s ease, transform 0.3s ease',
            }}
          >
            <span className="exploded-label-dot" />
            <span className="exploded-label-line" style={{ width: `${labelOpacity * 30}px` }} />
            <span className="exploded-label-text">{l.text}</span>
          </div>
        );
      })}
    </div>
  );
}

// ── Phase 2 — Precision text ──────────────────────────────────────────────────
function PrecisionOverlay({ phaseProgress, isVisible }) {
  const opacity = isVisible
    ? Math.min(1, phaseProgress * 4) * Math.max(0, 1 - (phaseProgress - 0.75) * 5)
    : 0;
  return (
    <div className="overlay-phase precision-overlay" style={{ opacity, transform: `translateY(${(1 - opacity) * 30}px)` }}>
      <div className="precision-eyebrow">CRAFTSMANSHIP</div>
      <h2 className="precision-headline">
        PRECISION IN<br />
        <span className="headline-accent">EVERY DETAIL.</span>
      </h2>
    </div>
  );
}

// ── Phase 5 — Camera journey caption ─────────────────────────────────────────
function JourneyOverlay({ phaseProgress, isVisible }) {
  const opacity = isVisible
    ? Math.min(1, phaseProgress * 5) * Math.max(0, 1 - (phaseProgress - 0.8) * 6)
    : 0;

  const angles = ['FRONT VIEW', 'SIDE PROFILE', 'TOP VIEW', 'HEEL DETAIL', 'TOE BOX'];
  const currentAngle = angles[Math.min(Math.floor(phaseProgress * 5), 4)];

  return (
    <div className="overlay-phase journey-overlay" style={{ opacity }}>
      <div className="journey-angle-label">{currentAngle}</div>
      <div className="journey-tagline">CRAFTED FROM EVERY ANGLE</div>
    </div>
  );
}

// ── Loading fallback ──────────────────────────────────────────────────────────
function SceneLoader() {
  return (
    <div className="scene-loader">
      <div className="loader-ring" />
      <div className="loader-text">LOADING EXPERIENCE</div>
    </div>
  );
}

// ── Progress bar ──────────────────────────────────────────────────────────────
function ScrollProgressBar({ progress }) {
  return (
    <div className="scroll-progress-bar">
      <div className="scroll-progress-fill" style={{ width: `${progress * 100}%` }} />
    </div>
  );
}

// ── Phase indicator dots ──────────────────────────────────────────────────────
function PhaseIndicator({ phase }) {
  const labels = ['HERO', 'INTRO', 'ROTATE', 'EXPLODE', 'ASSEMBLE', 'JOURNEY', 'COLLECTION', 'TECH', 'QUALITY', 'REVEAL'];
  return (
    <div className="phase-indicator">
      {labels.map((label, i) => (
        <div
          key={label}
          className={`phase-dot ${i === phase ? 'phase-dot-active' : ''} ${i < phase ? 'phase-dot-done' : ''}`}
          title={label}
        />
      ))}
    </div>
  );
}

// ── MASTER COMPONENT ──────────────────────────────────────────────────────────
export default function ScrollExperience() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef();
  const stickyRef = useRef();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');

  const phase = getPhase(scrollProgress);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    // Create the main ScrollTrigger that drives everything
    const trigger = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.5,  // 0.5s lag for smooth scrubbing
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [prefersReducedMotion]);

  // Reduced motion: show static hero
  if (prefersReducedMotion) {
    return (
      <div className="static-hero-fallback">
        <div className="hero-headline">ENGINEERED FOR MOVEMENT.</div>
        <p className="hero-subtitle">Precision footwear manufacturing for performance and durability.</p>
        <a href="/products" className="cta-primary">EXPLORE KS SHOES →</a>
      </div>
    );
  }

  return (
    <div
      ref={scrollContainerRef}
      className="scroll-experience-container"
      style={{ height: isMobile ? '500vh' : '700vh' }}
    >
      {/* Sticky viewport — stays fixed while user scrolls */}
      <div ref={stickyRef} className="sticky-scene">

        {/* ── 3D Canvas ── */}
        <div className="canvas-container">
          <Suspense fallback={<SceneLoader />}>
            <ShoeScene scrollProgress={scrollProgress} isMobile={isMobile} />
          </Suspense>
        </div>

        {/* ── Overlay phases ── */}

        {/* Phase 0 — Hero */}
        <Hero3D
          phaseProgress={getPhaseProgress(scrollProgress, 0)}
          isVisible={phase === 0}
        />

        {/* Phase 2 — Precision */}
        <PrecisionOverlay
          phaseProgress={getPhaseProgress(scrollProgress, 2)}
          isVisible={phase === 2}
        />

        {/* Phase 3 — Exploded labels */}
        <ExplodedLabels
          phaseProgress={getPhaseProgress(scrollProgress, 3)}
          isVisible={phase === 3}
        />

        {/* Phase 4 — Manufacturing */}
        <Manufacturing
          phaseProgress={getPhaseProgress(scrollProgress, 4)}
          isVisible={phase === 4}
        />

        {/* Phase 5 — Camera journey */}
        <JourneyOverlay
          phaseProgress={getPhaseProgress(scrollProgress, 5)}
          isVisible={phase === 5}
        />

        {/* Phase 6 — Products */}
        <Products
          phaseProgress={getPhaseProgress(scrollProgress, 6)}
          isVisible={phase === 6}
        />

        {/* Phase 7 — Technology */}
        <Technology
          phaseProgress={getPhaseProgress(scrollProgress, 7)}
          isVisible={phase === 7}
        />

        {/* Phase 8 — Quality */}
        <Quality
          phaseProgress={getPhaseProgress(scrollProgress, 8)}
          isVisible={phase === 8}
        />

        {/* Phase 9 — Final CTA */}
        <CTA
          phaseProgress={getPhaseProgress(scrollProgress, 9)}
          isVisible={phase === 9}
        />

        {/* ── UI Chrome ── */}
        <ScrollProgressBar progress={scrollProgress} />
        <PhaseIndicator phase={phase} />

        {/* Phase label (dev mode — bottom left) */}
        {import.meta.env.DEV && (
          <div className="dev-phase-label">
            Phase {phase} · {(scrollProgress * 100).toFixed(1)}%
          </div>
        )}
      </div>
    </div>
  );
}
