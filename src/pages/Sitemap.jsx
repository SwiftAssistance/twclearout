import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ExternalLink } from 'lucide-react';

const Sitemap = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const pages = [
    { name: 'Home', path: '/', priority: 'High' },
    { name: 'Services', path: '/services', priority: 'High' },
    { name: 'About Us', path: '/about', priority: 'High' },
    { name: 'Contact', path: '/contact', priority: 'High' },
  ];

  const servicePages = [
    { name: 'End of Tenancy Clearance', path: '/services/end-of-tenancy' },
    { name: 'Construction & Trade Waste', path: '/services/construction-waste' },
    { name: 'Garden Waste Removal', path: '/services/garden-waste' },
    { name: 'Commercial Rip-Outs', path: '/services/commercial-ripouts' },
    { name: 'Home & Probate Clearance', path: '/services/home-probate-clearance' },
    { name: 'Garage & Shed Demolition', path: '/services/garage-shed' },
  ];

  const areaPages = [
    { name: 'All Service Areas', path: '/areas' },
    { name: 'Waste Removal Reading', path: '/areas/reading' },
    { name: 'Waste Removal Slough', path: '/areas/slough' },
    { name: 'Waste Removal Guildford', path: '/areas/guildford' },
    { name: 'Waste Removal Woking', path: '/areas/woking' },
    { name: 'Waste Removal Bracknell', path: '/areas/bracknell' },
    { name: 'Waste Removal Windsor', path: '/areas/windsor' },
    { name: 'Waste Removal Ascot', path: '/areas/ascot' },
    { name: 'Waste Removal Egham', path: '/areas/egham' },
    { name: 'Waste Removal Maidenhead', path: '/areas/maidenhead' },
    { name: 'Waste Removal Staines', path: '/areas/staines' },
  ];

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy-policy' },
    { name: 'Cookie Usage', path: '/cookie-usage' },
    { name: 'Legal Information', path: '/legal' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Sitemap | Total Waste Clearout - All Pages</title>
        <meta name="description" content="Complete sitemap for Total Waste Clearout. Browse all our waste removal services, information pages, and resources across Berkshire & Surrey." />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/sitemap" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic tracking-tighter">
              Site Map
            </h1>
            <p className="text-lg text-white/90 font-bold mb-8">
              Browse all pages on Total Waste Clearout
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#064e3b] px-6 py-3 rounded-lg font-black text-sm uppercase transition-all hover:scale-105 shadow-xl flex items-center gap-2"
              >
                <ExternalLink size={16} />
                XML Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Main Pages */}
          <section className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase italic border-b-4 border-[#16a34a] pb-4">
              Main Pages
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pages.map((page, idx) => (
                <Link
                  key={idx}
                  to={page.path}
                  className="bg-white p-6 border-4 border-slate-900 rounded-lg hover:bg-[#dcfce7] transition-all shadow-lg group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-black text-lg uppercase text-slate-900 group-hover:text-[#16a34a]">
                      {page.name}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {page.priority}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* Service Pages */}
          <section className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase italic border-b-4 border-orange-500 pb-4">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {servicePages.map((page, idx) => (
                <Link
                  key={idx}
                  to={page.path}
                  className="bg-white p-6 border-4 border-slate-900 rounded-lg hover:bg-orange-50 transition-all shadow-lg group"
                >
                  <span className="font-black text-lg uppercase text-slate-900 group-hover:text-orange-600">
                    {page.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Area Pages */}
          <section className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase italic border-b-4 border-[#4ade80] pb-4">
              Service Areas
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {areaPages.map((page, idx) => (
                <Link
                  key={idx}
                  to={page.path}
                  className="bg-white p-6 border-4 border-slate-900 rounded-lg hover:bg-[#dcfce7] transition-all shadow-lg group"
                >
                  <span className="font-black text-lg uppercase text-slate-900 group-hover:text-[#16a34a]">
                    {page.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Legal Pages */}
          <section>
            <h2 className="text-3xl font-black text-slate-900 mb-8 uppercase italic border-b-4 border-slate-400 pb-4">
              Legal & Information
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {legalPages.map((page, idx) => (
                <Link
                  key={idx}
                  to={page.path}
                  className="bg-white p-6 border-4 border-slate-900 rounded-lg hover:bg-slate-100 transition-all shadow-lg group"
                >
                  <span className="font-bold text-sm uppercase text-slate-700 group-hover:text-slate-900">
                    {page.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* Back to Home */}
          <div className="mt-16 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#064e3b] text-white font-black uppercase px-8 py-4 rounded-xl transition-colors border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a]"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
