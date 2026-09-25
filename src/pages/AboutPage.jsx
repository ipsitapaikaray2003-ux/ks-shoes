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
        backgroundImage: 'linear-gradient(to bottom, rgba(5,5,5,0.3), #050505), url("/assets/images/hero_luxury_artisan.jpg")',
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
              Our Legacy
            </span>
            <h1 style={{ fontSize: 'clamp(40px, 8vw, 90px)', fontWeight: 800, margin: '0 0 24px 0', letterSpacing: '-0.03em', lineHeight: 1.1, color: '#ffffff' }}>
              THE ART OF <br /> <span style={{ color: 'var(--gold-primary)' }}>SHOEMAKING</span>
            </h1>
            <p style={{ color: '#bbb', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Decades of mastering the perfect balance between traditional Indian craftsmanship and global manufacturing innovation.
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
            <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '24px', letterSpacing: '-0.02em', color: '#ffffff' }}>Crafting Excellence <br/>Since Day One</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--gold-primary)', marginBottom: '32px' }}></div>
            <p style={{ fontSize: '1.15rem', color: '#aaa', lineHeight: 1.8, marginBottom: '24px' }}>
              Born in Agra, the historic heart of Indian leather craftsmanship, KS Shoes began with a simple mission: to build footwear that commands respect. For decades, we have honed our techniques, working closely with master artisans who have passed their skills down through generations.
            </p>
            <p style={{ fontSize: '1.15rem', color: '#aaa', lineHeight: 1.8 }}>
              Today, our heritage is our strongest asset. Every cut, every stitch, and every lasting process is a testament to our unyielding commitment to quality. We don't just manufacture shoes; we engineer confidence.
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
            <img src="/assets/images/craft_stitching.jpg" alt="Artisan stitching" style={{ width: '100%', borderRadius: '16px', position: 'relative', zIndex: 1, boxShadow: '0 20px 40px rgba(0,0,0,0.5)', filter: 'contrast(1.1) grayscale(20%)' }} />
          </motion.div>
        </div>
      </section>

      {/* Global Scale Section */}
      <section style={{ padding: '120px 5%', background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', flexWrap: 'wrap-reverse', gap: '80px', alignItems: 'center' }}>
          <motion.div 
            style={{ flex: '1 1 500px', position: 'relative' }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img src="/assets/images/hightech_factory_cinematic.jpg" alt="Modern Factory" style={{ width: '100%', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.7)', filter: 'contrast(1.1)' }} />
          </motion.div>

          <motion.div 
            style={{ flex: '1 1 500px' }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--gold-primary)' }}>Global Scale.<br/>Boutique Precision.</h2>
            <p style={{ fontSize: '1.15rem', color: '#aaa', lineHeight: 1.8, marginBottom: '24px' }}>
              While our roots are deeply traditional, our infrastructure is fiercely modern. We operate state-of-the-art facilities equipped with the latest footwear engineering technologies. This unique blend allows us to cater to massive bulk production without ever compromising on the meticulous detail of a single pair.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '40px' }}>
              <div style={{ borderLeft: '2px solid var(--gold-primary)', paddingLeft: '20px' }}>
                <h4 style={{ fontSize: '2rem', fontWeight: 800, margin: '0 0 5px 0', color: '#ffffff' }}>5M+</h4>
                <p style={{ color: '#777', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Pairs Manufactured</p>
              </div>
              <div style={{ borderLeft: '2px solid var(--gold-primary)', paddingLeft: '20px' }}>
                <h4 style={{ fontSize: '2rem', fontWeight: 800, margin: '0 0 5px 0', color: '#ffffff' }}>15+</h4>
                <p style={{ color: '#777', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Countries Served</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section style={{ padding: '140px 5%', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ color: 'var(--gold-primary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 600, display: 'block', marginBottom: '20px' }}>
            Leadership
          </span>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, margin: '0 0 60px 0', letterSpacing: '-0.02em', color: '#ffffff' }}>
            Visionary Direction
          </h2>

          <div style={{ 
            background: 'linear-gradient(145deg, #111, #0a0a0a)', 
            padding: '60px 40px', 
            borderRadius: '24px',
            border: '1px solid rgba(214,180,90,0.15)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.4)',
            position: 'relative'
          }}>
            {/* Elegant Quote Icon */}
            <div style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', background: '#050505', padding: '10px 20px', borderRadius: '50px', border: '1px solid rgba(214,180,90,0.3)' }}>
              <span style={{ fontSize: '2rem', color: 'var(--gold-primary)', lineHeight: 1 }}>❝</span>
            </div>

            <p style={{ fontSize: '1.4rem', color: '#fff', fontStyle: 'italic', lineHeight: 1.8, marginBottom: '40px', fontWeight: 300 }}>
              "Our vision has always been to bridge the gap between traditional Indian craftsmanship and global manufacturing standards. By providing scalable, robust solutions alongside massive bulk capacity, we empower modern D2C brands to build the true future of global footwear."
            </p>
            
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gold-primary)', margin: '0 0 5px 0' }}>Abhishek Singhal</h3>
              <p style={{ color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', margin: 0 }}>Founder & Managing Director</p>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
