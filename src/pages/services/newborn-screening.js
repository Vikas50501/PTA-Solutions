const { pageHero } = require('../../partials/layout.js');

module.exports = {
  title: 'Newborn Screening | PTA Solutions Service Detail',
  description: 'Automated OAE and BERA/AABR newborn hearing screening at PTA Solutions, Chembur, Mumbai.',
  active: 'services',
  hero: pageHero({
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Newborn Screening' }],
    badges: [{ label: 'Pediatric' }],
    title: 'Newborn Screening',
    meta: `<span><strong>Duration:</strong> 45-60 Mins</span><span>•</span><span><strong>Screening:</strong> Gentle, Non-Invasive</span><span>•</span><span><strong>Location:</strong> Chembur Clinic or Doorstep</span>`,
  }),
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-6">
      <h2 class="text-[26px] font-display font-bold text-[#0F1E3E]">Gentle, Automated Infant Hearing Screening</h2>
      <p class="text-[16px] text-[#687779] leading-relaxed">
        Automated Otoacoustic Emissions (OAE) and Brainstem Evoked Response (BERA/AABR) evaluations tailored gently for infants and toddlers.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div class="p-5 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#1E3E83] text-[24px]">child_care</span>
          <h4 class="font-display font-bold text-[16px] text-[#0F1E3E] mt-2">Diagnostic Scope</h4>
          <p class="text-[13px] text-[#687779] mt-1">Cochlear hair cell assessment &amp; auditory nerve pathway status.</p>
        </div>
        <div class="p-5 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#1E3E83] text-[24px]">favorite</span>
          <h4 class="font-display font-bold text-[16px] text-[#0F1E3E] mt-2">Recommended For</h4>
          <p class="text-[13px] text-[#687779] mt-1">Infants (0-6 months), high-risk NICU graduates &amp; toddler milestones.</p>
        </div>
      </div>
    </div>
    <div class="lg:col-span-4 bg-[#F7FAF9] p-8 rounded-2xl border-2 border-[#4FC3D9] space-y-6">
      <div>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[#1E3E83]">Screening</span>
        <p class="text-[28px] font-display font-bold text-[#0F1E3E] mt-1">Gentle Screening</p>
        <p class="text-[12px] text-[#687779] mt-1">Duration: 45-60 Mins • Chembur Clinic or Doorstep</p>
      </div>
      <a href="/booking/newborn-screening" class="block text-center w-full py-3.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[14px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-md">
        Book Newborn Screening
      </a>
    </div>
  </div>
</section>
`
};
