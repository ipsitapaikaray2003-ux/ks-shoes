import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, ShieldCheck } from 'lucide-react';

export default function HomeProductionCapacity() {
  const features = [
    {
      icon: <TrendingUp size={28} color="var(--gold-primary)" />,
      title: '50,000 Pairs Monthly',
      desc: 'Massive production capacity specifically optimized for sports and casual footwear.'
    },
    {
      icon: <Clock size={28} color="var(--gold-primary)" />,
      title: 'Efficient Planning',
      desc: 'Strategic production planning ensures rapid turnaround for bulk and repeat orders.'
    },
    {
      icon: <ShieldCheck size={28} color="var(--gold-primary)" />,
      title: 'Timely & Consistent',
      desc: 'On-time delivery schedules while maintaining uncompromising quality standards.'
    }
  ];

  return (
    <section style={{ 
      padding: '120px 5%', 
      background: 'url("/assets/images/hightech_factory_cinematic.jpg") center/cover fixed', 
      position: 'relative',
      color: '#fff',
      fontFamily: '"Inter", sans-serif'
    }}>
      {/* Dark Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,5,5,0.96) 0%, rgba(15,15,15,0.88) 100%)' }}></div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
           <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ color: 'var(--gold-primary)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '16px' }}
          >
            Industrial Scale
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, margin: '0 0 40px 0', letterSpacing: '-0.02em', textTransform: 'uppercase' }}
          >
            Production Capacity
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            style={{ 
              display: 'inline-flex',
              alignItems: 'center',
              background: 'rgba(201,168,76,0.1)', 
              border: '1px solid rgba(201,168,76,0.3)',
              padding: '16px 40px',
              borderRadius: '50px',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 10px 30px rgba(201,168,76,0.05)'
            }}
          >
            <span style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--gold-light)', lineHeight: 1 }}>50,000</span>
            <span style={{ fontSize: '1.1rem', fontWeight: 600, color: '#ccc', marginLeft: '16px', textAlign: 'left', lineHeight: 1.2 }}>Pairs of Sports<br/>Shoes Monthly</span>
          </motion.div>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '40px' 
        }}>
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (idx * 0.1) }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '40px 30px',
                borderRadius: '24px',
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                cursor: 'default'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ 
                width: '70px', 
                height: '70px', 
                borderRadius: '50%', 
                background: 'rgba(201,168,76,0.1)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                margin: '0 auto 24px auto',
                border: '1px solid rgba(201,168,76,0.2)'
              }}>
                {feature.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px', color: '#fff' }}>
                {feature.title}
              </h3>
              <p style={{ color: '#aaa', lineHeight: 1.7, fontSize: '0.95rem', margin: 0 }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
