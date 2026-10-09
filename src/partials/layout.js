const LOGO = "/assets/logo.png";
const SITE_URL = "https://ptasolutions.vercel.app";
const SITE_NAME = "PTA Solutions Hearing and Speech Care Clinics";

function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": SITE_NAME,
    "alternateName": "PTA Solutions",
    "image": `${SITE_URL}${LOGO}`,
    "logo": `${SITE_URL}${LOGO}`,
    "url": SITE_URL,
    "telephone": "+91-9773545058",
    "email": "ptasolutionshsc@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shanmukhapriya HealthCare Center, 6th Floor, Shrikant Chambers -2, Above Surya Hospital, Next to R.K.Studio, Opp CROMA",
      "addressLocality": "Chembur, Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400074",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Person",
      "name": "Dr. Johnsavio Fernandes"
    }
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": SITE_URL
  };
}

function breadcrumbSchema(crumbs, path) {
  const items = crumbs.map((c, i) => {
    const isLast = i === crumbs.length - 1;
    const url = isLast ? `${SITE_URL}${path}` : `${SITE_URL}${c.href === '/' ? '' : c.href}`;
    return { "@type": "ListItem", "position": i + 1, "name": c.label, "item": url };
  });
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": items };
}

function serviceSchema({ name, description, priceMin, priceMax, price, path }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "name": `${name} | ${SITE_NAME}`,
    "description": description,
    "provider": { "@type": "MedicalBusiness", "name": SITE_NAME, "url": SITE_URL },
    "areaServed": { "@type": "City", "name": "Mumbai" },
    "url": `${SITE_URL}${path}`
  };
  if (price) {
    schema.offers = { "@type": "Offer", "priceCurrency": "INR", "price": String(price) };
  } else if (priceMin && priceMax) {
    schema.offers = {
      "@type": "Offer",
      "priceCurrency": "INR",
      "priceSpecification": { "@type": "PriceSpecification", "minPrice": String(priceMin), "maxPrice": String(priceMax), "priceCurrency": "INR" }
    };
  }
  return schema;
}

function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.aPlain || f.a }
    }))
  };
}

function jsonLd(obj) {
  return `<script type="application/ld+json">${JSON.stringify(obj)}<\/script>`;
}

function head({ title, description, path = '/', ogImage, extraSchema = [] }) {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;
  const image = ogImage || `${SITE_URL}${LOGO}`;
  const schemas = [organizationSchema(), websiteSchema(), ...extraSchema].map(jsonLd).join('\n  ');
  return `<!DOCTYPE html><html lang="en" class="scroll-smooth"><head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="${SITE_NAME}">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${image}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0" rel="stylesheet">
  ${schemas}
  <script src="https://cdn.tailwindcss.com?plugins=forms"><\/script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: "#1E3E83",
            teal: "#4FC3D9",
            dark: "#0F1E3E",
            textdark: "#182426",
            muted: "#687779",
            surface: "#F7FAF9",
            warmwhite: "#FCFDFC",
            bordercol: "#DCE7E6"
          },
          fontFamily: {
            display: ["Manrope", "sans-serif"],
            body: ["Inter", "sans-serif"]
          }
        }
      }
    };
  <\/script>
  <style>
    .material-symbols-outlined {
      font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
      display: inline-block;
      vertical-align: middle;
    }
    .faq-chevron { transition: transform 0.25s ease; }
    .faq-item.open .faq-chevron { transform: rotate(180deg); }
    .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
    .faq-item.open .faq-answer { max-height: 320px; }
  </style>
</head>
<body class="bg-[#F7FAF9] text-[#182426] font-body antialiased selection:bg-[#4FC3D9] selection:text-[#0F1E3E] flex flex-col min-h-screen">
`;
}

const NAV_ITEMS = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'services', label: 'Services', href: '/services' },
  { key: 'nri', label: 'NRI Hearing Care', href: '/nri-hearing-care' },
  { key: 'complete-care', label: 'Complete Care', href: '/services/complete-care' },
  { key: 'book-appointment', label: 'Booking Hub', href: '/book-appointment' },
  { key: 'contact', label: 'Contact', href: '/contact' },
];

