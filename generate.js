const { fs, path, page, ctaPrimary, ctaSecondary, bookingFormPanel, ABOUT_IMG, NRI_IMG } = require('./build-pages.js');

function write(relPath, html) {
  const full = path.join(__dirname, relPath, 'index.html');
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, html, 'utf-8');
  console.log('wrote', relPath + '/index.html');
}

/* ---------------- 1. ABOUT ---------------- */
write('about', page({
  title: 'About PTA Solutions | Hearing & Speech Care Clinics, Mumbai',
  description: 'Your trusted partner in hearing and speech wellness, led by Dr. Johnsavio Fernandes at PTA Solutions, Chembur, Mumbai.',
  active: 'about',
  crumbs: [{ label: 'Home', href: '/' }, { label: 'About PTA Solutions' }],
  h1: 'About PTA Solutions',
  subtitle: 'Your Trusted Partner in Hearing and Speech Wellness',
  body: `
<section class="py-20 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div class="lg:col-span-6 space-y-6">
      <p class="text-[17px] text-[#3C4949] leading-relaxed">
        With over 10 years of clinical experience and a reputation built on results and empathy, PTA SOLUTIONS is redefining hearing and speech care in Mumbai.
      </p>
      <p class="text-[17px] text-[#3C4949] leading-relaxed">
        Led by Dr. Johnsavio Fernandes, a qualified Audiologist and Speech-Language professional, our team focuses on accurate diagnosis, ethical recommendations, and personalized rehabilitation for every client — from newborns to seniors.
      </p>
      <div class="p-6 rounded-xl bg-[#F7FAF9] border-l-4 border-[#006A6A] space-y-2">
        <p class="text-[11px] font-bold uppercase tracking-widest text-[#006A6A]">Our Mission</p>
        <p class="text-[16px] font-display font-semibold text-[#122326] leading-snug">Our mission is simple — to help you reconnect with the world through better hearing and clearer communication improving your quality of life.</p>
      </div>
      <div class="pt-2 flex flex-wrap gap-4">
        ${ctaPrimary('Book Appointment', '/book-appointment', 'calendar_month')}
        ${ctaSecondary('Explore All Services', '/services')}
      </div>
    </div>
    <div class="lg:col-span-6">
      <div class="bg-[#F7FAF9] p-4 rounded-2xl border border-[#DCE7E6] shadow-md">
        <img alt="PTA Solutions Chembur clinic" class="rounded-xl w-full h-auto aspect-[4/3] object-cover" src="${ABOUT_IMG}">
      </div>
    </div>
  </div>
</section>
`
}));

/* ---------------- 2. SERVICES OVERVIEW ---------------- */
function serviceCard(icon, title, href) {
  return `<div class="bg-[#F7FAF9] p-7 rounded-2xl border border-[#DCE7E6] space-y-5 hover:border-[#1BBCBC] hover:shadow-lg transition-all flex flex-col justify-between">
          <div class="space-y-3">
            <div class="w-12 h-12 rounded-lg bg-[#1BBCBC]/20 text-[#006A6A] flex items-center justify-center">
              <span class="material-symbols-outlined text-[26px]">${icon}</span>
            </div>
            <h3 class="text-[20px] font-display font-bold text-[#122326]">${title}</h3>
          </div>
          <div class="pt-4 border-t border-[#DCE7E6]">
            <a class="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1BBCBC] text-[#002020] text-[13px] font-bold rounded-lg hover:bg-[#006A6A] hover:text-white transition-all" href="${href}">
              View Details
              <span class="material-symbols-outlined text-[16px]">arrow_forward</span>
            </a>
          </div>
        </div>`;
}

