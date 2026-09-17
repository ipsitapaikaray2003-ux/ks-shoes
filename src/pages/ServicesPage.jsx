import React from 'react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  const services = [
    {
      id: 'brand-concept',
      num: '01',
      title: 'Ideas & Brand Concept Consultation',
      subtitle: 'Aligning your vision with real market demand',
      desc: 'We start by understanding your brand vision, target demographic, retail price segment, and product category. Whether you want to launch a contemporary streetwear sneaker or a classical Goodyear welted dress shoe, our footwear strategists build a clear roadmap.',
      points: [
        'Demographic & Trend Forecasting',
        'Competitive Price-Point Positioning',
        'Category Architecture (Sneakers, Dress, Casuals, Uniforms)',
        'Commercial Feasibility & Cost-per-Pair Breakdown'
      ]
    },
    {
      id: 'design-techpack',
      num: '02',
      title: 'Custom Shoe Design & Tech Packs',
      subtitle: 'Production-ready blueprints and 3D last modeling',
      desc: 'Our design studio translates your ideas into multi-angle sketches, 3D digital concepts, and comprehensive production tech packs. We specify seam allowances, foam densities, collar padding, and precise logo placements.',
      points: [
        'Multi-Angle 2D & 3D Footwear Rendering',
        'Comprehensive Factory Tech Packs & Bill of Materials',
        'Pantone Colorway & Accent Formulations',
        'Anatomical UK, US, and EU Last Grading'
      ]
    },
    {
      id: 'material-sourcing',
      num: '03',
      title: 'Raw Material Selection (Upper & Sole)',
      subtitle: 'Premium hides, breathable flyknits, and custom outsoles',
      desc: 'We guide you in selecting the ideal combination of upper materials and sole compounds balancing comfort, durability, budget, and brand prestige. We partner with LWG-certified tanneries and high-performance sole compounders.',
      points: [
        'Uppers: Full-Grain Calfskin, Burnished Crust, Suede, Flyknit, Recycled Microfiber',
        'Soles: Lightweight EVA Phylon, Dual-Density Rubber, TPR, TPU, Leather Soles',
        'Linings: Breathable Lambskin, Antimicrobial Mesh, Moisture-Wicking Fabric',
        'Insoles: Ortholite Foam, High-Density Latex with Memory Rebound'
      ]
    },
    {
      id: 'prototype-sampling',
      num: '04',
      title: 'Prototype & Sample Development',
      subtitle: 'Fast 5–7 day turnaround with zero production surprises',
      desc: 'Before initiating mass production, our dedicated sample studio hand-crafts physical prototypes. You can test comfort on feet, examine material drape and finishing, test walkability, and request fine adjustments.',
      points: [
        'Rapid 5–7 Working Day Sample Turnaround',
        'Physical Golden Sample Pair for Wear Testing',
        'Upper & Insole Fit Optimization',
        'Pre-Production Approval Sign-Off'
      ]
    },
    {
      id: 'bulk-production',
      num: '05',
      title: 'Design & Bulk Production',
      subtitle: 'Scalable 15,000 pairs/day in our modern Agra plant',
      desc: 'Once samples are approved, our automated cutting tables and multi-conveyor lasting lines move into full production. We cater to startups requiring low MOQ pilot batches (200–300 pairs) up to nationwide retail orders of 50,000+ pairs.',
      points: [
        'Flexible Low MOQ Startup Tier (200–300 pairs)',
        'High-Throughput 15,000 Pairs Daily Capacity',
        'Automated Computerized Cutting & Multi-Line Assembly',
        'Strict Production Milestones & On-Time Delivery'
      ]
    },
    {
      id: 'private-labeling',
      num: '06',
      title: 'Private Labeling & Custom Packaging',
      subtitle: 'Turnkey retail preparation ready for store shelves',
      desc: 'We transform raw footwear into a finished luxury brand. From heat-debossed insole logos and custom woven tongue tags to rigid gold-foil gift boxes, cotton dust bags, and retail barcodes, we handle every detail.',
      points: [
        'Heat-Debossed Leather Insoles & Outsole Stamp Tooling',
        'Custom Rigid Magnetic & Corrugated Shoe Boxes',
        'Personalized Cotton Dust Bags & Acid-Free Tissue Paper',
        'Retail Barcode EAN/UPC Labeling & Carton Marking'
      ]
    },
    {
      id: 'quality-control',
      num: '07',
      title: 'Quality Control & Lab Inspection',
      subtitle: '100% inline scrutiny and SATRA calibrated testing',
      desc: 'Every single pair manufactured at KS Enterprise undergoes continuous inline scrutiny and final optical testing. Our in-house testing lab tests for flex resistance (50,000 cycles), Martindale rub wear, and sole adhesion strength.',
      points: [
        'Bally Flexometer Testing (50,000 continuous cycles)',
        'Martindale Abrasion & Color Rub Fastness',
        'Sole Adhesion & Peel Strength Stress Testing',
        '100% Optical Inspection Before Dust Bagging'
      ]
    },
    {
      id: 'manufacturing-process',
      num: '08',
      title: 'Shoe Manufacturing Process & Constructions',
      subtitle: 'Goodyear Welted, Blake Stitched, Cemented, and Vulcanized',
      desc: 'We master classical and modern shoe constructions depending on your category needs: Goodyear welted for enduring heritage dress shoes, Blake stitched for flexible Italian loafers, and Strobel cemented for athletic sneakers.',
      points: [
        'Goodyear Welt Construction (Resoleable Heritage Durability)',
        'Blake Stitching (Sleek, Flexible Luxury Footwear)',
        'Strobel & Cemented Construction (High-Flex Street Sneakers)',
        'Direct Injection & Vulcanization (Industrial & School Shoes)'
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Page Hero Banner */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Custom Shoes Services</span>
          </div>
          <h1>End-to-End Footwear <span className="gold-text">Design &amp; Manufacturing</span></h1>
          <p>
            From idea consultation and 3D CAD tech packs to rapid prototype sampling, in-house bulk production, and turnkey packaging — we build footwear brands from scratch.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {services.map((srv, idx) => (
              <div 
                key={srv.id} 
                id={srv.id}
                className="card-glass" 
                style={{ padding: '44px', borderRadius: 'var(--rad-xl)', border: '1px solid rgba(201, 168, 76, 0.25)' }}
              >
                <div className="grid-2" style={{ alignItems: 'center', gap: '36px' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      <span className="tag" style={{ color: 'var(--gold-light)' }}>Phase {srv.num}</span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--grey-mid)' }}>KS Enterprise Core Capability</span>
                    </div>

                    <h3 style={{ fontSize: '1.6rem', marginBottom: '8px', color: 'var(--white)' }}>
                      {srv.title}
                    </h3>
                    <p style={{ color: 'var(--gold-primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '16px' }}>
                      {srv.subtitle}
                    </p>
                    <p style={{ color: 'var(--grey-light)', fontSize: '0.92rem', lineHeight: '1.8', marginBottom: '24px' }}>
                      {srv.desc}
                    </p>

                    <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                      <Link to="/contact" className="btn btn-primary btn-sm">
                        Request Service Proposal
                      </Link>
                      <a 
                        href={`https://wa.me/911234567890?text=Hello%20KS%20Enterprise%2C%20I%20am%20interested%20in%20your%20service%3A%20${encodeURIComponent(srv.title)}`}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline btn-sm"
                      >
                        Inquire on WhatsApp
                      </a>
                    </div>
                  </div>

                  <div style={{ background: 'var(--black-elevated)', border: '1px solid var(--black-border)', borderRadius: 'var(--rad-lg)', padding: '28px' }}>
                    <h5 style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.82rem', marginBottom: '16px' }}>
                      Key Specifications &amp; Deliverables:
                    </h5>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {srv.points.map((pt, pIdx) => (
                        <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--white-90)' }}>
                          <span style={{ color: 'var(--gold-primary)', fontSize: '1.1rem', lineHeight: '1' }}>✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-sm" style={{ background: 'var(--black-main)', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ marginBottom: '14px' }}>Ready to Launch Your <span className="gold-text">Custom Footwear Line?</span></h2>
          <p style={{ color: 'var(--grey-mid)', maxWidth: '580px', margin: '0 auto 28px' }}>
            Book a free consultation with our master footwear designers and get an instant production feasibility estimate.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Consult With Our Production Desk
          </Link>
        </div>
      </section>
    </div>
  );
}
