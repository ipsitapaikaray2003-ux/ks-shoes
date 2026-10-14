import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';

const AnimatedStat = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const match = value.match(/(\d+)(.*)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }
    
    const targetNumber = parseInt(match[1], 10);
    const suffix = match[2] || '';

    if (inView) {
      const controls = animate(0, targetNumber, {
        duration: 1.6,
        ease: "easeOut",
        onUpdate(val) {
          setDisplayValue(Math.floor(val) + suffix);
        }
      });
      return () => controls.stop();
    } else {
      setDisplayValue("0" + suffix);
    }
  }, [inView, value]);

  return <span ref={ref}>{displayValue}</span>;
};

// Authentic user-provided shoe photos
const authenticShoeModels = [
  {
    id: 'ks-velocity',
    name: 'KS Velocity Athletic',
    image: '/assets/images/product_1.jpg',
    code: 'KS-PRO-01',
    category: 'Athletic Runner',
    details: 'Custom Jacquard Knit • KS Monogram Counter'
  },
  {
    id: 'impakto-cushion',
    name: 'Impakto Pro Trainer',
    image: '/assets/images/product_2.jpg',
    code: 'KS-TRN-02',
    category: 'Cushion Trainer',
    details: 'Multi-Layer Support • Ergonomic Sole'
  },
  {
    id: 'stay-wrogn',
    name: 'Wrogn Streetwear',
    image: '/assets/images/product_11.png',
    code: 'KS-STR-03',
    category: 'Streetwear Sneaker',
    details: 'Engineered Cupsole • Premium Leather'
  },
  {
    id: 'aerospeed',
    name: 'AeroSpeed Marathon',
    image: '/assets/images/product_4.png',
    code: 'KS-RUN-04',
    category: 'Performance Runner',
    details: 'Dual-Density Foam • Breathable Mono-Mesh'
  }
];

