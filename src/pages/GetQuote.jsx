import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import LandingHeader from '../components/landing/LandingHeader';
import LandingHero from '../components/landing/LandingHero';
import LandingSocialProof from '../components/landing/LandingSocialProof';
import LandingProof from '../components/landing/LandingProof';
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
        {/* Preload the first visible proof photos so the horizontal strip fills instantly */}
        <link rel="preload" as="image" href="/jobs/garden-before.webp" type="image/webp" fetchpriority="low" />
        <link rel="preload" as="image" href="/jobs/garden-after.webp" type="image/webp" fetchpriority="low" />
        <link rel="preload" as="image" href="/jobs/construction-before.webp" type="image/webp" fetchpriority="low" />
        <link rel="preload" as="image" href="/jobs/construction-after.webp" type="image/webp" fetchpriority="low" />
      </Helmet>

      <div id="top" className="min-h-screen bg-white font-sans text-slate-900">
        {/* 1. Header — logo + phone, nothing else */}
        <LandingHeader />

        {/* 2. Hero — the main event: headline + form above the fold */}
        <LandingHero />

        {/* 3. Trust strip — one thin line of proof */}
        <LandingSocialProof />

        {/* 4. Proof — job photos + reviews + trust signals, all in one flowing section */}
        <LandingProof />

        {/* 5. Second quote form */}
        <LandingQuoteForm />

        {/* 6. Final CTA — last push to convert */}
        <LandingFinalCTA />

        {/* 6. Minimal footer */}
        <LandingFooter />

        {/* Sticky bottom bar — appears after scrolling past hero, desktop + mobile */}
        <LandingStickyMobileCTA />
      </div>
    </>
  );
};

export default GetQuote;
