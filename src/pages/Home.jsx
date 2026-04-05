import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesSection from '../components/Services';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Trust from '../components/Trust';
import Areas from '../components/Areas';
import Reviews from '../components/Reviews';
import QuoteForm from '../components/QuoteForm';
import FAQ from '../components/FAQ';
import StickyMobileCTA from '../components/StickyMobileCTA';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Waste Removal Berkshire &amp; Surrey | Same Day Collection | Total Waste Clearout</title>
        <meta
          name="description"
          content="Fast, licensed waste removal across Berkshire & Surrey. Same day collection, fixed prices, no hidden fees. House clearance, garden waste, rubbish removal. Call for a free quote."
        />
        <meta property="og:title" content="Waste Removal Berkshire & Surrey | Same Day Collection | Total Waste Clearout" />
        <meta property="og:description" content="Fast, licensed waste removal across Berkshire & Surrey. Same day collection, fixed prices, no hidden fees." />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/" />
      </Helmet>

      <Header />

      <main>
        <Hero />
        <ServicesSection />
        <HowItWorks />
        <Pricing />
        <Trust />
        <Areas />
        <Reviews />
        <QuoteForm />
        <FAQ />
      </main>

      <Footer />
      <StickyMobileCTA />
    </>
  );
};

export default Home;
