const { pageHero, breadcrumbSchema } = require('../partials/layout.js');

const PATH = '/privacy-policy';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }];

module.exports = {
  title: 'Privacy Policy | PTA Solutions',
  description: 'How PTA Solutions Hearing and Speech Care Clinics collects, uses and protects information submitted through enquiry and appointment forms.',
  active: 'privacy',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Your Information' }],
    title: 'Privacy Policy',
    subtitle: 'How we handle the information you share with us through this website.',
  }),
  path: PATH,
  extraSchema: [breadcrumbSchema(CRUMBS, PATH)],
  body: `
<section class="py-16 bg-white">
  <div class="max-w-3xl mx-auto px-6 space-y-8 text-[15px] text-[#64748B] leading-relaxed">
    <div>
      <h2 class="text-[20px] font-display font-bold text-[#0D234A] mb-2">What We Collect</h2>
      <p>When you submit a contact, enquiry, or appointment-request form on this website, we collect the information you provide — such as your name, phone or WhatsApp number, email address, and any message or appointment details you enter.</p>
    </div>
    <div>
      <h2 class="text-[20px] font-display font-bold text-[#0D234A] mb-2">How We Use It</h2>
      <p>We use this information only to respond to your enquiry, confirm appointment requests, and coordinate your care with PTA Solutions Hearing and Speech Care Clinics. We do not sell or rent your information to third parties.</p>
    </div>
    <div>
      <h2 class="text-[20px] font-display font-bold text-[#0D234A] mb-2">Family and NRI Enquiries</h2>
      <p>Where a family member enquires on behalf of a patient (for example, under our NRI Hearing Care coordination), we share patient details and appointment updates with that family member only with the patient's consent.</p>
    </div>
    <div>
      <h2 class="text-[20px] font-display font-bold text-[#0D234A] mb-2">Contacting Us About Your Data</h2>
      <p>If you have questions about the information you've submitted, or would like it corrected or removed, please contact us at <a href="mailto:ptasolutionshsc@gmail.com" class="text-[#1797A6] font-semibold hover:underline">ptasolutionshsc@gmail.com</a> or <a href="tel:+919773545058" class="text-[#1797A6] font-semibold hover:underline">+91 9773545058</a>.</p>
    </div>
    <div class="p-5 bg-[#EEF6F8] rounded-xl border border-[#D7E3E8] text-[13px]">
      This page is a general summary and is pending final review by the clinic owner and, if needed, a legal advisor before launch.
    </div>
  </div>
</section>
`
};
