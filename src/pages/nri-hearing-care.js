const { pageHero, breadcrumbSchema, sectionHeading, faqAccordion, faqSchema } = require('../partials/layout.js');

const PATH = '/nri-hearing-care';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'NRI Hearing Care' }];

const FAQS = [
  { q: 'Can I enquire about hearing care for a parent living in Mumbai?', a: "Yes — you can contact us to enquire about appointments and care options for a parent living in Mumbai. We will coordinate directly with your parent, with their consent, before anything is confirmed." },
  { q: 'Can appointments be planned around an India visit?', a: 'Yes, let us know your travel dates and we will do our best to coordinate an appointment that fits your schedule.' },
  { q: 'Can the clinic share updates with me abroad?', a: "With your parent's consent, we can share appointment summaries and updates with you over WhatsApp or call." },
];

module.exports = {
  title: 'NRI Parent Hearing & Speech Care in Mumbai | PTA Solutions',
  description: 'Coordinate hearing and speech assessments for your parents in Mumbai while you live abroad. PTA Solutions offers clear recommendations and follow-up options.',
  active: 'nri',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'NRI & Family Hearing-Care Coordination' }],
    title: "You Live Abroad. We Help Coordinate Your Parents' Hearing &amp; Speech Care in Mumbai.",
    subtitle: "If your parent lives in Mumbai and you live abroad, PTA Solutions can help you understand their hearing or communication needs, explain the assessment findings and plan the next steps. With your parent's informed consent, we can discuss the recommendations with you by WhatsApp or video call.",
  }),
  path: PATH,
  extraSchema: [breadcrumbSchema(CRUMBS, PATH), faqSchema(FAQS)],
  body: `
<section class="py-8 bg-[#EEF6F8] border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
    <p class="text-[15px] font-display font-semibold text-[#1797A6]">Clear assessments. Practical recommendations. Care planned around your parent's needs.</p>
    <div class="flex flex-wrap gap-3">
      <a href="https://wa.me/919773545058?text=${encodeURIComponent("Hi, I'd like to enquire about NRI parent hearing/speech care.")}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 border border-emerald-500 text-emerald-700 bg-emerald-50 font-display font-bold text-[13px] rounded-lg hover:bg-emerald-100 transition-all flex items-center gap-2">
        <span class="material-symbols-outlined text-[16px]">chat</span> Speak to Our Team on WhatsApp
      </a>
      <a href="tel:+919773545058" class="px-5 py-2.5 border border-[#D7E3E8] bg-white text-[#0D234A] font-display font-bold text-[13px] rounded-lg hover:border-[#087F8C] transition-all flex items-center gap-2">
        <span class="material-symbols-outlined text-[16px]">call</span> Call PTA Solutions
      </a>
    </div>
  </div>
</section>

<!-- ENTRY SERVICE CARDS -->
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Entry Assessment Packages', title: 'Two Clear Ways to Start', subtitle: "We offer one entry assessment for hearing care and one for speech and communication care. After the assessment, any further tests, hearing aids, therapy or home visits are explained and quoted separately — nothing extra is assumed or added automatically.", align: 'center' })}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="p-8 bg-[#F8FAFC] rounded-2xl border-2 border-[#087F8C] space-y-5 flex flex-col">
        <div class="w-12 h-12 rounded-lg bg-white border border-[#D7E3E8] flex items-center justify-center text-[#1797A6]">
          <span class="material-symbols-outlined text-[26px]">hearing</span>
        </div>
        <div>
          <h3 class="text-[22px] font-display font-bold text-[#0D234A]">NRI Parent Hearing Assessment &amp; Care Plan</h3>
          <p class="text-[14px] text-[#64748B] mt-2">For families living abroad who want to understand their parent's hearing needs and the next steps for care.</p>
        </div>
        <div class="flex items-baseline gap-2">
          <span class="text-[32px] font-display font-bold text-[#1797A6]">₹9,999*</span>
        </div>
        <ul class="space-y-2 text-[13.5px] text-[#1F2937]">
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>Initial hearing consultation and relevant case history.</li>
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>Pure Tone Audiometry (PTA), when clinically appropriate and available within the confirmed package.</li>
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>Explanation and counselling of the hearing test results.</li>
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>Hearing-aid demonstration or trial, if clinically suitable and an appropriate device is available.</li>
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>Guidance on suitable hearing-aid options, features and indicative costs. A hearing aid is not included in the ₹9,999 fee.</li>
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>A personalised care plan and next-step recommendations.</li>
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>One scheduled WhatsApp or video discussion with the family member abroad, with the parent's informed consent.</li>
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>A brief written summary of findings and recommendations.</li>
        </ul>
        <div class="p-3 bg-[#EEF6F8] rounded-lg text-[12.5px] text-[#64748B] flex items-start gap-2">
          <span class="material-symbols-outlined text-[16px] text-[#1797A6] mt-0.5">location_on</span>
          <span>Appointment location: at our Chembur clinic. Home visits can be arranged separately — see Additional Care below.</span>
        </div>
        <div class="pt-2 mt-auto">
          <button type="button" onclick="prefillNriEnquiry('Hearing Care', '')" class="w-full py-3 bg-[#087F8C] text-[#0D234A] font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
            Enquire About Hearing Care
          </button>
          <p class="text-[11.5px] text-[#64748B] mt-3 leading-relaxed">*Proposed entry price, subject to final approval by PTA Solutions. Hearing aids, additional tests, travel, fitting appointments and ongoing follow-ups are not included unless specifically listed in a written estimate.</p>
        </div>
      </div>

      <div class="p-8 bg-[#F8FAFC] rounded-2xl border-2 border-[#087F8C] space-y-5 flex flex-col">
        <div class="w-12 h-12 rounded-lg bg-white border border-[#D7E3E8] flex items-center justify-center text-[#1797A6]">
          <span class="material-symbols-outlined text-[26px]">record_voice_over</span>
        </div>
        <div>
          <h3 class="text-[22px] font-display font-bold text-[#0D234A]">NRI Parent Speech &amp; Communication Assessment</h3>
          <p class="text-[14px] text-[#64748B] mt-2">For families living abroad whose parent needs support with speech, language, voice or everyday communication.</p>
        </div>
        <div class="flex items-baseline gap-2">
          <span class="text-[32px] font-display font-bold text-[#1797A6]">₹9,999*</span>
        </div>
        <ul class="space-y-2 text-[13.5px] text-[#1F2937]">
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>Initial speech and communication consultation and relevant case history.</li>
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>Clinical assessment selected according to the parent's presenting concern.</li>
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>Review of available medical reports and previous therapy records, if provided.</li>
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>Explanation of findings in clear, simple language.</li>
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>Initial therapy recommendations and individualised goals, where appropriate.</li>
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>Practical guidance for family members on supporting communication at home.</li>
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>One scheduled WhatsApp or video discussion with the family member abroad, with the parent's informed consent.</li>
          <li class="flex gap-2"><span class="material-symbols-outlined text-[#1797A6] text-[18px] shrink-0">check</span>A brief written assessment summary and proposed next steps.</li>
        </ul>
        <div class="p-3 bg-[#EEF6F8] rounded-lg text-[12.5px] text-[#64748B] flex items-start gap-2">
          <span class="material-symbols-outlined text-[16px] text-[#1797A6] mt-0.5">location_on</span>
          <span>Appointment location: at our Chembur clinic. Home visits can be arranged separately — see Additional Care below.</span>
        </div>
        <div class="pt-2 mt-auto">
          <button type="button" onclick="prefillNriEnquiry('Speech &amp; Communication Care', '')" class="w-full py-3 bg-[#087F8C] text-[#0D234A] font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all">
            Enquire About Speech Care
          </button>
          <p class="text-[11.5px] text-[#64748B] mt-3 leading-relaxed">*Proposed entry price, subject to confirmation of the assessment scope and fee. Ongoing therapy sessions, specialist assessments, home visits and travel are not included unless specifically listed in a written estimate.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ADDITIONAL CARE -->
<section class="py-16 bg-[#F8FAFC] border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Additional Care', title: "Additional Care, Based on Your Parent's Needs", subtitle: 'Every person\'s needs are different. After the initial assessment, we will explain the recommended next steps and provide a separate estimate before any additional service is booked.', align: 'center' })}
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="p-6 bg-white rounded-2xl border border-[#D7E3E8] space-y-3">
        <span class="material-symbols-outlined text-[#1797A6] text-[24px]">home</span>
        <h4 class="font-display font-bold text-[16px] text-[#0D234A]">Home Visits</h4>
        <p class="text-[13px] text-[#64748B] leading-relaxed">Home visits may be arranged where appropriate. The fee depends on location, travel and the services required. Please contact us for a quote.</p>
        <button type="button" onclick="prefillNriEnquiry('Not Sure', 'Interested in a home visit.')" class="text-[13px] font-bold text-[#1797A6] hover:underline">Arrange a Home Visit →</button>
      </div>
      <div class="p-6 bg-white rounded-2xl border border-[#D7E3E8] space-y-3">
        <span class="material-symbols-outlined text-[#1797A6] text-[24px]">hearing_disabled</span>
        <h4 class="font-display font-bold text-[16px] text-[#0D234A]">Hearing Aids and Aftercare</h4>
        <p class="text-[13px] text-[#64748B] leading-relaxed">If a hearing aid is recommended, we can discuss suitable options, arrange trials where available, and explain fitting, follow-up and fine-tuning requirements. Hearing-aid prices are quoted separately according to the selected device and services.</p>
        <button type="button" onclick="prefillNriEnquiry('Hearing Care', 'Interested in hearing aid options.')" class="text-[13px] font-bold text-[#1797A6] hover:underline">Ask About Hearing Aids →</button>
      </div>
      <div class="p-6 bg-white rounded-2xl border border-[#D7E3E8] space-y-3">
        <span class="material-symbols-outlined text-[#1797A6] text-[24px]">biotech</span>
        <h4 class="font-display font-bold text-[16px] text-[#0D234A]">Additional Hearing Tests</h4>
        <p class="text-[13px] text-[#64748B] leading-relaxed">Additional tests, such as tympanometry or other clinically indicated assessments, may be recommended where available. The need and cost will be explained before booking.</p>
      </div>
      <div class="p-6 bg-white rounded-2xl border border-[#D7E3E8] space-y-3">
        <span class="material-symbols-outlined text-[#1797A6] text-[24px]">record_voice_over</span>
        <h4 class="font-display font-bold text-[16px] text-[#0D234A]">Speech Therapy</h4>
        <p class="text-[13px] text-[#64748B] leading-relaxed">If ongoing speech therapy is recommended, we will discuss the therapy goals, suggested frequency, session fees and options for clinic, home or remote sessions where suitable.</p>
      </div>
      <div class="p-6 bg-white rounded-2xl border border-[#D7E3E8] space-y-3 md:col-span-2">
        <span class="material-symbols-outlined text-[#1797A6] text-[24px]">groups</span>
        <h4 class="font-display font-bold text-[16px] text-[#0D234A]">Follow-Up and Family Updates</h4>
        <p class="text-[13px] text-[#64748B] leading-relaxed">Follow-up visits, caregiver guidance and progress discussions can be planned according to the agreed care plan. Updates will be shared with family members only with the parent's informed consent.</p>
      </div>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'How NRI Parent Care Works', title: 'How NRI Parent Care Works', align: 'center' })}
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
      <div class="bg-[#F8FAFC] p-5 rounded-2xl border border-[#D7E3E8] space-y-2">
        <span class="text-[20px] font-mono font-extrabold text-[#1797A6]">01</span>
        <h4 class="font-display font-bold text-[14px] text-[#0D234A]">Tell Us About Your Parent</h4>
        <p class="text-[12.5px] text-[#64748B] leading-relaxed">Contact us and briefly explain your parent's hearing or communication concern. We will help you understand which appointment may be appropriate.</p>
      </div>
      <div class="bg-[#F8FAFC] p-5 rounded-2xl border border-[#D7E3E8] space-y-2">
        <span class="text-[20px] font-mono font-extrabold text-[#1797A6]">02</span>
        <h4 class="font-display font-bold text-[14px] text-[#0D234A]">Book the Initial Assessment</h4>
        <p class="text-[12.5px] text-[#64748B] leading-relaxed">We confirm the service, venue, fee and what is included before the appointment.</p>
      </div>
      <div class="bg-[#F8FAFC] p-5 rounded-2xl border border-[#D7E3E8] space-y-2">
        <span class="text-[20px] font-mono font-extrabold text-[#1797A6]">03</span>
        <h4 class="font-display font-bold text-[14px] text-[#0D234A]">Understand the Findings</h4>
        <p class="text-[12.5px] text-[#64748B] leading-relaxed">We explain the assessment results and discuss practical recommendations with your parent.</p>
      </div>
      <div class="bg-[#F8FAFC] p-5 rounded-2xl border border-[#D7E3E8] space-y-2">
        <span class="text-[20px] font-mono font-extrabold text-[#1797A6]">04</span>
        <h4 class="font-display font-bold text-[14px] text-[#0D234A]">Connect With You Abroad</h4>
        <p class="text-[12.5px] text-[#64748B] leading-relaxed">With your parent's informed consent, we can discuss the findings and next steps with you through a scheduled WhatsApp or video call.</p>
      </div>
      <div class="bg-[#F8FAFC] p-5 rounded-2xl border border-[#D7E3E8] space-y-2">
        <span class="text-[20px] font-mono font-extrabold text-[#1797A6]">05</span>
        <h4 class="font-display font-bold text-[14px] text-[#0D234A]">Choose the Next Steps</h4>
        <p class="text-[12.5px] text-[#64748B] leading-relaxed">If more care is needed, we provide a separate estimate for additional tests, hearing aids, home visits, therapy or follow-up. You can decide what to proceed with.</p>
      </div>
    </div>
  </div>
</section>

<!-- REASSURANCE -->
<section class="py-14 bg-[#EEF6F8] border-b border-[#D7E3E8]">
  <div class="max-w-3xl mx-auto px-6 text-center space-y-3">
    <h2 class="text-[24px] lg:text-[28px] font-display font-bold text-[#0D234A]">Clear Recommendations Before You Commit to Further Care</h2>
    <p class="text-[15px] text-[#1F2937] leading-relaxed">We explain the assessment findings, available options and expected costs before arranging additional services. You can review the recommendations with your parent and decide how you would like to proceed.</p>
  </div>
</section>

<!-- NRI ENQUIRY FORM -->
<section class="py-16 bg-white border-b border-[#D7E3E8]" id="nri-enquiry-section">
  <div class="max-w-2xl mx-auto px-6">
    ${sectionHeading({ eyebrow: 'Get In Touch', title: 'Enquire About NRI Parent Care', align: 'center' })}
    <div class="mt-8 bg-[#F8FAFC] p-8 rounded-2xl border border-[#D7E3E8] shadow-sm">
      <div id="nri-enquiry-success" class="hidden mb-4 p-4 bg-emerald-50 border border-emerald-500 rounded-xl text-emerald-700 text-[14px] flex items-center gap-2">
        <span class="material-symbols-outlined text-[20px]">check_circle</span>
        <span class="font-semibold">Thank you. We've received your enquiry and will contact you shortly.</span>
      </div>
      <div id="nri-enquiry-error" class="hidden mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-[14px] flex items-center gap-2">
        <span class="material-symbols-outlined text-[20px]">error</span>
        <span class="font-semibold">Could not send your enquiry. Please call or WhatsApp us at +91 9773545058.</span>
      </div>
      <form id="nri-enquiry-form" onsubmit="handleNriEnquiry(event)" class="space-y-4">
        <input type="hidden" name="_subject" value="New NRI Parent Care enquiry">
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Your Name *</label>
          <input type="text" name="name" required class="w-full h-11 px-3 bg-white border border-[#D7E3E8] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Your Email Address *</label>
          <input type="email" name="email" required class="w-full h-11 px-3 bg-white border border-[#D7E3E8] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Your WhatsApp / Phone Number (with country code) *</label>
          <input type="tel" name="whatsapp_phone" required placeholder="e.g. +1 234 567 8900" class="w-full h-11 px-3 bg-white border border-[#D7E3E8] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Where Does Your Parent Live? (Area/City)</label>
          <input type="text" name="parent_location" placeholder="e.g. Chembur, Mumbai" class="w-full h-11 px-3 bg-white border border-[#D7E3E8] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Which Service Do You Need? *</label>
          <select id="nri-service" name="service" required class="w-full h-11 px-3 bg-white border border-[#D7E3E8] rounded-lg text-[14px]">
            <option value="">Select one</option>
            <option>Hearing Care</option>
            <option>Speech &amp; Communication Care</option>
            <option>Not Sure</option>
          </select>
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Briefly Describe Your Concern (Optional)</label>
          <textarea id="nri-concern" name="concern" rows="3" class="w-full p-3 bg-white border border-[#D7E3E8] rounded-lg text-[14px]"></textarea>
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Preferred Contact Method *</label>
          <select name="contact_method" required class="w-full h-11 px-3 bg-white border border-[#D7E3E8] rounded-lg text-[14px]">
            <option value="">Select one</option>
            <option>WhatsApp</option>
            <option>Phone</option>
            <option>Email</option>
          </select>
        </div>
        <label class="flex items-start gap-2.5 text-[13px] text-[#1F2937] pt-1">
          <input type="checkbox" name="consent" required class="mt-0.5">
          <span>I agree to be contacted by PTA Solutions about this enquiry.</span>
        </label>
        <button type="submit" class="w-full py-3.5 bg-[#087F8C] text-white font-display font-bold text-[14px] rounded-lg hover:bg-[#0D234A] transition-all shadow-sm">
          Submit Enquiry
        </button>
        <p class="text-[12px] text-[#64748B] text-center">By submitting, you agree to our <a href="/privacy-policy" class="text-[#1797A6] hover:underline">Privacy Policy</a> on how we use your information. This submits an enquiry only — nothing is confirmed until we contact you, and we will confirm your parent's consent before sharing assessment details with any family member.</p>
      </form>
    </div>
  </div>
</section>

<section class="py-16 bg-[#F8FAFC] border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
    ${sectionHeading({ eyebrow: 'Common Questions', title: 'NRI Hearing Care FAQs', align: 'center' })}
    ${faqAccordion(FAQS)}
  </div>
</section>

<script>
  function prefillNriEnquiry(serviceValue, note) {
    const sel = document.getElementById('nri-service');
    if (sel && serviceValue) sel.value = serviceValue;
    const concern = document.getElementById('nri-concern');
    if (concern && note) concern.value = concern.value ? concern.value + ' ' + note : note;
    const section = document.getElementById('nri-enquiry-section');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  }

  async function handleNriEnquiry(e) {
    e.preventDefault();
    const result = await submitFormData(e.target);
    document.getElementById('nri-enquiry-error').classList.add('hidden');
    document.getElementById('nri-enquiry-success').classList.add('hidden');
    if (result.ok) {
      document.getElementById('nri-enquiry-success').classList.remove('hidden');
      e.target.reset();
    } else {
      document.getElementById('nri-enquiry-error').classList.remove('hidden');
    }
  }
</script>
`
};
