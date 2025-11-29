import React, { useState, useEffect } from 'react';

/*
  ENTERPRISE SMART VENDING KIOSK UI
  ==================================
  Design: Tech-forward light theme (fintech/smart locker aesthetic)
  
  Color Palette:
  - Background: #F4F7FB (cool light grey)
  - Cards: #FFFFFF
  - Dividers: #D6DFEA
  - Primary text: #111827
  - Secondary text: #6B7280
  - Primary CTA: #0284C7 (tech blue)
  - Accent: #14B8A6 (teal)
  - Selection: #E0F2FE
  
  Features:
  - Product states (available, selected, sold out, age-restricted, promo)
  - WCAG AA compliant (4.5:1 contrast, 48px touch targets)
  - Error/success states with toast notifications
  - Multi-language ready (text expansion support)
  - Dummy placeholder images with initials and slot codes
*/

const VendingKioskUI = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [activeCategory, setActiveCategory] = useState('featured');
  const [currentPage, setCurrentPage] = useState(1);
  const [currentAd, setCurrentAd] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [paymentState, setPaymentState] = useState(null);
  const [toast, setToast] = useState(null);

  // Ref callback to set up scroll animation only when text overflows
  const setupMarquee = (element) => {
    if (!element) return;
    
    const textSpan = element.querySelector('span');
    if (!textSpan) return;
    
    // Reset animation first
    textSpan.style.animation = 'none';
    
    // Check if text overflows container
    const containerWidth = element.offsetWidth;
    const textWidth = textSpan.scrollWidth;
    const overflow = textWidth - containerWidth;
    
    if (overflow > 0) {
      // Text overflows - set up carousel animation
      // Add 10px buffer so user can clearly see end of text
      const scrollDistance = overflow + 10;
      // Consistent slow speed: 10px per second
      const duration = Math.max(4, scrollDistance / 10);
      textSpan.style.setProperty('--scroll-distance', `-${scrollDistance}px`);
      textSpan.style.animation = `carousel-scroll ${duration}s linear infinite`;
    } else {
      // Text fits - no animation needed
      textSpan.style.animation = 'none';
    }
  };

  // ============================================
  // GRID CONFIGURATION
  // ============================================
  // Define flexible layouts with card spanning and positioning
  // col: starting column (1-based)
  // row: starting row (1-based)
  // colSpan: how many columns to span (1-3)
  // rowSpan: how many rows to span (1-3)
  // ============================================
  const gridConfig = {
    featured: {
      columns: 3,
      rows: 3,
      // Explicit positioning with col/row
      layout: [
        { id: 'hero1', col: 1, row: 1, colSpan: 2, rowSpan: 1 }, // Top-left wide
        { id: 'hero2', col: 3, row: 1, colSpan: 1, rowSpan: 2 }, // Right tall
        { id: 'hero3', col: 1, row: 2, colSpan: 1, rowSpan: 1 }, // Middle-left
        { id: 'hero4', col: 2, row: 2, colSpan: 1, rowSpan: 1 }, // Middle-center
        { id: 'hero5', col: 1, row: 3, colSpan: 1, rowSpan: 1 }, // Bottom-left
        { id: 'hero6', col: 2, row: 3, colSpan: 2, rowSpan: 1 }, // Bottom-right wide
      ],
    },
    sandwiches: { columns: 3, rows: 3, layout: null },
    drinks: { columns: 3, rows: 3, layout: null },
    snacks: { columns: 3, rows: 3, layout: null },
    fresh: { columns: 3, rows: 3, layout: null },
    sweets: { columns: 3, rows: 3, layout: null },
  };

  // Get current grid config
  const currentGridConfig = gridConfig[activeCategory] || gridConfig.sandwiches;

  const categories = [
    { id: 'featured', name: 'Featured' },
    { id: 'sandwiches', name: 'Sandwiches' },
    { id: 'drinks', name: 'Drinks' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'fresh', name: 'Fresh' },
    { id: 'sweets', name: 'Sweets' },
  ];

  const promos = [
    { id: 1, title: 'Combo Deal', subtitle: 'Sandwich + Drink', price: '$8.99', badge: 'SAVE $3' },
    { id: 2, title: 'Fresh Today', subtitle: 'Made this morning', price: '', badge: 'NEW' },
  ];

  // Dummy product image colors - creates colored placeholder based on slot
  const getDummyColor = (slot) => {
    const colors = [
      '#E0F2FE', '#DBEAFE', '#E0E7FF', '#EDE9FE', '#FCE7F3', 
      '#FFE4E6', '#FEF3C7', '#ECFCCB', '#D1FAE5', '#CCFBF1'
    ];
    const colorIndex = slot.charCodeAt(0) + slot.charCodeAt(1);
    return colors[colorIndex % colors.length];
  };

  // Get initials for placeholder display
  const getInitials = (name) => {
    return name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  };

  const allProducts = {
    featured: [
      // Products match layout config IDs
      { id: 'hero1', name: 'Combo Deal: Sandwich + Drink + Chips Bundle', price: 8.99, slot: 'H1', status: 'available', isHero: true, originalPrice: 11.99, savings: 'Save $3' },
      { id: 'hero2', name: 'Fresh Made Today', price: 7.99, slot: 'H2', status: 'available', isHero: true, badge: 'NEW' },
      { id: 'hero3', name: 'Best Seller: Premium Turkey Club Deluxe', price: 8.50, slot: 'A1', status: 'available', isHero: true, badge: 'Best Seller' },
      { id: 'hero4', name: 'Staff Pick: Iced Coffee', price: 4.99, slot: 'C2', status: 'available', isHero: true, badge: 'Staff Pick' },
      { id: 'hero5', name: 'Healthy Choice: Caesar Salad', price: 7.99, slot: 'E3', status: 'available', isHero: true, badge: 'Healthy' },
      { id: 'hero6', name: 'Morning Special: Breakfast Wrap', price: 6.99, slot: 'B1', status: 'available', isHero: true, badge: 'Morning' },
    ],
    sandwiches: [
      { id: 's1', name: 'Turkey Club Sandwich', price: 8.50, slot: 'A1', status: 'available' },
      { id: 's2', name: 'Chicken Panini', price: 9.25, slot: 'A2', status: 'available', promo: true },
      { id: 's3', name: 'BLT Classic', price: 7.99, slot: 'A3', status: 'sold_out' },
      { id: 's4', name: 'Vegetarian Mediterranean Wrap', price: 7.50, slot: 'A4', status: 'available' },
      { id: 's5', name: 'Ham & Swiss', price: 8.25, slot: 'A5', status: 'low_stock' },
      { id: 's6', name: 'Tuna Melt', price: 8.75, slot: 'A6', status: 'available' },
      { id: 's7', name: 'Egg Salad', price: 6.99, slot: 'B1', status: 'available' },
      { id: 's8', name: 'Caprese Ciabatta', price: 8.99, slot: 'B2', status: 'available' },
      { id: 's9', name: 'Roast Beef Sub', price: 9.50, slot: 'B3', status: 'age_restricted' },
    ],
    drinks: [
      { id: 'd1', name: 'Fresh Orange Juice', price: 4.50, slot: 'C1', status: 'available' },
      { id: 'd2', name: 'Iced Coffee', price: 4.99, slot: 'C2', status: 'available', promo: true },
      { id: 'd3', name: 'Green Smoothie', price: 5.99, slot: 'C3', status: 'available' },
      { id: 'd4', name: 'Sparkling Lemonade', price: 3.50, slot: 'C4', status: 'sold_out' },
      { id: 'd5', name: 'Sparkling Water', price: 2.50, slot: 'C5', status: 'available' },
      { id: 'd6', name: 'Cola', price: 2.25, slot: 'C6', status: 'available' },
    ],
    snacks: [
      { id: 'sn1', name: 'Kettle Chips', price: 2.99, slot: 'D1', status: 'available' },
      { id: 'sn2', name: 'Mixed Nuts', price: 4.50, slot: 'D2', status: 'available' },
      { id: 'sn3', name: 'Protein Bar', price: 3.25, slot: 'D3', status: 'available' },
      { id: 'sn4', name: 'Trail Mix', price: 3.99, slot: 'D4', status: 'available' },
      { id: 'sn5', name: 'Pretzels', price: 2.50, slot: 'D5', status: 'low_stock' },
      { id: 'sn6', name: 'Popcorn', price: 2.99, slot: 'D6', status: 'available' },
    ],
    fresh: [
      { id: 'f1', name: 'Fruit Cup', price: 4.99, slot: 'E1', status: 'available' },
      { id: 'f2', name: 'Greek Yogurt', price: 3.50, slot: 'E2', status: 'available' },
      { id: 'f3', name: 'Caesar Salad', price: 7.99, slot: 'E3', status: 'available', promo: true },
      { id: 'f4', name: 'Veggie Cup', price: 3.99, slot: 'E4', status: 'available' },
      { id: 'f5', name: 'Hummus & Pita', price: 4.50, slot: 'E5', status: 'sold_out' },
      { id: 'f6', name: 'Apple Slices', price: 2.99, slot: 'E6', status: 'available' },
    ],
    sweets: [
      { id: 'sw1', name: 'Chocolate Bar', price: 2.25, slot: 'F1', status: 'available' },
      { id: 'sw2', name: 'Cookies', price: 2.99, slot: 'F2', status: 'available' },
      { id: 'sw3', name: 'Brownie', price: 3.50, slot: 'F3', status: 'available' },
      { id: 'sw4', name: 'Donut', price: 2.50, slot: 'F4', status: 'available' },
      { id: 'sw5', name: 'Muffin', price: 2.99, slot: 'F5', status: 'available' },
      { id: 'sw6', name: 'Ice Cream', price: 4.50, slot: 'F6', status: 'age_restricted' },
    ],
  };

  const products = allProducts[activeCategory] || [];
  const itemsPerPage = 9;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const displayedProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % promos.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const handleProductSelect = (product) => {
    if (product.status === 'sold_out') {
      setToast({ type: 'error', message: 'Sorry, this item is out of stock', icon: '✕' });
      return;
    }
    if (product.status === 'age_restricted') {
      setToast({ type: 'warning', message: 'Age verification required', icon: '⚠' });
    }
    setSelectedProduct(product);
    setCurrentStep(2);
  };

  const handleProceedToPayment = () => {
    setCurrentStep(3);
    setPaymentState('processing');
    
    // Simulate payment processing
    setTimeout(() => {
      const success = Math.random() > 0.2; // 80% success rate for demo
      if (success) {
        setPaymentState('success');
        setCurrentStep(4);
      } else {
        setPaymentState('error');
        setToast({ type: 'error', message: 'Payment failed. Please try again.', icon: '✕' });
      }
    }, 2500);
  };

  const handleCancel = () => {
    setSelectedProduct(null);
    setPaymentState(null);
    setCurrentStep(1);
  };

  const handleRetry = () => {
    setPaymentState(null);
    setCurrentStep(2);
  };

  const handleComplete = () => {
    setSelectedProduct(null);
    setPaymentState(null);
    setCurrentStep(1);
    setToast({ type: 'success', message: 'Thank you! Enjoy your item.', icon: '✓' });
  };

  const getStatusBadge = (status, promo) => {
    if (status === 'sold_out') return { text: 'OUT OF STOCK', bg: '#FEE2E2', color: '#DC2626', icon: '✕' };
    if (status === 'age_restricted') return { text: 'ID REQUIRED', bg: '#FEF3C7', color: '#92400E', icon: '⚠' };
    if (status === 'low_stock') return { text: 'LOW STOCK', bg: '#FEF3C7', color: '#92400E', icon: '!' };
    if (promo) return { text: 'DEAL', bg: '#CCFBF1', color: '#0D9488', icon: '★' };
    return null;
  };

  return (
    <div className="kiosk-wrapper">
      <div className="kiosk-container">
        {/* Toast Notification */}
        {toast && (
          <div className={`toast toast-${toast.type}`}>
            <span className="toast-icon">{toast.icon}</span>
            <span className="toast-message">{toast.message}</span>
          </div>
        )}

        {/* Main Content Area */}
        {currentStep === 1 && (
          <>
            {/* Promo Banner - 16:9 Image */}
            <div className="promo-banner">
              <div className="promo-image-placeholder">
                <span className="promo-placeholder-text">16:9 Promo Image</span>
                <span className="promo-placeholder-size">508 × 286</span>
              </div>
            </div>

            {/* Content Area with Vertical Categories */}
            <div className="content-area">
              {/* Vertical Category Sidebar */}
              <div className="category-sidebar">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`category-tab ${activeCategory === cat.id ? 'active' : ''}`}
                    aria-pressed={activeCategory === cat.id}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Products Area */}
              <div className="products-area">
                {/* Pagination - only for non-featured with multiple pages */}
                {activeCategory !== 'featured' && totalPages > 1 && (
                  <div className="pagination-bar">
                    <button
                      className="page-arrow"
                      onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      aria-label="Previous page"
                    >
                      ‹
                    </button>
                    <div className="page-dots">
                      {Array.from({ length: totalPages }, (_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i + 1)}
                          className={`page-dot ${currentPage === i + 1 ? 'active' : ''}`}
                          aria-label={`Page ${i + 1}`}
                          aria-current={currentPage === i + 1 ? 'page' : undefined}
                        />
                      ))}
                    </div>
                    <button
                      className="page-arrow"
                      onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                    >
                      ›
                    </button>
                  </div>
                )}

                {/* Featured Page Layout */}
                {activeCategory === 'featured' ? (
                  <div className="featured-layout">
                    {/* Hero Products Grid with explicit positioning */}
                    <div className="hero-grid">
                      {currentGridConfig.layout && currentGridConfig.layout.map((layoutItem, idx) => {
                        const product = products.find(p => p.id === layoutItem.id);
                        if (!product) return null;
                        const bgColor = getDummyColor(product.slot);
                        const colSpan = layoutItem.colSpan || 1;
                        const rowSpan = layoutItem.rowSpan || 1;
                        const col = layoutItem.col || 'auto';
                        const row = layoutItem.row || 'auto';
                        
                        return (
                          <button
                            key={product.id}
                            className={`hero-card span-${colSpan}x${rowSpan}`}
                            onClick={() => handleProductSelect(product)}
                            style={{ 
                              gridColumn: col !== 'auto' ? `${col} / span ${colSpan}` : `span ${colSpan}`,
                              gridRow: row !== 'auto' ? `${row} / span ${rowSpan}` : `span ${rowSpan}`,
                            }}
                          >
                            <div className="hero-image-wrap" style={{ background: bgColor }}>
                              <div className="hero-placeholder">
                                <span className="hero-initials">{getInitials(product.name)}</span>
                                <span className="hero-slot">{product.slot}</span>
                              </div>
                              {product.savings && (
                                <div className="hero-savings-badge">{product.savings}</div>
                              )}
                              {product.badge && (
                                <div className="hero-badge">{product.badge}</div>
                              )}
                            </div>
                            <div className="hero-details">
                              <div className="hero-name-container" ref={setupMarquee}>
                                <span className="hero-name-text">{product.name}</span>
                              </div>
                              <div className="hero-price-row">
                                <span className="hero-price">${product.price.toFixed(2)}</span>
                                {product.originalPrice && (
                                  <span className="hero-original-price">${product.originalPrice.toFixed(2)}</span>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                </div>
              </div>
            ) : (
              /* Regular Product Grid */
              <div className="product-grid">
              {displayedProducts.map((product, idx) => {
                const badge = getStatusBadge(product.status, product.promo);
                const isDisabled = product.status === 'sold_out';
                const bgColor = getDummyColor(product.slot);
                
                return (
                  <button
                    key={product.id}
                    className={`product-card ${product.status} ${selectedProduct?.id === product.id ? 'selected' : ''}`}
                    onClick={() => handleProductSelect(product)}
                    disabled={isDisabled}
                    style={{ animationDelay: `${idx * 0.05}s` }}
                    aria-label={`${product.name}, $${product.price.toFixed(2)}${isDisabled ? ', out of stock' : ''}`}
                  >
                    {badge && (
                      <div className="product-badge" style={{ background: badge.bg, color: badge.color }}>
                        <span className="badge-icon">{badge.icon}</span>
                        <span>{badge.text}</span>
                      </div>
                    )}
                    <div className="product-image-wrap" style={{ background: bgColor }}>
                      <div className="product-placeholder">
                        <span className="placeholder-initials">{getInitials(product.name)}</span>
                        <span className="placeholder-slot">{product.slot}</span>
                      </div>
                      {isDisabled && <div className="sold-out-overlay" />}
                    </div>
                    <div className="product-details">
                      <div className="product-name-container" ref={setupMarquee}>
                        <span className="product-name-text">{product.name}</span>
                      </div>
                      <p className="product-price">${product.price.toFixed(2)}</p>
                    </div>
                  </button>
                );
              })}
            </div>
                )}
              </div>
            </div>
          </>
        )}

        {/* Step 2: Customize/Confirm */}
        {currentStep === 2 && selectedProduct && (
          <div className="confirm-screen">
            <div className="confirm-card">
              <div className="confirm-image-wrap" style={{ background: getDummyColor(selectedProduct.slot) }}>
                <div className="confirm-placeholder">
                  <span className="confirm-initials">{getInitials(selectedProduct.name)}</span>
                </div>
                <div className="confirm-slot">{selectedProduct.slot}</div>
              </div>
              <div className="confirm-details">
                <h2 className="confirm-name">{selectedProduct.name}</h2>
                <p className="confirm-price">${selectedProduct.price.toFixed(2)}</p>
              </div>
              <div className="confirm-actions">
                <button className="btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="btn-primary" onClick={handleProceedToPayment}>
                  Pay Now
                </button>
              </div>
            </div>
            <div className="payment-methods">
              <span className="payment-label">Accepted payment methods</span>
              <div className="payment-icons">
                <div className="payment-icon" title="Credit/Debit Card">💳</div>
                <div className="payment-icon" title="Mobile Pay">📱</div>
                <div className="payment-icon" title="Cash">💵</div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Payment Processing */}
        {currentStep === 3 && paymentState === 'processing' && (
          <div className="processing-screen">
            <div className="processing-card">
              <div className="spinner" />
              <h2 className="processing-title">Processing payment...</h2>
              <p className="processing-text">Please wait</p>
            </div>
          </div>
        )}

        {/* Payment Error */}
        {paymentState === 'error' && (
          <div className="error-screen">
            <div className="error-card">
              <div className="error-icon">✕</div>
              <h2 className="error-title">Payment Failed</h2>
              <p className="error-text">We couldn't process your payment. Please try again or use a different payment method.</p>
              <div className="error-actions">
                <button className="btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button className="btn-primary" onClick={handleRetry}>
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Success */}
        {currentStep === 4 && paymentState === 'success' && selectedProduct && (
          <div className="success-screen">
            <div className="success-card">
              <div className="success-icon">✓</div>
              <h2 className="success-title">Payment Successful!</h2>
              <div className="success-details">
                <div className="vend-code">
                  <span className="vend-label">Collect from slot</span>
                  <span className="vend-slot">{selectedProduct.slot}</span>
                </div>
                <p className="success-text">Your item is being dispensed now.</p>
              </div>
              <button className="btn-primary btn-full" onClick={handleComplete}>
                Done
              </button>
            </div>
          </div>
        )}

        {/* Bottom Bar */}
        <div className="bottom-bar">
          <button className="help-btn" aria-label="Get help">
            <span className="help-icon">?</span>
            <span>Help</span>
          </button>
          <div className="qr-section">
            <span className="qr-label">Scan to pay with app</span>
            <div className="qr-placeholder">QR</div>
          </div>
          <button className="lang-btn" aria-label="Change language">
            <span>EN</span>
            <span className="lang-arrow">▼</span>
          </button>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        .kiosk-wrapper {
          width: 100%;
          min-height: 100vh;
          background: #E5E7EB;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 10px;
        }
        
        .kiosk-container {
          width: 540px;
          height: 960px;
          background: #F4F7FB;
          font-family: 'Plus Jakarta Sans', sans-serif;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }
        
        /* Toast */
        .toast {
          position: absolute;
          top: 80px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 1000;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          animation: slideDown 0.3s ease;
          box-shadow: 0 4px 16px rgba(0,0,0,0.1);
        }
        
        .toast-success { background: #DCFCE7; color: #166534; }
        .toast-error { background: #FEE2E2; color: #DC2626; }
        .toast-warning { background: #FEF3C7; color: #92400E; }
        
        .toast-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        
        .toast-success .toast-icon { background: #16A34A; color: #fff; }
        .toast-error .toast-icon { background: #DC2626; color: #fff; }
        .toast-warning .toast-icon { background: #F59E0B; color: #fff; }

        /* Promo Banner - 16:9 at 508x286 */
        .promo-banner {
          margin: 10px auto 8px auto;
          background: linear-gradient(135deg, #E0F2FE 0%, #DBEAFE 50%, #E0E7FF 100%);
          border-radius: 14px;
          overflow: hidden;
          flex-shrink: 0;
          width: 508px;
          height: 286px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px dashed #94A3B8;
        }
        
        .promo-image-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        
        .promo-placeholder-text {
          font-size: 18px;
          font-weight: 700;
          color: #64748B;
        }
        
        .promo-placeholder-size {
          font-size: 12px;
          font-weight: 600;
          color: #94A3B8;
          background: rgba(255,255,255,0.6);
          padding: 4px 12px;
          border-radius: 6px;
        }

        /* Content Area - Horizontal Layout */
        .content-area {
          flex: 1;
          display: flex;
          gap: 12px;
          padding: 0 16px;
          min-height: 0;
          min-width: 0;
          overflow: hidden;
        }

        /* Vertical Category Sidebar */
        .category-sidebar {
          display: flex;
          flex-direction: column;
          gap: 8px;
          flex-shrink: 0;
          width: 90px;
        }
        
        .category-tab {
          padding: 14px 8px;
          border-radius: 12px;
          border: 2px solid #D6DFEA;
          background: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #6B7280;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: center;
        }
        
        .category-tab:hover {
          border-color: #0284C7;
          color: #0284C7;
        }
        
        .category-tab.active {
          background: #0284C7;
          border-color: #0284C7;
          color: #fff;
        }

        /* Products Area */
        .products-area {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
        }

        /* Pagination Bar */
        .pagination-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 4px 8px 4px;
          gap: 8px;
          flex-shrink: 0;
        }
        
        .page-arrow {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          border: 2px solid #D6DFEA;
          background: #fff;
          color: #111827;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        
        .page-arrow:hover:not(:disabled) {
          border-color: #0284C7;
          color: #0284C7;
        }
        
        .page-arrow:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        
        .page-dots {
          display: flex;
          gap: 6px;
        }
        
        .page-dot {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          border: none;
          background: #D6DFEA;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .page-dot.active {
          width: 24px;
          background: #0284C7;
        }

        /* Product Grid - 3x3 layout */
        .product-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 8px;
          min-width: 0;
          min-height: 0;
          overflow: hidden;
        }
        
        .product-card {
          background: #fff;
          border-radius: 16px;
          padding: 12px;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.15s ease;
          display: flex;
          flex-direction: column;
          position: relative;
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-align: left;
          animation: fadeIn 0.3s ease forwards;
          opacity: 0;
          min-width: 0;
          overflow: hidden;
        }
        
        .product-card:hover:not(:disabled) {
          border-color: #0284C7;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.15);
        }
        
        .product-card:active:not(:disabled) {
          transform: scale(0.98);
          background: #F0F9FF;
        }
        
        .product-card.selected {
          border-color: #0284C7;
          background: #E0F2FE;
        }
        
        .product-card.sold_out {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .product-badge {
          position: absolute;
          top: 8px;
          left: 8px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 6px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.3px;
        }
        
        .badge-icon {
          font-size: 10px;
        }
        
        .product-image-wrap {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 10px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .product-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        
        .placeholder-initials {
          font-size: 32px;
          font-weight: 800;
          color: #6B7280;
          opacity: 0.5;
        }
        
        .placeholder-slot {
          font-size: 12px;
          font-weight: 700;
          color: #6B7280;
          opacity: 0.4;
          background: rgba(255,255,255,0.7);
          padding: 2px 8px;
          border-radius: 4px;
        }
        
        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        
        .product-card:hover:not(:disabled) .product-image {
          transform: scale(1.05);
        }
        
        .sold-out-overlay {
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.5);
        }
        
        .product-details {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .product-name-container {
          overflow: hidden;
          position: relative;
          font-size: 13px;
          font-weight: 600;
          color: #111827;
          margin: 0 0 4px 0;
          line-height: 1.3;
          white-space: nowrap;
        }
        
        .product-name-text {
          display: inline-block;
        }
        
        .product-price {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0;
          margin-top: auto;
        }

        /* Confirm Screen */
        .confirm-screen {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        
        .confirm-card {
          background: #fff;
          border-radius: 24px;
          padding: 24px;
          width: 100%;
          max-width: 400px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }
        
        .confirm-image-wrap {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 20px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .confirm-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .confirm-initials {
          font-size: 80px;
          font-weight: 800;
          color: #6B7280;
          opacity: 0.4;
        }
        
        .confirm-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .confirm-slot {
          position: absolute;
          top: 12px;
          left: 12px;
          background: #fff;
          color: #6B7280;
          font-size: 14px;
          font-weight: 700;
          padding: 8px 14px;
          border-radius: 8px;
        }
        
        .confirm-details {
          text-align: center;
          margin-bottom: 24px;
        }
        
        .confirm-name {
          font-size: 22px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px 0;
        }
        
        .confirm-price {
          font-size: 32px;
          font-weight: 800;
          color: #0284C7;
          margin: 0;
        }
        
        .confirm-actions {
          display: flex;
          gap: 12px;
        }
        
        .btn-primary {
          flex: 2;
          padding: 18px;
          border-radius: 14px;
          border: none;
          background: #0284C7;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);
        }
        
        .btn-primary:hover {
          background: #0369A1;
        }
        
        .btn-secondary {
          flex: 1;
          padding: 18px;
          border-radius: 14px;
          border: 2px solid #D6DFEA;
          background: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #6B7280;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        
        .btn-secondary:hover {
          border-color: #DC2626;
          color: #DC2626;
        }
        
        .btn-full {
          width: 100%;
          flex: none;
        }
        
        .payment-methods {
          margin-top: 24px;
          text-align: center;
        }
        
        .payment-label {
          font-size: 12px;
          color: #6B7280;
          display: block;
          margin-bottom: 8px;
        }
        
        .payment-icons {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        
        .payment-icon {
          font-size: 24px;
        }

        /* Processing Screen */
        .processing-screen,
        .error-screen,
        .success-screen {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }
        
        .processing-card,
        .error-card,
        .success-card {
          background: #fff;
          border-radius: 24px;
          padding: 48px 32px;
          width: 100%;
          max-width: 400px;
          text-align: center;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
        }
        
        .spinner {
          width: 64px;
          height: 64px;
          border: 4px solid #D6DFEA;
          border-top-color: #0284C7;
          border-radius: 50%;
          margin: 0 auto 24px auto;
          animation: spin 1s linear infinite;
        }
        
        .processing-title {
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 8px 0;
        }
        
        .processing-text {
          font-size: 14px;
          color: #6B7280;
          margin: 0;
        }

        /* Error Screen */
        .error-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #FEE2E2;
          color: #DC2626;
          font-size: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px auto;
        }
        
        .error-title {
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 12px 0;
        }
        
        .error-text {
          font-size: 14px;
          color: #6B7280;
          margin: 0 0 24px 0;
          line-height: 1.5;
        }
        
        .error-actions {
          display: flex;
          gap: 12px;
        }

        /* Success Screen */
        .success-icon {
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: #DCFCE7;
          color: #16A34A;
          font-size: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px auto;
        }
        
        .success-title {
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 24px 0;
        }
        
        .success-details {
          margin-bottom: 24px;
        }
        
        .vend-code {
          background: #F4F7FB;
          border-radius: 16px;
          padding: 20px;
          margin-bottom: 16px;
        }
        
        .vend-label {
          display: block;
          font-size: 12px;
          color: #6B7280;
          margin-bottom: 8px;
        }
        
        .vend-slot {
          font-size: 48px;
          font-weight: 800;
          color: #0284C7;
        }
        
        .success-text {
          font-size: 14px;
          color: #6B7280;
          margin: 0;
        }

        /* Bottom Bar */
        .bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          background: #fff;
          border-top: 1px solid #D6DFEA;
          flex-shrink: 0;
        }
        
        .help-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #6B7280;
          cursor: pointer;
          padding: 10px;
          border-radius: 10px;
          transition: all 0.2s ease;
        }
        
        .help-btn:hover {
          background: #F4F7FB;
          color: #0284C7;
        }
        
        .help-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #0284C7;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 700;
        }
        
        .qr-section {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .qr-label {
          font-size: 11px;
          color: #6B7280;
        }
        
        .qr-placeholder {
          width: 40px;
          height: 40px;
          background: #F4F7FB;
          border: 1px solid #D6DFEA;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: 700;
          color: #6B7280;
        }
        
        .lang-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 14px;
          font-weight: 600;
          color: #111827;
          cursor: pointer;
          padding: 10px;
          border-radius: 10px;
          transition: all 0.2s ease;
        }
        
        .lang-btn:hover {
          background: #F4F7FB;
        }
        
        .lang-arrow {
          font-size: 10px;
          color: #6B7280;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translate(-50%, -20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        
        /* Focus states for accessibility */
        .category-tab:focus-visible,
        .product-card:focus-visible,
        .btn-primary:focus-visible,
        .btn-secondary:focus-visible,
        .hero-card:focus-visible,
        .highlight-card:focus-visible {
          outline: 3px solid #0284C7;
          outline-offset: 2px;
        }

        /* Featured Page Layout */
        .featured-layout {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        /* Hero Grid - 3x3 layout with auto-flow for spanning */
        .hero-grid {
          flex: 1;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 8px;
          grid-auto-flow: dense;
          min-width: 0;
          min-height: 0;
          overflow: hidden;
        }

        /* Card spanning classes */
        .hero-card.span-2x1 .hero-initials { font-size: 28px; }
        .hero-card.span-1x2 .hero-initials { font-size: 28px; }
        .hero-card.span-2x2 .hero-initials { font-size: 36px; }
        .hero-card.span-3x1 .hero-initials { font-size: 32px; }
        .hero-card.span-1x3 .hero-initials { font-size: 32px; }

        .hero-card {
          background: #fff;
          border-radius: 12px;
          padding: 8px;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.15s ease;
          display: flex;
          flex-direction: column;
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-align: left;
          overflow: hidden;
          min-width: 0;
        }

        .hero-card:hover {
          border-color: #0284C7;
          box-shadow: 0 4px 12px rgba(2, 132, 199, 0.15);
        }

        .hero-card:active {
          transform: scale(0.98);
          background: #F0F9FF;
        }

        .hero-image-wrap {
          flex: 1;
          min-height: 0;
          border-radius: 10px;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
        }

        .hero-initials {
          font-size: 24px;
          font-weight: 800;
          color: #6B7280;
          opacity: 0.5;
        }

        .hero-slot {
          font-size: 9px;
          font-weight: 700;
          color: #6B7280;
          opacity: 0.4;
          background: rgba(255,255,255,0.7);
          padding: 2px 6px;
          border-radius: 3px;
        }

        .hero-savings-badge {
          position: absolute;
          top: 4px;
          left: 4px;
          background: #DC2626;
          color: #fff;
          font-size: 8px;
          font-weight: 700;
          padding: 3px 6px;
          border-radius: 4px;
        }

        .hero-badge {
          position: absolute;
          top: 4px;
          left: 4px;
          background: #14B8A6;
          color: #fff;
          font-size: 8px;
          font-weight: 700;
          padding: 3px 6px;
          border-radius: 4px;
        }

        .hero-details {
          flex-shrink: 0;
          padding-top: 6px;
          overflow: hidden;
        }

        .hero-name-container {
          overflow: hidden;
          position: relative;
          font-size: 11px;
          font-weight: 600;
          color: #111827;
          line-height: 1.2;
          white-space: nowrap;
        }

        .hero-name-text {
          display: inline-block;
        }

        /* Smart scroll - scrolls exactly to show end of text, then resets */
        @keyframes carousel-scroll {
          0%, 10% { transform: translateX(0); }
          45%, 55% { transform: translateX(var(--scroll-distance, 0)); }
          90%, 100% { transform: translateX(0); }
        }

        .hero-price-row {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .hero-price {
          font-size: 13px;
          font-weight: 700;
          color: #0284C7;
        }

        .hero-original-price {
          font-size: 10px;
          font-weight: 500;
          color: #9CA3AF;
          text-decoration: line-through;
        }
      `}</style>
    </div>
  );
};

export default VendingKioskUI;
