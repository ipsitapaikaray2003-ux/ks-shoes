import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function CorporateGiftingPage({ onShowToast }) {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    quantity: '250',
    occasion: 'executive-summit',
    notes: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [activeTier, setActiveTier] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onShowToast('Thank you! Your Corporate Gifting inquiry has been submitted. Our executive account manager will contact you within 24 hours.');
      setFormData({
        company: '',
        name: '',
        email: '',
        phone: '',
        quantity: '250',
        occasion: 'executive-summit',
        notes: ''
      });
    }, 800);
  };

  const giftTiers = [
    {
      title: 'Prestige Executive Box',
      badge: 'C-Suite & VIPs',
      moq: '150 Sets',
      discount: 'Includes Free Logo Deboss Tooling',
      includes: [
        'Custom Minimalist Leather-Accent Court Sneakers',
        'Custom Molded Memory Foam Ergonomic Insoles',
        'Cotton Dust Bags & Premium Sneaker Care Wipes',
        'Gold-Foil Rigid Magnetic Presentation Box',
        'Custom Debossed Company Crest on Sneaker Heel'
      ]
    },
    {
      title: 'Modern D2C Corporate Sneaker Set',
      badge: 'Teams & Conferences',
      moq: '200 Sets',
      discount: '10% Tier Volume Incentive',
      includes: [
        'Bespoke Court Sneakers with Corporate Color Accents',
        'Custom Woven Tongue Label with Brand Logo',
        'Extra Two-Tone Laces & Cotton Dust Bag',
        'Matte Soft-Touch Embossed Presentation Carton',
        'Individual Employee Size Survey Management'
      ]
    },
    {
      title: 'Hospitality & Aviation Uniform Suite',
      badge: 'Uniform Programs',
      moq: '300 Pairs',
      discount: '18% Institutional Contract Pricing',
      includes: [
        'All-Day Anti-Fatigue Orthotic Insole Footwear',
        'Slip-Resistant Oil & Water Repellent Outsoles',
        'Durable Scuff-Guard Action Leather Uppers',
        'Standardized Sizing & Multi-Branch Dispatch',
        'ISO 9001 Tested for Rigorous Everyday Wear'
      ]
    }
  ];

  return (
    <div className="corporate-gifting-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Corporate &amp; Industrial Gifting</span>
          </div>
          <h1>Luxury Footwear for <span className="gold-text">Corporate Milestones</span></h1>
          <p>
            Move beyond generic pens and electronics. Elevate your annual executive summits, dealer conferences, and corporate milestones with custom-branded luxury footwear gift suites.
          </p>
        </div>
      </section>

      {/* Showcase Banner */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '60px' }}>
            <div>
              <div className="section-label">Turnkey Executive Gifting</div>
              <h2>An Unboxing Experience That <span className="gold-text">Commands Respect</span></h2>
              <div className="divider-short"></div>
              <p style={{ color: '#555555', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                At KS Enterprise, we specialize in complete turnkey footwear gifting. Every gift suite is assembled in rigid magnetic presentation boxes lined with personalized silk or cotton dust wrapping, customized cedar shoe trees, and shoe care accessories.
              </p>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '30px' }}>
                We remove the logistical hassle by offering size survey management, ensuring every executive and VIP client receives their exact size in a beautifully personalized package.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '36px' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--gold-primary)', fontSize: '1.2rem' }}>★</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--white-90)' }}>100% Genuine Full-Grain Leather</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--gold-primary)', fontSize: '1.2rem' }}>★</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--white-90)' }}>Custom Debossed Corporate Crests</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--gold-primary)', fontSize: '1.2rem' }}>★</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--white-90)' }}>Cedar Shoe Trees Included</span>
                </div>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <span style={{ color: 'var(--gold-primary)', fontSize: '1.2rem' }}>★</span>
                  <span style={{ fontSize: '0.88rem', color: 'var(--white-90)' }}>Multi-Location Pan-India Delivery</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a 
                  href="#gifting-form" 
                  className="btn btn-primary btn-sm"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('gifting-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Request Proposal
                </a>
                <a 
                  href="https://wa.me/911234567890?text=Hello%20KS%20Enterprise%2C%20I%20would%20like%20to%20inquire%20about%20corporate%20footwear%20gifting%20suites." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-outline btn-sm"
                >
                  Inquire on WhatsApp
                </a>
              </div>
            </div>

            <div>
              <div className="card-interactive-luxury" style={{ borderRadius: 'var(--rad-xl)', overflow: 'hidden' }}>
                <img 
                  src="/assets/images/corporate_gifting.jpg" 
                  alt="KS Enterprise Luxury Corporate Gifting Suite" 
                  style={{ width: '100%', height: '480px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gift Suite Packages */}
      <section className="section" style={{ background: 'var(--black-main)' }}>
        <div className="container">
          <div className="section-head text-center">
            <div className="section-label" style={{ justifyContent: 'center' }}>Curated Gifting Tiers</div>
            <h2>Tailored Packages for <span className="gold-text">Every Occasion</span></h2>
            <p style={{ maxWidth: '650px', margin: '0 auto' }}>
              From prestigious C-suite executive boxes to uniform footwear programs for hospitality and airlines.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '28px' }}>
            {giftTiers.map((tier, idx) => (
              <div 
                key={idx} 
                className={`card-interactive-luxury ${activeTier === idx ? 'gold-glow-hover' : ''}`} 
                style={{
                  padding: '36px 28px',
                  borderColor: activeTier === idx ? 'var(--gold-primary)' : 'var(--black-border)',
                  background: 'var(--grad-card)'
                }}
                onClick={() => setActiveTier(idx)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="tag" style={{ color: 'var(--gold-light)' }}>
                    MOQ: {tier.moq}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: 'var(--gold-primary)', fontWeight: 700 }}>
                    {tier.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '8px', color: '#121212' }}>
                  {tier.title}
                </h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--gold-light)', marginBottom: '20px', fontWeight: 600 }}>
                  ⚡ {tier.discount}
                </div>

                <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                  {tier.includes.map((inc, iIdx) => (
                    <li key={iIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.85rem', color: '#555555' }}>
                      <span style={{ color: 'var(--gold-primary)' }}>✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <a 
                  href="#gifting-form" 
                  className="btn btn-outline btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={(e) => {
                    e.preventDefault();
                    setFormData(prev => ({ ...prev, occasion: tier.badge.toLowerCase().replace(/\s+/g, '-') }));
                    document.getElementById('gifting-form')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Select This Package
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Gifting Inquiry Form */}
      <section className="section" id="gifting-form">
        <div className="container" style={{ maxWidth: '820px' }}>
          <div className="card-interactive-luxury" style={{ padding: 'clamp(32px, 5vw, 52px)', background: 'var(--grad-card)' }}>
            <div className="section-head text-center" style={{ marginBottom: '32px' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Corporate Quotation Desk</div>
              <h2>Request Corporate <span className="gold-text">Gifting Proposal</span></h2>
              <p style={{ maxWidth: '580px', margin: '0 auto' }}>
                Share your target event date, approximate headcount, and gifting requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
                <div className="form-group">
                  <label className="form-label">Company / Organization Name</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Apex Conglomerate" 
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Contact Person Name</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Rajesh Singhal" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
                <div className="form-group">
                  <label className="form-label">Work Email</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="rajesh@company.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp</label>
                  <input 
                    type="tel" 
                    className="form-input" 
                    placeholder="+91 12345 67890" 
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required 
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px' }}>
                <div className="form-group">
                  <label className="form-label">Estimated Set Quantity</label>
                  <select 
                    className="form-select"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  >
                    <option value="150">150 – 250 Sets (Leadership / VIP Summit)</option>
                    <option value="250">250 – 500 Sets (Annual Conference)</option>
                    <option value="500">500 – 1,000+ Sets (Enterprise Milestone)</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Occasion / Use Case</label>
                  <select 
                    className="form-select"
                    value={formData.occasion}
                    onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                  >
                    <option value="executive-summit">Executive Leadership Summit</option>
                    <option value="dealer-conference">Dealer &amp; Partner Conference</option>
                    <option value="employee-milestone">Employee Milestone / Long Service</option>
                    <option value="hospitality-uniform">Hospitality &amp; Crew Uniform Footwear</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Event Timeline &amp; Customization Notes</label>
                <textarea 
                  className="form-textarea" 
                  rows={4}
                  placeholder="Target delivery date, branding requirements (e.g. debossed logo, custom message card), or special style preferences."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: '100%', justifyContent: 'center' }}
                disabled={submitting}
              >
                {submitting ? 'Submitting Corporate RFQ...' : 'Submit Corporate Gifting RFQ'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
