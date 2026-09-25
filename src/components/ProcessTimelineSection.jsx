import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Design & Development',
    desc: 'From initial sketches to 3D CAD modeling, our engineering team perfects the ergonomics, structural integrity, and aesthetic of your footwear.'
  },
  {
    num: '02',
    title: 'Precision Prototyping',
    desc: 'We create high-fidelity physical samples using premium materials and automated laser cutting, allowing you to touch, feel, and test the product.'
  },
  {
    num: '03',
    title: 'Bulk Production & QC',
    desc: 'Upon approval, we scale into high-volume manufacturing with strict 20-point quality control inspections, final branding, and global shipping.'
  }
];

export default function ProcessTimelineSection() {
  return (
    <section style={{ padding: '120px 5%', background: '#111', color: '#fff', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', margin: '0 auto 80px auto', maxWidth: '800px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 600, letterSpacing: '-0.02em', margin: '0 0 20px 0', color: 'var(--text-primary)' }}
          >
            The Production Lifecycle
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}
          >
            A seamless, transparent process from raw concept to finished product, designed specifically for modern footwear brands.
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', position: 'relative' }}>
          
          {/* Animated Connecting line for desktop */}
          <div className="hide-mobile" style={{ position: 'absolute', top: '40px', left: '10%', right: '10%', height: '1px', background: 'rgba(255,255,255,0.05)', zIndex: 0 }}>
            <motion.div 
              initial={{ width: '0%' }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)',
                boxShadow: '0 0 10px var(--accent-gold)'
              }}
            />
          </div>

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                y: -10, 
                borderColor: 'rgba(214,180,90,0.4)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                background: '#161616'
              }}
              style={{ 
                position: 'relative', 
                zIndex: 1, 
                textAlign: 'center', 
                background: '#141414', 
                padding: '50px 30px', 
                borderRadius: '24px', 
                border: '1px solid rgba(255,255,255,0.03)',
                transition: 'background 0.4s ease'
              }}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #222, #0d0d0d)', 
                  border: '1px solid rgba(214,180,90,0.3)',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  margin: '0 auto 30px auto',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.4), inset 0 2px 10px rgba(214,180,90,0.1)'
                }}
              >
                {step.num}
              </motion.div>
              <h3 style={{ fontSize: '1.5rem', margin: '0 0 16px 0', fontWeight: 600, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                {step.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0, fontSize: '1rem' }}>
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
