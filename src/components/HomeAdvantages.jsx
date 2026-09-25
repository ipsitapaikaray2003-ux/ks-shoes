import React from 'react';
import { motion } from 'framer-motion';
import { Tag, Package, Truck, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const advantages = [
  {
    icon: <Tag size={32} strokeWidth={1.5} />,
    title: "Custom Branding",
    desc: "We add your logo and branding to every pair, helping you launch your own private label shoe with confidence.",
    link: "/services"
  },
  {
    icon: <Package size={32} strokeWidth={1.5} />,
    title: "Custom Packaging",
    desc: "From custom shoe boxes to branded tags, we deliver complete bespoke packaging built around your brand identity.",
    link: "/services"
  },
  {
    icon: <Truck size={32} strokeWidth={1.5} />,
    title: "Global Logistics",
    desc: "Reliable pan-India doorstep delivery and international export freight — your custom footwear reaches you safely.",
    link: "/manufacturing"
  },
  {
    icon: <MessageSquare size={32} strokeWidth={1.5} />,
    title: "Expert Consultation",
    desc: "Talk to our production team and get expert guidance to start your shoe brand — zero cost, zero obligation.",
    link: "/contact"
  }
];

export default function HomeAdvantages() {
  return (
    <section style={{ padding: '120px 0', background: '#FAFAFA', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container-lg">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '600px', margin: '0 auto 80px' }}
        >
          <span style={{
            display: 'block',
            fontFamily: 'var(--font-accent)',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: '#8B6914',
            marginBottom: '16px'
          }}>
            The KS Enterprise Advantage
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            color: '#000000',
            textTransform: 'uppercase',
            letterSpacing: '-0.02em',
            margin: 0
          }}>
            Complete Production Solutions
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1px',
          background: 'rgba(0,0,0,0.05)', // grid lines
          border: '1px solid rgba(0,0,0,0.05)'
        }}>
          {advantages.map((adv, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              style={{
                background: '#FFFFFF',
                padding: '50px 40px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                transition: 'background 0.3s'
              }}
              className="advantage-block"
            >
              <div style={{ color: '#000000', marginBottom: '24px' }}>
                {adv.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '1.1rem',
                fontWeight: 800,
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '16px'
              }}>
                {adv.title}
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#666666', lineHeight: 1.7, marginBottom: '24px', flexGrow: 1 }}>
                {adv.desc}
              </p>
              <Link to={adv.link} style={{
                fontFamily: 'var(--font-accent)',
                fontSize: '0.75rem',
                fontWeight: 700,
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                textDecoration: 'none',
                borderBottom: '1px solid #000000',
                paddingBottom: '4px',
                transition: 'color 0.3s, borderColor 0.3s'
              }}
              className="advantage-link"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .advantage-block:hover { background: '#FAFAFA'; }
        .advantage-link:hover { color: '#8B6914' !important; border-color: '#8B6914' !important; }
      `}</style>
    </section>
  );
}
