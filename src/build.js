const fs = require('fs');
const path = require('path');
const { page, SITE_URL } = require('./partials/layout.js');

const ROOT = path.join(__dirname, '..');

// route -> page module (relative to src/pages). '' is the Home page, written to the repo root.
const ROUTES = {
  '': 'home.js',
  'about': 'about.js',
  'services': 'services/index.js',
  'services/complete-care': 'services/complete-care.js',
  'services/hearing-tests': 'services/hearing-tests.js',
  'services/hearing-aids': 'services/hearing-aids.js',
  'services/speech-therapy': 'services/speech-therapy.js',
  'services/newborn-screening': 'services/newborn-screening.js',
  'services/basic-consultation': 'services/basic-consultation.js',
  'nri-hearing-care': 'nri-hearing-care.js',
  'book-appointment': 'book-appointment.js',
  'booking/hearing-tests': 'booking/hearing-tests.js',
  'booking/hearing-aids': 'booking/hearing-aids.js',
  'booking/speech-therapy': 'booking/speech-therapy.js',
  'booking/newborn-screening': 'booking/newborn-screening.js',
  'booking/basic-consultation': 'booking/basic-consultation.js',
  'contact': 'contact.js',
  'privacy-policy': 'privacy-policy.js',
};

for (const [route, modPath] of Object.entries(ROUTES)) {
  const mod = require(path.join(__dirname, 'pages', modPath));
  const html = page({ ...mod, path: '/' + route });
  const outDir = path.join(ROOT, route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf-8');
  console.log('wrote', (route || '(home)') + '/index.html');
}

// --- custom 404 page (served automatically by Vercel's static output) ---
const notFoundMod = require(path.join(__dirname, 'pages', '404.js'));
const notFoundHtml = page({ ...notFoundMod, path: '/404' });
fs.writeFileSync(path.join(ROOT, '404.html'), notFoundHtml, 'utf-8');
console.log('wrote 404.html');

// --- robots.txt ---
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`;
fs.writeFileSync(path.join(ROOT, 'robots.txt'), robotsTxt, 'utf-8');
console.log('wrote robots.txt');

// --- sitemap.xml ---
const today = new Date().toISOString().split('T')[0];
const allRoutes = Object.keys(ROUTES);
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

console.log(`\nBuilt ${Object.keys(ROUTES).length} pages (including Home) + 404.html + robots.txt + sitemap.xml.`);
