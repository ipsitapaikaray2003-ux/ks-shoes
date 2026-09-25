import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Config -------------------------------------------------------------------
const FRAME_COUNT   = 300;
const SCROLL_HEIGHT = '600vh';

const frameSrc = (n) =>
  `/frames/ezgif-frame-${String(n).padStart(3, '0')}.jpg`;

// --- Story beats -------------------------------------------------------------
const BEATS = [
  { frame: 0,   title: 'ENGINEERED FOR MOVEMENT', sub: 'Precision footwear · Born in Agra', accent: true,  side: 'center' },
  { frame: 60,  title: 'EVERY STITCH PERFECTED',  sub: 'Master artisans · 40 years of craft', accent: false, side: 'left'   },
  { frame: 130, title: 'ANATOMY OF PRECISION',    sub: 'Engineered components · Zero variance', accent: false, side: 'right'  },
  { frame: 200, title: 'BUILT FOR THE WORLD',     sub: '10,000+ pairs daily · 30+ countries', accent: false, side: 'left'   },
  { frame: 260, title: 'YOUR BRAND OUR CRAFT',    sub: 'Custom OEM · MOQ from 200 pairs', accent: true,  side: 'center' },
];

function beatPositionStyle(side) {
  const base = { position: 'absolute', zIndex: 5, maxWidth: '520px', padding: '0 40px' };
  if (side === 'center') return { ...base, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' };
  if (side === 'left')   return { ...base, top: '50%', left: '6%',  transform: 'translateY(-50%)',    textAlign: 'left'   };
  return                         { ...base, top: '50%', right: '6%', left: 'auto', transform: 'translateY(-50%)', textAlign: 'right' };
}

export default function FrameScrollCanvas() {
  const rootRef    = useRef(null);
  const canvasRef  = useRef(null);
  const framesRef  = useRef([]);
  const curFrameRef = useRef(0);

  const [displayFrame,   setDisplayFrame]   = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [loadPct,        setLoadPct]        = useState(0);
  const [isReady,        setIsReady]        = useState(false);
  const [showHint,       setShowHint]       = useState(true);
  const [activeBeat,     setActiveBeat]     = useState(0);
  const [beatOpacity,    setBeatOpacity]    = useState(1);

  // -- Preload frames --------------------------------------------------------
  useEffect(() => {
    let loaded = 0;
    const images = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      const finish = () => {
        loaded++;
        setLoadPct(Math.round((loaded / FRAME_COUNT) * 100));
        if (loaded >= FRAME_COUNT) setIsReady(true);
      };
      img.onload  = finish;
      img.onerror = finish;
      images.push(img);
    }
    framesRef.current = images;
  }, []);

  // -- Draw frame to canvas (cover-fit) -------------------------------------
  const drawFrame = useCallback((idx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = framesRef.current[idx];
    if (!img || !img.naturalWidth) return;

    const W = canvas.width  || window.innerWidth;
    const H = canvas.height || window.innerHeight;
    const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
    const sw = img.naturalWidth  * scale;
    const sh = img.naturalHeight * scale;
    ctx.clearRect(0, 0, W, H);
    ctx.drawImage(img, (W - sw) / 2, (H - sh) / 2, sw, sh);
  }, []);

  // -- Resize canvas ---------------------------------------------------------
  useEffect(() => {
    const resize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(curFrameRef.current);
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, [drawFrame]);

  useEffect(() => { if (isReady) drawFrame(0); }, [isReady, drawFrame]);

  // -- ScrollTrigger ---------------------------------------------------------
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const trigger = ScrollTrigger.create({
      trigger: root,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
      onUpdate: (self) => {
        const p = self.progress;
        setScrollProgress(p);

        const idx = Math.min(Math.floor(p * FRAME_COUNT), FRAME_COUNT - 1);
        if (idx !== curFrameRef.current) {
          curFrameRef.current = idx;
          setDisplayFrame(idx + 1);
          drawFrame(idx);
        }

        // Beat logic
        let beat = 0;
        for (let i = BEATS.length - 1; i >= 0; i--) {
          if (idx >= BEATS[i].frame) { beat = i; break; }
        }
        setActiveBeat(beat);

        const bs  = BEATS[beat].frame;
        const be  = beat < BEATS.length - 1 ? BEATS[beat + 1].frame : FRAME_COUNT;
        const len = be - bs;
        const loc = idx - bs;
        const fi  = Math.min(1, loc / (len * 0.12));
        const fo  = Math.max(0, 1 - (loc - len * 0.82) / (len * 0.18));
        setBeatOpacity(Math.min(fi, fo));

        if (p > 0.04) setShowHint(false);
      },
    });
    return () => trigger.kill();
  }, [drawFrame]);

  const beat = BEATS[activeBeat];

  return (
    <>
      <style>{`
        @keyframes scrollPulse {
          0%,100%{opacity:.3;transform:scaleY(1);}
          50%{opacity:1;transform:scaleY(1.25);}
        }
      `}</style>

      <div ref={rootRef} style={{ position:'relative', height: SCROLL_HEIGHT, background:'#050505' }}>
        <div style={{ position:'sticky', top:0, width:'100%', height:'100vh', overflow:'hidden', background:'#050505' }}>

          {/* Canvas */}
          <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', display:'block' }} />

          {/* Vignette */}
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at center,transparent 35%,rgba(5,5,10,.9) 100%)', zIndex:2, pointerEvents:'none' }} />

          {/* Loading */}
          {!isReady && (
            <div style={{ position:'absolute', inset:0, zIndex:20, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', background:'#050505' }}>
              <div style={{ fontFamily:'"Barlow Condensed",monospace', fontSize:'.72rem', letterSpacing:'.22em', color:'rgba(197,160,89,.7)', textTransform:'uppercase', marginBottom:'18px' }}>
                Loading — {loadPct}%
              </div>
              <div style={{ width:'180px', height:'2px', background:'rgba(255,255,255,.08)', borderRadius:'2px', overflow:'hidden' }}>
                <div style={{ height:'100%', width:`${loadPct}%`, background:'linear-gradient(90deg,#C5A059,#E8C87A)', transition:'width .25s ease', boxShadow:'0 0 10px rgba(197,160,89,.5)' }} />
              </div>
            </div>
          )}

          {/* Beat overlay */}
          {isReady && (
            <div key={activeBeat} style={{ ...beatPositionStyle(beat.side), opacity: beatOpacity, transition:'opacity .35s ease' }}>
              {/* Eyebrow */}
              <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'14px', justifyContent: beat.side==='center'?'center': beat.side==='right'?'flex-end':'flex-start' }}>
                <div style={{ width:'28px', height:'1px', background: beat.accent?'linear-gradient(90deg,#E8C87A,#C5A059)':'rgba(245,243,239,.35)' }} />
                <span style={{ fontFamily:'"Barlow Condensed",monospace', fontSize:'.67rem', fontWeight:800, letterSpacing:'.22em', color: beat.accent?'#C5A059':'rgba(245,243,239,.5)', textTransform:'uppercase' }}>
                  KS SHOES · AGRA
                </span>
                {beat.side==='center' && <div style={{ width:'28px', height:'1px', background:'linear-gradient(90deg,#C5A059,#E8C87A)' }} />}
              </div>

              {/* Headline */}
              <h2 style={{ fontFamily:'"Barlow Condensed","Anton","Impact",sans-serif', fontSize:'clamp(2.2rem,5.5vw,5rem)', fontWeight:900, lineHeight:1.04, letterSpacing:'-.01em', textTransform:'uppercase', margin:'0 0 14px', color:'#F5F0E8', textShadow:'0 2px 40px rgba(0,0,0,.85)' }}>
                {beat.title}
              </h2>

              {/* Sub */}
              <p style={{ fontFamily:'"Barlow Condensed",monospace', fontSize:'clamp(.8rem,1.3vw,.92rem)', fontWeight:600, letterSpacing:'.12em', textTransform:'uppercase', color:'rgba(245,243,239,.5)', margin:0, textShadow:'0 1px 16px rgba(0,0,0,.9)' }}>
                {beat.sub}
              </p>

              {/* CTA on last beat */}
              {activeBeat === BEATS.length-1 && (
                <a href="/contact" style={{ display:'inline-flex', alignItems:'center', gap:'10px', marginTop:'26px', padding:'12px 28px', background:'linear-gradient(135deg,#C5A059,#E8C87A)', color:'#FFFFFF', fontFamily:'"Barlow Condensed",monospace', fontSize:'.78rem', fontWeight:800, letterSpacing:'.18em', textTransform:'uppercase', textDecoration:'none', borderRadius:'4px', boxShadow:'0 4px 24px rgba(197,160,89,.4)' }}>
                  Request a Quote ?
                </a>
              )}
            </div>
          )}

          {/* Scroll hint */}
          {showHint && isReady && (
            <div style={{ position:'absolute', bottom:'36px', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'6px', zIndex:10, color:'rgba(245,243,239,.45)', fontFamily:'"Barlow Condensed",monospace', fontSize:'.7rem', letterSpacing:'.2em', textTransform:'uppercase' }}>
              <span>Scroll</span>
              <div style={{ width:'1px', height:'40px', background:'linear-gradient(to bottom,rgba(197,160,89,.8),transparent)', animation:'scrollPulse 2s ease-in-out infinite' }} />
            </div>
          )}

          {/* Progress bar */}
          <div style={{ position:'absolute', bottom:0, left:0, height:'2px', background:'linear-gradient(90deg,#C5A059,#E8C87A)', width:`${scrollProgress*100}%`, zIndex:10, boxShadow:'0 0 12px rgba(197,160,89,.65)', transition:'width .05s linear' }} />

          {/* Frame counter */}
          <div style={{ position:'absolute', bottom:'22px', right:'22px', fontFamily:'"Barlow Condensed",monospace', fontSize:'.7rem', fontWeight:700, letterSpacing:'.14em', color:'rgba(197,160,89,.45)', zIndex:10 }}>
            {String(displayFrame).padStart(3,'0')} / {FRAME_COUNT}
          </div>
        </div>
      </div>
    </>
  );
}

