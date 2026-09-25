import React from 'react';
import { Rocket, Zap, Store, ShieldCheck, Gift, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WhoWeWorkWith() {
  const industries = [
    {
      icon: <Rocket size={22} />,
      title: 'Footwear Startups & D2C Brands',
      tag: 'Low MOQ • Fast Launch',
      desc: 'Launch without excessive inventory debt with low minimum order quantities starting from 200 pairs. Rapid 7-day prototype turnaround and turnkey branding.'
    },
    {
      icon: <Zap size={22} />,
      title: 'Athletic & Performance Labels',
      tag: 'Technical Lasts & Polymers',
      desc: 'Engineered jacquard weaves, custom TPU torsion bars, and high-rebound dual-density EVA outsoles built for marathon endurance and daily sports.'
    },
    {
      icon: <Store size={22} />,
      title: 'Retail Chains & Distributors',
      tag: 'High Capacity • Scalable',
      desc: 'Our 65,000 sq. ft. campus outputs up to 10,000 pairs daily, delivering consistent sizing runs, Barcoded packaging, and scheduled national replenishment.'
    },
    {
      icon: <ShieldCheck size={22} />,
      title: 'Industrial Safety & Workwear',
      tag: 'EN ISO 20345 Certified',
      desc: 'Heavy-duty steel/composite toe protection, puncture-resistant Kevlar midplates, and oil/acid-resistant soles for warehousing, aviation, and industrial facilities.'
    },
    {
      icon: <Gift size={22} />,
      title: 'Corporate & VIP Gifting',
      tag: 'Rigid Luxury Packaging',
      desc: 'Bespoke corporate sneaker suites presented in gold-foil stamped rigid magnetic boxes with custom company crests, personalized insoles, and custom laces.'
    }
  ];

  return (
    <section className="section" id="industries" style={{ background: '#FFFFFF', padding: '100px 0', borderBottom: '1px solid rgba(0, 0, 0, 0.05)' }}>
      <div className="container-lg">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 55px' }}>
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
            Strategic Partnerships
          </span>
          <h2 style={{
            fontSize: 'clamp(2rem, 3.6vw, 3rem)',
            fontFamily: 'var(--font-accent)',
            fontWeight: 900,
            textTransform: 'uppercase',
            color: '#121212',
            margin: 0
          }}>
            Industries &amp; Brands We Serve
          </h2>
          <p style={{ fontSize: '0.96rem', color: 'var(--grey-mid)', marginTop: '12px', lineHeight: 1.65 }}>
            From emerging disruptors to established retail conglomerates, KS Shoes configures production lines to match your commercial requirements.
          </p>
        </div>

        {/* 5 Cards Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {industries.map((item, idx) => (
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
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(197, 160, 89, 0.1)',
                    border: '1px solid rgba(197, 160, 89, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-light)'
                  }}>
                    {item.icon}
                  </div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 700,
                    color: 'var(--accent-bronze)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em'
                  }}>
                    {item.tag}
                  </span>
                </div>

                <h4 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#121212',
                  textTransform: 'uppercase',
                  marginBottom: '10px'
                }}>
                  {item.title}
                </h4>

                <p style={{
                  fontSize: '0.86rem',
                  color: 'var(--grey-mid)',
                  lineHeight: 1.65,
                  margin: 0
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
