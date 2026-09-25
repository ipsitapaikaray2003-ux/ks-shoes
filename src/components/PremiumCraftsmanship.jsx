import React from 'react';
import { motion } from 'framer-motion';

export default function PremiumCraftsmanship() {
  const lineVariants = {
    hidden: { width: 0 },
    visible: { width: '40px', transition: { duration: 0.8, ease: "easeOut" } }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section style={{
      backgroundColor: '#FFFFFF',
      color: '#000000',
      padding: '120px 0',
      fontFamily: '"Inter", sans-serif',
      borderTop: '1px solid rgba(0,0,0,0.05)',
      overflow: 'hidden'
    }}>
      <div className="container-lg">
        {/* Header Title */}
        <div style={{ textAlign: 'center', marginBottom: '100px' }}>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              display: 'block',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: '#8B6914',
              marginBottom: '20px'
            }}
          >
            Advanced Engineering
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              textTransform: 'uppercase',
              letterSpacing: '-0.02em',
              margin: 0,
              color: '#121212'
            }}
          >
            Precision In <br />
            <span style={{ color: '#8B6914' }}>Every Detail.</span>
          </motion.h2>
        </div>

        {/* Editorial Layout: Content Left, Photo Right */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '60px'
        }}>
          {/* Left side: Anatomy Details */}
          <div style={{
            flex: '1 1 45%',
            minWidth: '320px',
            display: 'flex',
            flexDirection: 'column',
            gap: '50px'
          }}>
            {[
              {
                title: 'Breathable Mesh Upper',
                desc: 'Engineered multi-layer knits designed for maximum airflow, structural integrity, and a flawless lightweight fit.'
              },
              {
                title: 'Advanced Lacing System',
                desc: 'Reinforced eyelets with dynamic tension distribution to securely lock the foot without applying excessive pressure.'
              },
              {
                title: 'Impact Absorption Midsole',
                desc: 'Dual-density foam geometry providing superior energy return, reducing joint fatigue during prolonged wear.'
              },
              {
                title: 'Engineered Outsole Grip',
                desc: 'Anti-slip rubber compounds combined with anatomical traction patterns for absolute stability on varied surfaces.'
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.2 } }
                }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px'
                }}
              >
                <motion.div 
                  variants={lineVariants}
                  style={{
                    height: '1px',
                    backgroundColor: '#8B6914',
                    marginTop: '12px'
                  }}
                />
                <motion.div variants={textVariants}>
                  <h3 style={{
                    fontFamily: 'var(--font-accent)',
                    fontSize: '1rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: '#121212',
                    marginBottom: '10px'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#555',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right side: Premium Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              flex: '1 1 45%',
              minWidth: '320px',
              position: 'relative',
              backgroundColor: '#FAFAFA',
              boxShadow: '0 25px 60px rgba(0,0,0,0.06)'
            }}
          >
            <img 
              src="/assets/images/slider_luxury_pair.jpg" 
              alt="Premium Footwear Craftsmanship" 
              style={{
                width: '100%',
                height: 'auto',
                aspectRatio: '4/5',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            {/* Subtle luxury overlay border */}
            <div style={{
              position: 'absolute',
              inset: '20px',
              border: '1px solid rgba(255,255,255,0.4)',
              pointerEvents: 'none'
            }} />
          </motion.div>
        </div>

        {/* Manufacturing Metrics Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '120px',
            paddingTop: '60px',
            borderTop: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          {[
            { value: '200+', label: 'Min Order Pairs' },
            { value: '7 Day', label: 'Sample Turnaround' },
            { value: '96 PT', label: 'Quality Inspection' }
          ].map((stat, idx) => (
            <div key={idx} style={{ textAlign: 'center', padding: '20px' }}>
              <span style={{
                display: 'block',
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                fontWeight: 900,
                color: '#8B6914',
                marginBottom: '8px'
              }}>
                {stat.value}
              </span>
              <span style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#121212'
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