function header(active) {
  const navHtml = NAV_ITEMS.map(it => {
    const activeClass = it.key === active
      ? 'text-[#0F1E3E] font-semibold border-b-2 border-[#4FC3D9]'
      : 'hover:text-[#1E3E83]';
    return `        <a href="${it.href}" class="main-nav transition-colors py-1 ${activeClass}">${it.label}</a>`;
  }).join('\n');

  const mobileItems = NAV_ITEMS.map((it, i) => {
    const border = i < NAV_ITEMS.length - 1 ? ' border-b border-[#F1F4F3]' : '';
    return `    <a href="${it.href}" class="block py-2 text-[15px] font-medium text-[#687779]${border}">${it.label}</a>`;
  }).join('\n');

  return `<header class="w-full bg-[#FCFDFC]/95 backdrop-blur-md border-b border-[#DCE7E6] sticky z-40 top-0">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-20">
    <a href="/" class="cursor-pointer flex items-center gap-3">
      <img src="${LOGO}" alt="PTA Solutions Clinic Logo" class="h-10 w-auto object-contain">
    </a>
    <nav class="hidden md:flex items-center space-x-6 lg:space-x-7 text-[14px] font-medium text-[#687779]">
${navHtml}
    </nav>
    <div class="flex items-center gap-4">
      <a href="tel:+919773545058" class="hidden lg:inline-flex items-center gap-2 text-[13px] font-medium text-[#687779] hover:text-[#1E3E83]">
        <span class="material-symbols-outlined text-[#1E3E83] text-[18px]">call</span>
        <span class="">+91 9773545058</span>
      </a>
      <a href="/book-appointment" class="px-5 py-2.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-semibold text-[14px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-sm">
        Book Appointment →
      </a>
      <button aria-label="Toggle Mobile Menu" class="md:hidden p-2 rounded-lg text-[#0F1E3E] hover:bg-[#F1F4F3]" id="mobile-menu-btn" onclick="toggleMobileMenu()">
        <span class="material-symbols-outlined text-[24px]" id="menu-icon">menu</span>
      </button>
    </div>
  </div>
  <div class="hidden md:hidden border-t border-[#DCE7E6] bg-white px-6 py-5 space-y-3 shadow-lg" id="mobile-menu-dropdown">
${mobileItems}
    <div class="pt-2">
      <a class="w-full flex items-center justify-center gap-2 py-3 bg-[#1E3E83] text-white rounded-lg font-display text-[14px] font-semibold" href="tel:+919773545058">
        <span class="material-symbols-outlined text-[18px]">call</span>
        <span class="">Direct Call: +91 9773545058</span>
      </a>
    </div>
  </div>
</header>
`;
}

// Breadcrumb + title band, same editorial pattern used across every inner page
function pageHero({ crumbs, badges, title, subtitle, meta, bg = '#F7FAF9' }) {
  const crumbHtml = crumbs.map((c, i) => {
    if (i === crumbs.length - 1) return c.label;
    return `<a href="${c.href}" class="cursor-pointer hover:underline">${c.label}</a> / `;
  }).join('');

  const badgeHtml = badges ? `<div class="flex items-center gap-2 mb-2">
          ${badges.map(b => `<span class="px-3 py-1 ${b.solid ? 'bg-[#4FC3D9] text-[#0F1E3E]' : 'bg-[#4FC3D9]/20 text-[#163B6B]'} font-bold rounded-full text-[11px] uppercase tracking-wider">${b.label}</span>`).join('\n          ')}
        </div>` : '';

  return `  <section class="py-12 bg-[${bg}] border-b border-[#DCE7E6]">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <p class="text-[12px] text-[#687779] mb-3">${crumbHtml}</p>
      ${badgeHtml}
      <h1 class="text-[36px] lg:text-[48px] font-display font-extrabold text-[#0F1E3E] mt-2">${title}</h1>
      ${subtitle ? `<p class="text-[16px] text-[#687779] max-w-2xl mt-2">${subtitle}</p>` : ''}
      ${meta ? `<div class="flex flex-wrap gap-4 text-[13px] text-[#687779] mt-3">${meta}</div>` : ''}
    </div>
  </section>
`;
}

