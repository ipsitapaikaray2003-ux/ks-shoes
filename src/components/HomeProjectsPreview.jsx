import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomeProjectsPreview() {
  const cases = [
    {
      id: 1,
      title: 'Veloce Athletic Footwear',
      category: 'Performance Running',
      image: '/assets/images/slider_running_sneaker.jpg',
      requirement: 'Launch a high-rebound athletic running shoe in 60 days with an initial low MOQ of 300 pairs.',
      solution: 'Engineered custom jacquard mesh uppers with pre-tooled high-rebound dual-density EVA soles.',
      result: 'Delivered in 4 weeks. Scaled to 18,000 pairs over 12 months with 0.12% return rate.'
    },
    {
      id: 2,
      title: 'Aurelius Minimalist Court Sneaker',
      category: 'Bespoke Leather Sneaker',
      image: '/assets/images/slider_court_sneaker.jpg',
      requirement: 'Luxury full-grain calfskin court sneaker with 360° stitched soles and debossed branding for European retail.',
      solution: 'Sourced LWG Gold certified Italian leather with computerized precision CNC clicking and hand-burnishing.',
      result: 'Recurring 2,500 pairs quarterly across 14 European luxury stockists.'
    }
  ];

  return (
    <section className="section" id="case-studies" style={{ background: '#FFFFFF', padding: '100px 0', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
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
              Client Deployments &amp; Case Studies
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.6vw, 3rem)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#121212',
              margin: 0
            }}>
              Featured Projects
            </h2>
          </div>

          <Link to="/projects" className="btn btn-outline" style={{ padding: '10px 22px', fontSize: '0.78rem' }}>
            <span>View All Case Studies</span>
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* 2 Featured Editorial Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '36px'
        }}>
          {cases.map((c) => (
            <div 
              key={c.id}
              className="b2b-card"
              style={{ padding: '36px', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ position: 'relative', height: '260px', borderRadius: '10px', overflow: 'hidden', marginBottom: '24px' }}>
                <img 
                  src={c.image} 
                  alt={c.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  padding: '4px 12px',
                  borderRadius: 'var(--rad-pill)',
                  background: 'rgba(7, 9, 13, 0.88)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 700,
                  color: 'var(--gold-light)'
                }}>
                  {c.category}
                </div>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '1.35rem',
                fontWeight: 800,
                color: '#121212',
                textTransform: 'uppercase',
                marginBottom: '18px'
              }}>
                {c.title}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', flex: 1 }}>
                <div>
                  <strong style={{ color: 'var(--accent-bronze)', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>
                    Requirement:
                  </strong>
                  <p style={{ fontSize: '0.86rem', color: 'var(--grey-mid)', margin: '2px 0 0' }}>{c.requirement}</p>
                </div>
                <div>
                  <strong style={{ color: 'var(--gold-light)', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>
                    Engineered Solution:
                  </strong>
                  <p style={{ fontSize: '0.86rem', color: '#121212', margin: '2px 0 0' }}>{c.solution}</p>
                </div>
                <div>
                  <strong style={{ color: '#22c55e', fontSize: '0.74rem', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block' }}>
                    Result:
                  </strong>
                  <p style={{ fontSize: '0.86rem', color: 'var(--grey-mid)', margin: '2px 0 0' }}>{c.result}</p>
                </div>
              </div>

              <Link 
                to="/projects"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.78rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 700,
                  color: 'var(--gold-light)',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(0, 0, 0, 0.08)'
                }}
              >
                <span>Read Full Case Study</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
