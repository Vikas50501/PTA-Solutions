const { pageHero } = require('../../partials/layout.js');

module.exports = {
  title: 'Complete Care | PTA Solutions Service Detail',
  description: 'Complete Care: a holistic audiology and speech therapy service delivered at your home by PTA Solutions. Duration 1 hr, ₹75,000 to ₹1,50,000.',
  active: 'complete-care',
  hero: pageHero({
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Complete Care' }],
    badges: [{ label: 'Flagship Protocol', solid: true }],
    title: 'Complete Care',
    meta: `<span><strong>Duration:</strong> 1 hr</span><span>•</span><span><strong>Price:</strong> ₹75,000 to ₹1,50,000</span><span>•</span><span><strong>Location:</strong> Customer's Place</span>`,
  }),
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-6">
      <h2 class="text-[26px] font-display font-bold text-[#122326]">Comprehensive In-Home Rehabilitation</h2>
      <div class="p-6 bg-[#F7FAF9] rounded-2xl border border-[#DCE7E6] text-[16px] text-[#122326] leading-relaxed italic">
        "Our Complete Care service offers a holistic approach to audiology, ensuring you receive top-notch hearing and speech therapies. With cutting-edge diagnostics and personalized care plans, our expert team is dedicated to enhancing your auditory experience right at your home. Experience a new level of hearing health with our unparalleled commitment to your well-being!"
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <div class="p-5 bg-white rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#006A6A] text-[24px]">biotech</span>
          <h4 class="font-display font-bold text-[16px] text-[#122326] mt-2">Cutting-Edge Diagnostics</h4>
          <p class="text-[13px] text-[#687779] mt-1">Full pure-tone threshold evaluation, speech discrimination, and acoustic impedance testing at your living room.</p>
        </div>
        <div class="p-5 bg-white rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#006A6A] text-[24px]">tune</span>
          <h4 class="font-display font-bold text-[16px] text-[#122326] mt-2">Real-Ear Acoustic Verification</h4>
          <p class="text-[13px] text-[#687779] mt-1">Real-time probe microphone measurements to verify target audibility curves against clinical prescriptions.</p>
        </div>
        <div class="p-5 bg-white rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#006A6A] text-[24px]">record_voice_over</span>
          <h4 class="font-display font-bold text-[16px] text-[#122326] mt-2">Integrated Speech Therapy</h4>
          <p class="text-[13px] text-[#687779] mt-1">Specialized brain auditory retraining to distinguish consonants in background conversation noise.</p>
        </div>
        <div class="p-5 bg-white rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#006A6A] text-[24px]">support_agent</span>
          <h4 class="font-display font-bold text-[16px] text-[#122326] mt-2">Lifetime Concierge Care</h4>
          <p class="text-[13px] text-[#687779] mt-1">Direct line to Dr. Johnsavio Fernandes with ongoing acoustic check-ins and scheduled battery replenishment.</p>
        </div>
      </div>
    </div>
    <div class="lg:col-span-4 bg-[#F7FAF9] p-8 rounded-2xl border-2 border-[#1BBCBC] space-y-6">
      <div>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[#006A6A]">Service Investment</span>
        <p class="text-[32px] font-display font-bold text-[#122326] mt-1">₹75,000 <span class="text-[14px] text-[#687779] font-normal">to ₹1,50,000</span></p>
        <p class="text-[12px] text-[#687779] mt-1">Duration: 1 hr • Conducted at Customer's Place</p>
      </div>
      <div class="space-y-2 border-t border-[#DCE7E6] pt-4 text-[13px] text-[#122326]">
        <div class="flex items-center gap-2"><span class="material-symbols-outlined text-[#006A6A] text-[18px]">check</span> Complete audiology diagnostic suite</div>
        <div class="flex items-center gap-2"><span class="material-symbols-outlined text-[#006A6A] text-[18px]">check</span> Real environment acoustic adaptation</div>
        <div class="flex items-center gap-2"><span class="material-symbols-outlined text-[#006A6A] text-[18px]">check</span> Customized speech therapy sessions</div>
        <div class="flex items-center gap-2"><span class="material-symbols-outlined text-[#006A6A] text-[18px]">check</span> Zero hidden medical surcharges</div>
      </div>
      <a href="/book-appointment" class="block text-center w-full py-3.5 bg-[#1BBCBC] text-[#002020] font-display font-bold text-[14px] rounded-lg hover:bg-[#006A6A] hover:text-white transition-all shadow-md">
        Talk to Specialist Now
      </a>
    </div>
  </div>
</section>
`
};
