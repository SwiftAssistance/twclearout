/**
 * Generates public/sitemap.xml from the app's route data.
 * Run automatically as part of: npm run build
 */

import { writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { AREA_DATA } from '../src/data/areaData.js';
import { SERVICE_AREA_DATA, getServiceAreaSlug } from '../src/data/serviceAreaData.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE = 'https://totalwasteclearout.co.uk';
const today = new Date().toISOString().split('T')[0];

function urlBlock(slug, priority, changefreq, extraTags = '') {
  const loc = `${BASE}${slug}`;
  return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="en-GB"
      href="${loc}" />
${extraTags}  </url>`;
}

const urls = [];

// ── GROUP A — Core static pages ──────────────────────────────────────
urls.push(`  <url>
    <loc>${BASE}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en-GB"
      href="${BASE}/" />
    <image:image>
      <image:loc>${BASE}/hero.webp</image:loc>
      <image:title>Total Waste Clearout - Berkshire &amp; Surrey Waste Removal</image:title>
    </image:image>
    <image:image>
      <image:loc>${BASE}/logo-512.png</image:loc>
      <image:title>Total Waste Clearout Logo</image:title>
    </image:image>
  </url>`);

urls.push(urlBlock('/waste-removal/', '0.95', 'weekly'));
urls.push(urlBlock('/services/', '0.95', 'weekly'));
urls.push(urlBlock('/areas/', '0.90', 'weekly'));
urls.push(urlBlock('/about/', '0.85', 'monthly'));
urls.push(urlBlock('/contact/', '0.85', 'monthly'));

// ── GROUP B — Service pages ───────────────────────────────────────────
const servicePages = [
  '/services/home-probate-clearance/',
  '/services/end-of-tenancy/',
  '/services/garden-waste/',
  '/services/commercial-ripouts/',
  '/services/construction-waste/',
  '/services/garage-shed/',
];
for (const path of servicePages) {
  urls.push(urlBlock(path, '0.9', 'monthly'));
}

// ── GROUP C — Area pages ──────────────────────────────────────────────
for (const area of Object.values(AREA_DATA)) {
  urls.push(urlBlock(`/${area.slug}/`, '0.9', 'monthly'));
}

// ── GROUP D — Service+area combination pages ──────────────────────────
const highPriorityServices = new Set(['garden-waste-removal', 'house-clearance']);
for (const serviceKey of Object.keys(SERVICE_AREA_DATA)) {
  const priority = highPriorityServices.has(serviceKey) ? '0.9' : '0.85';
  const changefreq = highPriorityServices.has(serviceKey) ? 'weekly' : 'monthly';
  for (const areaKey of Object.keys(AREA_DATA)) {
    const slug = getServiceAreaSlug(serviceKey, areaKey);
    urls.push(urlBlock(`/${slug}/`, priority, changefreq));
  }
}

// ── GROUP E — Legal/utility pages ────────────────────────────────────
const legalPages = [
  '/privacy-policy/',
  '/cookie-usage/',
  '/legal/',
  '/sitemap/',
];
for (const path of legalPages) {
  urls.push(urlBlock(path, '0.5', 'yearly'));
}

// ── Build XML ─────────────────────────────────────────────────────────
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join('\n')}
</urlset>
`;

const outPath = join(__dirname, '..', 'public', 'sitemap.xml');
writeFileSync(outPath, xml, 'utf-8');
console.log(`✅ sitemap.xml written — ${urls.length} URLs total`);
