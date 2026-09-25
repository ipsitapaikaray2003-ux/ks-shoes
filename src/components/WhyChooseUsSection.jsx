import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, ShieldCheck, Cpu, TrendingUp, Users, Truck, Award, Layers, ArrowRight } from 'lucide-react';

export default function WhyChooseUsSection() {
  const differentiators = [
    {
      icon: <Factory size={24} />,
      title: 'Advanced Manufacturing',
      desc: 'Computerized Swiss cutting tables, Italian automated conveyor lasting, and multi-axis hydraulic presses for uniform bonding.'
    },
    {
      icon: <ShieldCheck size={24} />,
      title: 'Consistent Quality Standards',
      desc: '100% in-line inspection and laboratory flexing machines ensuring zero defect variance across production runs (AQL 1.0).'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Custom Tooling & Moulds',
      desc: 'Complete proprietary mold engineering for custom outsoles, dual-density EVA midsoles, and unique brand lasts.'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Scalable Production',
      desc: 'Pilot batches starting from a low 200 pairs for startups, scaling seamlessly to 100,000+ units for retail chains.'
    },
    {
      icon: <Users size={24} />,
      title: 'Experienced Footwear Team',
      desc: 'Decades of master Agra lasting craftsmanship combined with specialized footwear CAD designers and materials engineers.'
    },
    {
      icon: <Truck size={24} />,
      title: 'Reliable Global Logistics',
      desc: 'Export-certified palletized packing, complete commercial customs documentation, and dependable pan-India & global freight.'
    },
    {
      icon: <Award size={24} />,
      title: 'Global Compliance',
      desc: 'ISO 9001:2015 certified, LWG Gold leather sourcing, SATRA member testing lab, and REACH chemical safety verified.'
    },
    {
      icon: <Layers size={24} />,
      title: 'Turnkey Private Labeling',
      desc: 'From custom embossed monograms to branded tissue wrap, luxury rigid gift boxes, and barcoded retail packaging.'
    }
  ];

  return (
    <section className="section" id="why-choose-us" style={{ background: '#FFFFFF', padding: '100px 0', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
      <div className="container-lg">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 60px' }}>
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
            The KS Shoes Advantage
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.6vw, 3rem)',
            fontFamily: 'var(--font-accent)',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: '#121212',
            margin: 0
          }}>
            Why Brands Partner With Us
          </h2>
          <p style={{ fontSize: '0.96rem', color: 'var(--grey-mid)', marginTop: '12px', lineHeight: 1.65 }}>
            We provide footwear brands with a reliable, transparent, and technologically advanced manufacturing backbone.
          </p>
        </div>

        {/* 8 Differentiators Grid (4x2) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '50px'
        }}>
          {differentiators.map((diff, idx) => (
            <div 
              key={idx} 
              className="b2b-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '14px'
              }}
            >
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
                {diff.icon}
              </div>

              <h4 style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '1.15rem',
                fontWeight: 800,
                color: '#121212',
                textTransform: 'uppercase',
                margin: 0
              }}>
                {diff.title}
              </h4>

              <p style={{
                fontSize: '0.86rem',
                color: 'var(--grey-mid)',
                lineHeight: 1.6,
                margin: 0
              }}>
                {diff.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
