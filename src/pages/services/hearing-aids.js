const { pageHero } = require('../../partials/layout.js');

module.exports = {
  title: 'Hearing Aids | PTA Solutions Service Detail',
  description: 'Swiss & Danish premium digital hearing aids with Real-Ear Measurement verification at PTA Solutions, Chembur, Mumbai.',
  active: 'services',
  hero: pageHero({
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Hearing Aids' }],
    badges: [{ label: 'Dispensing • Fitting' }],
    title: 'Hearing Aids',
    meta: `<span><strong>Duration:</strong> 60 Mins</span><span>•</span><span><strong>Trial:</strong> Free Home Trial</span><span>•</span><span><strong>Location:</strong> Chembur Clinic or Doorstep</span>`,
  }),
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-6">
      <h2 class="text-[26px] font-display font-bold text-[#122326]">Authorized Digital Hearing Aid Dispensing</h2>
      <p class="text-[16px] text-[#687779] leading-relaxed">
        Authorized fitting of Swiss and Danish digital hearing instruments with probe-microphone Real-Ear Measurements (REM) and free home trials.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div class="p-5 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#006A6A] text-[24px]">hearing_disabled</span>
          <h4 class="font-display font-bold text-[16px] text-[#122326] mt-2">Device Options</h4>
          <p class="text-[13px] text-[#687779] mt-1">Invisible-in-canal (IIC), Receiver-in-canal (RIC), Bluetooth AI streaming.</p>
        </div>
        <div class="p-5 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#006A6A] text-[24px]">tune</span>
          <h4 class="font-display font-bold text-[16px] text-[#122326] mt-2">Verified Fitting</h4>
          <p class="text-[13px] text-[#687779] mt-1">Probe-microphone Real-Ear Measurements (REM) confirm your prescriptive target match.</p>
        </div>
      </div>
    </div>
    <div class="lg:col-span-4 bg-[#F7FAF9] p-8 rounded-2xl border-2 border-[#1BBCBC] space-y-6">
      <div>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[#006A6A]">Trial</span>
        <p class="text-[28px] font-display font-bold text-[#122326] mt-1">Free Home Trial</p>
        <p class="text-[12px] text-[#687779] mt-1">Duration: 60 Mins • Chembur Clinic or Doorstep</p>
      </div>
      <a href="/booking/hearing-aids" class="block text-center w-full py-3.5 bg-[#1BBCBC] text-[#002020] font-display font-bold text-[14px] rounded-lg hover:bg-[#006A6A] hover:text-white transition-all shadow-md">
        Book Hearing Aids
      </a>
    </div>
  </div>
</section>
`
};
