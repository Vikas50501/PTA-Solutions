const {
  pageHero, sectionHeading, benefitGrid, processSteps,
  faqAccordion, relatedServices, breadcrumbSchema, serviceSchema, faqSchema,
} = require('../../partials/layout.js');

const PATH = '/services/hearing-aids';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Hearing Aids' }];

const FAQS = [
  { q: 'Can I try a hearing aid before choosing one?', a: 'Yes. Where available, demonstration or trial options allow you to experience how amplified sound feels in real listening situations before making a final decision.' },
  { q: 'How are suitable hearing aids selected?', a: 'We help patients understand their hearing assessment and explore hearing-aid options based on their hearing needs, communication goals, comfort, lifestyle and budget.' },
  { q: 'What does a fitting session include?', a: 'A fitting session includes digital device programming, acoustic customization for your listening profile, physical comfort adjustments, and practical instructions for daily wear and maintenance.' },
  { q: 'Do you offer follow-up support and adjustments?', a: 'Yes. Adapting to hearing aids is a gradual process. We provide follow-up fine-tuning, maintenance guidance, and ongoing support to ensure optimal comfort.' },
  { q: 'Is a hearing aid always the right first step?', a: 'The right hearing aid and fitting plan depend on your hearing results, ear condition, listening needs and preferences. A hearing aid is not a substitute for medical evaluation when ear symptoms require it.' },
];

