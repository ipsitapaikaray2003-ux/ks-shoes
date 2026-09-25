import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const slides = [
  {
    id: 1,
    title: 'STRUCTURAL',
    subtitle: 'ENGINEERING',
    image: '/assets/images/shoe_cad_wireframe.png',
    desc: 'Precision CAD modeling ensures perfect ergonomic alignment and structural integrity before a single piece of leather is cut.'
  },
  {
    id: 2,
    title: 'MATERIAL',
    subtitle: 'MASTERY',
    image: '/assets/images/shoe_upper_construction.png',
    desc: 'Sourcing only the finest premium leathers, breathable textiles, and engineered performance meshes.'
  },
  {
    id: 3,
    title: 'ADVANCED',
    subtitle: 'OUTSOLES',
    image: '/assets/images/shoe_outsole_sole.png',
    desc: 'High-traction rubber compounds and EVA foam midsoles built for uncompromising durability and all-day comfort.'
  },
  {
    id: 4,
    title: 'FINISHED',
    subtitle: 'PRODUCT',
    image: '/assets/images/shoe-hero-transparent.png',
    desc: 'The pinnacle of modern footwear manufacturing, meticulously assembled and ready to elevate your brand.'
  }
];

export default function HorizontalShoeShowcase() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 4 slides = 400vw width. 
  // We need to move it left by 300vw to see the last slide (from 0% to -75%)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <div 
      ref={containerRef} 
      id="horizontal-showcase"
      style={{ height: '400vh', position: 'relative', background: '#080808', color: '#fff' }}
    >
      <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        
        {/* Subtle radial gradient background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #080808 100%)',
          zIndex: 0
        }} />

        <motion.div 
          style={{ x, display: 'flex', width: '400vw', height: '100%', zIndex: 1 }}
        >
          {slides.map((slide, i) => (
            <div 
              key={slide.id} 
              style={{ 
                width: '100vw', 
                height: '100%', 
                position: 'relative', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}
            >
              
              {/* Background Typography (Massive & Hollow) */}
              <div 
                style={{ 
                  position: 'absolute', 
                  whiteSpace: 'nowrap', 
                  textAlign: 'center', 
                  zIndex: 1, 
                  opacity: 0.15,
                  pointerEvents: 'none'
                }}
              >
                <h2 style={{ 
                  fontSize: 'clamp(80px, 18vw, 250px)', 
                  margin: 0, 
                  lineHeight: 0.85, 
                  fontWeight: 700, 
                  letterSpacing: '-0.02em', 
                  WebkitTextStroke: '2px rgba(255,255,255,0.8)', 
                  color: 'transparent' 
                }}>
                  {slide.title}<br/>{slide.subtitle}
                </h2>
              </div>

              {/* Foreground Image */}
              <div style={{ 
                position: 'relative', 
                zIndex: 2, 
                width: '70%', 
                maxWidth: '900px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                padding: '40px'
              }}>
                <img 
                  src={slide.image} 
                  alt={slide.title} 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'contain', 
                    filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.8))' 
                  }} 
                />
              </div>

              {/* Foreground Text Block */}
              <div style={{ 
                position: 'absolute', 
                bottom: '10%', 
                left: '10%', 
                zIndex: 3, 
                maxWidth: '450px',
                padding: '24px',
                background: 'rgba(20,20,20,0.4)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                <div style={{ 
                  fontSize: '0.9rem', 
                  letterSpacing: '0.2em', 
                  textTransform: 'uppercase', 
                  color: '#C0A062', // Gold brand accent
                  marginBottom: '12px', 
                  fontWeight: 600 
                }}>
                  0{i+1} / 04 — Build Phase
                </div>
                <h3 style={{ fontSize: '2.2rem', margin: '0 0 16px 0', fontWeight: 300, letterSpacing: '-0.02em' }}>
                  {slide.title}
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#ccc', lineHeight: 1.6, margin: 0 }}>
                  {slide.desc}
                </p>
              </div>
              
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
