/* ═══════════════════════════════════════════════════
   STEELMAX – main.js
   Pure Vanilla JS | No libraries
═══════════════════════════════════════════════════ */

'use strict';

/* ─── PRODUCTS DATA ─────────────────────────────── */
const PRODUCTS = {
  1: {
    title: 'حديد تسليح',
    img: 'img/Tasleh.jpg',
    thumbs: [
      'img/Tasleh.jpg',
      'img/تسليح٢.jpg',
      'img/تسليح ٣.jpg',
      'img/تسليح ٤.jpg',
    ],
    desc: 'يستخدم حديد التسليح في تعزيز الخرسانة المسلحة. يتميز بقوة شد عالية ومطابقة للمواصفات القياسية المصرية ASTM A615.',
    specs: [
      ['نوع المنتج',  'حديد تسليح'],
      ['درجة الجودة', 'ASTM A615'],
      ['قطر السيخ',  '10 مم – 32 مم'],
      ['طول السيخ',  '12 متر'],
      ['شكل السطح',  'مضلع'],
      ['الاستخدام',  'تسليح الخرسانة المسلحة'],
    ],
    prices: [
      ['10 مم', '19,500'],
      ['12 مم', '19,000'],
      ['16 مم', '18,500'],
      ['20 مم', '18,000'],
      ['25 مم', '17,800'],
      ['32 مم', '17,500'],
    ],
  },
  2: {
    title: 'قطاعات إنشائية',
    img: 'img/kta3at.webp',
    thumbs: [
      'img/kta3at.webp',
      'img/قطاعات .jpg',
    ],
    desc: 'قطاعات حديدية إنشائية متنوعة الأشكال والأحجام، مناسبة لجميع التطبيقات الإنشائية والصناعية بجودة عالية.',
    specs: [
      ['نوع المنتج',   'قطاعات إنشائية'],
      ['الأنواع',      'IPE – HEA – HEB – UPN'],
      ['الأطوال',      '6 متر – 12 متر'],
      ['المواصفات',   'DIN 1025 / EN 10034'],
      ['الاستخدام',   'الإنشاءات الفولاذية'],
    ],
    prices: [
      ['IPE 80',  '22,000'],
      ['IPE 100', '21,500'],
      ['IPE 120', '21,000'],
      ['HEA 100', '23,000'],
      ['HEA 120', '22,500'],
    ],
  },
  3: {
    title: 'مواسير مربعة',
    img: 'img/moaser morbaa.jpg',
    thumbs: [
      'img/moaser morbaa.jpg',
      'img/مواسير مربعه.jpg',
    ],
    desc: 'مواسير مربعة مجلفنة وسوداء بمقاسات متعددة، تُستخدم في الإنشاءات المعدنية والأعمال الزراعية والصناعية.',
    specs: [
      ['نوع المنتج', 'مواسير مربعة'],
      ['التشطيب',   'مجلفن / أسود'],
      ['المقاسات',  '20×20 – 200×200 مم'],
      ['السماكة',   '1.5 – 6 مم'],
      ['الطول',     '6 متر'],
    ],
    prices: [
      ['20×20 مم', '18,000'],
      ['40×40 مم', '17,500'],
      ['60×60 مم', '17,000'],
      ['80×80 مم', '16,800'],
      ['100×100 مم','16,500'],
    ],
  },
  4: {
    title: 'مواسير دائرية',
    img: 'img/moaser daarya.webp',
    thumbs: [
      'img/moaser daarya.webp',
      'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=200&q=70',
    ],
    desc: 'مواسير دائرية مجلفنة وسوداء بجودة عالية ومواصفات قياسية، تناسب شبكات المياه والغاز والتطبيقات الصناعية.',
    specs: [
      ['نوع المنتج', 'مواسير دائرية'],
      ['التشطيب',   'مجلفن / أسود'],
      ['القطر',     '½ – 8 بوصة'],
      ['السماكة',   '2 – 6 مم'],
      ['الطول',     '6 متر'],
    ],
    prices: [
      ['½ بوصة',  '8,500'],
      ['1 بوصة',  '9,000'],
      ['2 بوصة',  '11,000'],
      ['3 بوصة',  '14,000'],
      ['4 بوصة',  '17,500'],
    ],
  },
  5: {
    title: 'صاج',
    img: 'img/saj.jpeg',
    thumbs: [
      'img/saj.jpeg',
    ],
    desc: 'صاج مسطح بمقاسات وسماكات مختلفة، مناسب للتصنيع والتشكيل والبناء بجودة عالية ومطابق للمواصفات.',
    specs: [
      ['نوع المنتج', 'صاج مسطح'],
      ['المقاسات',  '1000×2000 / 1250×2500 مم'],
      ['السماكة',   '1 – 25 مم'],
      ['التشطيب',   'مدرفل على بارد / حار'],
      ['الاستخدام', 'تصنيع – بناء – تشكيل'],
    ],
    prices: [
      ['1 مم',  '20,000'],
      ['2 مم',  '19,500'],
      ['3 مم',  '19,000'],
      ['4 مم',  '18,500'],
      ['6 مم',  '18,000'],
      ['8 مم',  '17,500'],
    ],
  },
  6: {
    title: 'زوايا',
    img: 'img/zawaya.jpg',
    thumbs: [
      'img/zawaya.jpg',
    ],
    desc: 'زوايا حديدية بمقاسات متنوعة تناسب التطبيقات الإنشائية والصناعية المختلفة، بجودة مضمونة وأسعار تنافسية.',
    specs: [
      ['نوع المنتج', 'زوايا'],
      ['المقاسات',  '20×20 – 150×150 مم'],
      ['السماكة',   '3 – 12 مم'],
      ['الطول',     '6 متر'],
      ['الاستخدام', 'إنشاءات – حدادة – ديكور'],
    ],
    prices: [
      ['20×20×3 مم', '16,000'],
      ['30×30×3 مم', '15,800'],
      ['40×40×4 مم', '15,500'],
      ['50×50×5 مم', '15,200'],
      ['60×60×6 مم', '15,000'],
    ],
  },
  7: {
    title: 'قنوات',
    img: 'img/qnawat.jpg',
    thumbs: [
      'img/qnawat.jpg',
    ],
    desc: 'قنوات حديدية (UPN) بجودة عالية ومقاسات متعددة، مناسبة للإنشاءات الفولاذية وأعمال التصنيع الثقيل.',
    specs: [
      ['نوع المنتج', 'قنوات UPN'],
      ['المقاسات',  'UPN 65 – UPN 300'],
      ['الطول',     '6 متر – 12 متر'],
      ['المواصفات', 'DIN 1026-1'],
      ['الاستخدام', 'إنشاءات – صناعة ثقيلة'],
    ],
    prices: [
      ['UPN 65',  '16,500'],
      ['UPN 80',  '17,000'],
      ['UPN 100', '17,500'],
      ['UPN 120', '18,000'],
      ['UPN 140', '18,500'],
    ],
  },
  8: {
    title: 'أسلاك ومستلزمات',
    img: 'img/aslak.webp',
    thumbs: [
      'img/aslak.webp',
    ],
    desc: 'أسلاك حديدية ومستلزمات البناء المتنوعة بجودة عالية، تشمل أسلاك الربط وشبك الحديد وغيرها.',
    specs: [
      ['نوع المنتج', 'أسلاك ومستلزمات'],
      ['الأنواع',   'أسلاك ربط – شبك – طوب شبك'],
      ['القطر',     '1 – 6 مم'],
      ['التشطيب',   'مجلفن / أسود'],
      ['الاستخدام', 'جميع الاستخدامات الإنشائية'],
    ],
    prices: [
      ['1 مم',  '22,000'],
      ['2 مم',  '21,000'],
      ['3 مم',  '20,000'],
      ['4 مم',  '19,500'],
      ['6 مم',  '19,000'],
    ],
  },
};


