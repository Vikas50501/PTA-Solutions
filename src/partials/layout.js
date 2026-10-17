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
      "streetAddress": "Shanmukhapriya Healthcare Centre, 6th Floor, Shrikant Chambers -2, Above Surya Hospital, Next to R.K.Studio, Opp CROMA",
      "addressLocality": "Chembur, Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400074",
      "addressCountry": "IN"
    },
    "hasMap": "https://maps.app.goo.gl/6NxZW5o8YwbTGYAdA",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "11:00",
        "closes": "19:00"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "Johnsavio Fernandes",
      "honorificSuffix": "BASLP, DHLS, BNYS",
      "jobTitle": "Audiologist & Speech-Language Pathologist"
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
  const image = ogImage || `${SITE_URL}/assets/og-image.png`;
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
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="twitter:image" content="${image}">
  <link rel="icon" href="/assets/favicon.ico" sizes="any">
  <link rel="icon" href="/assets/icons/icon-32.png" type="image/png" sizes="32x32">
  <link rel="icon" href="/assets/icons/icon-192.png" type="image/png" sizes="192x192">
  <link rel="apple-touch-icon" href="/assets/icons/apple-touch-icon.png">
  <link rel="manifest" href="/site.webmanifest">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0..1,0" rel="stylesheet">
  ${schemas}
  <link rel="stylesheet" href="/assets/site.css">
