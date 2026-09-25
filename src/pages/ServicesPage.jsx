import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Factory, ShieldCheck, Layers, Cpu, Box, Sparkles, Hammer, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'oem',
      num: '01',
      title: 'OEM Manufacturing',
      subtitle: 'Your Footwear Designs Built to Exact Specifications',
      icon: <Factory size={24} />,
      desc: 'Complete Original Equipment Manufacturing for established footwear brands, sporting goods labels, and retail enterprises. We execute your technical drawings and tech packs with uncompromising fidelity.',
      capabilities: [
        'Dedicated production lines with scheduled seasonal capacity',
        'Confidential prototype development protected by strict NDAs',
        'Tooling and mold engineering for custom outsoles and midsoles',
        'Full conformance with brand-specified Bill of Materials (BOM)'
      ],
      turnaround: '3–4 Weeks Bulk',
      moq: '200–500 Pairs'
    },
    {
      id: 'private-label',
      num: '02',
      title: 'Private Label Manufacturing',
      subtitle: 'Turnkey Footwear Solutions Ready for Your Brand Mark',
      icon: <Sparkles size={24} />,
      desc: 'Accelerate your time-to-market. Select from our pre-engineered, market-tested performance silhouettes and customize them with your brand logos, colorways, insole embossing, and custom packaging.',
      capabilities: [
        'Curated white-label silhouettes across 8 product categories',
        'Laser-etched and debossed brand insignias across uppers and tongues',
        'Custom pantone color matching on leathers, meshes, and laces',
        'Turnkey branded packaging suites ready for direct retail sale'
      ],
      turnaround: '2–3 Weeks',
      moq: '200 Pairs Minimum'
    },
    {
      id: 'custom-development',
      num: '03',
      title: 'Custom Footwear Development',
      subtitle: 'Ground-Up Engineering for Visionary Brands',
      icon: <Cpu size={24} />,
      desc: 'From initial designer sketches to 3D CAD modeling and custom lasting. We develop entirely new silhouettes with proprietary ergonomic fits, novel material blends, and unique structural designs.',
      capabilities: [
        '3D CAD digital rendering and anatomical last engineering',
        'Biomechanical fit analysis and toe-spring calibration',
        'Proprietary outsole tooling and injection mold development',
        'Experimental upper composites (technical jacquard, Kevlar, suede)'
      ],
      turnaround: '7–10 Days Prototype',
      moq: 'Custom Tooling'
    },
    {
      id: 'product-development',
      num: '04',
      title: 'Product Development & Tech Packs',
      subtitle: 'Engineering Blueprints & Material Specifications',
      icon: <Layers size={24} />,
      desc: 'Our in-house design studio translates rough brand concepts into factory-ready engineering tech packs, specifying exact seam allowances, foam durometers, and graded sizing curves.',
      capabilities: [
        'Multi-angle 2D / 3D CAD blueprints with exploded part views',
        'Detailed Bill of Materials (BOM) with commercial cost forecasting',
        'Graded last curves across UK, US, and EU sizing standards',
        'Thermal bonding, bar-tack, and reinforcement layer schematics'
      ],
      turnaround: '3–5 Days',
      moq: 'Consultation Driven'
    },
    {
      id: 'sampling-prototyping',
      num: '05',
      title: 'Sampling & Rapid Prototyping',
      subtitle: 'Physical Wear-Test Samples in 7 Business Days',
      icon: <Hammer size={24} />,
      desc: 'Eliminate production surprises before committing to volume. Our dedicated sample studio crafts physical golden pairs for fit verification, wear testing, and marketing photoshoot samples.',
      capabilities: [
        'Physical golden sample pair hand-lasted by master craftsmen',
        'Rapid 7-day express sample turnaround for runway and press drops',
        'Wear testing feedback integration and pattern fine-tuning',
        'Final pre-production approval sign-off documentation'
      ],
      turnaround: '7 Business Days',
      moq: '1–3 Pairs (Sample Tier)'
    },
    {
      id: 'bulk-manufacturing',
      num: '06',
      title: 'Bulk Manufacturing & Scaling',
      subtitle: 'High-Speed Automated Lasting up to 10,000 Pairs Daily',
      icon: <Factory size={24} />,
      desc: 'Scale from pilot batches of 200 pairs to multi-container nationwide distributions. Our 65,000 sq. ft. campus operates computerized cutting, conveyor lasting, and automated cementing.',
      capabilities: [
        'Mass production capacity exceeding 10,000 pairs daily',
        'Synchronized multi-station conveyor assembly lines',
        'Automated hydraulic sole pressing with infrared heat stabilization',
        'Scheduled recurring container replenishment programs'
      ],
      turnaround: 'Scheduled Batches',
      moq: '200 to 100,000+ Pairs'
    },
    {
      id: 'quality-control',
      num: '07',
      title: 'Quality Control & SATRA Testing',
      subtitle: 'Zero-Defect AQL 1.0 Inspection Protocol',
      icon: <ShieldCheck size={24} />,
      desc: 'Rigorous 4-stage quality control spanning raw hide testing, in-line stitching audits, sole bond peel dynamometry, and continuous 100,000-cycle sole flex endurance machines.',
      capabilities: [
        'SATRA TM92 continuous sole flex mechanical testing',
        'Martindale upper abrasion and stitch pull-out strength tests',
        'Pneumatic sole bond peel verification (>3.5 N/mm adhesion)',
        '100% pre-shipment visual and dimensional audit'
      ],
      turnaround: 'Every Batch Tested',
      moq: 'Standard QA'
    },
    {
      id: 'packaging-solutions',
      num: '08',
      title: 'Packaging & Retail Barcoding',
      subtitle: 'Luxury Rigid Boxes, Tissue Wrap & Master Shipping Cartons',
      icon: <Box size={24} />,
      desc: 'Unboxing is your customer’s first physical touchpoint. We engineer luxury rigid magnetic shoe boxes with metallic hot-foil stamping, custom tissue wrap, hangtags, and retail barcoding.',
      capabilities: [
        'Custom rigid, slide-drawer, and magnetic luxury shoe boxes',
        'Metallic gold, silver, rose gold, and debossed logo stamping',
        'FSC-certified eco craft corrugated master shipping cartons',
        'EAN / UPC retail barcode labeling and SKU organization'
      ],
      turnaround: 'Integrated with Bulk',
      moq: 'Matches Footwear MOQ'
    }
  ];

  return (
    <div style={{ background: '#FFFFFF', color: '#121212', minHeight: '100vh', paddingTop: '100px' }}>
      
      {/* HEADER SECTION */}
      <section style={{ padding: '60px 0 40px', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
        <div className="container-lg">
          <div style={{ maxWidth: '850px' }}>
            <span style={{
              fontSize: '0.76rem',
              fontFamily: 'var(--font-accent)',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: 'var(--accent-bronze)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px'
            }}>
              Comprehensive Contract Services • OEM &amp; Private Label
            </span>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              lineHeight: 1.12,
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              End-to-End Footwear <br />
              <span style={{ color: 'var(--gold-light)' }}>Manufacturing Services</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--grey-mid)', lineHeight: 1.7 }}>
              From initial product development and rapid 7-day wear-test prototypes to large-scale automated bulk production and luxury retail packaging.
            </p>
          </div>
        </div>
      </section>

      {/* 8 SERVICES FULL-WIDTH EDITORIAL SECTIONS */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-lg">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {services.map((srv, idx) => (
              <div
                key={srv.id}
                id={srv.id}
                className="b2b-card"
                style={{
                  padding: '45px 36px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '40px',
                  alignItems: 'center'
                }}
              >
                {/* Left Side: Service Details */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <span style={{
                      fontFamily: 'var(--font-accent)',
                      fontSize: '1.4rem',
                      fontWeight: 900,
                      color: 'var(--gold-light)'
                    }}>
                      {srv.num}
                    </span>
                    <span style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-accent)',
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      color: 'var(--accent-bronze)',
                      textTransform: 'uppercase'
                    }}>
                      Service Line
                    </span>
                  </div>

                  <h2 style={{
                    fontFamily: 'var(--font-accent)',
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                    fontWeight: 900,
                    color: '#121212',
                    textTransform: 'uppercase',
                    marginBottom: '8px'
                  }}>
                    {srv.title}
                  </h2>

                  <span style={{
                    fontSize: '0.86rem',
                    color: 'var(--gold-light)',
                    display: 'block',
                    marginBottom: '16px',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 600
                  }}>
                    {srv.subtitle}
                  </span>

                  <p style={{ fontSize: '0.94rem', color: 'var(--grey-mid)', lineHeight: 1.7, marginBottom: '24px' }}>
                    {srv.desc}
                  </p>

                  <Link to="/contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.78rem' }}>
                    <span>Inquire {srv.title}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

                {/* Right Side: Capabilities Matrix */}
                <div style={{
                  padding: '30px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '12px'
                }}>
                  <span style={{
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 800,
                    color: 'var(--accent-bronze)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: '18px'
                  }}>
                    Technical Specifications &amp; Deliverables
                  </span>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                    {srv.capabilities.map((cap, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2 size={16} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '0.86rem', color: '#121212', lineHeight: 1.5 }}>{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                    fontSize: '0.8rem'
                  }}>
                    <div>
                      <span style={{ color: 'var(--grey-mid)', display: 'block' }}>Turnaround:</span>
                      <strong style={{ color: 'var(--gold-light)' }}>{srv.turnaround}</strong>
                    </div>
                    <div>
                      <span style={{ color: 'var(--grey-mid)', display: 'block' }}>Minimum Order:</span>
                      <strong style={{ color: '#121212' }}>{srv.moq}</strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Consultation Banner */}
          <div style={{
            marginTop: '80px',
            textAlign: 'center',
            padding: '60px 40px',
            background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 100%)',
            border: '1px solid rgba(197, 160, 89, 0.35)',
            borderRadius: 'var(--rad-lg)'
          }}>
            <h3 style={{ fontSize: '2rem', fontFamily: 'var(--font-accent)', textTransform: 'uppercase', marginBottom: '14px' }}>
              Tailored Contract Manufacturing Programs
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--grey-mid)', maxWidth: '650px', margin: '0 auto 30px', lineHeight: 1.7 }}>
              Schedule a technical discovery call with our lead footwear engineer to discuss BOM optimization, tooling costs, and production timelines.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Book Engineering Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
