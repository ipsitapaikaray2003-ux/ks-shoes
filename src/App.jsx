import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import Toast from './components/Toast';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProductsPage from './pages/ProductsPage';
import CorporateGiftingPage from './pages/CorporateGiftingPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import FaqPage from './pages/FaqPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleInquireProduct = (product) => {
    if (product?.category) {
      setActiveCategory(product.category);
    }
  };

  const handleShowToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        {/* Global Luxury Navigation */}
        <Navbar />

        {/* Multi-Page Routes */}
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
                onOpenModal={handleOpenModal}
                onInquireProduct={handleInquireProduct}
                onShowToast={handleShowToast}
              />
            } 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route 
            path="/products" 
            element={
              <ProductsPage 
                onOpenModal={handleOpenModal}
                onInquireProduct={handleInquireProduct}
              />
            } 
          />
          <Route 
            path="/corporate-gifting" 
            element={<CorporateGiftingPage onShowToast={handleShowToast} />} 
          />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route 
            path="/contact" 
            element={<ContactPage onShowToast={handleShowToast} />} 
          />
        </Routes>

        {/* Global Luxury Footer */}
        <Footer />

        {/* Technical Product Modal */}
        <ProductModal 
          product={selectedProduct}
          onClose={handleCloseModal}
          onInquire={handleInquireProduct}
        />

        {/* Floating WhatsApp Assistant */}
        <WhatsAppFloat />

        {/* Floating Notification Toast */}
        <Toast 
          message={toastMessage} 
          onClose={() => setToastMessage('')} 
        />
      </div>
    </BrowserRouter>
  );
}
