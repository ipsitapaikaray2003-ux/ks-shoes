import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    title: "Men's Footwear",
    tagline: "Custom sneakers, formal, and casual.",
    image: "/assets/images/mens_collection.jpg",
    link: "/products"
  },
  {
    title: "Women's Footwear",
    tagline: "High-end retail & lifestyle designs.",
    image: "/assets/images/womens_collection.jpg",
    link: "/products"
  },
  {
    title: "Corporate & Industrial",
    tagline: "Bespoke gifting & safety shoes.",
    image: "/assets/images/corporate_gifting.jpg",
    link: "/products"
  }
];

export default function HomeCategories() {
  return (
    <section style={{ padding: '120px 0', background: '#FFFFFF' }}>
      <div className="container-lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span style={{
            display: 'block',
            fontFamily: 'var(--font-accent)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#8B6914',
            marginBottom: '16px'
          }}>
            Explore Custom Shoes
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            color: '#000000',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            Browse by Category
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.7 }}
            >
              <Link to={cat.link} style={{ textDecoration: 'none', display: 'block', group: 'true' }} className="category-card">
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '16px',
                  height: '450px',
                  marginBottom: '24px'
                }}>
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                    className="category-img"
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent 50%)',
                    pointerEvents: 'none'
                  }} />
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-accent)',
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: '#000000',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    {cat.title}
                    <ArrowRight size={20} color="#8B6914" className="category-arrow" style={{ transition: 'transform 0.3s ease' }} />
                  </h3>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#666666',
                    margin: 0
                  }}>
                    {cat.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .category-card:hover .category-img { transform: scale(1.05); }
        .category-card:hover .category-arrow { transform: translateX(5px); }
      `}</style>
    </section>
  );
}
