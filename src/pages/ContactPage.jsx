import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function ContactPage({ onShowToast }) {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    category: 'sneakers',
    volume: '200-500',
    type: 'rfq',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const product = params.get('product');
    if (product) {
      setFormData(prev => ({
        ...prev,
        message: `Inquiring about model: ${product}. Please send technical spec sheet and FOB export pricing.`
      }));
    }
  }, [location]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onShowToast('Thank you! Your project specifications have been dispatched to our Agra production desk. We will respond within 24 business hours.');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        category: 'sneakers',
        volume: '200-500',
        type: 'rfq',
        message: ''
      });
    }, 800);
  };

  return (
    <div className="contact-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="sep">/</span>
            <span className="current">Contact Us &amp; Factory Desk</span>
          </div>
          <h1>Connect With Our <span className="gold-text">Export &amp; Factory Desk</span></h1>
          <p>
            Visit our Agra manufacturing campus, schedule a technical consultation, or submit your tech pack for an instant factory quotation.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '60px', alignItems: 'flex-start' }}>
            {/* Contact Details & Info */}
            <div>
              <div className="section-label">Global Manufacturing Desk</div>
              <h2>Let’s Build Something <span className="gold-text">Extraordinary</span></h2>
              <div className="divider-short"></div>
              <p style={{ color: 'var(--grey-light)', fontSize: '1.02rem', lineHeight: '1.8', marginBottom: '32px' }}>
                Whether you are an emerging D2C brand preparing for a 200-pair pilot launch or an established enterprise requiring scalable container dispatch, our engineering and export team is at your disposal.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                <div className="card-glass" style={{ padding: '20px', borderRadius: 'var(--rad-md)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.6rem', color: 'var(--gold-primary)' }}>🏭</div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Agra Manufacturing Campus</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', lineHeight: '1.6' }}>
                      Foundry Nagar Industrial Area, Agra, Uttar Pradesh - 282006, India
                    </p>
                  </div>
                </div>

                <div className="card-glass" style={{ padding: '20px', borderRadius: 'var(--rad-md)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.6rem', color: 'var(--gold-primary)' }}>🏢</div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Mumbai Trade &amp; Export Liaison Office</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', lineHeight: '1.6' }}>
                      Suite 502, Commerce Tower, Nariman Point, Mumbai, Maharashtra - 400021, India
                    </p>
                  </div>
                </div>

                <div className="card-glass" style={{ padding: '20px', borderRadius: 'var(--rad-md)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.6rem', color: 'var(--gold-primary)' }}>📞</div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Direct Trade Hotline &amp; WhatsApp</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', lineHeight: '1.6' }}>
                      <a href="tel:+911234567890" style={{ color: 'var(--gold-light)' }}>+91 12345 67890</a><br />
                      Hours: Monday – Saturday (9:00 AM – 7:30 PM IST)
                    </p>
                  </div>
                </div>

                <div className="card-glass" style={{ padding: '20px', borderRadius: 'var(--rad-md)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ fontSize: '1.6rem', color: 'var(--gold-primary)' }}>✉️</div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Export Desk Emails</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', lineHeight: '1.6' }}>
                      <a href="mailto:contact@ksenterprise.in" style={{ color: 'var(--gold-light)' }}>contact@ksenterprise.in</a> / <a href="mailto:export@ksenterprise.in" style={{ color: 'var(--gold-light)' }}>export@ksenterprise.in</a>
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <a 
                  href="https://wa.me/911234567890?text=Hello%20KS%20Enterprise%2C%20I%20would%20like%20to%20connect%20with%20your%20Agra%20factory%20desk."
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  Instant Chat on WhatsApp
                </a>
                <a 
                  href="mailto:export@ksenterprise.in?subject=Factory%20Tour%20Request" 
                  className="btn btn-outline"
                >
                  Schedule Factory Visit
                </a>
              </div>
            </div>

            {/* Direct RFQ & Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="card" style={{ padding: '40px', borderRadius: 'var(--rad-xl)', background: 'var(--grad-card)' }}>
                <div style={{ marginBottom: '24px' }}>
                  <span className="section-label">Direct Quotation Desk</span>
                  <h3 style={{ fontSize: '1.4rem', color: 'var(--white)' }}>Request Quotation &amp; Tech Consultation</h3>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company / Brand Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Veloce Streetwear"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      required 
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Work Email</label>
                    <input 
                      type="email" 
                      className="form-input" 
                      placeholder="john@company.com"
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

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label">Footwear Category</label>
                    <select 
                      className="form-select"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option value="sneakers">Retro Court Sneakers &amp; Streetwear</option>
                      <option value="running">Performance Sports &amp; Running Shoes</option>
                      <option value="streetwear">High-Top &amp; Skate Trainers</option>
                      <option value="chunky">Chunky Platform Sneakers</option>
                      <option value="training">Gym &amp; Cross-Trainers</option>
                      <option value="kids">Kids' Athletic Sports Sneakers</option>
                      <option value="oem">Full Private Label OEM/ODM Sneaker Line</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Target Batch Volume</label>
                    <select 
                      className="form-select"
                      value={formData.volume}
                      onChange={(e) => setFormData({ ...formData, volume: e.target.value })}
                    >
                      <option value="200-500">200 – 500 Pairs (Startup Pilot MOQ)</option>
                      <option value="500-2000">500 – 2,000 Pairs (Growing Brand)</option>
                      <option value="2000+">2,000+ Pairs (Enterprise Retail)</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Inquiry Purpose</label>
                  <select 
                    className="form-select"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  >
                    <option value="rfq">Request Instant Manufacturing Quote (RFQ)</option>
                    <option value="sample">Request Physical Prototype / Wear Sample</option>
                    <option value="tour">Schedule In-Person Factory Campus Visit</option>
                    <option value="catalog">Request Complete PDF Wholesale Catalog</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Details &amp; Material Preferences</label>
                  <textarea 
                    className="form-textarea" 
                    placeholder="Describe your target styles, desired leathers/soles, launch timeline, destination country, or upload/share tech pack link."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={submitting}
                >
                  {submitting ? 'Submitting to Factory Desk...' : 'Submit to Agra Factory Desk'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
