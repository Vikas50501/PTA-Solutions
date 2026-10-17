const { pageHero, breadcrumbSchema } = require('../partials/layout.js');

const PATH = '/contact';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Contact Us' }];

module.exports = {
  title: 'Contact PTA Solutions Hearing and Speech Care Clinics',
  description: 'Contact PTA Solutions Hearing and Speech Care Clinics at Shanmukhapriya Healthcare Centre, Chembur, Mumbai. Call +91 9773545058 or email ptasolutionshsc@gmail.com.',
  active: 'contact',
  hero: pageHero({
    crumbs: CRUMBS,
    badges: [{ label: 'Direct Clinical Desk' }, { label: 'Chembur • Mumbai' }],
    title: 'Contact PTA Solutions',
    subtitle: 'We are here to assist you and your family with audiology diagnostics and speech therapy care.',
  }),
  path: PATH,
  extraSchema: [breadcrumbSchema(CRUMBS, PATH)],
  body: `
<section class="py-16 bg-white border-b border-[#D7E3E8]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
    <div class="lg:col-span-5 space-y-6">
      <div class="relative bg-white p-3 border border-[#D7E3E8] rounded-2xl shadow-md">
        <img src="/assets/clinic/clinic-signage.webp" alt="PTA Solutions Hearing and Speech Care Clinics signage, Audiometry and Speech Therapy Room" class="w-full h-auto aspect-[4/3] object-cover rounded-xl">
      </div>
      <div class="p-6 bg-[#F8FAFC] rounded-2xl border border-[#D7E3E8] space-y-6">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold uppercase tracking-widest text-[#1797A6]">Clinic Headquarters</span>
          <div class="flex items-center gap-1">
            <span class="w-1 bg-[#087F8C] h-3 rounded"></span>
            <span class="w-1 bg-[#1797A6] h-5 rounded"></span>
            <span class="w-1.5 bg-[#0D234A] h-7 rounded"></span>
            <span class="w-1 bg-[#1797A6] h-5 rounded"></span>
            <span class="w-1 bg-[#087F8C] h-3 rounded"></span>
          </div>
        </div>
        <div class="space-y-4 text-[14px] text-[#0D234A]">
          <div class="flex items-start gap-3.5">
            <span class="material-symbols-outlined text-[#1797A6] text-[22px] mt-0.5">location_on</span>
            <div>
              <p class="font-display font-bold text-[16px] text-[#0D234A]">PTA Solutions Hearing and Speech Care Clinics</p>
              <p class="text-[13px] text-[#64748B] mt-1 leading-relaxed">Shanmukhapriya Healthcare Centre, 6th Floor, Shrikant Chambers -2, Above Surya Hospital, Next to R.K.Studio, Opp CROMA, Chembur, Mumbai - 400074</p>
              <a href="https://maps.app.goo.gl/6NxZW5o8YwbTGYAdA" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1 text-[12px] font-bold text-[#1797A6] hover:underline mt-1.5">
                Get Directions <span class="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>
          <div class="flex items-center gap-3.5 pt-2 border-t border-[#D7E3E8]">
            <span class="material-symbols-outlined text-[#1797A6] text-[22px]">call</span>
            <div>
              <p class="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Direct Phone</p>
              <a href="tel:+919773545058" class="text-[15px] font-bold text-[#0D234A] hover:text-[#1797A6] transition-colors">+91 9773545058</a>
            </div>
          </div>
          <div class="flex items-center gap-3.5 pt-2 border-t border-[#D7E3E8]">
            <span class="material-symbols-outlined text-[#1797A6] text-[22px]">chat</span>
            <div>
              <p class="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">WhatsApp</p>
              <a href="https://wa.me/919773545058" target="_blank" rel="noopener noreferrer" class="text-[15px] font-bold text-[#0D234A] hover:text-[#1797A6] transition-colors">Chat with us</a>
            </div>
          </div>
          <div class="flex items-center gap-3.5 pt-2 border-t border-[#D7E3E8]">
            <span class="material-symbols-outlined text-[#1797A6] text-[22px]">mail</span>
            <div>
              <p class="text-[11px] font-bold uppercase tracking-wider text-[#64748B]">Clinical Email</p>
              <a href="mailto:ptasolutionshsc@gmail.com" class="text-[15px] font-medium text-[#0D234A] hover:text-[#1797A6] transition-colors">ptasolutionshsc@gmail.com</a>
            </div>
          </div>
          <div class="flex items-start gap-3.5 pt-2 border-t border-[#D7E3E8]">
            <span class="material-symbols-outlined text-[#1797A6] text-[22px] mt-0.5">schedule</span>
            <div>
              <p class="text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Opening Hours</p>
              <div class="text-[13px] text-[#0D234A] space-y-0.5">
                <p>Monday – Saturday: <span class="font-semibold">11:00 AM – 7:00 PM</span></p>
                <p>Sunday: <span class="font-semibold text-[#64748B]">Closed</span></p>
              </div>
            </div>
          </div>
        </div>
        <a href="https://share.google/IQ3eMohHWIxNQhR0P" target="_blank" rel="noopener noreferrer" class="p-4 bg-[#EEF6F8] rounded-xl border border-[#D7E3E8] flex items-center gap-3 hover:border-[#1797A6] transition-colors">
          <span class="material-symbols-outlined text-[#1797A6] text-[24px]">reviews</span>
          <div>
            <p class="font-display font-bold text-[13px] text-[#0D234A]">View Us on Google</p>
            <p class="text-[11px] text-[#64748B]">See our Google Business Profile &amp; reviews</p>
          </div>
        </a>
        <div class="p-4 bg-[#EEF6F8] rounded-xl border border-[#D7E3E8] flex items-center gap-3">
          <span class="material-symbols-outlined text-[#1797A6] text-[24px]">verified</span>
          <div>
            <p class="font-display font-bold text-[13px] text-[#0D234A]">Johnsavio Fernandes, BASLP, DHLS, BNYS</p>
            <p class="text-[11px] text-[#64748B]">Audiologist &amp; Speech-Language Pathologist, PTA Solutions, Chembur, Mumbai</p>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:col-span-7 bg-[#F8FAFC] p-8 rounded-2xl border border-[#D7E3E8] shadow-sm">
      <div class="flex items-center justify-between mb-4">
        <h3 class="font-display font-bold text-[22px] text-[#0D234A]">Send a Message</h3>
        <span class="text-[11px] font-bold uppercase tracking-wider text-[#1797A6]">Quick Response Guaranteed</span>
      </div>
      <div id="contact-page-success" class="hidden mb-4 p-4 bg-emerald-50 border border-emerald-500 rounded-xl text-emerald-700 text-[14px] flex items-center gap-2">
        <span class="material-symbols-outlined text-[20px]">check_circle</span>
        <span class="font-semibold">Thanks for submitting! We have received your message and will reach out promptly.</span>
      </div>
      <form onsubmit="handleContactPageForm(event)" class="space-y-4">
        <input type="hidden" name="_subject" value="New contact form message - PTA Solutions website">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">First Name *</label>
            <input type="text" name="first_name" required placeholder="e.g. Rahul" class="w-full h-11 px-3 bg-white border border-[#D7E3E8] rounded-lg text-[14px]">
          </div>
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Last Name *</label>
            <input type="text" name="last_name" required placeholder="e.g. Sharma" class="w-full h-11 px-3 bg-white border border-[#D7E3E8] rounded-lg text-[14px]">
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Email *</label>
            <input type="email" name="email" required placeholder="rahul@example.com" class="w-full h-11 px-3 bg-white border border-[#D7E3E8] rounded-lg text-[14px]">
          </div>
          <div>
            <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Phone</label>
            <input type="tel" name="phone" placeholder="+91 97735 45058" class="w-full h-11 px-3 bg-white border border-[#D7E3E8] rounded-lg text-[14px]">
          </div>
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Message *</label>
          <textarea name="message" rows="4" required placeholder="Describe your hearing, speech, or appointment inquiry..." class="w-full p-3 bg-white border border-[#D7E3E8] rounded-lg text-[14px]"></textarea>
        </div>
        <button type="submit" class="w-full sm:w-auto px-8 py-3 bg-[#087F8C] text-[#0D234A] font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-sm">
          Send Message
        </button>
        <p class="text-[12px] text-[#64748B]">By submitting, you agree to our <a href="/privacy-policy" class="text-[#1797A6] hover:underline">Privacy Policy</a> on how we use your information.</p>
      </form>
    </div>
  </div>
</section>
`
};
