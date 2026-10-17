const {
  pageHero, sectionHeading, processSteps, faqAccordion,
  relatedServices, breadcrumbSchema, serviceSchema, faqSchema,
} = require('../../partials/layout.js');

const PATH = '/services/complete-care';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Complete Care' }];

const FAQS = [
  { q: 'Is Complete Care conducted entirely at home?', a: "Yes, Complete Care is delivered at the customer's place for comprehensive, convenient audiology and speech therapy." },
  { q: 'What does the price range depend on?', a: 'The ₹75,000 to ₹1,50,000 range reflects the specific diagnostics, devices, and therapy plan tailored to your needs.' },
  { q: 'How do I get started?', a: 'Talk to our specialist through the Contact page, and we will guide you through the Complete Care program.' },
  { q: 'Does Complete Care include hearing aids?', a: 'Complete Care includes diagnostics, real-ear verification, and speech therapy; hearing aid fitting is coordinated as part of your personalized plan when needed.' },
];

module.exports = {
  title: 'Complete Care | Home Audiology & Speech Therapy Suite | PTA Solutions',
  description: 'Complete Care: a holistic in-home audiology and speech therapy service by PTA Solutions, Mumbai — diagnostics, real-ear verification, and therapy at your residence.',
  active: 'complete-care',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Flagship Protocol', solid: true }],
    title: 'Complete Care',
    meta: `<span><strong>Duration:</strong> 1 hr</span><span>•</span><span><strong>Price:</strong> ₹75,000 to ₹1,50,000</span><span>•</span><span><strong>Location:</strong> Customer's Place</span>`,
  }),
  path: PATH,
  extraSchema: [
    breadcrumbSchema(CRUMBS, PATH),
    serviceSchema({ name: 'Complete Care', description: 'Holistic in-home audiology and speech therapy service with full diagnostics, real-ear verification, and personalized care plans.', priceMin: 75000, priceMax: 150000, path: PATH }),
    faqSchema(FAQS),
  ],
  body: `
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-8">
      <div class="space-y-4">
        <h2 class="text-[24px] font-display font-bold text-[#0D234A]">Comprehensive In-Home Rehabilitation</h2>
        <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] text-[16px] text-[#0D234A] leading-relaxed italic">
          "Our Complete Care service offers a holistic approach to audiology, ensuring you receive top-notch hearing and speech therapies. With cutting-edge diagnostics and personalized care plans, our expert team is dedicated to enhancing your auditory experience right at your home. Experience a new level of hearing health with our unparalleled commitment to your well-being!"
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="p-5 bg-white rounded-xl border border-[#D7E3E8]">
          <span class="material-symbols-outlined text-[#1797A6] text-[24px]">biotech</span>
          <h4 class="font-display font-bold text-[16px] text-[#0D234A] mt-2">Cutting-Edge Diagnostics</h4>
          <p class="text-[13px] text-[#64748B] mt-1">Full pure-tone threshold evaluation, speech discrimination, and acoustic impedance testing at your living room.</p>
        </div>
        <div class="p-5 bg-white rounded-xl border border-[#D7E3E8]">
          <span class="material-symbols-outlined text-[#1797A6] text-[24px]">tune</span>
          <h4 class="font-display font-bold text-[16px] text-[#0D234A] mt-2">Real-Ear Acoustic Verification</h4>
          <p class="text-[13px] text-[#64748B] mt-1">Real-time probe microphone measurements to verify target audibility curves against clinical prescriptions.</p>
        </div>
        <div class="p-5 bg-white rounded-xl border border-[#D7E3E8]">
          <span class="material-symbols-outlined text-[#1797A6] text-[24px]">record_voice_over</span>
          <h4 class="font-display font-bold text-[16px] text-[#0D234A] mt-2">Integrated Speech Therapy</h4>
          <p class="text-[13px] text-[#64748B] mt-1">Specialized brain auditory retraining to distinguish consonants in background conversation noise.</p>
        </div>
        <div class="p-5 bg-white rounded-xl border border-[#D7E3E8]">
          <span class="material-symbols-outlined text-[#1797A6] text-[24px]">support_agent</span>
          <h4 class="font-display font-bold text-[16px] text-[#0D234A] mt-2">Lifetime Concierge Care</h4>
          <p class="text-[13px] text-[#64748B] mt-1">Direct line to Johnsavio Fernandes with ongoing acoustic check-ins and scheduled battery replenishment.</p>
        </div>
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0D234A] mb-5">How It Works</h2>
        ${processSteps([
          { icon: 'call', title: '1. Consult', desc: 'Talk to our specialist to understand your needs and goals.' },
          { icon: 'home', title: '2. Home Diagnostics', desc: 'Our team brings diagnostic equipment directly to your home.' },
          { icon: 'tune', title: '3. Personalized Plan', desc: 'A care plan is designed around your diagnostic results.' },
          { icon: 'support_agent', title: '4. Ongoing Care', desc: 'Continued support and adjustments as part of the program.' },
        ])}
      </div>

      <div>
        ${sectionHeading({ eyebrow: 'Related Services', title: 'You May Also Need' })}
        <div class="mt-5">
          ${relatedServices([
            { icon: 'hearing', title: 'Hearing Tests', desc: 'A standalone diagnostic test if you need a quicker option.', href: '/services/hearing-tests' },
            { icon: 'hearing_disabled', title: 'Hearing Aids', desc: 'Standalone fitting and dispensing service.', href: '/services/hearing-aids' },
            { icon: 'public', title: 'NRI Parent Care', desc: 'An entry hearing or speech assessment designed for families abroad.', href: '/nri-hearing-care' },
          ])}
        </div>
      </div>
    </div>

    <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
      <div class="relative bg-white p-3 border border-[#D7E3E8] rounded-2xl shadow-md">
        <img src="/assets/stock/complete-care.webp" alt="Healthcare professional examining a patient's ears" class="w-full h-auto aspect-[4/3] object-cover rounded-xl">
      </div>
      <div class="bg-[#F8FAFC] p-8 rounded-2xl border-2 border-[#087F8C] space-y-6">
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-[#1797A6]">Service Investment</span>
          <p class="text-[32px] font-display font-bold text-[#0D234A] mt-1">₹75,000 <span class="text-[14px] text-[#64748B] font-normal">to ₹1,50,000</span></p>
          <p class="text-[12px] text-[#64748B] mt-1">Duration: 1 hr • Conducted at Customer's Place</p>
        </div>
        <div class="space-y-2 border-t border-[#D7E3E8] pt-4 text-[13px] text-[#0D234A]">
          <div class="flex items-center gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px]">check</span> Complete audiology diagnostic suite</div>
          <div class="flex items-center gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px]">check</span> Real environment acoustic adaptation</div>
          <div class="flex items-center gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px]">check</span> Customized speech therapy sessions</div>
          <div class="flex items-center gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px]">check</span> Zero hidden medical surcharges</div>
        </div>
        <a href="/book-appointment" class="block text-center w-full py-3.5 bg-[#087F8C] text-[#0D234A] font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">
          Talk to Specialist Now
        </a>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-[#F8FAFC] border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Common Questions', title: 'Complete Care FAQs', align: 'center' })}
    ${faqAccordion(FAQS)}
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-6 text-center space-y-5">
    <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0D234A]">Experience complete audiology care at home.</h2>
    <p class="text-[15px] text-[#64748B]">Speak with our specialist to design your personalized Complete Care plan.</p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a href="/contact" class="px-7 py-3.5 bg-[#087F8C] text-[#0D234A] font-display font-bold text-[15px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">Talk to Specialist Now</a>
      <a href="tel:+919773545058" class="px-7 py-3.5 border border-[#D7E3E8] bg-white text-[#0D234A] font-display font-semibold text-[15px] rounded-lg hover:border-[#087F8C] transition-all">Call +91 9773545058</a>
    </div>
  </div>
</section>
`
};
