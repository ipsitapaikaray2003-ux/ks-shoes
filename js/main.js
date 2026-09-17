/**
 * KS ENTERPRISE — Master JavaScript Controller
 * "Walk A Better Tomorrow"
 * Luxury Footwear Manufacturing & Global Export
 */

(function () {
  'use strict';

  // Configuration Constants
  const CONFIG = {
    WHATSAPP_NUMBER: '919876543210', // Replace with official business number
    COMPANY_EMAIL: 'inquiry@ksenterprise.com',
    EXPORT_DESK_EMAIL: 'export@ksenterprise.com'
  };

  // 1. DOM Ready Initialization
  document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMobileNav();
    initScrollReveal();
    initStatCounters();
    initCollectionFilter();
    initQuickViewModal();
    initRfqCalculator();
    initContactForms();
    initWhatsAppFloat();
  });

  // 2. Navbar Sticky & Scroll Effect
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 3. Mobile Navigation Drawer
  function initMobileNav() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const overlay = document.querySelector('.mobile-nav-overlay');
    const closeBtn = document.querySelector('.mobile-nav-close');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    if (!hamburger || !mobileNav || !overlay) return;

    const openMenu = () => {
      mobileNav.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    };

    const closeMenu = () => {
      mobileNav.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    };

    hamburger.addEventListener('click', openMenu);
    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMenu();
      });
    });
  }

  // 4. Scroll Reveal Animations
  function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    if (!revealElements.length) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.12
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => observer.observe(el));
  }

  // 5. Hero & Stats Animated Counter
  function initStatCounters() {
    const statElements = document.querySelectorAll('.stat-number, .hero-stat-number');
    if (!statElements.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statElements.forEach(el => observer.observe(el));

    function animateCounter(el) {
      const rawText = el.textContent.trim();
      // Extract number and suffix (e.g., "25+" -> 25, "+")
      const match = rawText.match(/^([0-9.]+)(.*)$/);
      if (!match) return;

      const targetNum = parseFloat(match[1]);
      const suffix = match[2] || '';
      const isDecimal = match[1].includes('.');
      const duration = 1800; // ms
      const startTime = performance.now();

      function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutExpo
        const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const currentVal = ease * targetNum;

        el.textContent = (isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal)) + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = rawText;
        }
      }

      requestAnimationFrame(update);
    }
  }

  // 6. Collection Filter System
  function initCollectionFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const catalogCards = document.querySelectorAll('.catalog-card');

    if (!filterButtons.length || !catalogCards.length) return;

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter') || 'all';

        catalogCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            card.style.display = '';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0) scale(1)';
            }, 30);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px) scale(0.96)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // 7. Quick View Modal for Footwear Models
  function initQuickViewModal() {
    const modal = document.getElementById('quickViewModal');
    if (!modal) return;

    const modalBackdrop = modal.querySelector('.modal-backdrop') || modal;
    const closeButtons = modal.querySelectorAll('[data-close-modal]');
    const triggerButtons = document.querySelectorAll('[data-quick-view]');

    const openModal = (data) => {
      modal.querySelector('#modalTitle').textContent = data.title || 'Footwear Model';
      modal.querySelector('#modalCategory').textContent = data.category || 'Luxury Collection';
      modal.querySelector('#modalDesc').textContent = data.desc || 'Premium grade handcrafted footwear engineered for durability and style.';
      modal.querySelector('#modalLeather').textContent = data.leather || 'Full-grain Italian Leather / High-grade Suede';
      modal.querySelector('#modalSole').textContent = data.sole || 'Ergonomic TPR / Hand-stitched Leather Sole';
      modal.querySelector('#modalMoq').textContent = data.moq || '500 Pairs per style';
      modal.querySelector('#modalSizes').textContent = data.sizes || 'UK/India 6–11 | EU 40–45 | US 7–12';
      
      const imgElem = modal.querySelector('#modalImg');
      if (imgElem && data.img) {
        imgElem.src = data.img;
        imgElem.alt = data.title;
      }

      // Update quote inquiry button inside modal
      const inquireBtn = modal.querySelector('#modalInquireBtn');
      if (inquireBtn) {
        inquireBtn.onclick = () => {
          closeModal();
          const rfqSection = document.getElementById('b2b-rfq');
          if (rfqSection) {
            rfqSection.scrollIntoView({ behavior: 'smooth' });
            const categorySelect = document.getElementById('rfqCategory');
            if (categorySelect && data.categoryKey) {
              categorySelect.value = data.categoryKey;
            }
          } else {
            window.location.href = 'contact.html?product=' + encodeURIComponent(data.title);
          }
        };
      }

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    };

    triggerButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const data = {
          title: btn.getAttribute('data-title'),
          category: btn.getAttribute('data-category-label'),
          categoryKey: btn.getAttribute('data-category-key'),
          desc: btn.getAttribute('data-desc'),
          leather: btn.getAttribute('data-leather'),
          sole: btn.getAttribute('data-sole'),
          moq: btn.getAttribute('data-moq'),
          sizes: btn.getAttribute('data-sizes'),
          img: btn.getAttribute('data-img')
        };
        openModal(data);
      });
    });

    closeButtons.forEach(btn => btn.addEventListener('click', closeModal));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });
  }

  // 8. B2B RFQ Calculator & Lead Estimator
  function initRfqCalculator() {
    const calcForm = document.getElementById('rfqCalculator');
    if (!calcForm) return;

    const categorySelect = document.getElementById('calcCategory');
    const volumeSelect = document.getElementById('calcVolume');
    const customSelect = document.getElementById('calcCustom');
    const resultBox = document.getElementById('calcResult');
    const leadTimeSpan = document.getElementById('calcLeadTime');
    const sampleTimeSpan = document.getElementById('calcSampleTime');
    const priceEstSpan = document.getElementById('calcPriceEst');

    function updateEstimate() {
      if (!categorySelect || !volumeSelect || !customSelect) return;

      const volume = volumeSelect.value;
      const custom = customSelect.value;

      let leadDays = '25 - 35 Days';
      let sampleDays = '5 - 7 Days';
      let pricingTier = 'High-Volume Wholesale Tier';

      if (volume === '500-1000') {
        leadDays = '20 - 25 Days';
        pricingTier = 'Standard B2B Wholesale Tier';
      } else if (volume === '1000-5000') {
        leadDays = '25 - 35 Days';
        pricingTier = 'Preferred Volume Wholesale Tier';
      } else if (volume === '5000+') {
        leadDays = '35 - 45 Days';
        pricingTier = 'Maximum Factory Direct Discount Tier';
      }

      if (custom === 'bespoke') {
        leadDays += ' (+7 days for custom tooling/lasts)';
        sampleDays = '10 - 12 Days';
      }

      if (leadTimeSpan) leadTimeSpan.textContent = leadDays;
      if (sampleTimeSpan) sampleTimeSpan.textContent = sampleDays;
      if (priceEstSpan) priceEstSpan.textContent = pricingTier;
    }

    if (categorySelect) categorySelect.addEventListener('change', updateEstimate);
    if (volumeSelect) volumeSelect.addEventListener('change', updateEstimate);
    if (customSelect) customSelect.addEventListener('change', updateEstimate);

    // Instant quote WhatsApp button
    const sendViaWaBtn = document.getElementById('calcSendWhatsApp');
    if (sendViaWaBtn) {
      sendViaWaBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const catText = categorySelect ? categorySelect.options[categorySelect.selectedIndex].text : 'Footwear';
        const volText = volumeSelect ? volumeSelect.options[volumeSelect.selectedIndex].text : 'Wholesale';
        const cusText = customSelect ? customSelect.options[customSelect.selectedIndex].text : 'Standard';

        const msg = `Hello KS Enterprise, I am interested in getting an export/wholesale quote:\n• Category: ${catText}\n• Volume: ${volText}\n• Customization: ${cusText}\nPlease share your latest catalog and export price list.`;
        const waUrl = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(waUrl, '_blank');
      });
    }
  }

  // 9. Contact & RFQ Forms Submission with Toast Feedback
  function initContactForms() {
    const forms = document.querySelectorAll('form[data-ajax-form]');

    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn ? submitBtn.innerHTML : 'Submit';

        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<span class="spinner"></span> Processing...';
        }

        // Simulate fast verified server response
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
          }

          showToast('Thank you! Your inquiry has been dispatched to our export desk. We will respond within 24 business hours.');
          form.reset();
        }, 800);
      });
    });
  }

  // 10. WhatsApp Floating Assistant
  function initWhatsAppFloat() {
    const waBtn = document.querySelector('.whatsapp-btn');
    const waTooltip = document.querySelector('.whatsapp-tooltip');

    if (waBtn) {
      waBtn.addEventListener('click', () => {
        const msg = "Hello KS Enterprise! I would like to inquire about your footwear manufacturing, bulk catalogs, and export solutions.";
        const url = `https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
      });
    }

    // Auto-hide tooltip after 8 seconds or upon click
    if (waTooltip) {
      setTimeout(() => {
        waTooltip.style.opacity = '0';
        setTimeout(() => { waTooltip.style.display = 'none'; }, 500);
      }, 8000);
    }
  }

  // 11. Toast Notification Helper
  function showToast(message) {
    let container = document.getElementById('toastContainer');
    if (!container) {
      container = document.createElement('div');
      container.id = 'toastContainer';
      container.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 9999;
        display: flex;
        flex-direction: column;
        gap: 10px;
        pointer-events: none;
      `;
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'luxury-toast';
    toast.style.cssText = `
      background: #111111;
      border: 1px solid #C9A84C;
      color: #FFFFFF;
      padding: 16px 24px;
      border-radius: 999px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.8), 0 0 15px rgba(201,168,76,0.3);
      font-family: 'Inter', sans-serif;
      font-size: 0.88rem;
      display: flex;
      align-items: center;
      gap: 12px;
      pointer-events: auto;
      animation: fadeInUp 0.4s ease forwards;
    `;
    toast.innerHTML = `
      <span style="color: #C9A84C; font-size: 1.2rem;">✓</span>
      <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(15px)';
      toast.style.transition = 'all 0.4s ease';
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 400);
    }, 4500);
  }

})();
