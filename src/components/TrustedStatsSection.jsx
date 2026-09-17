import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function TrustedStatsSection() {
  const [counts, setCounts] = useState({
    years: 0,
    brands: 0,
    artisans: 0,
    designers: 0
  });

  useEffect(() => {
    const duration = 1800; // ms
    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setCounts({
        years: Math.floor(ease * 15),
        brands: Math.floor(ease * 200),
        artisans: Math.floor(ease * 100),
        designers: Math.floor(ease * 10)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  return (
    <section className="section" id="trusted-stats" style={{ background: 'var(--black-elevated)', borderTop: '1px solid var(--black-border)', borderBottom: '1px solid var(--black-border)' }}>
      <div className="container">
        <div className="section-head text-center" style={{ maxWidth: '850px', margin: '0 auto 40px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Agra Footwear Powerhouse</div>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.2vw, 2.8rem)' }}>
            India's Trusted <span className="gold-text">Custom &amp; Private Label</span> Shoe Manufacturer
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--white-90)', lineHeight: '1.8', marginTop: '12px' }}>
            Helping brands, startups, and D2C businesses launch their own footwear with low MOQ shoe manufacturing and end-to-end OEM/ODM support.
          </p>
        </div>

        {/* 4 Stats in Exactly One Single Horizontal Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          gap: '24px',
          padding: '36px 30px',
          background: 'var(--black-card)',
          borderRadius: '20px',
          border: '1px solid rgba(201, 168, 76, 0.25)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
          alignItems: 'center'
        }}>
          <div style={{ textAlign: 'center', borderRight: '1px solid var(--black-border)', padding: '0 10px' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
              fontWeight: 700,
              background: 'var(--grad-gold)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              marginBottom: '10px'
            }}>
              +{counts.years}
            </div>
            <div style={{
              fontSize: '0.78rem',
              color: 'var(--grey-mid)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              Years of Experience in Footwear Manufacturing
            </div>
          </div>

          <div style={{ textAlign: 'center', borderRight: '1px solid var(--black-border)', padding: '0 10px' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
              fontWeight: 700,
              background: 'var(--grad-gold)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              marginBottom: '10px'
            }}>
              +{counts.brands}
            </div>
            <div style={{
              fontSize: '0.78rem',
              color: 'var(--grey-mid)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              D2C Brands &amp; Startups Served &amp; Counting
            </div>
          </div>

          <div style={{ textAlign: 'center', borderRight: '1px solid var(--black-border)', padding: '0 10px' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
              fontWeight: 700,
              background: 'var(--grad-gold)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              marginBottom: '10px'
            }}>
              +{counts.artisans}
            </div>
            <div style={{
              fontSize: '0.78rem',
              color: 'var(--grey-mid)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              Skilled Custom Shoe Manufacturing Team
            </div>
          </div>

          <div style={{ textAlign: 'center', padding: '0 10px' }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 3.5vw, 3.2rem)',
              fontWeight: 700,
              background: 'var(--grad-gold)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: 1,
              marginBottom: '10px'
            }}>
              +{counts.designers}
            </div>
            <div style={{
              fontSize: '0.78rem',
              color: 'var(--grey-mid)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase'
            }}>
              Creative Minds in Footwear Design
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start Building Your Footwear Brand
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
