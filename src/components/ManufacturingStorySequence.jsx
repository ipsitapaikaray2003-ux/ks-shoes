import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, CheckCircle2, Sparkles, Cpu, Layers, Scissors, Hammer, ShieldCheck, Box } from 'lucide-react';

export default function ManufacturingStorySequence() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      id: 'design',
      num: '01',
      title: 'DESIGN',
      subtitle: '3D CAD Tooling, Digital Lasts & Tech Pack Grading',
      icon: <Cpu size={22} />,
      desc: 'Our design and engineering atelier transforms brand concept art and sketches into millimeter-accurate 3D CAD files. We sculpt custom anatomical wooden and HDPE lasts adapted to target market ergonomics (UK, US, EU, Asian sizing) to guarantee unmatched biomechanical fit.',
      specs: 'ShoeMaster 3D CAD • Anatomical Last Grading • Digital Upper Flattening',
      image: '/assets/images/craft_leather_cut.jpg',
      stat: '0.1mm',
      statLabel: 'CAD Precision'
    },
    {
      id: 'material',
      num: '02',
      title: 'MATERIAL',
      subtitle: 'LWG Gold Certified Leathers & High-Tensile Knits',
      icon: <Layers size={22} />,
      desc: 'We partner directly with certified tanneries and advanced technical textile mills. From full-grain Italian calfskins and water-repellent suedes to aerodynamic jacquard knits, recycled PET yarn, and custom dual-density EVA compounds.',
      specs: 'LWG Gold Tannery Certified • OEKO-TEX Recycled Knits • REACH Compliant',
      image: '/assets/images/craft_stitching.jpg',
      stat: '100%',
      statLabel: 'Traceable Sourcing'
    },
    {
      id: 'engineering',
      num: '03',
      title: 'ENGINEERING',
      subtitle: 'Tooling Moulds, Biomechanics & Rapid Sampling',
      icon: <Scissors size={22} />,
      desc: 'Tooling development forms the foundation of performance footwear. We engineer private outsole steel moulds, injection polyurethane midlayers, and torsion-resistant shank plates. Physical golden samples are delivered in just 7 business days for wear-testing.',
      specs: 'Steel Injection Moulds • Biomechanical Shank Testing • 7-Day Sample Turnaround',
      image: '/assets/images/craft_lasting.jpg',
      stat: '7 Days',
      statLabel: 'Physical Prototype'
    },
    {
      id: 'manufacturing',
      num: '04',
      title: 'MANUFACTURING',
      subtitle: 'Automated Swiss CNC Cutting & Italian Lasting Lines',
      desc: 'Our 65,000 sq. ft. campus operates computerized Swiss CNC laser clicking, multi-head automated pattern sewing, and multi-station Italian conveyor lasting. With 10,000+ pairs daily throughput, we effortlessly scale from 200-pair runs to 100k+ pair orders.',
      specs: 'Swiss CNC Cutters • Italian Conveyor Tracks • 10,000 Pairs Daily Capacity',
      image: '/assets/images/hightech_factory_bright.jpg',
      stat: '10,000+',
      statLabel: 'Daily Pair Output'
    },
    {
      id: 'quality',
      num: '05',
      title: 'QUALITY',
      subtitle: '100% In-House SATRA Testing & Optical Seam Audits',
      desc: 'Every production lot undergoes rigorous mechanical stress testing in our SATRA-certified laboratory. Shoes are tested through 100,000 continuous sole flex cycles, Martindale rub tests, bond peel audits, and individual 1,000-lux optical inspection.',
      specs: 'SATRA Standard Test Lab • 100,000 Flex Cycles • AQL 1.0 Zero-Defect Audit',
      image: '/assets/images/factory.jpg',
      stat: '100k',
      statLabel: 'Flex Test Cycles'
    },
    {
      id: 'finishing',
      num: '06',
      title: 'FINISHING',
      subtitle: 'Hand-Burnishing, FSC Packaging & Global Logistics',
      desc: 'Shoes receive final artisan hand-burnishing and conditioning before protective wrapping in anti-mold moisture barriers. They are boxed in custom rigid embossed drawer cartons with printed tissue, silica packs, and EAN/UPC barcodes ready for worldwide dispatch.',
      specs: 'Hand-Antiqued Patina • FSC Certified Drawer Boxes • Air & Sea Freight Loading',
      image: '/assets/images/corporate_gifting.jpg',
      stat: '20+',
      statLabel: 'Export Countries'
    }
  ];

  const current = stages[activeStage];

  return (
    <section 
      className="section" 
      id="manufacturing-story" 
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
          marginBottom: '50px'
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
              End-To-End Manufacturing Story • 6-Stage Journey
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
              The Production Story
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
            <span>Complete Factory Tour</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 6 Stage Timeline Selector Bar */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '8px',
          marginBottom: '48px',
          background: 'rgba(255, 255, 255, 0.02)',
          padding: '8px',
          borderRadius: '6px',
          border: '1px solid rgba(0, 0, 0, 0.08)'
        }}>
          {stages.map((stg, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stg.id}
                onClick={() => setActiveStage(idx)}
                style={{
                  background: isActive ? 'rgba(197, 160, 89, 0.15)' : 'transparent',
                  border: `1px solid ${isActive ? 'rgba(197, 160, 89, 0.4)' : 'transparent'}`,
                  borderRadius: '4px',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.82rem',
                  fontWeight: 800,
                  color: isActive ? 'var(--gold-light)' : 'rgba(245, 243, 239, 0.3)'
                }}>
                  {stg.num}
                </span>
                <span style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isActive ? '#121212' : 'rgba(245, 243, 239, 0.7)'
                }}>
                  {stg.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Stage Editorial Deep-Dive */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center',
            padding: '40px',
            background: '#FFFFFF',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            borderRadius: '6px'
          }}
        >
          {/* Left: Narrative, Tech Specs, Down Arrow indicator to next */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
              <span style={{
                fontSize: '2rem',
                fontFamily: 'var(--font-accent)',
                fontWeight: 900,
                color: 'var(--gold-light)'
              }}>
                {current.num}
              </span>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '4px',
                background: 'rgba(197, 160, 89, 0.1)',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gold-light)'
              }}>
                {current.icon}
              </div>
              <span style={{
                fontSize: '0.74rem',
                fontFamily: 'var(--font-accent)',
                fontWeight: 800,
                letterSpacing: '0.12em',
                color: 'var(--accent-bronze)',
                textTransform: 'uppercase'
              }}>
                Stage {current.num} of 06
              </span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-accent)',
              fontSize: 'clamp(1.8rem, 2.8vw, 2.5rem)',
              fontWeight: 900,
              color: '#121212',
              textTransform: 'uppercase',
              margin: '0 0 8px 0',
              lineHeight: 1.15
            }}>
              {current.title}
            </h3>

            <h4 style={{
              fontSize: '1rem',
              color: 'var(--gold-light)',
              fontWeight: 600,
              margin: '0 0 18px 0'
            }}>
              {current.subtitle}
            </h4>

            <p style={{
              fontSize: '0.96rem',
              color: 'var(--grey-mid)',
              lineHeight: 1.75,
              marginBottom: '26px'
            }}>
              {current.desc}
            </p>

            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 16px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(0, 0, 0, 0.08)',
              borderRadius: '4px',
              fontSize: '0.8rem',
              color: 'rgba(245, 243, 239, 0.85)',
              fontFamily: 'var(--font-accent)',
              marginBottom: '32px'
            }}>
              {current.specs}
            </div>

            {/* Next Stage Quick Advance */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <button
                onClick={() => setActiveStage((activeStage + 1) % stages.length)}
                className="btn btn-primary"
                style={{ padding: '12px 26px', fontSize: '0.82rem', borderRadius: '4px' }}
              >
                <span>Advance to Next Stage</span>
                <ArrowRight size={15} />
              </button>

              {activeStage < stages.length - 1 && (
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.74rem',
                  color: 'var(--grey-mid)',
                  fontFamily: 'var(--font-accent)'
                }}>
                  <ArrowDown size={15} color="var(--gold-light)" />
                  <span>Next: {stages[activeStage + 1].title}</span>
                </div>
              )}
            </div>
          </div>

          {/* Right: Large Editorial Stage Photography */}
          <div style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              height: '420px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.75)'
            }}>
              <img 
                src={current.image} 
                alt={`KS Shoes ${current.title} Manufacturing Stage`} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.9) contrast(1.08)'
                }}
              />
            </div>

            {/* Float Metric Badge */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '24px',
              padding: '16px 24px',
              background: 'rgba(7, 9, 13, 0.94)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(197, 160, 89, 0.4)',
              borderRadius: '4px',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.8)'
            }}>
              <span style={{
                fontSize: '1.8rem',
                fontFamily: 'var(--font-accent)',
                fontWeight: 900,
                color: 'var(--gold-light)',
                display: 'block',
                lineHeight: 1
              }}>
                {current.stat}
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontFamily: 'var(--font-accent)',
                fontWeight: 700,
                letterSpacing: '0.08em',
                color: '#121212',
                textTransform: 'uppercase',
                marginTop: '4px',
                display: 'block'
              }}>
                {current.statLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