module.exports = {
  title: 'Hearing-Aid Consultation, Trial & Fitting in Chembur | PTA Solutions',
  description: 'Guidance on choosing suitable hearing aids, hearing-aid trials where available, fitting, adjustments, counselling and follow-up support at PTA Solutions in Chembur, Mumbai.',
  active: 'services',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Hearing Rehabilitation' }],
    title: 'Hearing-Aid Consultation, Trial & Fitting',
    meta: `<span><strong>Clinic:</strong> PTA SOLUTIONS</span><span>•</span><span><strong>Location:</strong> Chembur Clinic, Mumbai</span><span>•</span><span><strong>Care:</strong> Consultation, Trial & Fitting</span>`,
  }),
  path: PATH,
  extraSchema: [
    breadcrumbSchema(CRUMBS, PATH),
    serviceSchema({ name: 'Hearing-Aid Consultation, Trial & Fitting', description: 'Guidance on choosing suitable hearing aids, hearing-aid trials where available, fitting, adjustments, counselling and follow-up support.', path: PATH }),
    faqSchema(FAQS),
  ],
  body: `
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-12">
      <div class="space-y-4">
        <h2 class="text-[26px] font-display font-bold text-[#0D234A]">Personalised Hearing-Aid Guidance &amp; Rehabilitation</h2>
        <p class="text-[15px] text-[#64748B] leading-relaxed">
          We help patients understand their hearing assessment and explore hearing-aid options based on their hearing needs, communication goals, comfort, lifestyle and budget.
        </p>
        <p class="text-[15px] text-[#64748B] leading-relaxed">
          Choosing a hearing aid is a significant personal decision. We focus on ethical, transparent advice with zero high-pressure sales tactics — ensuring you understand your options and feel confident in your choice.
        </p>
      </div>

      <!-- What the Service Includes -->
      <div>
        <span class="text-[11px] font-bold uppercase tracking-widest text-[#1797A6]">Comprehensive Care</span>
        <h2 class="text-[22px] font-display font-bold text-[#0D234A] mb-4 mt-1">What the Service May Include</h2>
        ${benefitGrid([
          { icon: 'hearing_disabled', title: 'Device Discussion', desc: 'Detailed discussion of suitable devices matched to your hearing profile and lifestyle.' },
          { icon: 'tune', title: 'Demonstration & Trial', desc: 'Demonstration or trial where available, so you can experience sound in daily situations.' },
          { icon: 'settings', title: 'Fitting & Programming', desc: 'Precise digital fitting, acoustic fine-tuning, and physical comfort customization.' },
          { icon: 'support_agent', title: 'Care & Follow-Up', desc: 'Instructions for daily use and care, along with regular follow-up adjustments.' },
        ])}
      </div>

      <!-- A Personalised Approach -->
      <div class="p-6 bg-[#EEF6F8] rounded-2xl border border-[#D7E3E8] space-y-3">
        <div class="flex items-center gap-3 text-[#087F8C]">
          <span class="material-symbols-outlined text-[24px]">verified</span>
          <h3 class="font-display font-bold text-[18px] text-[#0D234A]">A Personalised Approach</h3>
        </div>
        <p class="text-[14.5px] text-[#1F2937] leading-relaxed">
          The right hearing aid and fitting plan depend on the patient's hearing results, ear condition, listening needs and preferences. A hearing aid is not a substitute for medical evaluation when ear symptoms require it.
        </p>
        <p class="text-[13.5px] text-[#64748B] leading-relaxed">
          Whether you are exploring hearing aids for the first time or looking for re-programming and fine-tuning for your current device, our clinical team takes the time to listen and provide balanced guidance.
        </p>
      </div>

      <!-- Who Should Consider -->
      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0D234A] mb-3">Who Should Consider a Hearing-Aid Consultation</h2>
        <p class="text-[15px] text-[#64748B] leading-relaxed">
          Individuals with confirmed hearing loss, people who struggle to follow conversations with family or in social gatherings, those who frequently turn up the television volume, or anyone seeking upgrade and re-tuning support for an existing hearing instrument.
        </p>
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
            { icon: 'hearing', title: 'Hearing Tests', desc: 'Pure Tone Audiometry (PTA) and tympanometry in a sound-treated room.', href: '/services/hearing-tests' },
            { icon: 'record_voice_over', title: 'Speech Therapy', desc: 'Therapy for pediatric delays, stammering and adult communication.', href: '/services/speech-therapy' },
            { icon: 'public', title: 'NRI Parent Care Coordination', desc: 'Helping families abroad coordinate care for parents in Mumbai.', href: '/nri-hearing-care' },
          ])}
        </div>
      </div>
    </div>

    <!-- Sidebar Sticky -->
    <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
      <div class="relative bg-white p-3 border border-[#D7E3E8] rounded-2xl shadow-md">
        <img src="/assets/clinic/real-sound-booth.webp" alt="Sound-treated testing room at PTA Solutions, Chembur" class="w-full h-auto aspect-[4/3] object-cover rounded-xl">
      </div>
      <div class="bg-[#F8FAFC] p-6 rounded-2xl border-2 border-[#087F8C] space-y-4">
        <div class="flex items-center gap-2 text-[13px] text-[#0D234A]">
          <span class="material-symbols-outlined text-[#1797A6] text-[18px]">location_on</span>
          <span class="font-semibold">Chembur Clinic, Mumbai</span>
        </div>
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-[#1797A6]">Care That Starts With Listening</span>
          <p class="text-[15px] font-display font-medium text-[#0D234A] mt-1">Hearing-Aid Consultation, Trial &amp; Fitting</p>
        </div>
        <div class="pt-2 border-t border-[#D7E3E8] space-y-2 text-[13px] text-[#64748B]">
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-[#087F8C] text-[18px] shrink-0 mt-0.5">check_circle</span>
            <span>Discussion of suitable devices</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-[#087F8C] text-[18px] shrink-0 mt-0.5">check_circle</span>
            <span>Demonstration or trial where available</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-[#087F8C] text-[18px] shrink-0 mt-0.5">check_circle</span>
            <span>Fitting, daily care guidance &amp; follow-up</span>
          </div>
        </div>
        <a href="/book-appointment" class="block text-center w-full py-3.5 bg-[#087F8C] text-white font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">
          Book Hearing-Aid Consultation
        </a>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-[#F8FAFC] border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Common Questions', title: 'Hearing Aids FAQs', align: 'center' })}
    ${faqAccordion(FAQS)}
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-6 text-center space-y-5">
    <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0D234A]">Find the right hearing-aid support.</h2>
    <p class="text-[15px] text-[#64748B]">Schedule a consultation at our Chembur clinic to discuss your hearing needs and explore suitable options.</p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a href="/book-appointment" class="px-7 py-3.5 bg-[#087F8C] text-white font-display font-bold text-[15px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">Book Hearing-Aid Consultation</a>
      <a href="tel:+919773545058" class="px-7 py-3.5 border border-[#D7E3E8] bg-white text-[#0D234A] font-display font-semibold text-[15px] rounded-lg hover:border-[#087F8C] transition-all">Call +91 9773545058</a>
    </div>
  </div>
</section>
`
};
