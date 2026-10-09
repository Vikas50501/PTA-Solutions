const { pageHero } = require('../partials/layout.js');

module.exports = {
  title: 'About PTA Solutions | Hearing & Speech Care Clinics, Mumbai',
  description: 'Your trusted partner in hearing and speech wellness, led by Dr. Johnsavio Fernandes at PTA Solutions, Chembur, Mumbai.',
  active: 'about',
  hero: pageHero({
    crumbs: [{ label: 'Home', href: '/' }, { label: 'About' }],
    badges: [{ label: 'ABOUT PTA SOLUTIONS' }],
    title: 'Your Trusted Partner in Hearing and Speech Wellness',
  }),
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div class="lg:col-span-7 space-y-6">
      <div class="p-6 bg-[#F1F4F3] border-l-4 border-[#1E3E83] rounded-r-xl">
        <h3 class="font-display font-bold text-[20px] text-[#1E3E83]">10+ Years of Clinical Experience</h3>
        <p class="text-[15px] text-[#0F1E3E] mt-1 font-medium">Led by Dr. Johnsavio Fernandes, Audiologist and Speech-Language professional in Mumbai.</p>
      </div>
      <p class="text-[16px] text-[#687779] leading-relaxed">
        Our Chembur clinic is founded upon the conviction that auditory and communicative well-being is vital to intellectual vitality, social bonding, and emotional peace. We reject commercial transactional models, ensuring our recommendations remain firmly tied to evidence-based audiological parameters.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div class="p-4 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#1E3E83] text-[24px]">verified</span>
          <p class="font-display font-bold text-[15px] text-[#0F1E3E] mt-2">Accurate Diagnosis</p>
          <p class="text-[12px] text-[#687779] mt-1">Calibrated sound-booth audiometry and impedance testing.</p>
        </div>
        <div class="p-4 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#1E3E83] text-[24px]">balance</span>
          <p class="font-display font-bold text-[15px] text-[#0F1E3E] mt-2">Ethical Standards</p>
          <p class="text-[12px] text-[#687779] mt-1">Zero sales quotas. Independent clinical judgment only.</p>
        </div>
        <div class="p-4 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#1E3E83] text-[24px]">family_restroom</span>
          <p class="font-display font-bold text-[15px] text-[#0F1E3E] mt-2">Newborns to Seniors</p>
          <p class="text-[12px] text-[#687779] mt-1">Compassionate, multi-generational audiology &amp; therapy.</p>
        </div>
      </div>
      <div class="pt-4">
        <a href="/book-appointment" class="inline-block px-7 py-3 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[14px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all">
          Book Consultation with Dr. Johnsavio →
        </a>
      </div>
    </div>
    <div class="lg:col-span-5 bg-[#F7FAF9] p-8 rounded-2xl border border-[#DCE7E6] space-y-6">
      <span class="text-[11px] font-bold uppercase tracking-widest text-[#1E3E83]">Our Mission</span>
      <blockquote class="text-[20px] font-display font-semibold text-[#0F1E3E] italic leading-relaxed">
        "Our mission is simple — to help you reconnect with the world through <span class="text-[#1E3E83] not-italic font-bold">better hearing</span> and <span class="text-[#1E3E83] not-italic font-bold">clearer communication</span> improving your quality of life."
      </blockquote>
      <div class="pt-4 border-t border-[#DCE7E6]">
        <p class="font-display font-bold text-[16px] text-[#0F1E3E]">Dr. Johnsavio Fernandes</p>
        <p class="text-[13px] text-[#687779]">Lead Audiologist &amp; Speech Pathologist</p>
        <p class="text-[12px] text-[#687779] mt-1">Shanmukhapriya HealthCare Center, Chembur, Mumbai</p>
      </div>
    </div>
  </div>
</section>
`
};
