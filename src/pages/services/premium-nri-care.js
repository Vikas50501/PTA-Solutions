const { pageHero } = require('../../partials/layout.js');

module.exports = {
  title: 'Premium NRI Care | PTA Solutions Service Detail',
  description: 'Premium NRI Care at PTA Solutions: Duration 1 hr, ₹2L to ₹3.5L.',
  active: 'services',
  hero: pageHero({
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Premium NRI Care' }],
    badges: [{ label: 'Global Family Concierge' }],
    title: 'Premium NRI Care',
    meta: `<span><strong>Duration:</strong> 1 hr</span><span>•</span><span><strong>Price:</strong> ₹2L to ₹3.5L</span><span>•</span><span><strong>Location:</strong> Dedicated Visits</span>`,
  }),
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-6">
      <h2 class="text-[26px] font-display font-bold text-[#122326]">Dedicated Home Visits for NRI Families</h2>
      <p class="text-[16px] text-[#687779] leading-relaxed">
        Specialized home visits, parent progress reports &amp; remote video updates for overseas families.
      </p>
    </div>
    <div class="lg:col-span-4 bg-[#F7FAF9] p-8 rounded-2xl border-2 border-[#1BBCBC] space-y-6">
      <div>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[#006A6A]">Price</span>
        <p class="text-[28px] font-display font-bold text-[#122326] mt-1">₹2L <span class="text-[14px] text-[#687779] font-normal">to ₹3.5L</span></p>
        <p class="text-[12px] text-[#687779] mt-1">Duration: 1 hr • Dedicated Visits</p>
      </div>
      <a href="/booking/premium-nri-care" class="block text-center w-full py-3.5 bg-[#1BBCBC] text-[#002020] font-display font-bold text-[14px] rounded-lg hover:bg-[#006A6A] hover:text-white transition-all shadow-md">
        Enroll NRI Plan
      </a>
    </div>
  </div>
</section>
`
};
