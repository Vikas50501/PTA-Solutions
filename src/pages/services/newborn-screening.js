const {
  pageHero, imagePlaceholder, sectionHeading, benefitGrid, processSteps,
  faqAccordion, relatedServices, breadcrumbSchema, serviceSchema, faqSchema,
} = require('../../partials/layout.js');

const PATH = '/services/newborn-screening';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Newborn Screening' }];

const FAQS = [
  { q: 'Is the test safe for my newborn?', a: 'Yes, OAE and BERA/AABR screening are non-invasive and conducted in a calm, soothing environment.' },
  { q: 'How long does the screening take?', a: 'A full screening session typically takes 45 to 60 minutes.' },
  { q: 'Can this be done at home?', a: 'Yes, newborn screening can be arranged at our Chembur clinic or at your home across Mumbai.' },
  { q: 'At what age should screening be done?', a: 'This service is recommended for infants (0-6 months), including high-risk NICU graduates.' },
  { q: 'What happens if the screening flags a concern?', a: 'We explain the result clearly to parents and guide you on appropriate next steps for further evaluation.' },
];

module.exports = {
  title: 'Newborn Hearing Screening in Chembur, Mumbai | OAE & BERA Testing | PTA Solutions',
  description: 'Gentle, non-invasive newborn hearing screening in Chembur, Mumbai using automated OAE and BERA/AABR testing for infants and toddlers.',
  active: 'services',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Pediatric' }],
    title: 'Newborn Screening',
    meta: `<span><strong>Duration:</strong> 45-60 Mins</span><span>•</span><span><strong>Screening:</strong> Gentle, Non-Invasive</span><span>•</span><span><strong>Location:</strong> Chembur Clinic or Doorstep</span>`,
  }),
  path: PATH,
  extraSchema: [
    breadcrumbSchema(CRUMBS, PATH),
    serviceSchema({ name: 'Newborn Hearing Screening', description: 'Automated OAE and BERA/AABR newborn hearing screening for infants and toddlers.', path: PATH }),
    faqSchema(FAQS),
  ],
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-10">
      <div class="space-y-4">
        <h2 class="text-[24px] font-display font-bold text-[#0F1E3E]">Gentle, Automated Infant Hearing Screening</h2>
        <p class="text-[15px] text-[#687779] leading-relaxed">
          Non-invasive, automated Otoacoustic Emissions (OAE) and Brainstem Evoked Response Audiometry (BERA/AABR) tests are conducted in a quiet, acoustic sanctuary environment to identify congenital auditory variances as early as possible.
        </p>
        <p class="text-[15px] text-[#687779] leading-relaxed">
          Early identification of hearing differences gives families the opportunity to seek timely guidance during a critical window for speech and language development. The screening is quick, painless, and usually performed while your baby is asleep or settled.
        </p>
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-4">What the Screening Covers</h2>
        ${benefitGrid([
          { icon: 'child_care', title: 'Automated OAE', desc: 'Otoacoustic Emissions testing of cochlear hair cell function.' },
          { icon: 'graphic_eq', title: 'BERA / AABR', desc: 'Brainstem evoked response testing of the auditory nerve pathway.' },
          { icon: 'favorite', title: 'Gentle Environment', desc: 'Performed in a calm, quiet suite designed for infant comfort.' },
          { icon: 'description', title: 'Clear Parent Guidance', desc: 'Results explained in simple terms, with next steps if needed.' },
        ])}
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-4">Who Should Be Screened</h2>
        <p class="text-[15px] text-[#687779] leading-relaxed mb-4">Recommended for infants aged 0-6 months, including high-risk NICU graduates and toddlers approaching speech and hearing milestones who have not yet been screened.</p>
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-5">How It Works</h2>
        ${processSteps([
          { icon: 'call', title: '1. Book', desc: 'Schedule a screening slot at our clinic or request a home visit.' },
          { icon: 'child_care', title: '2. Gentle Screening', desc: 'Automated OAE and BERA/AABR tests performed in a calm, quiet suite.' },
          { icon: 'description', title: '3. Results', desc: 'Results are explained to parents in clear, simple terms.' },
          { icon: 'support_agent', title: '4. Guidance', desc: 'If follow-up is recommended, we guide you on the appropriate next steps.' },
        ])}
      </div>

      <div>
        ${sectionHeading({ eyebrow: 'Related Services', title: 'You May Also Need' })}
        <div class="mt-5">
          ${relatedServices([
            { icon: 'record_voice_over', title: 'Speech Therapy', desc: 'Support for speech and language milestones as your child grows.', href: '/services/speech-therapy' },
            { icon: 'medical_services', title: 'Basic Consultation', desc: 'A broader baseline assessment of hearing and speech health.', href: '/services/basic-consultation' },
            { icon: 'favorite', title: 'Complete Care', desc: 'Full diagnostics and therapy delivered at your home.', href: '/services/complete-care' },
          ])}
        </div>
      </div>
    </div>

    <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
      ${imagePlaceholder({ icon: 'child_care', label: 'Newborn Hearing Screening', caption: 'Gentle, quiet suite for infants' })}
      <div class="bg-[#F7FAF9] p-6 rounded-2xl border-2 border-[#4FC3D9] space-y-4">
        <div class="flex items-center gap-2 text-[13px] text-[#0F1E3E]">
          <span class="material-symbols-outlined text-[#1E3E83] text-[18px]">schedule</span>
          <span class="font-semibold">Duration: 45-60 Mins</span>
        </div>
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-[#1E3E83]">Screening</span>
          <p class="text-[26px] font-display font-bold text-[#0F1E3E] mt-1">Gentle Screening</p>
        </div>
        <a href="/booking/newborn-screening" class="block text-center w-full py-3.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[14px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-md">
          Book Newborn Screening
        </a>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-[#F7FAF9] border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Common Questions', title: 'Newborn Screening FAQs', align: 'center' })}
    ${faqAccordion(FAQS)}
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-6 text-center space-y-5">
    <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0F1E3E]">Give your baby's hearing the best start.</h2>
    <p class="text-[15px] text-[#687779]">Schedule a gentle, non-invasive newborn hearing screening today.</p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a href="/booking/newborn-screening" class="px-7 py-3.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[15px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-md">Book Newborn Screening</a>
      <a href="tel:+919773545058" class="px-7 py-3.5 border border-[#DCE7E6] bg-white text-[#0F1E3E] font-display font-semibold text-[15px] rounded-lg hover:border-[#4FC3D9] transition-all">Call +91 9773545058</a>
    </div>
  </div>
</section>
`
};
