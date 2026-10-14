const { requestAppointmentForm, breadcrumbSchema } = require('../../partials/layout.js');

const PATH = '/booking/hearing-aids';
const CRUMBS = [{ label: 'Home', href: '/' }, { label: 'Book Appointment', href: '/book-appointment' }, { label: 'Hearing Aids' }];

module.exports = {
  title: 'Request a Hearing Aids Appointment | PTA Solutions',
  description: 'Request a Hearing Aids consultation with PTA Solutions Hearing and Speech Care Clinics, Chembur, Mumbai.',
  active: 'services',
  path: PATH,
  extraSchema: [breadcrumbSchema(CRUMBS, PATH)],
  hero: '',
  body: `
<div class="max-w-4xl mx-auto px-6 py-12">
  <p class="text-[12px] text-[#64748B] mb-3"><a href="/" class="cursor-pointer hover:underline">Home</a> / <a href="/book-appointment" class="cursor-pointer hover:underline">Book Appointment</a> / Hearing Aids</p>
  <h1 class="text-[34px] font-display font-extrabold text-[#0D234A] mt-2">Hearing Aids</h1>
  <div class="mt-8">
    ${requestAppointmentForm('Hearing Aids', 'booking-form-hearing-aids')}
  </div>
</div>
`
};