write('services', page({
  title: 'Services | PTA Solutions Hearing & Speech Care Clinics',
  description: 'Explore PTA Solutions services: Newborn Screening, Hearing Tests, Hearing Aids, Speech Therapy, and NRI Hearing Care in Chembur, Mumbai.',
  active: 'services',
  crumbs: [{ label: 'Home', href: '/' }, { label: 'Services' }],
  h1: 'Services',
  subtitle: 'At PTA SOLUTIONS Hearing and Speech Care Clinics, we bring advanced hearing and speech therapy services to Mumbai — combining world-class diagnostics with genuine personal care.',
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      ${serviceCard('child_care', 'Newborn Screening', '/services/newborn-screening')}
      ${serviceCard('hearing', 'Hearing Tests', '/services/hearing-tests')}
      ${serviceCard('hearing_disabled', 'Hearing Aids', '/services/hearing-aids')}
      ${serviceCard('record_voice_over', 'Speech Therapy', '/services/speech-therapy')}
      ${serviceCard('public', 'NRI Hearing Care', '/nri-hearing-care')}
    </div>
  </div>
</section>
`
}));

/* ---------------- 3. NRI HEARING CARE ---------------- */
function nriPlanRow(badgeFirst, tier, name, price, priceNote, duration, ctaLabel, ctaHref, highlighted) {
  return `      <div class="plan-row bg-white ${highlighted ? 'border-2 border-[#1BBCBC]' : 'border border-[#DCE7E6]'} rounded-2xl p-6 lg:p-8 relative">
        ${highlighted ? `<div class="absolute -top-3 left-8 bg-[#1BBCBC] text-[#002020] px-3 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase">Most Comprehensive</div>` : ''}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div class="lg:col-span-5 space-y-1">
            <span class="text-[11px] font-bold uppercase tracking-wider text-[#006A6A]">${tier}</span>
            <h3 class="text-[22px] font-display font-bold text-[#122326]">${name}</h3>
          </div>
          <div class="lg:col-span-4 py-2 lg:border-l lg:border-r border-[#DCE7E6] lg:px-6">
            <div class="flex items-baseline gap-1.5">
              <span class="text-[26px] font-display font-bold ${highlighted ? 'text-[#006A6A]' : 'text-[#122326]'}">${price}</span>
              <span class="text-[13px] text-[#526163]">${priceNote}</span>
            </div>
            <div class="flex items-center gap-2 text-[12px] text-[#6C7A79] mt-1">
              <span class="material-symbols-outlined text-[15px]">schedule</span>
              <span class="">${duration}</span>
            </div>
          </div>
          <div class="lg:col-span-3 text-right">
            <a class="w-full py-3 inline-flex items-center justify-center ${highlighted ? 'bg-[#1BBCBC] text-[#002020] hover:bg-[#006A6A] hover:text-white' : 'border border-[#6C7A79]/40 bg-white text-[#122326] hover:border-[#006A6A] hover:text-[#006A6A]'} font-display font-bold text-[14px] rounded-lg transition-all shadow-sm" href="${ctaHref}">
              ${ctaLabel}
            </a>
          </div>
        </div>
      </div>`;
}

write('nri-hearing-care', page({
  title: "NRI Hearing Care | PTA Solutions Mumbai",
  description: "Living abroad? PTA Solutions brings complete home-based hearing care to your parents in Mumbai, with regular updates so you never have to worry from miles away.",
  active: 'nri',
  crumbs: [{ label: 'Home', href: '/' }, { label: 'NRI Hearing Care' }],
  h1: "Living Abroad? We Take Care of Your Parents' Hearing in Mumbai",
  subtitle: "Complete home-based hearing care with regular updates—so you don't have to worry from miles away.",
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div class="lg:col-span-6 space-y-6">
      <div class="flex items-center gap-2.5">
        <span class="px-3 py-1 bg-[#1BBCBC]/20 text-[#004646] font-bold rounded-full text-[11px]">We Only Have One Home</span>
        <span class="px-3 py-1 bg-[#E0E3E2] text-[#3C4949] font-bold rounded-full text-[11px]">Act Now</span>
      </div>
      <div class="flex flex-wrap gap-4">
        <a class="h-12 px-7 inline-flex items-center justify-center bg-[#1BBCBC] text-[#002020] font-display font-semibold text-[15px] rounded-lg hover:bg-[#006A6A] hover:text-white transition-all duration-200 shadow-sm hover:shadow-md" href="#nri-plans">
          Book Consultation
        </a>
        <a class="h-12 px-7 inline-flex items-center justify-center gap-2 border border-[#25D366]/40 bg-white text-[#122326] font-display font-semibold text-[15px] rounded-lg hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-200" href="https://wa.me/919773545058" rel="noopener noreferrer" target="_blank">
          <span class="material-symbols-outlined text-[#25D366] text-[20px]">chat</span>
          <span class="">Chat on WhatsApp</span>
        </a>
      </div>
    </div>
    <div class="lg:col-span-6">
      <div class="bg-[#F7FAF9] p-4 rounded-2xl border border-[#DCE7E6] shadow-md">
        <img alt="NRI parent and daughter in Mumbai" class="rounded-xl w-full h-auto aspect-[4/3] object-cover" src="${NRI_IMG}">
      </div>
    </div>
  </div>
</section>

<section class="py-20 bg-[#F7FAF9] border-b border-[#DCE7E6]" id="nri-plans">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-8">
    <h2 class="text-[28px] lg:text-[34px] font-display font-bold text-[#122326]">NRI Care Plans</h2>
    <div class="space-y-4">
${nriPlanRow(null, 'Home & Clinical Suite', 'Complete Care', '₹75,000', 'to ₹1,50,000', 'Duration: 1 hr', 'Talk to Specialist Now', '/services/complete-care', true)}
${nriPlanRow(null, 'In-Clinic Baseline', 'Basic Consultation', '₹10,000', 'to ₹20,000', 'Duration: 1 hr', 'Book Now', '/booking/basic-consultation', false)}
${nriPlanRow(null, 'Global Family Concierge', 'Premium NRI Care', '₹2L', 'to ₹3.5L', 'Duration: 1 hr', 'Book Now', '/booking/premium-nri-care', false)}
    </div>
  </div>
</section>
`
}));

