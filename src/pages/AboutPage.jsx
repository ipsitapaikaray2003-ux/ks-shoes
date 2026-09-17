import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const comparisonData = [
    {
      feature: 'Minimum Order Quantity (MOQ)',
      traditional: '1,000 to 5,000 pairs per style (High inventory risk)',
      ksEnterprise: '200 to 300 pairs per style (Low MOQ Startup Tier)'
    },
    {
      feature: 'Production Model',
      traditional: 'Frequently outsourced to third-party sub-contractors',
      ksEnterprise: '100% In-House Production in Agra (Absolute control)'
    },
    {
      feature: 'Sample Turnaround',
      traditional: '25 to 45 days with multiple iteration delays',
      ksEnterprise: '5 to 7 working days with dedicated sample line'
    },
    {
      feature: 'Turnkey Branding & Packaging',
      traditional: 'Generic brown cartons; client handles boxes & labeling',
      ksEnterprise: 'Full luxury packaging: gold-foil rigid boxes, dust bags, barcodes'
    },
    {
      feature: 'Design & Tech Pack Support',
      traditional: 'Requires client to supply factory-ready technical drawings',
      ksEnterprise: 'Complete 3D CAD modeling, material consulting, and tech packs'
    },
    {
      feature: 'Quality Assurance Testing',
      traditional: 'Basic visual check before container dispatch',
      ksEnterprise: 'In-house SATRA testing lab: flex, Martindale rub, sole adhesion'
    }
  ];

  return (
    <div className="about-page">
      {/* Page Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">About Heritage</span>
          </div>
          <h1>Decades of Mastery, <span className="gold-text">Built for Global Brands</span></h1>
          <p>
            Operating in Agra — the historic capital of Indian footwear craftsmanship — KS Enterprise empowers D2C brands, startups, and international retailers with complete in-house shoe manufacturing.
          </p>
        </div>
      </section>

      {/* Origin Story & Vision */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div>
              <div className="section-label">Who We Are</div>
              <h2>Making Footwear Manufacturing <span className="gold-text">Agile &amp; Accessible</span></h2>
              <div className="divider-short"></div>
              <p style={{ color: 'var(--grey-light)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                KS Enterprise was established with a singular vision: to dismantle the barriers of traditional footwear manufacturing and offer a seamless bridge from initial shoe design to worldwide retail delivery.
              </p>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '20px' }}>
                For decades, emerging footwear founders struggled to find reliable factories willing to accept small order quantities without compromising on craftsmanship, European lasting standards, or material integrity.
              </p>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '30px' }}>
                Today, our 85,000 sq. ft. industrial campus in Agra combines computerized Swiss cutting tables, multi-conveyor lasting lines, and a dedicated rapid prototyping workshop, serving over 200+ D2C businesses and retail chains worldwide.
              </p>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/services" className="btn btn-primary btn-sm">
                  Our Manufacturing Services
                </Link>
                <Link to="/contact" className="btn btn-outline btn-sm">
                  Book a Factory Tour
                </Link>
              </div>
            </div>

            <div>
              <div style={{ position: 'relative' }}>
                <div className="card" style={{ borderRadius: 'var(--rad-xl)', overflow: 'hidden' }}>
                  <img 
                    src="/assets/images/factory.jpg" 
                    alt="KS Enterprise Agra Footwear Campus" 
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
                      Agra Footwear Industrial Hub
                    </span>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '6px' }}>15,000 Pairs Daily Capacity</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--grey-mid)' }}>
                      Complete in-house control over cutting, lasting, assembly, and testing.
                    </p>
                  </div>
                </div>

                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  background: 'var(--black-elevated)',
                  border: '1.5px solid var(--gold-primary)',
                  padding: '16px 22px',
                  borderRadius: 'var(--rad-md)',
                  boxShadow: 'var(--shadow-gold-sm)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.8rem', color: 'var(--gold-primary)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
                    100%
                  </div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--white)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    In-House Production
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Matrix: Traditional Factory vs KS Enterprise */}
      <section className="section" style={{ background: 'var(--black-main)' }}>
        <div className="container">
          <div className="section-head">
            <div className="section-label" style={{ justifyContent: 'center' }}>Why Brands Choose Us</div>
            <h2>Traditional Factories vs. <span className="gold-text">KS Enterprise</span></h2>
            <p>See why over 200+ D2C brands, designers, and retailers trust KS Enterprise as their exclusive manufacturing partner.</p>
          </div>

          <div style={{
            background: 'var(--black-card)',
            border: '1px solid var(--black-border)',
            borderRadius: 'var(--rad-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-deep)'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
              background: 'var(--black-elevated)',
              padding: '20px 28px',
              borderBottom: '1px solid var(--black-border)',
              fontFamily: 'var(--font-accent)',
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '0.08em'
            }}>
              <span style={{ color: 'var(--grey-mid)' }}>Evaluation Criteria</span>
              <span style={{ color: 'var(--grey-dark)' }}>Traditional Factory</span>
              <span style={{ color: 'var(--gold-primary)', fontWeight: 700 }}>KS Enterprise Advantage</span>
            </div>

            {comparisonData.map((row, idx) => (
              <div 
                key={idx}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1.2fr 1.4fr 1.4fr',
                  padding: '22px 28px',
                  borderBottom: idx < comparisonData.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                  fontSize: '0.88rem',
                  alignItems: 'center',
                  background: idx % 2 === 1 ? 'rgba(255,255,255,0.015)' : 'transparent'
                }}
              >
                <strong style={{ color: 'var(--white)', fontFamily: 'var(--font-accent)' }}>
                  {row.feature}
                </strong>
                <span style={{ color: 'var(--grey-dark)', paddingRight: '16px' }}>
                  ✕ {row.traditional}
                </span>
                <span style={{ color: 'var(--gold-light)', fontWeight: 600 }}>
                  ✓ {row.ksEnterprise}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Artisans */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-label" style={{ justifyContent: 'center' }}>Master Craftsmen &amp; Engineers</div>
            <h2>Behind Every Pair: <span className="gold-text">Decades of Expertise</span></h2>
            <p>Our team brings together hereditary Agra shoe artisans with Italian-trained CAD pattern masters.</p>
          </div>

          <div className="grid-3">
            <div className="feature-card">
              <div className="feature-icon">👞</div>
              <h4>100+ Master Artisans</h4>
              <p>Specialists in hand-lasting, upper skiving, welt stitching, and antiqued hand-burnishing with over 15 years average bench experience.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📐</div>
              <h4>10+ CAD &amp; Tech Designers</h4>
              <p>Dedicated digital pattern grading, CNC sole mold engineers, and 3D last sculpting experts ensuring anatomical foot health.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔬</div>
              <h4>Full QA Lab Personnel</h4>
              <p>In-house quality inspectors monitoring raw leather grading, seam adhesion, tensile strength, and finished box packing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
