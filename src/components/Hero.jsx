import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
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
    <section className="hero" id="hero">
      {/* Background Image with Ambient Zoom */}
      <div className="hero-bg">
        <img src="/assets/images/hero_banner_hq.jpg?v=3" alt="KS Enterprise Luxury Shoe Manufacturing &amp; Bespoke Sneakers" />
      </div>
      <div className="hero-overlay"></div>
      
      {/* Ambient Radial Glowing Orbs */}
      <div className="hero-particles">
        <div className="glow-orb glow-orb-gold" style={{ width: '550px', height: '550px', top: '5%', left: '5%' }}></div>
        <div className="glow-orb glow-orb-gold" style={{ width: '450px', height: '450px', bottom: '5%', right: '10%' }}></div>
      </div>

      <div className="container-lg">
        {/* Top Floating Helper Alert Notice */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '12px',
          background: 'rgba(20, 16, 8, 0.85)',
          border: '1px solid rgba(201, 168, 76, 0.4)',
          borderRadius: 'var(--rad-pill)',
          padding: '8px 20px',
          marginBottom: '28px',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }}>
          <span style={{ fontSize: '1rem' }}>👋</span>
          <span style={{ fontSize: '0.82rem', color: 'var(--white-90)' }}>
            <strong>We’re Here to Help:</strong> For instant priority response, connect directly on WhatsApp.
          </span>
          <a 
            href="https://wa.me/911234567890?text=Hello%20KS%20Enterprise%2C%20I%20am%20interested%20in%20custom%20footwear%20manufacturing." 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              fontSize: '0.78rem',
              color: 'var(--gold-light)',
              fontWeight: 700,
              textDecoration: 'underline',
              fontFamily: 'var(--font-accent)'
            }}
          >
            Chat Now →
          </a>
        </div>

        <div className="hero-content" style={{ maxWidth: '1120px', width: '100%' }}>
          <div className="hero-badge">
            <span></span> Your Vision, Our Craftsmanship
          </div>

          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)', lineHeight: 1.15, marginBottom: '20px', maxWidth: '860px' }}>
            Private Label Shoe Manufacturer in India | <span className="gold-text">Custom Sneaker &amp; Footwear</span>
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'var(--white-90)', lineHeight: '1.8', marginBottom: '28px', maxWidth: '820px' }}>
            From First Pair to Full Scale — <strong>Made in Agra, Built for the World</strong>. Full in-house production with complete control on quality, cost, and lead time. Helping brands, startups, and D2C businesses launch their own footwear with low MOQ shoe manufacturing and end-to-end OEM/ODM support.
          </p>

          <div className="hero-ctas" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '44px' }}>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Start Building Brand
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <a 
              href="tel:+911234567890" 
              className="btn btn-outline btn-lg"
            >
              Call Us: +91 12345 67890
            </a>
          </div>

          {/* Exact Stats from Reference Site - 1 Single Horizontal Row */}
          <div className="hero-stats" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '28px',
            width: '100%',
            alignItems: 'start'
          }}>
            <div className="hero-stat-item">
              <span className="hero-stat-number">+{counts.years}</span>
              <span className="hero-stat-label">Years of Experience in Footwear</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">+{counts.brands}</span>
              <span className="hero-stat-label">D2C Brands &amp; Startups Served</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">+{counts.artisans}</span>
              <span className="hero-stat-label">Skilled Custom Shoe Team</span>
            </div>
            <div className="hero-stat-item">
              <span className="hero-stat-number">+{counts.designers}</span>
              <span className="hero-stat-label">Creative Minds in Footwear Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
