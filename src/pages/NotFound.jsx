import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Phone, Home, Briefcase, MapPin } from 'lucide-react';

const NotFound = () => {
  useEffect(() => { window.scrollTo({ top: 0 }); }, []);
  return (
    <div className="min-h-screen flex items-center justify-center bg-white pt-24 pb-16">
      <Helmet>
        <title>Page Not Found | Total Waste Clearout</title>
        <meta name="description" content="Page not found. Total Waste Clearout provides professional waste removal across Berkshire, Surrey and Hampshire. Call 07769 844298." />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <div className="text-center px-6 max-w-2xl mx-auto">
        <div className="text-[10rem] font-black text-[#16a34a] leading-none mb-2">404</div>
        <h1 className="text-3xl md:text-5xl font-black uppercase italic text-slate-900 mb-6">Page Not Found</h1>
        <p className="text-slate-600 font-bold text-lg mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has moved. Browse our services below or call us directly.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <Link to="/" className="bg-[#16a34a] text-white px-8 py-4 font-black uppercase rounded-lg border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a] hover:bg-[#064e3b] transition-colors flex items-center gap-2"><Home size={20}/>Home</Link>
          <Link to="/services" className="bg-white text-slate-900 px-8 py-4 font-black uppercase rounded-lg border-4 border-slate-900 shadow-[6px_6px_0px_#e2e8f0] hover:bg-[#dcfce7] transition-colors flex items-center gap-2"><Briefcase size={20}/>Services</Link>
          <Link to="/areas" className="bg-white text-slate-900 px-8 py-4 font-black uppercase rounded-lg border-4 border-slate-900 shadow-[6px_6px_0px_#e2e8f0] hover:bg-[#dcfce7] transition-colors flex items-center gap-2"><MapPin size={20}/>Areas</Link>
          <a href="tel:07769844298" className="bg-orange-500 text-black px-8 py-4 font-black uppercase rounded-lg border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a] hover:bg-orange-400 transition-colors flex items-center gap-2"><Phone size={20}/>Call Us</a>
        </div>
        <p className="text-slate-400 text-sm font-bold">Total Waste Clearout — Licensed waste removal across Berkshire, Surrey & Hampshire. Call 07769 844298.</p>
      </div>
    </div>
  );
};

export default NotFound;
