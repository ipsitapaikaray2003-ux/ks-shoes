import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Technology', path: '/quality' }, // Reusing quality route
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(248, 247, 245, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.05)' : '1px solid transparent',
          padding: scrolled ? '6px 0' : '16px 0',
          fontFamily: '"Inter", sans-serif'
        }}
      >
        <div className="container-lg">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            {/* Logo Container (Left) */}
            <div style={{ flex: '1 1 0%', display: 'flex', justifyContent: 'flex-start' }}>
              <Link 
                to="/" 
                style={{ display: 'flex', alignItems: 'center', zIndex: 1001 }}
                aria-label="KS Shoes"
              >
                <img 
                  src="/assets/images/logo_gold_transparent.png" 
                  alt="KS Shoes" 
                  style={{
                    height: scrolled ? '60px' : '100px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: (!scrolled && ['/', '/about', '/category', '/contact'].some(p => location.pathname.startsWith(p) || location.pathname === p)) ? 'brightness(0) invert(1)' : 'brightness(0) saturate(100%)',
                    transition: 'all 0.3s ease'
                  }}
                />
              </Link>
            </div>

            {/* Desktop Navigation Links (Center) */}
            <nav style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
              flex: '1 1 auto'
            }} className="desktop-nav">
              {navLinks.map((link) => {
                const isDarkHero = !scrolled && ['/', '/about', '/category', '/contact'].some(p => location.pathname.startsWith(p) || location.pathname === p);
                const textColor = isDarkHero ? '#FFF' : '#111';
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.path === '/'}
                    style={({ isActive }) => ({
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      textDecoration: 'none',
                      color: textColor,
                      opacity: isActive ? 1 : (isDarkHero ? 0.8 : 0.5),
                      transition: 'opacity 0.3s ease, color 0.3s ease'
                    })}
                    onMouseOver={(e) => { if (e.currentTarget.style.opacity !== '1') e.currentTarget.style.opacity = 1 }}
                    onMouseOut={(e) => { if (!window.location.pathname.endsWith(link.path) || (link.path==='/' && window.location.pathname!=='/')) e.currentTarget.style.opacity = (isDarkHero ? 0.8 : 0.5) }}
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </nav>

            {/* CTA & Mobile Toggle (Right) */}
            <div style={{ flex: '1 1 0%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
              <div style={{ display: 'none' }} className="desktop-nav">
                <Link 
                  to="/contact"
                  style={{
                    padding: '10px 24px',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: (!scrolled && ['/', '/about', '/category', '/contact'].some(p => location.pathname.startsWith(p) || location.pathname === p)) ? '#FFF' : '#111',
                    backgroundColor: 'transparent',
                    border: (!scrolled && ['/', '/about', '/category', '/contact'].some(p => location.pathname.startsWith(p) || location.pathname === p)) ? '1px solid rgba(255,255,255,0.5)' : '1px solid #111',
                    textDecoration: 'none',
                    borderRadius: '2px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    const isDarkHero = (!scrolled && ['/', '/about', '/category', '/contact'].some(p => location.pathname.startsWith(p) || location.pathname === p));
                    e.currentTarget.style.backgroundColor = isDarkHero ? '#FFF' : '#111';
                    e.currentTarget.style.color = isDarkHero ? '#000' : '#FFF';
                  }}
                  onMouseOut={(e) => {
                    const isDarkHero = (!scrolled && ['/', '/about', '/category', '/contact'].some(p => location.pathname.startsWith(p) || location.pathname === p));
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = isDarkHero ? '#FFF' : '#111';
                  }}
                >
                  Get a Quote
                </Link>
              </div>

              <button 
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'transparent',
                  border: 'none',
                  color: (!scrolled && ['/', '/about', '/category', '/contact'].some(p => location.pathname.startsWith(p) || location.pathname === p)) ? '#FFF' : '#111',
                  cursor: 'pointer',
                  zIndex: 1001,
                  transition: 'color 0.3s ease'
                }}
                className="mobile-nav-toggle"
              >
                {mobileOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: '#F8F7F5',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '20px'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    style={({ isActive }) => ({
                      fontSize: '1.5rem',
                      fontWeight: 500,
                      letterSpacing: '0.05em',
                      textDecoration: 'none',
                      color: isActive ? '#111' : '#888',
                      transition: 'color 0.3s ease'
                    })}
                  >
                    {link.name}
                  </NavLink>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.4 }}
                style={{ marginTop: '24px' }}
              >
                <Link 
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    padding: '14px 36px',
                    fontSize: '0.85rem',
                    letterSpacing: '0.1em',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    color: '#FFF',
                    backgroundColor: '#111',
                    textDecoration: 'none',
                    borderRadius: '2px',
                    display: 'inline-block'
                  }}
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .mobile-nav-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
