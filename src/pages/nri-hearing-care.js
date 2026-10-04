const { pageHero } = require('../partials/layout.js');

module.exports = {
  title: 'NRI Hearing Care | PTA Solutions Mumbai',
  description: "Living abroad? PTA Solutions brings complete home-based hearing care to your parents in Mumbai, with regular updates so you never have to worry from miles away.",
  active: 'nri',
  hero: pageHero({
    crumbs: [{ label: 'Home', href: '/' }, { label: 'NRI Hearing Care' }],
    badges: [{ label: 'We Only Have One Home' }, { label: 'Act Now' }],
    title: "Living Abroad? We Take Care of Your Parents' Hearing in Mumbai",
    subtitle: "Complete home-based hearing care with regular updates—so you don't have to worry from miles away.",
  }),
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div class="lg:col-span-6 space-y-6">
      <h2 class="text-[28px] font-display font-bold text-[#122326]">Distance Should Not Mean Compromised Auditory Health</h2>
      <p class="text-[15px] text-[#687779] leading-relaxed">
        Managing elderly healthcare from London, Dubai, the US, or Singapore presents unique logistical anxiety. PTA Solutions provides a structured clinical bridge right to your parents' doorstep across Greater Mumbai.
      </p>
      <div class="space-y-3">
        <div class="p-4 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6] flex gap-3">
          <span class="material-symbols-outlined text-[#006A6A]">home</span>
          <div>
            <p class="font-display font-bold text-[15px] text-[#122326]">Doorstep Audiological Testing</p>
            <p class="text-[13px] text-[#687779]">Calibrated portable equipment brought directly into their living room.</p>
          </div>
        </div>
        <div class="p-4 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6] flex gap-3">
          <span class="material-symbols-outlined text-[#006A6A]">chat</span>
          <div>
            <p class="font-display font-bold text-[15px] text-[#122326]">Direct WhatsApp Updates for Children Abroad</p>
            <p class="text-[13px] text-[#687779]">Detailed audiograms, video consultation summaries, and progress milestones.</p>
          </div>
        </div>
        <div class="p-4 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6] flex gap-3">
          <span class="material-symbols-outlined text-[#006A6A]">sync</span>
          <div>
            <p class="font-display font-bold text-[15px] text-[#122326]">Scheduled Servicing &amp; Battery Refills</p>
            <p class="text-[13px] text-[#687779]">Routine ear wax checks, filter replacements, and acoustic reprogramming.</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-4 pt-2">
        <a href="/booking/premium-nri-care" class="px-7 py-3 bg-[#1BBCBC] text-[#002020] font-display font-bold text-[14px] rounded-lg hover:bg-[#006A6A] hover:text-white transition-all">
          Book Consultation (₹2L - ₹3.5L)
        </a>
        <a href="https://wa.me/919773545058" target="_blank" rel="noopener noreferrer" class="px-7 py-3 border border-emerald-500 text-emerald-700 bg-emerald-50 font-display font-bold text-[14px] rounded-lg hover:bg-emerald-100 transition-all flex items-center gap-2">
          <span class="material-symbols-outlined text-[18px]">chat</span> Chat on WhatsApp
        </a>
      </div>
    </div>
    <div class="lg:col-span-6 space-y-6">
      <img src="https://lh3.googleusercontent.com/aida/AEtjO1UyvGvbDskN31EADDxLoChQsP8SjYbzTDESWn3d1H4lSrtCk5hOqn3noPWaav2E1Sje0kQYJqixek_kgg1xszLGJiZPVUcZ5_2gRgXXBZSoSW9WOFPe3UqWhTarjN5tYZAsSaeAM5AChTCAv2kEqHyFsKxK38A3Ofqh4JdXWJjJDM5lUgAz7dwR_lAmyjcDeNNDmdhx8EEXLJ2Bf6S8BAFQ2SpDOYVcJX_8in5zVanrpkayHlGL5fd_Mw" alt="Parent & family care at home in Mumbai" class="rounded-2xl border border-[#DCE7E6] shadow-md w-full">
      <div class="p-6 bg-[#F7FAF9] rounded-2xl border border-[#DCE7E6]">
        <h3 class="font-display font-bold text-[18px] text-[#122326] mb-3">Service Options for NRI Families:</h3>
        <div class="space-y-3 text-[14px]">
          <div class="flex justify-between items-center pb-2 border-b border-[#DCE7E6]">
            <div>
              <strong class="text-[#122326]">Complete Care</strong>
              <p class="text-[12px] text-[#687779]">1 hr • Customer's Place</p>
            </div>
            <div class="text-right">
              <span class="font-bold text-[#006A6A]">₹75,000 to ₹1,50,000</span>
              <a href="/services/complete-care" class="block text-[12px] text-[#006A6A] hover:underline">Talk to Specialist Now</a>
            </div>
          </div>
          <div class="flex justify-between items-center pb-2 border-b border-[#DCE7E6]">
            <div>
              <strong class="text-[#122326]">Basic Consultation</strong>
              <p class="text-[12px] text-[#687779]">1 hr • Clinic / Home</p>
            </div>
            <div class="text-right">
              <span class="font-bold text-[#122326]">₹10,000 to ₹20,000</span>
              <a href="/booking/basic-consultation" class="block text-[12px] text-[#006A6A] hover:underline">Book Now</a>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div>
              <strong class="text-[#122326]">Premium NRI Care</strong>
              <p class="text-[12px] text-[#687779]">1 hr • Dedicated Visits</p>
            </div>
            <div class="text-right">
              <span class="font-bold text-[#122326]">₹2L to ₹3.5L</span>
              <a href="/booking/premium-nri-care" class="block text-[12px] text-[#006A6A] hover:underline">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`
};
