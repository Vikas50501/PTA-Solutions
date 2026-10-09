const {
  pageHero, imagePlaceholder, sectionHeading, benefitGrid, processSteps,
  faqAccordion, relatedServices, breadcrumbSchema, serviceSchema, faqSchema,
} = require('../../partials/layout.js');

const PATH = '/services/basic-consultation';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Basic Consultation' }];

const FAQS = [
  { q: 'What does a Basic Consultation include?', a: 'A comprehensive baseline audiological assessment, including Pure Tone Audiometry (air and bone) and speech discrimination and impedance testing.' },
  { q: 'Is this available at home?', a: 'Yes, the Basic Consultation can be conducted at our Chembur clinic or at your home across Mumbai.' },
  { q: 'What happens after the consultation?', a: 'Your results are reviewed with you, and if further care is needed, we guide you toward the right next step such as a hearing aid trial or speech therapy.' },
  { q: 'Why does the price range between ₹10,000 and ₹20,000?', a: 'The final cost depends on the specific diagnostics and location (clinic vs. home visit) required for your assessment.' },
];

module.exports = {
  title: 'Basic Consultation in Chembur, Mumbai | Hearing & Speech Baseline Assessment | PTA Solutions',
  description: 'Book a Basic Consultation at PTA Solutions, Chembur, Mumbai — a comprehensive baseline hearing and speech assessment. Duration 1 hr, ₹10,000 to ₹20,000.',
  active: 'services',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'In-Clinic Baseline' }],
    title: 'Basic Consultation',
    meta: `<span><strong>Duration:</strong> 1 hr</span><span>•</span><span><strong>Price:</strong> ₹10,000 to ₹20,000</span><span>•</span><span><strong>Location:</strong> Clinic / Home</span>`,
  }),
  path: PATH,
  extraSchema: [
    breadcrumbSchema(CRUMBS, PATH),
    serviceSchema({ name: 'Basic Consultation', description: 'Comprehensive baseline audiological assessment for individuals seeking clarity on hearing or speech.', priceMin: 10000, priceMax: 20000, path: PATH }),
    faqSchema(FAQS),
  ],
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-10">
      <div class="space-y-4">
        <h2 class="text-[24px] font-display font-bold text-[#0F1E3E]">A Clear Baseline on Your Hearing &amp; Speech Health</h2>
        <p class="text-[15px] text-[#687779] leading-relaxed">
          The Basic Consultation is a comprehensive baseline audiological assessment for individuals seeking clarity on their hearing or speech health, combining diagnostic testing with a straightforward, pressure-free discussion of your results.
        </p>
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-4">What's Included</h2>
        ${benefitGrid([
          { icon: 'hearing', title: 'Pure Tone Audiometry', desc: 'Air and bone conduction testing of your hearing thresholds.' },
          { icon: 'graphic_eq', title: 'Speech Discrimination', desc: 'Assessment of how clearly you perceive spoken speech.' },
          { icon: 'volume_up', title: 'Impedance Testing', desc: 'A check of middle ear function and eardrum compliance.' },
          { icon: 'support_agent', title: 'Clear Guidance', desc: 'A plain-language review of your results and recommended next steps.' },
        ])}
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-4">Who This Service Is For</h2>
        <p class="text-[15px] text-[#687779] leading-relaxed mb-4">Ideal for anyone noticing early signs of hearing or speech difficulty who wants a comprehensive, independent baseline assessment before deciding on further care.</p>
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-5">How It Works</h2>
        ${processSteps([
          { icon: 'call', title: '1. Book', desc: 'Choose a clinic visit or a home consultation across Mumbai.' },
          { icon: 'hearing', title: '2. Assess', desc: 'Pure Tone Audiometry, speech discrimination and impedance testing.' },
          { icon: 'description', title: '3. Review', desc: 'Your results are explained clearly, with no sales pressure.' },
          { icon: 'support_agent', title: '4. Next Steps', desc: 'If further care is recommended, we guide you to the right service.' },
        ])}
      </div>

      <div>
        ${sectionHeading({ eyebrow: 'Related Services', title: 'You May Also Need' })}
        <div class="mt-5">
          ${relatedServices([
            { icon: 'hearing_disabled', title: 'Hearing Aids', desc: 'Explore fitting options if hearing loss is identified.', href: '/services/hearing-aids' },
            { icon: 'record_voice_over', title: 'Speech Therapy', desc: 'Personalized therapy for speech and language concerns.', href: '/services/speech-therapy' },
            { icon: 'favorite', title: 'Complete Care', desc: 'Full diagnostics and therapy delivered at your home.', href: '/services/complete-care' },
          ])}
        </div>
      </div>
    </div>

    <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
      ${imagePlaceholder({ icon: 'medical_services', label: 'Baseline Consultation', caption: 'Chembur clinic or home visit' })}
      <div class="bg-[#F7FAF9] p-6 rounded-2xl border-2 border-[#4FC3D9] space-y-4">
        <div class="flex items-center gap-2 text-[13px] text-[#0F1E3E]">
          <span class="material-symbols-outlined text-[#1E3E83] text-[18px]">schedule</span>
          <span class="font-semibold">Duration: 1 hr</span>
        </div>
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-[#1E3E83]">Price</span>
          <p class="text-[26px] font-display font-bold text-[#0F1E3E] mt-1">₹10,000 <span class="text-[14px] text-[#687779] font-normal">to ₹20,000</span></p>
        </div>
        <a href="/booking/basic-consultation" class="block text-center w-full py-3.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[14px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-md">
          Book Evaluation
        </a>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-[#F7FAF9] border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Common Questions', title: 'Basic Consultation FAQs', align: 'center' })}
    ${faqAccordion(FAQS)}
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-6 text-center space-y-5">
    <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0F1E3E]">Get clarity on your hearing and speech health.</h2>
    <p class="text-[15px] text-[#687779]">Book a Basic Consultation at our Chembur clinic or at your home.</p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a href="/booking/basic-consultation" class="px-7 py-3.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[15px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-md">Book Evaluation</a>
      <a href="tel:+919773545058" class="px-7 py-3.5 border border-[#DCE7E6] bg-white text-[#0F1E3E] font-display font-semibold text-[15px] rounded-lg hover:border-[#4FC3D9] transition-all">Call +91 9773545058</a>
    </div>
  </div>
</section>
`
};
