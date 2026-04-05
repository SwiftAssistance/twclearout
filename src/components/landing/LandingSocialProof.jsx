import React from 'react';
import { Star, Users, Clock, Recycle } from 'lucide-react';

const LandingSocialProof = () => (
  <section className="bg-slate-900 border-y-4 border-[#16a34a] py-4 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
        {[
          { icon: Star, value: '5.0★', label: 'Google Rating' },
          { icon: Users, value: '500+', label: 'Jobs Completed' },
          { icon: Clock, value: '<1hr', label: 'Avg. Response' },
          { icon: Recycle, value: '94%', label: 'Waste Recycled' },
        ].map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-2.5">
            <Icon size={18} className="text-[#4ade80] shrink-0" />
            <div className="flex items-baseline gap-1.5">
              <span className="font-black text-lg text-white uppercase italic tracking-tight">{value}</span>
              <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">{label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LandingSocialProof;
