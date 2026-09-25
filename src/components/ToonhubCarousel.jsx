import React, { useState, useEffect, useCallback } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const IMAGES = [
  { src: '/assets/images/shoe-hero-transparent.png', bg: '#F4845F', panel: '#F79B7F' },
  { src: '/assets/images/shoe_cad_wireframe.png', bg: '#6BBF7A', panel: '#85CC92' },
  { src: '/assets/images/shoe_upper_construction.png', bg: '#E882B4', panel: '#ED9DC4' },
  { src: '/assets/images/shoe_outsole_sole.png', bg: '#6EB5FF', panel: '#8DC4FF' },
];

export default function ToonhubCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    // Preload images
    IMAGES.forEach(img => {
      const image = new Image();
      image.src = img.src;
    });

    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigate = useCallback((direction) => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setActiveIndex(prev => {
      if (direction === 'next') return (prev + 1) % 4;
      return (prev + 3) % 4;
    });

    setTimeout(() => {
      setIsAnimating(false);
    }, 650);
  }, [isAnimating]);

  // Derive roles
  const center = activeIndex;
  const left = (activeIndex + 3) % 4;
  const right = (activeIndex + 1) % 4;
  const back = (activeIndex + 2) % 4;

  const getRoleStyle = (index) => {
    const baseStyle = {
      position: 'absolute',
      aspectRatio: '0.6 / 1',
      transition: 'transform 650ms cubic-bezier(0.4,0,0.2,1), filter 650ms cubic-bezier(0.4,0,0.2,1), opacity 650ms cubic-bezier(0.4,0,0.2,1), left 650ms cubic-bezier(0.4,0,0.2,1), bottom 650ms cubic-bezier(0.4,0,0.2,1), height 650ms cubic-bezier(0.4,0,0.2,1)',
      willChange: 'transform, filter, opacity'
    };

    if (index === center) {
      return {
        ...baseStyle,
        transform: `translateX(-50%) scale(${isMobile ? 1.25 : 1.68})`,
        filter: 'blur(0px)',
        opacity: 1,
        zIndex: 20,
        left: '50%',
        height: isMobile ? '60%' : '92%',
        bottom: isMobile ? '22%' : '0'
      };
    }
    if (index === left) {
      return {
        ...baseStyle,
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 10,
        left: isMobile ? '20%' : '30%',
        height: isMobile ? '16%' : '28%',
        bottom: isMobile ? '32%' : '12%'
      };
    }
    if (index === right) {
      return {
        ...baseStyle,
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(2px)',
        opacity: 0.85,
        zIndex: 10,
        left: isMobile ? '80%' : '70%',
        height: isMobile ? '16%' : '28%',
        bottom: isMobile ? '32%' : '12%'
      };
    }
    if (index === back) {
      return {
        ...baseStyle,
        transform: 'translateX(-50%) scale(1)',
        filter: 'blur(4px)',
        opacity: 1, // as specified in prompt
        zIndex: 5,
        left: '50%',
        height: isMobile ? '13%' : '22%',
        bottom: isMobile ? '32%' : '12%'
      };
    }
    return baseStyle;
  };

  return (
    <div style={{
      backgroundColor: IMAGES[activeIndex].bg,
      transition: 'background-color 650ms cubic-bezier(0.4,0,0.2,1)',
      fontFamily: "'Inter', sans-serif",
      position: 'relative',
      width: '100%',
      overflow: 'hidden'
    }}>
      <div style={{ position: 'relative', width: '100%', height: '100vh', overflow: 'hidden' }}>
        
        {/* 1. Grain overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          pointerEvents: 'none',
          zIndex: 50,
          opacity: 0.4,
          backgroundSize: '200px 200px',
          backgroundRepeat: 'repeat',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E")`
        }} />

        {/* 2. Giant ghost text */}
        <div style={{
          position: 'absolute',
          left: 0, right: 0,
          top: '18%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 2,
          fontFamily: "'Anton', sans-serif",
          fontSize: 'clamp(90px, 28vw, 380px)',
          fontWeight: 900,
          color: 'white',
          opacity: 1,
          lineHeight: 1,
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap'
        }}>
          3D SHAPE
        </div>

        {/* 3. Top-left brand label */}
        <div style={{
          position: 'absolute',
          top: '24px',
          left: isMobile ? '16px' : '32px',
          zIndex: 60,
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          color: 'white',
          opacity: 0.9,
          letterSpacing: '0.18em'
        }}>
          TOONHUB
        </div>

        {/* 4. Carousel Images */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 3 }}>
          {IMAGES.map((img, index) => (
            <div key={index} style={getRoleStyle(index)}>
              <img 
                src={img.src} 
                draggable="false"
                alt="3D Shape"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  objectPosition: 'bottom center',
                  pointerEvents: 'none'
                }} 
              />
            </div>
          ))}
        </div>

        {/* 5. Bottom-left text + nav buttons */}
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '24px' : '80px',
          left: isMobile ? '16px' : '96px',
          zIndex: 60,
          maxWidth: '320px'
        }}>
          <p style={{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            marginBottom: isMobile ? '8px' : '12px',
            fontSize: isMobile ? '1rem' : '22px',
            color: 'white',
            opacity: 0.95,
            margin: 0
          }}>
            TOONHUB FIGURINES
          </p>
          
          {!isMobile && (
            <p style={{
              fontSize: '0.875rem',
              color: 'white',
              opacity: 0.85,
              lineHeight: 1.6,
              marginBottom: '20px',
              marginTop: '12px'
            }}>
              The artwork is stunning, shipped fully prepared. The finish is a vision, the 3D craft is flawless. Many thanks! Wishing you the win. Order now.
            </p>
          )}

          <div style={{ display: 'flex', gap: '12px', marginTop: isMobile ? '16px' : '0' }}>
            <button 
              onClick={() => navigate('prev')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              style={{
                width: isMobile ? '48px' : '64px',
                height: isMobile ? '48px' : '64px',
                backgroundColor: 'transparent',
                border: '2px solid white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 150ms, background-color 150ms',
                padding: 0
              }}
            >
              <ArrowLeft color="white" size={26} strokeWidth={2.25} />
            </button>
            <button 
              onClick={() => navigate('next')}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.12)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              style={{
                width: isMobile ? '48px' : '64px',
                height: isMobile ? '48px' : '64px',
                backgroundColor: 'transparent',
                border: '2px solid white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'transform 150ms, background-color 150ms',
                padding: 0
              }}
            >
              <ArrowRight color="white" size={26} strokeWidth={2.25} />
            </button>
          </div>
        </div>

        {/* 6. Bottom-right link */}
        <div style={{
          position: 'absolute',
          bottom: isMobile ? '24px' : '80px',
          right: isMobile ? '16px' : '40px',
          zIndex: 60
        }}>
          <a 
            href="#" 
            onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '0.95'}
            style={{
              display: 'flex',
              alignItems: 'center',
              fontFamily: "'Anton', sans-serif",
              fontSize: 'clamp(20px, 4vw, 56px)',
              fontWeight: 400,
              color: 'white',
              opacity: 0.95,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'opacity 200ms'
            }}
          >
            DISCOVER IT
            <ArrowRight 
              color="white" 
              strokeWidth={2.25} 
              style={{ 
                width: isMobile ? '20px' : '32px', 
                height: isMobile ? '20px' : '32px',
                marginLeft: '8px'
              }} 
            />
          </a>
        </div>

      </div>
    </div>
  );
}
