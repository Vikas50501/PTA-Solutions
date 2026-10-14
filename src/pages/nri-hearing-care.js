const { pageHero, breadcrumbSchema, imageThumb, imagePlaceholder, sectionHeading } = require('../partials/layout.js');

const PATH = '/nri-hearing-care';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'NRI Hearing Care' }];

module.exports = {
  title: 'NRI Hearing Care for Parents in Mumbai | PTA Solutions',
  description: "If your parent lives in Mumbai and you live abroad, PTA Solutions can help you coordinate hearing and speech care appointments and follow-up, with your parent's consent.",
  active: 'nri',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'NRI & Family Hearing-Care Coordination' }],
    title: "You Live Abroad. We Can Help You Coordinate Your Parents' Hearing & Speech Care in Mumbai.",
    subtitle: "If you live in the USA, UK, UAE, Canada, Singapore or elsewhere and your parent lives in Mumbai, we can help you enquire about appointments, understand recommended next steps and coordinate follow-up, with the patient's consent.",
  }),
  path: PATH,
  extraSchema: [breadcrumbSchema(CRUMBS, PATH)],
  body: `
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div class="lg:col-span-6 space-y-6">
      <h2 class="text-[28px] font-display font-bold text-[#0D234A]">Distance Should Not Mean Compromised Auditory Health</h2>
      <p class="text-[15px] text-[#64748B] leading-relaxed">
        Managing elderly healthcare from London, Dubai, the US, or Singapore presents unique logistical anxiety. PTA Solutions provides a structured clinical bridge right to your parents' doorstep across Greater Mumbai.
      </p>
      <div class="space-y-3">
        <div class="p-4 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8] flex gap-3">
          <span class="material-symbols-outlined text-[#1797A6]">home</span>
          <div>
            <p class="font-display font-bold text-[15px] text-[#0D234A]">Doorstep Audiological Testing</p>
            <p class="text-[13px] text-[#64748B]">Calibrated portable equipment brought directly into their living room.</p>
          </div>
        </div>
        <div class="p-4 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8] flex gap-3">
          <span class="material-symbols-outlined text-[#1797A6]">chat</span>
          <div>
            <p class="font-display font-bold text-[15px] text-[#0D234A]">Direct WhatsApp Updates for Children Abroad</p>
            <p class="text-[13px] text-[#64748B]">Detailed audiograms, video consultation summaries, and progress milestones.</p>
          </div>
        </div>
        <div class="p-4 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8] flex gap-3">
          <span class="material-symbols-outlined text-[#1797A6]">sync</span>
          <div>
            <p class="font-display font-bold text-[15px] text-[#0D234A]">Scheduled Servicing &amp; Battery Refills</p>
            <p class="text-[13px] text-[#64748B]">Routine ear wax checks, filter replacements, and acoustic reprogramming.</p>
          </div>
        </div>
      </div>
      <div class="flex flex-wrap gap-4 pt-2">
        <a href="/booking/premium-nri-care" class="px-7 py-3 bg-[#087F8C] text-[#0D234A] font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
          Book Consultation (₹2L - ₹3.5L)
        </a>
        <a href="https://wa.me/919773545058" target="_blank" rel="noopener noreferrer" class="px-7 py-3 border border-emerald-500 text-emerald-700 bg-emerald-50 font-display font-bold text-[14px] rounded-lg hover:bg-emerald-100 transition-all flex items-center gap-2">
          <span class="material-symbols-outlined text-[18px]">chat</span> Chat on WhatsApp
        </a>
      </div>
    </div>
    <div class="lg:col-span-6 space-y-6">
      ${imagePlaceholder({ icon: 'family_restroom', label: 'NRI Family Care in Mumbai', caption: 'Doorstep visits for parents at home' })}
      <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8]">
        <h3 class="font-display font-bold text-[18px] text-[#0D234A] mb-3">Service Options for NRI Families:</h3>
        <div class="space-y-3 text-[14px]">
          <div class="flex justify-between items-center pb-2 border-b border-[#D7E3E8]">
            <div>
              <strong class="text-[#0D234A]">Complete Care</strong>
              <p class="text-[12px] text-[#64748B]">1 hr • Customer's Place</p>
            </div>
            <div class="text-right">
              <span class="font-bold text-[#1797A6]">₹75,000 to ₹1,50,000</span>
              <a href="/services/complete-care" class="block text-[12px] text-[#1797A6] hover:underline">Talk to Specialist Now</a>
            </div>
          </div>
          <div class="flex justify-between items-center pb-2 border-b border-[#D7E3E8]">
            <div>
              <strong class="text-[#0D234A]">Basic Consultation</strong>
              <p class="text-[12px] text-[#64748B]">1 hr • Clinic / Home</p>
            </div>
            <div class="text-right">
              <span class="font-bold text-[#0D234A]">₹10,000 to ₹20,000</span>
              <a href="/booking/basic-consultation" class="block text-[12px] text-[#1797A6] hover:underline">Book Now</a>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <div>
              <strong class="text-[#0D234A]">Premium NRI Care</strong>
              <p class="text-[12px] text-[#64748B]">1 hr • Dedicated Visits</p>
            </div>
            <div class="text-right">
              <span class="font-bold text-[#0D234A]">₹2L to ₹3.5L</span>
              <a href="/booking/premium-nri-care" class="block text-[12px] text-[#1797A6] hover:underline">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-[#F8FAFC] border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'How NRI Care Works', title: 'A Simple, Dependable Process', align: 'center' })}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
      <div class="bg-white p-5 rounded-2xl border border-[#D7E3E8]">
        ${imageThumb({ icon: 'home', label: 'Doorstep Visit' })}
        <h4 class="font-display font-bold text-[15px] text-[#0D234A]">1. Doorstep Visit</h4>
        <p class="text-[12.5px] text-[#64748B] mt-1.5">Our team visits your parents' home in Mumbai with portable diagnostic equipment.</p>
      </div>
      <div class="bg-white p-5 rounded-2xl border border-[#D7E3E8]">
        ${imageThumb({ icon: 'chat', label: 'WhatsApp Update' })}
        <h4 class="font-display font-bold text-[15px] text-[#0D234A]">2. WhatsApp Update</h4>
        <p class="text-[12.5px] text-[#64748B] mt-1.5">You receive a summary and audiogram directly on WhatsApp, wherever you are.</p>
      </div>
      <div class="bg-white p-5 rounded-2xl border border-[#D7E3E8]">
        ${imageThumb({ icon: 'video_call', label: 'Tele-Consultation' })}
        <h4 class="font-display font-bold text-[15px] text-[#0D234A]">3. Tele-Consultation</h4>
        <p class="text-[12.5px] text-[#64748B] mt-1.5">Join a video call to discuss results and care plans with our clinical team.</p>
      </div>
      <div class="bg-white p-5 rounded-2xl border border-[#D7E3E8]">
        ${imageThumb({ icon: 'event_repeat', label: 'Ongoing Check-Ins' })}
        <h4 class="font-display font-bold text-[15px] text-[#0D234A]">4. Ongoing Check-Ins</h4>
        <p class="text-[12.5px] text-[#64748B] mt-1.5">Scheduled follow-up visits keep your parents' hearing health on track.</p>
      </div>
    </div>
  </div>
</section>
`
};
