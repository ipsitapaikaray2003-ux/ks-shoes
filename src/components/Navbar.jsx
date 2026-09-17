import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`} id="mainNavbar">
        <div className="container-lg">
          <div className="navbar-inner">
            {/* Official Logo Only */}
            <Link 
              to="/" 
              className="nav-brand-lockup" 
              aria-label="KS Enterprise Home"
            >
              <img 
                src="/assets/images/logo.png" 
                alt="KS Enterprise" 
                className="nav-brand-logo"
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="nav-menu" aria-label="Main Navigation">
              <div className="nav-item">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end
                >
                  Home
                </NavLink>
              </div>

              <div className="nav-item">
                <NavLink 
                  to="/products" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Footwear Lines <span className="chevron">▼</span>
                </NavLink>
                <div className="nav-dropdown">
                  <Link to="/products?cat=sneakers">Retro Court Sneakers</Link>
                  <Link to="/products?cat=running">Performance Running Shoes</Link>
                  <Link to="/products?cat=streetwear">High-Top &amp; Skate Trainers</Link>
                  <Link to="/products?cat=chunky">Chunky Platform Sneakers</Link>
                  <Link to="/products?cat=training">Gym &amp; Cross-Trainers</Link>
                  <Link to="/products?cat=kids">Kids' Athletic Sneakers</Link>
                </div>
              </div>

              <div className="nav-item">
                <NavLink 
                  to="/services" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Custom Services
                </NavLink>
              </div>

              <div className="nav-item">
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  About Heritage
                </NavLink>
              </div>

              <div className="nav-item">
                <NavLink 
                  to="/corporate-gifting" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Corporate Gifting
                </NavLink>
              </div>

              <div className="nav-item">
                <NavLink 
                  to="/case-studies" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Case Studies
                </NavLink>
              </div>

              <div className="nav-item">
                <NavLink 
                  to="/faq" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  FAQ
                </NavLink>
              </div>

              <div className="nav-item">
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                >
                  Contact Desk
                </NavLink>
              </div>
            </nav>

            {/* Actions */}
            <div className="nav-actions">
              <Link to="/contact" className="btn btn-outline btn-sm">
                Request RFQ
              </Link>
              <a 
                href="https://wa.me/911234567890?text=Hello%20KS%20Enterprise%2C%20I%20am%20interested%20in%20your%20custom%20footwear%20manufacturing%20services." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-sm btn-whatsapp"
              >
                <span>WhatsApp</span>
              </a>

              {/* Hamburger button for mobile */}
              <button 
                className="hamburger" 
                onClick={() => setMobileOpen(true)} 
                aria-label="Open navigation menu"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div 
        className={`mobile-nav-overlay ${mobileOpen ? 'open' : ''}`} 
        onClick={() => setMobileOpen(false)}
      ></div>

      <aside className={`mobile-nav ${mobileOpen ? 'open' : ''}`} aria-label="Mobile Navigation">
        <button 
          className="mobile-nav-close" 
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>

        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
          <img 
            src="/assets/images/logo.png" 
            alt="KS Enterprise" 
            style={{ height: '60px', width: '60px', borderRadius: '12px', border: '1px solid #C9A84C', boxShadow: '0 0 15px rgba(201,168,76,0.25)' }} 
          />
        </div>

        <Link to="/" onClick={() => setMobileOpen(false)}>Home</Link>
        <Link to="/products" onClick={() => setMobileOpen(false)}>Footwear Lines</Link>
        <div className="mobile-sub">
          <Link to="/products?cat=sneakers" onClick={() => setMobileOpen(false)}>› Retro Court Sneakers</Link>
          <Link to="/products?cat=running" onClick={() => setMobileOpen(false)}>› Performance Running</Link>
          <Link to="/products?cat=streetwear" onClick={() => setMobileOpen(false)}>› High-Top &amp; Skate</Link>
          <Link to="/products?cat=chunky" onClick={() => setMobileOpen(false)}>› Chunky Platform Sneakers</Link>
          <Link to="/products?cat=training" onClick={() => setMobileOpen(false)}>› Gym &amp; Cross-Trainers</Link>
          <Link to="/products?cat=kids" onClick={() => setMobileOpen(false)}>› Kids' Athletic Sneakers</Link>
        </div>
        <Link to="/services" onClick={() => setMobileOpen(false)}>Custom Services (8 Steps)</Link>
        <Link to="/about" onClick={() => setMobileOpen(false)}>About Us &amp; Agra Factory</Link>
        <Link to="/corporate-gifting" onClick={() => setMobileOpen(false)}>Corporate &amp; Industrial Gifting</Link>
        <Link to="/case-studies" onClick={() => setMobileOpen(false)}>Case Studies &amp; D2C Growth</Link>
        <Link to="/faq" onClick={() => setMobileOpen(false)}>Knowledge Base &amp; FAQ</Link>
        <Link to="/contact" onClick={() => setMobileOpen(false)}>Contact &amp; Factory Desk</Link>

        <div style={{ marginTop: '30px' }}>
          <Link 
            to="/contact" 
            className="btn btn-primary btn-sm" 
            style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}
            onClick={() => setMobileOpen(false)}
          >
            Get Fast Quote
          </Link>
        </div>
      </aside>
    </>
  );
}