export default function HomeAboutSection() {
  const [selectedShoeIndex, setSelectedShoeIndex] = useState(0);
  const currentShoe = authenticShoeModels[selectedShoeIndex];

  const companyStats = [
    { value: '250+', label: 'Designs & Prototypes', note: 'In-house development' },
    { value: '50K+', label: 'Monthly Capacity', note: 'Pairs manufactured' },
    { value: '98%', label: 'Quality Satisfaction', note: 'Rigorous QA standard' }
  ];

  return (
    <section 
      className="section" 
      id="about-ks" 
      style={{
        background: '#FAF9F6',
        padding: '110px 0 120px 0',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
      }}
    >
      {/* Subtle luxury ambient background glows */}
      <div 
        style={{
          position: 'absolute',
          top: '-150px',
          right: '-100px',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(214, 180, 90, 0.08) 0%, rgba(250, 249, 246, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '-120px',
          left: '-80px',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(18, 18, 18, 0.03) 0%, rgba(250, 249, 246, 0) 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container-lg" style={{ position: 'relative', zIndex: 1 }}>
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '64px',
            alignItems: 'center'
          }}
        >
          {/* Left: Authentic Shoe Studio Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            {/* Main Showcase Card */}
            <div 
              style={{
                borderRadius: '24px',
                background: '#FFFFFF',
                boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.12), 0 0 1px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(214, 180, 90, 0.25)',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Top Accent Strip */}
              <div 
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 24px',
                  background: 'linear-gradient(90deg, #121212 0%, #1E1E1E 100%)',
                  borderBottom: '1px solid rgba(214, 180, 90, 0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sparkles size={14} color="var(--gold-primary)" />
                  <span style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    color: 'var(--gold-light)',
                    textTransform: 'uppercase'
                  }}>
                    Authentic Production Specimen
                  </span>
                </div>
                <span style={{
                  fontSize: '0.68rem',
                  fontFamily: 'monospace',
                  color: 'rgba(255, 255, 255, 0.65)',
                  letterSpacing: '0.08em',
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '3px 8px',
                  borderRadius: '4px'
                }}>
                  {currentShoe.code}
                </span>
              </div>

              {/* Main Shoe Image Frame */}
              <div 
                style={{
                  position: 'relative',
                  height: '420px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  background: 'radial-gradient(circle at center, #FFFFFF 0%, #F5F4F0 100%)'
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={currentShoe.id}
                    src={currentShoe.image} 
                    alt={currentShoe.name}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '360px',
                      objectFit: 'contain',
                      display: 'block',
                      filter: 'drop-shadow(0 20px 25px rgba(0, 0, 0, 0.15))'
                    }}
                  />
                </AnimatePresence>

                {/* Floating Model Badge */}
                <div 
                  style={{
                    position: 'absolute',
                    bottom: '18px',
                    left: '20px',
                    background: 'rgba(18, 18, 18, 0.88)',
                    backdropFilter: 'blur(8px)',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    border: '1px solid rgba(214, 180, 90, 0.3)'
                  }}
                >
                  <p style={{
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    margin: 0,
                    letterSpacing: '0.02em'
                  }}>
                    {currentShoe.name}
                  </p>
                  <p style={{
                    fontSize: '0.65rem',
                    color: 'var(--gold-light)',
                    margin: '2px 0 0 0',
                    letterSpacing: '0.04em'
                  }}>
                    {currentShoe.details}
                  </p>
                </div>
              </div>

              {/* Interactive Thumbnail Gallery Strip - User Provided Shoes */}
              <div 
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  gap: '8px',
                  padding: '12px 16px',
                  background: '#FFFFFF',
                  borderTop: '1px solid rgba(0, 0, 0, 0.06)'
                }}
              >
                {authenticShoeModels.map((shoe, idx) => (
                  <button
                    key={shoe.id}
                    onClick={() => setSelectedShoeIndex(idx)}
                    type="button"
                    style={{
                      border: idx === selectedShoeIndex 
                        ? '2px solid var(--gold-primary)' 
                        : '1px solid rgba(0, 0, 0, 0.08)',
                      borderRadius: '10px',
                      padding: '4px',
                      background: idx === selectedShoeIndex ? '#FFFBF2' : '#F8F8F8',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      outline: 'none',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center'
                    }}
                    title={shoe.name}
                  >
                    <img 
                      src={shoe.image} 
                      alt={shoe.name}
                      style={{
                        width: '100%',
                        height: '52px',
                        objectFit: 'contain'
                      }}
                    />
                    <span style={{
                      fontSize: '0.58rem',
                      fontWeight: 700,
                      color: idx === selectedShoeIndex ? '#121212' : '#777777',
                      marginTop: '2px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      maxWidth: '100%'
                    }}>
                      {shoe.category}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* In-House Quality Assurance Seal */}
            <div 
              style={{
                position: 'absolute',
                top: '-16px',
                right: '-16px',
                background: '#121212',
                color: 'var(--gold-light)',
                border: '1.5px solid var(--gold-primary)',
                borderRadius: '50px',
                padding: '6px 16px',
                fontSize: '0.68rem',
                fontFamily: 'var(--font-accent)',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                boxShadow: '0 10px 24px rgba(0, 0, 0, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <CheckCircle2 size={13} color="var(--gold-primary)" />
              100% In-House Sample
            </div>
          </motion.div>

          {/* Right: Large Heading, Concise Description & Statistics Area */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(214, 180, 90, 0.12)',
                borderRadius: '30px',
                border: '1px solid rgba(214, 180, 90, 0.3)',
                marginBottom: '16px'
              }}
            >
              <span style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--gold-primary)'
              }} />
              <span style={{
                fontSize: '0.72rem',
                fontFamily: 'var(--font-accent)',
                fontWeight: 800,
                letterSpacing: '0.15em',
                color: '#7A5C1B',
                textTransform: 'uppercase'
              }}>
                Modern Footwear Manufacturing
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              style={{
                fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
                lineHeight: 1.08,
                fontFamily: 'var(--font-accent)',
                fontWeight: 900,
                textTransform: 'uppercase',
                color: '#121212',
                letterSpacing: '-0.02em',
                margin: '0 0 20px 0'
              }}
            >
              ABOUT COMPANY
            </motion.h2>

            <div 
              style={{
                width: '60px',
                height: '3px',
                background: 'linear-gradient(90deg, var(--gold-primary) 0%, rgba(214, 180, 90, 0.1) 100%)',
                marginBottom: '26px'
              }}
            />

            {/* Single Approved Company Paragraph (Campus paragraph completely removed as requested) */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontSize: '1.08rem',
                color: '#333333',
                lineHeight: 1.8,
                marginBottom: '34px',
                fontWeight: 400
              }}
            >
              <strong style={{ color: '#121212', fontWeight: 700 }}>KS Enterprises</strong> is a trusted footwear manufacturing company established on 1 October 2025, specializing in the production of high-quality sports shoes. Since our inception, we have focused on delivering durable, stylish, and comfortable footwear that meets the evolving demands of the Indian footwear market.
            </motion.p>

            {/* Premium Stat Cards */}
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                gap: '16px',
                marginBottom: '36px'
              }}
            >
              {companyStats.map((stat, i) => (
                <div 
                  key={i} 
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column',
                    padding: '20px 18px',
                    background: '#FFFFFF',
                    borderRadius: '16px',
                    border: '1px solid rgba(214, 180, 90, 0.25)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.04)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: 'linear-gradient(90deg, var(--gold-primary) 0%, #121212 100%)'
                    }}
                  />
                  <span style={{
                    fontSize: 'clamp(1.7rem, 2.5vw, 2.3rem)',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 900,
                    color: '#9C782F',
                    lineHeight: 1,
                    letterSpacing: '-0.02em'
                  }}>
                    <AnimatedStat value={stat.value} />
                  </span>
                  <span style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 800,
                    letterSpacing: '0.04em',
                    color: '#121212',
                    textTransform: 'uppercase',
                    marginTop: '8px'
                  }}>
                    {stat.label}
                  </span>
                  <span style={{
                    fontSize: '0.65rem',
                    color: '#777777',
                    marginTop: '3px'
                  }}>
                    {stat.note}
                  </span>
                </div>
              ))}
            </div>

            {/* Luxury Action Button */}
            <Link 
              to="/about" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 32px',
                fontSize: '0.82rem',
                fontFamily: 'var(--font-accent)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                borderRadius: '8px',
                background: '#121212',
                color: '#FFFFFF',
                border: '1px solid rgba(214, 180, 90, 0.4)',
                boxShadow: '0 10px 24px rgba(0, 0, 0, 0.15)',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#222222';
                e.currentTarget.style.borderColor = 'var(--gold-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 14px 28px rgba(0, 0, 0, 0.22)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#121212';
                e.currentTarget.style.borderColor = 'rgba(214, 180, 90, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 24px rgba(0, 0, 0, 0.15)';
              }}
            >
              <span>Learn More About KS Enterprises</span>
              <ArrowRight size={16} color="var(--gold-primary)" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

