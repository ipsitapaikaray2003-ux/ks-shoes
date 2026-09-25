import { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from '../hooks/useMediaQuery';

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero3D — Phase 0 overlay text.
 * Fades in on mount, fades out as scroll phase 0→1 progresses.
 */
export default function Hero3D({ phaseProgress, isVisible }) {
  const containerRef = useRef();
  const headlineRef  = useRef();
  const subtitleRef  = useRef();
  const ctaRef       = useRef();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Initial entrance animation
    gsap.fromTo(
      [headlineRef.current, subtitleRef.current, ctaRef.current],
      { opacity: 0, y: 40, letterSpacing: '0.5em' },
      {
        opacity: 1,
        y: 0,
        letterSpacing: '0.12em',
        duration: 1.6,
        ease: 'power3.out',
        stagger: 0.25,
        delay: 0.5,
      }
    );
  }, []);

  // Fade out as the user scrolls past phase 0
  const opacity = isVisible ? Math.max(0, 1 - phaseProgress * 2.5) : 0;
  const translateY = phaseProgress * -60;

  return (
    <div
      ref={containerRef}
      className="overlay-phase hero-overlay"
      style={{ opacity, transform: `translateY(${translateY}px)` }}
    >
      <div className="hero-eyebrow">KS SHOES — EST. AGRA</div>
      <h1 ref={headlineRef} className="hero-headline">
        ENGINEERED<br />
        <span className="headline-accent">FOR MOVEMENT.</span>
      </h1>
      <p ref={subtitleRef} className="hero-subtitle">
        Precision footwear manufacturing built for<br />
        performance, comfort and durability.
      </p>
      <div ref={ctaRef} className="hero-cta-group">
        <a href="/products" className="cta-primary">
          EXPLORE KS SHOES
          <span className="cta-arrow">→</span>
        </a>
        <button
          className="cta-secondary"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight * 1.5, behavior: 'smooth' });
          }}
        >
          SCROLL TO DISCOVER
          <span className="cta-scroll-indicator" />
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-line" />
        <span className="scroll-label">SCROLL</span>
      </div>
    </div>
  );
}
