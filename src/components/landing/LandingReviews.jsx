import React from 'react';
import { Star, Quote } from 'lucide-react';
import PlatformLogo from '../PlatformLogo';

const reviews = [
  {
    text: "We used Total Waste Clearout twice and honestly couldn't fault them either time. First they cleared out our office - old furniture, filing cabinets, general junk that had built up over the years - and the whole thing was done quickly and without any fuss. Then a few weeks later I had them back to sort out my garden at home, and again, brilliant. Showed up on time, got stuck in straight away, and left everything spotless. Really professional team, great communication throughout, and the price was fair. Would recommend to anyone.",
    name: 'Wisetax Accountants',
    initials: 'W',
    town: 'Slough',
    platform: 'google',
  },
  {
    text: "Really pleased with Total Waste Clearout. They demolished an old shed and cleared all the waste from my garden - turned up on time, worked quickly, and left everything spotless. Great value and friendly team. Will definitely use them again.",
    name: 'Leo Luxe Clean',
    initials: 'L',
    town: 'Slough',
    platform: 'google',
  },
  {
    text: "Brilliant service from Total Waste Clear Out. Quick, reliable, and very professional. They cleared out my garden, shed, and old trees with no hassle and left everything spotless.",
    name: 'Conor Waterman',
    initials: 'C',
    town: 'Woking',
    platform: 'google',
  },
];

const LandingReviews = () => (
  <section className="py-20 md:py-28 bg-[#064e3b]">
    <div className="container mx-auto px-6">
      {/* Header */}
      <div className="mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          <h2 className="text-[#4ade80] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-white/30">Real Customers</h2>
          <p className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-white italic uppercase leading-[0.9] tracking-tighter">
            WHAT THEY<br />SAY.
          </p>
        </div>
        <div className="bg-white/10 border-2 border-white/20 px-6 py-4 flex items-center gap-4 shrink-0">
          <div className="text-center">
            <p className="font-[1000] text-3xl text-white italic leading-none">5.0</p>
            <div className="flex gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" className="text-yellow-400" />)}
            </div>
          </div>
          <div className="border-l border-white/20 pl-4 flex items-center gap-2">
            <PlatformLogo platform="google" size={22} />
            <div>
              <p className="text-xs font-black text-white uppercase italic tracking-wide">Google Reviews</p>
              <p className="text-[10px] font-bold text-white/50 uppercase tracking-wider mt-0.5">Verified 5-Star Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Static review grid */}
      <div className="grid md:grid-cols-3 gap-5">
        {reviews.map(({ text, name, initials, town, platform }, idx) => {
          const isGreen = idx === 1;
          return (
            <div
              key={idx}
              className={`p-8 border-4 border-slate-900 shadow-[6px_6px_0px_#022c22] flex flex-col relative overflow-hidden ${isGreen ? 'bg-[#16a34a] text-white' : 'bg-white text-slate-900'}`}
            >
              <Quote className={`absolute -top-3 -left-3 w-16 opacity-10 ${isGreen ? 'text-white' : 'text-[#16a34a]'}`} aria-hidden="true" />

              <div className="flex items-center justify-between mb-5 relative z-10">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" className={isGreen ? 'text-white' : 'text-[#16a34a]'} />)}
                </div>
                {platform === 'google' && <PlatformLogo platform="google" size={20} />}
              </div>

              <p className="text-base md:text-lg font-[1000] uppercase italic leading-tight tracking-tight mb-8 flex-grow relative z-10">
                "{text}"
              </p>

              <div className={`flex items-center gap-3 pt-5 border-t ${isGreen ? 'border-white/20' : 'border-slate-200'}`}>
                <div className={`w-11 h-11 rounded-full flex items-center justify-center font-[1000] border-2 border-slate-900 text-sm italic shrink-0 ${isGreen ? 'bg-white text-[#16a34a]' : 'bg-[#16a34a] text-white'}`}>
                  {initials}
                </div>
                <div>
                  <p className="font-[1000] uppercase text-sm leading-none">{name}</p>
                  <p className={`font-bold text-[10px] uppercase italic mt-0.5 ${isGreen ? 'text-white/60' : 'text-slate-500'}`}>{town} · Verified Customer</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default LandingReviews;
