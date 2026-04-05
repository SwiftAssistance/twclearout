import React from 'react';
import { Phone } from 'lucide-react';

const LandingHeader = () => (
  <header className="fixed top-0 left-0 w-full z-50 bg-white border-b-4 border-slate-900 shadow-[0_4px_0px_#ecf3ef]">
    <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-14 sm:h-16">
      <div className="flex items-center gap-2 sm:gap-3">
        <img src="/logo.webp" alt="Total Waste Clearout logo" className="h-9 w-9 sm:h-11 sm:w-11 object-contain" width="44" height="44" />
        <div className="flex flex-col leading-none">
          <span className="font-black text-base sm:text-lg tracking-tighter uppercase italic text-slate-900">Total Waste</span>
          <span className="text-[#16a34a] font-black text-[7px] sm:text-[9px] tracking-[.3em] uppercase">Clearout Ltd</span>
        </div>
      </div>
      <a
        href="tel:07769844298"
        className="bg-[#16a34a] hover:bg-[#15803d] text-white px-4 sm:px-6 py-2 sm:py-2.5 font-black text-xs sm:text-sm uppercase italic tracking-wide flex items-center gap-2 transition-colors shadow-[4px_4px_0px_#064e3b] active:shadow-none active:translate-x-1 active:translate-y-1"
      >
        <Phone size={14} fill="white" />
        <span className="hidden sm:inline">Call Now</span>
        <span className="sm:hidden">Call</span>
      </a>
    </div>
  </header>
);

export default LandingHeader;
