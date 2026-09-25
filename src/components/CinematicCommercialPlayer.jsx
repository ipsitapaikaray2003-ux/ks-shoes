import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, RotateCcw, X, Volume2, VolumeX, Maximize2, Sparkles, Layers } from 'lucide-react';

export default function CinematicCommercialPlayer({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0); // 0 to 12s
  const [isMuted, setIsMuted] = useState(false);
  const animFrameRef = useRef(null);
  const lastTimeRef = useRef(null);

  const duration = 12; // 12 seconds total

  // Phase logic based on exact 12-second sequence
  // 0s - 2.5s: Reveal from darkness & ambient lighting
  // 2.5s - 6.0s: 360-degree rotation & camera push-in
  // 6.0s - 8.5s: Macro close-up & stitching/texture inspection
  // 8.5s - 10.5s: Clean exploded-view (upper -> lining -> insole -> midsole -> outsole)
  // 10.5s - 12.0s: Smooth reassembly & final hero beauty pose
  const getPhaseInfo = (t) => {
    if (t < 2.5) {
      return {
        stage: '01 / REVEAL',
        title: 'Emergence From Darkness',
        desc: 'Single luxury sneaker appearing in minimal off-white studio with soft key lighting',
        image: '/assets/images/cinematic_3d_sneaker_hero.jpg',
        transform: `scale(${0.85 + (t / 2.5) * 0.15}) translateY(${(2.5 - t) * 15}px)`,
        opacity: Math.min(1, t / 1.5),
        filter: 'brightness(' + (0.4 + (t / 2.5) * 0.6) + ') contrast(1.1)'
      };
    } else if (t < 6.0) {
      const p = (t - 2.5) / 3.5;
      return {
        stage: '02 / 360° ORBIT',
        title: 'Axial Rotation & Camera Push-In',
        desc: 'Continuous 360-degree inspection revealing silhouette, upper calfskin and heel curvature',
        image: '/assets/images/cinematic_3d_sneaker_hero.jpg',
        transform: `scale(${1 + p * 0.12}) rotateY(${p * 360}deg) translateY(${Math.sin(p * Math.PI * 2) * 8}px)`,
        opacity: 1,
        filter: 'brightness(1) contrast(1.08)'
      };
    } else if (t < 8.5) {
      const p = (t - 6.0) / 2.5;
      return {
        stage: '03 / MACRO CLOSE-UP',
        title: 'Precision Stitching & Leather Texture',
        desc: 'Extreme macro zoom on full-grain calfskin, double lockstitching and perforated matrix',
        image: '/assets/images/cinematic_3d_sneaker_macro.jpg',
        transform: `scale(${1.08 + p * 0.08}) translateX(${-p * 20}px)`,
        opacity: 1,
        filter: 'brightness(1.02) contrast(1.12)'
      };
    } else if (t < 10.5) {
      const p = (t - 8.5) / 2.0;
      return {
        stage: '04 / EXPLODED ANATOMY',
        title: 'Vertical Component Separation',
        desc: 'Upper → Lining → Insole → Midsole → Outsole separating in mid-air alignment',
        image: '/assets/images/cinematic_3d_sneaker_exploded.jpg',
        transform: `scale(${0.96 + p * 0.06}) translateY(${Math.sin(p * Math.PI) * -10}px)`,
        opacity: 1,
        filter: 'brightness(1) contrast(1.05)'
      };
    } else {
      const p = (t - 10.5) / 1.5;
      return {
        stage: '05 / REASSEMBLY',
        title: 'Hermetic Assembly & Final Pose',
        desc: 'Components smoothly snap back into the finished sneaker with subtle specular glint',
        image: '/assets/images/cinematic_3d_sneaker_hero.jpg',
        transform: `scale(${1 + (1 - p) * 0.05})`,
        opacity: 1,
        filter: 'brightness(1.05) contrast(1.1)'
      };
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const tick = (now) => {
      if (!lastTimeRef.current) lastTimeRef.current = now;
      const delta = (now - lastTimeRef.current) / 1000;
      lastTimeRef.current = now;

      if (isPlaying) {
        setCurrentTime((prev) => {
          const next = prev + delta;
          if (next >= duration) {
            return 0; // Loop seamlessly
          }
          return next;
        });
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      lastTimeRef.current = null;
    };
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  const currentPhase = getPhaseInfo(currentTime);
  const progressPercent = (currentTime / duration) * 100;

  return (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(5, 7, 10, 0.96)',
        backdropFilter: 'blur(25px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px'
      }}
    >
      <div 
        style={{
          width: '100%',
          maxWidth: '1180px',
          background: '#FFFFFF',
          border: '1px solid rgba(197, 160, 89, 0.35)',
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: '0 40px 100px rgba(0, 0, 0, 0.9), 0 0 50px rgba(197, 160, 89, 0.15)',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Top Player Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '16px 24px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
          background: 'rgba(14, 17, 23, 0.8)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="pulse-dot" />
            <span style={{
              fontSize: '0.78rem',
              fontFamily: 'var(--font-accent)',
              fontWeight: 800,
              letterSpacing: '0.14em',
              color: 'var(--gold-light)',
              textTransform: 'uppercase'
            }}>
              4K 3D Cinema Render • Modern Luxury Sneaker (12s Commercial)
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{
              fontSize: '0.74rem',
              fontFamily: 'monospace',
              color: 'var(--grey-mid)'
            }}>
              {currentTime.toFixed(1)}s / {duration}.0s • 60 FPS
            </span>
            <button
              onClick={onClose}
              aria-label="Close Cinema Player"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: '#121212',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'background 0.2s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* 16:9 Cinema Viewport Container */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            paddingTop: '56.25%', // Strict 16:9 Aspect Ratio
            background: '#FFFFFF',
            overflow: 'hidden'
          }}
        >
          {/* Internal Viewport Content */}
          <div 
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              perspective: '1200px'
            }}
          >
            {/* Visual Image Render */}
            <img 
              src={currentPhase.image} 
              alt={currentPhase.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transform: currentPhase.transform,
                opacity: currentPhase.opacity,
                filter: currentPhase.filter,
                transition: 'transform 0.15s linear, opacity 0.3s ease, filter 0.3s ease',
                willChange: 'transform, opacity'
              }}
            />

            {/* Subtle Vignette Overlay */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                pointerEvents: 'none',
                background: 'radial-gradient(circle at center, transparent 60%, rgba(7, 9, 13, 0.7) 100%)'
              }}
            />

            {/* Active Phase HUD Card (Bottom-Left) */}
            <div 
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                maxWidth: '440px',
                background: 'rgba(11, 14, 20, 0.88)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(197, 160, 89, 0.35)',
                padding: '14px 20px',
                borderRadius: '4px',
                pointerEvents: 'none'
              }}
            >
              <span style={{
                fontSize: '0.68rem',
                fontFamily: 'var(--font-accent)',
                fontWeight: 800,
                letterSpacing: '0.15em',
                color: 'var(--gold-light)',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '4px'
              }}>
                {currentPhase.stage}
              </span>
              <h4 style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '1.1rem',
                fontWeight: 800,
                color: '#121212',
                textTransform: 'uppercase',
                margin: '0 0 4px 0'
              }}>
                {currentPhase.title}
              </h4>
              <p style={{
                fontSize: '0.8rem',
                color: '#666666',
                margin: 0,
                lineHeight: 1.4
              }}>
                {currentPhase.desc}
              </p>
            </div>

            {/* Specular Glint Highlight */}
            {currentTime > 10.5 && (
              <div 
                style={{
                  position: 'absolute',
                  top: '30%',
                  right: '35%',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(197, 160, 89, 0.4) 40%, transparent 70%)',
                  filter: 'blur(10px)',
                  pointerEvents: 'none',
                  animation: 'pulseGlow 1.5s infinite'
                }}
              />
            )}
          </div>
        </div>

        {/* Player Controls Bar */}
        <div style={{
          padding: '16px 24px',
          background: 'rgba(14, 17, 23, 0.95)',
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
          {/* Progress Timeline Scrubber */}
          <div 
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const clickX = e.clientX - rect.left;
              const ratio = Math.max(0, Math.min(1, clickX / rect.width));
              setCurrentTime(ratio * duration);
            }}
            style={{
              width: '100%',
              height: '6px',
              background: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '3px',
              cursor: 'pointer',
              position: 'relative'
            }}
          >
            <div 
              style={{
                width: `${progressPercent}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #C5A059 0%, #F5E5B8 100%)',
                borderRadius: '3px',
                position: 'relative'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  right: '-5px',
                  top: '-4px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: 'var(--gold-light)',
                  boxShadow: '0 0 10px var(--gold-light)'
                }}
              />
            </div>
          </div>

          {/* Controls & Quick Jumps */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="btn btn-primary"
                style={{
                  padding: '8px 18px',
                  fontSize: '0.78rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderRadius: '3px'
                }}
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span>{isPlaying ? 'Pause' : 'Play'}</span>
              </button>

              <button
                onClick={() => setCurrentTime(0)}
                className="btn btn-outline"
                style={{
                  padding: '8px 14px',
                  fontSize: '0.78rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  borderRadius: '3px'
                }}
              >
                <RotateCcw size={14} />
                <span>Replay</span>
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--grey-mid)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem'
                }}
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                <span>{isMuted ? 'Muted' : 'Audio Track'}</span>
              </button>
            </div>

            {/* Quick Phase Jump Markers */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <button
                onClick={() => setCurrentTime(0)}
                style={{
                  background: currentTime < 2.5 ? 'rgba(197, 160, 89, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${currentTime < 2.5 ? 'rgba(197, 160, 89, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
                  color: '#121212',
                  padding: '4px 10px',
                  borderRadius: '3px',
                  fontSize: '0.7rem',
                  cursor: 'pointer'
                }}
              >
                01 Reveal
              </button>

              <button
                onClick={() => setCurrentTime(2.6)}
                style={{
                  background: (currentTime >= 2.5 && currentTime < 6.0) ? 'rgba(197, 160, 89, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${(currentTime >= 2.5 && currentTime < 6.0) ? 'rgba(197, 160, 89, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
                  color: '#121212',
                  padding: '4px 10px',
                  borderRadius: '3px',
                  fontSize: '0.7rem',
                  cursor: 'pointer'
                }}
              >
                02 360° Orbit
              </button>

              <button
                onClick={() => setCurrentTime(6.1)}
                style={{
                  background: (currentTime >= 6.0 && currentTime < 8.5) ? 'rgba(197, 160, 89, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${(currentTime >= 6.0 && currentTime < 8.5) ? 'rgba(197, 160, 89, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
                  color: '#121212',
                  padding: '4px 10px',
                  borderRadius: '3px',
                  fontSize: '0.7rem',
                  cursor: 'pointer'
                }}
              >
                03 Macro Detail
              </button>

              <button
                onClick={() => setCurrentTime(8.6)}
                style={{
                  background: (currentTime >= 8.5 && currentTime < 10.5) ? 'rgba(197, 160, 89, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${(currentTime >= 8.5 && currentTime < 10.5) ? 'rgba(197, 160, 89, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
                  color: '#121212',
                  padding: '4px 10px',
                  borderRadius: '3px',
                  fontSize: '0.7rem',
                  cursor: 'pointer'
                }}
              >
                04 Exploded Anatomy
              </button>

              <button
                onClick={() => setCurrentTime(10.6)}
                style={{
                  background: currentTime >= 10.5 ? 'rgba(197, 160, 89, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                  border: `1px solid ${currentTime >= 10.5 ? 'rgba(197, 160, 89, 0.5)' : 'rgba(255, 255, 255, 0.08)'}`,
                  color: '#121212',
                  padding: '4px 10px',
                  borderRadius: '3px',
                  fontSize: '0.7rem',
                  cursor: 'pointer'
                }}
              >
                05 Assembly
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
