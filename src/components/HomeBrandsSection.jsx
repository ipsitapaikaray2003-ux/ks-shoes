import React from 'react';
import { motion } from 'framer-motion';

const brandsData = [
  {
    name: 'WROGN',
    logoFont: '"Inter", sans-serif',
    logoWeight: 900,
    logoTracking: '-0.05em',
    slogan: 'TRENDY | YOUTHFUL | URBAN',
    target: '16-35 YEARS',
    category: 'CASUAL & SPORTS',
    gender: 'MEN/WOMEN',
    image: '/assets/images/brands/wrogn_shoe.png',
    color: '#FF3366',
    border: 'rgba(255,51,102,0.3)'
  },
  {
    name: "KHADIM'S",
    logoFont: '"Playfair Display", serif',
    logoWeight: 700,
    logoTracking: '0.05em',
    slogan: 'TRUSTED | COMFORTABLE | EVERYDAY',
    target: 'ALL AGE GROUPS',
    category: 'FORMAL, CASUAL & COMFORT',
    gender: 'MEN/WOMEN/KIDS',
    image: '/assets/images/brands/khadims_shoe_new.png',
    color: '#C9A84C',
    border: 'rgba(201,168,76,0.3)'
  },
  {
    name: 'LAKHANI SHOES',
    logoFont: '"Montserrat", sans-serif',
    logoWeight: 800,
    logoTracking: '0.1em',
    slogan: 'DURABLE | CLASSIC | RELIABLE',
    target: 'ALL AGE GROUPS',
    category: 'FORMAL & CASUAL',
    gender: 'MEN/WOMEN/KIDS',
    image: '/assets/images/brands/lakhani_shoe.png',
    color: '#3498db',
    border: 'rgba(52,152,219,0.3)'
  }
];

export default function HomeBrandsSection() {
  return (
    <section style={{ padding: '120px 5%', background: '#050505', color: '#fff', fontFamily: '"Inter", sans-serif' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ color: 'var(--gold-primary)', letterSpacing: '0.3em', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 700, display: 'block', marginBottom: '20px' }}>
            Manufacturing Portfolio
          </span>
          <h2 style={{ color: '#fff', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, margin: '0 0 20px 0', letterSpacing: '-0.02em' }}>
            Brands Under Our Umbrella
          </h2>
          <p style={{ color: '#888', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', lineHeight: 1.6 }}>
            We partner with India's leading footwear labels to deliver uncompromising quality, scale, and precision engineering across all major categories.
          </p>
        </motion.div>
      </div>

      {/* Grid Showcase */}
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '40px',
          alignItems: 'stretch'
        }}>
          {brandsData.map((brand, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{
                background: 'linear-gradient(180deg, #111 0%, #0a0a0a 100%)',
                borderRadius: '24px',
                border: `1px solid ${brand.border}`,
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
              }}
            >
              {/* Product Image Area */}
              <div style={{ width: '100%', height: '280px', overflow: 'hidden', borderBottom: '1px solid rgba(255,255,255,0.05)', background: '#FAFAFA', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <img 
                  src={brand.image} 
                  alt={brand.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain', mixBlendMode: 'multiply' }} 
                />
              </div>

              {/* Content Area */}
              <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                
                {/* Logo typography */}
                <div style={{ marginBottom: '20px', textAlign: 'center' }}>
                  <h3 style={{ 
                    fontFamily: brand.logoFont, 
                    fontWeight: brand.logoWeight, 
                    letterSpacing: brand.logoTracking,
                    fontSize: '2.2rem',
                    margin: '0',
                    color: '#ffffff'
                  }}>
                    {brand.name}
                  </h3>
                  <div style={{ height: '2px', width: '40px', background: brand.color, margin: '12px auto 0' }}></div>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <p style={{ color: '#ccc', fontSize: '0.85rem', letterSpacing: '0.15em', fontWeight: 600 }}>
                    {brand.slogan}
                  </p>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ color: '#777', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Target</span>
                    <strong style={{ color: '#fff', fontSize: '0.8rem', letterSpacing: '0.05em' }}>{brand.target}</strong>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <span style={{ color: '#777', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Category</span>
                    <strong style={{ color: '#fff', fontSize: '0.8rem', letterSpacing: '0.05em', textAlign: 'right', maxWidth: '180px' }}>{brand.category}</strong>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#777', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>Gender</span>
                    <strong style={{ color: brand.color, fontSize: '0.8rem', letterSpacing: '0.05em' }}>{brand.gender}</strong>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
