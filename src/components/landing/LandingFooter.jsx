import React from 'react';
import { Phone, Mail, ShieldCheck } from 'lucide-react';

const LandingFooter = () => (
  <footer className="bg-slate-900 text-white py-10">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <p className="font-black text-lg">Total Waste Clearout</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm">
          <a href="tel:07XXX XXXXXX" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <Phone size={14} /> 07XXX XXXXXX
          </a>
          <a href="mailto:info@totalwasteclearout.co.uk" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <Mail size={14} /> info@totalwasteclearout.co.uk
          </a>
        </div>
        <p className="flex items-center justify-center gap-2 text-xs text-white/50">
          <ShieldCheck size={14} className="text-[#4ade80]" />
          Licensed Waste Carrier — Reg No: CBDU XXXXXX
        </p>
        <p className="text-xs text-white/30">
          © 2026 Total Waste Clearout. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default LandingFooter;
