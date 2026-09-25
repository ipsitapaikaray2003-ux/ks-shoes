import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FRAME_COUNT = 300;
const frameSrc = (n) => `/frames/ezgif-frame-${String(n).padStart(3, '0')}.jpg`;

export default function PremiumHero() {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const [isReady, setIsReady] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 70,
        damping: 20
      } 
    }
  };

  // Preload frames
  useEffect(() => {
    let loaded = 0;
    const images = [];
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = frameSrc(i);
      const finish = () => {
        loaded++;
        if (loaded >= FRAME_COUNT) setIsReady(true);
      };
      img.onload = finish;
      img.onerror = finish;
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // Draw Frame
  const drawFrame = useCallback((idx) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = imagesRef.current[idx];
    if (!img || !img.naturalWidth) return;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    
    if (canvas.width !== W || canvas.height !== H) {
      canvas.width = W;
      canvas.height = H;
    }

    // Use Math.max for 'cover' so the image fills the screen
    const scale = Math.max(W / img.naturalWidth, H / img.naturalHeight);
    const sw = img.naturalWidth * scale;
    const sh = img.naturalHeight * scale;
    
    ctx.clearRect(0, 0, W, H);
    // Draw centered
    ctx.drawImage(img, (W - sw) / 2, (H - sh) / 2, sw, sh);
  }, []);

  // Resize handler
  useEffect(() => {
    const handleResize = () => drawFrame(currentFrameRef.current);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  // Initial draw
  useEffect(() => {
    if (isReady) drawFrame(0);
  }, [isReady, drawFrame]);

  // Scroll logic
  useEffect(() => {
    if (!sectionRef.current || !isReady) return;
    
    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3,
      onUpdate: (self) => {
        const progress = self.progress;
        const frameIdx = Math.min(Math.floor(progress * FRAME_COUNT), FRAME_COUNT - 1);
        if (frameIdx !== currentFrameRef.current) {
          currentFrameRef.current = frameIdx;
          drawFrame(frameIdx);
        }
      }
    });

    return () => trigger.kill();
  }, [isReady, drawFrame]);

  return (
    <section ref={sectionRef} style={{
      position: 'relative',
      width: '100%',
      height: '350vh', // Make section tall enough for scrolling
      backgroundColor: '#f1f1f1', // Pure white prevents the white shoe leather from becoming transparent!
      fontFamily: '"Inter", sans-serif'
    }}>
      {/* Sticky Container */}
      <div style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        height: '100vh',
        minHeight: '800px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: 0,
          width: '100%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.05), transparent)',
          zIndex: 0
        }} />

        <div className="container-lg" style={{ position: 'relative', zIndex: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', height: '100%' }}>
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{
              flex: '1 1 50%',
              paddingRight: '40px',
              paddingTop: '80px', // For navbar space
              zIndex: 10
            }}
          >
            <motion.p variants={itemVariants} style={{
              fontSize: '0.85rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#444',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <span style={{ width: '40px', height: '1px', backgroundColor: '#444' }}></span>
              PRECISION ENGINEERED FOOTWEAR
            </motion.p>
            
            <motion.h1 variants={itemVariants} style={{
              fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '32px',
              whiteSpace: 'pre-line',
              color: '#121212' // Explicitly dark to override global CSS
            }}>
              ENGINEERED<br/>FOR EVERY<br/>STEP.
            </motion.h1>
            
            <motion.p variants={itemVariants} style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: '#444',
              maxWidth: '480px',
              marginBottom: '48px',
              fontWeight: 400
            }}>
              Premium footwear engineered with advanced manufacturing, refined materials and uncompromising attention to detail.
            </motion.p>
            
            <motion.div variants={itemVariants} style={{
              display: 'flex',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <Link to="/products" style={{
                padding: '16px 36px',
                backgroundColor: '#1C1C1E',
                color: '#FFFFFF',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textDecoration: 'none',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
                borderRadius: '2px'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#333'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#1C1C1E'}
              >
                EXPLORE COLLECTION
              </Link>
              <Link to="/manufacturing" style={{
                padding: '16px 36px',
                backgroundColor: 'transparent',
                color: '#1C1C1E',
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textDecoration: 'none',
                border: '1px solid #1C1C1E',
                transition: 'background-color 0.3s ease, color 0.3s ease',
                borderRadius: '2px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#1C1C1E';
                e.currentTarget.style.color = '#FFFFFF';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#1C1C1E';
              }}
              >
                OUR MANUFACTURING
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Content - Scroll-Driven Canvas */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              zIndex: 1
            }}
          >
            {/* Scroll Hint overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                zIndex: 10,
                color: '#121212', // Darker to show on white
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <span>Scroll to Spin</span>
              <div style={{
                width: '1px',
                height: '30px',
                backgroundColor: '#121212'
              }} />
            </motion.div>

            {/* The Canvas */}
            <canvas ref={canvasRef} style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 2
            }} />
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          section {
            /* Still tall for scroll, but structure changes */
          }
          section > div {
            flex-direction: column;
            padding-top: 100px;
          }
          section > div > div:first-of-type {
            width: 100% !important;
            height: 50% !important;
            bottom: 0 !important;
            top: auto !important;
            border-bottom-left-radius: 0 !important;
            border-top-left-radius: 30vw !important;
          }
          .container-lg {
            flex-direction: column;
            justify-content: center;
          }
          .container-lg > div {
            flex: none !important;
            width: 100%;
            padding: 0 !important;
            text-align: center;
          }
          .container-lg > div:first-child p:first-child {
            justify-content: center;
          }
          .container-lg > div:first-child p:first-child span {
            display: none;
          }
          .container-lg > div:first-child p {
            margin-left: auto;
            margin-right: auto;
          }
          .container-lg > div:first-child div {
            justify-content: center;
          }
          .container-lg > div:last-child {
            margin-top: 40px;
            height: 350px !important;
          }
        }
      `}</style>
    </section>
  );
}
