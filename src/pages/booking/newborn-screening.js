module.exports = {
  title: 'Newborn Screening Booking | PTA Solutions',
  description: 'Schedule your Newborn Screening appointment with PTA Solutions Hearing and Speech Care Clinics, Chembur, Mumbai.',
  active: 'services',
  hero: '',
  body: `
<div class="max-w-4xl mx-auto px-6 py-12">
  <p class="text-[12px] text-[#687779] mb-3"><a href="/" class="cursor-pointer hover:underline">Home</a> / <a href="/book-appointment" class="cursor-pointer hover:underline">Book Appointment</a> / Newborn Screening</p>
  <span class="px-3 py-1 bg-[#4FC3D9]/20 text-[#163B6B] font-bold rounded-full text-[11px] uppercase tracking-wider">Service: Newborn Screening</span>
  <h1 class="text-[34px] font-display font-extrabold text-[#0F1E3E] mt-2">Newborn Screening</h1>
  <div class="mt-8 bg-white p-8 rounded-2xl border border-[#DCE7E6] shadow-sm space-y-6">
    <div>
      <h2 class="text-[22px] font-display font-bold text-[#0F1E3E]">Schedule your service</h2>
      <p class="text-[14px] text-[#687779] mt-1">Check out our availability and book the date and time that works for you.</p>
    </div>
    <form onsubmit="handleBooking(event, 'Newborn Screening')" class="space-y-4 pt-2">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Screening Test Method</label>
          <select class="w-full h-11 px-3 bg-[#F7FAF9] border border-[#DCE7E6] rounded-lg text-[14px]">
            <option>Automated OAE (Otoacoustic Emissions)</option>
            <option>BERA / AABR Auditory Brainstem Test</option>
            <option>Comprehensive Newborn Battery (Both)</option>
          </select>
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Preferred Date</label>
          <input type="date" required class="w-full h-11 px-3 bg-[#F7FAF9] border border-[#DCE7E6] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Parent Full Name *</label>
          <input type="text" required placeholder="e.g. Pooja Deshmukh" class="w-full h-11 px-3 bg-[#F7FAF9] border border-[#DCE7E6] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Contact Phone / WhatsApp *</label>
          <input type="tel" required placeholder="+91 98765 43210" class="w-full h-11 px-3 bg-[#F7FAF9] border border-[#DCE7E6] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Infant Age (Weeks or Months)</label>
          <input type="text" placeholder="e.g. 4 Weeks" class="w-full h-11 px-3 bg-[#F7FAF9] border border-[#DCE7E6] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Location Preference</label>
          <select class="w-full h-11 px-3 bg-[#F7FAF9] border border-[#DCE7E6] rounded-lg text-[14px]">
            <option>Chembur Clinic</option>
            <option>Home Visit in Mumbai</option>
          </select>
        </div>
      </div>
      <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#DCE7E6]">
        <div class="text-[13px] text-[#687779]">Need help? Call clinic desk: <a href="tel:+919773545058" class="text-[#1E3E83] font-bold">+91 9773545058</a></div>
        <button type="submit" class="w-full sm:w-auto px-8 py-3 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[14px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-md">
          Confirm Newborn Screening Booking
        </button>
      </div>
    </form>
  </div>
</div>
`
};
