import React, { useState } from 'react';

export default function BrandJourney() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Idea Consultation & Brand Concept',
      short: 'Concept & Vision',
      subtitle: 'Aligning your footwear vision with commercial market demand',
      description: 'We sit down with D2C founders and brand directors to dissect your target demographic, aesthetic benchmarks, retail price positioning, and category fit. Whether you want minimal street sneakers or hand-welted formal dress shoes, we crystallize your ideas into a commercially viable roadmap.',
      deliverables: [
        'Brand Vision & Target Audience Matrix',
        'Market & Price Segment Benchmarking',
        'Competitive Category Footwear Analysis',
        'Initial Feasibility & Cost Estimation'
      ],
      turnaround: '1–2 Days',
      badge: 'Strategy Phase'
    },
    {
      num: '02',
      title: 'Custom Shoe Design & Tech Packs',
      short: 'Design & Tech Packs',
      subtitle: 'From hand sketches to precision factory blueprints',
      description: 'Our footwear design studio translates concepts into production-ready 2D sketches, 3D anatomical lasts, and detailed industrial tech packs specifying stitch density, foam thickness, seam tolerances, and logo placements across the tongue, quarter, and insole.',
      deliverables: [
        '2D Multi-Angle Footwear Sketches',
        'Complete Production Tech Pack & Bill of Materials',
        'Colorway Selection & Pantone Color Matching',
        'Anatomical 3D Last Profiling (UK/US/EU)'
      ],
      turnaround: '3–5 Days',
      badge: 'Design & CAD'
    },
    {
      num: '03',
      title: 'Raw Material Selection & Sourcing',
      short: 'Upper & Sole Sourcing',
      subtitle: 'Curated premium leathers, technical knits, and custom outsoles',
      description: 'We source certified full-grain Italian calfskins, water-repellent suede, breathable flyknits, recycled textiles, and custom-molded soles (TPR, TPU, lightweight Phylon EVA, rubber outsoles). We test for tensile strength, flex cycles, and color fastness.',
      deliverables: [
        'LWG Gold-Rated Tannery Leathers',
        'Custom Molded Sole Formulations (EVA / Rubber / TPR)',
        'Eco-Conscious & Vegan Leather Options',
        'High-Rebound Ortholite / Memory Insoles'
      ],
      turnaround: 'Continuous Sourcing',
      badge: 'Material Engineering'
    },
    {
      num: '04',
      title: 'Rapid Prototype & Sample Creation',
      short: 'Sampling & Fit Testing',
      subtitle: 'Hold, wear, and refine your physical shoe before mass production',
      description: 'We manufacture physical wear-test samples in our dedicated sample workshop so you can inspect leather feel, test foot arch comfort, review stitch accuracy, and test walkability before moving to bulk manufacturing. Zero surprises during production.',
      deliverables: [
        'Physical Golden Sample Pair Delivery',
        'Wear & Comfort Stress Testing',
        'Upper & Insole Fit Evaluation',
        'Refinement & Final Pre-Production Approval'
      ],
      turnaround: '5–7 Working Days',
      badge: 'Zero-Risk Sampling'
    },
    {
      num: '05',
      title: 'Bulk Production & Quality Control',
      short: 'In-House Production',
      subtitle: 'Scalable 15,000 pairs/day capacity with strict 100% inline QA',
      description: 'Operating in Agra, the footwear manufacturing capital of India, our multi-conveyor assembly lines execute precision laser clicking, computerized stitching, toe lasting, sole pressing, and hand-burnishing under strict SATRA testing lab protocols.',
      deliverables: [
        '100% In-House Scalable Manufacturing',
        'Continuous Inline Quality Inspection',
        'Martindale Abrasion & 50,000 Flex Cycle Testing',
        'Flexible Low MOQ for Startups (200–300 pairs)'
      ],
      turnaround: '18–28 Days',
      badge: 'Precision Lasting'
    },
    {
      num: '06',
      title: 'Private Labeling, Packaging & Global Delivery',
      short: 'Branding & Logistics',
      subtitle: 'Ready-to-sell footwear with doorstep pan-India & global export',
      description: 'We finish your footwear with gold-embossed insole sockliners, branded tongue woven labels, custom luxury rigid boxes, cotton dust bags, and retail barcodes. We manage pan-India door delivery as well as international air & ocean freight with full customs compliance.',
      deliverables: [
        'Debossed & Heat-Pressed Custom Logos',
        'Rigid Magnetic / Corrugated Branded Boxes',
        'Personalized Tissue Paper & Dust Bags',
        'Worldwide Port-to-Port & Doorstep Logistics'
      ],
      turnaround: 'On-Schedule Dispatch',
      badge: 'Turnkey Delivery'
    }
  ];

  const current = steps[activeStep];

  return (
    <section className="section" id="journey">
      <div className="container">
        <div className="section-head">
          <div className="section-label" style={{ justifyContent: 'center' }}>End-to-End D2C &amp; OEM Workflow</div>
          <h2>From Idea To Launch: <span className="gold-text">The 6-Stage Journey</span></h2>
          <p>We don't just manufacture shoes — we help entrepreneurs, D2C startups, and retail chains build iconic footwear brands from scratch.</p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="journey-tabs-wrapper">
          {steps.map((step, idx) => (
            <button
              key={idx}
              className={`journey-tab-btn ${activeStep === idx ? 'active' : ''}`}
              onClick={() => setActiveStep(idx)}
            >
              <span className="journey-tab-num">{step.num}</span>
              <span>{step.short}</span>
            </button>
          ))}
        </div>

        {/* Active Stage Display Card */}
        <div className="journey-display-card">
          <div className="grid-2" style={{ alignItems: 'center', gap: '40px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span className="tag" style={{ color: 'var(--gold-light)' }}>Phase {current.num} • {current.badge}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--grey-mid)' }}>⏱ {current.turnaround}</span>
              </div>

              <h3 style={{ fontSize: '1.6rem', marginBottom: '8px', color: 'var(--white)' }}>
                {current.title}
              </h3>
              <p style={{ color: 'var(--gold-primary)', fontSize: '0.95rem', fontWeight: '600', marginBottom: '18px' }}>
                {current.subtitle}
              </p>
              <p style={{ color: 'var(--grey-light)', fontSize: '0.92rem', lineHeight: '1.8', marginBottom: '24px' }}>
                {current.description}
              </p>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a 
                  href="#rfq-section" 
                  className="btn btn-primary btn-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('rfq-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start Phase {current.num} with Us
                </a>
                <a 
                  href="https://wa.me/911234567890?text=Hello%20KS%20Enterprise%2C%20I%20would%20like%20to%20consult%20on%20building%20my%20footwear%20brand." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline btn-sm"
                >
                  WhatsApp Consultation
                </a>
              </div>
            </div>

            <div style={{ background: 'var(--black-elevated)', border: '1px solid var(--black-border)', borderRadius: 'var(--rad-lg)', padding: '32px' }}>
              <h5 style={{ color: 'var(--gold-light)', fontFamily: 'var(--font-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', marginBottom: '18px' }}>
                What KS Enterprise Delivers:
              </h5>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {current.deliverables.map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '0.9rem', color: 'var(--white-90)' }}>
                    <span style={{ color: 'var(--gold-primary)', fontSize: '1.1rem', lineHeight: '1' }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--grey-mid)' }}>Typical Phase Turnaround:</span>
                <strong style={{ color: 'var(--gold-light)', fontSize: '0.9rem' }}>{current.turnaround}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
