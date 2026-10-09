const fs = require('fs');
const path = require('path');
const { page, SITE_URL } = require('./partials/layout.js');

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
  const html = page({ ...mod, path: '/' + route });
  const outDir = path.join(ROOT, route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
  console.log('wrote', route + '/index.html');
}

// --- robots.txt ---
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
fs.writeFileSync(path.join(ROOT, 'robots.txt'), robotsTxt, 'utf-8');
console.log('wrote robots.txt');

// --- sitemap.xml ---
const today = new Date().toISOString().split('T')[0];
const allRoutes = ['', ...Object.keys(ROUTES)];
const priorityFor = (route) => {
  if (route === '') return '1.0';
  if (route === 'services' || route === 'about' || route === 'contact' || route === 'book-appointment') return '0.9';
  if (route.startsWith('services/') || route === 'nri-hearing-care') return '0.8';
  return '0.6';
};
const urlEntries = allRoutes.map(route => {
  const loc = route === '' ? SITE_URL + '/' : `${SITE_URL}/${route}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priorityFor(route)}</priority>
  </url>`;
}).join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemapXml, 'utf-8');
console.log('wrote sitemap.xml');

console.log(`\nBuilt ${Object.keys(ROUTES).length} pages + robots.txt + sitemap.xml. index.html (Home) was left untouched.`);
