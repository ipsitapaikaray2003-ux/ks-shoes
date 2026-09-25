import React from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      badge: 'D2C Sneaker Startup Scale',
      title: 'From 200-Pair Pilot to 15,000 Pairs: The Veloce Streetwear Journey',
      client: 'Veloce Footwear (D2C Sneaker Brand)',
      timeline: '14 Months Scaling Timeline',
      challenge: 'Veloce wanted to launch a retro court sneaker line with custom chunky outsoles and premium suede accents. Traditional factories in India and China demanded 2,000 pairs per colorway minimums, which would tie up their entire initial seed funding.',
      solution: 'KS Enterprise onboarded Veloce into our Low MOQ Startup Program. We produced their golden wear-test samples in 6 days, allowed an initial pilot production batch of 250 pairs per colorway, and engineered custom rigid gold-foil boxes with personalized dust bags.',
      metrics: [
        { label: 'Initial Pilot Batch', value: '250 Pairs' },
        { label: 'Sold Out Duration', value: '14 Days' },
        { label: 'Current Quarterly Volume', value: '15,000 Pairs' },
        { label: 'Customer Return Rate', value: '< 0.3%' }
      ]
    },
    {
      badge: 'Bespoke Luxury Export',
      title: 'Global Export Success: Scaling Italian Blake Loafers to London & Dubai',
      client: 'Aurelius Footwear (UK & GCC Luxury Label)',
      timeline: '24 Months Continuous Supply',
      challenge: 'Aurelius required museum-grade hand-burnished calfskin loafers with Blake stitched leather soles and custom debossed brass crests. European factories were quoting €95/pair with 90-day lead times.',
      solution: 'KS Enterprise formulated an export-grade supply line using French crust calfskin, hand-applied antique patina by master Agra artisans, and rigid magnetic slide-out boxes with velvet dust bags at a 55% lower production cost.',
      metrics: [
        { label: 'Export Volume to Date', value: '28,000 Pairs' },
        { label: 'European Retail Margin', value: '4.8x Markup' },
        { label: 'Defect Audit Rate', value: '< 0.15%' },
        { label: 'Reorder Repeat Rate', value: '100%' }
      ]
    },
    {
      badge: 'Institutional & School Chain',
      title: 'Zero Returns Across 40+ Campuses: National Academy Footwear Standardization',
      client: 'Apex National School Network (42 Campuses)',
      timeline: 'Multi-Year Supply Contract',
      challenge: 'The institution faced severe parent complaints regarding playground toe-scuffing, sole separation, and delayed delivery across multiple regional campuses before the academic school year began.',
      solution: 'KS Enterprise formulated heavy-duty water-repellent action leather uppers with thermo-vulcanized TPR outsoles and impact-cushioned orthotic insoles. We coordinated staggered dispatch across 42 campuses with individual student size tags.',
      metrics: [
        { label: 'Annual Uniform Volume', value: '45,000 Pairs' },
        { label: 'Campuses Supplied', value: '42 Locations' },
        { label: 'Durability Benchmark', value: '2 Academic Years' },
        { label: 'Defect Rate', value: '0.0%' }
      ]
    }
  ];

  return (
    <div className="case-studies-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Case Studies &amp; Proven Results</span>
          </div>
          <h1>Real Success Stories: <span className="gold-text">From Pilot to Scale</span></h1>
          <p>
            Explore how we help D2C entrepreneurs, fashion designers, and institutional retailers build resilient footwear supply chains with measurable commercial ROI.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {caseStudies.map((cs, idx) => (
              <div key={idx} className="card-interactive-luxury" style={{ padding: 'clamp(32px, 5vw, 48px)', background: 'var(--grad-card)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
                  <span className="tag" style={{ color: 'var(--gold-light)' }}>{cs.badge}</span>
                  <span style={{ fontSize: '0.85rem', color: 'var(--grey-mid)' }}>⏱ {cs.timeline}</span>
                </div>

                <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', marginBottom: '8px' }}>{cs.title}</h2>
                <div style={{ fontSize: '0.92rem', color: 'var(--gold-primary)', fontWeight: 600, marginBottom: '24px' }}>
                  Partner: {cs.client}
                </div>

                <div className="grid-2" style={{ gap: '28px', marginBottom: '32px' }}>
                  <div style={{ background: 'var(--black-elevated)', padding: '24px', borderRadius: 'var(--rad-md)', border: '1px solid var(--black-border)' }}>
                    <h5 style={{ color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem', marginBottom: '10px', fontFamily: 'var(--font-accent)' }}>
                      The Challenge
                    </h5>
                    <p style={{ fontSize: '0.9rem', color: 'var(--grey-mid)', lineHeight: '1.7' }}>
                      {cs.challenge}
                    </p>
                  </div>

                  <div style={{ background: 'var(--black-elevated)', padding: '24px', borderRadius: 'var(--rad-md)', border: '1px solid var(--black-border)' }}>
                    <h5 style={{ color: 'var(--gold-light)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem', marginBottom: '10px', fontFamily: 'var(--font-accent)' }}>
                      The KS Enterprise Solution
                    </h5>
                    <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.7' }}>
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* Metrics Grid */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '16px',
                  background: 'var(--black-deep)',
                  padding: '24px',
                  borderRadius: 'var(--rad-lg)',
                  border: '1px solid rgba(201,168,76,0.25)'
                }}>
                  {cs.metrics.map((m, mIdx) => (
                    <div key={mIdx} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--gold-light)', fontFamily: 'var(--font-display)', marginBottom: '4px' }}>
                        {m.value}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--grey-mid)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-accent)' }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <h3 style={{ marginBottom: '16px' }}>Ready to Build Your Footwear Success Story?</h3>
            <p style={{ color: 'var(--grey-mid)', maxWidth: '560px', margin: '0 auto 28px' }}>
              Whether launching your first 200 pairs or scaling an established retail network, KS Enterprise is your trusted manufacturing backbone.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn btn-primary btn-lg">
                Start Brand Consultation
              </Link>
              <a 
                href="https://wa.me/911234567890?text=Hello%20KS%20Enterprise%2C%20I%20would%20like%20to%20discuss%20a%20footwear%20case%20study%20project." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline btn-lg"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
