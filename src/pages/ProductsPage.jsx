import React, { useState } from 'react';
import CollectionsSection from '../components/CollectionsSection';
import { motion } from 'framer-motion';

export default function ProductsPage({ onOpenModal }) {
  const [activeCategory, setActiveCategory] = useState('all');

  return (
    <div style={{ background: '#F8F7F5', minHeight: '100vh', paddingTop: '80px' }}>
      
      {/* Products Hero */}
      <section style={{ padding: '80px 5% 40px 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 600, margin: '0 0 16px 0', letterSpacing: '-0.02em', color: '#111' }}
          >
            Our Footwear Portfolio
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{ fontSize: '1.2rem', color: '#555', lineHeight: 1.6 }}
          >
            Explore our curated selection of premium OEM & ODM designs ready for bulk production.
          </motion.p>
        </div>
      </section>

      {/* The Catalog */}
      <CollectionsSection 
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        onOpenModal={onOpenModal}
        onSelectProductForRfq={() => {}}
      />
    </div>
  );
}
