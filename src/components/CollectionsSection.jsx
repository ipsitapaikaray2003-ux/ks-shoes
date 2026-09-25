import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CollectionsSection() {
  const customCategories = [
    { 
      id: 1, 
      title: 'Men Footwear', 
      subtitle: 'Custom', 
      image: '/assets/images/ks_men_runner_sneaker.jpg',
      link: '/category?category=men'
    },
    { 
      id: 2, 
      title: 'Women Footwear', 
      subtitle: 'Custom', 
      image: '/assets/images/ks_women_footwear.jpg',
      link: '/category?category=women'
    },
    { 
      id: 3, 
      title: 'Kids Footwear', 
      subtitle: 'Custom', 
      image: '/assets/images/ks_kids_footwear.jpg',
      link: '/category?category=kids'
    },
    { 
      id: 4, 
      title: 'Corporate Gifting', 
      subtitle: 'Custom', 
      image: '/assets/images/ks_corporate_shoe.jpg',
      link: '/category?category=corporate'
    }
  ];

  return (
    <section className="section" id="collections" style={{ background: 'var(--black-main)', padding: '100px 5%' }}>
      <div className="container">
        <div className="section-head" style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', textAlign: 'center', marginBottom: '20px', color: 'var(--text-primary)' }}>
            Browse Custom <span style={{ color: 'var(--accent-gold, #D6B45A)' }}>KS Footwear</span>
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Explore our exclusive private-label collections manufactured with premium materials and signature KS branding.
          </p>
        </div>

        {/* 4-Column Custom Categories Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '40px', 
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}>
          {customCategories.map((cat, index) => (
            <motion.div 
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              {/* Circular Image */}
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  width: '220px',
                  height: '220px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  marginBottom: '24px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  border: '2px solid rgba(214,180,90,0.2)',
                  cursor: 'pointer'
                }}
              >
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'contrast(1.05)' }} 
                />
              </motion.div>

              {/* Text & Button */}
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '8px', fontWeight: '500' }}>
                {cat.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {cat.subtitle}
              </p>
              <Link 
                to={cat.link}
                style={{
                  display: 'inline-block',
                  padding: '12px 32px',
                  background: 'linear-gradient(135deg, rgba(214,180,90,0.8) 0%, rgba(184,150,69,0.8) 100%)',
                  color: '#000',
                  textDecoration: 'none',
                  fontWeight: '600',
                  borderRadius: '4px',
                  transition: 'all 0.3s ease',
                  fontSize: '0.95rem'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(214,180,90,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Start Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
