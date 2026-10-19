const {
  pageHero, sectionHeading, benefitGrid, processSteps,
  faqAccordion, relatedServices, breadcrumbSchema, serviceSchema, faqSchema,
} = require('../../partials/layout.js');

const PATH = '/services/newborn-screening';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Newborn Screening' }];

const FAQS = [
  { q: 'Is the assessment safe and painless for my baby?', a: 'Yes. Both OAE and BERA/ABR testing are gentle, non-invasive, and completely painless.' },
  { q: 'Can testing be conducted while the baby sleeps?', a: 'Yes. Infant hearing assessments are easiest and most accurate when the baby is settled, feeding, or naturally asleep.' },
  { q: 'At what age should screening take place?', a: 'Hearing screening can be carried out in the first few weeks after birth or during early infancy, especially if there were NICU stays or family risk factors.' },
  { q: 'What happens if a screening result is not as expected?', a: 'A screening result does not by itself provide a complete picture of hearing ability. If a result is not as expected, further diagnostic evaluation is explained clearly and scheduled without delay.' },
];

module.exports = {
  title: 'Newborn & Infant Hearing Assessment in Chembur | PTA Solutions',
  description: 'Hearing screening and diagnostic testing for babies using OAE and BERA/ABR when clinically indicated at PTA Solutions, Chembur, Mumbai.',
  active: 'services',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Pediatric Audiology' }],
    title: 'Newborn & Infant Hearing Assessment',
    meta: `<span><strong>Clinic:</strong> PTA SOLUTIONS</span><span>•</span><span><strong>Location:</strong> Chembur Clinic, Mumbai</span><span>•</span><span><strong>Testing:</strong> OAE &amp; BERA / ABR</span>`,
  }),
  path: PATH,
  extraSchema: [
    breadcrumbSchema(CRUMBS, PATH),
    serviceSchema({ name: 'Newborn & Infant Hearing Assessment', description: 'Hearing screening and diagnostic testing for babies, using appropriate tests such as OAE or ABR/BERA when available and clinically indicated.', path: PATH }),
    faqSchema(FAQS),
  ],
  body: `
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-12">
      <div class="space-y-4">
        <h2 class="text-[26px] font-display font-bold text-[#0D234A]">Gentle Hearing Assessment for Babies &amp; Infants</h2>
        <p class="text-[15px] text-[#64748B] leading-relaxed">
          Hearing screening and diagnostic testing for babies, using appropriate tests such as OAE or ABR/BERA when available and clinically indicated. The appropriate test depends on the baby's age, history and screening results.
        </p>
        <p class="text-[15px] text-[#64748B] leading-relaxed">
          Early identification of hearing differences provides families with the opportunity to take timely, well-informed steps during the crucial early stages of speech and communication development. Assessments are conducted gently in a quiet, reassuring environment.
        </p>
      </div>

      <!-- Tests D and E Detailed -->
      <div class="space-y-6">
        <div>
          <span class="text-[11px] font-bold uppercase tracking-widest text-[#1797A6]">Assessment Methods</span>
          <h2 class="text-[22px] font-display font-bold text-[#0D234A] mt-1">Screening &amp; Diagnostic Technologies</h2>
        </div>

        <!-- OAE -->
        <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">D</span>
            <div>
              <h3 class="text-[19px] font-display font-bold text-[#0D234A]">Otoacoustic Emissions (OAE) Test</h3>
              <p class="text-[12px] font-semibold text-[#1797A6] uppercase tracking-wider">Inner Ear &amp; Hair Cell Response</p>
            </div>
          </div>
          <p class="text-[14.5px] text-[#1F2937] leading-relaxed">
            OAE testing checks for sound responses produced by the inner ear, particularly the outer hair cells. It is commonly used in newborn hearing screening and may also be used as part of an audiological assessment.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-[13px]">
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">Who may benefit?</p>
              <p class="text-[#64748B] leading-relaxed">Newborns, infants and other patients when OAE testing is clinically indicated.</p>
            </div>
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">What to expect:</p>
              <p class="text-[#64748B] leading-relaxed">A small probe is placed in the ear canal to deliver sounds and record the ear's response. The test is generally painless.</p>
            </div>
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">Results:</p>
              <p class="text-[#64748B] leading-relaxed">A screening result does not by itself provide a complete picture of hearing ability. If a result is not as expected, further testing may be needed.</p>
            </div>
          </div>
        </div>

        <!-- BERA / ABR -->
        <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">E</span>
            <div>
              <h3 class="text-[19px] font-display font-bold text-[#0D234A]">BERA / ABR Hearing Assessment</h3>
              <p class="text-[12px] font-semibold text-[#1797A6] uppercase tracking-wider">Auditory Brainstem Response</p>
            </div>
          </div>
          <p class="text-[14.5px] text-[#1F2937] leading-relaxed">
            BERA, also called ABR, is an objective hearing assessment that records electrical responses from the auditory pathway in response to sound. It can help estimate hearing sensitivity and assess the auditory pathway, depending on the test protocol.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-[13px]">
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">Who may benefit?</p>
              <p class="text-[#64748B] leading-relaxed">Babies and children who need further hearing assessment, or other patients for whom objective testing is indicated.</p>
            </div>
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">What to expect:</p>
              <p class="text-[#64748B] leading-relaxed">Small electrodes are placed on the skin and sounds are presented through earphones or suitable transducers. The patient needs to remain sufficiently still; the preparation and testing requirements vary with age and clinical circumstances.</p>
            </div>
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">Results:</p>
              <p class="text-[#64748B] leading-relaxed">The clinician interprets the recorded responses and explains whether additional tests or referral are needed.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Process Steps -->
      <div>
        <span class="text-[11px] font-bold uppercase tracking-widest text-[#1797A6]">Your Clinical Journey</span>
        <h2 class="text-[22px] font-display font-bold text-[#0D234A] mb-2 mt-1">Your Journey to Better Hearing &amp; Communication</h2>
        <p class="text-[14.5px] text-[#64748B] leading-relaxed mb-6">
          Every person's hearing and communication needs are different. We take time to understand your concerns, carry out the appropriate assessment, explain the findings and guide you towards the next steps in your care.
        </p>
        ${processSteps([
          { icon: 'forum', title: '1. Tell Us Your Concerns', desc: 'We discuss your baby’s birth history, newborn screening records, and any parental observations.' },
          { icon: 'child_care', title: '2. Complete the Appropriate Assessment', desc: 'Gentle OAE or BERA/ABR testing carried out in a calm, soothing environment.' },
          { icon: 'description', title: '3. Understand Your Results', desc: 'We explain the findings clearly and answer questions without technical jargon.' },
          { icon: 'support_agent', title: '4. Plan Your Next Steps', desc: 'Where appropriate, we discuss milestone tracking, repeat testing or pediatric referral.' },
        ])}
      </div>

      <!-- Related Services -->
      <div>
        ${sectionHeading({ eyebrow: 'Other Services', title: 'Explore Additional Care' })}
        <div class="mt-5">
          ${relatedServices([
            { icon: 'record_voice_over', title: 'Speech Therapy', desc: 'Support for speech and language milestone development as your child grows.', href: '/services/speech-therapy' },
            { icon: 'hearing', title: 'Hearing Tests', desc: 'Comprehensive Pure Tone Audiometry and middle-ear diagnostics.', href: '/services/hearing-tests' },
            { icon: 'public', title: 'NRI Parent Care Coordination', desc: 'Helping families abroad coordinate care for parents in Mumbai.', href: '/nri-hearing-care' },
          ])}
        </div>
      </div>
    </div>

    <!-- Sidebar Sticky -->
    <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
      <div class="relative bg-white p-3 border border-[#D7E3E8] rounded-2xl shadow-md">
        <img src="/assets/stock/newborn-screening.webp" alt="Newborn hearing test at PTA Solutions" class="w-full h-auto aspect-[4/3] object-cover rounded-xl">
      </div>
      <div class="bg-[#F8FAFC] p-6 rounded-2xl border-2 border-[#087F8C] space-y-4">
        <div class="flex items-center gap-2 text-[13px] text-[#0D234A]">
          <span class="material-symbols-outlined text-[#1797A6] text-[18px]">location_on</span>
          <span class="font-semibold">Chembur Clinic, Mumbai</span>
        </div>
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-[#1797A6]">Care That Starts With Listening</span>
          <p class="text-[15px] font-display font-medium text-[#0D234A] mt-1">Gentle, Objective Infant Hearing Screening</p>
        </div>
        <div class="pt-2 border-t border-[#D7E3E8] space-y-2 text-[13px] text-[#64748B]">
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-[#087F8C] text-[18px] shrink-0 mt-0.5">check_circle</span>
            <span>Non-invasive &amp; completely painless</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-[#087F8C] text-[18px] shrink-0 mt-0.5">check_circle</span>
            <span>Quiet, comforting clinical environment</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-[#087F8C] text-[18px] shrink-0 mt-0.5">check_circle</span>
            <span>Clear parent guidance &amp; next steps</span>
          </div>
        </div>
        <a href="/book-appointment" class="block text-center w-full py-3.5 bg-[#087F8C] text-white font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">
          Book Infant Hearing Assessment
        </a>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-[#F8FAFC] border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Common Questions', title: 'Newborn Screening FAQs', align: 'center' })}
    ${faqAccordion(FAQS)}
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-6 text-center space-y-5">
    <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0D234A]">Ensure early hearing health for your little one.</h2>
    <p class="text-[15px] text-[#64748B]">Book a gentle screening session at our Chembur clinic. We guide you through every finding with patience and care.</p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a href="/book-appointment" class="px-7 py-3.5 bg-[#087F8C] text-white font-display font-bold text-[15px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">Book Infant Hearing Assessment</a>
      <a href="tel:+919773545058" class="px-7 py-3.5 border border-[#D7E3E8] bg-white text-[#0D234A] font-display font-semibold text-[15px] rounded-lg hover:border-[#087F8C] transition-all">Call +91 9773545058</a>
    </div>
  </div>
</section>
`
};