</head>
<body class="bg-[#F8FAFC] text-[#1F2937] font-body antialiased selection:bg-[#087F8C] selection:text-[#0D234A] flex flex-col min-h-screen">
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-[#0D234A] focus:p-3 focus:rounded-lg focus:shadow-lg">Skip to content</a>
`;
}

const NAV_ITEMS = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'services', label: 'Services', href: '/services' },
  { key: 'nri', label: 'NRI Hearing Care', href: '/nri-hearing-care' },
  { key: 'complete-care', label: 'Complete Care', href: '/services/complete-care' },
  { key: 'contact', label: 'Contact', href: '/contact' },
];

const MOBILE_NAV_ITEMS = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About PTA Solutions', href: '/about' },
  { key: 'services', label: 'All Services Directory', href: '/services' },
  { key: 'nri', label: 'NRI Hearing Care Mumbai', href: '/nri-hearing-care' },
  { key: 'complete-care', label: 'Complete Care Program', href: '/services/complete-care' },
  { key: 'book-appointment', label: 'Book Appointment Hub', href: '/book-appointment' },
  { key: 'contact', label: 'Contact Chembur Clinic', href: '/contact' },
];

// Mirrors the Home page header (index.html) exactly, so the header is identical site-wide.
function header(active) {
  const navHtml = NAV_ITEMS.map(it => {
    const activeClass = it.key === active
      ? 'text-[#0D234A] font-semibold'
      : 'hover:text-[#1797A6]';
    return `      <a class="nav-item cursor-pointer py-1 transition-colors ${activeClass}" href="${it.href}">${it.label}</a>`;
  }).join('\n');

  const mobileItems = MOBILE_NAV_ITEMS.map((it, i) => {
    const border = i < MOBILE_NAV_ITEMS.length - 1 ? ' border-b border-[#EEF6F8]' : '';
    const colorClass = it.key === active ? 'text-[#0D234A]' : 'text-[#64748B]';
    return `    <a class="block py-2 text-[15px] font-medium ${colorClass}${border}" href="${it.href}">${it.label}</a>`;
  }).join('\n');

  return `<header class="sticky top-0 z-50 w-full bg-[#F8FAFC]/95 backdrop-blur-md border-b border-[#D7E3E8] transition-all duration-300" id="main-header">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between h-20">
    <a aria-label="PTA SOLUTIONS Home" class="flex items-center gap-3 group cursor-pointer" href="/">
      <img alt="PTA Solutions Clinic Logo" class="h-9 sm:h-10 w-auto object-contain transition-transform group-hover:scale-105" src="${LOGO}">
    </a>
    <nav aria-label="Main Navigation" class="hidden md:flex items-center space-x-6 lg:space-x-8 text-[14px] font-medium text-[#64748B]">
${navHtml}
    </nav>
    <div class="flex items-center gap-4">
      <a class="hidden lg:inline-flex items-center gap-2 text-[13px] font-medium text-[#64748B] hover:text-[#1797A6] transition-colors group" href="/contact">
        <span class="material-symbols-outlined text-[#1797A6] text-[18px] transition-transform group-hover:scale-110">mail</span>
        <span class="">Contact Us</span>
      </a>
      <a class="group hidden sm:inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 bg-[#087F8C] text-[#0D234A] font-display font-semibold text-[13px] sm:text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white active:scale-95 transition-all duration-200 shadow-sm hover:shadow-md whitespace-nowrap" href="/book-appointment">
        <span class="">Book Appointment</span>
        <span class="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover:translate-x-1">arrow_forward</span>
      </a>
      <button aria-label="Toggle Mobile Menu" class="md:hidden p-2 rounded-lg text-[#0D234A] hover:bg-[#EEF6F8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1797A6] focus-visible:ring-offset-2" id="mobile-menu-btn" onclick="toggleMobileMenu()">
        <span class="material-symbols-outlined text-[24px]" id="menu-icon">menu</span>
      </button>
    </div>
  </div>
  <div class="hidden md:hidden border-t border-[#D7E3E8] bg-white px-6 py-5 space-y-3 shadow-lg" id="mobile-menu-dropdown">
${mobileItems}
    <div class="pt-2">
      <a class="w-full flex items-center justify-center gap-2 py-3 bg-[#1797A6] text-white rounded-lg font-display text-[14px] font-semibold" href="tel:+919773545058">
        <span class="material-symbols-outlined text-[18px]">call</span>
        <span class="">Direct Call: +91 9773545058</span>
      </a>
    </div>
  </div>
</header>
`;
}

// Breadcrumb + title band, same editorial pattern used across every inner page
function pageHero({ crumbs, badges, title, subtitle, meta, bg = '#F8FAFC' }) {
  const crumbHtml = crumbs.map((c, i) => {
    if (i === crumbs.length - 1) return c.label;
    return `<a href="${c.href}" class="cursor-pointer hover:underline">${c.label}</a> / `;
  }).join('');

  const badgeHtml = badges ? `<div class="flex items-center gap-2 mb-2">
          ${badges.map(b => `<span class="px-3 py-1 ${b.solid ? 'bg-[#087F8C] text-[#0D234A]' : 'bg-[#087F8C]/20 text-[#0D234A]'} font-bold rounded-full text-[11px] uppercase tracking-wider">${b.label}</span>`).join('\n          ')}
        </div>` : '';

  return `  <section class="py-12 bg-[${bg}] border-b border-[#D7E3E8]">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <p class="text-[12px] text-[#64748B] mb-3">${crumbHtml}</p>
      ${badgeHtml}
      <h1 class="text-[36px] lg:text-[48px] font-display font-extrabold text-[#0D234A] mt-2">${title}</h1>
      ${subtitle ? `<p class="text-[16px] text-[#64748B] max-w-2xl mt-2">${subtitle}</p>` : ''}
      ${meta ? `<div class="flex flex-wrap gap-4 text-[13px] text-[#64748B] mt-3">${meta}</div>` : ''}
    </div>
  </section>
`;
}

function footer() {
  return `<footer class="bg-[#0D234A] text-white border-t border-gray-800">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
    <div class="space-y-4">
      <h4 class="font-display font-bold text-[18px] text-white tracking-wider">PTA SOLUTIONS</h4>
      <p class="text-[13px] text-gray-400">Hearing and Speech Care Clinics, Chembur, Mumbai.</p>
      <p class="text-[12px] text-gray-500">Johnsavio Fernandes, BASLP, DHLS, BNYS — Audiologist &amp; Speech-Language Pathologist</p>
    </div>
    <div class="space-y-3">
      <h5 class="text-[12px] font-bold uppercase tracking-widest text-[#087F8C]">Explore</h5>
      <ul class="space-y-2 text-[13px] text-gray-400">
        <li><a href="/about" class="hover:text-white">About Clinic</a></li>
        <li><a href="/services#hearing-care" class="hover:text-white">Hearing Care</a></li>
        <li><a href="/services/speech-therapy" class="hover:text-white">Speech Therapy</a></li>
        <li><a href="/nri-hearing-care" class="hover:text-white">NRI Hearing Care</a></li>
        <li><a href="/book-appointment" class="hover:text-white">Book Appointment Hub</a></li>
        <li><a href="/contact" class="hover:text-white">Contact Us</a></li>
      </ul>
    </div>
    <div class="space-y-3">
      <h5 class="text-[12px] font-bold uppercase tracking-widest text-[#087F8C]">Clinical Services</h5>
      <ul class="space-y-2 text-[13px] text-gray-400">
        <li><a href="/services/hearing-tests" class="hover:text-white">Hearing Tests</a></li>
        <li><a href="/services/hearing-aids" class="hover:text-white">Hearing Aids</a></li>
        <li><a href="/services/speech-therapy" class="hover:text-white">Speech Therapy</a></li>
        <li><a href="/services/newborn-screening" class="hover:text-white">Newborn Screening</a></li>
        <li><a href="/services/basic-consultation" class="hover:text-white">Basic Consultation</a></li>
        <li><a href="/nri-hearing-care" class="hover:text-white">NRI Parent Care</a></li>
      </ul>
    </div>
    <div class="space-y-3">
      <h5 class="text-[12px] font-bold uppercase tracking-widest text-[#087F8C]">Contact</h5>
      <p class="text-[13px] text-gray-400">Shanmukhapriya Healthcare Centre, 6th Floor, Shrikant Chambers -2, Opp CROMA, Chembur, Mumbai - 400074</p>
      <p class="text-[13px] text-gray-400"><a href="https://maps.app.goo.gl/6NxZW5o8YwbTGYAdA" target="_blank" rel="noopener noreferrer" class="text-[#087F8C] hover:text-white">Get Directions</a></p>
      <p class="text-[13px] text-gray-400">Tel: <a href="tel:+919773545058" class="text-white hover:text-[#087F8C]">+91 9773545058</a></p>
      <p class="text-[13px] text-gray-400">WhatsApp: <a href="https://wa.me/919773545058" target="_blank" rel="noopener noreferrer" class="text-white hover:text-[#087F8C]">Chat with us</a></p>
      <p class="text-[13px] text-gray-400">Email: <a href="mailto:ptasolutionshsc@gmail.com" class="text-white hover:text-[#087F8C]">ptasolutionshsc@gmail.com</a></p>
      <p class="text-[13px] text-gray-400">Hours: Mon–Sat 11am–7pm, Sun Closed</p>
      <p class="text-[13px] text-gray-400"><a href="https://share.google/IQ3eMohHWIxNQhR0P" target="_blank" rel="noopener noreferrer" class="text-[#087F8C] hover:text-white">Reviews on Google</a></p>
    </div>
  </div>
  <div class="border-t border-gray-800/80 py-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center text-[12px] text-gray-500">
    <span>© 2026 PTA Solutions. All rights reserved.</span>
    <span class="hidden sm:inline">•</span>
    <a href="/privacy-policy" class="hover:text-white">Privacy Policy</a>
  </div>
</footer>

<div id="booking-toast" class="fixed bottom-6 left-6 bg-[#0D234A] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-gray-700 hidden z-50 items-center gap-3">
  <span class="material-symbols-outlined text-[#087F8C]">check_circle</span>
  <div>
    <p class="font-display font-bold text-[13px]" id="toast-title">Appointment Confirmed</p>
    <p class="text-[12px] text-gray-300" id="toast-desc">Our clinic desk will contact you shortly.</p>
  </div>
</div>

<!-- MOBILE FIXED BOTTOM BAR: Call | WhatsApp | Book -->
<div class="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-[#D7E3E8] shadow-[0_-2px_10px_rgba(13,35,74,0.08)] grid grid-cols-3">
  <a class="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[#0D234A] active:bg-[#EEF6F8] transition-colors" href="tel:+919773545058">
    <span class="material-symbols-outlined text-[20px]">call</span>
    <span class="text-[11px] font-semibold">Call</span>
  </a>
  <a class="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[#0D234A] border-x border-[#D7E3E8] active:bg-[#EEF6F8] transition-colors" href="https://wa.me/919773545058" rel="noopener noreferrer" target="_blank">
    <span class="material-symbols-outlined text-[20px]">chat</span>
    <span class="text-[11px] font-semibold">WhatsApp</span>
  </a>
  <a class="flex flex-col items-center justify-center gap-0.5 py-2.5 bg-[#087F8C] text-white active:bg-[#0D234A] transition-colors" href="/book-appointment">
    <span class="material-symbols-outlined text-[20px]">calendar_month</span>
    <span class="text-[11px] font-semibold">Book</span>
  </a>
</div>

<div class="hidden md:block fixed bottom-6 right-6 z-40">
  <a aria-label="Chat directly on WhatsApp" class="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-md hover:shadow-lg active:scale-95 transition-all font-display font-semibold text-[13px]" href="https://wa.me/919773545058" rel="noopener noreferrer" target="_blank">
    <span class="material-symbols-outlined text-[20px]" style="font-variation-settings: 'FILL' 1;">chat</span>
    <span class="">WhatsApp Us</span>
  </a>
</div>
`;
}

function scripts() {
  return `<script>
  document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 25) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  });

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

  // Replace with your real Formspree (or other) endpoint ID before go-live.
  // Sign up free at https://formspree.io, create a form, paste its ID below.
  const FORM_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

  async function submitFormData(formEl) {
    if (FORM_ENDPOINT.includes('YOUR_FORM_ID')) {
      console.warn('PTA Solutions: FORM_ENDPOINT is still a placeholder in scripts() (layout.js). Forms will not be delivered until this is set.');
      return { ok: false, placeholder: true };
    }
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(formEl),
      });
      return { ok: res.ok, placeholder: false };
    } catch (err) {
      return { ok: false, placeholder: false };
    }
  }

  async function handleBooking(e, serviceName) {
    e.preventDefault();
    const result = await submitFormData(e.target);
    if (result.ok) {
      showToast('Booking Request Received: ' + serviceName, "Johnsavio Fernandes' desk has received your request.");
      e.target.reset();
    } else {
      showToast('Could not send your request', 'Please call or WhatsApp us directly at +91 9773545058.');
    }
  }

  async function handleContact(e) {
    e.preventDefault();
    const result = await submitFormData(e.target);
    if (result.ok) {
      showToast('Message Sent', 'Thank you. The Chembur clinic team will call or email you shortly.');
      e.target.reset();
    } else {
      showToast('Could not send your message', 'Please call or WhatsApp us directly at +91 9773545058.');
    }
  }

  async function handleContactPageForm(e) {
    e.preventDefault();
    const result = await submitFormData(e.target);
    const msg = document.getElementById('contact-page-success');
    if (result.ok) {
      if (msg) msg.classList.remove('hidden');
      showToast('Thanks for submitting!', 'Our Chembur clinic team will call or email you shortly.');
      e.target.reset();
    } else {
      showToast('Could not send your message', 'Please call or WhatsApp us directly at +91 9773545058.');
    }
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
  return head({ title, description, path, ogImage, extraSchema }) + header(active) + '<main class="flex-grow" id="main-content">\n' + (hero || '') + body + '</main>\n' + footer() + scripts();
}

