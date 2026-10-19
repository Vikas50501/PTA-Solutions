const {
  pageHero, imagePlaceholder, sectionHeading, benefitGrid, processSteps,
  faqAccordion, relatedServices, breadcrumbSchema, serviceSchema, faqSchema,
} = require('../../partials/layout.js');

const PATH = '/services/speech-therapy';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Services', href: '/services' }, { label: 'Speech Therapy' }];

const FAQS = [
  { q: "When should I seek advice for a child's speech or language delay?", a: "If a child is missing expected speech or language milestones, has limited vocabulary, or you have concerns about their communication development, seeking an assessment early provides timely guidance and support." },
  { q: 'What happens during an initial speech assessment?', a: 'We evaluate understanding (receptive language), expression, speech-sound clarity, fluency, and functional communication in a supportive, relaxed environment.' },
  { q: 'How is a therapy plan developed?', a: 'Therapy plans are tailored to each person’s needs, assessment findings, and everyday communication goals, incorporating practical strategies for home and family.' },
  { q: 'Do you support adults recovering from a stroke or neurological condition?', a: 'Yes — we provide rehabilitation for aphasia, dysarthria, apraxia, and voice difficulties following a stroke, traumatic brain injury, or neurological condition.' },
  { q: 'Can voice disorders be treated with therapy?', a: 'Yes. Voice assessment and therapy improve vocal function, efficiency, and comfort. Depending on the condition, ENT evaluation or medical management may also be coordinated.' },
];

