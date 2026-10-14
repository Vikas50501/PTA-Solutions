const { pageHero, breadcrumbSchema, imageThumb, imageBanner } = require('../../partials/layout.js');

const PATH = '/services';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services' }];

module.exports = {
  title: 'Hearing & Speech Services in Chembur, Mumbai | PTA Solutions',
  description: 'Explore PTA Solutions services: Hearing Tests, Hearing Aids, Speech Therapy, Newborn Screening, NRI Hearing Care, and Complete Care in Chembur, Mumbai.',
  active: 'services',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Clinical Directory' }],
    title: 'Services Directory',
    subtitle: 'At PTA Solutions Hearing and Speech Care Clinics, we bring hearing and speech therapy services to Mumbai — combining clinical diagnostics with genuine personal care.',
  }),
  path: PATH,
  extraSchema: [breadcrumbSchema(CRUMBS, PATH)],
  body: `
${imageBanner({ icon: 'graphic_eq', label: 'PTA Solutions Clinic, Chembur', caption: 'Calibrated diagnostic suite and consultation rooms' })}
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="p-8 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4 flex flex-col justify-between">
        <div>
          ${imageThumb({ icon: 'hearing', label: 'Hearing Tests' })}
          <span class="font-mono text-[12px] font-bold text-[#1797A6]">01 • AUDIOLOGY</span>
          <h3 class="text-[22px] font-display font-bold text-[#0D234A] mt-1">Hearing Tests</h3>
          <p class="text-[14px] text-[#64748B] mt-2">Comprehensive Pure Tone Audiometry (air and bone conduction) in a calibrated ISO sound isolation booth plus tympanometry acoustic reflex testing.</p>
        </div>
        <a href="/services/hearing-tests" class="w-full text-center py-2.5 bg-white border border-[#D7E3E8] font-display font-bold text-[13px] text-[#1797A6] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
          Explore Hearing Tests →
        </a>
      </div>
      <div class="p-8 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4 flex flex-col justify-between">
        <div>
          ${imageThumb({ icon: 'hearing_disabled', label: 'Hearing Aids' })}
          <span class="font-mono text-[12px] font-bold text-[#1797A6]">02 • DISPENSING</span>
          <h3 class="text-[22px] font-display font-bold text-[#0D234A] mt-1">Hearing Aids</h3>
          <p class="text-[14px] text-[#64748B] mt-2">Hearing-aid consultation, trial and fitting with probe-microphone Real-Ear Measurements (REM).</p>
        </div>
        <a href="/services/hearing-aids" class="w-full text-center py-2.5 bg-white border border-[#D7E3E8] font-display font-bold text-[13px] text-[#1797A6] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
          Explore Hearing Aids →
        </a>
      </div>
      <div class="p-8 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4 flex flex-col justify-between">
        <div>
          ${imageThumb({ icon: 'record_voice_over', label: 'Speech Therapy' })}
          <span class="font-mono text-[12px] font-bold text-[#1797A6]">03 • REHABILITATION</span>
          <h3 class="text-[22px] font-display font-bold text-[#0D234A] mt-1">Speech Therapy</h3>
          <p class="text-[14px] text-[#64748B] mt-2">Specialized therapy programs for pediatric articulation, language delay milestones, fluency, adult stroke rehab, and stammering recovery.</p>
        </div>
        <a href="/services/speech-therapy" class="w-full text-center py-2.5 bg-white border border-[#D7E3E8] font-display font-bold text-[13px] text-[#1797A6] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
          Explore Speech Therapy →
        </a>
      </div>
      <div class="p-8 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4 flex flex-col justify-between">
        <div>
          ${imageThumb({ icon: 'child_care', label: 'Newborn Screening' })}
          <span class="font-mono text-[12px] font-bold text-[#1797A6]">04 • PEDIATRIC</span>
          <h3 class="text-[22px] font-display font-bold text-[#0D234A] mt-1">Newborn Screening</h3>
          <p class="text-[14px] text-[#64748B] mt-2">Automated Otoacoustic Emissions (OAE) and Brainstem Evoked Response (BERA/AABR) evaluations tailored gently for infants and toddlers.</p>
        </div>
        <a href="/services/newborn-screening" class="w-full text-center py-2.5 bg-white border border-[#D7E3E8] font-display font-bold text-[13px] text-[#1797A6] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
          Explore Newborn Screening →
        </a>
      </div>
      <div class="p-8 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4 flex flex-col justify-between">
        <div>
          ${imageThumb({ icon: 'public', label: 'NRI Hearing Care' })}
          <span class="font-mono text-[12px] font-bold text-[#1797A6]">05 • GLOBAL DESK</span>
          <h3 class="text-[22px] font-display font-bold text-[#0D234A] mt-1">NRI Hearing Care</h3>
          <p class="text-[14px] text-[#64748B] mt-2">Helping families living abroad coordinate hearing-care appointments for parents and family members living in Mumbai.</p>
        </div>
        <a href="/nri-hearing-care" class="w-full text-center py-2.5 bg-[#087F8C] text-[#0D234A] font-display font-bold text-[13px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
          View NRI Care Details →
        </a>
      </div>
      <div class="p-8 bg-[#0D234A] text-white rounded-2xl border border-gray-800 space-y-4 flex flex-col justify-between">
        <div>
          ${imageThumb({ icon: 'favorite', label: 'Complete Care', dark: true })}
          <span class="font-mono text-[12px] font-bold text-[#087F8C]">FLAGSHIP SUITE</span>
          <h3 class="text-[22px] font-display font-bold text-white mt-1">Complete Care</h3>
          <p class="text-[14px] text-gray-300 mt-2">All-in-one audiology, home testing, real-ear verification, and tailored speech rehabilitation suite (₹75k to ₹1.5L).</p>
        </div>
        <a href="/services/complete-care" class="w-full text-center py-2.5 bg-[#087F8C] text-[#0D234A] font-display font-bold text-[13px] rounded-lg hover:bg-white transition-all">
          Complete Care Deep Dive →
        </a>
      </div>
    </div>
    <div class="p-8 bg-[#EEF6F8] rounded-2xl border border-[#D7E3E8] flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
      <div>
        <h3 class="text-[22px] font-display font-bold text-[#0D234A]">Find the right care for you</h3>
        <p class="text-[14px] text-[#64748B] mt-1">Connect directly with Dr. Johnsavio Fernandes at our Chembur clinic or schedule home audiology.</p>
      </div>
      <a href="/book-appointment" class="px-8 py-3 bg-[#0D234A] text-white font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] transition-all whitespace-nowrap">
        Book Appointment
      </a>
    </div>
  </div>
</section>
`
};
