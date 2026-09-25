import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Sneaker Manufacturer — In-House Production",
    desc: "Complete control on quality, cost, and lead time. Everything built under one roof."
  },
  {
    title: "OEM & ODM Sneakers Manufacturer",
    desc: "OEM: your sneaker design, built to spec. ODM: choose, customize, launch faster."
  },
  {
    title: "Low MOQ Manufacturing for Startups",
    desc: "Launch your sneaker brand with low minimum order quantities — no bulk risk."
  },
  {
    title: "Bulk Production for Retail Chains",
    desc: "Scale from pilot batch to nationwide retail — consistent quality at any volume."
  },
  {
    title: "End-to-End Manufacturing: Design to Delivery",
    desc: "Design, sampling, production, delivery — including complex Goodyear welt construction."
  }
];

export default function HomeWhatWeDo() {
  return (
    <section style={{ padding: '120px 0', background: '#FFFFFF', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container-lg">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '80px',
          alignItems: 'flex-start'
        }}>
          {/* Left: Sticky Editorial Header */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                display: 'block',
                fontFamily: 'var(--font-accent)',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                color: '#8B6914',
                marginBottom: '20px'
              }}
            >
              What We Do
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 900,
                lineHeight: 1.1,
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '-0.02em',
                marginBottom: '30px'
              }}
            >
              From First Pair to Full Scale.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: '1.1rem',
                color: '#555555',
                lineHeight: 1.8,
                maxWidth: '400px'
              }}
            >
              We are a premium footwear manufacturer offering complete in-house production for D2C startups and global retail chains alike.
            </motion.p>
          </div>

          {/* Right: Scrolling Minimalist List */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                style={{
                  padding: '40px 0',
                  borderBottom: '1px solid rgba(0,0,0,0.06)'
                }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-accent)',
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  color: '#000000',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.02em'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '1.05rem',
                  color: '#666666',
                  lineHeight: 1.7,
                  margin: 0
                }}>
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
