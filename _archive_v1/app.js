/**
 * Pink Lady Herbal Napkin — Interactive Application Logic
 * Strict constraints: Zero sparkles, zero blinking, zero normal dots.
 * 60fps smooth scrolling, live dynamic SVG pad morphing, cart drawer.
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. STICKY NAVBAR & SMOOTH SCROLL SPY
  // =========================================================================
  const siteHeader = document.querySelector('.site-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }

    // Scroll spy
    let currentId = '';
    const scrollPos = window.scrollY + 120;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentId}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });

  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navLinksContainer = document.querySelector('.nav-links');
  if (mobileMenuBtn && navLinksContainer) {
    mobileMenuBtn.addEventListener('click', () => {
      const isVisible = navLinksContainer.style.display === 'flex';
      navLinksContainer.style.display = isVisible ? 'none' : 'flex';
      navLinksContainer.style.flexDirection = 'column';
      navLinksContainer.style.position = 'absolute';
      navLinksContainer.style.top = '70px';
      navLinksContainer.style.left = '20px';
      navLinksContainer.style.right = '20px';
      navLinksContainer.style.background = '#FFF8F0';
      navLinksContainer.style.padding = '24px';
      navLinksContainer.style.borderRadius = '16px';
      navLinksContainer.style.boxShadow = '0 10px 30px rgba(103, 60, 103, 0.15)';
    });
  }

  // =========================================================================
  // 2. THE CUSTOM NAPKIN ATELIER (Dynamic Real-Time Configurator)
  // =========================================================================
  const customizerState = {
    size: '280', // 240, 280, 320, 350
    sizeLabel: '280mm Super Heavy Flow',
    basePrice: 10,
    infusion: 'aloe-neem', // aloe-neem, mint-camellia, pure-cotton
    infusionLabel: 'Soothing Aloe & Neem',
    infusionColor: '#5C8A66', // Organic leaf green
    wing: 'feather', // feather, cloud
    packCount: 20, // 10, 20, 30
    packMultiplier: 1.85,
    get calculatedPrice() {
      return (this.basePrice * this.packMultiplier).toFixed(2);
    }
  };

  // DOM Elements for customizer
  const padSvgPath = document.getElementById('pad-silhouette-shape');
  const padHerbalChip = document.getElementById('pad-herbal-core');
  const padMetricPill = document.getElementById('pad-metric-pill');
  const infusionChipPreview = document.getElementById('infusion-chip-preview');
  const infusionLabelPreview = document.getElementById('infusion-label-preview');
  const customizerPriceDisplay = document.getElementById('customizer-price-display');
  const addCustomPackBtn = document.getElementById('add-custom-pack-btn');

  // SVG pad shape definitions based on length
  const padShapes = {
    '240': {
      d: "M 70,25 C 100,10 160,10 190,25 C 215,38 215,85 190,100 C 185,103 182,110 182,120 C 182,128 210,135 220,150 C 220,175 190,185 182,185 C 182,195 188,205 190,215 C 215,230 215,275 190,285 C 160,300 100,300 70,285 C 45,275 45,230 70,215 C 72,205 78,195 78,185 C 70,185 40,175 40,150 C 50,135 78,128 78,120 C 78,110 75,103 70,100 C 45,85 45,38 70,25 Z",
      viewBox: "0 0 260 320",
      chipY: 90,
      chipHeight: 130
    },
    '280': {
      d: "M 70,20 C 100,6 160,6 190,20 C 218,34 218,95 190,112 C 185,116 182,124 182,135 C 182,145 214,152 225,170 C 225,198 190,210 182,210 C 182,222 188,235 190,248 C 218,265 218,320 190,332 C 160,348 100,348 70,332 C 42,320 42,265 70,248 C 72,235 78,222 78,210 C 70,210 35,198 35,170 C 46,152 78,145 78,135 C 78,124 75,116 70,112 C 42,95 42,34 70,20 Z",
      viewBox: "0 0 260 360",
      chipY: 100,
      chipHeight: 155
    },
    '320': {
      d: "M 70,16 C 100,4 160,4 190,16 C 220,30 220,105 190,125 C 185,129 182,138 182,150 C 182,162 216,170 228,190 C 228,222 190,236 182,236 C 182,250 190,268 192,284 C 224,305 224,368 192,382 C 160,400 100,400 68,382 C 36,368 36,305 68,284 C 70,268 78,250 78,236 C 70,236 32,222 32,190 C 44,170 78,162 78,150 C 78,138 75,129 70,125 C 40,105 40,30 70,16 Z",
      viewBox: "0 0 260 410",
      chipY: 110,
      chipHeight: 185
    },
    '350': {
      d: "M 68,14 C 100,2 160,2 192,14 C 224,28 224,115 192,138 C 186,142 182,152 182,166 C 182,180 220,190 232,212 C 232,248 190,264 182,264 C 182,280 192,302 194,320 C 230,345 230,418 194,435 C 160,455 100,455 66,435 C 30,418 30,345 66,320 C 68,302 78,280 78,264 C 70,264 28,248 28,212 C 40,190 78,180 78,166 C 78,152 74,142 68,138 C 36,115 36,28 68,14 Z",
      viewBox: "0 0 260 460",
      chipY: 120,
      chipHeight: 215
    }
  };

  function updateCustomizerUI() {
    // 1. Update Pad Silhouette
    const shape = padShapes[customizerState.size] || padShapes['280'];
    const padSvg = document.getElementById('pad-live-svg');
    if (padSvg && padSvgPath) {
      padSvg.setAttribute('viewBox', shape.viewBox);
      padSvgPath.setAttribute('d', shape.d);
    }
    
    // 2. Update Herbal Chip
    if (padHerbalChip) {
      padHerbalChip.setAttribute('y', shape.chipY);
      padHerbalChip.setAttribute('height', shape.chipHeight);
      padHerbalChip.setAttribute('fill', customizerState.infusionColor);
    }

    // 3. Update Text Indicators
    if (padMetricPill) {
      padMetricPill.textContent = `${customizerState.sizeLabel} • 0% Toxins`;
    }
    if (infusionChipPreview) {
      infusionChipPreview.style.backgroundColor = customizerState.infusionColor;
    }
    if (infusionLabelPreview) {
      infusionLabelPreview.textContent = customizerState.infusionLabel;
    }

    // 4. Update Price Display
    if (customizerPriceDisplay) {
      customizerPriceDisplay.textContent = `$${customizerState.calculatedPrice}`;
    }
  }

  // Size radio selectors
  const sizeRadios = document.querySelectorAll('.size-option-card');
  sizeRadios.forEach(card => {
    card.addEventListener('click', () => {
      sizeRadios.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      customizerState.size = card.dataset.size;
      customizerState.sizeLabel = card.dataset.label;
      customizerState.basePrice = parseFloat(card.dataset.price);
      updateCustomizerUI();
    });
  });

  // Infusion radio selectors
  const infusionRadios = document.querySelectorAll('.infusion-option-card');
  infusionRadios.forEach(card => {
    card.addEventListener('click', () => {
      infusionRadios.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      customizerState.infusion = card.dataset.infusion;
      customizerState.infusionLabel = card.dataset.label;
      customizerState.infusionColor = card.dataset.color;
      updateCustomizerUI();
    });
  });

  // Wing & core thickness selectors
  const wingRadios = document.querySelectorAll('.wing-option-card');
  wingRadios.forEach(card => {
    card.addEventListener('click', () => {
      wingRadios.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      customizerState.wing = card.dataset.wing;
      updateCustomizerUI();
    });
  });

  // Pack count selectors
  const countRadios = document.querySelectorAll('.count-option-card');
  countRadios.forEach(card => {
    card.addEventListener('click', () => {
      countRadios.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      customizerState.packCount = parseInt(card.dataset.count, 10);
      customizerState.packMultiplier = parseFloat(card.dataset.multiplier);
      updateCustomizerUI();
    });
  });

  // Initial draw
  updateCustomizerUI();

  // =========================================================================
  // 3. CART SYSTEM & SLIDE-OVER DRAWER
  // =========================================================================
  const cart = [];
  const cartDrawerOverlay = document.getElementById('cart-drawer-overlay');
  const cartToggleBtn = document.getElementById('cart-toggle-btn');
  const cartCloseBtn = document.getElementById('cart-close-btn');
  const cartBody = document.getElementById('cart-body');
  const cartCountBadge = document.getElementById('cart-count-badge');
  const cartSubtotalVal = document.getElementById('cart-subtotal-val');
  const toastNotice = document.getElementById('toast-notice');
  const toastMessage = document.getElementById('toast-message');

  function showToast(msg) {
    if (!toastNotice) return;
    toastMessage.textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3200);
  }

  function openCart() {
    if (cartDrawerOverlay) cartDrawerOverlay.classList.add('active');
  }

  function closeCart() {
    if (cartDrawerOverlay) cartDrawerOverlay.classList.remove('active');
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCart);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCart);
  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === cartDrawerOverlay) closeCart();
    });
  }

  function renderCart() {
    if (!cartBody) return;
    if (cart.length === 0) {
      cartBody.innerHTML = `
        <div class="cart-empty-message">
          <p style="font-size: 1.1rem; color: #673C67; font-weight: 600; margin-bottom: 6px;">Your Care Bag is Empty</p>
          <p style="font-size: 0.88rem;">Customize your tailored herbal pack or explore our ready kits.</p>
        </div>
      `;
      if (cartCountBadge) cartCountBadge.textContent = '0';
      if (cartSubtotalVal) cartSubtotalVal.textContent = '$0.00';
      return;
    }

    let subtotal = 0;
    let totalItems = 0;
    cartBody.innerHTML = '';

    cart.forEach((item, index) => {
      subtotal += parseFloat(item.price);
      totalItems += item.qty;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item-card';
      itemEl.innerHTML = `
        <div class="cart-item-info">
          <h4>${item.title}</h4>
          <p>${item.details}</p>
        </div>
        <div class="cart-item-price">$${parseFloat(item.price).toFixed(2)}</div>
        <button class="cart-remove-item" data-index="${index}" aria-label="Remove item">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      `;
      cartBody.appendChild(itemEl);
    });

    if (cartCountBadge) cartCountBadge.textContent = totalItems.toString();
    if (cartSubtotalVal) cartSubtotalVal.textContent = `$${subtotal.toFixed(2)}`;

    // Attach remove handlers
    document.querySelectorAll('.cart-remove-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const idx = parseInt(btn.dataset.index, 10);
        cart.splice(idx, 1);
        renderCart();
        showToast('Item removed from your bag');
      });
    });
  }

  // Add Custom Pack handler
  if (addCustomPackBtn) {
    addCustomPackBtn.addEventListener('click', () => {
      const customItem = {
        title: `Custom Pink Lady Box (${customizerState.packCount} Pads)`,
        details: `${customizerState.sizeLabel} • ${customizerState.infusionLabel}`,
        price: customizerState.calculatedPrice,
        qty: 1
      };
      cart.push(customItem);
      renderCart();
      showToast('🌸 Custom Herbal Box added to your bag!');
      openCart();
    });
  }

  // Add Curated Pack handlers
  document.querySelectorAll('.add-curated-pack-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const packName = btn.dataset.name;
      const packPrice = btn.dataset.price;
      const packBreakdown = btn.dataset.breakdown;

      cart.push({
        title: packName,
        details: packBreakdown,
        price: packPrice,
        qty: 1
      });
      renderCart();
      showToast(`🌿 ${packName} added to your bag!`);
      openCart();
    });
  });

  // =========================================================================
  // 4. 7-LAYER ANATOMY TABS INTERACTION
  // =========================================================================
  const layerTabs = document.querySelectorAll('.layer-item-tab');
  const layerInfoContainer = document.getElementById('active-layer-detail');

  const layerDetails = {
    '1': {
      title: "100% Organic Bamboo & Cotton Topsheet",
      desc: "Super-fine breathable natural fibers that are whisper-gentle against delicate skin. Absorbs in micro-seconds with zero wetness sensation and zero chafing.",
      stat: "100% Biodegradable & Hypoallergenic"
    },
    '2': {
      title: "Ayurvedic Herbal Bio-Chip (Neem & Aloe)",
      desc: "A proprietary herbal core embedded with medicinal Azadirachta Indica (Neem) and Aloe Vera. Naturally neutralizes 99.9% of bacteria and prevents rash flare-ups.",
      stat: "Zero Synthetic Fragrance or Chemicals"
    },
    '3': {
      title: "Airlaid Rapid Dispersion Membrane",
      desc: "Distributes liquid evenly across the core within 0.3 seconds to prevent surface puddling or localized heavy spots.",
      stat: "Instant Fluid Guidance System"
    },
    '4': {
      title: "Japanese Super Absorbent Polymer (SAP) Core",
      desc: "Advanced medical-grade micro-gel matrix that locks 10x its weight in liquid, turning moisture into a dry gel without bulky stiffness.",
      stat: "10x Ultra-Dry Absorbency"
    },
    '5': {
      title: "360° Leak-Guard Wing System",
      desc: "Anatomically engineered side contours with flexible stretch wings that wrap softly around intimate wear without adhesive friction.",
      stat: "Zero Side-Leak Guarantee"
    },
    '6': {
      title: "Micro-Porous Breathable Base Shield",
      desc: "Features microscopic air-permeable pores that let warm moisture and heat evaporate outward while keeping fluid completely locked inside.",
      stat: "Keeps Skin Cool & Rash-Free"
    },
    '7': {
      title: "Food-Grade Non-Toxic Adhesive Strip",
      desc: "Secures firmly to undergarments without leaving gummy residue, using harmless food-grade adhesive with zero formaldehyde or dioxins.",
      stat: "100% Clean Garment Hold"
    }
  };

  layerTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      layerTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const layerId = tab.dataset.layer;
      const data = layerDetails[layerId];

      if (layerInfoContainer && data) {
        layerInfoContainer.innerHTML = `
          <div style="background: var(--soft-peach); padding: 24px; border-radius: 16px; border: 1px solid var(--soft-border);">
            <div style="display: inline-block; background: var(--deep-plum); color: #fff; font-size: 0.75rem; font-weight: 700; padding: 4px 12px; border-radius: 999px; margin-bottom: 12px;">LAYER ${layerId} BREAKDOWN</div>
            <h3 style="font-size: 1.3rem; color: var(--deep-plum); margin-bottom: 8px;">${data.title}</h3>
            <p style="font-size: 0.95rem; color: var(--dark-plum-muted); line-height: 1.6; margin-bottom: 14px;">${data.desc}</p>
            <div style="font-size: 0.82rem; font-weight: 700; color: var(--coral);">✨ ${data.stat}</div>
          </div>
        `;
      }
    });
  });

  // =========================================================================
  // 5. PERIOD FLOW & BOX CALCULATOR QUIZ
  // =========================================================================
  const quizState = {
    duration: '4-5',
    flow: 'moderate',
    overnight: 'yes'
  };

  const durationBtns = document.querySelectorAll('.quiz-duration-btn');
  const flowBtns = document.querySelectorAll('.quiz-flow-btn');
  const overnightBtns = document.querySelectorAll('.quiz-night-btn');
  const quizRecommendationText = document.getElementById('quiz-recommendation-text');
  const applyQuizBtn = document.getElementById('apply-quiz-recommendation-btn');

  function calculateQuizRecommendation() {
    let reg = 10;
    let superPads = 6;
    let night = 4;
    let suggestedSize = '280';

    if (quizState.flow === 'light') {
      reg = 14;
      superPads = 4;
      night = 2;
      suggestedSize = '240';
    } else if (quizState.flow === 'heavy') {
      reg = 6;
      superPads = 12;
      night = 6;
      suggestedSize = '320';
    }

    if (quizState.overnight === 'yes') {
      night += 4;
    }

    const total = reg + superPads + night;
    if (quizRecommendationText) {
      quizRecommendationText.innerHTML = `
        <strong>Recommended: Pink Lady 20-24 Pad Balanced Pack</strong><br/>
        Includes: ${reg} Regular (240mm) + ${superPads} Super Heavy (280mm) + ${night} Overnight Guard (320mm) with Aloe & Neem Infusion.
      `;
    }

    return { total, suggestedSize };
  }

  durationBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      durationBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      quizState.duration = btn.dataset.val;
      calculateQuizRecommendation();
    });
  });

  flowBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      flowBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      quizState.flow = btn.dataset.val;
      calculateQuizRecommendation();
    });
  });

  overnightBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      overnightBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      quizState.overnight = btn.dataset.val;
      calculateQuizRecommendation();
    });
  });

  if (applyQuizBtn) {
    applyQuizBtn.addEventListener('click', () => {
      const rec = calculateQuizRecommendation();
      // Select the suggested size in customizer
      const targetRadio = document.querySelector(`.size-option-card[data-size="${rec.suggestedSize}"]`);
      if (targetRadio) targetRadio.click();

      // Scroll smoothly to customizer
      const customSection = document.getElementById('custom-studio');
      if (customSection) {
        customSection.scrollIntoView({ behavior: 'smooth' });
        showToast('✨ Tailored recommendation applied to your customizer!');
      }
    });
  }

  // =========================================================================
  // 6. FAQ ACCORDION INTERACTION
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Close all others
      faqItems.forEach(other => {
        other.classList.remove('open');
        const otherAns = other.querySelector('.faq-answer');
        if (otherAns) otherAns.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 40 + 'px';
      }
    });
  });

  // Open first FAQ by default
  if (faqItems.length > 0) {
    faqItems[0].classList.add('open');
    const firstAns = faqItems[0].querySelector('.faq-answer');
    if (firstAns) firstAns.style.maxHeight = firstAns.scrollHeight + 40 + 'px';
  }

  // Initial cart render
  renderCart();
});
