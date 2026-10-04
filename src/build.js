const fs = require('fs');
const path = require('path');
const { page } = require('./partials/layout.js');

const ROOT = path.join(__dirname, '..');

// route -> page module (relative to src/pages)
const ROUTES = {
  'about': 'about.js',
  'services': 'services/index.js',
  'services/complete-care': 'services/complete-care.js',
  'services/hearing-tests': 'services/hearing-tests.js',
  'services/hearing-aids': 'services/hearing-aids.js',
  'services/speech-therapy': 'services/speech-therapy.js',
  'services/newborn-screening': 'services/newborn-screening.js',
  'services/basic-consultation': 'services/basic-consultation.js',
  'services/premium-nri-care': 'services/premium-nri-care.js',
  'nri-hearing-care': 'nri-hearing-care.js',
  'book-appointment': 'book-appointment.js',
  'booking/hearing-tests': 'booking/hearing-tests.js',
  'booking/hearing-aids': 'booking/hearing-aids.js',
  'booking/speech-therapy': 'booking/speech-therapy.js',
  'booking/newborn-screening': 'booking/newborn-screening.js',
  'booking/basic-consultation': 'booking/basic-consultation.js',
  'booking/premium-nri-care': 'booking/premium-nri-care.js',
  'contact': 'contact.js',
};

for (const [route, modPath] of Object.entries(ROUTES)) {
  const mod = require(path.join(__dirname, 'pages', modPath));
  const html = page(mod);
  const outDir = path.join(ROOT, route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
  console.log('wrote', route + '/index.html');
}

console.log(`\nBuilt ${Object.keys(ROUTES).length} pages. index.html (Home) was left untouched.`);
