import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ExpertisePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress (0 to 1) based on the height of the document vs window
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div style={{ background: '#050505', color: '#fff', position: 'relative' }}>
      
      {/* 3D Video Background - fixed position */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, overflow: 'hidden' }}>
        <video 
          src="/final_shoes.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', transform: 'scale(1.05)' }}
        />
        {/* Dark overlay to ensure text readability */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(5, 5, 5, 0.45)' }} />
      </div>

      {/* Content overlay */}
      <div style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
        
        {/* Section 1: Hero */}
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5%' }}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            style={{ textAlign: 'center' }}
          >
            <span style={{ color: 'var(--gold-primary, #C9A84C)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 600, display: 'block', marginBottom: '20px' }}>
              Precision & Scale
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 6vw, 80px)', fontWeight: 900, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em', lineHeight: 1.1, textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              Our Manufacturing <br/>
              <span style={{ color: 'var(--gold-primary, #C9A84C)' }}>Expertise</span>
            </h1>
          </motion.div>
        </section>

        {/* Section 2: Core Expertise */}
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '50px 5%' }}>
          <div className="container-lg" style={{ display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10%" }}
              variants={fadeUp}
              style={{
                background: 'rgba(10, 10, 10, 0.45)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                padding: '50px',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.08)',
                pointerEvents: 'auto',
                maxWidth: '550px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
              }}
            >
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '24px', color: '#fff', letterSpacing: '-0.02em' }}>Premium Production</h2>
              <p style={{ fontSize: '1.15rem', color: '#ccc', lineHeight: 1.8, marginBottom: '30px' }}>
                We manufacture premium-quality sports shoes suitable for men, women, and youth. Our production processes emphasize:
              </p>
              
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {['Superior comfort and fit', 'Durable construction', 'Lightweight materials', 'Trend-driven designs', 'Strict quality control at every stage'].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                    style={{ 
                      fontSize: '1.1rem', 
                      color: '#ddd', 
                      marginBottom: '20px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      fontWeight: 500
                    }}
                  >
                    <div style={{ width: '8px', height: '8px', background: 'var(--gold-primary, #C9A84C)', borderRadius: '50%', boxShadow: '0 0 10px rgba(201,168,76,0.6)' }}></div>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Brands */}
        <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '50px 5%' }}>
          <div className="container-lg" style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10%" }}
              variants={fadeUp}
              style={{
                background: 'rgba(10, 10, 10, 0.45)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                padding: '50px',
                borderRadius: '24px',
                border: '1px solid rgba(255,255,255,0.08)',
                pointerEvents: 'auto',
                maxWidth: '550px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
              }}
            >
              <span style={{ color: 'var(--gold-primary, #C9A84C)', letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '16px' }}>
                Brand Partnerships
              </span>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: '24px', color: '#ffffff', letterSpacing: '-0.02em' }}>Trusted by Leaders</h2>
              <p style={{ fontSize: '1.2rem', color: '#ccc', lineHeight: 1.8 }}>
                We have experience manufacturing footwear for brands such as <strong style={{ color: '#fff' }}>Snitch, Wrogn, Paragon, Khadim Metro ETC</strong> (or similar brand specifications, depending on client requirements).
              </p>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
