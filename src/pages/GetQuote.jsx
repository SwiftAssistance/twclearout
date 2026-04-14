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
    const gclid = params.get('gclid'); // capture gclid from Google Ads URL for offline conversion tracking
    if (gclid) localStorage.setItem('gclid', gclid); // persist so HeroQuoteForm can attach it to submissions
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
        {/* Google Ads conversion tag — loads async so it doesn't block render */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18054894614" />
        {/* gtag config — initialises dataLayer and configures the Ads property */}
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18054894614');
        `}</script>
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

        {/* FIX 9: pricing strip — inline JSX between LandingProof and LandingQuoteForm */}
        <section className="bg-[#ecf3ef] border-y-4 border-slate-900 py-8">
          <div className="container mx-auto px-5 sm:px-6">
            {/* FIX 9: label communicates this is indicative, not a firm price */}
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 italic">
              Rough pricing guide — all jobs quoted individually
            </p>
            {/* FIX 9: three pricing tiers in a grid */}
            <div className="grid grid-cols-3 gap-3 max-w-lg">
              <div className="bg-white border-4 border-slate-900 p-4 text-center">
                <p className="font-black text-lg italic text-[#16a34a]">From £50</p>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 mt-1">Single item</p>
              </div>
              <div className="bg-white border-4 border-slate-900 p-4 text-center">
                <p className="font-black text-lg italic text-[#16a34a]">From £120</p>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 mt-1">Part load</p>
              </div>
              <div className="bg-white border-4 border-slate-900 p-4 text-center">
                <p className="font-black text-lg italic text-[#16a34a]">From £220</p>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 mt-1">Full van</p>
              </div>
            </div>
            {/* FIX 9: reassurance and click-to-call for exact quote */}
            <p className="text-xs font-bold text-slate-500 mt-4 italic">
              All prices include labour, loading & responsible disposal.{' '}
              <a href="tel:07769844298" className="text-[#16a34a] font-black underline">
                Call for an exact quote.
              </a>
            </p>
          </div>
        </section>

        {/* 5. Second quote form */}
        <LandingQuoteForm />

        {/* 6. Final CTA — last push to convert */}
        <LandingFinalCTA />

        {/* 7. Minimal footer */}
        <LandingFooter />

        {/* Sticky bottom bar — appears after scrolling past hero, desktop + mobile */}
        <LandingStickyMobileCTA />
      </div>
    </>
  );
};

export default GetQuote;
