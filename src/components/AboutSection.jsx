import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutSection() {
  return (
    <section className="section" id="about-intro">
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
          <div>
            <div className="section-label">Decades of Industry Experience</div>
            <h2>Our Advanced Infrastructure &amp; <span className="gold-text">Expert Team</span></h2>
            <div className="divider-short"></div>
            
            <p style={{ color: 'var(--grey-light)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
              KS Enterprise is a custom shoe manufacturer in India with advanced production infrastructure and a team of skilled artisans, ensuring precision and quality in every pair.
            </p>
            
            <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
              As a trusted private label shoe manufacturer, we follow a rigorous shoe manufacturing process with strict quality control — from state-of-the-art machinery to final inspection — so we can support both low MOQ shoe manufacturing for startups and high-volume bulk shoe production in India, without compromising on craftsmanship.
            </p>

            <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '30px' }}>
              With decades of experience as a custom footwear manufacturer, we've perfected our processes to serve D2C brands, startups, and retailers across categories — including custom sneakers, formal shoes, school shoes, and leather footwear. Whether you need OEM or ODM shoe manufacturing or full private label footwear production, our experience ensures every pair reflects quality, style, and durability.
            </p>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/about" className="btn btn-primary btn-sm">
                Read More About Us
              </Link>
              <Link to="/services" className="btn btn-outline btn-sm">
                Explore Custom Services
              </Link>
            </div>
          </div>

          <div>
            <div style={{ position: 'relative' }}>
              <div className="card" style={{ borderRadius: 'var(--rad-xl)', overflow: 'hidden' }}>
                <img 
                  src="/assets/images/factory.jpg" 
                  alt="KS Enterprise Advanced Shoe Manufacturing Plant" 
                  style={{ width: '100%', height: '480px', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(8,8,8,0.92) 0%, transparent 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '32px'
                }}>
                  <span className="tag" style={{ alignSelf: 'flex-start', marginBottom: '8px' }}>
                    Agra Manufacturing Complex • In-House Production
                  </span>
                  <h4 style={{ fontSize: '1.3rem', marginBottom: '6px' }}>Rigorous Shoe Manufacturing Process</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--grey-mid)' }}>
                    From state-of-the-art machinery to final quality inspection — built for startups and bulk retail.
                  </p>
                </div>
              </div>

              {/* Clean Official Logo Badge */}
              <div style={{
                position: 'absolute',
                top: '-24px',
                left: '-24px',
                background: 'var(--black-elevated)',
                border: '1.5px solid var(--gold-primary)',
                padding: '10px',
                borderRadius: 'var(--rad-lg)',
                boxShadow: '0 0 25px rgba(201,168,76,0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <img 
                  src="/assets/images/logo.png" 
                  alt="KS Enterprise" 
                  style={{ height: '70px', width: '70px', borderRadius: '10px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
