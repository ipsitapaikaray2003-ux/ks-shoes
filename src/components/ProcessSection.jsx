import React from 'react';

export default function ProcessSection() {
  return (
    <section className="section" style={{ background: 'var(--black-main)' }}>
      <div className="container">
        <div className="section-head">
          <div className="section-label" style={{ justifyContent: 'center' }}>Craftsmanship Journey</div>
          <h2>From Blueprint To <span className="gold-text">Masterpiece</span></h2>
          <p>A disciplined, quality-controlled lifecycle behind every shoe bearing the KS Enterprise hallmark.</p>
        </div>

        <div className="process-grid">
          <div className="process-step">
            <div className="process-number">01</div>
            <h4>CAD Lasting &amp; Prototyping</h4>
            <p>We sculpt ergonomic 3D lasts tailored to target market anatomical standards (UK, US, EU fit profiles).</p>
          </div>

          <div className="process-step">
            <div className="process-number">02</div>
            <h4>Material Selection &amp; Grading</h4>
            <p>Full-grain leathers, linings, and memory insoles are hand-inspected under high-CRI daylight lamps.</p>
          </div>

          <div className="process-step">
            <div className="process-number">03</div>
            <h4>Precision Assembly</h4>
            <p>Upper stitching, lasting pulling over, toe pounding, and sole bonding carried out by master shoe artisans.</p>
          </div>

          <div className="process-step">
            <div className="process-number">04</div>
            <h4>Buffing &amp; Global Dispatch</h4>
            <p>Final hand-burnishing with organic waxes, optical QA scrutiny, dust-bagging, and worldwide container loading.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
