const { pageHero, imagePlaceholder, breadcrumbSchema, sectionHeading, benefitGrid, processSteps } = require('../partials/layout.js');

const PATH = '/about';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'About' }];

module.exports = {
  title: 'About PTA Solutions | Hearing & Speech Care Clinics, Chembur, Mumbai',
  description: 'Your trusted partner in hearing and speech wellness, led by Dr. Johnsavio Fernandes at PTA Solutions, Chembur, Mumbai.',
  active: 'about',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'ABOUT PTA SOLUTIONS' }],
    title: 'Your Trusted Partner in Hearing and Speech Wellness',
  }),
  path: PATH,
  extraSchema: [breadcrumbSchema(CRUMBS, PATH)],
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div class="lg:col-span-7 space-y-6">
      <div class="p-6 bg-[#F1F4F3] border-l-4 border-[#1E3E83] rounded-r-xl">
        <h3 class="font-display font-bold text-[20px] text-[#1E3E83]">10+ Years of Clinical Experience</h3>
        <p class="text-[15px] text-[#0F1E3E] mt-1 font-medium">Led by Dr. Johnsavio Fernandes, Audiologist and Speech-Language professional in Mumbai.</p>
      </div>
      <p class="text-[16px] text-[#687779] leading-relaxed">
        Our Chembur clinic is founded upon the conviction that auditory and communicative well-being is vital to intellectual vitality, social bonding, and emotional peace. We reject commercial transactional models, ensuring our recommendations remain firmly tied to evidence-based audiological parameters.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div class="p-4 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#1E3E83] text-[24px]">verified</span>
          <p class="font-display font-bold text-[15px] text-[#0F1E3E] mt-2">Accurate Diagnosis</p>
          <p class="text-[12px] text-[#687779] mt-1">Calibrated sound-booth audiometry and impedance testing.</p>
        </div>
        <div class="p-4 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#1E3E83] text-[24px]">balance</span>
          <p class="font-display font-bold text-[15px] text-[#0F1E3E] mt-2">Ethical Standards</p>
          <p class="text-[12px] text-[#687779] mt-1">Zero sales quotas. Independent clinical judgment only.</p>
        </div>
        <div class="p-4 bg-[#F7FAF9] rounded-xl border border-[#DCE7E6]">
          <span class="material-symbols-outlined text-[#1E3E83] text-[24px]">family_restroom</span>
          <p class="font-display font-bold text-[15px] text-[#0F1E3E] mt-2">Newborns to Seniors</p>
          <p class="text-[12px] text-[#687779] mt-1">Compassionate, multi-generational audiology &amp; therapy.</p>
        </div>
      </div>
      <div class="pt-4">
        <a href="/book-appointment" class="inline-block px-7 py-3 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[14px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all">
          Book Consultation with Dr. Johnsavio →
        </a>
      </div>
    </div>
    <div class="lg:col-span-5 space-y-6">
      ${imagePlaceholder({ icon: 'medical_services', label: 'Dr. Johnsavio Fernandes', caption: 'Lead Audiologist & Speech Pathologist' })}
      <div class="bg-[#F7FAF9] p-8 rounded-2xl border border-[#DCE7E6] space-y-6">
        <span class="text-[11px] font-bold uppercase tracking-widest text-[#1E3E83]">Our Mission</span>
        <blockquote class="text-[20px] font-display font-semibold text-[#0F1E3E] italic leading-relaxed">
          "Our mission is simple — to help you reconnect with the world through <span class="text-[#1E3E83] not-italic font-bold">better hearing</span> and <span class="text-[#1E3E83] not-italic font-bold">clearer communication</span> improving your quality of life."
        </blockquote>
        <div class="pt-4 border-t border-[#DCE7E6]">
          <p class="font-display font-bold text-[16px] text-[#0F1E3E]">Dr. Johnsavio Fernandes</p>
          <p class="text-[13px] text-[#687779]">Lead Audiologist &amp; Speech Pathologist</p>
          <p class="text-[12px] text-[#687779] mt-1">Shanmukhapriya HealthCare Center, Chembur, Mumbai</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-[#F7FAF9] border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Why Choose PTA Solutions', title: 'Care Built on Precision and Trust', align: 'center' })}
    ${benefitGrid([
      { icon: 'biotech', title: 'Clinical Precision', desc: 'State-of-the-art audiometers, tympanometry, and speech mapping protocols calibrated to international accuracy benchmarks.' },
      { icon: 'verified_user', title: 'Ethical Recommendations', desc: 'Transparent guidance driven exclusively by clinical diagnostic data — zero sales pressure or unnecessary upsells.' },
      { icon: 'volunteer_activism', title: 'Patient Comfort Across Lifespans', desc: 'Gentle diagnostic environments tailored for fragile newborn screenings, adolescent speech fluency, and reassuring senior care.' },
      { icon: 'groups', title: 'Multi-Disciplinary Team', desc: 'Synergistic speech therapists and pediatric audiologists under one clinical roof.' },
    ])}
  </div>
</section>

<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'The Patient Pathway', title: 'Listen → Understand → Recommend → Support', align: 'center' })}
    ${processSteps([
      { icon: 'hearing', title: '1. Listen', desc: 'We start by listening to your unique lifestyle challenges, social environments, and personal communication goals.' },
      { icon: 'query_stats', title: '2. Understand', desc: 'Comprehensive Pure Tone Audiometry, Speech Discrimination, and Tympanometry map exact acoustic thresholds.' },
      { icon: 'recommend', title: '3. Recommend', desc: 'Transparent review of tailored rehabilitation options, trial fittings, or speech modules suited strictly to your needs.' },
      { icon: 'support_agent', title: '4. Support', desc: 'Continual sound tuning, ear mold adjustments, device servicing, and speech progress tracking across lifetime check-ins.' },
    ])}
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-6 text-center space-y-5">
    <h2 class="text-[26px] lg:text-[32px] font-display font-bold text-[#0F1E3E]">Ready to take the first step?</h2>
    <p class="text-[15px] text-[#687779]">Book a consultation with Dr. Johnsavio Fernandes at our Chembur clinic or request a doorstep visit.</p>
    <div class="flex flex-wrap justify-center gap-4 pt-2">
      <a href="/book-appointment" class="px-7 py-3.5 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[15px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-md">Book Appointment</a>
      <a href="tel:+919773545058" class="px-7 py-3.5 border border-[#DCE7E6] bg-white text-[#0F1E3E] font-display font-semibold text-[15px] rounded-lg hover:border-[#4FC3D9] transition-all">Call +91 9773545058</a>
    </div>
  </div>
</section>
`
};
