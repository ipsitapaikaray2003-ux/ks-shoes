import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomeServicesSection() {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      num: '01',
      title: 'OEM Manufacturing',
      headline: 'Full-Spec Contract Manufacturing According to Your Tech Packs',
      desc: 'We execute your precise engineering specifications with zero variance. From client-supplied lasts and tooling to global sourcing of authorized componentries, our Agra plant operates as your dedicated offshore production facility.',
      deliverables: ['Custom Last Replication', 'Client Material Integration', 'AQL 1.0 Factory QA Audit', 'Direct Global Freight Loading'],
      image: '/assets/images/hightech_factory_cinematic.jpg'
    },
    {
      num: '02',
      title: 'Private Label',
      headline: 'White-Label Turnkey Footwear for High-Growth Brands',
      desc: 'Select from our library of commercially proven athletic, court sneaker, and lifestyle lasts. Customize leathers, technical textiles, heel counters, debossed tongue patches, and insole logos for immediate market deployment.',
      deliverables: ['Pre-Tested Proven Silhouettes', 'Custom Branding & Monograms', 'Low 200 Pairs Entry MOQ', 'Rapid 3-Week Production Cycle'],
      image: '/assets/images/slider_court_sneaker.jpg'
    },
    {
      num: '03',
      title: 'Custom Footwear Development',
      headline: 'Proprietary Sole Tooling, CAD Lasts & Ergonomic Formers',
      desc: 'Engineering exclusive footwear from the ground up. We create proprietary outsole injection moulds, computerized Strobel patterns, and custom TPU heel stabilizers that remain the exclusive intellectual property of your brand.',
      deliverables: ['Exclusive Outsole Mould Tooling', 'Anatomical Last Development', 'Biomechanics & Tread Testing', 'IP & Design Protection Agreement'],
      image: '/assets/images/craft_leather_cut.jpg'
    },
    {
      num: '04',
      title: 'Product Development',
      headline: 'From Initial Design Sketches to Fully Digitized Tech Packs',
      desc: 'Our design and engineering team collaborates with your creative directors to translate conceptual mood boards into digitized 2D/3D tech packs, grading charts, and structural bill of materials (BOM).',
      deliverables: ['3D CAD Last Modeling', 'Complete Tech Pack & BOM Generation', 'Colorway & CMF Matrix', 'Material Cost Optimization'],
      image: '/assets/images/craft_stitching.jpg'
    },
    {
      num: '05',
      title: 'Sampling',
      headline: 'Rapid Physical Prototype Turnaround in 7 Business Days',
      desc: 'Verify aesthetics, leather hand-feel, arch ergonomics, and walking comfort with physical samples before authorizing production tooling. We iterate until the fit is completely perfected.',
      deliverables: ['7-Day Sample Turnaround', 'Wear-Test Fit Validation', 'Physical Leather Swatch Kits', 'Pre-Production Golden Sample Sign-Off'],
      image: '/assets/images/craft_lasting.jpg'
    },
    {
      num: '06',
      title: 'Bulk Manufacturing',
      headline: 'Scalable Production Capacity Exceeding 10,000 Pairs Daily',
      desc: 'Our modern Agra facility is engineered for volume reliability. Automated computerized cutting tables, multi-station Italian lasting tracks, and continuous infrared sole curing ensure flawless consistency across runs of 100,000+ pairs.',
      deliverables: ['10,000+ Daily Capacity', 'Automated Cutting & Conveyor Lines', 'Continuous In-Line Inspection', 'Guaranteed Production Timelines'],
      image: '/assets/images/hightech_factory_bright.jpg'
    },
    {
      num: '07',
      title: 'Quality Control',
      headline: 'In-House SATRA Certified Mechanical & Physical Testing',
      desc: 'Every production lot is subjected to mechanical sole flex stress tests, Martindale rub cycles, bond peel strength testing, and 100% individual optical defect auditing under calibrated 1000-lux inspection lighting.',
      deliverables: ['100,000 Sole Flex Verification', 'Martindale Upper Abrasion Testing', 'SATRA Lab Audit Reports', 'Zero Defect Tolerance Policy'],
      image: '/assets/images/factory.jpg'
    },
    {
      num: '08',
      title: 'Packaging',
      headline: 'Rigid Drawer Boxes, Embossed Foiling & Barcode Integration',
      desc: 'Complete your brand presentation with custom FSC-certified drawer boxes, debossed magnetic lids, silk-touch dust bags, moisture-protective silica wrapping, and automated EAN/UPC barcoding ready for global retail distribution.',
      deliverables: ['Custom Branded Rigid Boxes', 'Embossed Cotton Dust Bags', 'Retail EAN/UPC Barcoding', 'Amazon FBA Ready Export Cartons'],
      image: '/assets/images/corporate_gifting.jpg'
    }
  ];

  const current = services[activeService];

  return (
    <section 
      className="section" 
      id="services" 
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
              Capabilities &amp; Solutions • B2B Services
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
              Manufacturing Services
            </h2>
          </div>

          <Link 
            to="/services" 
            className="btn btn-outline" 
            style={{
              padding: '12px 24px',
              fontSize: '0.8rem',
              borderRadius: '4px',
              borderColor: 'rgba(245, 243, 239, 0.25)',
              color: '#121212'
            }}
          >
            <span>Explore All Capabilities</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Interactive Editorial Service Navigator */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Interactive Service List with Large Typography */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {services.map((srv, idx) => {
              const isActive = activeService === idx;
              return (
                <div
                  key={srv.num}
                  onClick={() => setActiveService(idx)}
                  style={{
                    padding: '18px 24px',
                    borderRadius: '4px',
                    background: isActive ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
                    border: `1px solid ${isActive ? 'rgba(197, 160, 89, 0.4)' : 'rgba(245, 243, 239, 0.05)'}`,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'rgba(245, 243, 239, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.borderColor = 'rgba(245, 243, 239, 0.05)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{
                      fontFamily: 'var(--font-accent)',
                      fontSize: '1rem',
                      fontWeight: 800,
                      color: isActive ? 'var(--gold-light)' : 'rgba(245, 243, 239, 0.35)'
                    }}>
                      {srv.num}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-accent)',
                      fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: isActive ? '#121212' : 'rgba(245, 243, 239, 0.7)',
                      letterSpacing: '0.02em',
                      margin: 0
                    }}>
                      {srv.title}
                    </h3>
                  </div>

                  <ArrowRight 
                    size={18} 
                    color={isActive ? 'var(--gold-light)' : 'rgba(245, 243, 239, 0.2)'}
                    style={{
                      transform: isActive ? 'translateX(4px)' : 'none',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Right Column: Large Image-Led Editorial Focus */}
          <div 
            style={{
              position: 'relative',
              borderRadius: '6px',
              overflow: 'hidden',
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.7)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Large Image */}
            <div style={{ position: 'relative', height: '340px', overflow: 'hidden' }}>
              <img 
                src={current.image} 
                alt={current.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: 'brightness(0.9) contrast(1.08)',
                  transition: 'transform 0.8s ease'
                }}
              />
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
                textTransform: 'uppercase'
              }}>
                Service {current.num}
              </div>
            </div>

            {/* Service Editorial Content */}
            <div style={{ padding: '36px' }}>
              <h4 style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '1.45rem',
                fontWeight: 800,
                color: '#121212',
                textTransform: 'uppercase',
                margin: '0 0 14px 0'
              }}>
                {current.headline}
              </h4>

              <p style={{
                fontSize: '0.94rem',
                color: 'var(--grey-mid)',
                lineHeight: 1.7,
                marginBottom: '24px'
              }}>
                {current.desc}
              </p>

              {/* Deliverables Bullet List */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '12px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(0, 0, 0, 0.08)',
                marginBottom: '28px'
              }}>
                {current.deliverables.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <CheckCircle2 size={15} color="var(--gold-light)" style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: '0.84rem', color: 'rgba(245, 243, 239, 0.85)' }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact-rfq"
                className="btn btn-primary"
                style={{ padding: '12px 26px', fontSize: '0.82rem', borderRadius: '4px' }}
              >
                <span>Consult On {current.title}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
