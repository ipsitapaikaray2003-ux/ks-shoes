import React from 'react';
import { Link } from 'react-router-dom';

export default function WhyChooseUsSection() {
  const reasons = [
    {
      icon: '🎯',
      title: 'End-to-End Service',
      desc: 'From initial design sketches and tech packs to bulk lasting, custom boxing, and doorstep delivery.'
    },
    {
      icon: '🚀',
      title: 'Low MOQ for Startups',
      desc: 'Launch without excessive inventory debt with accessible low MOQ tiers starting from 200–300 pairs.'
    },
    {
      icon: '🏭',
      title: 'Bulk Production Capability',
      desc: 'High-speed automated lasting conveyor lines delivering consistent quality at scalable bulk volumes.'
    },
    {
      icon: '🎨',
      title: 'Expert Design Support',
      desc: 'In-house footwear designers, material engineers, and pattern masters assisting your product development.'
    },
    {
      icon: '🏷️',
      title: 'Private Label & Branding Solutions',
      desc: 'Full private label support including hot foil stamping, custom woven tongues, and bespoke rigid shoe boxes.'
    },
    {
      icon: '⏱️',
      title: 'Transparent Process & Timelines',
      desc: 'Live WhatsApp factory production updates, sample dispatch in 7 days, and guaranteed shipment dates.'
    }
  ];

  return (
    <section className="section" id="why-choose-us" style={{ background: 'var(--black-main)', borderTop: '1px solid var(--black-border)' }}>
      <div className="container">
        <div className="section-head text-center" style={{ maxWidth: '800px', margin: '0 auto 48px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>Unmatched Footwear Manufacturing Edge</div>
          <h2>Why Choose <span className="gold-text">KS Enterprise?</span></h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--white-70)', lineHeight: '1.8' }}>
            We don't just manufacture shoes — we help build footwear brands. Our Agra manufacturing plant combines classical artisan heritage with modern scalable lasting.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '44px'
        }}>
          {reasons.map((item, idx) => (
            <div 
              key={idx} 
              className="card-glass" 
              style={{
                padding: '32px 28px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                borderRadius: '16px',
                background: 'var(--black-card)',
                border: '1px solid var(--black-border)'
              }}
            >
              <div style={{
                fontSize: '2rem',
                lineHeight: 1,
                padding: '12px',
                borderRadius: '12px',
                background: 'rgba(201, 168, 76, 0.1)',
                border: '1px solid rgba(201, 168, 76, 0.25)',
                flexShrink: 0
              }}>
                {item.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--white)', marginBottom: '8px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--grey-mid)', lineHeight: '1.7', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(20,16,8,0.9) 0%, rgba(30,24,12,0.9) 100%)',
          border: '1px solid rgba(201, 168, 76, 0.3)',
          borderRadius: '16px',
          padding: '28px 24px',
          maxWidth: '750px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <div style={{ textAlign: 'left' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--white)', marginBottom: '4px' }}>
              Ready to Launch Your Footwear Brand?
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', margin: 0 }}>
              Speak directly with our Agra production team today.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '12px 28px' }}>
            Get Started Now →
          </Link>
        </div>
      </div>
    </section>
  );
}
