import React, { useState, useEffect } from 'react';

export default function ShoeCustomizerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: 'Custom Leather Sneaker',
      image: '/assets/images/slider_sneaker.jpg',
      alt: 'KS Enterprise Custom Leather Sneaker with Logo',
      callouts: {
        leather: {
          title: 'CUSTOM LEATHER',
          desc: 'Premium leather in the color and finish you choose.',
          x: '28%', y: '30%',
          align: 'left',
          arrowPath: 'M 180 50 Q 230 70 280 110'
        },
        sole: {
          title: 'CUSTOM SOLE',
          desc: 'Design your sole with unique patterns, colors, and materials.',
          x: '25%', y: '65%',
          align: 'left',
          arrowPath: 'M 180 30 Q 240 20 290 10'
        },
        tongue: {
          title: 'CUSTOM TONGUE',
          desc: 'Add your logo or name to the tongue for a unique touch.',
          x: '72%', y: '28%',
          align: 'right',
          arrowPath: 'M -10 50 Q -70 40 -120 70'
        },
        laces: {
          title: 'CUSTOM LACES',
          desc: 'Choose the lace color, material, and style that fits your brand.',
          x: '76%', y: '45%',
          align: 'right',
          arrowPath: 'M -10 30 Q -60 30 -110 50'
        },
        foam: {
          title: 'CUSTOM FOAM',
          desc: 'Select the perfect foam for comfort, support, and performance.',
          x: '75%', y: '68%',
          align: 'right',
          arrowPath: 'M -10 10 Q -80 0 -130 -20'
        }
      }
    },
    {
      id: 1,
      title: 'Custom Performance Sports & Running Shoe',
      image: '/assets/images/sports_running_shoe.jpg',
      alt: 'KS Enterprise Custom Athletic Sports & Running Shoe',
      callouts: {
        leather: {
          title: 'ENGINEERED MESH & KNIT',
          desc: 'Breathable lightweight jacquard weave or aerodynamic knit uppers.',
          x: '28%', y: '30%',
          align: 'left',
          arrowPath: 'M 180 50 Q 230 70 280 110'
        },
        sole: {
          title: 'HIGH-REBOUND EVA SOLE',
          desc: 'Shock-absorbing dual-density phylon with anti-skid rubber pods.',
          x: '25%', y: '65%',
          align: 'left',
          arrowPath: 'M 180 30 Q 240 20 290 10'
        },
        tongue: {
          title: 'CUSTOM BRANDED TONGUE',
          desc: 'Seamless thermal-pressed or debossed KS brand insignia.',
          x: '72%', y: '28%',
          align: 'right',
          arrowPath: 'M -10 50 Q -70 40 -120 70'
        },
        laces: {
          title: 'SPEED LACE SYSTEM',
          desc: 'Reflective bungee cords or flat high-tensile athletic laces.',
          x: '76%', y: '45%',
          align: 'right',
          arrowPath: 'M -10 30 Q -60 30 -110 50'
        },
        foam: {
          title: 'ERGONOMIC ARCH FOAM',
          desc: 'Custom-molded Ortholite insole engineered for endurance & rebound.',
          x: '75%', y: '68%',
          align: 'right',
          arrowPath: 'M -10 10 Q -80 0 -130 -20'
        }
      }
    },
    {
      id: 2,
      title: 'Custom High-Top Streetwear Trainer',
      image: '/assets/images/streetwear_hightop.jpg',
      alt: 'KS Enterprise Bespoke High-Top Streetwear Sneaker Collection',
      callouts: {
        leather: {
          title: 'MULTI-PANEL SUEDE & CANVAS',
          desc: 'Reinforced double-stitched suede panels and high-abrasion overlays.',
          x: '28%', y: '30%',
          align: 'left',
          arrowPath: 'M 180 50 Q 230 70 280 110'
        },
        sole: {
          title: 'VULCANIZED CUPSOLE',
          desc: 'Durable non-marking gum rubber sole with 360° sidewall stitching.',
          x: '25%', y: '65%',
          align: 'left',
          arrowPath: 'M 180 30 Q 240 20 290 10'
        },
        tongue: {
          title: 'PADDED LOGO COLLAR',
          desc: 'Extra padded collar and branded woven label for ankle support.',
          x: '72%', y: '28%',
          align: 'right',
          arrowPath: 'M -10 50 Q -70 40 -120 70'
        },
        laces: {
          title: 'FLAT WAXED LACES',
          desc: 'Premium dyed cotton laces matching your custom sneaker colorway.',
          x: '76%', y: '45%',
          align: 'right',
          arrowPath: 'M -10 30 Q -60 30 -110 50'
        },
        foam: {
          title: 'SHOCK-ABSORBING INSOLE',
          desc: 'Dual-density gel-cushioned footbed for street skate and everyday comfort.',
          x: '75%', y: '68%',
          align: 'right',
          arrowPath: 'M -10 10 Q -80 0 -130 -20'
        }
      }
    }
  ];

  const bottomPillars = [
    {
      title: 'YOUR DESIGN',
      desc: 'We bring your ideas to life.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
      )
    },
    {
      title: 'EXPERT CRAFTSMANSHIP',
      desc: 'Precision manufacturing with quality assurance.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="3"/>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>
      )
    },
    {
      title: 'YOUR BRAND IDENTITY',
      desc: 'Every detail reflects your brand.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      )
    },
    {
      title: 'END-TO-END SUPPORT',
      desc: 'From concept to doorstep.',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      )
    }
  ];

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Keyboard navigation & optional timer
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const cur = slides[currentSlide];

  return (
    <section 
      className="shoe-customizer-section" 
      id="customizer-showcase"
      style={{
        position: 'relative',
        background: 'linear-gradient(180deg, #0c0a06 0%, #16120a 50%, #0d0a06 100%)',
        color: '#ffffff',
        padding: '60px 0 40px',
        overflow: 'hidden',
        borderTop: '1px solid rgba(201, 168, 76, 0.2)',
        borderBottom: '1px solid rgba(201, 168, 76, 0.2)'
      }}
    >
      {/* Background warm lighting glow */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '450px',
        background: 'radial-gradient(ellipse at center, rgba(201, 168, 76, 0.18) 0%, rgba(201, 168, 76, 0.05) 50%, transparent 80%)',
        pointerEvents: 'none',
        filter: 'blur(50px)',
        zIndex: 0
      }}></div>

      <div className="container-lg" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Main Stage: Floating Shoe with Hotspot Callouts */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          minHeight: '620px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          {/* Left Arrow Navigation */}
          <button 
            onClick={prevSlide}
            aria-label="Previous Custom Shoe"
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(20, 16, 8, 0.75)',
              border: '1px solid rgba(201, 168, 76, 0.4)',
              color: 'var(--gold-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.6)'
            }}
          >
            ‹
          </button>

          {/* Right Arrow Navigation */}
          <button 
            onClick={nextSlide}
            aria-label="Next Custom Shoe"
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'rgba(20, 16, 8, 0.75)',
              border: '1px solid rgba(201, 168, 76, 0.4)',
              color: 'var(--gold-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.4rem',
              cursor: 'pointer',
              zIndex: 10,
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 20px rgba(0,0,0,0.6)'
            }}
          >
            ›
          </button>

          {/* Centerpiece Shoe Canvas */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1080px',
            height: '560px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* The Shoe Image */}
            <img 
              key={cur.id}
              src={`${cur.image}?v=3`} 
              alt={cur.alt}
              style={{
                width: '100%',
                maxHeight: '520px',
                objectFit: 'contain',
                filter: 'drop-shadow(0 25px 35px rgba(0,0,0,0.85))',
                animation: 'fadeIn 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both',
                userSelect: 'none'
              }}
            />

            {/* CALLOUT 1: TOP LEFT (CUSTOM LEATHER) */}
            <div className="custom-callout callout-top-left" style={{
              position: 'absolute',
              top: '18%',
              left: '4%',
              maxWidth: '220px',
              textAlign: 'left',
              zIndex: 4,
              animation: 'fadeInUp 0.6s ease both'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(201, 168, 76, 0.8)',
                  background: 'rgba(20, 16, 8, 0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(201, 168, 76, 0.3)',
                  flexShrink: 0
                }}>
                  {/* Leather Hide Icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6">
                    <path d="M12 2C8 2 6 4 6 7c0 2-1 3-3 4 2 1 3 2 3 4 0 3 2 5 6 5s6-2 6-5c0-2 1-3 3-4-2-1-3-2-3-4 0-3-2-5-6-5z"/>
                  </svg>
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                  margin: 0
                }}>
                  {cur.callouts.leather.title}
                </h4>
              </div>
              <p style={{
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.5,
                margin: 0,
                paddingLeft: '56px'
              }}>
                {cur.callouts.leather.desc}
              </p>
              {/* Pointer Curved Arrow to Shoe */}
              <svg width="120" height="40" style={{ position: 'absolute', right: '-110px', top: '15px', pointerEvents: 'none', opacity: 0.8 }}>
                <path d="M 0 10 Q 60 5 110 32" fill="none" stroke="rgba(201, 168, 76, 0.6)" strokeWidth="1.5" strokeDasharray="3,3" />
                <circle cx="110" cy="32" r="3" fill="#C9A84C" />
              </svg>
            </div>

            {/* CALLOUT 2: BOTTOM LEFT (CUSTOM SOLE) */}
            <div className="custom-callout callout-bottom-left" style={{
              position: 'absolute',
              bottom: '22%',
              left: '3%',
              maxWidth: '220px',
              textAlign: 'left',
              zIndex: 4,
              animation: 'fadeInUp 0.6s 0.1s ease both'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(201, 168, 76, 0.8)',
                  background: 'rgba(20, 16, 8, 0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(201, 168, 76, 0.3)',
                  flexShrink: 0
                }}>
                  {/* Sole Tread Icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6">
                    <path d="M8 3h8a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3z"/>
                    <path d="M7 8h10M7 12h10M7 16h10"/>
                  </svg>
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                  margin: 0
                }}>
                  {cur.callouts.sole.title}
                </h4>
              </div>
              <p style={{
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.5,
                margin: 0,
                paddingLeft: '56px'
              }}>
                {cur.callouts.sole.desc}
              </p>
              {/* Pointer Curved Arrow to Sole */}
              <svg width="110" height="30" style={{ position: 'absolute', right: '-100px', top: '15px', pointerEvents: 'none', opacity: 0.8 }}>
                <path d="M 0 15 Q 50 15 100 5" fill="none" stroke="rgba(201, 168, 76, 0.6)" strokeWidth="1.5" strokeDasharray="3,3" />
                <circle cx="100" cy="5" r="3" fill="#C9A84C" />
              </svg>
            </div>

            {/* CALLOUT 3: TOP RIGHT (CUSTOM TONGUE) */}
            <div className="custom-callout callout-top-right" style={{
              position: 'absolute',
              top: '16%',
              right: '6%',
              maxWidth: '220px',
              textAlign: 'left',
              zIndex: 4,
              animation: 'fadeInUp 0.6s ease both'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(201, 168, 76, 0.8)',
                  background: 'rgba(20, 16, 8, 0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(201, 168, 76, 0.3)',
                  flexShrink: 0
                }}>
                  {/* Tongue Shield Icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                  margin: 0
                }}>
                  {cur.callouts.tongue.title}
                </h4>
              </div>
              <p style={{
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.5,
                margin: 0,
                paddingLeft: '56px'
              }}>
                {cur.callouts.tongue.desc}
              </p>
              {/* Pointer Curved Arrow to Tongue */}
              <svg width="100" height="40" style={{ position: 'absolute', left: '-90px', top: '15px', pointerEvents: 'none', opacity: 0.8 }}>
                <path d="M 100 15 Q 40 10 5 35" fill="none" stroke="rgba(201, 168, 76, 0.6)" strokeWidth="1.5" strokeDasharray="3,3" />
                <circle cx="5" cy="35" r="3" fill="#C9A84C" />
              </svg>
            </div>

            {/* CALLOUT 4: MIDDLE RIGHT (CUSTOM LACES) */}
            <div className="custom-callout callout-mid-right" style={{
              position: 'absolute',
              top: '40%',
              right: '2%',
              maxWidth: '220px',
              textAlign: 'left',
              zIndex: 4,
              animation: 'fadeInUp 0.6s 0.1s ease both'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(201, 168, 76, 0.8)',
                  background: 'rgba(20, 16, 8, 0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(201, 168, 76, 0.3)',
                  flexShrink: 0
                }}>
                  {/* Crossed Laces Icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6">
                    <line x1="5" y1="5" x2="19" y2="19"/>
                    <line x1="19" y1="5" x2="5" y2="19"/>
                    <circle cx="5" cy="5" r="1.5" fill="#C9A84C"/>
                    <circle cx="19" cy="19" r="1.5" fill="#C9A84C"/>
                    <circle cx="19" cy="5" r="1.5" fill="#C9A84C"/>
                    <circle cx="5" cy="19" r="1.5" fill="#C9A84C"/>
                  </svg>
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                  margin: 0
                }}>
                  {cur.callouts.laces.title}
                </h4>
              </div>
              <p style={{
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.5,
                margin: 0,
                paddingLeft: '56px'
              }}>
                {cur.callouts.laces.desc}
              </p>
              {/* Pointer Curved Arrow to Laces */}
              <svg width="90" height="30" style={{ position: 'absolute', left: '-80px', top: '15px', pointerEvents: 'none', opacity: 0.8 }}>
                <path d="M 90 15 Q 40 20 5 10" fill="none" stroke="rgba(201, 168, 76, 0.6)" strokeWidth="1.5" strokeDasharray="3,3" />
                <circle cx="5" cy="10" r="3" fill="#C9A84C" />
              </svg>
            </div>

            {/* CALLOUT 5: BOTTOM RIGHT (CUSTOM FOAM) */}
            <div className="custom-callout callout-bottom-right" style={{
              position: 'absolute',
              bottom: '18%',
              right: '4%',
              maxWidth: '220px',
              textAlign: 'left',
              zIndex: 4,
              animation: 'fadeInUp 0.6s 0.2s ease both'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  border: '1.5px solid rgba(201, 168, 76, 0.8)',
                  background: 'rgba(20, 16, 8, 0.85)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 15px rgba(201, 168, 76, 0.3)',
                  flexShrink: 0
                }}>
                  {/* Layered Foam Icon */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                    <polyline points="2 17 12 22 22 17"/>
                    <polyline points="2 12 12 17 22 12"/>
                  </svg>
                </div>
                <h4 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.95rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                  margin: 0
                }}>
                  {cur.callouts.foam.title}
                </h4>
              </div>
              <p style={{
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.75)',
                lineHeight: 1.5,
                margin: 0,
                paddingLeft: '56px'
              }}>
                {cur.callouts.foam.desc}
              </p>
              {/* Pointer Curved Arrow to Insole/Foam */}
              <svg width="90" height="30" style={{ position: 'absolute', left: '-80px', top: '15px', pointerEvents: 'none', opacity: 0.8 }}>
                <path d="M 90 15 Q 30 15 5 0" fill="none" stroke="rgba(201, 168, 76, 0.6)" strokeWidth="1.5" strokeDasharray="3,3" />
                <circle cx="5" cy="0" r="3" fill="#C9A84C" />
              </svg>
            </div>

          </div>
        </div>

        {/* 3 Pagination Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          margin: '20px 0 45px'
        }}>
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: currentSlide === idx ? '28px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: currentSlide === idx ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.25)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.35s ease',
                padding: 0
              }}
            />
          ))}
        </div>

        {/* 4 Bottom Value Props (Exactly matching MakeMyShoe screenshot) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '36px'
        }}>
          {bottomPillars.map((p, idx) => (
            <div 
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px'
              }}
            >
              <div style={{
                color: 'var(--gold-primary)',
                flexShrink: 0,
                marginTop: '2px'
              }}>
                {p.icon}
              </div>
              <div>
                <h5 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  color: '#ffffff',
                  marginBottom: '6px',
                  textTransform: 'uppercase'
                }}>
                  {p.title}
                </h5>
                <p style={{
                  fontSize: '0.8rem',
                  color: 'var(--grey-mid)',
                  lineHeight: 1.5,
                  margin: 0
                }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
