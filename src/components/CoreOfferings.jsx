import React from 'react';
import { Link } from 'react-router-dom';

export default function CoreOfferings() {
  const offerings = [
    {
      icon: '✨',
      title: 'Custom Branding',
      desc: 'We add your logo and branding to every pair, helping you launch your own private label shoe with confidence.',
      linkText: 'Explore Brand Concept',
      linkUrl: '/services#brand-concept'
    },
    {
      icon: '📦',
      title: 'Custom Packing',
      desc: 'From custom luxury shoe boxes to branded hangtags and dust bags, we deliver complete packaging built around your brand.',
      linkText: 'View Packaging Suite',
      linkUrl: '/corporate-gifting'
    },
    {
      icon: '🚚',
      title: 'Doorstep Delivery',
      desc: 'Reliable pan-India shoe delivery and global port-to-port export — your custom footwear reaches you safely, wherever you are.',
      linkText: 'Shipping & Logistics',
      linkUrl: '/faq'
    },
    {
      icon: '💬',
      title: 'Free Consultation',
      desc: 'Talk to our engineering team and get expert guidance to start your shoe brand — no cost, no obligation.',
      linkText: 'Book Free Session',
      linkUrl: '/contact'
    }
  ];

  return (
    <section className="section" id="offerings" style={{ background: 'var(--black-deep)' }}>
      <div className="container">
        <div className="section-head">
          <div className="section-label" style={{ justifyContent: 'center' }}>Turnkey Footwear Solutions</div>
          <h2>Discover What <span className="gold-text">KS Enterprise Offers</span></h2>
          <p style={{ maxWidth: '600px', margin: '0 auto' }}>
            We provide everything you need to launch and scale your shoe brand from initial concept to doorstep fulfillment.
          </p>
        </div>

        <div className="grid-4">
          {offerings.map((item, idx) => (
            <div key={idx} className="card-glass" style={{ padding: '32px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '2.2rem', marginBottom: '16px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--white)', marginBottom: '12px', fontFamily: 'var(--font-accent)' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.88rem', color: 'var(--grey-mid)', lineHeight: '1.7', marginBottom: '24px' }}>
                  {item.desc}
                </p>
              </div>

              <Link 
                to={item.linkUrl} 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  color: 'var(--gold-primary)',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em'
                }}
              >
                <span>{item.linkText}</span>
                <span>›</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
