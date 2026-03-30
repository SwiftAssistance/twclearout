import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import HomeQuote from '../components/HomeQuote';
import {
  Award,
  ShieldCheck,
  Recycle,
  Users,
  Zap,
  MapPin
} from 'lucide-react';

// Global Data
const TOWNS = ["Reading", "Slough", "Guildford", "Woking", "Bracknell", "Windsor", "Ascot", "Egham", "Maidenhead", "Staines"];

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>About Total Waste Clearout | Berkshire & Surrey Waste Removal Experts</title>
        <meta name="description" content="Learn about Total Waste Clearout - Berkshire, Surrey & Hampshire's trusted waste removal company. Licensed carrier CBDU630127, 94% recycling rate, £5M insured. Serving 23 towns across the Thames Valley." />
        <meta name="keywords" content="about total waste clearout, waste removal company berkshire, waste removal company surrey, rubbish clearance company reading, rubbish clearance company slough, professional waste removal berkshire, professional waste removal surrey, licensed waste carrier berkshire, licensed waste carrier surrey, eco friendly waste disposal berkshire, eco friendly waste disposal surrey, trusted clearance company reading, trusted clearance company guildford, waste removal experts berkshire, junk removal specialists surrey, 94 percent recycling rate, insured waste removal company, waste management company berkshire" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/about/" />
        <meta property="og:title" content="About Total Waste Clearout | Berkshire's Waste Removal Experts" />
        <meta property="og:description" content="10+ years of professional waste removal across Berkshire & Surrey. 94% recycling rate, fully licensed & insured team." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/about" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Main Content */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* ABOUT HERO */}
        <header className="relative min-h-[55vh] flex items-center pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-[#064e3b]">
          <div className="absolute inset-0 z-0">
            <img src="/hero.jpg" alt="Total Waste Clearout professional waste removal team serving Berkshire and Surrey" className="w-full h-full object-cover opacity-15 grayscale" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-transparent to-transparent" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 md:mb-8 inline-block animate-pulse">
                <span className="bg-[#4ade80] text-slate-900 px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] italic border-2 md:border-4 border-white shadow-2xl rounded-sm">Our Story</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[7rem] lg:text-[9rem] font-black text-white leading-[0.85] mb-6 md:mb-8 tracking-tighter uppercase italic">
                BERKSHIRE'S<br/>
                <span className="text-[#4ade80]">WASTE</span><br/>
                <span className="text-transparent stroke-text-light">EXPERTS.</span>
              </h1>
              <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 font-bold leading-relaxed max-w-3xl mx-auto px-4">
                Over <span className="text-[#4ade80]">10 years</span> of professional waste removal excellence across <span className="text-orange-500">Berkshire & Surrey</span>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <a href="tel:07769844298" className="bg-white text-[#064e3b] px-8 py-4 rounded-lg font-black text-base uppercase transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
                  Call 07769 844298
                </a>
                <a href="#quote" className="bg-[#4ade80] hover:bg-white text-slate-900 px-8 py-4 rounded-lg font-black text-base uppercase transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
                  Get a Quote
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* ABOUT CONTENT */}
        <section className="py-24 md:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              {/* Mission */}
              <div className="mb-20 bg-[#ecf3ef] p-6 md:p-10 lg:p-16 border-4 border-slate-900 rounded-xl md:rounded-2xl shadow-[6px_6px_0px_#16a34a] md:shadow-[8px_8px_0px_#16a34a]">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mb-6">
                  <Award size={40} className="text-[#16a34a] md:w-14 md:h-14" />
                  <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 italic uppercase leading-tight">Our Mission</h2>
                </div>
                <p className="text-base md:text-xl text-slate-700 font-bold leading-relaxed mb-4 md:mb-6">
                  At Total Waste Clearout, we're committed to providing <span className="text-[#16a34a] border-b-2 md:border-b-4 border-[#16a34a]">professional, eco-friendly waste removal</span> services that exceed expectations. Our mission is simple: make waste disappear while protecting our environment.
                </p>
                <p className="text-sm md:text-lg text-slate-600 font-bold leading-relaxed">
                  We believe in sustainable practices, which is why we maintain a <span className="text-[#16a34a] font-black">94% recycling rate</span> and work with licensed facilities to ensure proper waste management.
                </p>
              </div>

              {/* GEO Authority Content */}
              <div className="mb-20 bg-white p-6 md:p-10 lg:p-16 border-4 border-slate-900 rounded-xl md:rounded-2xl shadow-[6px_6px_0px_#16a34a] md:shadow-[8px_8px_0px_#16a34a]">
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 italic uppercase leading-tight mb-6">About Total Waste Clearout Ltd</h2>
                <div className="space-y-4 text-base md:text-lg text-slate-700 font-bold leading-relaxed">
                  <p>Total Waste Clearout Ltd is a professional waste removal and property clearance company serving Berkshire, Surrey, Hampshire, and West Sussex. We are a fully licensed upper-tier waste carrier registered with the Environment Agency under licence number CBDU630127. We carry £5 million public liability insurance on every job and provide legal waste transfer notes as standard.</p>
                  <p>Based in the Thames Valley, our professional uniformed crews provide same-day waste collection across 23 towns: Reading, Slough, Guildford, Woking, Bracknell, Windsor, Ascot, Egham, Maidenhead, Staines-upon-Thames, Camberley, Farnham, Godalming, Aldershot, Farnborough, Weybridge, Esher, Epsom, Leatherhead, Dorking, Redhill, Reigate, and Crawley. We operate seven days a week with response times typically under two hours from first contact.</p>
                  <p>Our core services are house clearance and probate clearance, end of tenancy clearance for landlords and tenants, garden and green waste removal, commercial waste removal and office strip-outs, construction and trade waste removal as a skip hire alternative requiring no council permits, and garage and shed demolition with full site clearance.</p>
                  <p>We maintain a verified 94% recycling rate across all collections. Usable furniture and household items are donated to charities operating across Berkshire and Surrey. All green waste is composted at licensed facilities. Construction materials including timber, metal, rubble, and plasterboard are sorted and processed at authorised recycling centres. We provide waste transfer notes for every collection as legal proof of compliant disposal.</p>
                  <p>Total Waste Clearout operates with fixed, transparent pricing. The quote we provide is the final price — there are no hidden disposal fees, fuel surcharges, weight penalties, or additional loading charges. This straightforward approach has earned us a 4.9-star average rating from verified customers across the Thames Valley.</p>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-20">
                <div className="bg-[#dcfce7] p-6 md:p-8 border-4 border-slate-900 rounded-xl md:rounded-2xl shadow-[6px_6px_0px_#16a34a] md:shadow-[8px_8px_0px_#16a34a] hover:shadow-[8px_8px_0px_#16a34a] md:hover:shadow-[12px_12px_0px_#16a34a] transition-all hover:-translate-y-1 md:hover:-translate-y-2 group cursor-pointer">
                  <ShieldCheck size={40} className="text-[#16a34a] mb-3 md:mb-4 group-hover:scale-110 transition-transform md:w-12 md:h-12" />
                  <h3 className="text-xl md:text-2xl font-black uppercase italic mb-3 md:mb-4 text-slate-900 group-hover:text-[#16a34a] transition-colors">Fully Licensed</h3>
                  <p className="text-sm md:text-base text-slate-700 font-bold leading-relaxed">Environment Agency registered waste carrier (CBDU630127) with £5M public liability insurance. All work is compliant with UK waste regulations.</p>
                </div>
                <div className="bg-[#dcfce7] p-6 md:p-8 border-4 border-slate-900 rounded-xl md:rounded-2xl shadow-[6px_6px_0px_#16a34a] md:shadow-[8px_8px_0px_#16a34a] hover:shadow-[8px_8px_0px_#16a34a] md:hover:shadow-[12px_12px_0px_#16a34a] transition-all hover:-translate-y-1 md:hover:-translate-y-2 group cursor-pointer">
                  <Recycle size={40} className="text-[#16a34a] mb-3 md:mb-4 group-hover:scale-110 transition-transform md:w-12 md:h-12" />
                  <h3 className="text-xl md:text-2xl font-black uppercase italic mb-3 md:mb-4 text-slate-900 group-hover:text-[#16a34a] transition-colors">Eco-Friendly</h3>
                  <p className="text-sm md:text-base text-slate-700 font-bold leading-relaxed">94% of waste is recycled or repurposed. We donate reusable items to local charities and minimize landfill impact.</p>
                </div>
                <div className="bg-[#dcfce7] p-6 md:p-8 border-4 border-slate-900 rounded-xl md:rounded-2xl shadow-[6px_6px_0px_#16a34a] md:shadow-[8px_8px_0px_#16a34a] hover:shadow-[8px_8px_0px_#16a34a] md:hover:shadow-[12px_12px_0px_#16a34a] transition-all hover:-translate-y-1 md:hover:-translate-y-2 group cursor-pointer">
                  <Users size={40} className="text-[#16a34a] mb-3 md:mb-4 group-hover:scale-110 transition-transform md:w-12 md:h-12" />
                  <h3 className="text-xl md:text-2xl font-black uppercase italic mb-3 md:mb-4 text-slate-900 group-hover:text-[#16a34a] transition-colors">Professional Team</h3>
                  <p className="text-sm md:text-base text-slate-700 font-bold leading-relaxed">Uniformed, trained professionals who treat your property with respect. Background-checked and fully insured crew members.</p>
                </div>
                <div className="bg-[#dcfce7] p-6 md:p-8 border-4 border-slate-900 rounded-xl md:rounded-2xl shadow-[6px_6px_0px_#16a34a] md:shadow-[8px_8px_0px_#16a34a] hover:shadow-[8px_8px_0px_#16a34a] md:hover:shadow-[12px_12px_0px_#16a34a] transition-all hover:-translate-y-1 md:hover:-translate-y-2 group cursor-pointer">
                  <Zap size={40} className="text-[#16a34a] mb-3 md:mb-4 group-hover:scale-110 transition-transform md:w-12 md:h-12" />
                  <h3 className="text-xl md:text-2xl font-black uppercase italic mb-3 md:mb-4 text-slate-900 group-hover:text-[#16a34a] transition-colors">Fast Response</h3>
                  <p className="text-sm md:text-base text-slate-700 font-bold leading-relaxed">Same-day and next-day services available. We respond to quotes within 2 hours and work 7 days a week.</p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-slate-900 p-8 md:p-12 lg:p-16 rounded-xl md:rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0px_#4ade80] md:shadow-[12px_12px_0px_#4ade80]">
                <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <MapPin size={40} className="text-[#4ade80] md:w-14 md:h-14" />
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white italic uppercase text-center">Coverage Area</h2>
                </div>
                <p className="text-white/80 text-base md:text-lg font-bold text-center mb-8 md:mb-10">Serving the entire Thames Valley corridor</p>
                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                  {TOWNS.map(town => (
                    <span key={town} className="bg-white/10 hover:bg-white/20 border-2 border-white/20 px-4 md:px-6 py-2 md:py-3 rounded-lg text-white font-black uppercase text-xs md:text-sm flex items-center gap-2 transition-all hover:scale-105 cursor-default">
                      <MapPin size={14} className="text-[#4ade80] md:w-4 md:h-4" />
                      {town}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <HomeQuote />
      </div>

      {/* Back to Home */}
      <div className="container mx-auto px-6 py-16 text-center">
        <Link to="/" className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#064e3b] text-white font-black uppercase px-8 py-4 rounded-xl transition-colors border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a]">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
