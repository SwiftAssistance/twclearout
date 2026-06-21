/**
 * IndexNow submission script.
 *
 * Pings the IndexNow API (used by Bing — which powers ChatGPT Search — and
 * Yandex) with every URL in the sitemap so changed/new pages get crawled
 * within minutes instead of waiting for the next organic crawl.
 *
 * Ownership is proven via the key file in public/<KEY>.txt, which Vite copies
 * to the site root at build time.
 *
 * Usage:
 *   node scripts/indexnow-submit.js            # submit every sitemap URL
 *   node scripts/indexnow-submit.js <url> ...  # submit only the given URLs
 *
 * Run it after a deploy (e.g. as a Netlify post-deploy step or manually).
 */

import { readFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const HOST = 'totalwasteclearout.co.uk';
const KEY = 'b45e36f9dee04322a7e227565237b3d2';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

/** Pull <loc> URLs out of the built (or source) sitemap. */
function urlsFromSitemap() {
  const candidates = [
    join(ROOT, 'dist', 'sitemap.xml'),
    join(ROOT, 'public', 'sitemap.xml'),
  ];
  const path = candidates.find(existsSync);
  if (!path) {
    console.error('No sitemap.xml found in dist/ or public/. Run the build first.');
    process.exit(1);
  }
  const xml = readFileSync(path, 'utf-8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function main() {
  const cliUrls = process.argv.slice(2);
  const urlList = cliUrls.length ? cliUrls : urlsFromSitemap();

  if (!urlList.length) {
    console.error('No URLs to submit.');
    process.exit(1);
  }

  // IndexNow allows up to 10,000 URLs per request; chunk to be safe.
  const CHUNK = 10000;
  for (let i = 0; i < urlList.length; i += CHUNK) {
    const batch = urlList.slice(i, i + CHUNK);
    const body = { host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: batch };
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });
    // 200 = accepted, 202 = received/pending validation. Both are success.
    const ok = res.status === 200 || res.status === 202;
    console.log(`IndexNow: submitted ${batch.length} URL(s) → HTTP ${res.status} ${ok ? '✅' : '⚠️'}`);
    if (!ok) {
      console.error(await res.text().catch(() => ''));
      process.exitCode = 1;
    }
  }
}

main().catch((err) => {
  console.error('IndexNow submission failed:', err.message);
  process.exit(1);
});