// A bordered visual panel standing in for a real photo (same aspect/shape a photo would use).
// Marked with an HTML comment so it's easy to find and swap for real photography later.
function imagePlaceholder({ icon, label, caption, aspect = 'aspect-[4/3]' }) {
  return `<!-- IMAGE PLACEHOLDER: replace with a real photo (${label}) -->
        <div class="relative bg-white p-3 border border-[#D7E3E8] rounded-2xl shadow-md">
          <div class="${aspect} rounded-xl bg-gradient-to-br from-[#F8FAFC] to-[#EEF6F8] border border-[#D7E3E8] flex flex-col items-center justify-center gap-3 text-center p-6">
            <div class="w-16 h-16 rounded-full bg-white border border-[#D7E3E8] flex items-center justify-center text-[#1797A6] shadow-sm">
              <span class="material-symbols-outlined text-[32px]">${icon}</span>
            </div>
            <div>
              <p class="font-display font-bold text-[15px] text-[#0D234A]">${label}</p>
              ${caption ? `<p class="text-[12px] text-[#64748B] mt-1">${caption}</p>` : ''}
            </div>
          </div>
        </div>`;
}

// Small thumbnail variant for use inside cards/grids (directory listings, etc.)
function imageThumb({ icon, label, dark = false }) {
  const base = dark
    ? 'bg-gradient-to-br from-white/10 to-white/5 border-white/15'
    : 'bg-gradient-to-br from-[#F8FAFC] to-[#EEF6F8] border-[#D7E3E8]';
  const iconBox = dark
    ? 'bg-white/10 border-white/20 text-[#087F8C]'
    : 'bg-white border-[#D7E3E8] text-[#1797A6]';
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
  <section class="bg-white border-b border-[#D7E3E8]">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-10">
      <div class="aspect-[21/9] sm:aspect-[3/1] rounded-2xl border border-[#D7E3E8] bg-gradient-to-br from-[#F8FAFC] to-[#EEF6F8] flex flex-col items-center justify-center gap-3 text-center p-6">
        <div class="w-16 h-16 rounded-full bg-white border border-[#D7E3E8] flex items-center justify-center text-[#1797A6] shadow-sm">
          <span class="material-symbols-outlined text-[32px]">${icon}</span>
        </div>
        <div>
          <p class="font-display font-bold text-[16px] text-[#0D234A]">${label}</p>
          ${caption ? `<p class="text-[13px] text-[#64748B] mt-1">${caption}</p>` : ''}
        </div>
      </div>
    </div>
  </section>`;
}

function sectionHeading({ eyebrow, title, subtitle, align = 'left' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : '';
  return `    <div class="max-w-2xl ${alignClass} space-y-3">
      <div class="inline-flex items-center gap-2 ${align === 'center' ? 'justify-center' : ''}">
        <span class="w-5 h-[2px] bg-[#087F8C]"></span>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">${eyebrow}</span>
        ${align === 'center' ? `<span class="w-5 h-[2px] bg-[#087F8C]"></span>` : ''}
      </div>
      <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0D234A] leading-tight">${title}</h2>
      ${subtitle ? `<p class="text-[15px] text-[#64748B] leading-relaxed">${subtitle}</p>` : ''}
    </div>`;
}

function benefitGrid(items) {
  return `    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
