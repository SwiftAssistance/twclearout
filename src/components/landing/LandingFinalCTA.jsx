import React from 'react';
import { Phone, ArrowUp } from 'lucide-react';

const LandingFinalCTA = () => (
  <section className="bg-[#064e3b] py-14 md:py-20 border-t-4 border-[#16a34a]">
    <div className="container mx-auto px-5 sm:px-6 text-center">
      <p className="text-white/40 text-xs font-bold uppercase tracking-[0.3em] mb-3">Still here?</p>
      <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-[0.95] mb-6">
        Your waste won't<br />shift itself.
      </h2>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <a
          href="tel:07769844298"
          className="bg-orange-500 hover:bg-orange-400 text-black px-8 py-4 font-black uppercase italic tracking-wide text-base inline-flex items-center gap-2 transition-colors shadow-[5px_5px_0px_#022c22] active:shadow-none active:translate-y-0.5"
        >
          <Phone size={18} fill="black" />
          Call 07769 844298
        </a>
        <a
          href="#top"
          className="text-white/60 hover:text-white text-sm font-bold uppercase italic tracking-wider inline-flex items-center gap-1.5 transition-colors"
        >
          <ArrowUp size={14} />
          Back to quote form
        </a>
      </div>
      <div className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em] space-y-1">
        <p>EA Licensed Waste Carrier — CBDU630127</p>
        <p>£5M Public Liability · Berkshire & Surrey</p>
      </div>
    </div>
  </section>
);

export default LandingFinalCTA;
