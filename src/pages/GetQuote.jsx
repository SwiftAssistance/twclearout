import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import LandingHeader from '../components/landing/LandingHeader';
import LandingHero from '../components/landing/LandingHero';
import LandingSocialProof from '../components/landing/LandingSocialProof';
import LandingProof from '../components/landing/LandingProof';
import LandingFinalCTA from '../components/landing/LandingFinalCTA';
import LandingFooter from '../components/landing/LandingFooter';
import LandingStickyMobileCTA from '../components/landing/LandingStickyMobileCTA';

const GetQuote = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
        <link rel="canonical" href="https://totalwasteclearout.co.uk/get-quote" />
      </Helmet>

      {/* GTM dataLayer init */}
      <script
        dangerouslySetInnerHTML={{
          __html: 'window.dataLayer = window.dataLayer || [];',
        }}
      />

      <div id="top" className="min-h-screen bg-white font-sans text-slate-900">
        {/* 1. Header — logo + phone, nothing else */}
        <LandingHeader />

        {/* 2. Hero — the main event: headline + form above the fold */}
        <LandingHero />

        {/* 3. Trust strip — one thin line of proof */}
        <LandingSocialProof />

        {/* 4. Proof — job photos + reviews + trust signals, all in one flowing section */}
        <LandingProof />

        {/* FIX 9: pricing strip — inline JSX between LandingProof and LandingFinalCTA */}
        <section className="bg-[#ecf3ef] border-y-4 border-slate-900 py-8">
          <div className="container mx-auto px-5 sm:px-6">
            {/* FIX 9: label communicates this is indicative, not a firm price */}
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 italic">
              Rough pricing guide — all jobs quoted individually
            </p>
            {/* FIX 9: three pricing tiers in a grid */}
            <div className="grid grid-cols-3 gap-3 max-w-lg">
              {/* FIX 9: single item tier */}
              <div className="bg-white border-4 border-slate-900 p-4 text-center">
                <p className="font-black text-lg italic text-[#16a34a]">From £50</p>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 mt-1">Single item</p>
              </div>
              {/* FIX 9: part load tier */}
              <div className="bg-white border-4 border-slate-900 p-4 text-center">
                <p className="font-black text-lg italic text-[#16a34a]">From £120</p>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 mt-1">Part load</p>
              </div>
              {/* FIX 9: full van tier */}
              <div className="bg-white border-4 border-slate-900 p-4 text-center">
                <p className="font-black text-lg italic text-[#16a34a]">From £220</p>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-500 mt-1">Full van</p>
              </div>
            </div>
            {/* FIX 9: reassurance and click-to-call for exact quote */}
            <p className="text-xs font-bold text-slate-500 mt-4 italic">
              All prices include labour, loading & responsible disposal.{' '}
              <a href="tel:07769844298" className="text-[#16a34a] font-black underline">
                Call for an exact quote. {/* FIX 9: tappable phone link for mobile users */}
              </a>
            </p>
          </div>
        </section>

        {/* 5. Final CTA — last push to convert */}
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
