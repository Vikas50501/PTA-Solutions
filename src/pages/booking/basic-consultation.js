module.exports = {
  title: 'Basic Consultation Booking | PTA Solutions',
  description: 'Schedule your Basic Consultation with PTA Solutions Hearing and Speech Care Clinics, Chembur, Mumbai. Duration 1 hr, ₹10,000 to ₹20,000.',
  active: 'services',
  hero: '',
  body: `
<div class="max-w-4xl mx-auto px-6 py-12">
  <p class="text-[12px] text-[#687779] mb-3"><a href="/" class="cursor-pointer hover:underline">Home</a> / <a href="/book-appointment" class="cursor-pointer hover:underline">Book Appointment</a> / Basic Consultation</p>
  <span class="px-3 py-1 bg-[#4FC3D9]/20 text-[#163B6B] font-bold rounded-full text-[11px] uppercase tracking-wider">Service: Basic Consultation</span>
  <h1 class="text-[34px] font-display font-extrabold text-[#0F1E3E] mt-2">Basic Consultation</h1>
  <div class="mt-8 bg-white p-8 rounded-2xl border border-[#DCE7E6] shadow-sm space-y-6">
    <div class="flex flex-wrap items-center justify-between gap-4">
      <div>
        <h2 class="text-[22px] font-display font-bold text-[#0F1E3E]">Schedule your service</h2>
        <p class="text-[14px] text-[#687779] mt-1">Check out our availability and book the date and time that works for you.</p>
      </div>
      <div class="bg-[#F7FAF9] px-4 py-2 rounded-xl border border-[#DCE7E6] text-right">
        <span class="text-[11px] font-bold uppercase text-[#687779]">Duration &amp; Price</span>
        <p class="font-display font-bold text-[16px] text-[#1E3E83]">1 hr • ₹10,000 to ₹20,000</p>
      </div>
    </div>
    <form onsubmit="handleBooking(event, 'Basic Consultation')" class="space-y-4 pt-2">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Location Preference</label>
          <select class="w-full h-11 px-3 bg-[#F7FAF9] border border-[#DCE7E6] rounded-lg text-[14px]">
            <option>Clinic (Chembur)</option>
            <option>Home Visit</option>
          </select>
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Preferred Date</label>
          <input type="date" required class="w-full h-11 px-3 bg-[#F7FAF9] border border-[#DCE7E6] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Time Slot Window</label>
          <select class="w-full h-11 px-3 bg-[#F7FAF9] border border-[#DCE7E6] rounded-lg text-[14px]">
            <option>10:00 AM – 11:30 AM</option>
            <option>12:00 PM – 01:30 PM</option>
            <option>04:00 PM – 05:30 PM</option>
          </select>
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Patient Full Name *</label>
          <input type="text" required placeholder="e.g. Arvind Mehta" class="w-full h-11 px-3 bg-[#F7FAF9] border border-[#DCE7E6] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Contact Phone / WhatsApp *</label>
          <input type="tel" required placeholder="+91 97735 45058" class="w-full h-11 px-3 bg-[#F7FAF9] border border-[#DCE7E6] rounded-lg text-[14px]">
        </div>
        <div>
          <label class="block text-[11px] font-bold uppercase tracking-wider text-[#687779] mb-1">Primary Hearing Concern</label>
          <input type="text" placeholder="e.g. Muffled speech on television" class="w-full h-11 px-3 bg-[#F7FAF9] border border-[#DCE7E6] rounded-lg text-[14px]">
        </div>
      </div>
      <div class="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#DCE7E6]">
        <div class="text-[13px] text-[#687779]">Need help? Call clinic desk: <a href="tel:+919773545058" class="text-[#1E3E83] font-bold">+91 9773545058</a></div>
        <button type="submit" class="w-full sm:w-auto px-8 py-3 bg-[#4FC3D9] text-[#0F1E3E] font-display font-bold text-[14px] rounded-lg hover:bg-[#1E3E83] hover:text-white transition-all shadow-md">
          Confirm Basic Consultation Booking
        </button>
      </div>
    </form>
  </div>
</div>
`
};
