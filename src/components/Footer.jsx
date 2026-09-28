import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageSquare, ShieldCheck, Factory, Award, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer 
      style={{
        background: '#FFFFFF',
        color: '#121212',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        paddingTop: '80px',
        paddingBottom: '30px',
        position: 'relative',
        fontFamily: '"Inter", sans-serif'
      }}
    >
      <div className="container-lg">
        {/* Top Feature Certifications Strip */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '30px',
          paddingBottom: '50px',
          marginBottom: '50px',
          borderBottom: '1px solid rgba(0, 0, 0, 0.05)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: '#FAFAFA',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8B6914',
              boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
            }}>
              <Factory size={22} strokeWidth={1.5} />
            </div>
            <div>
              <h6 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 800, color: '#121212', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Agra Manufacturing
              </h6>
              <span style={{ fontSize: '0.8rem', color: '#666666', marginTop: '4px', display: 'block' }}>10,000+ Pairs Daily Capacity</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: '#FAFAFA',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8B6914',
              boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
            }}>
              <ShieldCheck size={22} strokeWidth={1.5} />
            </div>
            <div>
              <h6 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 800, color: '#121212', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                SATRA &amp; ISO 9001
              </h6>
              <span style={{ fontSize: '0.8rem', color: '#666666', marginTop: '4px', display: 'block' }}>100% Defect Auditing</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '12px',
              background: '#FAFAFA',
              border: '1px solid rgba(0, 0, 0, 0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#8B6914',
              boxShadow: '0 4px 10px rgba(0,0,0,0.02)'
            }}>
              <Award size={22} strokeWidth={1.5} />
            </div>
            <div>
              <h6 style={{ margin: 0, fontSize: '0.85rem', fontWeight: 800, color: '#121212', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Global OEM Partner
              </h6>
              <span style={{ fontSize: '0.8rem', color: '#666666', marginTop: '4px', display: 'block' }}>Serving Brands in 20+ Countries</span>
            </div>
          </div>
        </div>

        {/* Multi-Column Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '50px',
          marginBottom: '70px'
        }}>
          {/* Col 1: Brand Story */}
          <div style={{ maxWidth: '320px' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '24px', textDecoration: 'none' }} aria-label="KS Shoes">
              <img 
                src="/assets/images/logo.png" 
                alt="KS Shoes" 
                style={{ height: '60px', width: 'auto', objectFit: 'contain', borderRadius: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}
              />
            </Link>
            <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: 1.8, marginBottom: '28px' }}>
              Advanced footwear manufacturing company based in Agra, India. Delivering OEM, private label, and bespoke footwear engineering with international craftsmanship.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a 
                href="https://wa.me/919871906094" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '10px 20px',
                  borderRadius: '30px',
                  background: '#121212',
                  border: '1px solid #121212',
                  color: '#ffffff',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#8B6914';
                  e.currentTarget.style.borderColor = '#8B6914';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#121212';
                  e.currentTarget.style.borderColor = '#121212';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <MessageSquare size={16} />
                <span>WhatsApp Support</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h5 style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#121212',
              marginBottom: '24px'
            }}>
              Company
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Manufacturing', path: '/manufacturing' },
                { name: 'OEM Services', path: '/services' },
                { name: 'Case Studies', path: '/projects' },
                { name: 'Quality & Tech', path: '/quality' },
                { name: 'Request Quote', path: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.path} 
                    style={{ color: '#555555', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.2s ease', display: 'inline-flex', alignItems: 'center' }}
                    onMouseEnter={(e) => { e.target.style.color = '#8B6914'; e.target.style.paddingLeft = '5px'; }}
                    onMouseLeave={(e) => { e.target.style.color = '#555555'; e.target.style.paddingLeft = '0'; }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div>
            <h5 style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#121212',
              marginBottom: '24px'
            }}>
              Capabilities
            </h5>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                'Sports Shoes',
                'Casual Footwear',
                'Court & Skate Sneakers',
                'Performance Running',
                'Work & Safety',
                'Lifestyle Footwear',
                'Custom Tooling'
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    to="/products" 
                    style={{ color: '#555555', textDecoration: 'none', fontSize: '0.9rem', transition: 'all 0.2s ease' }}
                    onMouseEnter={(e) => { e.target.style.color = '#8B6914'; }}
                    onMouseLeave={(e) => { e.target.style.color = '#555555'; }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Factory Desk & Contacts */}
          <div>
            <h5 style={{
              fontFamily: 'var(--font-accent)',
              fontSize: '0.85rem',
              fontWeight: 800,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#121212',
              marginBottom: '24px'
            }}>
              Factory Desk
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', fontSize: '0.9rem', color: '#555555' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <MapPin size={18} color="#8B6914" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ lineHeight: 1.6 }}>Foundry Nagar Industrial Area, Agra, Uttar Pradesh - 282006, India</span>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Phone size={18} color="#8B6914" style={{ flexShrink: 0 }} />
                <a href="tel:+919871906094" style={{ color: '#121212', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: 600 }} onMouseEnter={e => e.target.style.color = '#8B6914'} onMouseLeave={e => e.target.style.color = '#121212'}>
                  +91 98719 06094
                </a>
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <Mail size={18} color="#8B6914" style={{ flexShrink: 0 }} />
                <a href="mailto:himanshutyagi020@gmail.com" style={{ color: '#121212', textDecoration: 'none', transition: 'color 0.2s ease', fontWeight: 600 }} onMouseEnter={e => e.target.style.color = '#8B6914'} onMouseLeave={e => e.target.style.color = '#121212'}>
                  himanshutyagi020@gmail.com
                </a>
              </div>
            </div>
            
            <div style={{ marginTop: '30px' }}>
              <Link to="/contact" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#8B6914',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Start A Project <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Qubnix Technology Credit & Privacy Policy */}
        <div style={{
          borderTop: '1px solid rgba(0, 0, 0, 0.05)',
          paddingTop: '30px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          fontSize: '0.8rem',
          color: '#666666'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <span>&copy; {new Date().getFullYear()} KS Shoes Manufacturing. All Rights Reserved.</span>
          </div>

          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#FAFAFA',
            border: '1px solid rgba(0, 0, 0, 0.06)',
            padding: '8px 18px',
            borderRadius: '30px',
            color: '#666666',
            boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
          }}>
            <span>Developed by</span>
            <strong style={{ color: '#121212', letterSpacing: '0.05em', fontWeight: 800 }}>Qubnix Technology</strong>
          </div>
        </div>
      </div>
    </footer>
  );
}
