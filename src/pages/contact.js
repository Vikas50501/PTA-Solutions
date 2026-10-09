const { pageHero } = require('../partials/layout.js');

module.exports = {
  title: 'Contact Us | PTA Solutions Hearing & Speech Care Clinics',
  description: 'Contact PTA Solutions Hearing and Speech Care Clinics at Shanmukhapriya HealthCare Center, Chembur, Mumbai. Call +91 9773545058 or email ptasolutionshsc@gmail.com.',
  active: 'contact',
  hero: pageHero({
    crumbs: [{ label: 'Home', href: '/' }, { label: 'Contact Us' }],
    badges: [{ label: 'Direct Clinical Desk' }, { label: 'Chembur • Mumbai' }],
    title: 'Contact Us',
    subtitle: 'We are here to assist you and your family with compassionate, world-class audiology diagnostics and speech therapy care.',
  }),
  body: `
<section class="py-16 bg-white border-b border-[#DCE7E6]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-5 space-y-6">
      <div class="p-6 bg-[#F7FAF9] rounded-2xl border border-[#DCE7E6] space-y-6">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold uppercase tracking-widest text-[#1E3E83]">Clinic Headquarters</span>
          <div class="flex items-center gap-1">
            <span class="w-1 bg-[#4FC3D9] h-3 rounded wave-bar"></span>
            <span class="w-1 bg-[#1E3E83] h-5 rounded wave-bar"></span>
            <span class="w-1.5 bg-[#0F1E3E] h-7 rounded wave-bar"></span>
            <span class="w-1 bg-[#1E3E83] h-5 rounded wave-bar"></span>
            <span class="w-1 bg-[#4FC3D9] h-3 rounded wave-bar"></span>
          </div>
        </div>
        <div class="space-y-4 text-[14px] text-[#0F1E3E]">
          <div class="flex items-start gap-3.5">
            <span class="material-symbols-outlined text-[#1E3E83] text-[22px] mt-0.5">location_on</span>
            <div>
              <p class="font-display font-bold text-[16px] text-[#0F1E3E]">PTA Solutions Hearing and Speech Care Clinics</p>
              <p class="text-[13px] text-[#687779] mt-1 leading-relaxed">Shanmukhapriya HealthCare Center, 6th Floor, Shrikant Chambers -2, Above Surya Hospital, Next to R.K.Studio, Opp CROMA, Chembur, Mumbai - 400074</p>
            </div>
          </div>
          <div class="flex items-center gap-3.5 pt-2 border-t border-[#DCE7E6]">
            <span class="material-symbols-outlined text-[#1E3E83] text-[22px]">call</span>
            <div>
              <p class="text-[11px] font-bold uppercase tracking-wider text-[#687779]">Direct Phone</p>
              <a href="tel:+919773545058" class="text-[15px] font-bold text-[#0F1E3E] hover:text-[#1E3E83] transition-colors">+91 9773545058</a>
            </div>
          </div>
          <div class="flex items-center gap-3.5 pt-2 border-t border-[#DCE7E6]">
            <span class="material-symbols-outlined text-[#1E3E83] text-[22px]">mail</span>
            <div>
              <p class="text-[11px] font-bold uppercase tracking-wider text-[#687779]">Clinical Email</p>
              <a href="mailto:ptasolutionshsc@gmail.com" class="text-[15px] font-medium text-[#0F1E3E] hover:text-[#1E3E83] transition-colors">ptasolutionshsc@gmail.com</a>
            </div>
          </div>
        </div>
        <div class="p-4 bg-[#F1F4F3] rounded-xl border border-[#DCE7E6] flex items-center gap-3">
          <span class="material-symbols-outlined text-[#1E3E83] text-[24px]">verified</span>
          <div>
            <p class="font-display font-bold text-[13px] text-[#0F1E3E]">Supervised by Dr. Johnsavio Fernandes</p>
            <p class="text-[11px] text-[#687779]">Senior Audiologist &amp; Speech-Language Pathologist</p>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:col-span-7 bg-[#F7FAF9] p-8 rounded-2xl border border-[#DCE7E6] shadow-sm">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-display font-bold text-[22px] text-[#0F1E3E]">Send a Message</h3>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[#1E3E83]">Quick Response Guaranteed</span>
      </div>
      <div id="contact-page-success" class="hidden mb-4 p-4 bg-emerald-50 border border-emerald-500 rounded-xl text-emerald-700 text-[14px] flex items-center gap-2">
        <span class="material-symbols-outlined text-[20px]">check_circle</span>
        <span class="font-semibold">Thanks for submitting! We have received your message and will reach out promptly.</span>
      </div>
      <form onsubmit="handleContactPageForm(event)" class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">First Name *</label>
            <input type="text" required placeholder="e.g. Rahul" class="w-full h-11 px-3 bg-white border border-[#DCE7E6] rounded-lg text-[14px]">
          </div>
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Last Name *</label>
            <input type="text" required placeholder="e.g. Sharma" class="w-full h-11 px-3 bg-white border border-[#DCE7E6] rounded-lg text-[14px]">
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Email *</label>
            <input type="email" required placeholder="rahul@example.com" class="w-full h-11 px-3 bg-white border border-[#DCE7E6] rounded-lg text-[14px]">
          </div>
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Phone</label>
            <input type="tel" placeholder="+91 97735 45058" class="w-full h-11 px-3 bg-white border border-[#DCE7E6] rounded-lg text-[14px]">
          </div>
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Message *</label>
          <textarea rows="4" required placeholder="Describe your hearing, speech, or appointment inquiry..." class="w-full p-3 bg-white border border-[#DCE7E6] rounded-lg text-[14px]"></textarea>
        </div>
        <button type="submit" class="w-full sm:w-auto px-8 py-3 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[14px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-sm">
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>
`
};
