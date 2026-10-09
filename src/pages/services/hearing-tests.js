const {
  pageHero, imagePlaceholder, sectionHeading, benefitGrid, processSteps,
  faqAccordion, relatedServices, breadcrumbSchema, serviceSchema, faqSchema,
} = require('../../partials/layout.js');

const PATH = '/services/hearing-tests';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Hearing Tests' }];

const FAQS = [
  { q: 'How long does a hearing test take?', a: 'A full Pure Tone Audiometry and tympanometry session takes about 45 minutes.' },
  { q: 'Can the test be done at my home?', a: 'Yes — we offer doorstep hearing test appointments across Mumbai in addition to our Chembur clinic.' },
  { q: 'What should I bring to my appointment?', a: 'Please bring any previous audiograms or medical reports you have, if available.' },
  { q: 'Will I get my results the same day?', a: 'Yes, your audiogram and test results are reviewed with you immediately after the session.' },
  { q: 'Do I need a doctor referral to book a hearing test?', a: 'No referral is required. You can book directly with our clinic for a hearing test.' },
];

module.exports = {
  title: 'Hearing Tests in Chembur, Mumbai | Pure Tone Audiometry | PTA Solutions',
  description: 'Book a comprehensive hearing test in Chembur, Mumbai — Pure Tone Audiometry, tympanometry & acoustic reflex testing in a calibrated ISO booth. From ₹1,500.',
  active: 'services',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Audiology • Diagnostic' }],
    title: 'Hearing Tests',
    meta: `<span><strong>Duration:</strong> 45 Mins</span><span>•</span><span><strong>Price:</strong> From ₹1,500</span><span>•</span><span><strong>Location:</strong> Chembur Clinic or Doorstep</span>`,
  }),
  path: PATH,
  extraSchema: [
    breadcrumbSchema(CRUMBS, PATH),
    serviceSchema({ name: 'Hearing Tests', description: 'Pure Tone Audiometry, tympanometry and acoustic reflex testing for diagnosing hearing loss.', price: 1500, path: PATH }),
    faqSchema(FAQS),
  ],
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-10">
      <div class="space-y-4">
        <h2 class="text-[24px] font-display font-bold text-[#0F1E3E]">What Is a Hearing Test?</h2>
        <p class="text-[15px] text-[#687779] leading-relaxed">
          A hearing test at PTA Solutions combines comprehensive Pure Tone Audiometry (air and bone conduction) with tympanometry and acoustic reflex testing. The assessment is conducted inside a calibrated ISO sound isolation booth to accurately measure how well you hear different pitches and volumes, and to check the health of your middle ear.
        </p>
        <p class="text-[15px] text-[#687779] leading-relaxed">
          Many people live with gradually worsening hearing without realizing it — difficulty following conversations in noisy rooms, turning the TV volume up, or frequently asking others to repeat themselves are common early signs. A hearing test gives you a clear, objective picture of your hearing health so any concerns can be addressed early.
        </p>
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-4">What the Test Covers</h2>
        ${benefitGrid([
          { icon: 'hearing', title: 'Pure Tone Audiometry', desc: 'Air and bone conduction testing across a full octave threshold range (250Hz - 8000Hz).' },
          { icon: 'graphic_eq', title: 'Tympanometry', desc: 'Middle ear fluid and eardrum compliance analysis to rule out conductive issues.' },
          { icon: 'volume_up', title: 'Acoustic Reflex Testing', desc: 'Checks the protective reflex response of the middle ear muscles.' },
          { icon: 'description', title: 'Same-Day Audiogram Report', desc: 'Your results are reviewed with you in plain language right after the test.' },
        ])}
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-4">Who Should Get a Hearing Test</h2>
        <p class="text-[15px] text-[#687779] leading-relaxed mb-4">This test is recommended for adults, seniors, musicians, and anyone experiencing muffled speech, ringing in the ears, or difficulty hearing in noisy environments. Regular hearing checks are also useful for anyone regularly exposed to loud noise at work.</p>
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-5">How It Works</h2>
        ${processSteps([
          { icon: 'call', title: '1. Book', desc: 'Reserve your slot online, by phone, or on WhatsApp — in-clinic at Chembur or a doorstep visit across Mumbai.' },
          { icon: 'hearing', title: '2. Assess', desc: 'Pure Tone Audiometry and tympanometry conducted in our calibrated ISO sound booth.' },
          { icon: 'description', title: '3. Review', desc: 'Your audiogram and results are reviewed with you the same day, in plain language.' },
          { icon: 'support_agent', title: '4. Follow-Up', desc: 'If further care is needed, we guide you to the right next step — no pressure, no upselling.' },
        ])}
      </div>

      <div>
        ${sectionHeading({ eyebrow: 'Related Services', title: 'You May Also Need' })}
        <div class="mt-5">
          ${relatedServices([
            { icon: 'hearing_disabled', title: 'Hearing Aids', desc: 'If your test shows hearing loss, explore fitting options.', href: '/services/hearing-aids' },
            { icon: 'medical_services', title: 'Basic Consultation', desc: 'A broader baseline assessment of hearing and speech health.', href: '/services/basic-consultation' },
            { icon: 'favorite', title: 'Complete Care', desc: 'Full diagnostics and therapy delivered at your home.', href: '/services/complete-care' },
          ])}
        </div>
      </div>
    </div>

    <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
      ${imagePlaceholder({ icon: 'hearing', label: 'Hearing Test in Progress', caption: 'Calibrated ISO sound booth, Chembur clinic' })}
      <div class="bg-[#F7FAF9] p-6 rounded-2xl border-2 border-[#4FC3D9] space-y-4">
        <div class="flex items-center gap-2 text-[13px] text-[#0F1E3E]">
          <span class="material-symbols-outlined text-[#1E3E83] text-[18px]">schedule</span>
          <span class="font-semibold">Duration: 45 Mins</span>
        </div>
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-[#1E3E83]">Price</span>
          <p class="text-[26px] font-display font-bold text-[#0F1E3E] mt-1">From ₹1,500</p>
        </div>
        <a href="/booking/hearing-tests" class="block text-center w-full py-3.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[14px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-md">
          Book Hearing Tests
        </a>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-[#F7FAF9] border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Common Questions', title: 'Hearing Tests FAQs', align: 'center' })}
    ${faqAccordion(FAQS)}
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-6 text-center space-y-5">
    <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0F1E3E]">Ready to check your hearing health?</h2>
    <p class="text-[15px] text-[#687779]">Book your Pure Tone Audiometry session at our Chembur clinic or request a doorstep visit across Mumbai.</p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a href="/booking/hearing-tests" class="px-7 py-3.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[15px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-md">Book Hearing Tests</a>
      <a href="tel:+919773545058" class="px-7 py-3.5 border border-[#DCE7E6] bg-white text-[#0F1E3E] font-display font-semibold text-[15px] rounded-lg hover:border-[#4FC3D9] transition-all">Call +91 9773545058</a>
    </div>
  </div>
</section>
`
};
