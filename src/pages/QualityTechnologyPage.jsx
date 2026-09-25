import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, CheckCircle2, Award, Microchip, Layers, Activity, ArrowRight, Gauge, Cpu, Check, FileCheck } from 'lucide-react';

export default function QualityTechnologyPage() {
  const [activeTier, setActiveTier] = useState(0);

  const tiers = [
    {
      id: 1,
      name: 'Tier 1: Raw Material Validation',
      subtitle: 'Incoming Component Testing',
      desc: 'No raw material enters the cutting line without passing laboratory screening. We test leather grain tensile, knit tear resistance, and EVA foam rebound densities.',
      checks: [
        'LWG Gold traceability & environmental audit verification',
        'Martindale abrasion testing on uppers (up to 40,000 cycles)',
        'Chemical migration & azo dye testing (REACH standard)',
        'Foam durometer and compression set analysis'
      ]
    },
    {
      id: 2,
      name: 'Tier 2: In-Line Precision Inspection',
      subtitle: 'Component Cutting & Stitching Check',
      desc: 'During clicking, stitching, and sub-assembly, specialized QA monitors verify seam tensions, stitch densities (8-10 stitches per inch), and adhesive application temperatures.',
      checks: [
        'Automated optical inspection for cut component tolerances',
        'Bar-tack tension testing on eyelets and stress zones',
        'Strobel stitch alignment and sock contour verification',
        'Halogenation primer & cement temperature logging'
      ]
    },
    {
      id: 3,
      name: 'Tier 3: Post-Assembly & Lasting Audit',
      subtitle: 'Sole Bonding & Lasting Inspection',
      desc: 'After shoes exit the infrared curing tunnels and hydraulic presses, bond peel strength is electronically measured. Sole lines must be 100% gap-free with zero adhesive overflow.',
      checks: [
        'Pneumatic sole bond peel test (>3.5 N/mm minimum adhesion)',
        'Heel and toe spring symmetry measurement on calibrated lasts',
        'Upper-to-sole perimeter waterproofing test',
        'Thermal shape retention inspection after chill tunnel stabilization'
      ]
    },
    {
      id: 4,
      name: 'Tier 4: Final Pre-Shipment Audit',
      subtitle: 'Finished Footwear Lab Testing (AQL 1.0)',
      desc: 'Finished shoes are tested in our in-house lab for continuous flexion (100,000 flex cycles), slip-resistance on wet surfaces, and visual aesthetics before boxing.',
      checks: [
        'SATRA TM92 continuous sole flex test (100,000 cycles without cracking)',
        'EN ISO 13287 coefficient of friction (COF) slip-resistance test',
        'Insole cushioning rebound endurance test',
        'AQL 1.0 zero-defect cosmetic inspection prior to master packing'
      ]
    }
  ];

  const labTests = [
    {
      name: 'Sole Flex Endurance',
      standard: 'SATRA TM92 / ISO 16177',
      cycles: '100,000 Cycles',
      desc: 'Simulates intensive athletic running and walking to confirm zero midsole fatigue or crack propagation.'
    },
    {
      name: 'Upper Abrasion Resistance',
      standard: 'BS EN ISO 12947 (Martindale)',
      cycles: '40,000 Rubs',
      desc: 'Verifies the surface durability of engineered jacquard knits, leather finishes, and suede panels.'
    },
    {
      name: 'Bond Peel Adhesion',
      standard: 'SATRA TM404 / EN 1392',
      cycles: '> 4.0 N/mm',
      desc: 'Measures the mechanical peel strength between outsole and upper to eliminate delamination risks.'
    },
    {
      name: 'Anti-Skid Coefficient',
      standard: 'ASTM F2913 / EN ISO 13287',
      cycles: 'COF > 0.65',
      desc: 'Tests wet ceramic and steel surface grip performance across athletic treads and work soles.'
    }
  ];

  return (
    <div style={{ 
      background: 'linear-gradient(to bottom, rgba(8,8,8,0.85), rgba(8,8,8,0.98)), url(/assets/images/cinematic_3d_sneaker_hero.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: '#ffffff', 
      minHeight: '100vh', 
      paddingTop: '100px' 
    }}>
      {/* HEADER SECTION */}
      <section style={{ padding: '60px 0 40px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container-lg">
          <div style={{ maxWidth: '880px' }}>
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
              Zero-Defect Quality Assurance &amp; Lab Testing
            </span>
            <h1 style={{
              fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
              lineHeight: 1.12,
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginBottom: '20px',
              color: '#ffffff'
            }}>
              Engineering Rigor. <br />
              <span style={{ color: 'var(--gold-light)' }}>Global Standards.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', color: 'var(--grey-mid)', lineHeight: 1.7 }}>
              Quality at KS Shoes is an engineered discipline, not an afterthought. Every prototype, production batch, and finished consignment adheres to SATRA, ISO, and REACH international standards.
            </p>
          </div>

          {/* 4 Quantitative Quality Badges */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            marginTop: '45px',
            padding: '30px 24px',
            background: 'var(--charcoal-card)',
            border: '1px solid var(--charcoal-border)',
            borderRadius: 'var(--rad-md)'
          }}>
            <div>
              <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--gold-light)', display: 'block', lineHeight: 1 }}>
                AQL 1.0
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--grey-mid)', marginTop: '6px', display: 'block' }}>
                Strict Acceptance Quality Limit
              </span>
            </div>
            <div>
              <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--gold-light)', display: 'block', lineHeight: 1 }}>
                100,000
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--grey-mid)', marginTop: '6px', display: 'block' }}>
                Flex Cycle Mechanical Testing
              </span>
            </div>
            <div>
              <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--gold-light)', display: 'block', lineHeight: 1 }}>
                ISO 9001
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--grey-mid)', marginTop: '6px', display: 'block' }}>
                Certified Manufacturing Plant
              </span>
            </div>
            <div>
              <span style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--gold-light)', display: 'block', lineHeight: 1 }}>
                99.4%
              </span>
              <span style={{ fontSize: '0.8rem', color: 'var(--grey-mid)', marginTop: '6px', display: 'block' }}>
                Consignment Acceptance Rate
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4-TIER INSPECTION PROTOCOL */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container-lg">
          <div style={{ maxWidth: '750px', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-accent)', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-bronze)', textTransform: 'uppercase' }}>
              Comprehensive Protocol
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 2.8rem)', fontFamily: 'var(--font-accent)', textTransform: 'uppercase', marginTop: '8px', color: '#ffffff' }}>
              The 4-Tier Quality Control Framework
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--grey-mid)', marginTop: '12px' }}>
              We prevent defects at the source through synchronized material checks, in-line monitoring, and laboratory destructive testing.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {tiers.map((t, idx) => (
              <div 
                key={t.id}
                className="b2b-card"
                style={{
                  borderTop: idx === activeTier ? '3px solid var(--gold-primary)' : '1px solid var(--charcoal-border)'
                }}
                onMouseEnter={() => setActiveTier(idx)}
              >
                <span style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 800,
                  letterSpacing: '0.1em',
                  color: 'var(--gold-light)',
                  display: 'block',
                  marginBottom: '8px'
                }}>
                  {t.subtitle}
                </span>
                <h3 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '14px',
                  textTransform: 'uppercase'
                }}>
                  {t.name}
                </h3>
                <p style={{ fontSize: '0.86rem', color: 'var(--grey-mid)', lineHeight: 1.6, marginBottom: '22px' }}>
                  {t.desc}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {t.checks.map((c, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <Check size={14} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.8rem', color: '#ffffff', lineHeight: 1.4 }}>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN-HOUSE LABORATORY STANDARDS */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container-lg">
          <div style={{ maxWidth: '750px', marginBottom: '50px' }}>
            <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-accent)', fontWeight: 800, letterSpacing: '0.15em', color: 'var(--accent-bronze)', textTransform: 'uppercase' }}>
              Testing Laboratory
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.4vw, 2.8rem)', fontFamily: 'var(--font-accent)', textTransform: 'uppercase', marginTop: '8px', color: '#ffffff' }}>
              International Test Standards &amp; Benchmarks
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px'
          }}>
            {labTests.map((test, idx) => (
              <div key={idx} className="b2b-card">
                <div style={{
                  display: 'inline-flex',
                  padding: '4px 10px',
                  borderRadius: 'var(--rad-pill)',
                  background: 'rgba(197, 160, 89, 0.12)',
                  border: '1px solid rgba(197, 160, 89, 0.25)',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-accent)',
                  color: 'var(--gold-light)',
                  fontWeight: 700,
                  marginBottom: '14px'
                }}>
                  {test.standard}
                </div>
                <h4 style={{ fontFamily: 'var(--font-accent)', fontSize: '1.15rem', color: '#ffffff', marginBottom: '8px' }}>
                  {test.name}
                </h4>
                <div style={{
                  fontSize: '1.4rem',
                  fontWeight: 900,
                  color: '#ffffff',
                  marginBottom: '12px'
                }}>
                  {test.cycles}
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--grey-mid)', lineHeight: 1.6, margin: 0 }}>
                  {test.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & AUDIT ACCREDITATIONS */}
      <section style={{ padding: '80px 0' }}>
        <div className="container-lg">
          <div style={{
            padding: '50px 36px',
            background: 'var(--charcoal-card)',
            border: '1px solid var(--charcoal-border)',
            borderRadius: 'var(--rad-lg)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '30px',
            alignItems: 'center'
          }}>
            <div>
              <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-accent)', fontWeight: 800, color: 'var(--accent-bronze)', textTransform: 'uppercase' }}>
                Accreditations
              </span>
              <h3 style={{ fontSize: '1.8rem', fontFamily: 'var(--font-accent)', textTransform: 'uppercase', margin: '8px 0 16px', color: '#ffffff' }}>
                Global Compliance Verified
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--grey-mid)', lineHeight: 1.7 }}>
                Our Agra manufacturing campus is regularly audited by third-party international agencies, ensuring safe working conditions, environmental responsibility, and consistent product quality.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px' }}>
                <strong style={{ color: 'var(--gold-light)', display: 'block', fontSize: '0.92rem' }}>ISO 9001:2015</strong>
                <span style={{ fontSize: '0.76rem', color: 'var(--grey-mid)' }}>Certified Quality Management</span>
              </div>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px' }}>
                <strong style={{ color: 'var(--gold-light)', display: 'block', fontSize: '0.92rem' }}>LWG Gold</strong>
                <span style={{ fontSize: '0.76rem', color: 'var(--grey-mid)' }}>Leather Working Group Certified</span>
              </div>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px' }}>
                <strong style={{ color: 'var(--gold-light)', display: 'block', fontSize: '0.92rem' }}>SATRA Lab</strong>
                <span style={{ fontSize: '0.76rem', color: 'var(--grey-mid)' }}>Member Testing Facility</span>
              </div>
              <div style={{ padding: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '8px' }}>
                <strong style={{ color: 'var(--gold-light)', display: 'block', fontSize: '0.92rem' }}>REACH Europe</strong>
                <span style={{ fontSize: '0.76rem', color: 'var(--grey-mid)' }}>EU Chemical Safety Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
