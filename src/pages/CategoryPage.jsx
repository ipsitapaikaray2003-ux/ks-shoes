import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, Link } from 'react-router-dom';

export default function CategoryPage() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const category = queryParams.get('category') || 'men';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  const categoryData = {
    men: {
      title: "Custom Men's Shoes Manufacturer",
      description: "MakeMyShoe is a custom men's footwear manufacturer specializing in private label, OEM, and ODM production for D2C brands, retailers, and corporate clients. We don't just make shoes — we build your brand.",
      items: [
        { id: "01", title: "Men's Sneakers", desc: "Private label sneaker manufacturing — low-top, high-top, chunky, and leather sneakers custom-built for your brand.", img: "/assets/images/ks_men_runner_sneaker.jpg" },
        { id: "02", title: "Men's Casual Shoes", desc: "Custom casual shoe manufacturing for retail and D2C — lace-ups, slip-ons, moccasins, and driving shoes.", img: "/assets/images/ks_casual_shoe.jpg" },
        { id: "03", title: "Men's Loafers", desc: "Premium custom loafer manufacturer — penny, tassel, bit, and driving loafers in genuine leather and suede.", img: "/assets/images/ks_loafer_shoe.jpg" },
        { id: "04", title: "Men's Formal Shoes", desc: "Custom formal shoe manufacturer — Oxfords, Derbys, Brogues, and Wholecuts in premium leather.", img: "/assets/images/slider_oxford.jpg" }
      ]
    },
    women: {
      title: "Custom Women's Footwear",
      description: "Premium custom women's footwear manufacturing. We specialize in heels, flats, sneakers, and boots for private label D2C brands and boutiques.",
      items: [
        { id: "01", title: "Women's Sneakers", desc: "Chunky, lifestyle, and athletic sneakers customized for female demographics.", img: "/assets/images/ks_women_footwear.jpg" },
        { id: "02", title: "Women's Flats & Sandals", desc: "Elegant, comfortable, and trendy flats designed for retail collections.", img: "/assets/images/ks_womens_sandals.jpg" }
      ]
    },
    kids: {
      title: "Custom Kids Footwear",
      description: "Safe, durable, and stylish kids' footwear manufacturing. We ensure high-quality materials for comfortable toddler and youth shoes.",
      items: [
        { id: "01", title: "Kids' Sneakers & Velcro Shoes", desc: "Easy-to-wear, comfortable sneakers designed for active kids.", img: "/assets/images/ks_kids_footwear.jpg" },
        { id: "02", title: "School Shoes", desc: "Durable uniform footwear manufacturing in bulk.", img: "/assets/images/ks_school_shoes.jpg" }
      ]
    },
    corporate: {
      title: "Corporate & Industrial Footwear",
      description: "High-quality corporate gifting shoes and heavy-duty industrial safety footwear manufactured to exact safety specifications.",
      items: [
        { id: "01", title: "Executive Corporate Gifting", desc: "Premium leather formal shoes customized with corporate branding.", img: "/assets/images/ks_corporate_shoe.jpg" },
        { id: "02", title: "Industrial Safety Boots", desc: "Steel-toe, anti-slip, and durable safety boots for manufacturing plants.", img: "/assets/images/ks_clean_safety_boot.jpg" }
      ]
    }
  };

  const data = categoryData[category] || categoryData.men;

  return (
    <div style={{ 
      backgroundColor: '#050505', 
      backgroundImage: 'linear-gradient(rgba(5, 5, 5, 0.85), rgba(5, 5, 5, 0.95)), url("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: '#fff', 
      minHeight: '100vh', 
      paddingTop: '120px', 
      paddingBottom: '120px', 
      fontFamily: '"Inter", sans-serif',
      overflowX: 'hidden'
    }}>
      
      {/* Hero Header */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%', textAlign: 'center', marginBottom: '100px', position: 'relative' }}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(214,180,90,0.1) 0%, transparent 70%)',
            filter: 'blur(40px)', zIndex: 0
          }}
        />
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 700, color: '#fff', marginBottom: '24px', position: 'relative', zIndex: 1, letterSpacing: '-0.02em' }}
        >
          {data.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ fontSize: '1.15rem', color: '#bbb', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, position: 'relative', zIndex: 1 }}
        >
          {data.description}
        </motion.p>
      </div>

      {/* Catalog List */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%', display: 'flex', flexDirection: 'column', gap: '120px' }}>
        {data.items.map((item, index) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ 
              display: 'flex', 
              flexDirection: index % 2 !== 0 ? 'row-reverse' : 'row',
              gap: '80px',
              alignItems: 'center',
              flexWrap: 'wrap',
              position: 'relative'
            }}
          >
            {/* Huge Background Number */}
            <div style={{
              position: 'absolute',
              top: '-60px',
              [index % 2 !== 0 ? 'right' : 'left']: '-20px',
              fontSize: 'clamp(8rem, 15vw, 14rem)',
              fontWeight: 900,
              color: 'transparent',
              WebkitTextStroke: '2px rgba(214,180,90,0.1)',
              zIndex: 0,
              userSelect: 'none',
              pointerEvents: 'none'
            }}>
              {item.id}
            </div>

            {/* Left Content */}
            <div style={{ flex: '1 1 450px', position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--accent-gold)', marginBottom: '16px', letterSpacing: '-0.01em' }}>{item.title}</h2>
              <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: '40px', lineHeight: 1.7 }}>{item.desc}</p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '48px' }}>
                {[
                  { label: "Article Range", value: "100+ Options" },
                  { label: "Unit Cost", value: "As Per Requirement" },
                  { label: "Custom Branding", value: "Available" },
                  { label: "Doorstep Delivery", value: "Pan-India & Global" }
                ].map((stat, i) => (
                  <div key={i} style={{ 
                    background: 'rgba(255,255,255,0.03)', 
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    padding: '20px', 
                    borderRadius: '12px', 
                    border: '1px solid rgba(214,180,90,0.15)',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                  }}>
                    <span style={{ display: 'block', color: '#999', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '8px', fontWeight: 600 }}>{stat.label}</span>
                    <span style={{ color: '#fff', fontSize: '1.05rem', fontWeight: 500 }}>{stat.value}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '18px 48px',
                  background: 'linear-gradient(135deg, var(--accent-gold) 0%, #B89645 100%)',
                  color: '#000',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  transition: 'all 0.3s ease',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  boxShadow: '0 10px 25px rgba(214, 180, 90, 0.25)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(214, 180, 90, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(214, 180, 90, 0.25)';
                }}
              >
                Start Your Project
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
            </div>

            {/* Right Image Container */}
            <motion.div 
              style={{ flex: '1 1 450px', position: 'relative', zIndex: 1 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: index * 0.2 }}
            >
              {/* Decorative Glow Behind Image */}
              <div style={{
                position: 'absolute', top: '10%', left: '10%', right: '10%', bottom: '10%',
                background: 'var(--accent-gold)', filter: 'blur(60px)', opacity: 0.15, borderRadius: '50%'
              }}></div>
              
              <div style={{ 
                height: '550px', 
                borderRadius: '24px', 
                overflow: 'hidden', 
                border: '1px solid rgba(214,180,90,0.2)',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                position: 'relative',
                background: '#000'
              }}>
                <img 
                  src={item.img} 
                  alt={item.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9, filter: 'contrast(1.1)' }}
                />
                {/* Internal gradient overlay for blending */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(to top, rgba(5,5,5,0.8), transparent 50%)' }}></div>
              </div>
            </motion.div>

          </motion.div>
        ))}
      </div>

    </div>
  );
}
