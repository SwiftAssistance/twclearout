import React from 'react';

const LandingFooter = () => (
  <footer className="bg-slate-900 text-white/20 py-6 pb-20 md:pb-16 border-t border-white/5">
    <div className="container mx-auto px-5 sm:px-6 text-center space-y-2">
      <div className="flex items-center justify-center gap-2">
        <img src="/logo.webp" alt="Total Waste Clearout" className="h-7 w-7 object-contain opacity-40" width="28" height="28" />
        <span className="font-black text-sm uppercase italic tracking-tight text-white/30">Total Waste Clearout Ltd</span>
      </div>
      <p className="text-[10px] font-bold uppercase tracking-widest">
        © 2026 Total Waste Clearout Ltd · EA Reg: CBDU630127
      </p>
      <a href="/privacy" className="text-[10px] font-bold uppercase tracking-widest text-white/30 hover:text-white/60 transition-colors">
        Privacy Policy
      </a>
    </div>
  </footer>
);

export default LandingFooter;
