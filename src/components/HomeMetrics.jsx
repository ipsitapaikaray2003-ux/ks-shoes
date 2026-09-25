import React from 'react';
import { motion } from 'framer-motion';

export default function HomeMetrics() {
  const metrics = [
    { value: "+15", label: "Years of Heritage in Footwear Manufacturing" },
    { value: "+200", label: "D2C Brands & International Startups Served" },
    { value: "+10k", label: "Pairs of Premium Footwear Crafted Daily" },
    { value: "+100", label: "Skilled Artisans & Master Craftsmen" }
  ];

  return (
    <section style={{ padding: '120px 0 160px', background: '#FFFFFF' }}>
      <div className="container-lg">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 900,
              color: '#000000',
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              margin: 0
            }}
          >
            India's Trusted Premium Footwear Partner
          </motion.h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px'
        }}>
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              style={{ textAlign: 'center', padding: '0 20px' }}
            >
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.5rem, 6vw, 5rem)',
                fontWeight: 900,
                color: '#000000',
                lineHeight: 1,
                marginBottom: '16px',
                letterSpacing: '-0.03em'
              }}>
                {metric.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: '#8B6914',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                lineHeight: 1.6,
                maxWidth: '200px',
                margin: '0 auto'
              }}>
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
