import React, { useState } from 'react';

export default function PackagingShowcase() {
  const [activeFinish, setActiveFinish] = useState('onyx');
  const [activeFoil, setActiveFoil] = useState('gold');

  const finishes = {
    onyx: { name: 'Matte Onyx Black', bg: '#141414', border: '#2C2A24' },
    navy: { name: 'Deep Midnight Navy', bg: '#0B1321', border: '#1E2C44' },
    emerald: { name: 'Imperial Emerald', bg: '#0A1C16', border: '#183B30' },
    kraft: { name: 'Eco-Craft Recycled', bg: '#231D17', border: '#42362B' }
  };

  const foils = {
    gold: { name: 'Metallic Gold Foil', color: '#E8C97A', shadow: 'rgba(232, 201, 122, 0.4)' },
    silver: { name: 'Sterling Silver Foil', color: '#E0E0E0', shadow: 'rgba(224, 224, 224, 0.4)' },
    rose: { name: 'Rose Gold Shimmer', color: '#EAA89B', shadow: 'rgba(234, 168, 155, 0.4)' },
    blind: { name: 'Deep Blind Deboss', color: '#888888', shadow: 'rgba(0, 0, 0, 0.8)' }
  };

  const packagingItems = [
    {
      icon: '📦',
      title: 'Rigid Gold-Foil Shoe Boxes',
      desc: 'Crafted with 1200gsm high-density greyboard, hidden magnetic closures, matte soft-touch anti-scratch lamination, and hot-stamped branding.'
    },
    {
      icon: '🏷️',
      title: 'Debossed Insoles & Tongue Badges',
      desc: 'Precision heat-pressed and laser-etched logos on genuine calfskin sockliners, woven tongue labels, and sculpted TPU heel counters.'
    },
    {
      icon: '🌿',
      title: 'Branded Cotton Dust Bags & Paper',
      desc: 'Custom-dyed 180gsm breathable organic cotton drawstrings and personalized 28gsm acid-free tissue paper protecting leathers.'
    },
    {
      icon: '📊',
      title: 'Retail Hangtags, Barcodes & EANs',
      desc: 'Turnkey retail preparation with custom die-cut matte hangtags, GS1-certified EAN/UPC barcodes, and export corrugated master cartons.'
    }
  ];

  return (
    <section className="section" id="packaging" style={{ background: 'var(--black-main)', borderTop: '1px solid var(--black-border)' }}>
      <div className="container">
        <div className="card-glass" style={{ padding: 'clamp(28px, 5vw, 56px)', borderRadius: 'var(--rad-xl)' }}>
          <div className="section-head" style={{ marginBottom: '40px' }}>
            <div className="section-label" style={{ justifyContent: 'center' }}>Turnkey Private Labeling &amp; Boxes</div>
            <h2>Unboxing That Commands <span className="gold-text">Luxury Value</span></h2>
            <p style={{ maxWidth: '680px', margin: '0 auto' }}>
              We don't ship footwear in generic cartons. We engineer complete retail unboxing experiences that elevate perceived value and inspire viral unboxing moments.
            </p>
          </div>

          {/* Interactive 3D Luxury Box Visualizer */}
          <div style={{
            background: 'var(--black-deep)',
            border: '1px solid rgba(201, 168, 76, 0.25)',
            borderRadius: 'var(--rad-lg)',
            padding: 'clamp(24px, 4vw, 40px)',
            marginBottom: '44px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '36px',
            alignItems: 'center'
          }}>
            {/* Left: Box Preview Canvas */}
            <div style={{
              position: 'relative',
              height: '320px',
              borderRadius: '16px',
              background: finishes[activeFinish].bg,
              border: `2px solid ${finishes[activeFinish].border}`,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 20px 50px rgba(0,0,0,0.7)',
              transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              overflow: 'hidden'
            }} className="unboxing-stage">
              {/* Subtle Ambient Light Sheen */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(to bottom, rgba(255,255,255,0.06), transparent)',
                pointerEvents: 'none'
              }} />

              {/* Box Lid Monogram */}
              <div style={{
                textAlign: 'center',
                padding: '24px',
                zIndex: 2
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  margin: '0 auto 16px',
                  borderRadius: '12px',
                  border: `2px solid ${foils[activeFoil].color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 20px ${foils[activeFoil].shadow}`,
                  transition: 'all 0.4s ease'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: foils[activeFoil].color
                  }}>KS</span>
                </div>
                
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.3rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: foils[activeFoil].color,
                  marginBottom: '6px',
                  textShadow: `0 2px 15px ${foils[activeFoil].shadow}`,
                  transition: 'all 0.4s ease'
                }}>
                  YOUR BRAND NAME
                </h3>
                <p style={{
                  fontSize: '0.75rem',
                  color: 'var(--white-70)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase'
                }}>
                  Handcrafted in Agra &bull; Premium Footwear
                </p>
              </div>

              {/* Box Details Pill */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                padding: '6px 16px',
                borderRadius: 'var(--rad-pill)',
                fontSize: '0.74rem',
                color: '#555555',
                border: '1px solid rgba(255,255,255,0.1)'
              }}>
                {finishes[activeFinish].name} + {foils[activeFoil].name}
              </div>
            </div>

            {/* Right: Interactive Configuration Controls */}
            <div>
              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-light)', fontWeight: 700, marginBottom: '12px', fontFamily: 'var(--font-accent)' }}>
                  1. Select Rigid Box Finish
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {Object.entries(finishes).map(([key, f]) => (
                    <button
                      key={key}
                      onClick={() => setActiveFinish(key)}
                      className={`swatch-pill ${activeFinish === key ? 'active' : ''}`}
                    >
                      <span className="swatch-dot" style={{ background: f.bg, borderColor: f.border }} />
                      <span>{f.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: '28px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-light)', fontWeight: 700, marginBottom: '12px', fontFamily: 'var(--font-accent)' }}>
                  2. Select Hot Foil Stamping
                </label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {Object.entries(foils).map(([key, f]) => (
                    <button
                      key={key}
                      onClick={() => setActiveFoil(key)}
                      className={`swatch-pill ${activeFoil === key ? 'active' : ''}`}
                    >
                      <span className="swatch-dot" style={{ background: f.color }} />
                      <span>{f.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div style={{
                background: 'rgba(201, 168, 76, 0.08)',
                borderLeft: '3px solid var(--gold-primary)',
                padding: '14px 18px',
                borderRadius: '0 8px 8px 0',
                fontSize: '0.84rem',
                color: 'var(--white-90)',
                lineHeight: 1.6
              }}>
                💡 <strong>Startup Friendly:</strong> Full custom packaging available on orders starting from 200 pairs. We provide 3D digital box mockups before mass production.
              </div>
            </div>
          </div>

          {/* 4 Packaging Capabilities Grid */}
          <div className="packaging-grid">
            {packagingItems.map((item, idx) => (
              <div key={idx} className="packaging-item card-interactive-luxury" style={{ padding: '24px' }}>
                <div className="packaging-icon" style={{ fontSize: '1.8rem', marginBottom: '12px' }}>{item.icon}</div>
                <h4 style={{ fontSize: '1rem', color: '#121212', marginBottom: '8px', fontFamily: 'var(--font-accent)' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.82rem', color: 'var(--grey-mid)', lineHeight: '1.6' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a 
              href="https://wa.me/911234567890?text=Hello%20KS%20Enterprise%2C%20I%20would%20like%20to%20see%20samples%20of%20your%20custom%20shoe%20boxes%20and%20private%20label%20packaging." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary btn-sm animate-pulse-gold"
            >
              Request Custom Packaging Sample Kit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
