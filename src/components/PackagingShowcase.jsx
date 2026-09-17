import React from 'react';

export default function PackagingShowcase() {
  const packagingItems = [
    {
      icon: '📦',
      title: 'Rigid Gold-Foil Shoe Boxes',
      desc: 'Crafted with premium high-density board, magnetic closures, matte soft-touch lamination, and hot-stamped gold foil branding that makes unboxing extraordinary.'
    },
    {
      icon: '🏷️',
      title: 'Debossed Insoles & Tongue Badges',
      desc: 'Precision heat-pressed and laser-etched logos on genuine leather sockliners, woven tongue labels, and sculpted heel counters.'
    },
    {
      icon: '🌿',
      title: 'Branded Cotton Dust Bags & Paper',
      desc: 'Custom-printed breathable cotton dust bags and personalized acid-free tissue paper keeping footwear pristine during transit.'
    },
    {
      icon: '📊',
      title: 'Retail Hangtags, Barcodes & EANs',
      desc: 'Complete commercial retail preparation with custom die-cut hangtags, price stickers, EAN/UPC barcodes, and export carton marking.'
    }
  ];

  return (
    <section className="section" id="packaging" style={{ background: 'var(--black-main)' }}>
      <div className="container">
        <div className="card-glass" style={{ padding: '48px', borderRadius: 'var(--rad-xl)' }}>
          <div className="section-head" style={{ marginBottom: '32px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Turnkey Private Labeling</div>
            <h2>Unboxing That Elevates <span className="gold-text">Your Brand</span></h2>
            <p>We don't deliver plain brown boxes. We engineer complete retail-ready packaging that commands luxury pricing and builds immediate brand loyalty.</p>
          </div>

          <div className="packaging-grid">
            {packagingItems.map((item, idx) => (
              <div key={idx} className="packaging-item">
                <div className="packaging-icon">{item.icon}</div>
                <h4 style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '8px', fontFamily: 'var(--font-accent)' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--grey-mid)', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '36px' }}>
            <a 
              href="https://wa.me/911234567890?text=Hello%20KS%20Enterprise%2C%20I%20would%20like%20to%20see%20samples%20of%20your%20custom%20shoe%20boxes%20and%20private%20label%20packaging." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm"
            >
              Request Packaging Sample Kit via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