/* ---------------- 4. COMPLETE CARE DETAIL ---------------- */
write('services/complete-care', page({
  title: 'Complete Care | PTA Solutions Service Detail',
  description: 'Complete Care: a holistic audiology and speech therapy service delivered at your home by PTA Solutions. Duration 1 hr, ₹75,000 to ₹1,50,000.',
  active: 'complete-care',
  crumbs: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Complete Care' }],
  h1: 'Complete Care',
  subtitle: null,
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-8 space-y-6">
      <p class="text-[16px] text-[#3C4949] leading-relaxed">
        Our Complete Care service offers a holistic approach to audiology, ensuring you receive top-notch hearing and speech therapies. With cutting-edge diagnostics and personalized care plans, our expert team is dedicated to enhancing your auditory experience right at your home. Experience a new level of hearing health with our unparalleled commitment to your well-being!
      </p>
      <div class="pt-4">
        ${ctaPrimary('Talk to Specialist Now', '/contact', 'arrow_forward')}
      </div>
    </div>
    <div class="lg:col-span-4">
      <div class="bg-[#F7FAF9] p-6 lg:p-8 rounded-2xl border-2 border-[#1BBCBC] shadow-md space-y-5 sticky top-28">
        <div class="flex items-center gap-2 text-[13px] text-[#3C4949]">
          <span class="material-symbols-outlined text-[#006A6A] text-[18px]">schedule</span>
          <span class="">Duration: 1 hr</span>
        </div>
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-[#006A6A]">Price</span>
          <div class="flex items-baseline gap-2 mt-1">
            <span class="text-[28px] font-display font-bold text-[#122326]">₹75,000</span>
            <span class="text-[14px] text-[#526163]">to ₹1,50,000</span>
          </div>
        </div>
        <div class="flex items-center gap-2 text-[13px] text-[#3C4949]">
          <span class="material-symbols-outlined text-[#006A6A] text-[18px]">location_on</span>
          <span class="">Location: Customer's Place</span>
        </div>
      </div>
    </div>
  </div>
</section>
`
}));

/* ---------------- Minimal service-detail pages (name + booking info only) ---------------- */
function minimalServiceDetail(slug, name, icon, bookingHref) {
  write(`services/${slug}`, page({
    title: `${name} | PTA Solutions Service Detail`,
    description: `${name} at PTA Solutions Hearing and Speech Care Clinics, Chembur, Mumbai. Book your appointment today.`,
    active: 'services',
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: name }],
    h1: name,
    subtitle: null,
    body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-3xl mx-auto px-6 text-center space-y-6">
    <div class="w-16 h-16 rounded-2xl bg-[#1BBCBC]/20 text-[#006A6A] flex items-center justify-center mx-auto">
      <span class="material-symbols-outlined text-[32px]">${icon}</span>
    </div>
    <p class="text-[16px] text-[#3C4949]">Book your ${name} appointment with PTA Solutions Hearing and Speech Care Clinics.</p>
    <div>
      ${ctaPrimary(`Book ${name}`, bookingHref, 'calendar_month')}
    </div>
  </div>
</section>
`
  }));
}

