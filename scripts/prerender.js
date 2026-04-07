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
import { AREA_DATA } from '../src/data/areaData.js';
import { SERVICE_AREA_DATA, getServiceAreaFromSlug } from '../src/data/serviceAreaData.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const BASE_URL = 'https://totalwasteclearout.co.uk';

// Read the built index.html as the template
const template = readFileSync(join(DIST, 'index.html'), 'utf-8');

/**
 * Build FAQPage JSON-LD for a list of {q, a} FAQ items.
 */
function buildFaqSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a }
    }))
  };
}

/**
 * Strip ALL homepage-specific schemas (LocalBusiness, BreadcrumbList, FAQPage, Service)
 * from non-homepage pages to prevent duplicate/conflicting structured data.
 *
 * Each page's React component injects its own schemas via react-helmet-async at runtime.
 * Keeping the homepage schemas causes Google to see duplicates (e.g. 2 FAQPage schemas,
 * 2 LocalBusiness schemas) which triggers "invalid items" errors in Search Console.
 *
 * If a page-specific FAQ schema is provided, it is injected OUTSIDE the stripped block
 * so crawlers see it in the initial HTML before JavaScript executes.
 */
function replacePageSchemas(html, pageSchema) {
  const replacement = pageSchema
    ? `<script type="application/ld+json">${JSON.stringify(pageSchema)}</script>`
    : '';
  return html.replace(
    /<!-- PRERENDER_PAGE_SCHEMA_START -->[\s\S]*?<!-- PRERENDER_PAGE_SCHEMA_END -->/,
    replacement
  );
}

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
    description: 'Compassionate probate & estate clearance in Reading, Guildford, Slough. Respectful bereavement house clearance, charity donations, licensed from £600.',
    keywords: 'house clearance, house clearance reading, house clearance slough, house clearance guildford, house clearance berkshire, house clearance surrey, probate clearance reading, probate clearance berkshire, probate house clearance, estate clearance reading, estate clearance surrey, bereavement clearance, home clearance reading, property clearance berkshire, furniture removal reading, furniture disposal berkshire, house clearout near me, downsizing clearance, hoarder house clearance berkshire, whole house clearance, charity donation clearance, compassionate clearance service'
  },
  {
    path: '/services/end-of-tenancy',
    title: 'End of Tenancy Clearance Reading Slough Guildford | Same-Day Service',
    description: 'Professional end of tenancy clearance in Reading, Slough, Guildford & Berkshire. Same-day service, help secure your deposit. Licensed waste removal from £150.',
    keywords: 'end of tenancy clearance, end of tenancy clearance reading, end of tenancy clearance slough, end of tenancy clearance guildford, end of tenancy clearance berkshire, tenant clearance reading, tenant clearance slough, rental property clearance, move out clearance berkshire, landlord clearance reading, flat clearance slough, deposit return clearance, tenant clearout berkshire, letting agent clearance surrey, same day tenancy clearance, student house clearance, tenant rubbish removal'
  },
  {
    path: '/services/garden-waste',
    title: 'Garden Waste Removal Reading Guildford | Green Waste Clearance Berkshire',
    description: 'Professional garden waste removal in Reading, Guildford, Slough. Trees, hedges, grass cleared. 100% composted, same-day service, licensed from £80.',
    keywords: 'garden waste removal, garden waste removal reading, garden waste removal guildford, garden waste removal slough, garden waste removal berkshire, garden waste removal surrey, green waste clearance, green waste collection berkshire, tree removal reading, hedge clearance berkshire, garden clearance near me, garden rubbish removal, soil removal reading, turf removal berkshire, garden furniture disposal, landscaping waste clearance, same day garden waste collection, cheap garden waste removal'
  },
  {
    path: '/services/commercial-ripouts',
    title: 'Commercial Clearance Reading Slough | Office Strip-Out Berkshire Surrey',
    description: 'Professional commercial site rip-outs in Reading, Slough, Guildford. Office, retail, restaurant clearance. Out-of-hours service, licensed from £400.',
    keywords: 'commercial waste removal, commercial waste removal reading, commercial waste removal slough, office clearance reading, office clearance slough, office clearance guildford, office clearance berkshire, office strip out reading, retail clearance berkshire, restaurant clearance surrey, commercial rip out, office furniture removal reading, IT equipment disposal berkshire, WEEE disposal surrey, warehouse clearance reading, business waste removal, out of hours waste collection'
  },
  {
    path: '/services/construction-waste',
    title: 'Construction Waste Removal Reading Slough | Trade Waste Collection Berkshire',
    description: 'Fast construction & trade waste removal for builders in Reading, Slough, Guildford. No skip permits needed. Same-day service, licensed carrier from £120.',
    keywords: 'construction waste removal, construction waste removal reading, construction waste removal slough, builder waste removal, builder waste removal reading, trade waste collection berkshire, skip hire alternative reading, skip hire alternative slough, skip hire alternative berkshire, rubble removal reading, rubble clearance berkshire, plasterboard disposal, timber waste removal, building waste collection, renovation waste removal, same day builder waste collection, no permit waste removal'
  },
  {
    path: '/services/garage-shed',
    title: 'Garage Shed Demolition Reading Slough | Building Removal Berkshire Surrey',
    description: 'Complete garage & shed demolition in Reading, Slough, Guildford. Contents clearance, dismantling, waste removal. Same-day service, licensed from £250.',
    keywords: 'garage clearance, garage clearance reading, garage clearance slough, garage clearance berkshire, shed clearance reading, shed clearance berkshire, garage demolition reading, garage demolition berkshire, shed demolition reading, shed demolition berkshire, shed removal near me, outbuilding removal, concrete garage removal, prefab garage demolition, garden building removal, workshop demolition berkshire, garage contents clearance, same day shed removal'
  },

  // ── Info pages ─────────────────────────────────────────────────
  {
    path: '/waste-removal',
    title: 'Waste Removal Berkshire & Surrey | Same-Day Licensed Collection | Total Waste Clearout',
    description: 'Professional waste removal across Berkshire & Surrey. Same-day collection, fixed pricing, 94% recycling rate. Licensed carrier, £5M insured. Call 07769 844298 for a free quote.',
    keywords: 'waste removal, waste removal berkshire, waste removal surrey, waste removal near me, waste removal service, same day waste removal, licensed waste removal, rubbish removal berkshire, rubbish removal surrey, waste collection berkshire, junk removal berkshire, man and van waste removal, waste removal reading, waste removal slough, waste removal guildford, waste removal woking'
  },
  {
    path: '/services',
    title: 'Waste Removal Services Berkshire & Surrey | House, Garden, Commercial Clearance',
    description: 'Complete waste removal services in Berkshire & Surrey. House clearance, garden waste, office rip-outs, construction waste, garage demolition. 94% recycling rate. Same-day service. Call 07769 844298.',
    keywords: 'waste removal services, waste removal services berkshire, waste removal services surrey, rubbish clearance services, house clearance service, garden waste removal service, commercial waste removal service, construction waste removal service, garage shed demolition service, end of tenancy clearance service, skip hire alternative, junk removal service, bulky waste collection, furniture removal service, same day waste removal, licensed waste carrier berkshire, waste management services surrey'
  },
  {
    path: '/about',
    title: 'About Total Waste Clearout | Berkshire & Surrey Waste Removal Experts',
    description: 'Learn about Total Waste Clearout - Berkshire & Surrey\'s trusted waste removal company. 94% recycling rate, fully licensed, £5M insured. Serving Reading, Slough, Guildford, Woking, Bracknell, Windsor & more.',
    keywords: 'about total waste clearout, waste removal company berkshire, waste removal company surrey, rubbish clearance company reading, professional waste removal, licensed waste carrier, eco friendly waste disposal berkshire, trusted clearance company, waste removal experts berkshire, surrey junk removal specialists, 94 percent recycling rate, insured waste removal company'
  },
  {
    path: '/contact',
    title: 'Contact Us | Free Waste Removal Quote Berkshire & Surrey | Call 07769 844298',
    description: 'Contact Total Waste Clearout for a free waste removal quote. Call 07769 844298 or WhatsApp. 2-hour response time. Same-day service across Reading, Slough, Guildford & all Berkshire & Surrey.',
    keywords: 'contact waste removal, waste removal quote, free waste removal quote, waste removal quote berkshire, waste removal quote surrey, book waste collection, book rubbish clearance, waste removal phone number, waste removal whatsapp, get quote rubbish clearance, waste disposal reading phone, junk removal slough contact, clearance quote berkshire, book clearance guildford'
  },
  {
    path: '/areas',
    title: 'Areas We Serve | Waste Removal Reading, Slough, Guildford & 10+ Towns',
    description: 'Professional waste removal across Berkshire & Surrey. Serving Reading, Slough, Guildford, Woking, Bracknell, Windsor, Ascot, Egham, Maidenhead & Staines. Same-day service available.',
    keywords: 'waste removal areas, waste removal berkshire, waste removal surrey, waste removal reading, waste removal slough, waste removal guildford, waste removal woking, waste removal bracknell, waste removal windsor, waste removal ascot, waste removal egham, waste removal maidenhead, waste removal staines, rubbish clearance near me, waste collection near me, local waste removal, areas we serve'
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
    description: 'Professional waste removal in Reading, Berkshire. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.',
    keywords: 'waste removal reading, rubbish clearance reading, rubbish removal reading, junk removal reading, waste collection reading, skip hire alternative reading, house clearance reading, garden waste removal reading, commercial waste reading, bulky waste collection reading, furniture removal reading, same day waste collection reading, cheap waste removal reading, RG1 waste removal, RG2 rubbish clearance, RG4 waste removal, RG30 rubbish clearance, licensed waste carrier reading'
  },
  {
    path: '/waste-removal-slough',
    title: 'Waste Removal Slough | Rubbish Clearance SL1 | Same-Day Collection',
    description: 'Professional waste removal in Slough, Berkshire. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.',
    keywords: 'waste removal slough, rubbish clearance slough, rubbish removal slough, junk removal slough, waste collection slough, skip hire alternative slough, house clearance slough, garden waste removal slough, commercial waste slough, bulky waste collection slough, furniture removal slough, same day waste collection slough, cheap waste removal slough, SL1 waste removal, SL2 rubbish clearance, SL3 waste collection, licensed waste carrier slough, langley waste removal'
  },
  {
    path: '/waste-removal-guildford',
    title: 'Waste Removal Guildford | Rubbish Clearance GU1 | Same-Day Collection',
    description: 'Professional waste removal in Guildford, Surrey. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.',
    keywords: 'waste removal guildford, rubbish clearance guildford, rubbish removal guildford, junk removal guildford, waste collection guildford, skip hire alternative guildford, house clearance guildford, garden waste removal guildford, commercial waste guildford, bulky waste collection guildford, furniture removal guildford, same day waste collection guildford, cheap waste removal guildford, GU1 waste removal, GU2 rubbish clearance, surrey waste removal, licensed waste carrier guildford'
  },
  {
    path: '/waste-removal-woking',
    title: 'Waste Removal Woking | Rubbish Clearance GU21 | Same-Day Collection',
    description: 'Professional waste removal in Woking, Surrey. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.',
    keywords: 'waste removal woking, rubbish clearance woking, rubbish removal woking, junk removal woking, waste collection woking, skip hire alternative woking, house clearance woking, garden waste removal woking, commercial waste woking, bulky waste collection woking, furniture removal woking, same day waste collection woking, cheap waste removal woking, GU21 waste removal, GU22 rubbish clearance, surrey waste removal woking, licensed waste carrier woking'
  },
  {
    path: '/waste-removal-bracknell',
    title: 'Waste Removal Bracknell | Rubbish Clearance RG12 | Same-Day Collection',
    description: 'Professional waste removal in Bracknell, Berkshire. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.',
    keywords: 'waste removal bracknell, rubbish clearance bracknell, rubbish removal bracknell, junk removal bracknell, waste collection bracknell, skip hire alternative bracknell, house clearance bracknell, garden waste removal bracknell, commercial waste bracknell, bulky waste collection bracknell, furniture removal bracknell, same day waste collection bracknell, cheap waste removal bracknell, RG12 waste removal, RG42 rubbish clearance, berkshire waste removal bracknell'
  },
  {
    path: '/waste-removal-windsor',
    title: 'Waste Removal Windsor | Rubbish Clearance SL4 | Same-Day Collection',
    description: 'Professional waste removal in Windsor, Berkshire. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.',
    keywords: 'waste removal windsor, rubbish clearance windsor, rubbish removal windsor, junk removal windsor, waste collection windsor, skip hire alternative windsor, house clearance windsor, garden waste removal windsor, commercial waste windsor, bulky waste collection windsor, furniture removal windsor, same day waste collection windsor, cheap waste removal windsor, SL4 waste removal, berkshire waste removal windsor, eton waste removal'
  },
  {
    path: '/waste-removal-ascot',
    title: 'Waste Removal Ascot | Rubbish Clearance SL5 | Same-Day Collection',
    description: 'Professional waste removal in Ascot, Berkshire. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.',
    keywords: 'waste removal ascot, rubbish clearance ascot, rubbish removal ascot, junk removal ascot, waste collection ascot, skip hire alternative ascot, house clearance ascot, garden waste removal ascot, commercial waste ascot, bulky waste collection ascot, furniture removal ascot, same day waste collection ascot, SL5 waste removal, berkshire waste removal ascot, sunninghill waste removal, sunningdale waste removal'
  },
  {
    path: '/waste-removal-egham',
    title: 'Waste Removal Egham | Rubbish Clearance TW20 | Same-Day Collection',
    description: 'Professional waste removal in Egham, Surrey. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.',
    keywords: 'waste removal egham, rubbish clearance egham, rubbish removal egham, junk removal egham, waste collection egham, skip hire alternative egham, house clearance egham, garden waste removal egham, commercial waste egham, bulky waste collection egham, furniture removal egham, same day waste collection egham, TW20 waste removal, surrey waste removal egham, englefield green waste removal'
  },
  {
    path: '/waste-removal-maidenhead',
    title: 'Waste Removal Maidenhead | Rubbish Clearance SL6 | Same-Day Collection',
    description: 'Professional waste removal in Maidenhead, Berkshire. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.',
    keywords: 'waste removal maidenhead, rubbish clearance maidenhead, rubbish removal maidenhead, junk removal maidenhead, waste collection maidenhead, skip hire alternative maidenhead, house clearance maidenhead, garden waste removal maidenhead, commercial waste maidenhead, bulky waste collection maidenhead, furniture removal maidenhead, same day waste collection maidenhead, SL6 waste removal, berkshire waste removal maidenhead, cookham waste removal'
  },
  {
    path: '/waste-removal-staines',
    title: 'Waste Removal Staines | Rubbish Clearance TW18 | Same-Day Collection',
    description: 'Professional waste removal in Staines, Surrey. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.',
    keywords: 'waste removal staines, rubbish clearance staines, rubbish removal staines, junk removal staines, waste collection staines, skip hire alternative staines, house clearance staines, garden waste removal staines, commercial waste staines, bulky waste collection staines, furniture removal staines, same day waste collection staines, TW18 waste removal, TW19 rubbish clearance, staines upon thames waste removal, surrey waste removal staines'
  },

  // ── Service + Area combination pages (60 pages) ─────────────────
  // House Clearance
  { path: '/house-clearance-reading', title: 'House Clearance Reading | Probate & Home Clearance RG1 | Same-Day', description: 'Professional house clearance in Reading, Berkshire. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.', keywords: 'house clearance reading, home clearance reading, probate clearance reading, estate clearance reading, property clearance reading, furniture removal reading, house clearout reading, RG1 house clearance, bereavement clearance reading, downsizing clearance reading, landlord house clearance reading, cheap house clearance reading, same day house clearance reading' },
  { path: '/house-clearance-slough', title: 'House Clearance Slough | Probate & Home Clearance SL1 | Same-Day', description: 'Professional house clearance in Slough, Berkshire. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.', keywords: 'house clearance slough, home clearance slough, probate clearance slough, estate clearance slough, property clearance slough, furniture removal slough, house clearout slough, SL1 house clearance, bereavement clearance slough, downsizing clearance slough, landlord house clearance slough, cheap house clearance slough' },
  { path: '/house-clearance-guildford', title: 'House Clearance Guildford | Probate & Home Clearance GU1 | Same-Day', description: 'Professional house clearance in Guildford, Surrey. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.', keywords: 'house clearance guildford, home clearance guildford, probate clearance guildford, estate clearance guildford, property clearance guildford, furniture removal guildford, house clearout guildford, GU1 house clearance, bereavement clearance guildford, downsizing clearance guildford, landlord house clearance guildford' },
  { path: '/house-clearance-woking', title: 'House Clearance Woking | Probate & Home Clearance GU21 | Same-Day', description: 'Professional house clearance in Woking, Surrey. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.', keywords: 'house clearance woking, home clearance woking, probate clearance woking, estate clearance woking, property clearance woking, furniture removal woking, house clearout woking, GU21 house clearance, bereavement clearance woking, downsizing clearance woking' },
  { path: '/house-clearance-bracknell', title: 'House Clearance Bracknell | Probate & Home Clearance RG12 | Same-Day', description: 'Professional house clearance in Bracknell, Berkshire. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.', keywords: 'house clearance bracknell, home clearance bracknell, probate clearance bracknell, estate clearance bracknell, property clearance bracknell, furniture removal bracknell, house clearout bracknell, RG12 house clearance, bereavement clearance bracknell' },
  { path: '/house-clearance-windsor', title: 'House Clearance Windsor | Probate & Home Clearance SL4 | Same-Day', description: 'Professional house clearance in Windsor, Berkshire. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.', keywords: 'house clearance windsor, home clearance windsor, probate clearance windsor, estate clearance windsor, property clearance windsor, furniture removal windsor, house clearout windsor, SL4 house clearance, bereavement clearance windsor' },
  { path: '/house-clearance-ascot', title: 'House Clearance Ascot | Probate & Home Clearance SL5 | Same-Day', description: 'Professional house clearance in Ascot, Berkshire. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.', keywords: 'house clearance ascot, home clearance ascot, probate clearance ascot, estate clearance ascot, property clearance ascot, furniture removal ascot, house clearout ascot, SL5 house clearance' },
  { path: '/house-clearance-egham', title: 'House Clearance Egham | Probate & Home Clearance TW20 | Same-Day', description: 'Professional house clearance in Egham, Surrey. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.', keywords: 'house clearance egham, home clearance egham, probate clearance egham, estate clearance egham, property clearance egham, furniture removal egham, house clearout egham, TW20 house clearance' },
  { path: '/house-clearance-maidenhead', title: 'House Clearance Maidenhead | Probate & Home Clearance SL6 | Same-Day', description: 'Professional house clearance in Maidenhead, Berkshire. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.', keywords: 'house clearance maidenhead, home clearance maidenhead, probate clearance maidenhead, estate clearance maidenhead, property clearance maidenhead, furniture removal maidenhead, house clearout maidenhead, SL6 house clearance' },
  { path: '/house-clearance-staines', title: 'House Clearance Staines | Probate & Home Clearance TW18 | Same-Day', description: 'Professional house clearance in Staines, Surrey. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.', keywords: 'house clearance staines, home clearance staines, probate clearance staines, estate clearance staines, property clearance staines, furniture removal staines, house clearout staines, TW18 house clearance' },
  // End of Tenancy Clearance
  { path: '/end-of-tenancy-clearance-reading', title: 'End of Tenancy Clearance Reading | Tenant Clearout RG1 | Same-Day', description: 'Professional end of tenancy clearance in Reading, Berkshire. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.', keywords: 'end of tenancy clearance reading, tenant clearance reading, rental clearance reading, move out clearance reading, landlord clearance reading, flat clearance reading, RG1 end of tenancy, deposit return clearance reading, tenant clearout reading, letting agent clearance reading' },
  { path: '/end-of-tenancy-clearance-slough', title: 'End of Tenancy Clearance Slough | Tenant Clearout SL1 | Same-Day', description: 'Professional end of tenancy clearance in Slough, Berkshire. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.', keywords: 'end of tenancy clearance slough, tenant clearance slough, rental clearance slough, move out clearance slough, landlord clearance slough, flat clearance slough, SL1 end of tenancy, deposit return clearance slough, tenant clearout slough' },
  { path: '/end-of-tenancy-clearance-guildford', title: 'End of Tenancy Clearance Guildford | Tenant Clearout GU1 | Same-Day', description: 'Professional end of tenancy clearance in Guildford, Surrey. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.', keywords: 'end of tenancy clearance guildford, tenant clearance guildford, rental clearance guildford, move out clearance guildford, landlord clearance guildford, flat clearance guildford, GU1 end of tenancy, deposit return clearance guildford' },
  { path: '/end-of-tenancy-clearance-woking', title: 'End of Tenancy Clearance Woking | Tenant Clearout GU21 | Same-Day', description: 'Professional end of tenancy clearance in Woking, Surrey. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.', keywords: 'end of tenancy clearance woking, tenant clearance woking, rental clearance woking, move out clearance woking, landlord clearance woking, flat clearance woking, GU21 end of tenancy' },
  { path: '/end-of-tenancy-clearance-bracknell', title: 'End of Tenancy Clearance Bracknell | Tenant Clearout RG12 | Same-Day', description: 'Professional end of tenancy clearance in Bracknell, Berkshire. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.', keywords: 'end of tenancy clearance bracknell, tenant clearance bracknell, rental clearance bracknell, move out clearance bracknell, landlord clearance bracknell, flat clearance bracknell, RG12 end of tenancy' },
  { path: '/end-of-tenancy-clearance-windsor', title: 'End of Tenancy Clearance Windsor | Tenant Clearout SL4 | Same-Day', description: 'Professional end of tenancy clearance in Windsor, Berkshire. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.', keywords: 'end of tenancy clearance windsor, tenant clearance windsor, rental clearance windsor, move out clearance windsor, landlord clearance windsor, flat clearance windsor, SL4 end of tenancy' },
  { path: '/end-of-tenancy-clearance-ascot', title: 'End of Tenancy Clearance Ascot | Tenant Clearout SL5 | Same-Day', description: 'Professional end of tenancy clearance in Ascot, Berkshire. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.', keywords: 'end of tenancy clearance ascot, tenant clearance ascot, rental clearance ascot, move out clearance ascot, landlord clearance ascot, SL5 end of tenancy' },
  { path: '/end-of-tenancy-clearance-egham', title: 'End of Tenancy Clearance Egham | Tenant Clearout TW20 | Same-Day', description: 'Professional end of tenancy clearance in Egham, Surrey. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.', keywords: 'end of tenancy clearance egham, tenant clearance egham, rental clearance egham, move out clearance egham, student house clearance egham, TW20 end of tenancy' },
  { path: '/end-of-tenancy-clearance-maidenhead', title: 'End of Tenancy Clearance Maidenhead | Tenant Clearout SL6 | Same-Day', description: 'Professional end of tenancy clearance in Maidenhead, Berkshire. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.', keywords: 'end of tenancy clearance maidenhead, tenant clearance maidenhead, rental clearance maidenhead, move out clearance maidenhead, landlord clearance maidenhead, SL6 end of tenancy' },
  { path: '/end-of-tenancy-clearance-staines', title: 'End of Tenancy Clearance Staines | Tenant Clearout TW18 | Same-Day', description: 'Professional end of tenancy clearance in Staines, Surrey. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.', keywords: 'end of tenancy clearance staines, tenant clearance staines, rental clearance staines, move out clearance staines, landlord clearance staines, TW18 end of tenancy' },
  // Garden Waste Removal
  { path: '/garden-waste-removal-reading', title: 'Garden Waste Removal Reading | Green Waste Clearance RG1 | Same-Day', description: 'Garden waste removal in Reading, Berkshire. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.', keywords: 'garden waste removal reading, green waste clearance reading, garden clearance reading, tree removal reading, hedge clearance reading, soil removal reading, garden rubbish reading, RG1 garden waste, garden skip alternative reading, cheap garden waste removal reading' },
  { path: '/garden-waste-removal-slough', title: 'Garden Waste Removal Slough | Green Waste Clearance SL1 | Same-Day', description: 'Garden waste removal in Slough, Berkshire. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.', keywords: 'garden waste removal slough, green waste clearance slough, garden clearance slough, tree removal slough, hedge clearance slough, soil removal slough, SL1 garden waste, garden skip alternative slough' },
  { path: '/garden-waste-removal-guildford', title: 'Garden Waste Removal Guildford | Green Waste Clearance GU1 | Same-Day', description: 'Garden waste removal in Guildford, Surrey. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.', keywords: 'garden waste removal guildford, green waste clearance guildford, garden clearance guildford, tree removal guildford, hedge clearance guildford, soil removal guildford, GU1 garden waste, garden skip alternative guildford' },
  { path: '/garden-waste-removal-woking', title: 'Garden Waste Removal Woking | Green Waste Clearance GU21 | Same-Day', description: 'Garden waste removal in Woking, Surrey. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.', keywords: 'garden waste removal woking, green waste clearance woking, garden clearance woking, tree removal woking, hedge clearance woking, GU21 garden waste, garden skip alternative woking' },
  { path: '/garden-waste-removal-bracknell', title: 'Garden Waste Removal Bracknell | Green Waste Clearance RG12 | Same-Day', description: 'Garden waste removal in Bracknell, Berkshire. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.', keywords: 'garden waste removal bracknell, green waste clearance bracknell, garden clearance bracknell, tree removal bracknell, hedge clearance bracknell, RG12 garden waste, garden skip alternative bracknell' },
  { path: '/garden-waste-removal-windsor', title: 'Garden Waste Removal Windsor | Green Waste Clearance SL4 | Same-Day', description: 'Garden waste removal in Windsor, Berkshire. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.', keywords: 'garden waste removal windsor, green waste clearance windsor, garden clearance windsor, tree removal windsor, hedge clearance windsor, SL4 garden waste, garden skip alternative windsor' },
  { path: '/garden-waste-removal-ascot', title: 'Garden Waste Removal Ascot | Green Waste Clearance SL5 | Same-Day', description: 'Garden waste removal in Ascot, Berkshire. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.', keywords: 'garden waste removal ascot, green waste clearance ascot, garden clearance ascot, tree removal ascot, hedge clearance ascot, SL5 garden waste, garden skip alternative ascot' },
  { path: '/garden-waste-removal-egham', title: 'Garden Waste Removal Egham | Green Waste Clearance TW20 | Same-Day', description: 'Garden waste removal in Egham, Surrey. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.', keywords: 'garden waste removal egham, green waste clearance egham, garden clearance egham, tree removal egham, hedge clearance egham, TW20 garden waste, garden skip alternative egham' },
  { path: '/garden-waste-removal-maidenhead', title: 'Garden Waste Removal Maidenhead | Green Waste Clearance SL6 | Same-Day', description: 'Garden waste removal in Maidenhead, Berkshire. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.', keywords: 'garden waste removal maidenhead, green waste clearance maidenhead, garden clearance maidenhead, tree removal maidenhead, hedge clearance maidenhead, SL6 garden waste, garden skip alternative maidenhead' },
  { path: '/garden-waste-removal-staines', title: 'Garden Waste Removal Staines | Green Waste Clearance TW18 | Same-Day', description: 'Garden waste removal in Staines, Surrey. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.', keywords: 'garden waste removal staines, green waste clearance staines, garden clearance staines, tree removal staines, hedge clearance staines, TW18 garden waste, garden skip alternative staines' },
  // Commercial Waste Removal
  { path: '/commercial-waste-removal-reading', title: 'Commercial Waste Removal Reading | Office Clearance RG1 | Same-Day', description: 'Professional commercial waste removal in Reading, Berkshire. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.', keywords: 'commercial waste removal reading, office clearance reading, office strip out reading, office furniture removal reading, business waste reading, retail clearance reading, warehouse clearance reading, IT disposal reading, RG1 commercial waste, commercial clearance reading' },
  { path: '/commercial-waste-removal-slough', title: 'Commercial Waste Removal Slough | Office Clearance SL1 | Same-Day', description: 'Professional commercial waste removal in Slough, Berkshire. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.', keywords: 'commercial waste removal slough, office clearance slough, office strip out slough, office furniture removal slough, business waste slough, retail clearance slough, warehouse clearance slough, SL1 commercial waste, trading estate clearance slough' },
  { path: '/commercial-waste-removal-guildford', title: 'Commercial Waste Removal Guildford | Office Clearance GU1 | Same-Day', description: 'Professional commercial waste removal in Guildford, Surrey. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.', keywords: 'commercial waste removal guildford, office clearance guildford, office strip out guildford, office furniture removal guildford, business waste guildford, GU1 commercial waste, commercial clearance guildford' },
  { path: '/commercial-waste-removal-woking', title: 'Commercial Waste Removal Woking | Office Clearance GU21 | Same-Day', description: 'Professional commercial waste removal in Woking, Surrey. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.', keywords: 'commercial waste removal woking, office clearance woking, office strip out woking, business waste woking, GU21 commercial waste, commercial clearance woking' },
  { path: '/commercial-waste-removal-bracknell', title: 'Commercial Waste Removal Bracknell | Office Clearance RG12 | Same-Day', description: 'Professional commercial waste removal in Bracknell, Berkshire. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.', keywords: 'commercial waste removal bracknell, office clearance bracknell, office strip out bracknell, business waste bracknell, RG12 commercial waste, commercial clearance bracknell' },
  { path: '/commercial-waste-removal-windsor', title: 'Commercial Waste Removal Windsor | Office Clearance SL4 | Same-Day', description: 'Professional commercial waste removal in Windsor, Berkshire. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.', keywords: 'commercial waste removal windsor, office clearance windsor, office strip out windsor, business waste windsor, SL4 commercial waste, commercial clearance windsor' },
  { path: '/commercial-waste-removal-ascot', title: 'Commercial Waste Removal Ascot | Office Clearance SL5 | Same-Day', description: 'Professional commercial waste removal in Ascot, Berkshire. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.', keywords: 'commercial waste removal ascot, office clearance ascot, business waste ascot, SL5 commercial waste, commercial clearance ascot' },
  { path: '/commercial-waste-removal-egham', title: 'Commercial Waste Removal Egham | Office Clearance TW20 | Same-Day', description: 'Professional commercial waste removal in Egham, Surrey. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.', keywords: 'commercial waste removal egham, office clearance egham, business waste egham, TW20 commercial waste, commercial clearance egham' },
  { path: '/commercial-waste-removal-maidenhead', title: 'Commercial Waste Removal Maidenhead | Office Clearance SL6 | Same-Day', description: 'Professional commercial waste removal in Maidenhead, Berkshire. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.', keywords: 'commercial waste removal maidenhead, office clearance maidenhead, business waste maidenhead, SL6 commercial waste, commercial clearance maidenhead' },
  { path: '/commercial-waste-removal-staines', title: 'Commercial Waste Removal Staines | Office Clearance TW18 | Same-Day', description: 'Professional commercial waste removal in Staines, Surrey. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.', keywords: 'commercial waste removal staines, office clearance staines, business waste staines, TW18 commercial waste, commercial clearance staines, heathrow commercial waste' },
  // Construction Waste Removal
  { path: '/construction-waste-removal-reading', title: 'Construction Waste Removal Reading | Skip Alternative RG1 | Same-Day', description: 'Construction waste removal in Reading, Berkshire. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.', keywords: 'construction waste removal reading, skip alternative reading, builder waste reading, rubble removal reading, trade waste reading, building waste reading, RG1 construction waste, renovation waste reading, cheap skip alternative reading, same day builder waste reading' },
  { path: '/construction-waste-removal-slough', title: 'Construction Waste Removal Slough | Skip Alternative SL1 | Same-Day', description: 'Construction waste removal in Slough, Berkshire. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.', keywords: 'construction waste removal slough, skip alternative slough, builder waste slough, rubble removal slough, trade waste slough, building waste slough, SL1 construction waste, renovation waste slough' },
  { path: '/construction-waste-removal-guildford', title: 'Construction Waste Removal Guildford | Skip Alternative GU1 | Same-Day', description: 'Construction waste removal in Guildford, Surrey. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.', keywords: 'construction waste removal guildford, skip alternative guildford, builder waste guildford, rubble removal guildford, trade waste guildford, GU1 construction waste, renovation waste guildford' },
  { path: '/construction-waste-removal-woking', title: 'Construction Waste Removal Woking | Skip Alternative GU21 | Same-Day', description: 'Construction waste removal in Woking, Surrey. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.', keywords: 'construction waste removal woking, skip alternative woking, builder waste woking, rubble removal woking, trade waste woking, GU21 construction waste' },
  { path: '/construction-waste-removal-bracknell', title: 'Construction Waste Removal Bracknell | Skip Alternative RG12 | Same-Day', description: 'Construction waste removal in Bracknell, Berkshire. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.', keywords: 'construction waste removal bracknell, skip alternative bracknell, builder waste bracknell, rubble removal bracknell, trade waste bracknell, RG12 construction waste' },
  { path: '/construction-waste-removal-windsor', title: 'Construction Waste Removal Windsor | Skip Alternative SL4 | Same-Day', description: 'Construction waste removal in Windsor, Berkshire. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.', keywords: 'construction waste removal windsor, skip alternative windsor, builder waste windsor, rubble removal windsor, trade waste windsor, SL4 construction waste' },
  { path: '/construction-waste-removal-ascot', title: 'Construction Waste Removal Ascot | Skip Alternative SL5 | Same-Day', description: 'Construction waste removal in Ascot, Berkshire. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.', keywords: 'construction waste removal ascot, skip alternative ascot, builder waste ascot, rubble removal ascot, SL5 construction waste' },
  { path: '/construction-waste-removal-egham', title: 'Construction Waste Removal Egham | Skip Alternative TW20 | Same-Day', description: 'Construction waste removal in Egham, Surrey. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.', keywords: 'construction waste removal egham, skip alternative egham, builder waste egham, rubble removal egham, TW20 construction waste' },
  { path: '/construction-waste-removal-maidenhead', title: 'Construction Waste Removal Maidenhead | Skip Alternative SL6 | Same-Day', description: 'Construction waste removal in Maidenhead, Berkshire. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.', keywords: 'construction waste removal maidenhead, skip alternative maidenhead, builder waste maidenhead, rubble removal maidenhead, SL6 construction waste' },
  { path: '/construction-waste-removal-staines', title: 'Construction Waste Removal Staines | Skip Alternative TW18 | Same-Day', description: 'Construction waste removal in Staines, Surrey. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.', keywords: 'construction waste removal staines, skip alternative staines, builder waste staines, rubble removal staines, TW18 construction waste' },
  // Garage & Shed Clearance
  { path: '/garage-shed-clearance-reading', title: 'Garage & Shed Clearance Reading | Demolition & Removal RG1 | Same-Day', description: 'Garage & shed clearance in Reading, Berkshire. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.', keywords: 'garage clearance reading, shed clearance reading, garage demolition reading, shed demolition reading, shed removal reading, outbuilding removal reading, garage clearout reading, RG1 garage clearance, concrete garage removal reading' },
  { path: '/garage-shed-clearance-slough', title: 'Garage & Shed Clearance Slough | Demolition & Removal SL1 | Same-Day', description: 'Garage & shed clearance in Slough, Berkshire. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.', keywords: 'garage clearance slough, shed clearance slough, garage demolition slough, shed demolition slough, shed removal slough, outbuilding removal slough, SL1 garage clearance' },
  { path: '/garage-shed-clearance-guildford', title: 'Garage & Shed Clearance Guildford | Demolition & Removal GU1 | Same-Day', description: 'Garage & shed clearance in Guildford, Surrey. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.', keywords: 'garage clearance guildford, shed clearance guildford, garage demolition guildford, shed demolition guildford, shed removal guildford, outbuilding removal guildford, GU1 garage clearance' },
  { path: '/garage-shed-clearance-woking', title: 'Garage & Shed Clearance Woking | Demolition & Removal GU21 | Same-Day', description: 'Garage & shed clearance in Woking, Surrey. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.', keywords: 'garage clearance woking, shed clearance woking, garage demolition woking, shed demolition woking, shed removal woking, GU21 garage clearance' },
  { path: '/garage-shed-clearance-bracknell', title: 'Garage & Shed Clearance Bracknell | Demolition & Removal RG12 | Same-Day', description: 'Garage & shed clearance in Bracknell, Berkshire. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.', keywords: 'garage clearance bracknell, shed clearance bracknell, garage demolition bracknell, shed demolition bracknell, shed removal bracknell, RG12 garage clearance' },
  { path: '/garage-shed-clearance-windsor', title: 'Garage & Shed Clearance Windsor | Demolition & Removal SL4 | Same-Day', description: 'Garage & shed clearance in Windsor, Berkshire. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.', keywords: 'garage clearance windsor, shed clearance windsor, garage demolition windsor, shed demolition windsor, shed removal windsor, SL4 garage clearance' },
  { path: '/garage-shed-clearance-ascot', title: 'Garage & Shed Clearance Ascot | Demolition & Removal SL5 | Same-Day', description: 'Garage & shed clearance in Ascot, Berkshire. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.', keywords: 'garage clearance ascot, shed clearance ascot, garage demolition ascot, shed demolition ascot, shed removal ascot, SL5 garage clearance' },
  { path: '/garage-shed-clearance-egham', title: 'Garage & Shed Clearance Egham | Demolition & Removal TW20 | Same-Day', description: 'Garage & shed clearance in Egham, Surrey. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.', keywords: 'garage clearance egham, shed clearance egham, garage demolition egham, shed demolition egham, shed removal egham, TW20 garage clearance' },
  { path: '/garage-shed-clearance-maidenhead', title: 'Garage & Shed Clearance Maidenhead | Demolition & Removal SL6 | Same-Day', description: 'Garage & shed clearance in Maidenhead, Berkshire. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.', keywords: 'garage clearance maidenhead, shed clearance maidenhead, garage demolition maidenhead, shed demolition maidenhead, shed removal maidenhead, SL6 garage clearance' },
  { path: '/garage-shed-clearance-staines', title: 'Garage & Shed Clearance Staines | Demolition & Removal TW18 | Same-Day', description: 'Garage & shed clearance in Staines, Surrey. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.', keywords: 'garage clearance staines, shed clearance staines, garage demolition staines, shed demolition staines, shed removal staines, TW18 garage clearance' }
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

  // Replace canonical URL (trailing slash to match Netlify's served URL)
  const trailingPath = page.path.endsWith('/') ? page.path : `${page.path}/`;
  html = html.replace(
    /<link rel="canonical" href="[^"]*" \/>/,
    `<link rel="canonical" href="${BASE_URL}${trailingPath}" />`
  );

  // Replace Open Graph URL + title + description
  html = html.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${BASE_URL}${trailingPath}" />`
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
    `<meta property="twitter:url" content="${BASE_URL}${trailingPath}" />`
  );
  html = html.replace(
    /<meta property="twitter:title" content="[^"]*" \/>/,
    `<meta property="twitter:title" content="${page.title}" />`
  );
  html = html.replace(
    /<meta property="twitter:description" content="[^"]*" \/>/,
    `<meta property="twitter:description" content="${page.description}" />`
  );

  // Replace keywords if page has them
  if (page.keywords) {
    html = html.replace(
      /<meta name="keywords" content="[^"]*" \/>/,
      `<meta name="keywords" content="${page.keywords}" />`
    );
  }

  // ── Strip homepage schemas & inject page-specific FAQ schema ────────
  // All non-homepage pages: remove LocalBusiness, BreadcrumbList, FAQPage,
  // and Service schemas that belong to the homepage. Each page's React
  // component provides its own schemas via react-helmet-async.
  // For area & service-area pages, inject a FAQ schema into the static HTML
  // so Google sees it before JavaScript executes.
  const pageSlug = page.path.replace(/^\//, '');

  // Service+area combination page  (e.g. construction-waste-removal-egham)
  const serviceArea = getServiceAreaFromSlug(pageSlug);
  if (serviceArea) {
    const faqs = serviceArea.service.getFaqs(serviceArea.area);
    html = replacePageSchemas(html, buildFaqSchema(faqs));
  }
  // Area overview page  (e.g. waste-removal-egham)
  else if (AREA_DATA[pageSlug]) {
    const area = AREA_DATA[pageSlug];
    html = replacePageSchemas(html, buildFaqSchema(area.faqs));
  }
  // All other pages — remove homepage schemas entirely
  else {
    html = replacePageSchemas(html, null);
  }

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