/* ─── DOM REFS ──────────────────────────────────── */
const navbar        = document.getElementById('navbar');
const hamburger     = document.getElementById('hamburger');
const drawer        = document.getElementById('drawer');
const overlay       = document.getElementById('overlay');
const filterBtns    = document.querySelectorAll('.filter-btn');
const productCards  = document.querySelectorAll('.product-card');
const modalBackdrop = document.getElementById('modalBackdrop');
const productModal  = document.getElementById('productModal');
const modalClose    = document.getElementById('modalClose');
const modalTitle    = document.getElementById('modalTitle');
const modalImg      = document.getElementById('modalImg');
const modalThumbs   = document.getElementById('modalThumbs');
const modalDesc     = document.getElementById('modalDesc');
const modalSpecs    = document.getElementById('modalSpecs');
const modalPrices   = document.getElementById('modalPrices');


/* ─── NAVBAR: SCROLL EFFECT ─────────────────────── */
function handleScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
  updateActiveLink();
}

window.addEventListener('scroll', handleScroll, { passive: true });


/* ─── NAVBAR: ACTIVE LINK ON SCROLL ─────────────── */
function updateActiveLink() {
  const sections = document.querySelectorAll('section[id]');
  let current = '';

  sections.forEach(section => {
    const top = section.offsetTop - 90;
    if (window.scrollY >= top) current = section.getAttribute('id');
  });

  document.querySelectorAll('.nav-links a, .mobile-drawer ul a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) a.classList.add('active');
  });
}


