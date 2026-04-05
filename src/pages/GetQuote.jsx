import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import LandingHeader from '../components/landing/LandingHeader';
import LandingHero from '../components/landing/LandingHero';
import LandingServices from '../components/landing/LandingServices';
import LandingHowItWorks from '../components/landing/LandingHowItWorks';
import LandingPricing from '../components/landing/LandingPricing';
import LandingTrust from '../components/landing/LandingTrust';
import LandingAreas from '../components/landing/LandingAreas';
import LandingReviews from '../components/landing/LandingReviews';
import LandingQuoteForm from '../components/landing/LandingQuoteForm';
import LandingFAQ from '../components/landing/LandingFAQ';
import LandingStickyMobileCTA from '../components/landing/LandingStickyMobileCTA';
import LandingFooter from '../components/landing/LandingFooter';

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

      {/* Google Tag Manager — replace GTM-XXXXXXX with your real container ID */}
      {/*
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXXXXX');</script>
        <!-- End Google Tag Manager -->
      */}

      <div className="min-h-screen bg-white font-sans text-slate-900 pb-16 md:pb-0">
        <LandingHeader />
        <LandingHero />
        <LandingServices />
        <LandingHowItWorks />
        <LandingPricing />
        <LandingTrust />
        <LandingAreas />
        <LandingReviews />
        <LandingQuoteForm />
        <LandingFAQ />
        <LandingFooter />
        <LandingStickyMobileCTA />
      </div>
    </>
  );
};

export default GetQuote;
