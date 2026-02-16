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
  },

  // ── Service + Area combination pages (60 pages) ─────────────────
  // House Clearance
  { path: '/house-clearance-reading', title: 'House Clearance Reading | Probate & Home Clearance RG1 | Same-Day', description: 'Professional house clearance in Reading, Berkshire. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.' },
  { path: '/house-clearance-slough', title: 'House Clearance Slough | Probate & Home Clearance SL1 | Same-Day', description: 'Professional house clearance in Slough, Berkshire. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.' },
  { path: '/house-clearance-guildford', title: 'House Clearance Guildford | Probate & Home Clearance GU1 | Same-Day', description: 'Professional house clearance in Guildford, Surrey. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.' },
  { path: '/house-clearance-woking', title: 'House Clearance Woking | Probate & Home Clearance GU21 | Same-Day', description: 'Professional house clearance in Woking, Surrey. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.' },
  { path: '/house-clearance-bracknell', title: 'House Clearance Bracknell | Probate & Home Clearance RG12 | Same-Day', description: 'Professional house clearance in Bracknell, Berkshire. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.' },
  { path: '/house-clearance-windsor', title: 'House Clearance Windsor | Probate & Home Clearance SL4 | Same-Day', description: 'Professional house clearance in Windsor, Berkshire. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.' },
  { path: '/house-clearance-ascot', title: 'House Clearance Ascot | Probate & Home Clearance SL5 | Same-Day', description: 'Professional house clearance in Ascot, Berkshire. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.' },
  { path: '/house-clearance-egham', title: 'House Clearance Egham | Probate & Home Clearance TW20 | Same-Day', description: 'Professional house clearance in Egham, Surrey. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.' },
  { path: '/house-clearance-maidenhead', title: 'House Clearance Maidenhead | Probate & Home Clearance SL6 | Same-Day', description: 'Professional house clearance in Maidenhead, Berkshire. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.' },
  { path: '/house-clearance-staines', title: 'House Clearance Staines | Probate & Home Clearance TW18 | Same-Day', description: 'Professional house clearance in Staines, Surrey. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.' },
  // End of Tenancy Clearance
  { path: '/end-of-tenancy-clearance-reading', title: 'End of Tenancy Clearance Reading | Tenant Clearout RG1 | Same-Day', description: 'Professional end of tenancy clearance in Reading, Berkshire. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.' },
  { path: '/end-of-tenancy-clearance-slough', title: 'End of Tenancy Clearance Slough | Tenant Clearout SL1 | Same-Day', description: 'Professional end of tenancy clearance in Slough, Berkshire. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.' },
  { path: '/end-of-tenancy-clearance-guildford', title: 'End of Tenancy Clearance Guildford | Tenant Clearout GU1 | Same-Day', description: 'Professional end of tenancy clearance in Guildford, Surrey. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.' },
  { path: '/end-of-tenancy-clearance-woking', title: 'End of Tenancy Clearance Woking | Tenant Clearout GU21 | Same-Day', description: 'Professional end of tenancy clearance in Woking, Surrey. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.' },
  { path: '/end-of-tenancy-clearance-bracknell', title: 'End of Tenancy Clearance Bracknell | Tenant Clearout RG12 | Same-Day', description: 'Professional end of tenancy clearance in Bracknell, Berkshire. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.' },
  { path: '/end-of-tenancy-clearance-windsor', title: 'End of Tenancy Clearance Windsor | Tenant Clearout SL4 | Same-Day', description: 'Professional end of tenancy clearance in Windsor, Berkshire. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.' },
  { path: '/end-of-tenancy-clearance-ascot', title: 'End of Tenancy Clearance Ascot | Tenant Clearout SL5 | Same-Day', description: 'Professional end of tenancy clearance in Ascot, Berkshire. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.' },
  { path: '/end-of-tenancy-clearance-egham', title: 'End of Tenancy Clearance Egham | Tenant Clearout TW20 | Same-Day', description: 'Professional end of tenancy clearance in Egham, Surrey. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.' },
  { path: '/end-of-tenancy-clearance-maidenhead', title: 'End of Tenancy Clearance Maidenhead | Tenant Clearout SL6 | Same-Day', description: 'Professional end of tenancy clearance in Maidenhead, Berkshire. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.' },
  { path: '/end-of-tenancy-clearance-staines', title: 'End of Tenancy Clearance Staines | Tenant Clearout TW18 | Same-Day', description: 'Professional end of tenancy clearance in Staines, Surrey. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.' },
  // Garden Waste Removal
  { path: '/garden-waste-removal-reading', title: 'Garden Waste Removal Reading | Green Waste Clearance RG1 | Same-Day', description: 'Garden waste removal in Reading, Berkshire. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.' },
  { path: '/garden-waste-removal-slough', title: 'Garden Waste Removal Slough | Green Waste Clearance SL1 | Same-Day', description: 'Garden waste removal in Slough, Berkshire. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.' },
  { path: '/garden-waste-removal-guildford', title: 'Garden Waste Removal Guildford | Green Waste Clearance GU1 | Same-Day', description: 'Garden waste removal in Guildford, Surrey. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.' },
  { path: '/garden-waste-removal-woking', title: 'Garden Waste Removal Woking | Green Waste Clearance GU21 | Same-Day', description: 'Garden waste removal in Woking, Surrey. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.' },
  { path: '/garden-waste-removal-bracknell', title: 'Garden Waste Removal Bracknell | Green Waste Clearance RG12 | Same-Day', description: 'Garden waste removal in Bracknell, Berkshire. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.' },
  { path: '/garden-waste-removal-windsor', title: 'Garden Waste Removal Windsor | Green Waste Clearance SL4 | Same-Day', description: 'Garden waste removal in Windsor, Berkshire. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.' },
  { path: '/garden-waste-removal-ascot', title: 'Garden Waste Removal Ascot | Green Waste Clearance SL5 | Same-Day', description: 'Garden waste removal in Ascot, Berkshire. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.' },
  { path: '/garden-waste-removal-egham', title: 'Garden Waste Removal Egham | Green Waste Clearance TW20 | Same-Day', description: 'Garden waste removal in Egham, Surrey. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.' },
  { path: '/garden-waste-removal-maidenhead', title: 'Garden Waste Removal Maidenhead | Green Waste Clearance SL6 | Same-Day', description: 'Garden waste removal in Maidenhead, Berkshire. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.' },
  { path: '/garden-waste-removal-staines', title: 'Garden Waste Removal Staines | Green Waste Clearance TW18 | Same-Day', description: 'Garden waste removal in Staines, Surrey. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.' },
  // Commercial Waste Removal
  { path: '/commercial-waste-removal-reading', title: 'Commercial Waste Removal Reading | Office Clearance RG1 | Same-Day', description: 'Professional commercial waste removal in Reading, Berkshire. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.' },
  { path: '/commercial-waste-removal-slough', title: 'Commercial Waste Removal Slough | Office Clearance SL1 | Same-Day', description: 'Professional commercial waste removal in Slough, Berkshire. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.' },
  { path: '/commercial-waste-removal-guildford', title: 'Commercial Waste Removal Guildford | Office Clearance GU1 | Same-Day', description: 'Professional commercial waste removal in Guildford, Surrey. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.' },
  { path: '/commercial-waste-removal-woking', title: 'Commercial Waste Removal Woking | Office Clearance GU21 | Same-Day', description: 'Professional commercial waste removal in Woking, Surrey. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.' },
  { path: '/commercial-waste-removal-bracknell', title: 'Commercial Waste Removal Bracknell | Office Clearance RG12 | Same-Day', description: 'Professional commercial waste removal in Bracknell, Berkshire. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.' },
  { path: '/commercial-waste-removal-windsor', title: 'Commercial Waste Removal Windsor | Office Clearance SL4 | Same-Day', description: 'Professional commercial waste removal in Windsor, Berkshire. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.' },
  { path: '/commercial-waste-removal-ascot', title: 'Commercial Waste Removal Ascot | Office Clearance SL5 | Same-Day', description: 'Professional commercial waste removal in Ascot, Berkshire. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.' },
  { path: '/commercial-waste-removal-egham', title: 'Commercial Waste Removal Egham | Office Clearance TW20 | Same-Day', description: 'Professional commercial waste removal in Egham, Surrey. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.' },
  { path: '/commercial-waste-removal-maidenhead', title: 'Commercial Waste Removal Maidenhead | Office Clearance SL6 | Same-Day', description: 'Professional commercial waste removal in Maidenhead, Berkshire. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.' },
  { path: '/commercial-waste-removal-staines', title: 'Commercial Waste Removal Staines | Office Clearance TW18 | Same-Day', description: 'Professional commercial waste removal in Staines, Surrey. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.' },
  // Construction Waste Removal
  { path: '/construction-waste-removal-reading', title: 'Construction Waste Removal Reading | Skip Alternative RG1 | Same-Day', description: 'Construction waste removal in Reading, Berkshire. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.' },
  { path: '/construction-waste-removal-slough', title: 'Construction Waste Removal Slough | Skip Alternative SL1 | Same-Day', description: 'Construction waste removal in Slough, Berkshire. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.' },
  { path: '/construction-waste-removal-guildford', title: 'Construction Waste Removal Guildford | Skip Alternative GU1 | Same-Day', description: 'Construction waste removal in Guildford, Surrey. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.' },
  { path: '/construction-waste-removal-woking', title: 'Construction Waste Removal Woking | Skip Alternative GU21 | Same-Day', description: 'Construction waste removal in Woking, Surrey. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.' },
  { path: '/construction-waste-removal-bracknell', title: 'Construction Waste Removal Bracknell | Skip Alternative RG12 | Same-Day', description: 'Construction waste removal in Bracknell, Berkshire. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.' },
  { path: '/construction-waste-removal-windsor', title: 'Construction Waste Removal Windsor | Skip Alternative SL4 | Same-Day', description: 'Construction waste removal in Windsor, Berkshire. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.' },
  { path: '/construction-waste-removal-ascot', title: 'Construction Waste Removal Ascot | Skip Alternative SL5 | Same-Day', description: 'Construction waste removal in Ascot, Berkshire. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.' },
  { path: '/construction-waste-removal-egham', title: 'Construction Waste Removal Egham | Skip Alternative TW20 | Same-Day', description: 'Construction waste removal in Egham, Surrey. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.' },
  { path: '/construction-waste-removal-maidenhead', title: 'Construction Waste Removal Maidenhead | Skip Alternative SL6 | Same-Day', description: 'Construction waste removal in Maidenhead, Berkshire. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.' },
  { path: '/construction-waste-removal-staines', title: 'Construction Waste Removal Staines | Skip Alternative TW18 | Same-Day', description: 'Construction waste removal in Staines, Surrey. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.' },
  // Garage & Shed Clearance
  { path: '/garage-shed-clearance-reading', title: 'Garage & Shed Clearance Reading | Demolition & Removal RG1 | Same-Day', description: 'Garage & shed clearance in Reading, Berkshire. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.' },
  { path: '/garage-shed-clearance-slough', title: 'Garage & Shed Clearance Slough | Demolition & Removal SL1 | Same-Day', description: 'Garage & shed clearance in Slough, Berkshire. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.' },
  { path: '/garage-shed-clearance-guildford', title: 'Garage & Shed Clearance Guildford | Demolition & Removal GU1 | Same-Day', description: 'Garage & shed clearance in Guildford, Surrey. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.' },
  { path: '/garage-shed-clearance-woking', title: 'Garage & Shed Clearance Woking | Demolition & Removal GU21 | Same-Day', description: 'Garage & shed clearance in Woking, Surrey. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.' },
  { path: '/garage-shed-clearance-bracknell', title: 'Garage & Shed Clearance Bracknell | Demolition & Removal RG12 | Same-Day', description: 'Garage & shed clearance in Bracknell, Berkshire. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.' },
  { path: '/garage-shed-clearance-windsor', title: 'Garage & Shed Clearance Windsor | Demolition & Removal SL4 | Same-Day', description: 'Garage & shed clearance in Windsor, Berkshire. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.' },
  { path: '/garage-shed-clearance-ascot', title: 'Garage & Shed Clearance Ascot | Demolition & Removal SL5 | Same-Day', description: 'Garage & shed clearance in Ascot, Berkshire. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.' },
  { path: '/garage-shed-clearance-egham', title: 'Garage & Shed Clearance Egham | Demolition & Removal TW20 | Same-Day', description: 'Garage & shed clearance in Egham, Surrey. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.' },
  { path: '/garage-shed-clearance-maidenhead', title: 'Garage & Shed Clearance Maidenhead | Demolition & Removal SL6 | Same-Day', description: 'Garage & shed clearance in Maidenhead, Berkshire. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.' },
  { path: '/garage-shed-clearance-staines', title: 'Garage & Shed Clearance Staines | Demolition & Removal TW18 | Same-Day', description: 'Garage & shed clearance in Staines, Surrey. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.' }
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
