import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Users, Factory, Gem, ShieldCheck, Tag, Clock } from 'lucide-react';

const features = [
  {
    title: 'Innovative Product Design & Development',
    desc: 'From initial sketch to final CAD, we bring fresh, modern aesthetics to life.',
    icon: <Lightbulb size={28} />,
    hoverBg: 'linear-gradient(135deg, #141E30 0%, #243B55 100%)', // Midnight Blue
    hoverShadow: 'rgba(36, 59, 85, 0.3)'
  },
  {
    title: 'Experienced Design & Technical Team',
    desc: 'Our veteran engineers and designers ensure every silhouette is structurally perfect.',
    icon: <Users size={28} />,
    hoverBg: 'linear-gradient(135deg, #42275a 0%, #734b6d 100%)', // Royal Plum
    hoverShadow: 'rgba(115, 75, 109, 0.3)'
  },
  {
    title: 'Advanced Manufacturing Facilities',
    desc: 'State-of-the-art machinery meets generational artisan craftsmanship.',
    icon: <Factory size={28} />,
    hoverBg: 'linear-gradient(135deg, #2b4333 0%, #39875a 100%)', // Emerald Green
    hoverShadow: 'rgba(57, 135, 90, 0.3)'
  },
  {
    title: 'Premium Quality Materials',
    desc: 'We source only top-grade leathers, advanced meshes, and durable outsoles.',
    icon: <Gem size={28} />,
    hoverBg: 'linear-gradient(135deg, #C9A84C 0%, #9F8232 100%)', // Signature Gold
    hoverShadow: 'rgba(201, 168, 76, 0.3)'
  },
  {
    title: 'Stringent Quality Control',
    desc: 'Multi-tier lab testing ensures zero defects and lasting durability.',
    icon: <ShieldCheck size={28} />,
    hoverBg: 'linear-gradient(135deg, #432b35 0%, #873940 100%)', // Deep Burgundy
    hoverShadow: 'rgba(135, 57, 64, 0.3)'
  },
  {
    title: 'Competitive Pricing',
    desc: 'Scaled production allows us to offer premium manufacturing at viable rates.',
    icon: <Tag size={28} />,
    hoverBg: 'linear-gradient(135deg, #2C3E50 0%, #3498DB 100%)', // Ocean Blue
    hoverShadow: 'rgba(52, 152, 219, 0.3)'
  },
  {
    title: 'On-Time Delivery',
    desc: 'Streamlined logistics and reliable supply chains ensure your launch dates are met.',
    icon: <Clock size={28} />,
    hoverBg: 'linear-gradient(135deg, #4e54c8 0%, #8f94fb 100%)', // Sapphire Purple
    hoverShadow: 'rgba(143, 148, 251, 0.3)'
  }
];

export default function WhyKSSection() {
  return (
    <section style={{ padding: '120px 5%', background: '#F8F7F5', color: '#111' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ fontSize: 'clamp(40px, 8vw, 70px)', fontWeight: 700, letterSpacing: '-0.03em', margin: '0 0 24px 0', textTransform: 'uppercase' }}
          >
            Why Choose KS Enterprises
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: '1.25rem', color: '#555', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}
          >
            We are your trusted manufacturing partner, providing end-to-end production solutions with a relentless focus on quality and innovation.
          </motion.p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px' }}>
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              className="ks-feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{
                flex: '1 1 300px',
                maxWidth: '420px',
                padding: '40px 30px',
                borderRadius: '24px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                border: '1px solid rgba(0,0,0,0.03)',
                cursor: 'default',
                '--hover-bg': feature.hoverBg,
                '--hover-shadow': feature.hoverShadow
              }}
            >
              <div className="feature-icon-box" style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: '16px', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {feature.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 600, margin: '0 0 10px 0', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                  {feature.title}
                </h3>
                <p className="feature-desc" style={{ lineHeight: 1.6, margin: 0, fontSize: '1rem' }}>
                  {feature.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .ks-feature-card {
          background: #fff;
          color: #111;
          transition: transform 0.4s cubic-bezier(0.21, 0.47, 0.32, 0.98), box-shadow 0.4s ease, background 0.4s ease, border-color 0.4s ease;
        }
        .ks-feature-card .feature-icon-box {
          background: rgba(201, 168, 76, 0.1);
          color: var(--gold-primary, #C9A84C);
          transition: all 0.4s ease;
        }
        .ks-feature-card .feature-desc {
          color: #666;
          transition: color 0.4s ease;
        }
        
        .ks-feature-card:hover {
          transform: translateY(-8px);
          background: var(--hover-bg, var(--gold-primary, #C9A84C));
          color: #fff;
          box-shadow: 0 20px 40px var(--hover-shadow, rgba(201, 168, 76, 0.3));
          border-color: transparent;
        }
        .ks-feature-card:hover .feature-icon-box {
          background: rgba(255, 255, 255, 0.2);
          color: #fff;
        }
        .ks-feature-card:hover .feature-desc {
          color: rgba(255, 255, 255, 0.9);
        }
      `}</style>
    </section>
  );
}
