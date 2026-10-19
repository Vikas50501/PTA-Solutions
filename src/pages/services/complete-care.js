const { pageHero, breadcrumbSchema } = require('../../partials/layout.js');

const PATH = '/services/complete-care';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Complete Care' }];

module.exports = {
  title: 'Complete Care | PTA Solutions Hearing and Speech Care Clinics',
  description: 'Explore comprehensive hearing and speech care at PTA Solutions, Chembur, Mumbai.',
  active: 'services',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Clinical Care' }],
    title: 'Complete Hearing & Speech Care',
  }),
  path: PATH,
  extraSchema: [breadcrumbSchema(CRUMBS, PATH)],
  body: `
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
    <div class="w-16 h-16 mx-auto rounded-2xl bg-[#EEF6F8] flex items-center justify-center text-[#087F8C]">
      <span class="material-symbols-outlined text-[32px]">hearing</span>
    </div>
    <h2 class="text-[26px] font-display font-bold text-[#0D234A]">Explore Our Updated Clinical Services</h2>
    <p class="text-[15px] text-[#64748B] leading-relaxed max-w-2xl mx-auto">
      Our service portfolio has been updated to provide individualised diagnostic hearing assessments, hearing-aid consultation, speech-language therapy, and NRI parent care coordination at our Chembur clinic.
    </p>
    <div class="flex flex-wrap justify-center gap-4 pt-4">
      <a href="/services" class="px-7 py-3.5 bg-[#087F8C] text-white font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">
        View All Services
      </a>
      <a href="/book-appointment" class="px-7 py-3.5 border border-[#D7E3E8] bg-white text-[#0D234A] font-display font-semibold text-[14px] rounded-lg hover:border-[#087F8C] transition-all">
        Book an Assessment
      </a>
    </div>
  </div>
</section>
`
};
