const {
  pageHero, sectionHeading, benefitGrid, processSteps,
  faqAccordion, relatedServices, breadcrumbSchema, serviceSchema, faqSchema,
} = require('../../partials/layout.js');

const PATH = '/services/hearing-tests';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Hearing Tests' }];

const FAQS = [
  { q: 'What happens during a hearing test?', a: 'A hearing test measures how well you hear sounds across different pitches and volumes. Depending on your symptoms and clinical needs, it may include Pure Tone Audiometry along with middle-ear function tests (tympanometry) or speech recognition testing in a sound-treated room.' },
  { q: 'What is Pure Tone Audiometry (PTA)?', a: 'PTA measures the quietest sounds a person can hear at different frequencies. You listen through headphones or earphones and signal whenever a sound is heard. Bone-conduction testing is also performed when indicated to identify the type and pattern of hearing loss.' },
  { q: 'Should I bring previous audiograms or medical reports?', a: 'Yes, please bring any previous hearing test reports, audiograms, or relevant medical records to help provide a complete picture of your hearing health.' },
  { q: 'What happens after the test?', a: 'Your results are plotted on an audiogram and thoroughly explained to you in plain, understandable language. If hearing loss or middle-ear concerns are identified, we discuss suitable next steps or medical referral without pressure.' },
  { q: 'Do you offer hearing-aid consultation and trials?', a: 'Yes — we help patients understand their hearing assessment and explore suitable hearing-aid options based on their hearing needs, comfort, and lifestyle. Visit our Hearing Aids page for details.' },
];