function footer() {
  return `<footer class="bg-[#0F1E3E] text-white border-t border-gray-800">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    <div class="space-y-4">
      <h4 class="font-display font-bold text-[18px] text-white tracking-wider">PTA SOLUTIONS</h4>
      <p class="text-[13px] text-gray-400">Hearing and Speech Care Clinics. Leading audiology and speech pathology practice in Chembur, Mumbai.</p>
      <p class="text-[12px] text-gray-500">Lead Clinician: Dr. Johnsavio Fernandes</p>
    </div>
    <div class="space-y-3">
      <h5 class="text-[12px] font-bold uppercase tracking-widest text-[#4FC3D9]">Explore</h5>
      <ul class="space-y-2 text-[13px] text-gray-400">
        <li><a href="/about" class="hover:text-white">About Clinic</a></li>
        <li><a href="/services" class="hover:text-white">Services Directory</a></li>
        <li><a href="/nri-hearing-care" class="hover:text-white">NRI Hearing Care</a></li>
        <li><a href="/services/complete-care" class="hover:text-white">Complete Care Suite</a></li>
        <li><a href="/book-appointment" class="hover:text-white">Book Appointment Hub</a></li>
        <li><a href="/contact" class="hover:text-white">Contact Us</a></li>
      </ul>
    </div>
    <div class="space-y-3">
      <h5 class="text-[12px] font-bold uppercase tracking-widest text-[#4FC3D9]">Clinical Services</h5>
      <ul class="space-y-2 text-[13px] text-gray-400">
        <li><a href="/services/hearing-tests" class="hover:text-white">Hearing Tests</a></li>
        <li><a href="/services/hearing-aids" class="hover:text-white">Hearing Aids</a></li>
        <li><a href="/services/speech-therapy" class="hover:text-white">Speech Therapy</a></li>
        <li><a href="/services/newborn-screening" class="hover:text-white">Newborn Screening</a></li>
        <li><a href="/services/basic-consultation" class="hover:text-white">Basic Consultation</a></li>
        <li><a href="/services/premium-nri-care" class="hover:text-white">Premium NRI Care</a></li>
      </ul>
    </div>
    <div class="space-y-3">
      <h5 class="text-[12px] font-bold uppercase tracking-widest text-[#4FC3D9]">Contact</h5>
      <p class="text-[13px] text-gray-400">Shanmukhapriya HealthCare Center, 6th Floor, Shrikant Chambers -2, Opp CROMA, Chembur, Mumbai - 400074</p>
      <p class="text-[13px] text-gray-400">Tel: <a href="tel:+919773545058" class="text-white hover:text-[#4FC3D9]">+91 9773545058</a></p>
      <p class="text-[13px] text-gray-400">Email: <a href="mailto:ptasolutionshsc@gmail.com" class="text-white hover:text-[#4FC3D9]">ptasolutionshsc@gmail.com</a></p>
    </div>
  </div>
  <div class="border-t border-gray-800/80 py-6 text-center text-[12px] text-gray-500">
    © 2026 PTA Solutions. All rights reserved.
  </div>
</footer>

<div id="booking-toast" class="fixed bottom-6 right-6 bg-[#0F1E3E] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-gray-700 hidden z-50 items-center gap-3">
  <span class="material-symbols-outlined text-[#4FC3D9]">check_circle</span>
  <div>
    <p class="font-display font-bold text-[13px]" id="toast-title">Appointment Confirmed</p>
    <p class="text-[12px] text-gray-300" id="toast-desc">Our clinic desk will contact you shortly.</p>
  </div>
</div>
`;
}

