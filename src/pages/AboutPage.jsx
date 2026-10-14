import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div style={{ background: '#050505', color: '#ffffff', minHeight: '100vh', fontFamily: '"Inter", sans-serif', overflowX: 'hidden' }}>
      
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '80vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(to bottom, rgba(5,5,5,0.3), #050505), url("/assets/images/hightech_factory_cinematic.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div style={{ textAlign: 'center', zIndex: 2, padding: '0 5%' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span style={{ color: 'var(--gold-primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 600, display: 'block', marginBottom: '20px' }}>
              About KS Enterprises
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 90px)', fontWeight: 800, margin: '0 0 24px 0', letterSpacing: '-0.03em', lineHeight: 1.1, color: '#ffffff' }}>
              THE ART OF <br /> <span style={{ color: 'var(--gold-primary)' }}>SHOEMAKING</span>
            </h1>
            <p style={{ color: '#bbb', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Mastering the balance between precision engineering, craftsmanship, and modern footwear innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Heritage Section */}
      <section style={{ padding: '120px 5%', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '80px', alignItems: 'center' }}>
          <motion.div 
            style={{ flex: '1 1 500px' }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '24px', letterSpacing: '-0.02em', color: '#ffffff' }}>About Company</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--gold-primary)', marginBottom: '32px' }}></div>
            <p style={{ fontSize: '1.15rem', color: '#aaa', lineHeight: 1.8, marginBottom: '24px' }}>
              <strong>KS Enterprises</strong> is a trusted footwear manufacturing company established on 1 October 2025, specializing in the production of high-quality sports shoes. Since our inception, we have focused on delivering durable, stylish, and comfortable footwear that meets the evolving demands of the Indian footwear market.
            </p>
            <p style={{ fontSize: '1.15rem', color: '#aaa', lineHeight: 1.8 }}>
              Driven by modern manufacturing practices, skilled craftsmanship, and high-performance materials, KS Enterprises ensures that every pair of sports shoes delivers exceptional comfort, athletic durability, and contemporary styling.
            </p>
          </motion.div>
          
          <motion.div 
            style={{ flex: '1 1 500px', position: 'relative' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div style={{ position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', border: '1px solid var(--gold-primary)', borderRadius: '16px', zIndex: 0 }}></div>
            <div style={{ 
              borderRadius: '16px', 
              position: 'relative', 
              zIndex: 1, 
              background: '#FFFFFF', 
              padding: '24px', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
                src="/assets/images/product_1.jpg" 
                alt="KS Enterprises Athletic Footwear Production" 
                style={{ width: '100%', maxHeight: '420px', objectFit: 'contain' }} 
              />
            </div>
          </motion.div>
        </div>
      </section>


      {/* Leadership Section */}
      <section style={{ padding: '140px 5%', maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ color: 'var(--gold-primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 600, display: 'block', marginBottom: '20px' }}>
            Our Team
          </span>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, margin: '0 0 80px 0', letterSpacing: '-0.02em', color: '#ffffff' }}>
            Visionary Leadership
          </h2>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '20px',
            alignItems: 'stretch'
          }}>
            {[
              { name: 'Himanshu Tyagi', role: 'Founder' },
              { name: 'Nishant Kumar', role: 'Development Head' },
              { name: 'Neha Upadhayay', role: 'Merchandising & Sourcing' },
              { name: 'Sarad Gurung', role: 'Production Manager' }
            ].map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{
                  background: 'linear-gradient(145deg, #111, #0a0a0a)',
                  padding: '40px 30px',
                  borderRadius: '24px',
                  border: '1px solid rgba(214,180,90,0.15)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = 'rgba(214,180,90,0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'rgba(214,180,90,0.15)';
                }}
              >
                <div style={{ width: '80px', height: '80px', margin: '0 auto 24px', borderRadius: '50%', background: 'rgba(214,180,90,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '2.5rem', color: 'var(--gold-primary)', fontWeight: 800 }}>
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 700, color: '#ffffff', margin: '0 0 10px 0', letterSpacing: '-0.01em' }}>
                  {member.name}
                </h3>
                <p style={{ color: 'var(--gold-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.8rem', margin: 0, fontWeight: 700 }}>
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

    </div>
  );
}
