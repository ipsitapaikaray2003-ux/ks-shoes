import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const steps = [
  {
    id: 1,
    title: "Design & Engineering",
    subtitle: "PHASE 01",
    desc: "Every iconic silhouette begins with a precise blueprint. Our in-house CAD engineers and master craftsmen collaborate to transform your conceptual vision into comprehensive tech packs and 3D exploded views.",
    img: "/assets/images/mfg_design_cad_1790247802959.jpg"
  },
  {
    id: 2,
    title: "Material Science",
    subtitle: "PHASE 02",
    desc: "We source only the finest full-grain leathers, premium suedes, and advanced synthetics. Our hybrid approach pairs artisan hand-cutting with high-tech automated precision cutting for exact pattern matching.",
    img: "/assets/images/mfg_sneaker_materials_1790248343288.jpg"
  },
  {
    id: 3,
    title: "Artisan Stitching",
    subtitle: "PHASE 03",
    desc: "The shoe upper is meticulously stitched together by our veteran artisans. We utilize high-tension durable threads, ensuring that the shoe's structural integrity perfectly matches its aesthetic beauty.",
    img: "/assets/images/sneaker_craftsman_artisan.webp"
  },
  {
    id: 4,
    title: "Precision Assembly",
    subtitle: "PHASE 04",
    desc: "Operating within our state-of-the-art facilities, the upper is stretched tightly over the custom mold (the 'last'). Advanced robotics and classic techniques seamlessly merge to attach the sole with flawless alignment.",
    img: "/assets/images/mfg_sneaker_lasting_1790248081855.jpg"
  },
  {
    id: 5,
    title: "Finishing & Packaging",
    subtitle: "PHASE 05",
    desc: "Every single pair undergoes a rigorous multi-point quality control inspection. Finally, they are securely boxed in your custom-branded luxury packaging, ready for global retail.",
    img: "/assets/images/mfg_sneaker_packaging_ks_1790248098311.jpg"
  }
];

export default function ManufacturingPage() {
  const [activeStep, setActiveStep] = useState(0);

  // Scroll spy to detect active step
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.step-container');
      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        // If the element crosses the middle of the viewport
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveStep(index);
        }
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ background: '#050505', minHeight: '100vh', color: '#fff', fontFamily: '"Inter", sans-serif' }}>
      
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        height: '70vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(to bottom, rgba(5,5,5,0.7), #050505), url("/assets/images/hightech_factory_cinematic.jpg")',
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
            <span style={{ color: 'var(--gold-primary, #C9A84C)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.3em', fontWeight: 600, display: 'block', marginBottom: '20px' }}>
              Our Process
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 6vw, 72px)', fontWeight: 800, margin: '0 0 24px 0', letterSpacing: '-0.02em', lineHeight: 1.1, color: '#ffffff' }}>
              THE ARCHITECTURE <br />OF A SHOE
            </h1>
            <p style={{ color: '#cccccc', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
              Discover the meticulous step-by-step manufacturing process that transforms raw materials into premium footwear.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky Scroll Section */}
      <section style={{ padding: '0 5%', maxWidth: '1400px', margin: '0 auto', paddingBottom: '120px' }}>
        
        {/* We use a grid where left is text (scrolls) and right is image (sticky) */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
          
          {/* LEFT: Scrolling Text Blocks */}
          <div style={{ flex: '1 1 500px' }}>
            {steps.map((step, index) => (
              <div 
                key={step.id}
                className="step-container"
                style={{
                  minHeight: '100vh',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  padding: '40px 0',
                  opacity: activeStep === index ? 1 : 0.3,
                  transition: 'opacity 0.5s ease',
                }}
              >
                <span style={{ 
                  color: 'var(--gold-primary, #C9A84C)', 
                  fontWeight: 700, 
                  letterSpacing: '0.2em', 
                  fontSize: '0.9rem',
                  marginBottom: '16px',
                  display: 'block'
                }}>
                  {step.subtitle}
                </span>
                <h2 style={{ 
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
                  fontWeight: 700, 
                  marginBottom: '32px',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: '#ffffff'
                }}>
                  {step.title}
                </h2>
                <p style={{ 
                  fontSize: '1.2rem', 
                  color: '#cccccc', 
                  lineHeight: 1.8,
                  maxWidth: '500px'
                }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT: Sticky Image Container */}
          <div style={{ 
            flex: '1 1 500px', 
            position: 'relative',
            display: 'flex',
            alignItems: 'flex-start', // Align to top so sticky works properly within the flex container
          }}>
            <div style={{
              position: 'sticky',
              top: '15vh', // Offset from top
              height: '70vh', // Height of the sticky image window
              width: '100%',
              borderRadius: '24px',
              overflow: 'hidden',
              background: '#0a0a0a',
              border: '1px solid rgba(255,255,255,0.05)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.8)'
            }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeStep}
                  src={steps[activeStep].img}
                  alt={steps[activeStep].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'contrast(1.1) brightness(0.9)'
                  }}
                />
              </AnimatePresence>
            </div>
          </div>

        </div>
      </section>

      {/* OEM / ODM Capabilities Banner */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', padding: '100px 5%', background: '#080808' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '24px', color: '#ffffff' }}>OEM & ODM CAPABILITIES</h2>
          <p style={{ color: '#cccccc', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 60px auto', lineHeight: 1.7 }}>
            Whether you are bringing a completely original CAD design (OEM) or customizing our meticulously engineered catalog models (ODM), we possess the technological scale and artisan precision to deliver perfection.
          </p>
          <a href="/contact" style={{
            display: 'inline-block',
            padding: '16px 40px',
            background: 'var(--gold-primary, #C9A84C)',
            color: '#000',
            textDecoration: 'none',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            borderRadius: '4px',
            fontSize: '0.9rem'
          }}>
            Start Your Project
          </a>
        </div>
      </section>

    </div>
  );
}
