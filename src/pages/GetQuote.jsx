import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import LandingHeader from '../components/landing/LandingHeader';
import LandingHero from '../components/landing/LandingHero';
import LandingPriceStrip from '../components/landing/LandingPriceStrip';
import LandingSocialProof from '../components/landing/LandingSocialProof';
import LandingSkipPanel from '../components/landing/LandingSkipPanel';
import LandingProof from '../components/landing/LandingProof';
import LandingReviews from '../components/landing/LandingReviews';
import LandingQuoteForm from '../components/landing/LandingQuoteForm';
import LandingFinalCTA from '../components/landing/LandingFinalCTA';
import LandingFooter from '../components/landing/LandingFooter';
import LandingStickyMobileCTA from '../components/landing/LandingStickyMobileCTA';

const GetQuote = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const params = new URLSearchParams(window.location.search);
    const gclid = params.get('gclid');
    if (gclid) localStorage.setItem('gclid', gclid);
  }, []);

  return (
    <>
      <Helmet>
        <title>Waste Removal Berkshire &amp; Surrey | Same Day Collection | Total Waste Clearout</title>
        <meta name="description" content="Fast, licensed waste removal across Berkshire and Surrey. Same day collection, fixed prices, no hidden fees. Get a free quote from Total Waste Clearout." />
        <meta property="og:title" content="Waste Removal Berkshire & Surrey | Same Day Collection | Total Waste Clearout" />
        <meta property="og:description" content="Fast, licensed waste removal across Berkshire and Surrey. Same day collection, fixed prices, no hidden fees." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/get-quote" />
        <meta property="og:image" content="https://totalwasteclearout.co.uk/logo-512.png" />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/get-quote" />
        {/* Preload all six proof photos at high priority so the strip fills instantly */}
        <link rel="preload" as="image" href="/jobs/garden-before.webp" type="image/webp" fetchpriority="high" />
        <link rel="preload" as="image" href="/jobs/garden-after.webp" type="image/webp" fetchpriority="high" />
        <link rel="preload" as="image" href="/jobs/shed-before.webp" type="image/webp" fetchpriority="high" />
        <link rel="preload" as="image" href="/jobs/shed-after.webp" type="image/webp" fetchpriority="high" />
        <link rel="preload" as="image" href="/jobs/construction-before.webp" type="image/webp" fetchpriority="high" />
        <link rel="preload" as="image" href="/jobs/construction-after.webp" type="image/webp" fetchpriority="high" />
      </Helmet>

      <div id="top" className="min-h-screen bg-white font-sans text-slate-900">
        {/* 1. Header — logo + phone, nothing else */}
        <LandingHeader />

        {/* 2. Hero — headline + form above the fold */}
        <LandingHero />

        {/* 3. Price guide strip — anchors expectations, pre-qualifies enquiries */}
        <LandingPriceStrip />

        {/* 4. Trust strip — one thin line of proof */}
        <LandingSocialProof />

        {/* 5. Skip comparison — strongest differentiator, promoted before photo carousel */}
        <LandingSkipPanel />

        {/* 6. Proof — job photos + services */}
        <LandingProof />

        {/* 7. Reviews carousel */}
        <LandingReviews />

        {/* 8. Second quote form */}
        <LandingQuoteForm />

        {/* 8. Final CTA — last push to convert */}
        <LandingFinalCTA />

        {/* 9. Minimal footer */}
        <LandingFooter />

        {/* Sticky bottom bar — Call + WhatsApp + Quote, appears after scrolling past hero */}
        <LandingStickyMobileCTA />
      </div>
    </>
  );
};

export default GetQuote;
