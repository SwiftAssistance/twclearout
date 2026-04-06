import React from 'react';
import { BadgeCheck, Star, Clock, Recycle } from 'lucide-react';

const LandingSocialProof = () => (
  <div className="bg-slate-900 border-b-2 border-[#16a34a]/40 py-2.5 overflow-hidden">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="flex items-center justify-between gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-wider">
        <span className="flex items-center gap-1.5 text-white/70">
          <BadgeCheck size={13} className="text-[#4ade80]" />
          <span className="hidden sm:inline">EA Licensed</span>
          <span className="sm:hidden">Licensed</span>
        </span>
        <span className="flex items-center gap-1.5 text-white/70">
          <Star size={13} fill="#4ade80" className="text-[#4ade80]" />
          5.0 Google
        </span>
        <span className="flex items-center gap-1.5 text-white/70">
          <Clock size={13} className="text-[#4ade80]" />
          Same Day
        </span>
        <span className="hidden sm:flex items-center gap-1.5 text-white/70">
          <Recycle size={13} className="text-[#4ade80]" />
          94% Recycled
        </span>
      </div>
    </div>
  </div>
);

export default LandingSocialProof;
