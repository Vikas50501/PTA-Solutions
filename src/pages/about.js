const { pageHero, imagePlaceholder, breadcrumbSchema, sectionHeading, benefitGrid, processSteps } = require('../partials/layout.js');

const PATH = '/about';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'About' }];

module.exports = {
  title: 'About PTA Solutions | Hearing & Speech Care Clinics, Chembur, Mumbai',
  description: 'About PTA Solutions Hearing and Speech Care Clinics in Chembur, Mumbai — diagnostic hearing evaluations, hearing-aid care, and speech therapy.',
  active: 'about',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'ABOUT PTA SOLUTIONS' }],
    title: 'Your Trusted Partner in Hearing and Speech Wellness',
  }),
  path: PATH,
  extraSchema: [breadcrumbSchema(CRUMBS, PATH)],
  body: `
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div class="lg:col-span-7 space-y-6">
      <div class="p-6 bg-[#EEF6F8] border-l-4 border-[#1797A6] rounded-r-xl">
        <h3 class="font-display font-bold text-[20px] text-[#1797A6]">About Our Practice</h3>
        <p class="text-[15px] text-[#0D234A] mt-1 font-semibold">PTA SOLUTIONS HEARING AND SPEECH CARE CLINICS</p>
        <p class="text-[13px] text-[#64748B] mt-0.5">Shanmukhapriya Healthcare Centre, Chembur, Mumbai</p>
      </div>
      <p class="text-[16px] text-[#64748B] leading-relaxed">
        At PTA SOLUTIONS HEARING AND SPEECH CARE CLINICS, our clinical team works with patients and families on hearing care and communication needs. Our clinical work includes hearing assessment, hearing-aid counselling and fitting, and speech and language support. The focus is on clear explanations, individual needs and practical next steps.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div class="p-4 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8]">
          <span class="material-symbols-outlined text-[#1797A6] text-[24px]">verified</span>
          <p class="font-display font-bold text-[15px] text-[#0D234A] mt-2">Accurate Diagnosis</p>
          <p class="text-[12px] text-[#64748B] mt-1">Pure Tone Audiometry and impedance testing in a sound-treated testing room.</p>
        </div>
        <div class="p-4 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8]">
          <span class="material-symbols-outlined text-[#1797A6] text-[24px]">balance</span>
          <p class="font-display font-bold text-[15px] text-[#0D234A] mt-2">Ethical Standards</p>
          <p class="text-[12px] text-[#64748B] mt-1">Recommendations based on assessment findings, discussed with you before any next step.</p>
        </div>
        <div class="p-4 bg-[#F8FAFC] rounded-xl border border-[#D7E3E8]">
          <span class="material-symbols-outlined text-[#1797A6] text-[24px]">family_restroom</span>
          <p class="font-display font-bold text-[15px] text-[#0D234A] mt-2">Newborns to Seniors</p>
          <p class="text-[12px] text-[#64748B] mt-1">Compassionate, multi-generational audiology &amp; therapy.</p>
        </div>
      </div>
      <div class="pt-4">
        <a href="/book-appointment" class="inline-block px-7 py-3 bg-[#087F8C] text-white font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
          Book an Assessment →
        </a>
      </div>
    </div>
    <div class="lg:col-span-5 space-y-6">
      ${imagePlaceholder({ icon: 'medical_services', label: 'PTA SOLUTIONS', caption: 'Hearing and Speech Care Clinics' })}
      <div class="bg-[#F8FAFC] p-8 rounded-2xl border border-[#D7E3E8] space-y-6">
        <span class="text-[11px] font-bold uppercase tracking-widest text-[#1797A6]">Our Mission</span>
        <blockquote class="text-[20px] font-display font-semibold text-[#0D234A] italic leading-relaxed">
          "Our mission is simple — to help you reconnect with the world through <span class="text-[#1797A6] not-italic font-bold">better hearing</span> and <span class="text-[#1797A6] not-italic font-bold">clearer communication</span> improving your quality of life."
        </blockquote>
        <div class="pt-4 border-t border-[#D7E3E8]">
          <p class="font-display font-bold text-[16px] text-[#0D234A]">PTA SOLUTIONS HEARING AND SPEECH CARE CLINICS</p>
          <p class="text-[12px] text-[#64748B] mt-1">Audiology &amp; Speech-Language Pathology Clinic, Chembur, Mumbai</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div class="lg:col-span-6">
      <img src="/assets/clinic/real-clinic-exterior.webp" alt="PTA Solutions Hearing and Speech Care Clinics exterior signage, Chembur" class="w-full h-auto aspect-[4/3] object-cover rounded-2xl border border-[#D7E3E8] shadow-md">
    </div>
    <div class="lg:col-span-6 space-y-3">
      <span class="text-[11px] font-bold uppercase tracking-widest text-[#1797A6]">Visit Our Clinic</span>
      <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0D234A]">PTA Solutions, Chembur</h2>
      <p class="text-[15px] text-[#64748B] leading-relaxed">Shanmukhapriya Healthcare Centre, 6th Floor, Shrikant Chambers -2, Above Surya Hospital, Next to R.K.Studio, Opp CROMA, Chembur, Mumbai - 400074.</p>
      <a href="/contact" class="inline-flex items-center gap-1 text-[14px] font-bold text-[#1797A6] hover:underline">Get Directions &amp; Contact Details →</a>
    </div>
  </div>
</section>

<section class="py-16 bg-[#F8FAFC] border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Why Choose PTA Solutions', title: 'Care That Starts With Listening', align: 'center' })}
    <div class="max-w-3xl mx-auto text-center text-[15px] text-[#64748B] leading-relaxed -mt-4 mb-8">
      Every person's hearing and communication needs are different. At PTA Solutions, we begin by understanding your concerns, carry out appropriate assessments and explain the findings in simple language. We discuss suitable options and help you decide on the next steps without pressure.
    </div>
    ${benefitGrid([
      { icon: 'hearing', title: 'Listen', desc: 'Understand your concerns and communication goals.' },
      { icon: 'query_stats', title: 'Assess', desc: 'Carry out the relevant hearing or speech assessment.' },
      { icon: 'description', title: 'Explain', desc: 'Discuss the findings, their significance and any limitations.' },
      { icon: 'recommend', title: 'Plan', desc: 'Recommend appropriate next steps, follow-up or referral when needed.' },
    ])}
  </div>
</section>

<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'The Patient Pathway', title: 'Your Journey to Better Hearing & Communication', align: 'center' })}
    ${processSteps([
      { icon: 'forum', title: '1. Tell Us Your Concerns', desc: 'We discuss your symptoms, medical and communication history, and the difficulties you experience in daily life.' },
      { icon: 'hearing', title: '2. Complete the Appropriate Assessment', desc: 'Depending on your needs, this may involve hearing tests, middle-ear testing or a speech and language assessment.' },
      { icon: 'description', title: '3. Understand Your Results', desc: 'We explain the findings, answer your questions and discuss the available options.' },
      { icon: 'support_agent', title: '4. Plan Your Next Steps', desc: 'Where appropriate, we discuss hearing-aid options, therapy, follow-up testing or referral to another healthcare professional.' },
    ])}
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-6 text-center space-y-5">
    <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0D234A]">Ready to take the first step?</h2>
    <p class="text-[15px] text-[#64748B]">Book a consultation at our Chembur clinic. We look forward to welcoming you.</p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a href="/book-appointment" class="px-7 py-3.5 bg-[#087F8C] text-white font-display font-bold text-[15px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">Book Appointment</a>
      <a href="tel:+919773545058" class="px-7 py-3.5 border border-[#D7E3E8] bg-white text-[#0D234A] font-display font-semibold text-[15px] rounded-lg hover:border-[#087F8C] transition-all">Call +91 9773545058</a>
    </div>
  </div>
</section>
`
};
