import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageSquare, ArrowUpRight, ShieldCheck, Factory, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      style={{
        background: '#FFFFFF',
        color: '#121212',
        borderTop: '1px solid rgba(0, 0, 0, 0.08)',
        paddingTop: '80px',
        paddingBottom: '30px',
        position: 'relative'
      }}
    >
      <div className="container-lg">
        {/* Top Feature Certifications Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px',
          paddingBottom: '50px',
          marginBottom: '50px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'rgba(197, 160, 89, 0.1)',
              border: '1px solid rgba(197, 160, 89, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8B6914'
            }}>
              <Factory size={22} />
            </div>
            <div>
              <h6 style={{ margin: 0, fontSize: '0.88rem', fontWeight: 700, color: '#121212', letterSpacing: '0.04em' }}>
                AGRA MANUFACTURING CAMPUS
              </h6>
              <span style={{ fontSize: '0.78rem', color: '#666666' }}>10,000+ Pairs Daily Scalable Production</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'rgba(197, 160, 89, 0.1)',
              border: '1px solid rgba(197, 160, 89, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8B6914'
            }}>
              <ShieldCheck size={22} />
            </div>
            <div>
              <h6 style={{ margin: 0, fontSize: '0.88rem', fontWeight: 700, color: '#121212', letterSpacing: '0.04em' }}>
                SATRA &amp; ISO 9001:2015
              </h6>
              <span style={{ fontSize: '0.78rem', color: '#666666' }}>100% In-Line &amp; Final Defect Auditing</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '10px',
              background: 'rgba(197, 160, 89, 0.1)',
              border: '1px solid rgba(197, 160, 89, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8B6914'
            }}>
              <Award size={22} />
            </div>
            <div>
              <h6 style={{ margin: 0, fontSize: '0.88rem', fontWeight: 700, color: '#121212', letterSpacing: '0.04em' }}>
                GLOBAL PRIVATE LABEL &amp; OEM
              </h6>
              <span style={{ fontSize: '0.78rem', color: '#666666' }}>Serving D2C &amp; Global Retailers in 20+ Countries</span>
            </div>
          </div>
        </div>

        {/* Multi-Column Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Col 1: Brand Story */}
          <div style={{ maxWidth: '320px' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '18px', textDecoration: 'none' }} aria-label="KS Shoes">
              <img 
                src="/assets/images/logo.png" 
                alt="KS Shoes" 
                style={{ height: '52px', width: 'auto', objectFit: 'contain', borderRadius: '4px' }}
              />
            </Link>
            <p style={{ fontSize: '0.84rem', color: '#666666', lineHeight: 1.7, marginBottom: '22px' }}>
              Advanced footwear manufacturing company based in Agra, India. Delivering OEM, private label, and bespoke footwear engineering with international craftsmanship and scalable bulk capacity.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <a 
                href="https://wa.me/919429690496" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 14px',
                  borderRadius: 'var(--rad-pill)',
                  background: 'rgba(0, 0, 0, 0.05)',
                  border: '1px solid rgba(0, 0, 0, 0.12)',
                  color: '#121212',
                  fontSize: '0.76rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                <MessageSquare size={14} color="#22c55e" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h5 style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#121212',
              marginBottom: '20px'
            }}>
              Company &amp; Navigation
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <li><Link to="/" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem', transition: 'color 0.2s ease' }}>Home</Link></li>
              <li><Link to="/about" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem', transition: 'color 0.2s ease' }}>About Us</Link></li>
              <li><Link to="/manufacturing" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem', transition: 'color 0.2s ease' }}>Manufacturing Facility</Link></li>
              <li><Link to="/products" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem', transition: 'color 0.2s ease' }}>Footwear Collections</Link></li>
              <li><Link to="/services" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem', transition: 'color 0.2s ease' }}>OEM &amp; Private Label Services</Link></li>
              <li><Link to="/projects" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem', transition: 'color 0.2s ease' }}>Case Studies &amp; Projects</Link></li>
              <li><Link to="/quality" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem', transition: 'color 0.2s ease' }}>Quality &amp; Technology</Link></li>
              <li><Link to="/contact" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem', transition: 'color 0.2s ease' }}>Request a Quote</Link></li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h5 style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#121212',
              marginBottom: '20px'
            }}>
              Product Categories
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <li><Link to="/products" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem' }}>Sports Shoes</Link></li>
              <li><Link to="/products" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem' }}>Casual Footwear</Link></li>
              <li><Link to="/products" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem' }}>Court &amp; Skate Sneakers</Link></li>
              <li><Link to="/products" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem' }}>Performance Running Shoes</Link></li>
              <li><Link to="/products" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem' }}>Work &amp; Safety Footwear</Link></li>
              <li><Link to="/products" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem' }}>Lifestyle Footwear</Link></li>
              <li><Link to="/products" style={{ color: '#666666', textDecoration: 'none', fontSize: '0.84rem' }}>Custom Tooling &amp; Moulds</Link></li>
            </ul>
          </div>

          {/* Col 4: Factory Desk & Contacts */}
          <div>
            <h5 style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.82rem',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#121212',
              marginBottom: '20px'
            }}>
              Factory &amp; Export Desk
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.84rem', color: '#666666' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={16} color="#8B6914" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Foundry Nagar Industrial Area, Agra, Uttar Pradesh - 282006, India</span>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Phone size={16} color="#8B6914" style={{ flexShrink: 0 }} />
                <a href="tel:+919429690496" style={{ color: '#121212', textDecoration: 'none' }}>+91 94296 90496</a>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <Mail size={16} color="#8B6914" style={{ flexShrink: 0 }} />
                <a href="mailto:contact@ksshoes.com" style={{ color: '#121212', textDecoration: 'none' }}>contact@ksshoes.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Qubnix Technology Credit & Privacy Policy */}
        <div style={{
          borderTop: '1px solid rgba(0, 0, 0, 0.08)',
          paddingTop: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '14px',
          fontSize: '0.78rem',
          color: '#666666'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <span>&copy; {new Date().getFullYear()} KS Shoes Manufacturing. All Rights Reserved.</span>
            <Link to="/contact" style={{ color: '#666666', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#8B6914'} onMouseLeave={(e) => e.target.style.color = '#666666'}>
              Privacy Policy
            </Link>
            <Link to="/contact" style={{ color: '#666666', textDecoration: 'none', transition: 'color 0.2s ease' }} onMouseEnter={(e) => e.target.style.color = '#8B6914'} onMouseLeave={(e) => e.target.style.color = '#666666'}>
              Terms of Supply
            </Link>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 0, 0, 0.04)',
            border: '1px solid rgba(0, 0, 0, 0.08)',
            padding: '5px 14px',
            borderRadius: 'var(--rad-pill)',
            color: '#121212'
          }}>
            <span style={{ color: '#666666' }}>Developed by</span>
            <strong style={{ color: '#8B6914', letterSpacing: '0.04em' }}>Qubnix Technology</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}
