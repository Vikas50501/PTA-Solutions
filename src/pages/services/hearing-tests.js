const { pageHero } = require('../../partials/layout.js');

module.exports = {
  title: 'Hearing Tests | PTA Solutions Service Detail',
  description: 'Pure Tone Audiometry (PTA) in a calibrated ISO booth, tympanometry & acoustic reflexes at PTA Solutions, Chembur, Mumbai. From ₹1,500.',
  active: 'services',
  hero: pageHero({
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Hearing Tests' }],
    badges: [{ label: 'Audiology • Diagnostic' }],
    title: 'Hearing Tests',
    meta: `<span><strong>Duration:</strong> 45 Mins</span><span>•</span><span><strong>Price:</strong> From ₹1,500</span><span>•</span><span><strong>Location:</strong> Chembur Clinic or Doorstep</span>`,
  }),
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-6">
      <h2 class="text-[26px] font-display font-bold text-[#122326]">Comprehensive Diagnostic Audiometry</h2>
      <p class="text-[16px] text-[#687779] leading-relaxed">
        Comprehensive Pure Tone Audiometry (air and bone conduction) in a calibrated ISO sound isolation booth plus tympanometry acoustic reflex testing.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div class="p-5 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#006A6A] text-[24px]">hearing</span>
          <h4 class="font-display font-bold text-[16px] text-[#122326] mt-2">Diagnostic Scope</h4>
          <p class="text-[13px] text-[#687779] mt-1">Full octave threshold plotting (250Hz - 8000Hz) &amp; middle ear fluid analysis.</p>
        </div>
        <div class="p-5 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#006A6A] text-[24px]">groups</span>
          <h4 class="font-display font-bold text-[16px] text-[#122326] mt-2">Recommended For</h4>
          <p class="text-[13px] text-[#687779] mt-1">Adults, seniors, musicians &amp; individuals experiencing muffled speech.</p>
        </div>
      </div>
    </div>
    <div class="lg:col-span-4 bg-[#F7FAF9] p-8 rounded-2xl border-2 border-[#1BBCBC] space-y-6">
      <div>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[#006A6A]">Price</span>
        <p class="text-[28px] font-display font-bold text-[#122326] mt-1">From ₹1,500</p>
        <p class="text-[12px] text-[#687779] mt-1">Duration: 45 Mins • Chembur Clinic or Doorstep</p>
      </div>
      <a href="/booking/hearing-tests" class="block text-center w-full py-3.5 bg-[#1BBCBC] text-[#002020] font-display font-bold text-[14px] rounded-lg hover:bg-[#006A6A] hover:text-white transition-all shadow-md">
        Book Hearing Tests
      </a>
    </div>
  </div>
</section>
`
};
