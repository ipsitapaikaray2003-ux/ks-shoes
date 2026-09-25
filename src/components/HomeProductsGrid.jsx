import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function HomeProductsGrid({ onOpenModal }) {
  const categories = [
    {
      id: 'sports',
      name: 'Sports',
      subtitle: 'Engineered High-Rebound Athletic Footwear',
      image: '/assets/images/sports_running_shoe.jpg',
      moq: '200 Pairs',
      materials: 'Jacquard Mesh • TPU Stability Cage • Phylon'
    },
    {
      id: 'running',
      name: 'Running',
      subtitle: 'Kinetic Cushioning & Aerodynamic Knit Runners',
      image: '/assets/images/slider_running_sneaker.jpg',
      moq: '250 Pairs',
      materials: 'Seamless Weave • Nitrogen Infused Foam • Carbon Rubber'
    },
    {
      id: 'casual',
      name: 'Casual',
      subtitle: 'Refined Everyday Low-Profile Footwear',
      image: '/assets/images/clean_runner_unbranded.jpg',
      moq: '200 Pairs',
      materials: 'Milled Nappa Leather • Flexible Strobel • Gum Outsole'
    },
    {
      id: 'sneakers',
      name: 'Sneakers',
      subtitle: 'Luxury Court & Bespoke Streetwear Silhouettes',
      image: '/assets/images/slider_court_sneaker.jpg',
      moq: '200 Pairs',
      materials: 'Italian Calfskin • Margom Cupsole • Waxed Cotton Laces'
    },
    {
      id: 'safety',
      name: 'Safety',
      subtitle: 'Certified Heavy-Duty Industrial Protective Footwear',
      image: '/assets/images/factory.jpg',
      moq: '500 Pairs',
      materials: 'EN ISO 20345 Composite Toe • Kevlar Midplate • Oil-Resistant PU'
    },
    {
      id: 'workwear',
      name: 'Workwear',
      subtitle: 'Ergonomic Occupational & Service Uniform Footwear',
      image: '/assets/images/craft_stitching.jpg',
      moq: '300 Pairs',
      materials: 'Waterproof Full-Grain • Anti-Fatigue Insole • High-Grip Tread'
    },
    {
      id: 'lifestyle',
      name: 'Lifestyle',
      subtitle: 'Contemporary Fashion-Forward High-Tops & Trainers',
      image: '/assets/images/slider_hightop_sneaker.jpg',
      moq: '200 Pairs',
      materials: 'Velvet Suede • Padded Collar • Vulcanized Rubber'
    },
    {
      id: 'custom-footwear',
      name: 'Custom Footwear',
      subtitle: 'Proprietary Sole Tooling, CAD Lasts & Private Label',
      image: '/assets/images/hero_luxury_artisan.jpg',
      moq: 'Custom Tooling',
      materials: 'Bespoke Outsole Moulds • Private Lasts • Debossed Monograms'
    }
  ];

  return (
    <section 
      className="section" 
      id="products" 
      style={{
        background: '#FFFFFF',
        padding: '120px 0',
        borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
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
          marginBottom: '60px'
        }}>
          <div style={{ maxWidth: '720px' }}>
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
              B2B Contract Portfolio • Manufacturing Categories
            </span>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#121212',
              lineHeight: 1.08,
              margin: 0
            }}>
              Footwear Categories
            </h2>
          </div>

          <Link 
            to="/products" 
            className="btn btn-outline" 
            style={{
              padding: '12px 24px',
              fontSize: '0.8rem',
              borderRadius: '4px',
              borderColor: 'rgba(245, 243, 239, 0.25)',
              color: '#121212'
            }}
          >
            <span>View Complete B2B Catalog</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 8 Categories Editorial Showcase Grid with Large Images */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '30px'
          }}
        >
          {categories.map((cat) => (
            <Link 
              key={cat.id}
              to="/products"
              className="category-editorial-card"
              style={{ height: '440px' }}
            >
              {/* Large Image with smooth hover scale */}
              <img 
                src={cat.image} 
                alt={`KS Shoes ${cat.name} Manufacturing`} 
                className="category-editorial-img"
              />

              {/* Dark Editorial Overlay */}
              <div className="category-editorial-overlay">
                {/* Top Badge: MOQ */}
                <div style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px',
                  padding: '5px 12px',
                  background: 'rgba(7, 9, 13, 0.85)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(197, 160, 89, 0.3)',
                  borderRadius: 'var(--rad-pill)',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-accent)',
                  fontWeight: 700,
                  color: 'var(--gold-light)',
                  letterSpacing: '0.06em'
                }}>
                  MOQ: {cat.moq}
                </div>

                {/* Subtitle / Description */}
                <span style={{
                  fontSize: '0.82rem',
                  color: '#666666',
                  marginBottom: '8px',
                  display: 'block'
                }}>
                  {cat.subtitle}
                </span>

                {/* Category Title: moves subtly on hover */}
                <h3 className="category-editorial-title">
                  {cat.name}
                </h3>

                {/* Materials spec */}
                <div style={{
                  fontSize: '0.74rem',
                  color: 'var(--accent-bronze)',
                  fontFamily: 'var(--font-accent)',
                  letterSpacing: '0.04em',
                  marginBottom: '16px'
                }}>
                  {cat.materials}
                </div>

                {/* Arrow & Action: appears on hover */}
                <div className="category-editorial-arrow">
                  <span>Explore Manufacturing Specs</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
