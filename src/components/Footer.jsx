import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-lg">
        <div className="footer-grid">
          {/* Col 1: Brand & Logo */}
          <div className="footer-brand">
            <Link to="/" style={{ display: 'inline-block', marginBottom: '20px', textDecoration: 'none' }}>
              <img 
                src="/assets/images/logo.png" 
                alt="KS Enterprise" 
                style={{ height: '70px', width: '70px', borderRadius: '14px', border: '1px solid #C9A84C', boxShadow: '0 0 20px rgba(201,168,76,0.3)' }} 
              />
            </Link>
            
            <p>
              India's premier custom sneaker and private label footwear manufacturer. Operating from Agra's historic shoemaking hub, we empower D2C brands, startups, and global retailers with complete in-house production.
            </p>
            
            <div className="footer-socials">
              <a href="#" className="social-btn" aria-label="LinkedIn">in</a>
              <a href="#" className="social-btn" aria-label="Instagram">ig</a>
              <a href="#" className="social-btn" aria-label="Facebook">fb</a>
              <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">wa</a>
            </div>
          </div>

          {/* Col 2: Footwear Categories */}
          <div className="footer-col">
            <h5>Sneaker &amp; Sports Lines</h5>
            <div className="footer-links">
              <Link to="/products?cat=sneakers">Retro Court Sneakers</Link>
              <Link to="/products?cat=running">Performance Running Shoes</Link>
              <Link to="/products?cat=streetwear">High-Top &amp; Skate Trainers</Link>
              <Link to="/products?cat=chunky">Chunky Platform Sneakers</Link>
              <Link to="/products?cat=training">Gym &amp; Cross-Trainers</Link>
              <Link to="/products?cat=kids">Kids' Athletic Sneakers</Link>
            </div>
          </div>

          {/* Col 3: D2C & OEM Services */}
          <div className="footer-col">
            <h5>Custom Services</h5>
            <div className="footer-links">
              <Link to="/services#brand-concept">Ideas &amp; Brand Concept</Link>
              <Link to="/services#design-techpack">Custom Shoe Design &amp; Tech Packs</Link>
              <Link to="/services#material-sourcing">Raw Material Selection (Upper &amp; Sole)</Link>
              <Link to="/services#prototype-sampling">Prototype &amp; Sample Development</Link>
              <Link to="/services#bulk-production">In-House Bulk Production</Link>
              <Link to="/services#private-labeling">Private Labeling &amp; Packaging</Link>
              <Link to="/services#quality-control">Quality Control &amp; Lab Testing</Link>
            </div>
          </div>

          {/* Col 4: Company & Direct Contacts */}
          <div className="footer-col">
            <h5>Company &amp; Trade</h5>
            <div className="footer-links" style={{ marginBottom: '16px' }}>
              <Link to="/about">About Agra Campus &amp; Heritage</Link>
              <Link to="/case-studies">D2C Brand Case Studies</Link>
              <Link to="/faq">Knowledge Base &amp; FAQ</Link>
              <Link to="/contact">Book a Factory Visit</Link>
            </div>

            <div className="footer-contact-item">
              <div className="footer-contact-icon">📍</div>
              <div className="footer-contact-text">
                Foundry Nagar Industrial Area, Agra, UP - 282006, India
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📞</div>
              <div className="footer-contact-text">
                <a href="tel:+911234567890">+91 12345 67890</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">✉️</div>
              <div className="footer-contact-text">
                <a href="mailto:contact@ksenterprise.in">contact@ksenterprise.in</a>
              </div>
            </div>
            <div style={{ marginTop: '12px' }}>
              <span className="tag" style={{ fontSize: '0.68rem' }}>Serving 200+ D2C Brands Globally</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} KS Enterprise. All Rights Reserved. "Walk A Better Tomorrow" is a registered trademark.</p>
          <div className="footer-bottom-links">
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/products">Collections</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
