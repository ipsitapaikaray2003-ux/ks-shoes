import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Phone, MapPin, Mail, ShieldCheck } from 'lucide-react';

export default function HomeCtaSection() {
  return (
    <section className="section" id="home-cta" style={{ background: '#FFFFFF', padding: '100px 0' }}>
      <div className="container-lg">
        
        <div style={{
          position: 'relative',
          padding: '70px 40px',
          background: 'linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 100%)',
          border: '1px solid rgba(197, 160, 89, 0.35)',
          borderRadius: 'var(--rad-xl)',
          overflow: 'hidden',
          boxShadow: '0 25px 70px rgba(0,0,0,0.8)'
        }}>
          
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{
              fontSize: '0.76rem',
              fontFamily: 'var(--font-accent)',
              fontWeight: 800,
              letterSpacing: '0.15em',
              color: 'var(--accent-bronze)',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '14px'
            }}>
              Direct Factory Partnership Desk
            </span>

            <h2 style={{
              fontSize: 'clamp(2.2rem, 4.4vw, 3.8rem)',
              fontFamily: 'var(--font-accent)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: '#121212',
              lineHeight: 1.1,
              marginBottom: '20px'
            }}>
              Ready to Build Your <br />
              <span style={{ color: 'var(--gold-light)' }}>Next Footwear Collection?</span>
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--grey-mid)', lineHeight: 1.75, maxWidth: '680px', margin: '0 auto 38px' }}>
              Whether you have ready CAD files or an initial brand concept, our engineering team will provide rapid sample turnaround and an accurate OEM production estimate.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '18px',
              flexWrap: 'wrap',
              marginBottom: '45px'
            }}>
              <Link 
                to="/contact" 
                className="btn btn-primary btn-lg"
                style={{ padding: '16px 36px', fontSize: '0.85rem' }}
              >
                <span>Request a Manufacturing Quote</span>
                <ArrowRight size={16} />
              </Link>

              <a 
                href="https://wa.me/919429690496?text=Hello%20KS%20Shoes%2C%20I%20want%20to%20develop%20a%20footwear%20collection."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline btn-lg"
                style={{
                  padding: '16px 30px',
                  fontSize: '0.85rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <MessageSquare size={16} color="#22c55e" />
                <span>Chat on WhatsApp Desk</span>
              </a>
            </div>

            {/* Direct Factory Coordinates Strip */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '28px',
              paddingTop: '28px',
              borderTop: '1px solid rgba(0, 0, 0, 0.08)',
              fontSize: '0.84rem',
              color: 'var(--grey-mid)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={15} color="var(--gold-light)" />
                <span>Foundry Nagar, Agra, UP, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={15} color="var(--gold-light)" />
                <a href="tel:+919429690496" style={{ color: '#121212', textDecoration: 'none' }}>+91 94296 90496</a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={15} color="var(--gold-light)" />
                <a href="mailto:contact@ksshoes.com" style={{ color: '#121212', textDecoration: 'none' }}>contact@ksshoes.com</a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