minimalServiceDetail('hearing-tests', 'Hearing Tests', 'hearing', '/booking/hearing-tests');
minimalServiceDetail('hearing-aids', 'Hearing Aids', 'hearing_disabled', '/booking/hearing-aids');
minimalServiceDetail('speech-therapy', 'Speech Therapy', 'record_voice_over', '/booking/speech-therapy');
minimalServiceDetail('newborn-screening', 'Newborn Screening', 'child_care', '/booking/newborn-screening');

/* ---------------- Basic Consultation & Premium NRI Care detail pages ---------------- */
function pricedServiceDetail(slug, name, duration, price, priceNote, bookingHref) {
  write(`services/${slug}`, page({
    title: `${name} | PTA Solutions Service Detail`,
    description: `${name} at PTA Solutions: Duration ${duration}, Price ${price} ${priceNote}.`,
    active: 'services',
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: name }],
    h1: name,
    subtitle: null,
    body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-3xl mx-auto px-6">
    <div class="bg-[#F7FAF9] p-8 rounded-2xl border-2 border-[#1BBCBC] shadow-md space-y-5">
      <div class="flex items-center gap-2 text-[14px] text-[#3C4949]">
        <span class="material-symbols-outlined text-[#006A6A] text-[20px]">schedule</span>
        <span class="">Duration: ${duration}</span>
      </div>
      <div>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[#006A6A]">Price</span>
        <div class="flex items-baseline gap-2 mt-1">
          <span class="text-[30px] font-display font-bold text-[#122326]">${price}</span>
          <span class="text-[14px] text-[#526163]">${priceNote}</span>
        </div>
      </div>
      <div class="pt-2">
        ${ctaPrimary(`Book ${name}`, bookingHref, 'calendar_month')}
      </div>
    </div>
  </div>
</section>
`
  }));
}

pricedServiceDetail('basic-consultation', 'Basic Consultation', '1 hr', '₹10,000', 'to ₹20,000', '/booking/basic-consultation');
pricedServiceDetail('premium-nri-care', 'Premium NRI Care', '1 hr', '₹2L', 'to ₹3.5L', '/booking/premium-nri-care');

/* ---------------- Book Appointment / Our Services hub ---------------- */
function hubRow(name, ctaLabel, href) {
  return `      <div class="plan-row bg-white border border-[#DCE7E6] rounded-2xl p-6 flex items-center justify-between gap-4">
        <h3 class="text-[18px] font-display font-bold text-[#122326]">${name}</h3>
        <a class="px-5 py-2.5 bg-[#1BBCBC] text-[#002020] font-display font-bold text-[13px] rounded-lg hover:bg-[#006A6A] hover:text-white transition-all shadow-sm whitespace-nowrap" href="${href}">${ctaLabel}</a>
      </div>`;
}

write('book-appointment', page({
  title: 'Book Appointment | Our Services | PTA Solutions',
  description: 'Choose a clinical service and book your appointment with PTA Solutions Hearing and Speech Care Clinics, Chembur, Mumbai.',
  active: 'services',
  crumbs: [{ label: 'Home', href: '/' }, { label: 'Services' }],
  h1: 'Our Services',
  subtitle: null,
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-4xl mx-auto px-6 space-y-4">
${hubRow('Hearing Tests', 'Book Appointment Now', '/booking/hearing-tests')}
${hubRow('Hearing Aids', 'Book Appointment Now', '/booking/hearing-aids')}
${hubRow('Speech Therapy', 'Book Appointment Now', '/booking/speech-therapy')}
${hubRow('Newborn Screening', 'Book Appointment Now', '/booking/newborn-screening')}
${hubRow('Complete Care', 'More Info', '/services/complete-care')}
${hubRow('Basic Consultation', 'Book Appointment Now', '/booking/basic-consultation')}
${hubRow('Premium NRI Care', 'Book Appointment Now', '/booking/premium-nri-care')}
  </div>
</section>
`
}));

/* ---------------- Booking pages ---------------- */
function bookingPage(slug, name) {
  const formId = `booking-form-${slug}`;
  const feedbackId = `booking-feedback-${slug}`;
  write(`booking/${slug}`, page({
    title: `${name} Booking | PTA Solutions`,
    description: `Schedule your ${name} appointment with PTA Solutions Hearing and Speech Care Clinics, Chembur, Mumbai.`,
    active: 'services',
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Book Appointment', href: '/book-appointment' }, { label: name }],
    h1: 'Schedule your service',
    subtitle: 'Check out our availability and book the date and time that works for you',
    body: bookingFormPanel(name, formId, feedbackId)
  }));
}