module.exports = {
  title: 'Hearing Tests & Audiology in Chembur, Mumbai | PTA Solutions',
  description: 'Comprehensive diagnostic hearing tests in Chembur, Mumbai — Pure Tone Audiometry (PTA), Tympanometry, Speech Audiometry, OAE, and BERA testing at PTA Solutions Hearing and Speech Care Clinics.',
  active: 'services',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Audiology • Diagnostic' }],
    title: 'Hearing Tests & Audiology',
    meta: `<span><strong>Clinic:</strong> PTA SOLUTIONS</span><span>•</span><span><strong>Location:</strong> Chembur Clinic, Mumbai</span><span>•</span><span><strong>Standards:</strong> Sound-Treated Testing Room</span>`,
  }),
  path: PATH,
  extraSchema: [
    breadcrumbSchema(CRUMBS, PATH),
    serviceSchema({ name: 'Hearing Tests & Audiology', description: 'Diagnostic hearing evaluations including Pure Tone Audiometry (PTA), tympanometry, speech audiometry, OAE, and BERA testing.', path: PATH }),
    faqSchema(FAQS),
  ],
  body: `
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-12">
      <div class="space-y-4">
        <h2 class="text-[26px] font-display font-bold text-[#0D234A]">Diagnostic Hearing Assessments at PTA Solutions</h2>
        <p class="text-[15px] text-[#64748B] leading-relaxed">
          Hearing tests to assess hearing ability, along with middle-ear testing when indicated. We explain the results and discuss suitable next steps, including hearing-aid options when appropriate.
        </p>
        <p class="text-[15px] text-[#64748B] leading-relaxed">
          Many people live with gradually worsening hearing without realizing it — difficulty following conversations in noisy rooms, turning the TV volume up, or frequently asking others to repeat themselves are common early signs. An accurate diagnostic assessment gives you a clear, objective picture of your hearing health.
        </p>
      </div>

      <!-- Tests Detailed Section -->
      <div class="space-y-8">
        <div>
          <span class="text-[11px] font-bold uppercase tracking-widest text-[#1797A6]">Clinical Protocols</span>
          <h2 class="text-[24px] font-display font-bold text-[#0D234A] mt-1">Diagnostic Hearing Tests &amp; Procedures</h2>
          <p class="text-[14px] text-[#64748B] mt-1">Explore our clinical assessment tests to understand what each involves, who may benefit, and what to expect.</p>
        </div>

        <!-- Test A: PTA -->
        <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">A</span>
            <div>
              <h3 class="text-[20px] font-display font-bold text-[#0D234A]">Pure Tone Audiometry (PTA)</h3>
              <p class="text-[12px] font-semibold text-[#1797A6] uppercase tracking-wider">Air &amp; Bone Conduction Assessment</p>
            </div>
          </div>
          <p class="text-[14.5px] text-[#1F2937] leading-relaxed">
            PTA is a hearing test that measures the quietest sounds a person can hear at different pitches. The results help assess the degree and pattern of hearing loss and whether hearing sensitivity differs between the ears.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-[13px]">
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">Who may benefit?</p>
              <p class="text-[#64748B] leading-relaxed">People who have difficulty hearing conversations, frequently ask others to repeat themselves, turn up the television volume, or are referred for a hearing assessment.</p>
            </div>
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">What to expect:</p>
              <p class="text-[#64748B] leading-relaxed">The patient listens to sounds through headphones or earphones and responds when each sound is heard. Bone-conduction testing may also be performed when indicated.</p>
            </div>
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">Results:</p>
              <p class="text-[#64748B] leading-relaxed">The findings are plotted on an audiogram and explained to the patient. Further assessment or medical referral may be recommended when appropriate.</p>
            </div>
          </div>
        </div>

        <!-- Test B: Tympanometry -->
        <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">B</span>
            <div>
              <h3 class="text-[20px] font-display font-bold text-[#0D234A]">Tympanometry</h3>
              <p class="text-[12px] font-semibold text-[#1797A6] uppercase tracking-wider">Middle-Ear Function Test</p>
            </div>
          </div>
          <p class="text-[14.5px] text-[#1F2937] leading-relaxed">
            Tympanometry assesses how the eardrum moves in response to changes in air pressure in the ear canal. It helps evaluate the function of the eardrum and middle-ear system.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-[13px]">
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">Who may benefit?</p>
              <p class="text-[#64748B] leading-relaxed">People with ear fullness, suspected middle-ear problems, certain hearing difficulties, or a need for further assessment alongside a hearing test.</p>
            </div>
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">What to expect:</p>
              <p class="text-[#64748B] leading-relaxed">A small soft probe is placed at the entrance of the ear canal. The equipment changes the air pressure and measures the response. The test is usually brief.</p>
            </div>
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">Results:</p>
              <p class="text-[#64748B] leading-relaxed">The findings help the clinician assess middle-ear function. They are interpreted alongside the patient's symptoms and other examination or test results.</p>
            </div>
          </div>
        </div>

        <!-- Test C: Speech Audiometry -->
        <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">C</span>
            <div>
              <h3 class="text-[20px] font-display font-bold text-[#0D234A]">Speech Audiometry (When Indicated)</h3>
              <p class="text-[12px] font-semibold text-[#1797A6] uppercase tracking-wider">Speech Recognition Testing</p>
            </div>
          </div>
          <p class="text-[14.5px] text-[#1F2937] leading-relaxed">
            Speech audiometry assesses how well a person detects or recognises spoken words at suitable listening levels. It can provide additional information about functional hearing and help interpret hearing-test findings.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-[13px]">
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">Who may benefit?</p>
              <p class="text-[#64748B] leading-relaxed">People who can hear sounds but struggle to understand conversations, particularly in noisy environments, or when additional speech-based information is needed.</p>
            </div>
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">What to expect:</p>
              <p class="text-[#64748B] leading-relaxed">The patient listens to speech or word material and responds according to the test procedure.</p>
            </div>
            <div class="p-4 bg-white rounded-xl border border-[#D7E3E8]">
              <p class="font-bold text-[#0D234A] mb-1">Results:</p>
              <p class="text-[#64748B] leading-relaxed">The findings are considered with the pure-tone audiogram and the patient's reported listening difficulties.</p>
            </div>
          </div>
        </div>

        <!-- Test D: OAE -->
        <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">D</span>
            <div>
              <h3 class="text-[20px] font-display font-bold text-[#0D234A]">Otoacoustic Emissions (OAE) Test</h3>
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

        <!-- Test E: BERA / ABR -->
        <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-9 h-9 rounded-xl bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">E</span>
            <div>
              <h3 class="text-[20px] font-display font-bold text-[#0D234A]">BERA / ABR Hearing Assessment</h3>
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
          { icon: 'forum', title: '1. Tell Us Your Concerns', desc: 'We discuss your symptoms, medical and communication history, and the difficulties you experience in daily life.' },
          { icon: 'hearing', title: '2. Complete the Appropriate Assessment', desc: 'Depending on your needs, this may involve hearing tests, middle-ear testing or a speech and language assessment.' },
          { icon: 'description', title: '3. Understand Your Results', desc: 'We explain the findings, answer your questions and discuss the available options.' },
          { icon: 'support_agent', title: '4. Plan Your Next Steps', desc: 'Where appropriate, we discuss hearing-aid options, therapy, follow-up testing or referral to another healthcare professional.' },
        ])}
      </div>

      <!-- Related Services -->
      <div>
        ${sectionHeading({ eyebrow: 'Other Services', title: 'Explore Additional Care' })}
        <div class="mt-5">
          ${relatedServices([
            { icon: 'hearing_disabled', title: 'Hearing Aids', desc: 'Hearing-aid consultation, trial & digital fitting options.', href: '/services/hearing-aids' },
            { icon: 'record_voice_over', title: 'Speech Therapy', desc: 'Individualised therapy for pediatric delays, stammering and adult recovery.', href: '/services/speech-therapy' },
            { icon: 'child_care', title: 'Newborn Screening', desc: 'Gentle hearing screening using OAE and BERA when indicated.', href: '/services/newborn-screening' },
          ])}
        </div>
      </div>
    </div>

    <!-- Sidebar Sticky -->
    <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
      <div class="relative bg-white p-3 border border-[#D7E3E8] rounded-2xl shadow-md">
        <img src="/assets/clinic/real-hearing-test.webp" alt="Hearing test in progress at PTA Solutions, Chembur" class="w-full h-auto aspect-[4/3] object-cover rounded-xl">
      </div>
      <div class="bg-[#F8FAFC] p-6 rounded-2xl border-2 border-[#087F8C] space-y-4">
        <div class="flex items-center gap-2 text-[13px] text-[#0D234A]">
          <span class="material-symbols-outlined text-[#1797A6] text-[18px]">location_on</span>
          <span class="font-semibold">Chembur Clinic, Mumbai</span>
        </div>
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-[#1797A6]">Care That Starts With Listening</span>
          <p class="text-[15px] font-display font-medium text-[#0D234A] mt-1">Individualised testing &amp; clear explanation of results</p>
        </div>
        <div class="pt-2 border-t border-[#D7E3E8] space-y-2 text-[13px] text-[#64748B]">
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-[#087F8C] text-[18px] shrink-0 mt-0.5">check_circle</span>
            <span>Sound-treated clinical testing room</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-[#087F8C] text-[18px] shrink-0 mt-0.5">check_circle</span>
            <span>Same-day explanation of audiogram</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-[#087F8C] text-[18px] shrink-0 mt-0.5">check_circle</span>
            <span>No commercial pressure or forced upselling</span>
          </div>
        </div>
        <a href="/book-appointment" class="block text-center w-full py-3.5 bg-[#087F8C] text-white font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">
          Book Hearing Assessment
        </a>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-[#F8FAFC] border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Common Questions', title: 'Hearing Tests FAQs', align: 'center' })}
    ${faqAccordion(FAQS)}
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-6 text-center space-y-5">
    <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0D234A]">Ready to check your hearing health?</h2>
    <p class="text-[15px] text-[#64748B]">Schedule your hearing assessment at our Chembur clinic. We explain all results in plain language and guide you on your next steps.</p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a href="/book-appointment" class="px-7 py-3.5 bg-[#087F8C] text-white font-display font-bold text-[15px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">Book Hearing Assessment</a>
      <a href="tel:+919773545058" class="px-7 py-3.5 border border-[#D7E3E8] bg-white text-[#0D234A] font-display font-semibold text-[15px] rounded-lg hover:border-[#087F8C] transition-all">Call +91 9773545058</a>
    </div>
  </div>
</section>
`
};