${items.map(it => `      <div class="p-5 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8]">
        <span class="material-symbols-outlined text-[#1797A6] text-[24px]">${it.icon}</span>
        <h4 class="font-display font-bold text-[16px] text-[#0D234A] mt-2">${it.title}</h4>
        <p class="text-[13px] text-[#64748B] mt-1">${it.desc}</p>
      </div>`).join('\n')}
    </div>`;
}

function processSteps(steps) {
  return `    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
${steps.map((s, i) => `      <div class="bg-white p-6 rounded-2xl border border-[#D7E3E8] space-y-3">
        <div class="flex items-center justify-between">
          <span class="text-[22px] font-mono font-extrabold ${i === 0 ? 'text-[#1797A6]' : 'text-[#64748B]'}">0${i + 1}</span>
          <div class="w-9 h-9 rounded-lg ${i === 0 ? 'bg-[#087F8C] text-[#0D234A]' : 'bg-[#EEF6F8] text-[#64748B]'} flex items-center justify-center">
            <span class="material-symbols-outlined text-[20px]">${s.icon}</span>
          </div>
        </div>
        <div>
          <h4 class="font-display font-bold text-[15px] text-[#0D234A]">${s.title}</h4>
          <p class="text-[12.5px] text-[#64748B] mt-1.5 leading-relaxed">${s.desc}</p>
        </div>
      </div>`).join('\n')}
    </div>`;
}

function faqAccordion(faqs) {
  return `    <div class="faq-list space-y-3 max-w-3xl mx-auto">
