import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, Activity, Layers, Scissors, CheckCheck, Box } from 'lucide-react';

export default function HomeQualityDarkSection() {
  const steps = [
    {
      num: '01',
      title: 'Material Inspection',
      subtitle: 'Raw Material Verification',
      icon: <Layers size={22} />,
      desc: 'Incoming leather hides undergo grain density grading, colorfastness rub tests, and chemical compliance checks (REACH standard). Knitted uppers and technical meshes are tension-tested for elongation and tensile tear resistance.',
      metric: '100% Batch Inspected',
      metricLabel: 'Grain & Tensile Audit'
    },
    {
      num: '02',
      title: 'Production Quality',
      subtitle: 'In-Line Tolerance Audits',
      icon: <Scissors size={22} />,
      desc: 'Computerized Swiss cutting ensures ±0.2mm perimeter accuracy. Continuous stitch-per-inch (SPI) monitoring and calibrated tension lasting guarantees zero puckering, perfect toe-spring geometry, and symmetrical feather edges.',
      metric: '±0.2mm',
      metricLabel: 'Laser Cut Tolerance'
    },
    {
      num: '03',
      title: 'Testing',
      subtitle: 'Mechanical SATRA Stress Testing',
      icon: <Activity size={22} />,
      desc: 'In our in-house test laboratory, sample pairs endure 100,000 continuous sole flex cycles at room and sub-zero temperatures, Martindale rub cycles for upper abrasion, and hydraulic outsole bond peel strength verification.',
      metric: '100k Cycles',
      metricLabel: 'Continuous Sole Flex'
    },
    {
      num: '04',
      title: 'Final Inspection',
      subtitle: 'Zero-Defect Optical Audit',
      icon: <CheckCheck size={22} />,
      desc: 'Every completed pair passes through our 1,000-lux illuminated optical auditing tunnel. Certified QA inspectors review heel alignment, lasting line integrity, sole cementing cleanliness, and cosmetic flawless finish under AQL 1.0 acceptance standards.',
      metric: 'AQL 1.0',
      metricLabel: 'Zero-Defect Standard'
    },
    {
      num: '05',
      title: 'Packaging',
      subtitle: 'Protective Barrier & Barcoding',
      icon: <Box size={22} />,
      desc: 'Finished shoes are wrapped in anti-mold moisture barrier paper with custom branded tissue, packed into rigid embossed boxes with desiccant packs, and tagged with verified UPC/EAN barcodes for seamless global customs clearance.',
      metric: '100% Export Ready',
      metricLabel: 'FSC Rigid Cartons'
    }
  ];

  return (
    <section 
      className="section" 
      id="quality" 
      style={{
        background: '#FFFFFF',
        padding: '120px 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        position: 'relative'
      }}
    >
      <div className="container-lg">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '60px'
        }}>
          <div style={{ maxWidth: '750px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span className="pulse-dot" />
              <span style={{
                fontSize: '0.74rem',
                fontFamily: 'var(--font-accent)',
                fontWeight: 800,
                letterSpacing: '0.16em',
                color: 'var(--accent-bronze)',
                textTransform: 'uppercase'
              }}>
                SATRA Test Laboratory • ISO 9001:2015
              </span>
            </div>

            {/* Exact Required Heading */}
            <h2 style={{
              fontSize: 'clamp(2.2rem, 4.2vw, 3.6rem)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#121212',
              letterSpacing: '-0.02em',
              lineHeight: 1.08,
              margin: 0
            }}>
              PRECISION AT EVERY STEP.
            </h2>
          </div>

          <Link 
            to="/quality" 
            className="btn btn-outline" 
            style={{
              padding: '12px 24px',
              fontSize: '0.8rem',
              borderRadius: '4px',
              borderColor: 'rgba(245, 243, 239, 0.25)',
              color: '#121212'
            }}
          >
            <span>View Laboratory Standards</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 5 Quality Stages Grid with Subtle Animated Elements */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            marginBottom: '50px'
          }}
        >
          {steps.map((step) => (
            <div 
              key={step.num}
              className="b2b-card"
              style={{
                padding: '32px 28px',
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '4px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'all 0.35s ease'
              }}
            >
              <div>
                {/* Card Header: Num & Icon with animated pulse */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '22px'
                }}>
                  <span style={{
                    fontSize: '1.6rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 900,
                    color: 'var(--gold-light)'
                  }}>
                    {step.num}
                  </span>

                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '4px',
                    background: 'rgba(197, 160, 89, 0.08)',
                    border: '1px solid rgba(197, 160, 89, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-light)'
                  }}>
                    {step.icon}
                  </div>
                </div>

                <span style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: 'var(--accent-bronze)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '4px'
                }}>
                  {step.subtitle}
                </span>

                <h3 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#121212',
                  textTransform: 'uppercase',
                  margin: '0 0 14px 0'
                }}>
                  {step.title}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--grey-mid)',
                  lineHeight: 1.65,
                  margin: '0 0 24px 0'
                }}>
                  {step.desc}
                </p>
              </div>

              {/* Bottom Metric Badge */}
              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <span style={{
                    fontSize: '1.1rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 800,
                    color: 'var(--gold-light)',
                    display: 'block',
                    lineHeight: 1
                  }}>
                    {step.metric}
                  </span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--grey-mid)' }}>
                    {step.metricLabel}
                  </span>
                </div>
                <div style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 6px #22c55e'
                }} />
              </div>
            </div>
          ))}
        </div>

        {/* Global Certifications Strip */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '36px',
          padding: '24px',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(245, 243, 239, 0.06)',
          borderRadius: '4px',
          fontSize: '0.82rem',
          color: 'rgba(245, 243, 239, 0.7)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={16} color="var(--gold-light)" />
            <span>SATRA Technology Member Center</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={16} color="var(--gold-light)" />
            <span>ISO 9001:2015 Quality Management Certified</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={16} color="var(--gold-light)" />
            <span>Leather Working Group (LWG) Gold Standard</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CheckCircle2 size={16} color="var(--gold-light)" />
            <span>EN ISO 20345 European Safety Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
