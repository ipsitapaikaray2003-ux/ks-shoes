import React from 'react';
import { motion } from 'framer-motion';

export default function HomeInfrastructure() {
  return (
    <section style={{ padding: '120px 0', background: '#FFFFFF', overflow: 'hidden' }}>
      <div className="container-lg">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center'
        }}>
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ paddingRight: '40px' }}
          >
            <span style={{
              display: 'block',
              fontFamily: 'var(--font-accent)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#8B6914',
              marginBottom: '20px'
            }}>
              Advanced Infrastructure
            </span>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 4vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.1,
              color: '#000000',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              marginBottom: '30px'
            }}>
              Precision Crafted.<br />Globally Scaled.
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#555555', lineHeight: 1.8, marginBottom: '24px' }}>
              Based in India, KS Shoes combines advanced automated production infrastructure with decades of artisanal expertise. From state-of-the-art Italian machinery to final SATRA-compliant quality inspection, we guarantee perfection in every pair.
            </p>
            <p style={{ fontSize: '1.1rem', color: '#555555', lineHeight: 1.8 }}>
              Whether you need rapid ODM prototyping or full private label bulk manufacturing, our 65,000 sq.ft facility scales dynamically to support D2C brands, startups, and international retailers without compromising on craftsmanship.
            </p>
          </motion.div>

          {/* Right Images (Asymmetrical Grid) */}
          <div style={{ position: 'relative', height: '600px' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '75%',
                height: '75%',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.08)'
              }}
            >
              <img src="/assets/images/hightech_factory_bright.jpg" alt="Factory Infrastructure" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '60%',
                height: '55%',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
              }}
            >
              <img src="/assets/images/craft_stitching.jpg" alt="Artisan Craftsmanship" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Mobile Responsive adjustments via inline media queries are limited, using basic flex wrap strategy would be safer for production, but given the prompt constraints, we assume container handles it or we add a quick global fix if needed. For now, grid handles desktop well. */}
      <style>{`
        @media (max-width: 992px) {
          section > div > div { grid-template-columns: 1fr !important; }
          section > div > div > div:first-child { padding-right: 0 !important; margin-bottom: 60px; }
        }
      `}</style>
    </section>
  );
}
