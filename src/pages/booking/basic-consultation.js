const { requestAppointmentForm, breadcrumbSchema } = require('../../partials/layout.js');

const PATH = '/booking/basic-consultation';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Book Appointment', href: '/book-appointment' }, { label: 'Basic Consultation' }];

module.exports = {
  title: 'Request a Basic Consultation Appointment | PTA Solutions',
  description: 'Request a Basic Consultation with PTA Solutions Hearing and Speech Care Clinics, Chembur, Mumbai.',
  active: 'services',
  path: PATH,
  extraSchema: [breadcrumbSchema(CRUMBS, PATH)],
  hero: '',
  body: `
<div class="max-w-4xl mx-auto px-6 py-12">
  <p class="text-[12px] text-[#64748B] mb-3"><a href="/" class="cursor-pointer hover:underline">Home</a> / <a href="/book-appointment" class="cursor-pointer hover:underline">Book Appointment</a> / Basic Consultation</p>
  <h1 class="text-[34px] font-display font-extrabold text-[#0D234A] mt-2">Basic Consultation</h1>
  <div class="mt-8">
    ${requestAppointmentForm('Basic Consultation', 'booking-form-basic-consultation')}
  </div>
</div>
`
};
