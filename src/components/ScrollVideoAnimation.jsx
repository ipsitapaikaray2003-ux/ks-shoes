import React, { useRef, useEffect } from 'react';

export default function ScrollVideoAnimation() {
  const videoRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    canvas.width = 1;
    canvas.height = 1;

    let animationFrameId;

    const extractColor = () => {
      if (video.readyState >= 2 && !video.paused && !video.ended) {
        try {
          const sw = video.videoWidth;
          const sh = video.videoHeight;
          if (sw > 0 && sh > 0) {
            // Sample a patch from the center of the video where the shoe is
            ctx.drawImage(video, sw/2 - 50, sh/2 - 50, 100, 100, 0, 0, 1, 1);
            const frame = ctx.getImageData(0, 0, 1, 1).data;
            const r = frame[0];
            const g = frame[1];
            const b = frame[2];
            
            if (overlayRef.current) {
              // Create an Ambilight-like effect:
              // Transparent in the center so the shoe stays clear,
              // but tints the outer background to match the shoe's real-time color!
              overlayRef.current.style.background = `radial-gradient(circle at center, transparent 30%, rgba(${r}, ${g}, ${b}, 0.65) 100%)`;
            }
          }
        } catch (e) {
          // Ignore cross-origin canvas errors if they occur
        }
      }
      animationFrameId = requestAnimationFrame(extractColor);
    };

    video.addEventListener('play', extractColor);

    return () => {
      video.removeEventListener('play', extractColor);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="scroll-video-container"
      style={{ height: '100vh', position: 'relative', background: '#000', overflow: 'hidden' }}
    >
      {/* Automated Background Video */}
      <video 
        ref={videoRef}
        src="/3D_shoe_product_showcase_1080p_20260923145121_gwr_video_mvp.mp4"
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.02)' }}
      />

      {/* Dynamic Color Veil (Ambilight Effect) */}
      <div 
        ref={overlayRef}
        style={{ 
          position: 'absolute', 
          inset: 0, 
          pointerEvents: 'none',
          zIndex: 1,
          transition: 'background 0.1s ease-out'
        }} 
      />

      {/* Subtle Grain Texture SVG for cinematic feel */}
      <div style={{
        position: 'absolute',
        inset: '-50%',
        opacity: 0.13,
        mixBlendMode: 'multiply',
        pointerEvents: 'none',
        zIndex: 2,
        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/></filter><rect width='140' height='140' filter='url(%23n)' opacity='.5'/></svg>")`
      }} />

      {/* Premium Content Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
        padding: '6%',
        paddingTop: '8%',
        zIndex: 10,
        pointerEvents: 'none'
      }}>
        <div style={{ pointerEvents: 'auto', maxWidth: '600px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', color: '#fff', margin: 0, fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', textShadow: '0 4px 24px rgba(0,0,0,0.6)' }}>
            THE FUTURE OF FOOTWEAR
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.15rem', marginTop: '16px', lineHeight: 1.5, textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
            Experience unparalleled comfort and cutting-edge 3D craftsmanship. Designed to adapt. Built to last.
          </p>
          <a href="#products" style={{
            display: 'inline-flex',
            marginTop: '28px',
            padding: '14px 32px',
            backgroundColor: '#fff',
            color: '#000',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.9rem',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            borderRadius: '99px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}>
            Explore Collection
          </a>
        </div>
      </div>
    </div>
  );
}
