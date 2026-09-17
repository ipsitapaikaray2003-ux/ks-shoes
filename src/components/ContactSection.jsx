import React, { useState } from 'react';

export default function ContactSection({ selectedCategory, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: selectedCategory || 'mens',
    details: ''
  });
  const [submitting, setSubmitting] = useState(false);

  // Keep in sync if selectedCategory changes
  React.useEffect(() => {
    if (selectedCategory) {
      setFormData(prev => ({ ...prev, interest: selectedCategory }));
    }
  }, [selectedCategory]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      onShowToast('Thank you! Your RFQ has been dispatched directly to our global export desk. A senior technical specialist will respond within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: 'mens',
        details: ''
      });
    }, 800);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="card" style={{ padding: '48px', borderRadius: 'var(--rad-xl)', background: 'var(--grad-card)' }}>
          <div className="grid-2" style={{ gap: '50px', alignItems: 'center' }}>
            <div>
              <div className="section-label">Connect With Our Export Desk</div>
              <h2>Let’s Build Your Next <span className="gold-text">Iconic Footwear Run</span></h2>
              <div className="divider-short"></div>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '28px' }}>
                Whether you need private-label production, bulk wholesale fulfillment, or bespoke footwear development, our international sales desk is ready to assist.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
                <div className="footer-contact-item" style={{ marginBottom: 0 }}>
                  <div className="footer-contact-icon">📍</div>
                  <div className="footer-contact-text">
                    <strong>Manufacturing Headquarters:</strong><br />
                    Foundry Nagar Industrial Area, Agra, UP - 282006, India
                  </div>
                </div>

                <div className="footer-contact-item" style={{ marginBottom: 0 }}>
                  <div className="footer-contact-icon">✉️</div>
                  <div className="footer-contact-text">
                    <strong>Export Desk Email:</strong><br />
                    <a href="mailto:contact@ksenterprise.in">contact@ksenterprise.in</a> / <a href="mailto:export@ksenterprise.in">export@ksenterprise.in</a>
                  </div>
                </div>

                <div className="footer-contact-item" style={{ marginBottom: 0 }}>
                  <div className="footer-contact-icon">📞</div>
                  <div className="footer-contact-text">
                    <strong>Global Trade Hotline &amp; WhatsApp:</strong><br />
                    <a href="tel:+911234567890">+91 12345 67890</a> (Mon – Sat, 9:00 AM – 7:00 PM IST)
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="card-glass" style={{ padding: '32px', borderRadius: 'var(--rad-lg)' }}>
                <h4 style={{ marginBottom: '20px', fontSize: '1.1rem', color: 'var(--gold-light)' }}>
                  Request Quotation / Catalog
                </h4>

                <div className="form-group">
                  <label className="form-label" htmlFor="name">Full Name / Company Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-input" 
                    placeholder="e.g. John Doe / Apex Retail Group" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Work Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="form-input" 
                      placeholder="john@company.com" 
                      value={formData.email}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="phone">Phone / WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      className="form-input" 
                      placeholder="+91 12345 67890" 
                      value={formData.phone}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="interest">Primary Interest</label>
                  <select 
                    id="interest" 
                    className="form-select"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="mens">Men's Formal &amp; Casual Line</option>
                    <option value="womens">Women's Designer Collection</option>
                    <option value="kids">Kids' &amp; School Uniform Footwear</option>
                    <option value="corporate">Corporate Gifting &amp; Workwear</option>
                    <option value="oem">Custom Private Label OEM/ODM</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="details">Order Volume &amp; Target Destination</label>
                  <textarea 
                    id="details" 
                    className="form-textarea" 
                    placeholder="Please specify target pair quantities, destination country, target launch timeline, and any special material or branding requirements."
                    value={formData.details}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary" 
                  style={{ width: '100%', justifyContent: 'center' }}
                  disabled={submitting}
                >
                  {submitting ? 'Submitting to Export Desk...' : 'Submit Inquiry to Export Desk'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