function scripts() {
  return `<script>
  function toggleMobileMenu() {
    const dd = document.getElementById('mobile-menu-dropdown');
    const icon = document.getElementById('menu-icon');
    dd.classList.toggle('hidden');
    icon.innerText = dd.classList.contains('hidden') ? 'menu' : 'close';
  }

  function showToast(title, desc) {
    const toast = document.getElementById('booking-toast');
    document.getElementById('toast-title').textContent = title;
    document.getElementById('toast-desc').textContent = desc;
    toast.classList.remove('hidden');
    toast.classList.add('flex');
    setTimeout(() => { toast.classList.add('hidden'); toast.classList.remove('flex'); }, 4000);
  }

  function handleBooking(e, serviceName) {
    e.preventDefault();
    showToast('Booking Request Received: ' + serviceName, "Dr. Johnsavio Fernandes' desk has received your request.");
    e.target.reset();
  }

  function handleContact(e) {
    e.preventDefault();
    showToast('Message Sent', 'Thank you. The Chembur clinic team will call or email you shortly.');
    e.target.reset();
  }

  function handleContactPageForm(e) {
    e.preventDefault();
    const msg = document.getElementById('contact-page-success');
    if (msg) msg.classList.remove('hidden');
    showToast('Thanks for submitting!', 'Our Chembur clinic team will call or email you shortly.');
    e.target.reset();
  }

  function toggleFaq(el) {
    const isOpen = el.classList.contains('open');
    el.closest('.faq-list').querySelectorAll('.faq-item').forEach(item => item.classList.remove('open'));
    if (!isOpen) el.classList.add('open');
  }
<\/script>
</body></html>`;
}

function page({ title, description, active, hero, body, path = '/', ogImage, extraSchema = [] }) {
  return head({ title, description, path, ogImage, extraSchema }) + header(active) + '<main class="flex-grow">\n' + (hero || '') + body + '</main>\n' + footer() + scripts();
}

// A bordered visual panel standing in for a real photo (same aspect/shape a photo would use).
// Marked with an HTML comment so it's easy to find and swap for real photography later.
function imagePlaceholder({ icon, label, caption, aspect = 'aspect-[4/3]' }) {
  return `<!-- IMAGE PLACEHOLDER: replace with a real photo (${label}) -->
        <div class="relative bg-white p-3 border border-[#DCE7E6] rounded-2xl shadow-md">
          <div class="${aspect} rounded-xl bg-gradient-to-br from-[#F7FAF9] to-[#E6F6FA] border border-[#DCE7E6] flex flex-col items-center justify-center gap-3 text-center p-6">
            <div class="w-16 h-16 rounded-full bg-white border border-[#DCE7E6] flex items-center justify-center text-[#1E3E83] shadow-sm">
              <span class="material-symbols-outlined text-[32px]">${icon}</span>
            </div>
            <div>
              <p class="font-display font-bold text-[15px] text-[#0F1E3E]">${label}</p>
              ${caption ? `<p class="text-[12px] text-[#687779] mt-1">${caption}</p>` : ''}
            </div>
          </div>
        </div>`;
}

// Small thumbnail variant for use inside cards/grids (directory listings, etc.)
function imageThumb({ icon, label, dark = false }) {
  const base = dark
    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/15'
    : 'bg-gradient-to-br from-[#F7FAF9] to-[#E6F6FA] border-[#DCE7E6]';
  const iconBox = dark
    ? 'bg-white/10 border-white/20 text-[#4FC3D9]'
    : 'bg-white border-[#DCE7E6] text-[#1E3E83]';
  return `<!-- IMAGE PLACEHOLDER: replace with a real photo (${label}) -->
        <div class="aspect-[16/9] rounded-xl border ${base} flex items-center justify-center mb-4">
          <div class="w-11 h-11 rounded-full border ${iconBox} flex items-center justify-center">
            <span class="material-symbols-outlined text-[22px]">${icon}</span>
          </div>
        </div>`;
}

// Full-width banner placeholder for the top of a page, under the title band
function imageBanner({ icon, label, caption }) {
  return `<!-- IMAGE PLACEHOLDER: replace with a real photo (${label}) -->
  <section class="bg-white border-b border-[#DCE7E6]">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-10">
      <div class="aspect-[21/9] sm:aspect-[3/1] rounded-2xl border border-[#DCE7E6] bg-gradient-to-br from-[#F7FAF9] to-[#E6F6FA] flex flex-col items-center justify-center gap-3 text-center p-6">
        <div class="w-16 h-16 rounded-full bg-white border border-[#DCE7E6] flex items-center justify-center text-[#1E3E83] shadow-sm">
          <span class="material-symbols-outlined text-[32px]">${icon}</span>
        </div>
        <div>
          <p class="font-display font-bold text-[16px] text-[#0F1E3E]">${label}</p>
          ${caption ? `<p class="text-[13px] text-[#687779] mt-1">${caption}</p>` : ''}
        </div>
      </div>
    </div>
  </section>`;
}

function sectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  return `    <div class="max-w-2xl ${alignClass} space-y-3">
      <div class="inline-flex items-center gap-2 ${align === 'center' ? 'justify-center' : ''}">
        <span class="w-5 h-[2px] bg-[#4FC3D9]"></span>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[#687779]">${eyebrow}</span>
        ${align === 'center' ? `<span class="w-5 h-[2px] bg-[#4FC3D9]"></span>` : ''}
      </div>
      <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0F1E3E] leading-tight">${title}</h2>
      ${subtitle ? `<p class="text-[15px] text-[#687779] leading-relaxed">${subtitle}</p>` : ''}
    </div>`;
}

function benefitGrid(items) {
  return `    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
${items.map(it => `      <div class="p-5 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
        <span class="material-symbols-outlined text-[#1E3E83] text-[24px]">${it.icon}</span>
        <h4 class="font-display font-bold text-[16px] text-[#0F1E3E] mt-2">${it.title}</h4>
        <p class="text-[13px] text-[#687779] mt-1">${it.desc}</p>
      </div>`).join('\n')}
    </div>`;
}

function processSteps(steps) {
  return `    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
${steps.map((s, i) => `      <div class="bg-white p-6 rounded-2xl border border-[#DCE7E6] space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-[22px] font-mono font-extrabold ${i === 0 ? 'text-[#1E3E83]' : 'text-[#687779]'}">0${i + 1}</span>
          <div class="w-9 h-9 rounded-lg ${i === 0 ? 'bg-[#4FC3D9] text-[#0F1E3E]' : 'bg-[#F1F4F3] text-[#687779]'} flex items-center justify-center">
            <span class="material-symbols-outlined text-[20px]">${s.icon}</span>
          </div>
        </div>
        <div>
          <h4 class="font-display font-bold text-[15px] text-[#0F1E3E]">${s.title}</h4>
          <p class="text-[12.5px] text-[#687779] mt-1.5 leading-relaxed">${s.desc}</p>
        </div>
      </div>`).join('\n')}
    </div>`;
}

function faqAccordion(faqs) {
  return `    <div class="faq-list space-y-3 max-w-3xl mx-auto">
${faqs.map((f, i) => `      <div class="faq-item border border-[#DCE7E6] rounded-xl bg-white overflow-hidden${i === 0 ? ' open' : ''}">
        <button class="w-full flex items-center justify-between gap-4 p-5 text-left" onclick="toggleFaq(this.closest('.faq-item'))" type="button">
          <span class="font-display font-semibold text-[15px] text-[#0F1E3E]">${f.q}</span>
          <span class="material-symbols-outlined faq-chevron text-[#1E3E83] text-[22px] shrink-0">expand_more</span>
        </button>
        <div class="faq-answer px-5">
          <p class="text-[14px] text-[#687779] leading-relaxed pb-5">${f.a}</p>
        </div>
      </div>`).join('\n')}
    </div>`;
}

function relatedServices(items) {
  return `    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
${items.map(it => `      <a href="${it.href}" class="block p-5 bg-white rounded-xl border border-[#DCE7E6] hover:border-[#4FC3D9] transition-all group">
        <div class="w-10 h-10 rounded-lg bg-[#4FC3D9]/20 text-[#1E3E83] flex items-center justify-center mb-3">
          <span class="material-symbols-outlined text-[20px]">${it.icon}</span>
        </div>
        <h4 class="font-display font-bold text-[15px] text-[#0F1E3E] group-hover:text-[#1E3E83]">${it.title}</h4>
        <p class="text-[12.5px] text-[#687779] mt-1">${it.desc}</p>
      </a>`).join('\n')}
    </div>`;
}

module.exports = {
  LOGO, SITE_URL, SITE_NAME, head, header, footer, scripts, page, pageHero, NAV_ITEMS,
  breadcrumbSchema, serviceSchema, faqSchema, jsonLd,
  imagePlaceholder, imageThumb, imageBanner, sectionHeading, benefitGrid, processSteps, faqAccordion, relatedServices,
};
