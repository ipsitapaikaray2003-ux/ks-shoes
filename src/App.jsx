import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import BackToTop from './components/BackToTop';
import Toast from './components/Toast';

// 8 Dedicated Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ManufacturingPage from './pages/ManufacturingPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import QualityTechnologyPage from './pages/QualityTechnologyPage';
import ContactPage from './pages/ContactPage';
import FaqPage from './pages/FaqPage';
import CategoryPage from './pages/CategoryPage';

import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const handleShowToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <div className="app-container" style={{ background: '#FAF9F6', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {/* Transparent-to-Scrolled Sticky Navbar */}
        <Navbar />

        {/* Multi-Page Routes */}
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage onOpenModal={handleOpenModal} onShowToast={handleShowToast} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/products" element={<ProductsPage onOpenModal={handleOpenModal} />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/case-studies" element={<ProjectsPage />} />
            <Route path="/quality" element={<QualityTechnologyPage />} />
            <Route path="/contact" element={<ContactPage onShowToast={handleShowToast} />} />
            <Route path="/faq" element={<FaqPage />} />
          </Routes>
        </main>

        {/* Global Industrial-Luxury Footer with Qubnix Technology attribution */}
        <Footer />

        {/* Technical B2B Spec Sheet Modal */}
        <ProductModal 
          product={selectedProduct}
          onClose={handleCloseModal}
        />

        {/* Circular Scroll Progress Ring */}
        <BackToTop />

        {/* Toast Alerts */}
        <Toast message={toastMessage} onClose={() => setToastMessage('')} />
      </div>
      </ErrorBoundary>
    </BrowserRouter>
  );
}
