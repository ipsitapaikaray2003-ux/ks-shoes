import React from 'react';
import { Link } from 'react-router-dom';

export default function WhatWeDoGrid() {
  const items = [
    {
      title: 'Sneaker Manufacturer — In-House Production',
      desc: "We're a sneaker manufacturer with full in-house production — complete control on quality, cost, and lead time."
    },
    {
      title: 'OEM & ODM Sneakers Manufacturer',
      desc: 'OEM: your sneaker design, built to spec. ODM: choose, customize, launch faster.'
    },
    {
      title: 'Low MOQ Sneaker Manufacturing for Startups',
      desc: 'Launch your sneaker brand with low minimum order quantities — no bulk risk.'
    },
    {
      title: 'Bulk Sneaker Production for Retail Chains',
      desc: 'Scale from pilot batch to nationwide retail — consistent sneaker quality at any volume.'
    },
    {
      title: 'End-to-End Sneaker Manufacturing: Design to Delivery',
      desc: 'Design, sampling, production, delivery — including Goodyear welt construction.'
    },
    {
      title: 'One Sneaker Factory, Every Growth Stage',
      desc: 'New brand or scaling retailer — one sneaker manufacturing partner for the full journey.'
    }
  ];

  return (
    <section 
      id="what-we-do"
      style={{
        background: '#E8D4C1',
        padding: '60px 0 0',
        overflow: 'hidden',
        position: 'relative',
        borderTop: '1px solid rgba(0,0,0,0.06)',
        borderBottom: '1px solid rgba(0,0,0,0.06)'
      }}
    >
      <div 
        style={{
          maxWidth: '1360px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'grid',
          gridTemplateColumns: 'minmax(220px, 280px) 1fr minmax(260px, 350px)',
          gap: '36px',
          alignItems: 'center'
        }}
        className="what-we-do-grid"
      >
        {/* Left Column: Sneaker Evolution Progression Stack */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img 
            src="/assets/images/sneaker_journey_stack.png" 
            alt="Sneaker Design to Delivery Journey | Custom Shoe Manufacturing" 
            style={{
              width: '100%',
              maxWidth: '300px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block'
            }}
          />
        </div>

        {/* Center Column: What We Do Core Propositions */}
        <div style={{ padding: '10px 0 40px' }}>
          {/* Section Heading */}
          <h2 style={{
            fontFamily: 'Georgia, "Playfair Display", "Times New Roman", serif',
            fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
            fontWeight: 500,
            color: '#29231F',
            margin: '0 0 28px 0',
            letterSpacing: '-0.01em',
            lineHeight: 1.15
          }}>
            What We Do
          </h2>

          {/* 6 Value Propositions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {items.map((item, idx) => (
              <div key={idx} style={{ lineHeight: 1.35 }}>
                <h3 style={{
                  fontFamily: '"Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(1rem, 1.2vw, 1.18rem)',
                  fontWeight: 700,
                  color: '#29231F',
                  margin: '0 0 4px 0'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontFamily: '"Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  fontSize: 'clamp(0.86rem, 1vw, 0.95rem)',
                  fontWeight: 500,
                  color: '#5E5854',
                  margin: 0,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '8px'
                }}>
                  <span style={{ color: '#5E5854', fontSize: '1.05rem', lineHeight: '1.2', flexShrink: 0 }}>↳</span>
                  <span style={{ lineHeight: 1.45 }}>{item.desc}</span>
                </p>
              </div>
            ))}
          </div>

          {/* Subtext Tagline */}
          <div style={{
            fontFamily: 'Georgia, "Playfair Display", "Times New Roman", serif',
            fontStyle: 'italic',
            fontSize: 'clamp(0.95rem, 1.1vw, 1.05rem)',
            color: '#8C5A3C',
            marginTop: '26px',
            marginBottom: '26px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            letterSpacing: '0.01em'
          }}>
            <span style={{ fontStyle: 'normal', fontSize: '1.1rem', color: '#8C5A3C' }}>⋙</span>
            <span>From First Pair to Full Scale — Made in Agra, Built for the World</span>
          </div>

          {/* CTA Button */}
          <div>
            <Link 
              to="/contact" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#FBF8F3',
                color: '#8C5A3C',
                border: '1px solid #D6C4B2',
                borderRadius: '6px',
                padding: '11px 24px',
                fontFamily: '"Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: '0.94rem',
                fontWeight: 700,
                textDecoration: 'none',
                boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.borderColor = '#8C5A3C';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(140, 90, 60, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#FBF8F3';
                e.currentTarget.style.borderColor = '#D6C4B2';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.04)';
              }}
            >
              <span>Start Building Brand</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 800 }}>&gt;</span>
            </Link>
          </div>
        </div>

        {/* Right Column: Artisan Craftsman Stitching at Bench */}
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          alignSelf: 'flex-end'
        }}>
          <img 
            src="/assets/images/sneaker_craftsman_artisan.webp" 
            alt="Sneaker Manufacturing Craftsmanship | Skilled Shoe Artisan" 
            style={{
              width: '100%',
              maxWidth: '360px',
              height: 'auto',
              objectFit: 'contain',
              display: 'block',
              filter: 'drop-shadow(0 15px 25px rgba(0,0,0,0.1))'
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 1080px) {
          .what-we-do-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
            padding-bottom: 40px !important;
          }
          .what-we-do-grid > div:first-child img {
            max-width: 240px !important;
          }
          .what-we-do-grid > div:last-child {
            justify-content: center !important;
            align-self: center !important;
          }
          .what-we-do-grid > div:last-child img {
            max-width: 300px !important;
          }
        }
      `}</style>
    </section>
  );
}
