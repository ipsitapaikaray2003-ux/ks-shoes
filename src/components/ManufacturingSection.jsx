import React from 'react';

export default function ManufacturingSection() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="section" id="manufacturing">
      <div className="container">
        <div className="section-head">
          <div className="section-label" style={{ justifyContent: 'center' }}>Advanced Infrastructure</div>
          <h2>Engineered for Global <span className="gold-text">Scale &amp; Precision</span></h2>
          <p>Our integrated facility combines computerized pattern grading, laser clicking, and master hand assembly to guarantee benchmark consistency.</p>
        </div>

        <div className="grid-4">
          <div className="feature-card">
            <div className="feature-icon">⚙️</div>
            <h4>Automated CAD/CAM Cutting</h4>
            <p>Computer-controlled Swiss cutting tables maximize hide yield and ensure microscopic edge precision for complex shoe uppers.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h4>In-House Testing Lab</h4>
            <p>Every batch undergoes SATRA-calibrated Martindale rub tests, Bally flex resistance (50,000 cycles), and sole adhesion stress testing.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🏷️</div>
            <h4>Private Label Tooling</h4>
            <p>Full-service OEM/ODM support with custom outsole molds, proprietary lasting profiles, embossed sockliners, and retail packaging.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🚢</div>
            <h4>Global Export Logistics</h4>
            <p>Established freight forwarding networks with direct customs clearance to ports in Europe, the Americas, Middle East, and Asia-Pacific.</p>
          </div>
        </div>

        {/* OEM Showcase Banner */}
        <div className="card-glass" style={{ marginTop: '50px', padding: '40px', borderRadius: 'var(--rad-xl)' }}>
          <div className="grid-2" style={{ alignItems: 'center', gap: '30px' }}>
            <div>
              <span className="section-label">OEM / ODM Partnership</span>
              <h3 style={{ marginBottom: '14px' }}>Are You An International Retailer Or Fashion Label?</h3>
              <p style={{ color: 'var(--grey-mid)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '24px' }}>
                Partner directly with KS Enterprise for your upcoming seasonal lines. We offer low minimum prototypes, sample turnaround within 7 days, and transparent factory-direct pricing tiers.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-primary btn-sm"
                  onClick={() => scrollTo('rfq-section')}
                >
                  Request B2B Quotation
                </button>
                <button 
                  className="btn btn-outline btn-sm"
                  onClick={() => scrollTo('contact')}
                >
                  Schedule Factory Tour
                </button>
              </div>
            </div>

            <div style={{ background: 'var(--black-card)', border: '1px solid var(--black-border)', borderRadius: 'var(--rad-lg)', padding: '24px' }}>
              <h5 style={{ color: 'var(--gold-light)', marginBottom: '16px', fontFamily: 'var(--font-accent)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem' }}>
                Factory Specifications At A Glance
              </h5>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: 'var(--grey-light)' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Daily Production:</span> 
                  <strong style={{ color: 'var(--white)' }}>15,000 Pairs</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Facility Floor Area:</span> 
                  <strong style={{ color: 'var(--white)' }}>85,000 Sq. Ft.</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Dedicated Assembly Lines:</span> 
                  <strong style={{ color: 'var(--white)' }}>6 Conveyor Units</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Certifications:</span> 
                  <strong style={{ color: 'var(--gold-light)' }}>ISO 9001:2015 • BSCI • SEDEX</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Sample Lead Time:</span> 
                  <strong style={{ color: 'var(--white)' }}>5 to 7 Days</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
