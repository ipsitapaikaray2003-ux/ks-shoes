import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function HomeCaseStudiesSection() {
  const projects = [
    {
      id: 1,
      title: 'Veloce Kinetic Athletic Runner',
      category: 'Performance Running',
      image: '/assets/images/slider_running_sneaker.jpg',
      specs: 'UK 6-12 • Dual-Density Nitrogen Foam • 260g',
      requirement: 'A high-growth North American athletic label required a marathon-grade running shoe engineered with customized energy-return foam and breathable seamless jacquard upper, needing an initial pilot run of 300 pairs delivered within 60 days before scaling to retail volume.',
      solution: 'Developed a proprietary nitrogen-infused phylon formulation offering 68% energy return. Engineered precision 3D CAD anatomical lasts and utilized automated Swiss CNC laser cutting for zero-tolerance upper alignment, completing pilot testing in 24 days.'
    },
    {
      id: 2,
      title: 'Aurelius Minimalist Court Sneaker',
      category: 'Bespoke Luxury Sneaker',
      image: '/assets/images/slider_court_sneaker.jpg',
      specs: 'UK 5-13 • Full-Grain Italian Calfskin • Margom Sole',
      requirement: 'A European luxury boutique brand requested an uncompromised minimalist court sneaker featuring LWG Gold certified Italian nappa leather, 360-degree sidewall stitched Margom-style cupsole, and discreet debossed tongue branding with strict zero cosmetic flaw tolerances.',
      solution: 'Secured direct Italian tanneries for 1.4mm full-grain hides. Implemented bench-artisan Strobel lasting paired with computerized high-frequency logo debossing and 100% individual optical tunnel inspections under AQL 1.0 acceptance standards.'
    },
    {
      id: 3,
      title: 'Titan Armor Pro Safety Boot',
      category: 'Certified Industrial Safety',
      image: '/assets/images/factory.jpg',
      specs: 'UK 4-14 • EN ISO 20345 S3 • Kevlar Midplate',
      requirement: 'A global logistics and warehousing enterprise needed 15,000 pairs of heavy-duty safety boots meeting EN ISO 20345 European standards, featuring metal-free composite toe caps, puncture-resistant Kevlar midplates, and oil-proof slip-resistant soles.',
      solution: 'Formulated dual-density polyurethane direct injection outsoles tested to withstand 200J impact and 15kN compression. Successfully delivered 15,000 units on schedule with full SATRA laboratory batch certification documentation.'
    }
  ];

  return (
    <section 
      className="section" 
      id="case-studies" 
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
              Proven Deployments • Editorial Showcase
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
              Manufacturing Case Studies
            </h2>
          </div>

          <Link 
            to="/projects" 
            className="btn btn-outline" 
            style={{
              padding: '12px 24px',
              fontSize: '0.8rem',
              borderRadius: '4px',
              borderColor: 'rgba(245, 243, 239, 0.25)',
              color: '#121212'
            }}
          >
            <span>View All Client Case Studies</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Editorial Project Showcase: Magazine-Style, High Visual Focus on Footwear */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {projects.map((proj, idx) => (
            <div 
              key={proj.id}
              className="b2b-card"
              style={{
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '1.15fr 1fr' : '1fr 1.15fr',
                gap: '40px',
                padding: '40px',
                background: '#FFFFFF',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '6px',
                alignItems: 'center'
              }}
            >
              {/* Large Footwear Image Frame */}
              <div 
                className="case-study-hero-frame"
                style={{
                  order: idx % 2 === 0 ? 1 : 2,
                  height: '420px'
                }}
              >
                <img 
                  src={proj.image} 
                  alt={proj.title} 
                  className="case-study-hero-img"
                  style={{ height: '100%' }}
                />
                
                {/* Category Badge */}
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  padding: '6px 14px',
                  background: 'rgba(7, 9, 13, 0.88)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(197, 160, 89, 0.35)',
                  borderRadius: 'var(--rad-pill)',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 700,
                  color: 'var(--gold-light)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  {proj.category}
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '18px',
                  left: '20px',
                  fontSize: '0.74rem',
                  fontFamily: 'var(--font-accent)',
                  color: 'rgba(245, 243, 239, 0.7)',
                  background: 'rgba(7, 9, 13, 0.75)',
                  padding: '4px 10px',
                  borderRadius: '2px'
                }}>
                  {proj.specs}
                </div>
              </div>

              {/* Editorial Content: Category, Manufacturing Requirement, Solution */}
              <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                <span style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: 'var(--accent-bronze)',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '10px'
                }}>
                  Project Profile 0{proj.id}
                </span>

                <h3 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: 'clamp(1.6rem, 2.4vw, 2.2rem)',
                  fontWeight: 900,
                  textTransform: 'uppercase',
                  color: '#121212',
                  letterSpacing: '-0.01em',
                  margin: '0 0 24px 0',
                  lineHeight: 1.15
                }}>
                  {proj.title}
                </h3>

                {/* Manufacturing Requirement */}
                <div style={{
                  marginBottom: '20px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
                }}>
                  <strong style={{
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    color: 'var(--gold-light)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    Manufacturing Requirement:
                  </strong>
                  <p style={{
                    fontSize: '0.92rem',
                    color: 'var(--grey-mid)',
                    lineHeight: 1.68,
                    margin: 0
                  }}>
                    {proj.requirement}
                  </p>
                </div>

                {/* Solution */}
                <div style={{ marginBottom: '28px' }}>
                  <strong style={{
                    fontSize: '0.76rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 800,
                    letterSpacing: '0.1em',
                    color: '#22c55e',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '8px'
                  }}>
                    Engineered Solution:
                  </strong>
                  <p style={{
                    fontSize: '0.92rem',
                    color: '#121212',
                    lineHeight: 1.68,
                    margin: 0
                  }}>
                    {proj.solution}
                  </p>
                </div>

                <Link 
                  to="/projects"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 700,
                    color: 'var(--gold-light)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    textDecoration: 'none'
                  }}
                >
                  <span>Read Full Technical Case Study</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
