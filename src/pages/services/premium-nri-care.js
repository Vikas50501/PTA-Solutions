const {
  pageHero, imagePlaceholder, sectionHeading, benefitGrid, processSteps,
  faqAccordion, relatedServices, breadcrumbSchema, serviceSchema, faqSchema,
} = require('../../partials/layout.js');

const PATH = '/services/premium-nri-care';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Premium NRI Care' }];

const FAQS = [
  { q: 'How does Premium NRI Care work if I live abroad?', a: 'We coordinate visits directly with your parents in Mumbai and keep you updated via WhatsApp and tele-consultations, so you stay informed from anywhere in the world.' },
  { q: 'What is included in the quarterly visits?', a: 'Quarterly in-home Mumbai evaluations, hearing device maintenance, and progress reports shared with the family abroad.' },
  { q: 'Can I join the consultation remotely?', a: 'Yes, direct WhatsApp updates and tele-clinical consultations are part of this plan so you can be involved in your parents\' care.' },
  { q: 'Why does the price range between ₹2L and ₹3.5L?', a: 'The final cost depends on the frequency of visits and the specific diagnostic and device needs identified for your parents.' },
];

module.exports = {
  title: 'Premium NRI Care in Mumbai | Hearing Care for Parents Abroad | PTA Solutions',
  description: 'Premium NRI Care from PTA Solutions: dedicated home visits, quarterly evaluations, and WhatsApp updates for families caring for elderly parents in Mumbai from abroad.',
  active: 'services',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Global Family Concierge' }],
    title: 'Premium NRI Care',
    meta: `<span><strong>Duration:</strong> 1 hr</span><span>•</span><span><strong>Price:</strong> ₹2L to ₹3.5L</span><span>•</span><span><strong>Location:</strong> Dedicated Visits</span>`,
  }),
  path: PATH,
  extraSchema: [
    breadcrumbSchema(CRUMBS, PATH),
    serviceSchema({ name: 'Premium NRI Care', description: 'Specialized home visits, parent progress reports and remote video updates for overseas families.', priceMin: 200000, priceMax: 350000, path: PATH }),
    faqSchema(FAQS),
  ],
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-10">
      <div class="space-y-4">
        <h2 class="text-[24px] font-display font-bold text-[#0F1E3E]">Dedicated Home Visits for NRI Families</h2>
        <p class="text-[15px] text-[#687779] leading-relaxed">
          Premium NRI Care offers specialized home visits, parent progress reports, and remote video updates for families living overseas who want the best hearing care for their parents in Mumbai, without the stress of coordinating it all from a distance.
        </p>
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-4">What's Included</h2>
        ${benefitGrid([
          { icon: 'event_repeat', title: 'Quarterly In-Home Evaluations', desc: 'Scheduled hearing assessments at your parents\' home in Mumbai.' },
          { icon: 'chat', title: 'Direct WhatsApp Updates', desc: 'Clinical summaries and updates sent directly to family abroad.' },
          { icon: 'video_call', title: 'Tele-Clinical Consultations', desc: 'Remote video updates so you can stay involved from anywhere.' },
          { icon: 'support_agent', title: 'Dedicated Coordinator', desc: 'A single point of contact managing your parents\' care schedule.' },
        ])}
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-4">Who This Service Is For</h2>
        <p class="text-[15px] text-[#687779] leading-relaxed mb-4">Designed for sons and daughters living outside India who want dependable, dedicated hearing care for elderly parents residing in Mumbai, with regular reporting and remote visibility.</p>
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E] mb-5">How It Works</h2>
        ${processSteps([
          { icon: 'call', title: '1. Enroll', desc: 'Share your parents\' details and your contact information abroad.' },
          { icon: 'home', title: '2. Home Visit', desc: 'Our team conducts the first evaluation at your parents\' residence.' },
          { icon: 'chat', title: '3. Stay Updated', desc: 'Receive WhatsApp summaries and schedule tele-consultations.' },
          { icon: 'event_repeat', title: '4. Ongoing Care', desc: 'Quarterly visits keep your parents\' hearing health on track.' },
        ])}
      </div>

      <div>
        ${sectionHeading({ eyebrow: 'Related Services', title: 'You May Also Need' })}
        <div class="mt-5">
          ${relatedServices([
            { icon: 'favorite', title: 'Complete Care', desc: 'All-in-one diagnostics and therapy delivered at home.', href: '/services/complete-care' },
            { icon: 'medical_services', title: 'Basic Consultation', desc: 'A baseline assessment of hearing and speech health.', href: '/services/basic-consultation' },
            { icon: 'public', title: 'NRI Hearing Care', desc: 'See the full overview of our NRI family concierge program.', href: '/nri-hearing-care' },
          ])}
        </div>
      </div>
    </div>

    <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
      ${imagePlaceholder({ icon: 'family_restroom', label: 'NRI Family Concierge Care', caption: 'Dedicated home visits across Mumbai' })}
      <div class="bg-[#F7FAF9] p-6 rounded-2xl border-2 border-[#4FC3D9] space-y-4">
        <div class="flex items-center gap-2 text-[13px] text-[#0F1E3E]">
          <span class="material-symbols-outlined text-[#1E3E83] text-[18px]">schedule</span>
          <span class="font-semibold">Duration: 1 hr</span>
        </div>
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-[#1E3E83]">Price</span>
          <p class="text-[26px] font-display font-bold text-[#0F1E3E] mt-1">₹2L <span class="text-[14px] text-[#687779] font-normal">to ₹3.5L</span></p>
        </div>
        <a href="/booking/premium-nri-care" class="block text-center w-full py-3.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[14px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-md">
          Enroll NRI Plan
        </a>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-[#F7FAF9] border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Common Questions', title: 'Premium NRI Care FAQs', align: 'center' })}
    ${faqAccordion(FAQS)}
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-6 text-center space-y-5">
    <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0F1E3E]">Give your parents dedicated hearing care in Mumbai.</h2>
    <p class="text-[15px] text-[#687779]">Enroll your parents in the Premium NRI Care program today.</p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a href="/booking/premium-nri-care" class="px-7 py-3.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[15px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-md">Enroll NRI Plan</a>
      <a href="tel:+919773545058" class="px-7 py-3.5 border border-[#DCE7E6] bg-white text-[#0F1E3E] font-display font-semibold text-[15px] rounded-lg hover:border-[#4FC3D9] transition-all">Call +91 9773545058</a>
    </div>
  </div>
</section>
`
};
