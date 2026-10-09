const { pageHero, breadcrumbSchema } = require('../../partials/layout.js');

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
    subtitle: 'At PTA SOLUTIONS Hearing and Speech Care Clinics, we bring advanced hearing and speech therapy services to Mumbai — combining world-class diagnostics with genuine personal care.',
  }),
  path: PATH,
  extraSchema: [breadcrumbSchema(CRUMBS, PATH)],
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="p-8 bg-[#F7FAF9] rounded-2xl border border-[#DCE7E6] space-y-4 flex flex-col justify-between">
        <div>
          <span class="font-mono text-[12px] font-bold text-[#1E3E83]">01 • AUDIOLOGY</span>
          <h3 class="text-[22px] font-display font-bold text-[#0F1E3E] mt-1">Hearing Tests</h3>
          <p class="text-[14px] text-[#687779] mt-2">Comprehensive Pure Tone Audiometry (air and bone conduction) in a calibrated ISO sound isolation booth plus tympanometry acoustic reflex testing.</p>
        </div>
        <a href="/services/hearing-tests" class="w-full text-center py-2.5 bg-white border border-[#DCE7E6] font-display font-bold text-[13px] text-[#1E3E83] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all">
          Explore Hearing Tests →
        </a>
      </div>
      <div class="p-8 bg-[#F7FAF9] rounded-2xl border border-[#DCE7E6] space-y-4 flex flex-col justify-between">
        <div>
          <span class="font-mono text-[12px] font-bold text-[#1E3E83]">02 • DISPENSING</span>
          <h3 class="text-[22px] font-display font-bold text-[#0F1E3E] mt-1">Hearing Aids</h3>
          <p class="text-[14px] text-[#687779] mt-2">Authorized fitting of Swiss and Danish digital hearing instruments with probe-microphone Real-Ear Measurements (REM) and free home trials.</p>
        </div>
        <a href="/services/hearing-aids" class="w-full text-center py-2.5 bg-white border border-[#DCE7E6] font-display font-bold text-[13px] text-[#1E3E83] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all">
          Explore Hearing Aids →
        </a>
      </div>
      <div class="p-8 bg-[#F7FAF9] rounded-2xl border border-[#DCE7E6] space-y-4 flex flex-col justify-between">
        <div>
          <span class="font-mono text-[12px] font-bold text-[#1E3E83]">03 • REHABILITATION</span>
          <h3 class="text-[22px] font-display font-bold text-[#0F1E3E] mt-1">Speech Therapy</h3>
          <p class="text-[14px] text-[#687779] mt-2">Specialized therapy programs for pediatric articulation, language delay milestones, fluency, adult stroke rehab, and stammering recovery.</p>
        </div>
        <a href="/services/speech-therapy" class="w-full text-center py-2.5 bg-white border border-[#DCE7E6] font-display font-bold text-[13px] text-[#1E3E83] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all">
          Explore Speech Therapy →
        </a>
      </div>
      <div class="p-8 bg-[#F7FAF9] rounded-2xl border border-[#DCE7E6] space-y-4 flex flex-col justify-between">
        <div>
          <span class="font-mono text-[12px] font-bold text-[#1E3E83]">04 • PEDIATRIC</span>
          <h3 class="text-[22px] font-display font-bold text-[#0F1E3E] mt-1">Newborn Screening</h3>
          <p class="text-[14px] text-[#687779] mt-2">Automated Otoacoustic Emissions (OAE) and Brainstem Evoked Response (BERA/AABR) evaluations tailored gently for infants and toddlers.</p>
        </div>
        <a href="/services/newborn-screening" class="w-full text-center py-2.5 bg-white border border-[#DCE7E6] font-display font-bold text-[13px] text-[#1E3E83] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all">
          Explore Newborn Screening →
        </a>
      </div>
      <div class="p-8 bg-[#F7FAF9] rounded-2xl border border-[#DCE7E6] space-y-4 flex flex-col justify-between">
        <div>
          <span class="font-mono text-[12px] font-bold text-[#1E3E83]">05 • GLOBAL DESK</span>
          <h3 class="text-[22px] font-display font-bold text-[#0F1E3E] mt-1">NRI Hearing Care</h3>
          <p class="text-[14px] text-[#687779] mt-2">Dedicated elder care for parents residing in Mumbai with children living overseas. Includes doorstep visits and WhatsApp telemetry.</p>
        </div>
        <a href="/nri-hearing-care" class="w-full text-center py-2.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[13px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all">
          View NRI Care Details →
        </a>
      </div>
      <div class="p-8 bg-[#0F1E3E] text-white rounded-2xl border border-gray-800 space-y-4 flex flex-col justify-between">
        <div>
          <span class="font-mono text-[12px] font-bold text-[#4FC3D9]">FLAGSHIP SUITE</span>
          <h3 class="text-[22px] font-display font-bold text-white mt-1">Complete Care</h3>
          <p class="text-[14px] text-gray-300 mt-2">All-in-one audiology, home testing, real-ear verification, and tailored speech rehabilitation suite (₹75k to ₹1.5L).</p>
        </div>
        <a href="/services/complete-care" class="w-full text-center py-2.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[13px] rounded-lg hover:bg-white transition-all">
          Complete Care Deep Dive →
        </a>
      </div>
    </div>
    <div class="p-8 bg-[#F1F4F3] rounded-2xl border border-[#DCE7E6] flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
      <div>
        <h3 class="text-[22px] font-display font-bold text-[#0F1E3E]">Find the right care for you</h3>
        <p class="text-[14px] text-[#687779] mt-1">Connect directly with Dr. Johnsavio Fernandes at our Chembur clinic or schedule home audiology.</p>
      </div>
      <a href="/book-appointment" class="px-8 py-3 bg-[#0F1E3E] text-white font-display font-bold text-[14px] rounded-lg hover:bg-[#1E3E83] transition-all whitespace-nowrap">
        Book Appointment
      </a>
    </div>
  </div>
</section>
`
};
