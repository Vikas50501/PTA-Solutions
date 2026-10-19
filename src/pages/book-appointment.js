const { breadcrumbSchema } = require('../partials/layout.js');

const PATH = '/book-appointment';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Book Appointment' }];

module.exports = {
  title: 'Book an Appointment | PTA Solutions Hearing & Speech Care Clinics',
  description: 'Choose a clinical service and book your appointment with PTA Solutions Hearing and Speech Care Clinics, Chembur, Mumbai.',
  active: 'book-appointment',
  path: PATH,
  extraSchema: [breadcrumbSchema(CRUMBS, PATH)],
  hero: `  <section class="py-12 bg-[#F8FAFC] border-b border-[#D7E3E8]">
    <div class="max-w-4xl mx-auto px-6 text-center space-y-2">
      <span class="text-[11px] font-bold uppercase tracking-wider text-[#1797A6]">Care That Starts With Listening</span>
      <h1 class="text-[36px] lg:text-[46px] font-display font-extrabold text-[#0D234A]">Book an Assessment</h1>
      <p class="text-[16px] text-[#64748B]">Select your required service below to request an appointment at our Chembur clinic.</p>
    </div>
  </section>
`,
  body: `
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-5xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- 1. Hearing Tests -->
      <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] flex items-center justify-between hover:border-[#087F8C] transition-all">
        <div>
          <h3 class="font-display font-bold text-[18px] text-[#0D234A]">Hearing Tests &amp; Audiology</h3>
          <p class="text-[13px] text-[#64748B] mt-0.5">Pure Tone Audiometry (PTA) &amp; Tympanometry</p>
        </div>
        <a href="/booking/hearing-tests" class="px-4 py-2 bg-[#0D234A] text-white text-[13px] font-semibold rounded-lg hover:bg-[#1797A6] transition-all whitespace-nowrap">
          Book Appointment
        </a>
      </div>

      <!-- 2. Hearing Aids -->
      <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] flex items-center justify-between hover:border-[#087F8C] transition-all">
        <div>
          <h3 class="font-display font-bold text-[18px] text-[#0D234A]">Hearing Aids &amp; Rehabilitation</h3>
          <p class="text-[13px] text-[#64748B] mt-0.5">Consultation, Trial &amp; Digital Fitting</p>
        </div>
        <a href="/booking/hearing-aids" class="px-4 py-2 bg-[#0D234A] text-white text-[13px] font-semibold rounded-lg hover:bg-[#1797A6] transition-all whitespace-nowrap">
          Book Appointment
        </a>
      </div>

      <!-- 3. Speech Therapy -->
      <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] flex items-center justify-between hover:border-[#087F8C] transition-all">
        <div>
          <h3 class="font-display font-bold text-[18px] text-[#0D234A]">Speech &amp; Language Therapy</h3>
          <p class="text-[13px] text-[#64748B] mt-0.5">Pediatric articulation, delays &amp; adult rehab</p>
        </div>
        <a href="/booking/speech-therapy" class="px-4 py-2 bg-[#0D234A] text-white text-[13px] font-semibold rounded-lg hover:bg-[#1797A6] transition-all whitespace-nowrap">
          Book Appointment
        </a>
      </div>

      <!-- 4. Newborn Screening -->
      <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] flex items-center justify-between hover:border-[#087F8C] transition-all">
        <div>
          <h3 class="font-display font-bold text-[18px] text-[#0D234A]">Newborn &amp; Infant Screening</h3>
          <p class="text-[13px] text-[#64748B] mt-0.5">Gentle, objective OAE &amp; BERA/ABR testing</p>
        </div>
        <a href="/booking/newborn-screening" class="px-4 py-2 bg-[#0D234A] text-white text-[13px] font-semibold rounded-lg hover:bg-[#1797A6] transition-all whitespace-nowrap">
          Book Appointment
        </a>
      </div>

      <!-- 5. NRI Parent Care -->
      <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] flex items-center justify-between hover:border-[#087F8C] transition-all md:col-span-2">
        <div>
          <h3 class="font-display font-bold text-[18px] text-[#0D234A]">NRI Hearing and Speech Care</h3>
          <p class="text-[13px] text-[#64748B] mt-0.5">Assistance for families abroad coordinating care for parents in Mumbai</p>
        </div>
        <a href="/nri-hearing-care#nri-enquiry-section" class="px-4 py-2 bg-[#087F8C] text-white text-[13px] font-semibold rounded-lg hover:bg-[#1797A6] transition-all whitespace-nowrap">
          Enquire for Parents
        </a>
      </div>
    </div>

    <!-- Direct Contact Banner -->
    <div class="mt-8 p-6 bg-[#EEF6F8] rounded-2xl border border-[#D7E3E8] flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <span class="text-[#087F8C] text-[11px] font-bold uppercase tracking-wider">Need Immediate Help?</span>
        <h3 class="font-display font-bold text-[18px] text-[#0D234A] mt-0.5">Call or WhatsApp PTA Solutions Chembur</h3>
        <p class="text-[13px] text-[#64748B]">Our clinical team is available to assist you with scheduling and enquiries.</p>
      </div>
      <div class="flex items-center gap-3">
        <a href="tel:+919773545058" class="px-5 py-2.5 bg-[#0D234A] text-white font-display font-bold text-[13px] rounded-lg hover:bg-[#1797A6] transition-all whitespace-nowrap">
          Call +91 9773545058
        </a>
        <a href="https://wa.me/919773545058" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-emerald-600 text-white font-display font-bold text-[13px] rounded-lg hover:bg-emerald-700 transition-all whitespace-nowrap">
          WhatsApp Us
        </a>
      </div>
    </div>
  </div>
</section>
`
};
