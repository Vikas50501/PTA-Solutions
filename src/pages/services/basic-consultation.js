const { pageHero } = require('../../partials/layout.js');

module.exports = {
  title: 'Basic Consultation | PTA Solutions Service Detail',
  description: 'Basic Consultation at PTA Solutions: Duration 1 hr, ₹10,000 to ₹20,000.',
  active: 'services',
  hero: pageHero({
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Basic Consultation' }],
    badges: [{ label: 'In-Clinic Baseline' }],
    title: 'Basic Consultation',
    meta: `<span><strong>Duration:</strong> 1 hr</span><span>•</span><span><strong>Price:</strong> ₹10,000 to ₹20,000</span><span>•</span><span><strong>Location:</strong> Clinic / Home</span>`,
  }),
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-6">
      <h2 class="text-[26px] font-display font-bold text-[#122326]">Baseline Audiological Assessment</h2>
      <p class="text-[16px] text-[#687779] leading-relaxed">
        Baseline audiological assessment for individuals seeking clarity on hearing or speech.
      </p>
    </div>
    <div class="lg:col-span-4 bg-[#F7FAF9] p-8 rounded-2xl border-2 border-[#1BBCBC] space-y-6">
      <div>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[#006A6A]">Price</span>
        <p class="text-[28px] font-display font-bold text-[#122326] mt-1">₹10,000 <span class="text-[14px] text-[#687779] font-normal">to ₹20,000</span></p>
        <p class="text-[12px] text-[#687779] mt-1">Duration: 1 hr • Clinic / Home</p>
      </div>
      <a href="/booking/basic-consultation" class="block text-center w-full py-3.5 bg-[#1BBCBC] text-[#002020] font-display font-bold text-[14px] rounded-lg hover:bg-[#006A6A] hover:text-white transition-all shadow-md">
        Book Evaluation
      </a>
    </div>
  </div>
</section>
`
};
