import React from 'react';
import { Phone, Mail, ShieldCheck } from 'lucide-react';

const LandingFooter = () => (
  <footer className="bg-slate-900 text-white border-t-4 border-[#16a34a] py-12">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="flex items-center justify-center gap-3">
          <img src="/logo.webp" alt="Total Waste Clearout" className="h-10 w-10 object-contain" width="40" height="40" />
          <div className="text-left">
            <p className="font-black text-lg uppercase italic tracking-tighter leading-none">Total Waste</p>
            <p className="text-[#16a34a] font-black text-[9px] tracking-[.3em] uppercase">Clearout Ltd</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <a href="tel:07769844298" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-bold text-sm">
            <Phone size={14} className="text-[#16a34a]" /> 07769 844298
          </a>
          <a href="mailto:info@totalwasteclearout.co.uk" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors font-bold text-sm">
            <Mail size={14} className="text-[#16a34a]" /> info@totalwasteclearout.co.uk
          </a>
        </div>

        <p className="flex items-center justify-center gap-2 text-xs font-bold text-white/50 uppercase italic tracking-wide">
          <ShieldCheck size={14} className="text-[#4ade80]" />
          Licensed Waste Carrier — EA Reg No: CBDU630127
        </p>

        <p className="text-xs text-white/20 font-bold uppercase tracking-widest">
          © 2026 Total Waste Clearout Ltd. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default LandingFooter;
