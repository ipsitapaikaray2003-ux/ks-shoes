import React from 'react';
import { Link } from 'react-router-dom';

export default function FeaturedOn() {
  const features = [
    {
      name: 'StartupStory',
      tagline: 'Powering India’s Next Footwear Brands from the Agra Hub',
      desc: 'Recognized as the agile footwear manufacturing powerhouse breaking the high-MOQ barrier for Indian D2C entrepreneurs.'
    },
    {
      name: 'KaroStartup',
      tagline: 'How One Factory Built India’s Answer to High-MOQ Footwear Production',
      desc: 'Showcasing our in-house modern infrastructure, ethical craftsman wages, and rapid prototype turnarounds.'
    },
    {
      name: 'Footwear Industry Review',
      tagline: 'Global Export Benchmark & SATRA-Calibrated Testing Lab',
      desc: 'Highlighting our precision lasting standards and comprehensive quality assurance across 40+ export markets.'
    }
  ];

  return (
    <section className="section-sm section-light-stone" style={{ borderTop: '1px solid #E2DCD2', borderBottom: '1px solid #E2DCD2' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Industry Recognition</span>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--white)' }}>
            As Seen In &amp; <span className="gold-text">Featured On</span>
          </h3>
          <p style={{ color: 'var(--grey-mid)', fontSize: '0.9rem', maxWidth: '580px', margin: '8px auto 0' }}>
            Recognized by leading startup platforms and industry journals for revolutionizing private-label shoe manufacturing in India.
          </p>
        </div>

        <div className="grid-3">
          {features.map((item, idx) => (
            <div key={idx} className="card" style={{ padding: '28px', background: 'var(--black-card)' }}>
              <div style={{
                fontFamily: 'var(--font-accent)',
                fontWeight: 900,
                fontSize: '1.2rem',
                color: 'var(--gold-light)',
                marginBottom: '8px',
                letterSpacing: '0.05em'
              }}>
                {item.name}
              </div>
              <h5 style={{ fontSize: '0.92rem', color: 'var(--white)', marginBottom: '8px', lineHeight: 1.4 }}>
                "{item.tagline}"
              </h5>
              <p style={{ fontSize: '0.82rem', color: 'var(--grey-mid)', lineHeight: 1.6 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
