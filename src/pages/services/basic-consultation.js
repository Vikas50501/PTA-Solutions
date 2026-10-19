const { pageHero, breadcrumbSchema } = require('../../partials/layout.js');

const PATH = '/services/basic-consultation';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Basic Consultation' }];

module.exports = {
  title: 'Consultation & Assessment | PTA Solutions Chembur, Mumbai',
  description: 'Explore diagnostic hearing tests and speech therapy assessments at PTA Solutions, Chembur, Mumbai.',
  active: 'services',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Clinical Assessment' }],
    title: 'Hearing & Speech Consultation',
  }),
  path: PATH,
  extraSchema: [breadcrumbSchema(CRUMBS, PATH)],
  body: `
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
    <div class="w-16 h-16 mx-auto rounded-2xl bg-[#EEF6F8] flex items-center justify-center text-[#087F8C]">
      <span class="material-symbols-outlined text-[32px]">medical_services</span>
    </div>
    <h2 class="text-[26px] font-display font-bold text-[#0D234A]">Explore Our Clinical Assessment Services</h2>
    <p class="text-[15px] text-[#64748B] leading-relaxed max-w-2xl mx-auto">
      For comprehensive hearing assessments, middle-ear tests, hearing-aid guidance, or speech therapy, please explore our dedicated service pathways.
    </p>
    <div class="flex flex-wrap justify-center gap-4 pt-4">
      <a href="/services/hearing-tests" class="px-7 py-3.5 bg-[#087F8C] text-white font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">
        Explore Hearing Tests
      </a>
      <a href="/services/speech-therapy" class="px-7 py-3.5 border border-[#D7E3E8] bg-white text-[#0D234A] font-display font-semibold text-[14px] rounded-lg hover:border-[#087F8C] transition-all">
        Explore Speech Therapy
      </a>
    </div>
  </div>
</section>
`
};
