import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Layers, Cpu, ShieldCheck, Sparkles } from 'lucide-react';

export default function ProductVisualizationSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const styles = [
    {
      id: 'runner',
      num: '01',
      name: 'Kinetic Athletic Runner',
      tagline: 'High-Rebound Dual-Density Foam & Engineered Jacquard Weave',
      image: '/assets/images/slider_running_sneaker.jpg',
      silhouette: 'Low-Top Kinetic Performance',
      upper: 'Seamless Aerodynamic Jacquard Mesh & TPU Support Cage',
      sole: 'Nitrogen-Infused Dual Density Phylon with High-Traction Rubber Pods',
      construction: '360° Strobel Stitching with Ergonomic Arch Last',
      moq: '200 Pairs / Colorway',
      leadTime: '7 Days Sample / 24 Days Bulk',
      features: ['Weight: 260g (UK 8)', 'Breathable Pore Matrix', 'Zero-Variance Laser Clicked']
    },
    {
      id: 'court',
      num: '02',
      name: 'Minimalist Court Sneaker',
      tagline: 'Full-Grain Italian Calfskin with 360° Sidewall Stitched Margom Sole',
      image: '/assets/images/slider_court_sneaker.jpg',
      silhouette: 'Classic Low-Profile Cupsole',
      upper: 'LWG Gold Certified 1.4mm Full-Grain Nappa Leather',
      sole: 'Natural Vulcanized Rubber Cupsole with Deep Siped Traction',
      construction: 'Blake-Stitched Perimeter & Vegetable Tanned Leather Insole',
      moq: '200 Pairs / Colorway',
      leadTime: '7 Days Sample / 28 Days Bulk',
      features: ['Waxed Cotton Cords', 'Debossed Tongue Monogram', 'Anatomical Calf Leather Lining']
    },
    {
      id: 'hightop',
      num: '03',
      name: 'Streetwear High-Top Trainer',
      tagline: 'Multi-Panel Velvet Suede & High-Tensile Ballistic Canvas',
      image: '/assets/images/slider_hightop_sneaker.jpg',
      silhouette: 'Ankle Support High-Top Silhouette',
      upper: 'Split Calf Suede with 600D Waterproof Cordura Canvas',
      sole: 'Chunky Sculpted PU Midsole with Gum Rubber Outsole',
      construction: 'Reinforced Padded Collar & Molded Ortholite Footbed',
      moq: '250 Pairs / Colorway',
      leadTime: '8 Days Sample / 30 Days Bulk',
      features: ['Padded Foam Tongue', 'D-Ring Speed Lacing', 'Anti-Abrasion Toe Wrap']
    },
    {
      id: 'artisan',
      num: '04',
      name: 'Handcrafted Heritage Derby',
      tagline: 'Agra Master Bench-Craft with Hand-Burnished Crust Leather',
      image: '/assets/images/slider_luxury_pair.jpg',
      silhouette: 'Modern Luxury Dress Casual',
      upper: 'French Crust Leather with Natural Aniline Hand-Dye Finish',
      sole: 'Stacked Leather & Rubber Heel with Goodyear Welted Aesthetics',
      construction: 'Hand-Lasted on Bespoke Wooden Formers with Brass Tacks',
      moq: '150 Pairs / Colorway',
      leadTime: '10 Days Sample / 30 Days Bulk',
      features: ['Hand-Patinated Color', 'Cork Cushion Midlayer', 'Hand-Stitched Welt']
    }
  ];

  const current = styles[activeIdx];

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <section 
      className="section" 
      id="product-showcase" 
      style={{
        background: '#FFFFFF',
        padding: '120px 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container-lg">
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: '50px'
        }}>
          <div style={{ maxWidth: '680px' }}>
            <span style={{
              fontSize: '0.74rem',
              fontFamily: 'var(--font-accent)',
              fontWeight: 800,
              letterSpacing: '0.16em',
              color: 'var(--accent-bronze)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '12px'
            }}>
              Engineering Showcase • Product Visualization
            </span>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#121212',
              lineHeight: 1.1,
              margin: 0
            }}>
              Precision In Every Silhouette
            </h2>
          </div>

          {/* Style Selector Tabs */}
          <div style={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            background: 'rgba(255, 255, 255, 0.03)',
            padding: '6px',
            borderRadius: '4px',
            border: '1px solid rgba(0, 0, 0, 0.08)'
          }}>
            {styles.map((style, idx) => (
              <button
                key={style.id}
                onClick={() => setActiveIdx(idx)}
                style={{
                  background: activeIdx === idx ? 'var(--gold-light)' : 'transparent',
                  color: activeIdx === idx ? '#FFFFFF' : 'rgba(245, 243, 239, 0.7)',
                  border: 'none',
                  padding: '10px 18px',
                  borderRadius: '3px',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 700,
                  fontSize: '0.78rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <span>{style.num} / {style.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Showcase Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '50px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Visual Focus with Large Footwear Image, Fade, Scale, Slide & Parallax */}
          <div 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              background: '#FFFFFF',
              border: '1px solid rgba(0, 0, 0, 0.05)',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.7)',
              height: '520px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'crosshair'
            }}
          >
            {/* Subtle background industrial grid pattern */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(197, 160, 89, 0.08) 1px, transparent 1px)',
                backgroundSize: '24px 24px',
                opacity: 0.6
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.92, x: 24 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: mousePos.x,
                  y: mousePos.y
                }}
                exit={{ opacity: 0, scale: 1.06, x: -24 }}
                transition={{
                  opacity: { duration: 0.55 },
                  scale: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  x: { duration: 0.15, ease: 'linear' },
                  y: { duration: 0.15, ease: 'linear' }
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px'
                }}
              >
                <img 
                  src={current.image} 
                  alt={current.name}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.75)) brightness(0.98) contrast(1.05)'
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating Silhouette Badge */}
            <div 
              style={{
                position: 'absolute',
                top: '20px',
                left: '20px',
                padding: '6px 14px',
                background: 'rgba(7, 9, 13, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(197, 160, 89, 0.3)',
                borderRadius: 'var(--rad-pill)',
                fontSize: '0.72rem',
                fontFamily: 'var(--font-accent)',
                fontWeight: 700,
                letterSpacing: '0.1em',
                color: 'var(--gold-light)',
                textTransform: 'uppercase'
              }}
            >
              Model: {current.num} • {current.silhouette}
            </div>

            <div 
              style={{
                position: 'absolute',
                bottom: '18px',
                right: '20px',
                fontSize: '0.68rem',
                color: 'rgba(245, 243, 239, 0.4)',
                fontFamily: 'var(--font-accent)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase'
              }}
            >
              Interactive 2.5D Parallax
            </div>
          </div>

          {/* Right Column: Editorial Engineering Specifications */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <span style={{
                  fontSize: '1.8rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 900,
                  color: 'var(--gold-light)'
                }}>
                  {current.num}
                </span>
                <span style={{
                  fontSize: '0.76rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  color: 'var(--accent-bronze)',
                  textTransform: 'uppercase'
                }}>
                  Contract Production Grade
                </span>
              </div>

              <h3 style={{
                fontFamily: 'var(--font-accent)',
                fontSize: 'clamp(1.8rem, 2.6vw, 2.4rem)',
                fontWeight: 900,
                color: '#121212',
                textTransform: 'uppercase',
                margin: '0 0 12px 0',
                lineHeight: 1.15
              }}>
                {current.name}
              </h3>

              <p style={{
                fontSize: '0.98rem',
                color: 'var(--grey-mid)',
                lineHeight: 1.7,
                marginBottom: '28px'
              }}>
                {current.tagline}
              </p>

              {/* Technical Spec Matrix */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                padding: '22px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(0, 0, 0, 0.08)',
                borderRadius: '6px',
                marginBottom: '28px'
              }}>
                <div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'var(--accent-bronze)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '4px'
                  }}>
                    Upper Material
                  </span>
                  <span style={{ fontSize: '0.86rem', color: '#121212', fontWeight: 500 }}>
                    {current.upper}
                  </span>
                </div>

                <div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'var(--accent-bronze)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '4px'
                  }}>
                    Sole &amp; Cushioning
                  </span>
                  <span style={{ fontSize: '0.86rem', color: '#121212', fontWeight: 500 }}>
                    {current.sole}
                  </span>
                </div>

                <div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'var(--accent-bronze)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '4px'
                  }}>
                    Minimum Order Quantity
                  </span>
                  <span style={{ fontSize: '0.86rem', color: 'var(--gold-light)', fontWeight: 700 }}>
                    {current.moq}
                  </span>
                </div>

                <div>
                  <span style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-accent)',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'var(--accent-bronze)',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '4px'
                  }}>
                    Development Turnaround
                  </span>
                  <span style={{ fontSize: '0.86rem', color: '#121212', fontWeight: 500 }}>
                    {current.leadTime}
                  </span>
                </div>
              </div>

              {/* Feature Chips */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
                {current.features.map((feat, i) => (
                  <span key={i} className="spec-chip">
                    <Sparkles size={12} color="var(--gold-light)" />
                    {feat}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <a
                  href="#contact-rfq"
                  className="btn btn-primary"
                  style={{ padding: '14px 28px', fontSize: '0.82rem', borderRadius: '4px' }}
                >
                  <span>Request Prototype CAD &amp; Swatches</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
