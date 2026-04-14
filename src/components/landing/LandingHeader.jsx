import React from 'react';
import { Phone } from 'lucide-react';

const LandingHeader = () => (
  <header className="fixed top-0 left-0 w-full z-50 bg-slate-900 border-b-4 border-[#16a34a]">
    <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center h-14 sm:h-16">
      <a href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
        <img src="/logo.webp" alt="Total Waste Clearout logo" className="h-9 w-9 sm:h-11 sm:w-11 object-contain" width="44" height="44" />
        <div className="flex flex-col leading-none">
          <span className="font-black text-base sm:text-lg tracking-tighter uppercase italic text-white">Total Waste</span>
          <span className="text-[#4ade80] font-black text-[7px] sm:text-[9px] tracking-[.3em] uppercase">Clearout Ltd</span>
        </div>
      </a>
      <div className="flex items-center gap-3 sm:gap-4">
        <a
          href="/"
          className="hidden md:inline text-white/50 hover:text-white text-[10px] font-bold uppercase tracking-wider transition-colors"
        >
          Home
        </a>
        <a
          href="tel:07769844298"
          // FIX 2: reduced px and gap on mobile so full number fits; text size shrunk to 11px mobile
          className="bg-orange-500 hover:bg-orange-400 text-black px-3 sm:px-6 py-2 sm:py-2.5 font-black text-[11px] sm:text-sm uppercase italic tracking-wide flex items-center gap-1.5 sm:gap-2 transition-colors shadow-[3px_3px_0px_#16a34a] active:shadow-none"
        >
          <Phone size={14} fill="black" />
          {/* FIX 2: single span always shows number (removed hidden sm:inline / sm:hidden split) */}
          <span>07769 844298</span>
        </a>
      </div>
    </div>
  </header>
);

export default LandingHeader;
