import React from 'react';
import { ShieldCheck, BadgeCheck, Star, Recycle, Scale, Zap } from 'lucide-react';

const stats = [
  { value: '94%', label: 'Waste Recycled', icon: Recycle },
  { value: '< 2hrs', label: 'Response Time', icon: Zap },
  { value: '100%', label: 'Compliance', icon: ShieldCheck },
  { value: '£5M', label: 'Public Liability', icon: Scale },
];

const credentials = [
  {
    icon: BadgeCheck,
    title: 'Licensed Waste Carrier',
    detail: 'Environment Agency registered — Licence No: CBDU630127',
  },
  {
    icon: ShieldCheck,
    title: 'Fully Insured',
    detail: '£5 million public liability insurance on every job',
  },
  {
    icon: Recycle,
    title: '94% Recycling Rate',
    detail: 'We sort, recycle and donate — minimal waste goes to landfill',
  },
];

const LandingTrust = () => (
  <section className="py-20 md:py-28 bg-[#ecf3ef] overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-16">
        <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900">Why Choose Our Waste Removal Service</h2>
        <p className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-slate-900 italic uppercase leading-[0.9] tracking-tighter">
          FULLY LICENSED<br />&amp; TRUSTED.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {stats.map(({ value, label, icon: Icon }) => (
          <div key={label} className="bg-white border-4 border-slate-900 p-6 shadow-[6px_6px_0px_#16a34a] text-center">
            <Icon size={28} className="text-[#16a34a] mx-auto mb-3" />
            <p className="font-[1000] text-3xl md:text-4xl text-slate-900 uppercase italic tracking-tight leading-none mb-1">{value}</p>
            <p className="font-black text-[10px] uppercase tracking-widest text-slate-500 italic">{label}</p>
          </div>
        ))}
      </div>

      {/* Credential cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {credentials.map(({ icon: Icon, title, detail }) => (
          <div key={title} className="bg-white border-4 border-slate-900 p-6 flex items-start gap-4">
            <div className="bg-[#16a34a] p-3 shrink-0">
              <Icon size={22} className="text-white" />
            </div>
            <div>
              <p className="font-black text-sm uppercase italic text-slate-900 mb-1">{title}</p>
              <p className="text-xs font-bold text-slate-500 leading-snug">{detail}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Where does your waste go */}
      <div className="bg-[#064e3b] border-4 border-slate-900 p-8 md:p-10 shadow-[10px_10px_0px_#16a34a]">
        <h3 className="font-black text-xl md:text-2xl uppercase italic text-white mb-4 tracking-tight">Where Does Your Waste Go?</h3>
        <p className="font-bold text-white/80 leading-relaxed max-w-3xl">
          We take your waste to licensed transfer stations where it is sorted, recycled, and donated wherever possible.
          You receive a <span className="text-[#4ade80]">waste transfer note</span> for your records — proof of responsible disposal.
          We never fly-tip. Guaranteed.
        </p>
      </div>
    </div>
  </section>
);

export default LandingTrust;
