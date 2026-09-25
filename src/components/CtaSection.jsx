import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CtaSection() {
  return (
    <section style={{ 
      position: 'relative',
      padding: '160px 5%', 
      background: '#0a0a0a', 
      color: '#fff', 
      textAlign: 'center',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '70vh'
    }}>
      
      {/* Background Graphic Image (Ken Burns Effect) */}
      <motion.img
        src="/assets/images/factory.jpg"
        alt="Premium Manufacturing Facility"
        animate={{ scale: [1.05, 1.15, 1.05] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
          opacity: 0.35,
          pointerEvents: 'none'
        }}
      />

      {/* Cinematic Gradient Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, #050505 100%)',
        zIndex: 1
      }} />

      {/* Subtle Animated Gold Glow in background */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(214,180,90,0.15) 0%, transparent 70%)',
          zIndex: 1,
          pointerEvents: 'none'
        }}
      />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            background: 'rgba(15, 15, 15, 0.65)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            padding: '80px 40px',
            borderRadius: '32px',
            boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            style={{
              width: '60px',
              height: '6px',
              background: 'var(--accent-gold, #D6B45A)',
              margin: '0 auto 30px auto',
              borderRadius: '10px'
            }}
          />
          
          <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', fontWeight: 600, letterSpacing: '-0.02em', margin: '0 0 24px 0', lineHeight: 1.1, color: 'var(--text-primary, #F5F1E8)' }}>
            Ready to Scale <span style={{ color: 'var(--accent-gold, #D6B45A)', fontStyle: 'italic' }}>Your Brand?</span>
          </h2>
          
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary, rgba(245,241,232,0.72))', margin: '0 auto 48px auto', maxWidth: '540px', lineHeight: 1.6 }}>
            Partner with the premier private-label manufacturer. Low MOQs, ultra-premium quality, and total OEM/ODM flexibility.
          </p>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link 
              to="/contact" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '18px 48px',
                background: 'linear-gradient(135deg, var(--accent-gold, #D6B45A) 0%, #B89645 100%)',
                color: '#000',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '1.1rem',
                borderRadius: '99px',
                boxShadow: '0 10px 30px rgba(214,180,90,0.3)',
                transition: 'all 0.3s ease',
                border: 'none',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(214,180,90,0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(214,180,90,0.3)';
              }}
            >
              Request a Quote
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
