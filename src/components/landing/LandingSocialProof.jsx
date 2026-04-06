import React from 'react';
import { BadgeCheck, Users, Clock, Recycle } from 'lucide-react';

const LandingSocialProof = () => (
  <section className="bg-[#022c22] border-b-4 border-[#16a34a] py-3.5 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-10">
        {[
          { icon: BadgeCheck, value: 'EA Licensed', label: 'Waste Carrier' },
          { icon: Users, value: '500+', label: 'Jobs Done' },
          { icon: Clock, value: '<1hr', label: 'Response Time' },
          { icon: Recycle, value: '94%', label: 'Recycled' },
        ].map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon size={16} className="text-[#4ade80] shrink-0" />
            <span className="font-black text-sm text-white uppercase italic tracking-tight">{value}</span>
            <span className="text-[10px] font-bold text-white/40 uppercase tracking-wider hidden sm:inline">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LandingSocialProof;
