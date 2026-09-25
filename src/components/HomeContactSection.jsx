import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function HomeContactSection({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    mobile: '',
    email: '',
    industry: 'Men Footwear',
    application: '',
    volume: '',
    temperature: '',
    material: '',
    hasDesign: 'No (New Development)'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(onShowToast) onShowToast('Requirements submitted successfully! Our team will contact you shortly.');
    setFormData({ name: '', company: '', mobile: '', email: '', industry: 'Men Footwear', application: '', volume: '', temperature: '', material: '', hasDesign: 'No (New Development)' });
  };

  return (
    <section id="contact-section" style={{ 
      backgroundColor: '#050505', 
      backgroundImage: 'linear-gradient(rgba(5, 5, 5, 0.85), rgba(5, 5, 5, 0.95)), url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '120px 0', 
      color: '#fff', 
      fontFamily: '"Inter", "Segoe UI", sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr', gap: '30px', alignItems: 'start' }} className="contact-grid">
          
          {/* LEFT SIDE: Contact Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            
            {/* Card 1: WhatsApp */}
            <div style={contactCardStyle}>
              <div style={{...iconBoxStyle, color: 'var(--accent-gold)', border: '1px solid rgba(214,180,90,0.2)'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <div>
                <p style={cardLabelStyle}>WHATSAPP TECHNICAL DESK</p>
                <p style={cardTitleStyle}>Chat on WhatsApp</p>
                <p style={cardDescStyle}>Direct engineering assistance & drawing review</p>
              </div>
            </div>

            {/* Card 2: Email */}
            <div style={contactCardStyle}>
              <div style={{...iconBoxStyle, color: 'var(--accent-gold)', border: '1px solid rgba(214,180,90,0.2)'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <p style={cardLabelStyle}>OFFICIAL ENGINEERING EMAIL</p>
                <p style={cardTitleStyle}>sales@ksenterprise.com</p>
                <p style={cardDescStyle}>Send tech packs, specs & CAD drawings</p>
              </div>
            </div>

            {/* Card 3: Location */}
            <div style={contactCardStyle}>
              <div style={{...iconBoxStyle, color: 'var(--accent-gold)', border: '1px solid rgba(214,180,90,0.2)'}}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <p style={cardLabelStyle}>NEW DELHI OFFICE & FACILITY</p>
                <p style={{...cardTitleStyle, fontSize: '1rem', lineHeight: 1.4, color: '#fff'}}>
                  Okhla Industrial Estate, Phase 2,<br/>
                  New Delhi, Delhi 110020
                </p>
                <p style={{...cardDescStyle, marginTop: '4px'}}>Plant inspection & client visits by appointment</p>
              </div>
            </div>

            {/* Map Box */}
            <div style={{ 
              background: '#0a0a0a', 
              border: '1px solid rgba(255,255,255,0.08)', 
              borderRadius: '12px', 
              overflow: 'hidden'
            }}>
              <div style={{ padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: 600 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  KS Enterprise Facility (New Delhi)
                </div>
                <a href="#" style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  Open in Maps <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
              <div style={{ height: '200px' }}>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.0688997!3d28.52758205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" height="100%" style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%)' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Delhi Map"
                ></iframe>
              </div>
            </div>

          </motion.div>

          {/* RIGHT SIDE: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            style={{ 
              background: '#0a0a0a', 
              border: '1px solid rgba(255,255,255,0.08)', 
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
            }}
          >
            {/* Top Badges */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ 
                background: 'rgba(214,180,90,0.1)', color: 'var(--accent-gold)', border: '1px solid rgba(214,180,90,0.2)',
                padding: '6px 12px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600, 
                display: 'flex', alignItems: 'center', gap: '6px', textTransform: 'uppercase', letterSpacing: '0.05em'
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                PRELIMINARY MANUFACTURING QUESTIONNAIRE
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#888', fontSize: '0.8rem' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                Confidential
              </div>
            </div>
            
            <h2 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0 0 10px 0', color: '#fff' }}>Tell Us About Your Requirement</h2>
            <p style={{ color: '#aaa', fontSize: '0.9rem', marginBottom: '32px', lineHeight: 1.5 }}>
              This allows our production engineers to calculate tooling costs, material consumption, and lead times accurately.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              <div style={gridRowStyle} className="form-grid-row">
                <div>
                  <label style={labelStyle}>Name *</label>
                  <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. Rahul Sharma" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Company *</label>
                  <input type="text" name="company" required value={formData.company} onChange={handleChange} placeholder="e.g. UltraTech / Jindal / Plant Name" style={inputStyle} />
                </div>
              </div>

              <div style={gridRowStyle} className="form-grid-row">
                <div>
                  <label style={labelStyle}>Mobile / WhatsApp *</label>
                  <input type="text" name="mobile" required value={formData.mobile} onChange={handleChange} placeholder="Enter mobile / WhatsApp number" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="engineer@company.com" style={inputStyle} />
                </div>
              </div>

              <div style={gridRowStyle} className="form-grid-row">
                <div>
                  <label style={labelStyle}>Product Category</label>
                  <select name="industry" value={formData.industry} onChange={handleChange} style={inputStyle}>
                    <option>Men Footwear</option>
                    <option>Women Footwear</option>
                    <option>Kids Footwear</option>
                    <option>Corporate Gifting</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Specific Application</label>
                  <input type="text" name="application" value={formData.application} onChange={handleChange} placeholder="e.g. Running, Lifestyle, Safety Boot" style={inputStyle} />
                </div>
              </div>

              <div style={gridRowStyle} className="form-grid-row">
                <div>
                  <label style={labelStyle}>Order Volume (Pairs)</label>
                  <input type="text" name="volume" value={formData.volume} onChange={handleChange} placeholder="e.g. 10,000 Pairs or 500 Pairs MOQ" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Target Price Range (INR/USD)</label>
                  <input type="text" name="temperature" value={formData.temperature} onChange={handleChange} placeholder="e.g. $15/pair continuous / $20 max" style={inputStyle} />
                </div>
              </div>

              <div style={gridRowStyle} className="form-grid-row">
                <div>
                  <label style={labelStyle}>Upper Material Preferences</label>
                  <input type="text" name="material" value={formData.material} onChange={handleChange} placeholder="e.g. Full Grain Leather / Synthetic Mesh" style={inputStyle} />
                </div>
                <div>
                  <label style={labelStyle}>Existing Tech Pack? (Yes / No)</label>
                  <select name="hasDesign" value={formData.hasDesign} onChange={handleChange} style={inputStyle}>
                    <option>No (New Development)</option>
                    <option>Yes (Ready for tooling)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Additional Requirements / Message</label>
                <textarea 
                  name="message" rows={3} value={formData.message} onChange={handleChange} 
                  placeholder="Tell us about specific branding, packaging, or custom molds needed..."
                  style={{...inputStyle, resize: 'vertical'}}
                />
              </div>

              <button 
                type="submit" 
                style={{
                  background: 'linear-gradient(135deg, var(--accent-gold) 0%, #B89645 100%)',
                  color: '#000', padding: '16px', borderRadius: '8px', border: 'none',
                  fontSize: '1rem', fontWeight: 700, cursor: 'pointer', marginTop: '10px',
                  boxShadow: '0 4px 12px rgba(214, 180, 90, 0.3)', transition: 'transform 0.2s ease',
                  letterSpacing: '0.05em'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                SUBMIT REQUIREMENT
              </button>

            </form>
          </motion.div>
        </div>
      </div>
      
      <style>{`
        @media (max-width: 950px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
          .form-grid-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

// ---------------- STYLES ---------------- //

const contactCardStyle = {
  background: '#0a0a0a', 
  border: '1px solid rgba(255,255,255,0.08)', 
  padding: '20px', 
  borderRadius: '12px', 
  display: 'flex', 
  gap: '16px', 
  alignItems: 'flex-start',
  boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
};

const iconBoxStyle = {
  width: '40px', 
  height: '40px', 
  borderRadius: '8px', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  flexShrink: 0
};

const cardLabelStyle = {
  margin: '0 0 6px 0', 
  fontSize: '0.7rem', 
  color: '#888', 
  fontWeight: 600, 
  letterSpacing: '0.05em'
};

const cardTitleStyle = {
  margin: '0 0 4px 0', 
  fontSize: '1.1rem', 
  fontWeight: 600, 
  color: 'var(--accent-gold)'
};

const cardDescStyle = {
  margin: 0, 
  fontSize: '0.8rem', 
  color: '#888'
};

const gridRowStyle = {
  display: 'grid', 
  gridTemplateColumns: '1fr 1fr', 
  gap: '20px'
};

const labelStyle = {
  display: 'block', 
  fontSize: '0.85rem', 
  color: '#ccc', 
  marginBottom: '8px', 
  fontWeight: 600
};

const inputStyle = {
  width: '100%',
  padding: '12px 14px',
  background: '#000', 
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '6px',
  color: '#fff',
  fontSize: '0.9rem',
  outline: 'none',
  transition: 'border-color 0.2s',
  appearance: 'none'
};