bookingPage('hearing-tests', 'Hearing Tests');
bookingPage('hearing-aids', 'Hearing Aids');
bookingPage('speech-therapy', 'Speech Therapy');
bookingPage('newborn-screening', 'Newborn Screening');
bookingPage('basic-consultation', 'Basic Consultation');
bookingPage('premium-nri-care', 'Premium NRI Care');

/* ---------------- Contact Us ---------------- */
write('contact', page({
  title: 'Contact Us | PTA Solutions Hearing & Speech Care Clinics',
  description: 'Contact PTA Solutions Hearing and Speech Care Clinics at Shanmukhapriya HealthCare Center, Chembur, Mumbai. Call +91 9773545058 or email ptasolutionshsc@gmail.com.',
  active: 'contact',
  crumbs: [{ label: 'Home', href: '/' }, { label: 'Contact Us' }],
  h1: 'Contact Us',
  subtitle: null,
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
    <div class="lg:col-span-5 space-y-6">
      <div class="space-y-1">
        <p class="font-display font-bold text-[18px] text-[#122326]">PTA Solutions</p>
        <p class="text-[14px] text-[#526163]">Hearing and Speech Care Clinics</p>
      </div>
      <div class="flex items-start gap-4 p-5 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
        <span class="material-symbols-outlined text-[#006A6A] text-[24px] mt-0.5">location_on</span>
        <div>
          <p class="font-display font-bold text-[15px] text-[#122326]">Address</p>
          <p class="text-[13px] text-[#526163] mt-1 leading-relaxed">
            Shanmukhapriya HealthCare Center<br>
            6th Floor, Shrikant Chambers -2,<br>
            Above Surya Hospital<br>
            Next to R.K.Studio, Opp CROMA,<br>
            Chembur, Mumbai - 400074
          </p>
        </div>
      </div>
      <div class="flex items-center gap-4 p-5 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
        <span class="material-symbols-outlined text-[#006A6A] text-[24px]">call</span>
        <div>
          <p class="font-display font-bold text-[15px] text-[#122326]">Phone</p>
          <a class="text-[14px] text-[#006A6A] font-bold hover:underline" href="tel:+919773545058">+91 9773545058</a>
        </div>
      </div>
      <div class="flex items-center gap-4 p-5 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
        <span class="material-symbols-outlined text-[#006A6A] text-[24px]">mail</span>
        <div>
          <p class="font-display font-bold text-[15px] text-[#122326]">Email</p>
          <a class="text-[14px] text-[#526163] hover:text-[#006A6A] transition-colors" href="mailto:ptasolutionshsc@gmail.com">ptasolutionshsc@gmail.com</a>
        </div>
      </div>
    </div>
    <div class="lg:col-span-7 bg-[#F7FAF9] p-8 lg:p-10 rounded-2xl border border-[#DCE7E6] shadow-sm">
      <form class="space-y-4" id="contact-form" onsubmit="handleFormSubmit(event, 'contact-feedback')">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-[#6C7A79] mb-1.5">First Name *</label>
            <input class="custom-input w-full h-12 px-4 rounded-lg bg-white border border-[#DCE7E6] text-[#122326] text-[14px]" required="" type="text">
          </div>
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-[#6C7A79] mb-1.5">Last Name</label>
            <input class="custom-input w-full h-12 px-4 rounded-lg bg-white border border-[#DCE7E6] text-[#122326] text-[14px]" type="text">
          </div>
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#6C7A79] mb-1.5">Email *</label>
          <input class="custom-input w-full h-12 px-4 rounded-lg bg-white border border-[#DCE7E6] text-[#122326] text-[14px]" required="" type="email">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#6C7A79] mb-1.5">Message</label>
          <textarea class="custom-input w-full p-4 rounded-lg bg-white border border-[#DCE7E6] text-[#122326] text-[14px]" rows="4"></textarea>
        </div>
        <button class="w-full h-12 inline-flex items-center justify-center bg-[#1BBCBC] text-[#002020] font-display font-bold text-[14px] rounded-lg hover:bg-[#006A6A] hover:text-white transition-all shadow-sm active:scale-95" type="submit">
          Send
        </button>
        <div class="hidden p-3.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg text-[13px] text-center" id="contact-feedback">
          Thanks for submitting!
        </div>
      </form>
    </div>
  </div>
</section>
`
}));

console.log('All 18 pages generated.');
