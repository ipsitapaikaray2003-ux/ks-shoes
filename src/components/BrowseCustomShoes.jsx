import React from 'react';
import { Link } from 'react-router-dom';

export default function BrowseCustomShoes() {
  const categories = [
    {
      title: "Men's Sneakers & Sports Shoes",
      badge: "Men's Line",
      image: "/assets/images/mens_collection.jpg",
      link: "/products?cat=mens",
      desc: "Retro Court Sneakers, Lightweight Running Shoes, Minimalist Low-Tops, and High-Performance Sports Trainers for Men."
    },
    {
      title: "Women's Sneakers & Sports Shoes",
      badge: "Women's Line",
      image: "/assets/images/womens_collection.jpg",
      link: "/products?cat=womens",
      desc: "Chic Pastel Cupsoles, Aerodynamic Sports Joggers, Fashion Athleisure Sneakers, and Cushion Trainers for Women."
    },
    {
      title: "Kids' Sneakers & Sports Shoes",
      badge: "Kids & Youth",
      image: "/assets/images/kids_collection.jpg",
      link: "/products?cat=kids",
      desc: "Ultra-Lightweight Playground Running Shoes, Durable Velcro Straps, Non-Marking Soles, and Youth Trainers."
    }
  ];

  return (
    <section className="section" id="browse-custom" style={{ background: 'var(--black-main)', borderTop: '1px solid var(--black-border)' }}>
      <div className="container">
        <div className="section-head text-center">
          <div className="section-label" style={{ justifyContent: 'center' }}>Sneaker &amp; Athletic Production</div>
          <h2>Browse <span className="gold-text">Custom Sneakers &amp; Sports Shoes</span></h2>
          <p style={{ maxWidth: '650px', margin: '0 auto' }}>
            Choose from our specialized sneaker manufacturing categories. Fully customizable with your private label, bespoke outsole mold development, and signature custom packaging.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px'
        }}>
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className="card" 
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid var(--black-border)',
                background: 'var(--black-card)',
                transition: 'all 0.35s ease'
              }}
            >
              <div style={{ 
                position: 'relative', 
                height: '280px', 
                overflow: 'hidden',
                background: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px'
              }}>
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.5s cubic-bezier(0.2, 0, 0.2, 1)'
                  }}
                  className="zoom-hover"
                />
                <span style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  background: 'rgba(201, 168, 76, 0.92)',
                  color: 'var(--black-deep)',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-accent)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  padding: '5px 14px',
                  borderRadius: 'var(--rad-pill)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                }}>
                  {cat.badge}
                </span>
              </div>

              <div style={{ padding: '24px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--white)', marginBottom: '8px' }}>
                    {cat.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--grey-mid)', lineHeight: '1.6', marginBottom: '20px' }}>
                    {cat.desc}
                  </p>
                </div>

                <Link 
                  to={cat.link}
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.82rem', padding: '12px 20px' }}
                >
                  Start Now →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