/* ─── MOBILE MENU ───────────────────────────────── */
function toggleMenu(open) {
  hamburger.classList.toggle('open', open);
  drawer.classList.toggle('open', open);
  overlay.classList.toggle('show', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

hamburger.addEventListener('click', () => {
  toggleMenu(!drawer.classList.contains('open'));
});

overlay.addEventListener('click', () => toggleMenu(false));

drawer.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => toggleMenu(false));
});


/* ─── PRODUCTS FILTER ───────────────────────────── */
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter cards with fade
    productCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      if (match) {
        card.classList.remove('hidden');
        card.style.animation = 'fadeInUp 0.35s ease both';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});


/* ─── PRODUCT MODAL ─────────────────────────────── */
function openModal(id) {
  const data = PRODUCTS[id];
  if (!data) return;

  // Title
  modalTitle.textContent = data.title;

  // Main image
  modalImg.src  = data.img;
  modalImg.alt  = data.title;

  // Thumbnails
  modalThumbs.innerHTML = '';
  data.thumbs.forEach((src, i) => {
    const div = document.createElement('div');
    div.className = 'modal-thumb' + (i === 0 ? ' active' : '');

    const img = document.createElement('img');
    img.src = src;
    img.alt = data.title + ' ' + (i + 1);
    img.loading = 'lazy';

    div.appendChild(img);
    div.addEventListener('click', () => {
      modalImg.src = src.replace('w=200', 'w=800');
      modalThumbs.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
      div.classList.add('active');
    });

    modalThumbs.appendChild(div);
  });

  // Description
  modalDesc.textContent = data.desc;

  // Specs
  modalSpecs.innerHTML = data.specs.map(([key, val]) => `
    <div class="spec-row">
      <span class="spec-key">${key}</span>
      <span class="spec-val">${val}</span>
    </div>
  `).join('');

  // Prices
  modalPrices.innerHTML = `
    <div class="price-header">
      <span>القطر / المقاس</span>
      <span>السعر (ج.م / طن)</span>
    </div>
    ${data.prices.map(([size, price]) => `
      <div class="price-row">
        <span class="price-size">${size}</span>
        <span class="price-val">${price} <span>ج.م</span></span>
      </div>
    `).join('')}
  `;

  // Show modal
  modalBackdrop.classList.add('show');
  productModal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Scroll modal body to top
  productModal.querySelector('.modal-body').scrollTop = 0;
}

function closeModal() {
  modalBackdrop.classList.remove('show');
  productModal.classList.remove('open');
  document.body.style.overflow = '';
}

// Open on card click
productCards.forEach(card => {
  card.addEventListener('click', () => openModal(card.dataset.id));
});

// Close on backdrop/button
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

// Close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
    toggleMenu(false);
  }
});


/* ─── SMOOTH SCROLL FOR ANCHOR LINKS ────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  });
});


/* ─── INTERSECTION OBSERVER: FADE IN SECTIONS ───── */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity    = '1';
        entry.target.style.transform  = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.feature-item, .stat-card, .footer-col').forEach(el => {
  el.style.opacity   = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});