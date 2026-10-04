const { pageHero } = require('../../partials/layout.js');

module.exports = {
  title: 'Speech Therapy | PTA Solutions Service Detail',
  description: 'Pediatric articulation, stammering modification, and adult post-stroke recovery speech therapy at PTA Solutions, Chembur, Mumbai.',
  active: 'services',
  hero: pageHero({
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Speech Therapy' }],
    badges: [{ label: 'Rehabilitation' }],
    title: 'Speech Therapy',
    meta: `<span><strong>Duration:</strong> 45 Mins</span><span>•</span><span><strong>Session Fee:</strong> Personalized</span><span>•</span><span><strong>Location:</strong> Chembur Clinic or Doorstep</span>`,
  }),
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-6">
      <h2 class="text-[26px] font-display font-bold text-[#122326]">Specialized Speech &amp; Language Programs</h2>
      <p class="text-[16px] text-[#687779] leading-relaxed">
        Specialized therapy programs for pediatric articulation, language delay milestones, fluency, adult stroke rehab, and stammering recovery.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div class="p-5 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#006A6A] text-[24px]">record_voice_over</span>
          <h4 class="font-display font-bold text-[16px] text-[#122326] mt-2">Therapy Focus</h4>
          <p class="text-[13px] text-[#687779] mt-1">Pediatric speech delay, articulation, stammering/fluency, and adult voice/stroke rehab.</p>
        </div>
        <div class="p-5 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#006A6A] text-[24px]">groups</span>
          <h4 class="font-display font-bold text-[16px] text-[#122326] mt-2">One-on-One Sessions</h4>
          <p class="text-[13px] text-[#687779] mt-1">Individualized plans led by certified speech-language professionals.</p>
        </div>
      </div>
    </div>
    <div class="lg:col-span-4 bg-[#F7FAF9] p-8 rounded-2xl border-2 border-[#1BBCBC] space-y-6">
      <div>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[#006A6A]">Session Fee</span>
        <p class="text-[28px] font-display font-bold text-[#122326] mt-1">Personalized</p>
        <p class="text-[12px] text-[#687779] mt-1">Duration: 45 Mins • Chembur Clinic or Doorstep</p>
      </div>
      <a href="/booking/speech-therapy" class="block text-center w-full py-3.5 bg-[#1BBCBC] text-[#002020] font-display font-bold text-[14px] rounded-lg hover:bg-[#006A6A] hover:text-white transition-all shadow-md">
        Book Speech Therapy
      </a>
    </div>
  </div>
</section>
`
};
