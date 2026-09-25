import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, CheckCircle2, RotateCw, Eye, Layers, Sparkles, Sliders, Volume2, ShieldCheck, Play } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CinematicCommercialPlayer from './CinematicCommercialPlayer';

gsap.registerPlugin(ScrollTrigger);

export default function HeroScrollShowcase() {
  const [showCinema, setShowCinema] = useState(false);
  const pinWrapperRef = useRef(null);
  const stickyStageRef = useRef(null);
  const heroContentRef = useRef(null);
  const shoeContainer3dRef = useRef(null);
  const shoeMainRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Callout refs
  const calloutUpperRef = useRef(null);
  const calloutStitchingRef = useRef(null);
  const calloutCushioningRef = useRef(null);
  const calloutMidsoleRef = useRef(null);
  const calloutOutsoleRef = useRef(null);

  // Exploded layer refs
  const layerCadRef = useRef(null);
  const layerUpperRef = useRef(null);
  const layerSoleRef = useRef(null);
  const explodedBadgesRef = useRef(null);

  // Interactive 3D Modes & Telemetry
  const [activeMode, setActiveMode] = useState('standard'); // 'standard' | 'xray' | 'exploded' | 'orbit'
  const [colorway, setColorway] = useState('alabaster'); // 'alabaster' | 'obsidian' | 'sand'
  const [telemetry, setTelemetry] = useState({ rotX: 0, rotY: 0, fps: 60 });
  const [isHovered, setIsHovered] = useState(false);

  // Smooth mouse coordinates
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  // 1. Interactive 3D Mouse Parallax & Gyro Physics
  useEffect(() => {
    let animId;
    let frameCount = 0;
    let lastTime = performance.now();

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Normalized between -1 and 1
      const nx = (e.clientX / innerWidth - 0.5) * 2;
      const ny = (e.clientY / innerHeight - 0.5) * 2;
      mouseRef.current.targetX = nx;
      mouseRef.current.targetY = ny;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Smooth Lerp Physics Loop
    const updatePhysics = (time) => {
      // FPS measurement
      frameCount++;
      if (time - lastTime >= 1000) {
        setTelemetry((prev) => ({ ...prev, fps: frameCount }));
        frameCount = 0;
        lastTime = time;
      }

      // Smooth interpolation
      const m = mouseRef.current;
      m.x += (m.targetX - m.x) * 0.08;
      m.y += (m.targetY - m.y) * 0.08;

      // Only apply interactive mouse 3D tilt when near top of page (scroll <= 100px)
      if (window.scrollY < 200 && shoeContainer3dRef.current) {
        const tiltX = -m.y * 18; // deg
        const tiltY = m.x * 24;  // deg
        const transX = m.x * 35; // px
        const transY = m.y * 20; // px

        shoeContainer3dRef.current.style.transform = `
          perspective(1400px)
          rotateX(${tiltX}deg)
          rotateY(${tiltY}deg)
          translate3d(${transX}px, ${transY}px, 40px)
        `;

        setTelemetry((prev) => ({
          ...prev,
          rotX: tiltX.toFixed(1),
          rotY: tiltY.toFixed(1)
        }));
      }

      animId = requestAnimationFrame(updatePhysics);
    };

    animId = requestAnimationFrame(updatePhysics);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  // 2. Atmospheric 3D Canvas Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particleAnimId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // 45 ambient glowing depth particles
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      z: Math.random() * 1.5 + 0.5,
      radius: Math.random() * 1.8 + 0.8,
      alpha: Math.random() * 0.45 + 0.15,
      speedX: (Math.random() - 0.5) * 0.35,
      speedY: (Math.random() - 0.5) * 0.35
    }));

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.speedX + mouseRef.current.x * 0.2 * p.z;
        p.y += p.speedY + mouseRef.current.y * 0.2 * p.z;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * p.z, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(197, 160, 89, ${p.alpha * 0.8})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#C5A059';
        ctx.fill();
      });

      particleAnimId = requestAnimationFrame(render);
    };

    particleAnimId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(particleAnimId);
    };
  }, []);

  // 3. Master GSAP Scroll-Linked Choreography Timeline
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(heroContentRef.current, { opacity: 1, y: 0, scale: 1 });
      gsap.set(shoeMainRef.current, { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 });

      gsap.set([
        calloutUpperRef.current,
        calloutStitchingRef.current,
        calloutCushioningRef.current,
        calloutMidsoleRef.current,
        calloutOutsoleRef.current
      ], { opacity: 0, scale: 0.85 });

      gsap.set(layerCadRef.current, { opacity: 0, y: 0, scale: 0.9 });
      gsap.set(layerUpperRef.current, { opacity: 0, y: 0, scale: 0.95 });
      gsap.set(layerSoleRef.current, { opacity: 0, y: 0, scale: 0.95 });
      gsap.set(explodedBadgesRef.current, { opacity: 0, y: 20 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinWrapperRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.1,
          invalidateOnRefresh: true
        }
      });

      // 1. PHASE 1: Hero Text Fades & Scales Up; Shoe Zooms into Upper Focus
      tl.to(heroContentRef.current, {
        opacity: 0,
        y: -70,
        scale: 1.05,
        duration: 1.5,
        ease: 'power2.inOut'
      }, 0);

      tl.to(shoeMainRef.current, {
        scale: 1.34,
        x: -45,
        y: 25,
        rotate: -8,
        duration: 2,
        ease: 'power2.inOut'
      }, 0.5);

      // 2. PHASE 2: Upper & Stitching Callouts Reveal
      tl.to([calloutUpperRef.current, calloutStitchingRef.current], {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.4)'
      }, 1.8);

      tl.to({}, { duration: 1.2 });

      // 3. PHASE 3: Transition to Midsole & Outsole
      tl.to([calloutUpperRef.current, calloutStitchingRef.current], {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'power2.in'
      });

      tl.to(shoeMainRef.current, {
        scale: 1.44,
        x: 55,
        y: -32,
        rotate: 11,
        duration: 2.2,
        ease: 'power2.inOut'
      }, '-=0.4');

      tl.to([calloutCushioningRef.current, calloutMidsoleRef.current, calloutOutsoleRef.current], {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.4)'
      }, '-=1.2');

      tl.to({}, { duration: 1.4 });

      // 4. PHASE 4: Exploded Technical Layer Separation
      tl.to([calloutCushioningRef.current, calloutMidsoleRef.current, calloutOutsoleRef.current], {
        opacity: 0,
        scale: 0.9,
        duration: 0.8,
        ease: 'power2.in'
      });

      tl.to(shoeMainRef.current, {
        opacity: 0,
        scale: 0.92,
        duration: 1.2,
        ease: 'power2.inOut'
      }, '-=0.4');

      tl.to(layerCadRef.current, {
        opacity: 0.85,
        y: -155,
        scale: 0.98,
        duration: 2,
        ease: 'power3.out'
      }, '-=0.8');

      tl.to(layerUpperRef.current, {
        opacity: 1,
        y: -12,
        scale: 1.02,
        duration: 2,
        ease: 'power3.out'
      }, '-=1.8');

      tl.to(layerSoleRef.current, {
        opacity: 1,
        y: 135,
        scale: 1.02,
        duration: 2,
        ease: 'power3.out'
      }, '-=1.8');

      tl.to(explodedBadgesRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out'
      }, '-=1.0');

      tl.to({}, { duration: 1.5 });
    }, pinWrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('manufacturing-story');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Colorway filter styles
  const getColorwayFilter = () => {
    if (colorway === 'obsidian') {
      return 'brightness(0.85) contrast(1.25) saturate(0.2) drop-shadow(0 35px 50px rgba(0, 0, 0, 0.95)) drop-shadow(0 0 35px rgba(56, 189, 248, 0.25))';
    }
    if (colorway === 'sand') {
      return 'sepia(0.35) contrast(1.1) drop-shadow(0 35px 50px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 30px rgba(197, 160, 89, 0.2))';
    }
    return 'drop-shadow(0 35px 50px rgba(0, 0, 0, 0.85)) drop-shadow(0 0 30px rgba(197, 160, 89, 0.15))';
  };

  return (
    <div ref={pinWrapperRef} className="scroll-hero-pin-wrapper" id="hero">
      {/* Pinned Sticky Stage */}
      <div ref={stickyStageRef} className="scroll-hero-sticky-stage">
        
        {/* Atmospheric 3D Canvas Particles */}
        <canvas 
          ref={canvasRef} 
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 2
          }}
        />

        {/* Ambient Dark Canvas Backdrop with Technical Grid */}
        <div className="scroll-stage-backdrop" />
        <div className="technical-grid-lines" />

        {/* ============================================================
            LIVE TELEMETRY HUD OVERLAY (Digital Alive Experience)
            ============================================================ */}
        <div className="hero-3d-hud-container">
          {/* Top-Left Telemetry: Factory Engine Active */}
          <div style={{ position: 'absolute', top: '90px', left: '32px' }}>
            <div className="hero-telemetry-item">
              <span className="pulse-dot" />
              <span>3D ENGINE ACTIVE • AGRA ATELIER • {telemetry.fps} FPS</span>
            </div>
          </div>

          {/* Top-Right Telemetry: Live Rotation Coordinates */}
          <div style={{ position: 'absolute', top: '90px', right: '32px' }}>
            <div className="hero-telemetry-item">
              <RotateCw size={12} color="var(--gold-light)" />
              <span>TILT X: {telemetry.rotX}° | Y: {telemetry.rotY}° | Z: 120MM</span>
            </div>
          </div>

          {/* Bottom-Left: Technical Last Specifications */}
          <div style={{ position: 'absolute', bottom: '32px', left: '32px' }}>
            <div className="hero-telemetry-item">
              <ShieldCheck size={12} color="var(--gold-light)" />
              <span>ANATOMICAL LAST KS-04 • 265G • 100K SATRA</span>
            </div>
          </div>

          {/* Bottom-Right: Interactive Colorway Lab */}
          <div 
            className="hero-3d-hud-interactive"
            style={{
              position: 'absolute',
              bottom: '32px',
              right: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(14, 17, 23, 0.85)',
              padding: '6px 14px',
              borderRadius: 'var(--rad-pill)',
              border: '1px solid rgba(245, 243, 239, 0.12)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <span style={{
              fontSize: '0.68rem',
              fontFamily: 'var(--font-accent)',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'var(--grey-mid)',
              textTransform: 'uppercase'
            }}>
              Material Lab:
            </span>

            {/* Alabaster Chalk */}
            <button
              onClick={() => setColorway('alabaster')}
              title="Alabaster White / Gold Accent"
              className={`colorway-dot ${colorway === 'alabaster' ? 'active' : ''}`}
              style={{ background: 'linear-gradient(135deg, #F5F3EF 0%, #C5A059 100%)' }}
            />

            {/* Obsidian Stealth */}
            <button
              onClick={() => setColorway('obsidian')}
              title="Obsidian Stealth / Carbon Cyan"
              className={`colorway-dot ${colorway === 'obsidian' ? 'active' : ''}`}
              style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #38bdf8 100%)' }}
            />

            {/* Desert Sand */}
            <button
              onClick={() => setColorway('sand')}
              title="Desert Sand / Tuscan Milled"
              className={`colorway-dot ${colorway === 'sand' ? 'active' : ''}`}
              style={{ background: 'linear-gradient(135deg, #d4b28c 0%, #9E8A58 100%)' }}
            />
          </div>
        </div>

        {/* ============================================================
            FLOATING 3D INTERACTION CONTROLLER (Alive Modes)
            ============================================================ */}
        <div 
          style={{
            position: 'absolute',
            bottom: '85px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 35,
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          <button
            onClick={() => setActiveMode('standard')}
            className={`hud-mode-pill ${activeMode === 'standard' ? 'active' : ''}`}
          >
            <Sparkles size={14} />
            <span>Standard 3D</span>
          </button>

          <button
            onClick={() => setActiveMode(activeMode === 'xray' ? 'standard' : 'xray')}
            className={`hud-mode-pill ${activeMode === 'xray' ? 'active' : ''}`}
          >
            <Eye size={14} />
            <span>X-Ray Laser CAD</span>
          </button>

          <button
            onClick={() => setActiveMode(activeMode === 'exploded' ? 'standard' : 'exploded')}
            className={`hud-mode-pill ${activeMode === 'exploded' ? 'active' : ''}`}
          >
            <Layers size={14} />
            <span>Exploded 3D</span>
          </button>
        </div>

        {/* 1. Floating Hero Typography & CTAs (Phase 1) */}
        <div 
          ref={heroContentRef}
          style={{
            position: 'absolute',
            zIndex: 25,
            top: '12%',
            left: 0,
            right: 0,
            pointerEvents: 'none',
            textAlign: 'center',
            padding: '0 24px'
          }}
        >
          <div style={{ maxWidth: '960px', margin: '0 auto', pointerEvents: 'auto' }}>
            {/* Eyebrow Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'rgba(197, 160, 89, 0.1)',
              border: '1px solid rgba(197, 160, 89, 0.3)',
              borderRadius: 'var(--rad-pill)',
              marginBottom: '20px'
            }}>
              <span className="pulse-dot" />
              <span style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-accent)',
                fontWeight: 800,
                letterSpacing: '0.15em',
                color: 'var(--gold-light)',
                textTransform: 'uppercase'
              }}>
                Advanced Footwear Manufacturing • Agra Campus
              </span>
            </div>

            {/* Exact Required Headline */}
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5.5vw, 5rem)',
              lineHeight: 1.05,
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#121212',
              margin: '0 0 18px 0'
            }}>
              ENGINEERED FOR MOVEMENT. <br />
              <span style={{
                background: 'linear-gradient(135deg, #C5A059 0%, #F5E5B8 50%, #C5A059 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                BUILT FOR BRANDS.
              </span>
            </h1>

            {/* Exact Required Supporting Text */}
            <p style={{
              fontSize: 'clamp(0.96rem, 1.6vw, 1.15rem)',
              color: '#555555',
              lineHeight: 1.65,
              maxWidth: '720px',
              margin: '0 auto 28px auto',
              fontWeight: 400
            }}>
              Premium footwear manufacturing combining precision engineering, advanced production and exceptional craftsmanship.
            </p>

            {/* Exact Required CTAs */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <Link 
                to="/manufacturing" 
                className="btn btn-primary btn-lg"
                style={{
                  padding: '14px 32px',
                  fontSize: '0.84rem',
                  letterSpacing: '0.1em',
                  fontWeight: 800,
                  borderRadius: '4px'
                }}
              >
                <span>Explore Manufacturing</span>
                <ArrowRight size={15} />
              </Link>

              <a 
                href="#contact-rfq" 
                className="btn btn-outline btn-lg"
                style={{
                  padding: '14px 28px',
                  fontSize: '0.84rem',
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                  borderRadius: '4px',
                  borderColor: 'rgba(245, 243, 239, 0.25)',
                  color: '#121212'
                }}
              >
                <span>Request a Quote</span>
              </a>

              <button 
                onClick={() => setShowCinema(true)}
                className="btn btn-outline btn-lg"
                style={{
                  padding: '14px 24px',
                  fontSize: '0.84rem',
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                  borderRadius: '4px',
                  borderColor: 'var(--gold-light)',
                  color: 'var(--gold-light)',
                  background: 'rgba(197, 160, 89, 0.1)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                <Play size={15} fill="currentColor" />
                <span>Watch 3D Cinema (12s)</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Central 3D Footwear Choreography Canvas */}
        <div 
          ref={shoeContainer3dRef}
          className="shoe-choreography-stage"
          style={{
            transition: 'transform 0.1s cubic-bezier(0.1, 0.9, 0.2, 1)'
          }}
        >
          {/* Dynamic Floor Shadow reacting to 3D orientation */}
          <div 
            className="shoe-3d-floor-shadow"
            style={{
              transform: `scale(${1 + Math.abs(telemetry.rotX) * 0.01}) translateX(${telemetry.rotY * 2}px)`,
              opacity: 0.7 - Math.abs(telemetry.rotX) * 0.01
            }}
          />

          {/* Laser Scanline Beam (when in X-Ray mode) */}
          {activeMode === 'xray' && (
            <div className="laser-scanline-beam" />
          )}

          {/* A. Main Finished Luxury Sneaker (Phase 1, 2, 3) */}
          <img 
            ref={shoeMainRef}
            src={activeMode === 'xray' ? '/assets/images/shoe_cad_wireframe.png' : '/assets/images/shoe_finished_pair.png'}
            alt="KS Shoes Finished Luxury Sneaker"
            className="shoe-interactive-img"
            style={{
              filter: activeMode === 'xray' 
                ? 'invert(1) drop-shadow(0 0 25px rgba(56, 189, 248, 0.8))' 
                : getColorwayFilter(),
              transition: 'filter 0.5s ease'
            }}
          />

          {/* B. Exploded Layer 1: Top 3D CAD Blueprint (Phase 4 or Exploded Mode) */}
          <img 
            ref={layerCadRef}
            src="/assets/images/shoe_cad_wireframe.png" 
            alt="KS Shoes 3D CAD Wireframe"
            className="exploded-layer"
            style={{ 
              filter: 'invert(1) drop-shadow(0 0 15px rgba(197, 160, 89, 0.4))',
              transform: activeMode === 'exploded' ? 'translate(-50%, -150px) scale(0.98)' : undefined,
              opacity: activeMode === 'exploded' ? 0.9 : undefined,
              transition: activeMode === 'exploded' ? 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : undefined
            }}
          />

          {/* C. Exploded Layer 2: Deconstructed Upper with Stitching & Lasting (Phase 4 or Exploded Mode) */}
          <img 
            ref={layerUpperRef}
            src="/assets/images/shoe_upper_construction.png" 
            alt="KS Shoes Deconstructed Upper"
            className="exploded-layer"
            style={{
              transform: activeMode === 'exploded' ? 'translate(-50%, -10px) scale(1.02)' : undefined,
              opacity: activeMode === 'exploded' ? 1 : undefined,
              transition: activeMode === 'exploded' ? 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : undefined
            }}
          />

          {/* D. Exploded Layer 3: Molded Tread Outsole (Phase 4 or Exploded Mode) */}
          <img 
            ref={layerSoleRef}
            src="/assets/images/shoe_outsole_sole.png" 
            alt="KS Shoes Molded Outsole"
            className="exploded-layer"
            style={{
              transform: activeMode === 'exploded' ? 'translate(-50%, 135px) scale(1.02)' : undefined,
              opacity: activeMode === 'exploded' ? 1 : undefined,
              transition: activeMode === 'exploded' ? 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' : undefined
            }}
          />
        </div>

        {/* 3. Interactive Callouts Positioned Around Shoe Geometry */}
        {/* Callout 1: Premium Upper */}
        <div 
          ref={calloutUpperRef}
          className="shoe-callout-pin"
          style={{ top: '38%', left: '12%' }}
        >
          <div className="shoe-callout-card">
            <span className="shoe-callout-tag">01 / Premium Upper</span>
            <p className="shoe-callout-desc">
              Full-grain Italian calfskin &amp; breathable jacquard weave clicked with Swiss CNC precision.
            </p>
          </div>
          <div className="shoe-callout-node" />
        </div>

        {/* Callout 2: Precision Stitching */}
        <div 
          ref={calloutStitchingRef}
          className="shoe-callout-pin"
          style={{ top: '32%', right: '12%', flexDirection: 'row-reverse' }}
        >
          <div className="shoe-callout-card">
            <span className="shoe-callout-tag">02 / Precision Stitching</span>
            <p className="shoe-callout-desc">
              High-frequency automated pattern sewing maintaining zero dimensional variance.
            </p>
          </div>
          <div className="shoe-callout-node" />
        </div>

        {/* Callout 3: Advanced Cushioning */}
        <div 
          ref={calloutCushioningRef}
          className="shoe-callout-pin"
          style={{ bottom: '34%', right: '10%', flexDirection: 'row-reverse' }}
        >
          <div className="shoe-callout-card">
            <span className="shoe-callout-tag">03 / Advanced Cushioning</span>
            <p className="shoe-callout-desc">
              Nitrogen-infused ergonomic rebound footbed calibrated for all-day athletic resilience.
            </p>
          </div>
          <div className="shoe-callout-node" />
        </div>

        {/* Callout 4: Engineered Midsole */}
        <div 
          ref={calloutMidsoleRef}
          className="shoe-callout-pin"
          style={{ bottom: '32%', left: '14%' }}
        >
          <div className="shoe-callout-card">
            <span className="shoe-callout-tag">04 / Engineered Midsole</span>
            <p className="shoe-callout-desc">
              Dual-density lightweight phylon core providing shock dissipation on high-impact strikes.
            </p>
          </div>
          <div className="shoe-callout-node" />
        </div>

        {/* Callout 5: Durable Outsole */}
        <div 
          ref={calloutOutsoleRef}
          className="shoe-callout-pin"
          style={{ bottom: '16%', right: '28%', flexDirection: 'row-reverse' }}
        >
          <div className="shoe-callout-card">
            <span className="shoe-callout-tag">05 / Durable Outsole</span>
            <p className="shoe-callout-desc">
              High-traction vulcanized rubber compound rated for 100,000 SATRA continuous flex cycles.
            </p>
          </div>
          <div className="shoe-callout-node" />
        </div>

        {/* 4. Exploded Badges Overlay (Phase 4 or Exploded Mode) */}
        <div 
          ref={explodedBadgesRef}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            zIndex: 35,
            background: 'rgba(14, 17, 23, 0.88)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            padding: '10px 24px',
            borderRadius: 'var(--rad-pill)',
            fontSize: '0.74rem',
            fontFamily: 'var(--font-accent)',
            fontWeight: 700,
            color: '#121212',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            opacity: activeMode === 'exploded' ? 1 : undefined,
            transition: 'opacity 0.4s ease'
          }}
        >
          <span style={{ color: 'var(--gold-light)' }}>Technical Exploded Anatomy</span>
          <span>•</span>
          <span>3D CAD Last</span>
          <span>•</span>
          <span>Strobel Upper</span>
          <span>•</span>
          <span>Molded Cupsole</span>
        </div>

        {/* Subtle Scroll Indicator */}
        <button 
          onClick={scrollToNext}
          aria-label="Scroll to Manufacturing Story"
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '32px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#121212',
            opacity: 0.65,
            transition: 'opacity 0.25s ease',
            zIndex: 25
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.65'}
        >
          <div className="pulse-dot" />
          <span style={{
            fontSize: '0.68rem',
            fontFamily: 'var(--font-accent)',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase'
          }}>
            Scroll To Deconstruct
          </span>
          <ChevronDown size={15} color="var(--gold-light)" />
        </button>

      </div>

      {/* 16:9 Cinematic 3D Product Animation Commercial Modal */}
      <CinematicCommercialPlayer 
        isOpen={showCinema} 
        onClose={() => setShowCinema(false)} 
      />
    </div>
  );
}
