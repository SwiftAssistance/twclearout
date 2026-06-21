/**
 * Local Netlify build plugin: submit all sitemap URLs to IndexNow after a
 * successful PRODUCTION deploy, so Bing (which powers ChatGPT Search) and
 * other IndexNow engines re-crawl changed pages within minutes.
 *
 * This is the custom-site equivalent of the CMS plugins on indexnow.org —
 * our site is a React/Vite app with no CMS, so we trigger IndexNow ourselves.
 *
 * Runs on `onSuccess` (after the build completes). It only submits for the
 * production context, and never fails the deploy if IndexNow is unreachable
 * or hasn't validated the key file yet.
 */
export const onSuccess = async ({ utils }) => {
  const context = process.env.CONTEXT || 'unknown';

  // Only ping IndexNow for real production publishes — not deploy previews
  // or branch deploys, which would otherwise submit production URLs.
  if (context !== 'production') {
    console.log(`IndexNow: skipping submission (deploy context: ${context}).`);
    return;
  }

  try {
    await utils.run.command('node scripts/indexnow-submit.js');
  } catch (err) {
    // A non-2xx from IndexNow (e.g. the key file isn't live yet on the very
    // first deploy) must not fail an otherwise-good deploy.
    utils.status.show({
      title: 'IndexNow submission skipped',
      summary: 'Deploy succeeded; IndexNow ping did not complete.',
      text: String(err && err.message ? err.message : err),
    });
  }
};
