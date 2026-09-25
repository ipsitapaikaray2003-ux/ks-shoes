import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useInView, animate } from 'framer-motion';

const AnimatedStat = ({ value }) => {
  const ref = useRef(null);
  // once: false triggers the animation every time the element enters the viewport
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
        duration: 1.5,
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

export default function HomeAboutSection() {
  const companyStats = [
    { value: '15+', label: 'Years' },
    { value: '250+', label: 'Projects' },
    { value: '80+', label: 'Clients' },
    { value: '98%', label: 'Quality Satisfaction' }
  ];

  return (
    <section 
      className="section" 
      id="about-ks" 
      style={{
        background: '#FFFFFF',
        padding: '120px 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
      }}
    >
      <div className="container-lg">
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '64px',
            alignItems: 'center'
          }}
        >
          {/* Left: Large Footwear & Manufacturing Image */}
          <div style={{ position: 'relative' }}>
            <div 
              style={{
                borderRadius: '6px',
                overflow: 'hidden',
                boxShadow: '0 30px 80px rgba(0, 0, 0, 0.75)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                background: '#FFFFFF'
              }}
            >
              <img 
                src="/assets/images/craft_lasting.jpg" 
                alt="KS Shoes Master Artisan Lasting & Craftsmanship" 
                style={{
                  width: '100%',
                  height: '540px',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'brightness(0.9) contrast(1.08)'
                }}
              />
            </div>

            <div 
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                padding: '10px 18px',
                background: 'rgba(7, 9, 13, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(197, 160, 89, 0.35)',
                borderRadius: 'var(--rad-pill)',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-accent)',
                fontWeight: 700,
                color: 'var(--gold-light)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              Agra Manufacturing Campus • Established 2011
            </div>
          </div>

          {/* Right: Large Heading, Concise Description & Statistics Area */}
          <div>
            <span style={{
              fontSize: '0.74rem',
              fontFamily: 'var(--font-accent)',
              fontWeight: 800,
              letterSpacing: '0.16em',
              color: 'var(--accent-bronze)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '14px'
            }}>
              Atelier Heritage • Industrial Scale
            </span>

            <h2 style={{
              fontSize: 'clamp(2.4rem, 4.4vw, 3.8rem)',
              lineHeight: 1.08,
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#121212',
              letterSpacing: '-0.02em',
              margin: '0 0 24px 0'
            }}>
              CRAFTED WITH PRECISION.
            </h2>

            <p style={{
              fontSize: '1.05rem',
              color: 'var(--grey-mid)',
              lineHeight: 1.75,
              marginBottom: '20px'
            }}>
              <strong>KS Shoes</strong> is an international contract footwear manufacturer headquartered in Agra, India. We unite generational artisan hand-lasting with computerized European machinery, serving discerning private label brands, high-growth athletic footwear labels, and industrial safety distributors worldwide.
            </p>

            <p style={{
              fontSize: '0.96rem',
              color: 'var(--grey-mid)',
              lineHeight: 1.7,
              marginBottom: '40px'
            }}>
              Our integrated 65,000 sq. ft. production plant provides turnkey execution—from initial 3D anatomical last design and rapid 7-day sample prototyping to high-volume assembly lines, SATRA-certified laboratory testing, and worldwide export logistics.
            </p>

            {/* Small Statistics Area */}
            <div className="stats-row">
              {companyStats.map((stat, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{
                    fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 900,
                    color: 'var(--gold-light)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em'
                  }}>
                    <AnimatedStat value={stat.value} />
                  </span>
                  <span style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 700,
                    letterSpacing: '0.05em',
                    color: '#121212',
                    textTransform: 'uppercase',
                    marginTop: '6px'
                  }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            <Link 
              to="/about" 
              className="btn btn-outline" 
              style={{
                padding: '12px 28px',
                fontSize: '0.8rem',
                borderRadius: '4px',
                borderColor: 'rgba(245, 243, 239, 0.25)',
                color: '#121212'
              }}
            >
              <span>Explore Full Heritage &amp; Factory Campus</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .stats-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 15px;
          padding: 24px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 6px;
          margin-bottom: 36px;
          flex-wrap: wrap;
        }
        @media (max-width: 768px) {
          .stats-row {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