module.exports = {
  title: 'Speech & Language Therapy in Chembur, Mumbai | PTA Solutions',
  description: 'Assessment and therapy for speech delays, speech-sound disorders, stammering, stroke recovery, and voice concerns at PTA Solutions in Chembur, Mumbai.',
  active: 'services',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Clinical Speech Therapy' }],
    title: 'Speech & Language Therapy',
    meta: `<span><strong>Clinic:</strong> PTA SOLUTIONS</span><span>•</span><span><strong>Location:</strong> Chembur Clinic, Mumbai</span><span>•</span><span><strong>Care:</strong> Children, Adults & Seniors</span>`,
  }),
  path: PATH,
  extraSchema: [
    breadcrumbSchema(CRUMBS, PATH),
    serviceSchema({ name: 'Speech & Language Therapy', description: 'Individualised assessment and therapy for children and adults with speech, language, voice and communication difficulties.', path: PATH }),
    faqSchema(FAQS),
  ],
  body: `
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-8 space-y-12">
      <div class="space-y-4">
        <h2 class="text-[26px] font-display font-bold text-[#0D234A]">Individualised Speech &amp; Communication Care</h2>
        <p class="text-[15px] text-[#64748B] leading-relaxed">
          Assessment and therapy for speech and language delays, speech-sound difficulties, stuttering-stammering, voice concerns and communication difficulties following stroke or other neurological conditions.
        </p>
        <p class="text-[15px] text-[#64748B] leading-relaxed">
          We provide individualised assessment and therapy for children and adults with speech, language, voice and communication difficulties. Therapy plans are tailored to each person's needs, assessment findings and everyday communication goals. Some conditions may also require assessment or treatment by a doctor or another healthcare professional.
        </p>
      </div>

      <!-- 8 Conditions We Support -->
      <div class="space-y-6">
        <div>
          <span class="text-[11px] font-bold uppercase tracking-widest text-[#1797A6]">Clinical Scope</span>
          <h2 class="text-[24px] font-display font-bold text-[#0D234A] mt-1">Conditions We Support</h2>
          <p class="text-[14px] text-[#64748B] mt-1">Tailored assessment and individualised therapy plans for children, teenagers and adults.</p>
        </div>

        <div class="grid grid-cols-1 gap-6">
          <!-- 1. Speech & Language Difficulties in Children -->
          <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-lg bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">1</span>
              <h3 class="text-[19px] font-display font-bold text-[#0D234A]">Speech &amp; Language Difficulties in Children</h3>
            </div>
            <div>
              <p class="text-[12px] font-bold uppercase tracking-wider text-[#1797A6] mb-2">Conditions &amp; Concerns</p>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13.5px] text-[#64748B]">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Speech and language delay</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Developmental Language Disorder (DLD)</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Autism Spectrum Disorder (ASD) – communication support</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Social communication difficulties</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Receptive language difficulties (understanding language)</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Expressive language difficulties (using words and sentences)</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Limited vocabulary or delayed sentence development</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Communication difficulties associated with ADHD</li>
              </ul>
            </div>
            <div class="pt-3 border-t border-[#D7E3E8] text-[13.5px]">
              <strong class="text-[#0D234A]">How we help:</strong> <span class="text-[#64748B]">Support for understanding and using language, functional communication, vocabulary, sentence development, play-based interaction and caregiver strategies.</span>
            </div>
          </div>

          <!-- 2. Speech Sound & Articulation Disorders -->
          <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-lg bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">2</span>
              <h3 class="text-[19px] font-display font-bold text-[#0D234A]">Speech Sound &amp; Articulation Disorders</h3>
            </div>
            <div>
              <p class="text-[12px] font-bold uppercase tracking-wider text-[#1797A6] mb-2">Conditions &amp; Concerns</p>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13.5px] text-[#64748B]">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Articulation difficulties</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Phonological disorders</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Unclear or difficult-to-understand speech</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Persistent speech-sound errors</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Childhood apraxia of speech (specialist assessment)</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Dysarthria affecting speech clarity</li>
              </ul>
            </div>
            <div class="pt-3 border-t border-[#D7E3E8] text-[13.5px]">
              <strong class="text-[#0D234A]">How we help:</strong> <span class="text-[#64748B]">Assessment and targeted therapy to improve speech-sound production, intelligibility and communication in words, sentences and everyday conversation.</span>
            </div>
          </div>

          <!-- 3. Stammering & Fluency Disorders -->
          <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-lg bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">3</span>
              <h3 class="text-[19px] font-display font-bold text-[#0D234A]">Stammering (Stuttering) &amp; Fluency Disorders</h3>
            </div>
            <div>
              <p class="text-[12px] font-bold uppercase tracking-wider text-[#1797A6] mb-2">Conditions &amp; Concerns</p>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13.5px] text-[#64748B]">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Developmental stammering in children</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Stammering in teenagers and adults</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Repetitions, prolongations and blocks</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Cluttering, where appropriately assessed</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Anxiety or avoidance associated with speaking</li>
              </ul>
            </div>
            <div class="pt-3 border-t border-[#D7E3E8] text-[13.5px]">
              <strong class="text-[#0D234A]">How we help:</strong> <span class="text-[#64748B]">Individualised fluency support, communication strategies and work on participation and confidence. Therapy goals are adapted to the person's age, needs and preferences.</span>
            </div>
          </div>

          <!-- 4. Stroke-Related Speech & Language Difficulties -->
          <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-lg bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">4</span>
              <h3 class="text-[19px] font-display font-bold text-[#0D234A]">Stroke-Related Speech, Language &amp; Communication Difficulties</h3>
            </div>
            <div>
              <p class="text-[12px] font-bold uppercase tracking-wider text-[#1797A6] mb-2">Conditions &amp; Concerns</p>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13.5px] text-[#64748B]">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Aphasia (difficulty understanding or using language)</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Dysarthria (muscle control difficulty for speech)</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Apraxia of speech following stroke</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Word-finding difficulties</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Difficulties with reading and writing</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Cognitive-communication difficulties, where assessed</li>
              </ul>
            </div>
            <div class="pt-3 border-t border-[#D7E3E8] text-[13.5px]">
              <strong class="text-[#0D234A]">How we help:</strong> <span class="text-[#64748B]">Assessment and rehabilitation targeting communication, comprehension, word retrieval, functional speaking and other affected skills according to the person's abilities.</span>
            </div>
          </div>

          <!-- 5. Voice Disorders & Vocal Problems -->
          <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-lg bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">5</span>
              <h3 class="text-[19px] font-display font-bold text-[#0D234A]">Voice Disorders &amp; Vocal Problems</h3>
            </div>
            <div>
              <p class="text-[12px] font-bold uppercase tracking-wider text-[#1797A6] mb-2">Conditions &amp; Concerns</p>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13.5px] text-[#64748B]">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Vocal nodules &amp; polyps</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Muscle tension dysphonia</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Hoarseness and persistent voice changes</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Vocal strain and voice fatigue</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Reduced vocal loudness, including in Parkinson's disease</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Vocal-fold paresis/paralysis</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Voice changes following surgery, when medically cleared</li>
              </ul>
            </div>
            <div class="pt-3 border-t border-[#D7E3E8] text-[13.5px]">
              <strong class="text-[#0D234A]">How we help:</strong> <span class="text-[#64748B]">Voice assessment and appropriate therapy to improve vocal function, efficiency and communication. Treatment depends on the underlying diagnosis and may require ENT evaluation, laryngeal visualisation or medical management.</span>
            </div>
          </div>

          <!-- 6. Neurological Communication & Speech Disorders in Adults -->
          <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-lg bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">6</span>
              <h3 class="text-[19px] font-display font-bold text-[#0D234A]">Neurological Communication &amp; Speech Disorders in Adults</h3>
            </div>
            <div>
              <p class="text-[12px] font-bold uppercase tracking-wider text-[#1797A6] mb-2">Conditions &amp; Concerns</p>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13.5px] text-[#64748B]">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Parkinson's disease-related speech and voice changes</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Dysarthria associated with neurological conditions</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Communication difficulties following traumatic brain injury</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Multiple sclerosis-related communication difficulties</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Progressive neurological conditions affecting speech</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Cognitive-communication difficulties, following assessment</li>
              </ul>
            </div>
            <div class="pt-3 border-t border-[#D7E3E8] text-[13.5px]">
              <strong class="text-[#0D234A]">How we help:</strong> <span class="text-[#64748B]">Individualised communication, speech clarity, voice and functional communication therapy. For progressive conditions, goals focus on maintaining communication and supporting participation for as long as possible.</span>
            </div>
          </div>

          <!-- 7. Social Communication & Interaction Difficulties -->
          <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-lg bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">7</span>
              <h3 class="text-[19px] font-display font-bold text-[#0D234A]">Social Communication &amp; Interaction Difficulties</h3>
            </div>
            <div>
              <p class="text-[12px] font-bold uppercase tracking-wider text-[#1797A6] mb-2">Conditions &amp; Concerns</p>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13.5px] text-[#64748B]">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Social communication difficulties associated with autism</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Difficulties with conversational turn-taking</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Challenges understanding social language and context</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Difficulties interpreting non-literal language</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Pragmatic language difficulties</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Needs associated with other developmental conditions</li>
              </ul>
            </div>
            <div class="pt-3 border-t border-[#D7E3E8] text-[13.5px]">
              <strong class="text-[#0D234A]">How we help:</strong> <span class="text-[#64748B]">Support for functional conversation, turn-taking, understanding context, expressing needs and participating in social interactions, with goals tailored to the individual.</span>
            </div>
          </div>

          <!-- 8. Other Speech, Language & Communication Needs -->
          <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-4">
            <div class="flex items-center gap-3">
              <span class="w-8 h-8 rounded-lg bg-[#087F8C] text-white flex items-center justify-center font-display font-bold text-[14px]">8</span>
              <h3 class="text-[19px] font-display font-bold text-[#0D234A]">Other Speech, Language &amp; Communication Needs</h3>
            </div>
            <div>
              <p class="text-[12px] font-bold uppercase tracking-wider text-[#1797A6] mb-2">Conditions &amp; Concerns</p>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[13.5px] text-[#64748B]">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Resonance difficulties, including hypernasality</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Cleft palate-related speech difficulties</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Communication difficulties with developmental disabilities</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Adult language difficulties requiring further assessment</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#087F8C]"></span>Communication support for caregivers and families</li>
              </ul>
            </div>
            <div class="pt-3 border-t border-[#D7E3E8] text-[13.5px]">
              <strong class="text-[#0D234A]">How we help:</strong> <span class="text-[#64748B]">Assessment, therapy or referral according to the person's communication profile and the services available at the clinic.</span>
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
            { icon: 'hearing', title: 'Hearing Tests', desc: 'Rule out hearing loss or middle-ear factors in speech delay.', href: '/services/hearing-tests' },
            { icon: 'child_care', title: 'Newborn Screening', desc: 'Early hearing checks supporting developmental speech milestones.', href: '/services/newborn-screening' },
            { icon: 'public', title: 'NRI Parent Care Coordination', desc: 'Helping families abroad coordinate care for parents in Mumbai.', href: '/nri-hearing-care' },
          ])}
        </div>
      </div>
    </div>

    <!-- Sidebar Sticky -->
    <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
      <div class="relative bg-white p-3 border border-[#D7E3E8] rounded-2xl shadow-md">
        <img src="/assets/stock/speech-therapy.webp" alt="Speech therapy session with child and therapist at PTA Solutions" class="w-full h-auto aspect-[4/3] object-cover rounded-xl">
      </div>
      <div class="bg-[#F8FAFC] p-6 rounded-2xl border-2 border-[#087F8C] space-y-4">
        <div class="flex items-center gap-2 text-[13px] text-[#0D234A]">
          <span class="material-symbols-outlined text-[#1797A6] text-[18px]">location_on</span>
          <span class="font-semibold">Chembur Clinic, Mumbai</span>
        </div>
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-[#1797A6]">Care That Starts With Listening</span>
          <p class="text-[15px] font-display font-medium text-[#0D234A] mt-1">Individualised Assessment &amp; Tailored Therapy</p>
        </div>
        <div class="pt-2 border-t border-[#D7E3E8] space-y-2 text-[13px] text-[#64748B]">
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-[#087F8C] text-[18px] shrink-0 mt-0.5">check_circle</span>
            <span>Comprehensive communication assessment</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-[#087F8C] text-[18px] shrink-0 mt-0.5">check_circle</span>
            <span>Child &amp; adult specialised support</span>
          </div>
          <div class="flex items-start gap-2">
            <span class="material-symbols-outlined text-[#087F8C] text-[18px] shrink-0 mt-0.5">check_circle</span>
            <span>Caregiver strategies &amp; home practice guidance</span>
          </div>
        </div>
        <a href="/book-appointment" class="block text-center w-full py-3.5 bg-[#087F8C] text-white font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">
          Book Speech Therapy Assessment
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
    <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0D234A]">Have questions about speech or language?</h2>
    <p class="text-[15px] text-[#64748B]">Book a consultation at our Chembur clinic to discuss your concerns with an experienced clinician.</p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a href="/book-appointment" class="px-7 py-3.5 bg-[#087F8C] text-white font-display font-bold text-[15px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">Book Speech Therapy Assessment</a>
      <a href="tel:+919773545058" class="px-7 py-3.5 border border-[#D7E3E8] bg-white text-[#0D234A] font-display font-semibold text-[15px] rounded-lg hover:border-[#087F8C] transition-all">Call +91 9773545058</a>
    </div>
  </div>
</section>
`
};
