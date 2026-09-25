import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Layers, Scissors, Hammer, ShieldCheck, Box } from 'lucide-react';

export default function HomeProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Design & CAD Lasting',
      icon: <Cpu size={20} />,
      desc: '3D CAD development, digitized tech packs, and anatomical last engineering tailored to target market ergonomics.'
    },
    {
      num: '02',
      title: 'Material Sourcing',
      icon: <Layers size={20} />,
      desc: 'Certified LWG Gold leathers, high-tensile engineered jacquard knits, and premium dual-density EVA compounds.'
    },
    {
      num: '03',
      title: 'Precision CNC Cutting',
      icon: <Scissors size={20} />,
      desc: 'Automated Swiss CNC laser clicking ensuring zero dimensional variance and perfect edge finishing.'
    },
    {
      num: '04',
      title: 'Strobel Lasting & Stitching',
      icon: <Hammer size={20} />,
      desc: 'Conveyor lasting with computerized pattern stitchers, Strobel socks, and pneumatic heel presses.'
    },
    {
      num: '05',
      title: 'Sole Bonding & Molding',
      icon: <Layers size={20} />,
      desc: 'High-tonnage hydraulic sole pressing with infrared heat curing for permanent mechanical adhesion.'
    },
    {
      num: '06',
      title: 'QA Audit & Dispatch',
      icon: <ShieldCheck size={20} />,
      desc: '100% SATRA flex testing, AQL 1.0 inspection, custom rigid packaging, and worldwide freight dispatch.'
    }
  ];

  return (
    <section className="section" id="process" style={{ background: '#FFFFFF', padding: '100px 0', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
      <div className="container-lg">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '55px'
        }}>
          <div style={{ maxWidth: '750px' }}>
            <span style={{
              fontSize: '0.74rem',
              fontFamily: 'var(--font-accent)',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: 'var(--accent-bronze)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '10px'
            }}>
              Production Roadmap
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.6vw, 3rem)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#121212',
              margin: 0
            }}>
              The Manufacturing Journey
            </h2>
          </div>

          <Link to="/manufacturing" className="btn btn-outline" style={{ padding: '10px 22px', fontSize: '0.78rem' }}>
            <span>Detailed 10-Stage Process</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 6 Step Linear Process Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {steps.map((s, idx) => (
            <div 
              key={idx}
              className="b2b-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '30px'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '18px'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-accent)',
                    fontSize: '1.4rem',
                    fontWeight: 900,
                    color: 'var(--gold-light)'
                  }}>
                    {s.num}
                  </span>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#121212'
                  }}>
                    {s.icon}
                  </div>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '1.18rem',
                  fontWeight: 800,
                  color: '#121212',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}>
                  {s.title}
                </h3>

                <p style={{
                  fontSize: '0.86rem',
                  color: 'var(--grey-mid)',
                  lineHeight: 1.65,
                  margin: 0
                }}>
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
