/**
 * Post-build pre-rendering script.
 *
 * Generates a unique HTML file for every route so that search engines
 * receive the correct <title>, <meta description>, <link canonical>,
 * and structured data WITHOUT needing to execute JavaScript.
 *
 * This solves the #1 reason SPAs don't get indexed: Googlebot sees an
 * empty <div id="root"></div> and treats every page as a duplicate.
 *
 * Run automatically via: npm run build
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const BASE_URL = 'https://totalwasteclearout.co.uk';

// Read the built index.html as the template
const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

/**
 * Every route with its unique meta tags.
 * These are the SAME values used by react-helmet-async at runtime,
 * but baked into the static HTML so Google gets them immediately.
 */
const pages = [
  // ── Service pages ──────────────────────────────────────────────
  {
    path: '/services/home-probate-clearance',
    title: 'Probate House Clearance Reading Guildford | Bereavement Estate Clearance',
    description: 'Compassionate probate & estate clearance in Reading, Guildford, Slough. Respectful bereavement house clearance, charity donations, licensed from £600.'
  },
  {
    path: '/services/end-of-tenancy',
    title: 'End of Tenancy Clearance Reading Slough Guildford | Same-Day Service',
    description: 'Professional end of tenancy clearance in Reading, Slough, Guildford & Berkshire. Same-day service, help secure your deposit. Licensed waste removal from £150.'
  },
  {
    path: '/services/garden-waste',
    title: 'Garden Waste Removal Reading Guildford | Green Waste Clearance Berkshire',
    description: 'Professional garden waste removal in Reading, Guildford, Slough. Trees, hedges, grass cleared. 100% composted, same-day service, licensed from £80.'
  },
  {
    path: '/services/commercial-ripouts',
    title: 'Commercial Clearance Reading Slough | Office Strip-Out Berkshire Surrey',
    description: 'Professional commercial site rip-outs in Reading, Slough, Guildford. Office, retail, restaurant clearance. Out-of-hours service, licensed from £400.'
  },
  {
    path: '/services/construction-waste',
    title: 'Construction Waste Removal Reading Slough | Trade Waste Collection Berkshire',
    description: 'Fast construction & trade waste removal for builders in Reading, Slough, Guildford. No skip permits needed. Same-day service, licensed carrier from £120.'
  },
  {
    path: '/services/garage-shed',
    title: 'Garage Shed Demolition Reading Slough | Building Removal Berkshire Surrey',
    description: 'Complete garage & shed demolition in Reading, Slough, Guildford. Contents clearance, dismantling, waste removal. Same-day service, licensed from £250.'
  },

  // ── Info pages ─────────────────────────────────────────────────
  {
    path: '/services',
    title: 'Professional Waste Removal Services | Reading, Slough, Berkshire & Surrey',
    description: 'Complete waste removal services in Berkshire & Surrey. Home clearance, garden waste, office rip-outs, trade waste & more. 94% recycling rate. Same-day service available. Call 07769 844298.'
  },
  {
    path: '/about',
    title: 'About Us | Professional Waste Removal Berkshire & Surrey - 10+ Years Experience',
    description: 'Learn about Total Waste Clearout - Berkshire\'s trusted waste removal company with 10+ years experience. 94% recycling rate, fully licensed & insured. Serving Reading, Slough, Guildford & Surrey.'
  },
  {
    path: '/contact',
    title: 'Contact Us | Get a Quote for Waste Removal in Reading, Slough, Berkshire & Surrey',
    description: 'Contact Total Waste Clearout for professional waste removal services. Call 07769 844298 or message on WhatsApp. 2-hour response time. Serving Reading, Slough, Guildford & all Berkshire & Surrey.'
  },
  {
    path: '/areas',
    title: 'Areas We Serve | Waste Removal Berkshire & Surrey | Total Waste Clearout',
    description: 'Professional waste removal across Berkshire & Surrey. Serving Reading, Slough, Guildford, Woking, Bracknell, Windsor, Ascot, Egham, Maidenhead & Staines. Same-day service.'
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | Total Waste Clearout - GDPR Compliant Berkshire',
    description: 'Read our GDPR-compliant privacy policy. Learn how Total Waste Clearout protects your personal data for waste removal services in Berkshire & Surrey.'
  },
  {
    path: '/cookie-usage',
    title: 'Cookie Policy | Total Waste Clearout - Website Cookie Information',
    description: 'Transparent cookie policy for Total Waste Clearout. Learn what cookies we use, why we use them, and how to manage your cookie preferences online.'
  },
  {
    path: '/legal',
    title: 'Terms & Conditions | Total Waste Clearout - Service Agreement Berkshire',
    description: 'Legal terms and conditions for Total Waste Clearout services. Licensed waste carrier operating in Reading, Slough, Guildford, and across Berkshire & Surrey.'
  },
  {
    path: '/sitemap',
    title: 'Sitemap | Total Waste Clearout - All Pages',
    description: 'Complete sitemap for Total Waste Clearout. Browse all our waste removal services, information pages, and resources across Berkshire & Surrey.'
  },

  // ── Area pages (keyword-rich URLs) ─────────────────────────────
  {
    path: '/waste-removal-reading',
    title: 'Waste Removal Reading | Rubbish Clearance RG1 | Same-Day Collection',
    description: 'Professional waste removal in Reading, Berkshire. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.'
  },
  {
    path: '/waste-removal-slough',
    title: 'Waste Removal Slough | Rubbish Clearance SL1 | Same-Day Collection',
    description: 'Professional waste removal in Slough, Berkshire. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.'
  },
  {
    path: '/waste-removal-guildford',
    title: 'Waste Removal Guildford | Rubbish Clearance GU1 | Same-Day Collection',
    description: 'Professional waste removal in Guildford, Surrey. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.'
  },
  {
    path: '/waste-removal-woking',
    title: 'Waste Removal Woking | Rubbish Clearance GU21 | Same-Day Collection',
    description: 'Professional waste removal in Woking, Surrey. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.'
  },
  {
    path: '/waste-removal-bracknell',
    title: 'Waste Removal Bracknell | Rubbish Clearance RG12 | Same-Day Collection',
    description: 'Professional waste removal in Bracknell, Berkshire. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.'
  },
  {
    path: '/waste-removal-windsor',
    title: 'Waste Removal Windsor | Rubbish Clearance SL4 | Same-Day Collection',
    description: 'Professional waste removal in Windsor, Berkshire. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.'
  },
  {
    path: '/waste-removal-ascot',
    title: 'Waste Removal Ascot | Rubbish Clearance SL5 | Same-Day Collection',
    description: 'Professional waste removal in Ascot, Berkshire. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.'
  },
  {
    path: '/waste-removal-egham',
    title: 'Waste Removal Egham | Rubbish Clearance TW20 | Same-Day Collection',
    description: 'Professional waste removal in Egham, Surrey. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.'
  },
  {
    path: '/waste-removal-maidenhead',
    title: 'Waste Removal Maidenhead | Rubbish Clearance SL6 | Same-Day Collection',
    description: 'Professional waste removal in Maidenhead, Berkshire. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.'
  },
  {
    path: '/waste-removal-staines',
    title: 'Waste Removal Staines | Rubbish Clearance TW18 | Same-Day Collection',
    description: 'Professional waste removal in Staines, Surrey. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.'
  }
];

let created = 0;

for (const page of pages) {
  // Replace title
  let html = template.replace(
    /<title>[^<]*<\/title>/,
    `<title>${page.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${page.description}" />`
  );

  // Replace canonical URL
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${BASE_URL}${page.path}" />`
  );

  // Replace Open Graph URL + title + description
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${BASE_URL}${page.path}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${page.description}" />`
  );

  // Replace Twitter URL + title + description
  html = html.replace(
    /<meta property="twitter:url" content="[^"]*" \/>/,
    `<meta property="twitter:url" content="${BASE_URL}${page.path}" />`
  );
  html = html.replace(
    /<meta property="twitter:title" content="[^"]*" \/>/,
    `<meta property="twitter:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta property="twitter:description" content="[^"]*" \/>/,
    `<meta property="twitter:description" content="${page.description}" />`
  );

  // Write to dist/<path>/index.html
  const outDir = join(DIST, page.path);
  if (!existsSync(outDir)) {
    mkdirSync(outDir, { recursive: true });
  }
  writeFileSync(join(outDir, 'index.html'), html, 'utf-8');
  created++;
}

console.log(`\n✅ Pre-rendered ${created} pages with unique meta tags.`);
console.log('   Google will now see unique title, description & canonical for every route.\n');
