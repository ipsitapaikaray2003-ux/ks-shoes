import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, Cpu, Layers, ShieldCheck, ArrowRight, Cog, Gauge, Compass } from 'lucide-react';

export default function HomeCapabilitiesSection() {
  const capabilities = [
    {
      icon: <Cpu size={24} />,
      title: 'Computerized CNC Cutting',
      desc: 'Multi-ply automatic nesting and Swiss CNC laser clicking eliminating human cutting error and optimizing hide yield with sub-millimeter precision.',
      badge: 'Zero Tolerance'
    },
    {
      icon: <Cog size={24} />,
      title: 'Italian Conveyor Lasting',
      desc: 'Multi-station computerized lasting conveyors ensuring consistent tension across toe, waist, and seat for athletic sneakers and lifestyle shoes.',
      badge: 'Uniform Spring'
    },
    {
      icon: <Layers size={24} />,
      title: 'EVA Phylon Sole Molding',
      desc: 'In-house injection moulding of dual-density high-rebound EVA midsoles, pneumatic rubber vulcanization, and custom sole tooling capabilities.',
      badge: 'Custom Tooling'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'SATRA In-House QA Lab',
      desc: 'Comprehensive mechanical test laboratory running 100,000-cycle sole flexion, Martindale abrasion, and bond peel strength tests on every production batch.',
      badge: 'AQL 1.0 Audit'
    }
  ];

  return (
    <section className="section" id="capabilities" style={{ background: '#FFFFFF', padding: '100px 0', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
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
              Factory Infrastructure &amp; Technical Capabilities
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.6vw, 3rem)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#121212',
              margin: 0
            }}>
              Engineering at Scale
            </h2>
          </div>

          <Link to="/manufacturing" className="btn btn-outline" style={{ padding: '10px 22px', fontSize: '0.78rem' }}>
            <span>Full Facility Breakdown</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 4 Core Capabilities Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {capabilities.map((cap, idx) => (
            <div 
              key={idx}
              className="b2b-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '10px',
                    background: 'rgba(197, 160, 89, 0.1)',
                    border: '1px solid rgba(197, 160, 89, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-light)'
                  }}>
                    {cap.icon}
                  </div>
                  <span style={{
                    fontSize: '0.68rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '4px 10px',
                    borderRadius: 'var(--rad-pill)',
                    background: 'rgba(255,255,255,0.04)',
                    color: 'var(--accent-bronze)'
                  }}>
                    {cap.badge}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '1.2rem',
                  fontWeight: 800,
                  color: '#121212',
                  textTransform: 'uppercase',
                  marginBottom: '12px'
                }}>
                  {cap.title}
                </h3>

                <p style={{
                  fontSize: '0.86rem',
                  color: 'var(--grey-mid)',
                  lineHeight: 1.65,
                  margin: 0
                }}>
                  {cap.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
