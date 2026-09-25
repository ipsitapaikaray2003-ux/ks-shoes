import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function HomeManufacturingJourney() {
  const stages = [
    {
      num: '01',
      title: 'DESIGN',
      subtitle: '3D CAD Tooling & Anatomical Last Engineering',
      desc: 'Our design studio translates your brand sketches or tech packs into millimeter-precise 3D CAD files. We engineer custom anatomical lasts tailored to regional ergonomic fit curves (UK, US, EU, Asian markets) to guarantee supreme biomechanical comfort.',
      specs: 'ShoeMaster 3D CAD • Anatomical Wood & HDPE Lasts • Digital Grading',
      image: '/assets/images/craft_leather_cut.jpg'
    },
    {
      num: '02',
      title: 'MATERIALS',
      subtitle: 'LWG Certified Leathers & Engineered Jacquard Knits',
      desc: 'We curate certified raw materials through an ethical, traceable supply chain. From Gold-rated Italian calfskins and velvety suedes to recycled ocean-plastic yarn knits, breathable technical meshes, and custom-blended dual-density EVA compounds.',
      specs: 'LWG Gold Tannery Partnerships • OEKO-TEX Recycled Knits • REACH Compliant',
      image: '/assets/images/craft_stitching.jpg'
    },
    {
      num: '03',
      title: 'PROTOTYPING',
      subtitle: 'Rapid Physical Sampling in 7 Business Days',
      desc: 'Before committing to bulk production runs, our master sample makers build physical prototypes for fit testing, wear trials, and brand alignment. You receive a fully wearable pair with packaging mockups for retail sign-off.',
      specs: '7-Day Turnaround • Wear-Test Validation • Custom Hardware Moulds',
      image: '/assets/images/craft_lasting.jpg'
    },
    {
      num: '04',
      title: 'PRODUCTION',
      subtitle: 'Computerized Swiss Cutting & Conveyor Assembly Lines',
      desc: 'Our 65,000 sq. ft. campus combines automated Swiss CNC laser cutters, programmable pattern sewing units, and Italian lasting conveyors. With 10,000+ pairs daily throughput, we handle both low 200-pair pilot runs and 100k+ pair bulk scales.',
      specs: 'Swiss CNC Cutters • Italian Lasting Line • 10,000 Pairs Daily Capacity',
      image: '/assets/images/hightech_factory_bright.jpg'
    },
    {
      num: '05',
      title: 'QUALITY',
      subtitle: '100% In-House SATRA Testing & Optical Auditing',
      desc: 'Every production batch undergoes 100,000 continuous sole flex cycles, Martindale upper abrasion checks, slip resistance tread verification, and strict AQL 1.0 optical seam inspections to eliminate defects before packing.',
      specs: 'SATRA Standard Test Lab • 100,000 Flex Cycles • Zero-Tolerance AQL 1.0',
      image: '/assets/images/factory.jpg'
    },
    {
      num: '06',
      title: 'DELIVERY',
      subtitle: 'Custom Rigid Box Packaging & Global Freight Dispatch',
      desc: 'Footwear is finished with moisture barrier wrapping, custom branded tissue, embossed rigid drawer boxes, and barcoded outer cartons ready for direct Amazon FBA or global warehouse drop-shipping across 20+ countries.',
      specs: 'FSC Certified Boxes • Custom Barcoding • Worldwide Air & Sea Freight',
      image: '/assets/images/corporate_gifting.jpg'
    }
  ];

  return (
    <section 
      className="section" 
      id="manufacturing-journey" 
      style={{
        background: '#FFFFFF',
        padding: '120px 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
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
          <div style={{ maxWidth: '720px' }}>
            <span style={{
              fontSize: '0.74rem',
              fontFamily: 'var(--font-accent)',
              fontWeight: 800,
              letterSpacing: '0.16em',
              color: 'var(--accent-bronze)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px'
            }}>
              Production Roadmap • End-To-End Journey
            </span>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#121212',
              lineHeight: 1.08,
              margin: 0
            }}>
              The Manufacturing Journey
            </h2>
          </div>

          <Link 
            to="/manufacturing" 
            className="btn btn-outline" 
            style={{
              padding: '12px 24px',
              fontSize: '0.8rem',
              borderRadius: '4px',
              borderColor: 'rgba(245, 243, 239, 0.25)',
              color: '#121212'
            }}
          >
            <span>Explore Factory Machinery</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Editorial Timeline with Large Images */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {stages.map((stage, idx) => (
            <div key={stage.num} className="journey-timeline-item">
              {/* Stage Step & Arrow Indicator */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <span className="journey-step-num">{stage.num}</span>
                {idx < stages.length - 1 && (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    marginTop: '12px',
                    color: 'var(--gold-light)',
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 700,
                    letterSpacing: '0.1em'
                  }}>
                    <ArrowDown size={16} />
                    <span>NEXT</span>
                  </div>
                )}
              </div>

              {/* Stage Editorial Content */}
              <div style={{ paddingRight: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span style={{
                    fontSize: '0.72rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    color: 'var(--gold-light)',
                    textTransform: 'uppercase'
                  }}>
                    Stage {stage.num}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)',
                  fontWeight: 900,
                  color: '#121212',
                  textTransform: 'uppercase',
                  letterSpacing: '-0.01em',
                  margin: '0 0 8px 0'
                }}>
                  {stage.title}
                </h3>

                <h4 style={{
                  fontSize: '0.98rem',
                  color: 'var(--gold-light)',
                  fontWeight: 600,
                  margin: '0 0 16px 0'
                }}>
                  {stage.subtitle}
                </h4>

                <p style={{
                  fontSize: '0.94rem',
                  color: 'var(--grey-mid)',
                  lineHeight: 1.7,
                  margin: '0 0 20px 0'
                }}>
                  {stage.desc}
                </p>

                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '6px 14px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(0, 0, 0, 0.08)',
                  borderRadius: '3px',
                  fontSize: '0.78rem',
                  color: 'rgba(245, 243, 239, 0.85)',
                  fontFamily: 'var(--font-accent)'
                }}>
                  {stage.specs}
                </div>
              </div>

              {/* Stage Large High-Quality Image */}
              <div style={{
                position: 'relative',
                borderRadius: '6px',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                height: '320px',
                boxShadow: '0 15px 40px rgba(0, 0, 0, 0.6)'
              }}>
                <img 
                  src={stage.image} 
                  alt={`KS Shoes ${stage.title} Stage`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'brightness(0.88) contrast(1.08)'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, transparent 65%, rgba(7, 9, 13, 0.8) 100%)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '18px',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  color: '#121212',
                  textTransform: 'uppercase'
                }}>
                  Facility Inspection / {stage.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
