import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';

const FRAME_COUNT = 300;

export default function Hero() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload images
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/frames/ezgif-frame-${frameNum}.jpg`;
      img.onload = () => {
        loadedCount++;
        // Draw first frame when it loads if it's the first one
        if (i === 1) {
          drawFrame(0, [img]); 
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (index, imgArray = images) => {
    const canvas = canvasRef.current;
    if (!canvas || !imgArray[index] || !imgArray[index].complete || imgArray[index].naturalWidth === 0) return;
    
    const context = canvas.getContext('2d');
    const img = imgArray[index];
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
       drawWidth = canvas.width;
       drawHeight = canvas.width / imgRatio;
       offsetX = 0;
       offsetY = (canvas.height - drawHeight) / 2;
    } else {
       drawHeight = canvas.height;
       drawWidth = canvas.height * imgRatio;
       offsetX = (canvas.width - drawWidth) / 2;
       offsetY = 0;
    }
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  // Resize canvas handler
  useEffect(() => {
    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame
        const currentProgress = scrollYProgress.get();
        const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(currentProgress * FRAME_COUNT));
        drawFrame(frameIndex);
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => window.removeEventListener('resize', resizeCanvas);
  }, [images, scrollYProgress]);

  // Update canvas on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    );
    drawFrame(frameIndex);
  });

  // TEXT ANIMATIONS BASED ON SCROLL PROGRESS
  // We must define full ranges [0, ..., 1] to prevent overlapping/extrapolation bugs
  
  // Phase 1 (0 to 0.3)
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 1], [1, 1, 0, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2, 0.3, 1], [0, 0, -50, -50]);
  const scale1 = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.9, 0.9]);
  
  // Phase 2 (0.35 to 0.65)
  const opacity2 = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.6, 0.7, 1], [0, 0, 1, 1, 0, 0]);
  const y2 = useTransform(scrollYProgress, [0, 0.3, 0.4, 0.6, 0.7, 1], [50, 50, 0, 0, -50, -50]);

  // Phase 3 (0.7 to 1)
  const opacity3 = useTransform(scrollYProgress, [0, 0.65, 0.75, 1], [0, 0, 1, 1]);
  const y3 = useTransform(scrollYProgress, [0, 0.65, 0.75, 1], [50, 50, 0, 0]);

  return (
    <section 
      ref={containerRef}
      style={{ 
        position: 'relative',
        width: '100%',
        height: '400vh', 
        backgroundColor: '#000', 
        fontFamily: '"Outfit", sans-serif' // Premium modern font
      }}
    >
      <div style={{
        position: 'sticky',
        top: 0,
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center'
      }}>
        {/* Canvas Background */}
        <canvas 
          ref={canvasRef} 
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }} 
        />
        
        {/* Darker Gradient Overlay for text readability on both sides */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 25%, rgba(0,0,0,0.3) 75%, rgba(0,0,0,0.8) 100%)',
          zIndex: 2,
          pointerEvents: 'none'
        }} />

        {/* Text Container */}
        <div className="container-lg" style={{ 
          width: '100%', 
          height: '100%', 
          position: 'relative',
          zIndex: 10
        }}>
          
          {/* PHASE 1 TEXT */}
          <motion.div 
            style={{ 
              position: 'absolute',
              top: '30%',
              left: '10%',
              maxWidth: '500px',
              opacity: opacity1,
              y: y1,
              scale: scale1
            }}
          >
            <div style={{
              fontSize: '0.8rem',
              fontWeight: 400,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#DDD',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <span style={{ width: '40px', height: '1px', backgroundColor: '#DDD' }}></span>
              PRECISION ENGINEERED
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 4.5vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FFF',
              margin: '0 0 24px 0'
            }}>
              Engineered to<br/>
              <strong style={{ fontWeight: 700 }}>Move Forward.</strong>
            </h1>
            
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.6,
              color: '#FFF',
              fontWeight: 400,
              maxWidth: '85%',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}>
              Advanced manufacturing, refined materials, and uncompromising attention to detail.
            </p>
          </motion.div>

          {/* PHASE 2 TEXT */}
          <motion.div 
            style={{ 
              position: 'absolute',
              top: '40%',
              right: '10%',
              maxWidth: '450px',
              textAlign: 'right',
              opacity: opacity2,
              y: y2
            }}
          >
            <div style={{
              fontSize: '0.8rem',
              fontWeight: 400,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#DDD',
              marginBottom: '15px',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '15px'
            }}>
              INNOVATION <span style={{ width: '40px', height: '1px', backgroundColor: '#DDD' }}></span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#FFF',
              margin: '0 0 20px 0'
            }}>
              Seamless<br/>
              <strong style={{ fontWeight: 700 }}>Construction</strong>
            </h2>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.6,
              color: '#FFF',
              fontWeight: 400,
              marginLeft: 'auto',
              maxWidth: '90%',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}>
              Every angle meticulously calculated for maximum aerodynamic performance and striking style.
            </p>
          </motion.div>

          {/* PHASE 3 TEXT & CTA */}
          <motion.div 
            style={{ 
              position: 'absolute',
              top: '30%',
              left: '10%',
              maxWidth: '500px',
              opacity: opacity3,
              y: y3
            }}
          >
            <div style={{
              fontSize: '0.8rem',
              fontWeight: 400,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              color: '#DDD',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '15px'
            }}>
              <span style={{ width: '40px', height: '1px', backgroundColor: '#DDD' }}></span>
              THE FUTURE
            </div>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 4vw, 4rem)',
              fontWeight: 300,
              lineHeight: 1.1,
              color: '#FFF',
              margin: '0 0 24px 0'
            }}>
              Uncompromising<br/>
              <strong style={{ fontWeight: 700 }}>Quality</strong>
            </h2>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.6,
              color: '#FFF',
              marginBottom: '40px',
              fontWeight: 400,
              maxWidth: '85%',
              textShadow: '0 2px 10px rgba(0,0,0,0.5)'
            }}>
              Built for the modern visionary who demands excellence in every step.
            </p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '24px'
            }}>
              <Link to="/products" style={{
                display: 'inline-flex',
                padding: '16px 36px',
                backgroundColor: '#FFF',
                color: '#111',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '4px', // softer edge
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = '#EEE';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = '#FFF';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              >
                EXPLORE COLLECTION
              </Link>
            </div>
          </motion.div>

        </div>



      </div>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');
        
        @media (max-width: 992px) {
          .container-lg {
            padding: 0 20px !important;
          }
          .container-lg > div {
            left: 5% !important;
            right: 5% !important;
            text-align: left !important; /* Keep it left aligned on mobile for consistency */
            max-width: 90% !important;
          }
          /* Override right alignment for phase 2 on mobile */
          .container-lg > div:nth-child(2) {
            text-align: left !important;
          }
          .container-lg > div:nth-child(2) > div {
            justify-content: flex-start !important;
            flex-direction: row-reverse;
          }
          .container-lg > div:nth-child(2) p {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