${faqs.map((f, i) => `      <div class="faq-item border border-[#D7E3E8] rounded-xl bg-white overflow-hidden${i === 0 ? ' open' : ''}">
        <button class="w-full flex items-center justify-between gap-4 p-5 text-left" onclick="toggleFaq(this.closest('.faq-item'))" type="button">
          <span class="font-display font-semibold text-[15px] text-[#0D234A]">${f.q}</span>
          <span class="material-symbols-outlined faq-chevron text-[#1797A6] text-[22px] shrink-0">expand_more</span>
        </button>
        <div class="faq-answer px-5">
          <p class="text-[14px] text-[#64748B] leading-relaxed pb-5">${f.a}</p>
        </div>
      </div>`).join('\n')}
    </div>`;
}

function relatedServices(items) {
  return `    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
${items.map(it => `      <a href="${it.href}" class="block p-5 bg-white rounded-xl border border-[#D7E3E8] hover:border-[#087F8C] transition-all group">
        <div class="w-10 h-10 rounded-lg bg-[#087F8C]/20 text-[#1797A6] flex items-center justify-center mb-3">
          <span class="material-symbols-outlined text-[20px]">${it.icon}</span>
        </div>
        <h4 class="font-display font-bold text-[15px] text-[#0D234A] group-hover:text-[#1797A6]">${it.title}</h4>
        <p class="text-[12.5px] text-[#64748B] mt-1">${it.desc}</p>
      </a>`).join('\n')}
    </div>`;
}

// STEP 10 of the client brief: simplified "Request an Appointment" form —
// Name, Phone/WhatsApp, Service (dropdown), Preferred date/time (optional), Short message (optional).
// No fake time slots, no email requirement, and an explicit "not confirmed until we contact you" notice.
const SERVICE_OPTIONS = [
  'Hearing Tests', 'Hearing Aids', 'Speech Therapy', 'Newborn Screening',
  'Basic Consultation', 'Complete Care',
];

function requestAppointmentForm(serviceName, formId) {
  const options = SERVICE_OPTIONS.map(s => `<option${s === serviceName ? ' selected' : ''}>${s}</option>`).join('');
  return `<div class="bg-white p-8 rounded-2xl border border-[#D7E3E8] shadow-sm space-y-6">
  <div>
    <h2 class="text-[22px] font-display font-bold text-[#0D234A]">Request an Appointment</h2>
    <p class="text-[14px] text-[#64748B] mt-1">Please submit your preferred date and time. Our team will contact you to confirm availability. Your appointment is not confirmed until we contact you.</p>
  </div>
  <form onsubmit="handleBooking(event, '${serviceName}')" class="space-y-4 pt-2" id="${formId}">
    <input type="hidden" name="_subject" value="New appointment request: ${serviceName}">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Name *</label>
        <input type="text" name="name" required placeholder="Your full name" class="w-full h-11 px-3 bg-[#F8FAFC] border border-[#D7E3E8] rounded-lg text-[14px]">
      </div>
      <div>
        <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Phone / WhatsApp Number *</label>
        <input type="tel" name="phone" required placeholder="+91 97735 45058" class="w-full h-11 px-3 bg-[#F8FAFC] border border-[#D7E3E8] rounded-lg text-[14px]">
      </div>
      <div>
        <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Service Needed *</label>
        <select name="service" required class="w-full h-11 px-3 bg-[#F8FAFC] border border-[#D7E3E8] rounded-lg text-[14px]">${options}</select>
      </div>
      <div>
        <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Preferred Date or Time</label>
        <input type="text" name="preferred_time" placeholder="e.g. Weekday mornings" class="w-full h-11 px-3 bg-[#F8FAFC] border border-[#D7E3E8] rounded-lg text-[14px]">
      </div>
    </div>
    <div>
      <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Short Message</label>
      <textarea name="message" rows="3" placeholder="Anything else we should know?" class="w-full p-3 bg-[#F8FAFC] border border-[#D7E3E8] rounded-lg text-[14px]"></textarea>
    </div>
    <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D7E3E8]">
      <div class="text-[13px] text-[#64748B]">Need help? Call the clinic: <a href="tel:+919773545058" class="text-[#1797A6] font-bold">+91 9773545058</a></div>
      <button type="submit" class="w-full sm:w-auto px-8 py-3 bg-[#087F8C] text-white font-display font-bold text-[14px] rounded-lg hover:bg-[#0D234A] transition-all shadow-sm">
        Request an Appointment
      </button>
    </div>
    <p class="text-[12px] text-[#64748B]">By submitting, you agree to our <a href="/privacy-policy" class="text-[#1797A6] hover:underline">Privacy Policy</a> on how we use your information.</p>
  </form>
</div>`;
}

module.exports = {
  LOGO, SITE_URL, SITE_NAME, head, header, footer, scripts, page, pageHero, NAV_ITEMS,
  breadcrumbSchema, serviceSchema, faqSchema, jsonLd,
  imagePlaceholder, imageThumb, imageBanner, sectionHeading, benefitGrid, processSteps, faqAccordion, relatedServices,
  requestAppointmentForm,
};
