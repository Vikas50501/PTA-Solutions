const {
  pageHero, imagePlaceholder, sectionHeading, benefitGrid, processSteps,
  faqAccordion, relatedServices, breadcrumbSchema, serviceSchema, faqSchema,
} = require('../../partials/layout.js');

const PATH = '/services/hearing-aids';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Hearing Aids' }];

const FAQS = [
  { q: 'Can I try a hearing aid before buying?', a: 'Yes, we offer risk-free trial sessions so you can experience the device in real environments first.' },
  { q: 'What is Real-Ear Measurement (REM)?', a: 'REM is a probe-microphone verification that confirms the amplified sound matches your prescriptive target precisely.' },
  { q: 'Do hearing aids support Bluetooth?', a: 'Several of our device options support Bluetooth streaming and are rechargeable.' },
  { q: 'Is a fitting available at home?', a: 'Yes, hearing aid fitting and trial sessions can be arranged at your home across Mumbai.' },
  { q: 'How long does a hearing aid fitting take?', a: 'A typical fitting and verification session takes about 60 minutes.' },
];

module.exports = {
  title: 'Hearing Aids in Chembur, Mumbai | Fitting & Real-Ear Verification | PTA Solutions',
  description: 'Hearing aid fitting and dispensing in Chembur, Mumbai with Real-Ear Measurement verification and free home trials. Invisible, RIC and rechargeable BTE options.',
  active: 'services',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Dispensing • Fitting' }],
    title: 'Hearing Aids',
    meta: `<span><strong>Duration:</strong> 60 Mins</span><span>•</span><span><strong>Trial:</strong> Free Home Trial</span><span>•</span><span><strong>Location:</strong> Chembur Clinic or Doorstep</span>`,
  }),
  path: PATH,
  extraSchema: [
    breadcrumbSchema(CRUMBS, PATH),
    serviceSchema({ name: 'Hearing Aids', description: 'Authorized fitting of digital hearing instruments with Real-Ear Measurement verification and free home trials.', path: PATH }),
    faqSchema(FAQS),
  ],
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-10">
      <div class="space-y-4">
        <h2 class="text-[24px] font-display font-bold text-[#0F1E3E]">Authorized Digital Hearing Aid Dispensing</h2>
        <p class="text-[15px] text-[#687779] leading-relaxed">
          PTA Solutions fits Swiss and Danish premium digital hearing instruments, programmed to your individual audiogram and verified with probe-microphone Real-Ear Measurements (REM). Every fitting includes a risk-free trial so you can experience the device in your everyday environments before committing.
        </p>
        <p class="text-[15px] text-[#687779] leading-relaxed">
          Choosing a hearing aid isn't a one-size-fits-all decision — lifestyle, degree of hearing loss, manual dexterity, and budget all play a role. Our fitting process is built around understanding your specific needs rather than selling a fixed catalogue.
        </p>
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-4">Device Options &amp; Verification</h2>
        ${benefitGrid([
          { icon: 'hearing_disabled', title: 'Invisible-in-Canal (IIC)', desc: 'Discreet, custom-fit devices sitting deep in the ear canal.' },
          { icon: 'bluetooth', title: 'Receiver-in-Canal (RIC)', desc: 'Bluetooth-enabled streaming for calls, music and TV audio.' },
          { icon: 'battery_charging_full', title: 'Rechargeable BTE', desc: 'Behind-the-ear devices with long battery life, easy to handle.' },
          { icon: 'tune', title: 'Real-Ear Measurement', desc: 'Probe-microphone verification confirms your prescriptive target match.' },
        ])}
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-4">Who Should Consider a Hearing Aid</h2>
        <p class="text-[15px] text-[#687779] leading-relaxed mb-4">Recommended for individuals diagnosed with mild to profound sensorineural, conductive, or mixed hearing loss, including both first-time users and those seeking an upgrade or re-tuning of an existing device.</p>
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-5">How It Works</h2>
        ${processSteps([
          { icon: 'call', title: '1. Book', desc: 'Reserve a fitting and trial session at our Chembur clinic or at home.' },
          { icon: 'tune', title: '2. Fit & Verify', desc: 'Devices are programmed to your audiogram and verified with Real-Ear Measurement.' },
          { icon: 'hearing_disabled', title: '3. Trial', desc: 'Try your hearing aids in real environments before committing.' },
          { icon: 'support_agent', title: '4. Fine-Tune', desc: 'Follow-up adjustments to your comfort and listening needs.' },
        ])}
      </div>

      <div>
        ${sectionHeading({ eyebrow: 'Related Services', title: 'You May Also Need' })}
        <div class="mt-5">
          ${relatedServices([
            { icon: 'hearing', title: 'Hearing Tests', desc: 'Get a diagnostic audiogram before choosing a device.', href: '/services/hearing-tests' },
            { icon: 'medical_services', title: 'Basic Consultation', desc: 'A broader baseline assessment of hearing and speech health.', href: '/services/basic-consultation' },
            { icon: 'favorite', title: 'Complete Care', desc: 'Full diagnostics and therapy delivered at your home.', href: '/services/complete-care' },
          ])}
        </div>
      </div>
    </div>

    <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
      ${imagePlaceholder({ icon: 'hearing_disabled', label: 'Hearing Aid Fitting', caption: 'Real-Ear Measurement verification' })}
      <div class="bg-[#F7FAF9] p-6 rounded-2xl border-2 border-[#4FC3D9] space-y-4">
        <div class="flex items-center gap-2 text-[13px] text-[#0F1E3E]">
          <span class="material-symbols-outlined text-[#1E3E83] text-[18px]">schedule</span>
          <span class="font-semibold">Duration: 60 Mins</span>
        </div>
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-[#1E3E83]">Trial</span>
          <p class="text-[26px] font-display font-bold text-[#0F1E3E] mt-1">Free Home Trial</p>
        </div>
        <a href="/booking/hearing-aids" class="block text-center w-full py-3.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[14px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-md">
          Book Hearing Aids
        </a>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-[#F7FAF9] border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Common Questions', title: 'Hearing Aids FAQs', align: 'center' })}
    ${faqAccordion(FAQS)}
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-6 text-center space-y-5">
    <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0F1E3E]">Find the right hearing aid for you.</h2>
    <p class="text-[15px] text-[#687779]">Book a fitting and trial session with verified Real-Ear Measurement.</p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a href="/booking/hearing-aids" class="px-7 py-3.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[15px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-md">Book Hearing Aids</a>
      <a href="tel:+919773545058" class="px-7 py-3.5 border border-[#DCE7E6] bg-white text-[#0F1E3E] font-display font-semibold text-[15px] rounded-lg hover:border-[#4FC3D9] transition-all">Call +91 9773545058</a>
    </div>
  </div>
</section>
`
};
