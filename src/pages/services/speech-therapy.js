const {
  pageHero, imagePlaceholder, sectionHeading, benefitGrid, processSteps,
  faqAccordion, relatedServices, breadcrumbSchema, serviceSchema, faqSchema,
} = require('../../partials/layout.js');

const PATH = '/services/speech-therapy';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Speech Therapy' }];

const FAQS = [
  { q: "When should I seek advice for a child's speech or language delay?", a: "If a child is missing expected speech or language milestones, or you have concerns about their communication development, it's a good idea to seek an assessment early." },
  { q: 'What happens during the first speech-therapy appointment?', a: 'The first appointment includes an assessment of speech, language, and fluency, so a personalized therapy plan can be discussed with you.' },
  { q: 'How often might therapy be recommended?', a: 'This depends on the individual assessment — your therapist will discuss a recommended frequency after the first consultation.' },
  { q: 'Do you offer online speech-therapy sessions?', a: 'Please contact our clinic directly to confirm whether an online session format is suitable and available for your specific need.' },
  { q: 'Do you support adults with communication difficulties after a stroke?', a: 'Yes — our speech-therapy programs include support for adults recovering speech and language function after a stroke.' },
];

module.exports = {
  title: 'Speech Therapy in Chembur, Mumbai | PTA Solutions',
  description: 'Speech therapy in Chembur, Mumbai for pediatric speech delay, stammering, articulation, and adult post-stroke voice recovery.',
  active: 'services',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Rehabilitation' }],
    title: 'Speech & Language Therapy in Chembur',
    meta: `<span><strong>Duration:</strong> 45 Mins</span><span>•</span><span><strong>Session Fee:</strong> Personalized</span><span>•</span><span><strong>Location:</strong> Chembur Clinic or Doorstep</span>`,
  }),
  path: PATH,
  extraSchema: [
    breadcrumbSchema(CRUMBS, PATH),
    serviceSchema({ name: 'Speech Therapy', description: 'Pediatric and adult speech-language therapy for articulation, stammering, and post-stroke voice recovery.', path: PATH }),
    faqSchema(FAQS),
  ],
  body: `
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-10">
      <div class="space-y-4">
        <h2 class="text-[24px] font-display font-bold text-[#0D234A]">Specialized Speech &amp; Language Programs</h2>
        <p class="text-[15px] text-[#64748B] leading-relaxed">
          Our speech therapy programs are tailored, individualized sessions addressing speech delays, stammering, articulation clarity, and post-stroke aphasia recovery.
        </p>
        <p class="text-[15px] text-[#64748B] leading-relaxed">
          Whether a child is missing developmental speech milestones or an adult is rebuilding communication after a neurological event, therapy is planned around clear, measurable goals and regular progress check-ins with the family.
        </p>
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0D234A] mb-4">Therapy Focus Areas</h2>
        ${benefitGrid([
          { icon: 'child_care', title: 'Pediatric Speech Delay', desc: 'Articulation and language milestone support for children.' },
          { icon: 'record_voice_over', title: 'Stammering & Fluency', desc: 'Fluency modification techniques for adolescents and adults.' },
          { icon: 'graphic_eq', title: 'Voice & Oral-Motor', desc: 'Voice modulation and oral-motor stimulation exercises.' },
          { icon: 'psychology', title: 'Adult Stroke Rehab', desc: 'Aphasia and voice recovery support after a neurological event.' },
        ])}
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0D234A] mb-4">Who This Service Is For</h2>
        <p class="text-[15px] text-[#64748B] leading-relaxed mb-4">Suited to children with developmental delays, individuals who stammer, voice professionals, and adults recovering speech and language function after a stroke or other neurological condition.</p>
      </div>

      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0D234A] mb-5">How It Works</h2>
        ${processSteps([
          { icon: 'call', title: '1. Book', desc: 'Schedule an initial consultation for your child or yourself.' },
          { icon: 'query_stats', title: '2. Assess', desc: 'Our speech-language professional evaluates speech, language, and fluency patterns.' },
          { icon: 'record_voice_over', title: '3. Therapy Plan', desc: 'A personalized one-on-one therapy plan is designed around your goals.' },
          { icon: 'support_agent', title: '4. Progress Tracking', desc: 'Regular sessions with milestone tracking and home-guided practice.' },
        ])}
      </div>

      <div>
        ${sectionHeading({ eyebrow: 'Related Services', title: 'You May Also Need' })}
        <div class="mt-5">
          ${relatedServices([
            { icon: 'child_care', title: 'Newborn Screening', desc: 'Early hearing checks support healthy speech development.', href: '/services/newborn-screening' },
            { icon: 'hearing', title: 'Hearing Tests', desc: 'Rule out hearing loss as a factor in speech delay.', href: '/services/hearing-tests' },
            { icon: 'favorite', title: 'Complete Care', desc: 'Full diagnostics and therapy delivered at your home.', href: '/services/complete-care' },
          ])}
        </div>
      </div>
    </div>

    <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
      <div class="relative bg-white p-3 border border-[#D7E3E8] rounded-2xl shadow-md">
        <img src="/assets/stock/speech-therapy.webp" alt="Speech therapy session with a young boy and therapist" class="w-full h-auto aspect-[4/3] object-cover rounded-xl">
      </div>
      <div class="bg-[#F8FAFC] p-6 rounded-2xl border-2 border-[#087F8C] space-y-4">
        <div class="flex items-center gap-2 text-[13px] text-[#0D234A]">
          <span class="material-symbols-outlined text-[#1797A6] text-[18px]">schedule</span>
          <span class="font-semibold">Duration: 45 Mins</span>
        </div>
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-[#1797A6]">Session Fee</span>
          <p class="text-[26px] font-display font-bold text-[#0D234A] mt-1">Personalized</p>
        </div>
        <a href="/booking/speech-therapy" class="block text-center w-full py-3.5 bg-[#087F8C] text-white font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">
          Book Speech Therapy
        </a>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-[#F8FAFC] border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Common Questions', title: 'Speech Therapy FAQs', align: 'center' })}
    ${faqAccordion(FAQS)}
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-6 text-center space-y-5">
    <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0D234A]">Help your family communicate with confidence.</h2>
    <p class="text-[15px] text-[#64748B]">Book a personalized speech therapy consultation today.</p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a href="/booking/speech-therapy" class="px-7 py-3.5 bg-[#087F8C] text-white font-display font-bold text-[15px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">Book Speech Therapy</a>
      <a href="tel:+919773545058" class="px-7 py-3.5 border border-[#D7E3E8] bg-white text-[#0D234A] font-display font-semibold text-[15px] rounded-lg hover:border-[#087F8C] transition-all">Call +91 9773545058</a>
    </div>
  </div>
</section>
`
};
