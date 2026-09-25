import React, { useState } from 'react';

export default function ManufacturingVideoShowcase() {
  const [activeVideo, setActiveVideo] = useState('L3gp310VwUA');
  const [activeStep, setActiveStep] = useState(0);

  const videos = [
    {
      id: 'L3gp310VwUA',
      title: 'Full Agra Factory Production Tour',
      tag: 'Industrial Scale & Assembly',
      desc: 'Inside look at high-volume shoe manufacturing: cutting, automated lasting, sole vulcanization, and quality assurance in Agra.'
    },
    {
      id: 'wQ3zW4nB5O0',
      title: 'Artisanal Handcrafting & Lasting',
      tag: 'Bespoke Craftsmanship',
      desc: 'Master shoemakers demonstrating hand-pulling, Goodyear welt stitching, insole channeling, and bespoke finishing techniques.'
    }
  ];

  const steps = [
    {
      step: '01',
      title: 'Raw Leather Sourcing & Hide Clicking',
      category: 'Leather Selection',
      tagline: 'Only Top 5% Grade-A Full-Grain Leather',
      image: '/assets/images/craft_leather_cut.jpg',
      desc: 'Every shoe begins with rigorous hide grading. We inspect tensile strength, grain consistency, and natural elasticity before master clickers cut individual upper panels using precision brass templates and laser cutting tables to ensure zero structural flaws.',
      highlights: [
        'Full-grain Italian calfskin & supple Agra crust leathers',
        'Thickness calibrated to 1.2mm – 1.4mm for optimal breathability',
        'Directional grain cutting for maximum shoe shape memory'
      ]
    },
    {
      step: '02',
      title: 'Skiving & Precision Needle Stitching',
      category: 'Stitching & Upper Assembly',
      tagline: 'Double-Locked Bonded Nylon Stitching',
      image: '/assets/images/craft_stitching.jpg',
      desc: 'Cut panels undergo precision edge-skiving (feathering leather edges) so seams lie completely flush. Upper components are hand-aligned and sewn using high-torque industrial sewing machines with bonded nylon threads, brogue punch perforations, and padded collar linings.',
      highlights: [
        'Edge-skiving down to 0.4mm for seamless overlapping seams',
        'Twin-needle lockstitching for tear-proof reinforcement',
        'Brogueing, medallion punch details, and blind eyelet setting'
      ]
    },
    {
      step: '03',
      title: 'Anatomical Lasting & Welt Construction',
      category: 'How It Is Made',
      tagline: 'Goodyear Welted & Blake Stitch Lasting',
      image: '/assets/images/craft_lasting.jpg',
      desc: 'The stitched upper is conditioned and stretched over anatomical wooden or composite shoe lasts. Using lasting pincers and pneumatic presses, the leather is shaped to hug foot contours, followed by Goodyear welted rib cementing or Blake sole stitching for lifetime resolability.',
      highlights: [
        'Ergonomic lasts engineered for Asian & Western sizing fits',
        'Goodyear welt construction with cork filler footbed mold',
        'Hydraulic sole bonding with 8-bar pneumatic curing pressure'
      ]
    },
    {
      step: '04',
      title: 'Artisan Patina Colouring & Burnishing',
      category: 'Hand Dyeing & Finishing',
      tagline: 'Multi-Tone Hand-Painted Museum Patina',
      image: '/assets/images/craft_colouring.jpg',
      desc: 'Raw crust leather comes alive in the finishing salon. Master colorists apply natural aniline dyes by hand using wool daubers and sponges, building rich gradient layers of cognac, mahogany, or espresso. Edges are iron-burnished and toe caps receive a mirror glaze finish.',
      highlights: [
        'Hand-applied ombre shading and multi-layered patina dyeing',
        'Carnauba & beeswax mirror gloss buffing on toe caps',
        'Weather-resistant hydrophobic sealant and edge burnish'
      ]
    }
  ];

  return (
    <section className="section" id="manufacturing-video" style={{ background: 'var(--black-main)', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient background glows */}
      <div className="glow-orb glow-orb-gold" style={{ width: '600px', height: '600px', top: '-100px', right: '-150px', opacity: 0.12 }}></div>
      <div className="glow-orb glow-orb-gold" style={{ width: '500px', height: '500px', bottom: '0', left: '-100px', opacity: 0.1 }}></div>

      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center" style={{ maxWidth: '850px', margin: '0 auto 48px' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            In-House Factory Craftsmanship
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 3.2rem)', marginBottom: '16px' }}>
            From Raw Hide to Finished Pair: <span className="gold-text">The Art of Footwear Manufacturing</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--white-70)', lineHeight: '1.8' }}>
            Step inside our Agra shoe manufacturing lines. Witness how premium raw leather is selected, cut, precision-stitched, lasted, hand-dyed with artisan patina, and molded into world-class footwear.
          </p>
        </div>

        {/* Video Switcher Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '14px',
          marginBottom: '28px',
          flexWrap: 'wrap'
        }}>
          {videos.map((vid) => (
            <button
              key={vid.id}
              onClick={() => setActiveVideo(vid.id)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 24px',
                borderRadius: 'var(--rad-pill)',
                background: activeVideo === vid.id ? 'var(--grad-gold)' : 'rgba(255,255,255,0.05)',
                color: activeVideo === vid.id ? 'var(--black-deep)' : 'var(--white-90)',
                border: activeVideo === vid.id ? 'none' : '1px solid rgba(201, 168, 76, 0.3)',
                fontWeight: 700,
                fontSize: '0.85rem',
                letterSpacing: '0.05em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeVideo === vid.id ? '0 4px 25px rgba(201,168,76,0.35)' : 'none'
              }}
            >
              <span style={{ fontSize: '1rem' }}>▶</span>
              <span>{vid.title}</span>
              <span style={{
                fontSize: '0.7rem',
                opacity: 0.8,
                background: activeVideo === vid.id ? 'rgba(0,0,0,0.15)' : 'rgba(201,168,76,0.15)',
                padding: '2px 8px',
                borderRadius: '12px'
              }}>
                {vid.tag}
              </span>
            </button>
          ))}
        </div>

        {/* High-Definition Cinematic Video Player Container */}
        <div style={{
          position: 'relative',
          maxWidth: '1080px',
          margin: '0 auto 64px',
          borderRadius: '24px',
          padding: '10px',
          background: 'linear-gradient(145deg, rgba(201,168,76,0.4) 0%, rgba(20,20,20,0.9) 40%, rgba(201,168,76,0.2) 100%)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.9), 0 0 50px rgba(201,168,76,0.15)'
        }}>
          <div style={{
            position: 'relative',
            paddingBottom: '56.25%', // 16:9 Aspect Ratio
            height: 0,
            overflow: 'hidden',
            borderRadius: '18px',
            background: '#FFFFFF'
          }}>
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${activeVideo}?autoplay=0&rel=0&modestbranding=1`}
              title="KS Enterprise Shoe Manufacturing Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '18px'
              }}
            ></iframe>
          </div>

          {/* Player Bottom Status Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '14px 20px 6px',
            color: 'var(--grey-mid)',
            fontSize: '0.8rem',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4CAF50', display: 'inline-block' }}></span>
              <span style={{ color: 'var(--white-90)', fontWeight: 600 }}>Agra Factory Production Line</span>
              <span>• Certified ISO 9001:2015 Footwear Facility</span>
            </div>
            <div style={{ color: 'var(--gold-light)' }}>
              100% In-House Lasting, Stitching &amp; Hand-Patina Finishing
            </div>
          </div>
        </div>

        {/* Step-by-Step Craftsmanship Breakdown (Leather -> Stitch -> Lasting -> Colouring) */}
        <div style={{ marginTop: '30px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <span style={{
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--gold-primary)',
              fontWeight: 700
            }}>
              Interactive Manufacturing Journey
            </span>
            <h3 style={{ fontSize: '1.8rem', color: '#121212', marginTop: '8px' }}>
              4 Master Stages of Shoe Creation
            </h3>
          </div>

          {/* Interactive Navigation Pills */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '12px',
            marginBottom: '32px'
          }}>
            {steps.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                style={{
                  padding: '16px 14px',
                  borderRadius: '14px',
                  background: activeStep === idx ? 'var(--black-elevated)' : 'var(--black-card)',
                  border: activeStep === idx ? '1.5px solid var(--gold-primary)' : '1px solid var(--black-border)',
                  color: activeStep === idx ? 'var(--gold-light)' : 'var(--grey-mid)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.3s ease',
                  position: 'relative'
                }}
              >
                <div style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: activeStep === idx ? 'var(--gold-primary)' : 'var(--grey-dark)',
                  marginBottom: '4px'
                }}>
                  STAGE {item.step}
                </div>
                <div style={{
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  color: activeStep === idx ? 'var(--white)' : 'var(--grey-light)',
                  lineHeight: 1.3
                }}>
                  {item.category}
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Feature Showcase Card */}
          <div style={{
            background: 'var(--black-card)',
            border: '1px solid rgba(201, 168, 76, 0.25)',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
            display: 'grid',
            gridTemplateColumns: '1.1fr 1fr',
            gap: '0',
            alignItems: 'stretch'
          }}>
            {/* Step Content */}
            <div style={{ padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <span style={{
                  display: 'inline-block',
                  background: 'rgba(201, 168, 76, 0.15)',
                  color: 'var(--gold-light)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  letterSpacing: '0.05em'
                }}>
                  STAGE {steps[activeStep].step} OF 04
                </span>
                <span style={{ color: 'var(--grey-mid)', fontSize: '0.82rem' }}>
                  {steps[activeStep].tagline}
                </span>
              </div>

              <h3 style={{ fontSize: '1.85rem', color: '#121212', marginBottom: '18px', lineHeight: 1.25 }}>
                {steps[activeStep].title}
              </h3>

              <p style={{ fontSize: '0.98rem', color: 'var(--white-70)', lineHeight: '1.8', marginBottom: '24px' }}>
                {steps[activeStep].desc}
              </p>

              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold-primary)', fontWeight: 700, marginBottom: '12px' }}>
                  Key Craftsmanship Standards:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {steps[activeStep].highlights.map((h, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.88rem', color: 'var(--white-90)' }}>
                      <span style={{ color: 'var(--gold-primary)', fontSize: '1.1rem' }}>✓</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <a
                  href="#hero"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn btn-outline"
                  style={{ fontSize: '0.8rem', padding: '10px 22px' }}
                >
                  Back to Top
                </a>
                <a
                  href="https://wa.me/911234567890?text=Hello%20KS%20Enterprise%2C%20I%20saw%20your%20manufacturing%20video%20and%20want%20to%20know%20more%20about%20custom%20production."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ fontSize: '0.8rem', padding: '10px 22px' }}
                >
                  Inquire Production
                </a>
              </div>
            </div>

            {/* Step Image */}
            <div style={{ position: 'relative', minHeight: '380px', overflow: 'hidden' }}>
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(17,17,17,0.8) 0%, transparent 40%, rgba(0,0,0,0.4) 100%)'
              }}></div>
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                background: 'rgba(10,10,10,0.85)',
                padding: '8px 16px',
                borderRadius: 'var(--rad-pill)',
                border: '1px solid rgba(201,168,76,0.3)',
                fontSize: '0.75rem',
                color: 'var(--gold-light)',
                fontWeight: 600,
                backdropFilter: 'blur(8px)'
              }}>
                ✦ Agra Atelier Verified
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
