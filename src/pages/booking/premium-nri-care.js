module.exports = {
  title: 'Premium NRI Care Booking | PTA Solutions',
  description: 'Schedule Premium NRI Care home visits with PTA Solutions Hearing and Speech Care Clinics, Chembur, Mumbai. Duration 1 hr, ₹2L to ₹3.5L.',
  active: 'services',
  hero: '',
  body: `
<div class="max-w-4xl mx-auto px-6 py-12">
  <p class="text-[12px] text-[#64748B] mb-3"><a href="/" class="cursor-pointer hover:underline">Home</a> / <a href="/book-appointment" class="cursor-pointer hover:underline">Book Appointment</a> / Premium NRI Care</p>
  <span class="px-3 py-1 bg-[#087F8C]/20 text-[#0D234A] font-bold rounded-full text-[11px] uppercase tracking-wider">Service: Premium NRI Care</span>
  <h1 class="text-[34px] font-display font-extrabold text-[#0D234A] mt-2">Premium NRI Care</h1>
  <div class="mt-8 bg-white p-8 rounded-2xl border border-[#D7E3E8] shadow-sm space-y-6">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0D234A]">Schedule your service</h2>
        <p class="text-[14px] text-[#64748B] mt-1">Check out our availability and book the date and time that works for you.</p>
      </div>
      <div class="bg-[#F8FAFC] px-4 py-2 rounded-xl border border-[#D7E3E8] text-right">
        <span class="text-[11px] font-bold uppercase text-[#64748B]">Concierge Tier</span>
        <p class="font-display font-bold text-[16px] text-[#1797A6]">1 hr • ₹2L to ₹3.5L</p>
      </div>
    </div>
    <form onsubmit="handleBooking(event, 'Premium NRI Care')" class="space-y-4 pt-2">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Parent Full Name (In Mumbai) *</label>
          <input type="text" required placeholder="e.g. Mr. K. R. Sharma" class="w-full h-11 px-3 bg-[#F8FAFC] border border-[#D7E3E8] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Parent Mumbai Address / Area</label>
          <input type="text" required placeholder="e.g. Chembur East / Bandra West" class="w-full h-11 px-3 bg-[#F8FAFC] border border-[#D7E3E8] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Family Member Abroad (Name &amp; Country)</label>
          <input type="text" required placeholder="e.g. Siddharth Sharma (London, UK)" class="w-full h-11 px-3 bg-[#F8FAFC] border border-[#D7E3E8] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">International WhatsApp Number *</label>
          <input type="tel" required placeholder="+44 7911 123456" class="w-full h-11 px-3 bg-[#F8FAFC] border border-[#D7E3E8] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Preferred First Visit Date</label>
          <input type="date" required class="w-full h-11 px-3 bg-[#F8FAFC] border border-[#D7E3E8] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-1">Preferred Tele-Briefing Window</label>
          <select class="w-full h-11 px-3 bg-[#F8FAFC] border border-[#D7E3E8] rounded-lg text-[14px]">
            <option>UK / European Afternoon (02:00 PM GMT)</option>
            <option>US Morning / India Evening (07:00 PM IST)</option>
            <option>UAE / Gulf Morning (11:00 AM GST)</option>
          </select>
        </div>
      </div>
      <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#D7E3E8]">
        <div class="text-[13px] text-[#64748B]">Need help? Call clinic desk: <a href="tel:+919773545058" class="text-[#1797A6] font-bold">+91 9773545058</a></div>
        <button type="submit" class="w-full sm:w-auto px-8 py-3 bg-[#087F8C] text-[#0D234A] font-display font-bold text-[14px] rounded-lg hover:bg-[#1797A6] hover:text-white transition-all shadow-md">
          Confirm NRI Care Concierge Intake
        </button>
      </div>
    </form>
  </div>
</div>
`
};
