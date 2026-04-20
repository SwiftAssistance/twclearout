import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    text: "We used Total Waste Clearout twice and honestly couldn't fault them either time. First they cleared out our office - old furniture, filing cabinets, general junk that had built up over the years - and the whole thing was done quickly and without any fuss. Then a few weeks later I had them back to sort out my garden at home, and again, brilliant. Showed up on time, got stuck in straight away, and left everything spotless. Really professional team, great communication throughout, and the price was fair. Would recommend to anyone.",
    name: 'Wisetax Accountants',
    initials: 'W',
    town: 'Slough',
    color: 'bg-white text-slate-900',
    accent: 'text-[#16a34a]',
    avatarBg: 'bg-[#16a34a] text-white',
  },
  {
    text: "Really pleased with Total Waste Clearout. They demolished an old shed and cleared all the waste from my garden - turned up on time, worked quickly, and left everything spotless. Great value and friendly team. Will definitely use them again.",
    name: 'Leo Luxe Clean',
    initials: 'L',
    town: 'Slough',
    color: 'bg-[#16a34a] text-white',
    accent: 'text-white',
    avatarBg: 'bg-white text-[#16a34a]',
  },
  {
    text: "Brilliant service from Total Waste Clear Out. Quick, reliable, and very professional. They cleared out my garden, shed, and old trees with no hassle and left everything spotless.",
    name: 'Conor Waterman',
    initials: 'C',
    town: 'Woking',
    color: 'bg-white text-slate-900',
    accent: 'text-[#16a34a]',
    avatarBg: 'bg-[#16a34a] text-white',
  },
];

const LandingReviews = () => (
  <section className="py-20 md:py-28 bg-[#064e3b] overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <div>
          <h2 className="text-[#4ade80] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-white/30">Real Customers</h2>
          <p className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-white italic uppercase leading-[0.9] tracking-tighter">
            WHAT THEY<br />SAY.
          </p>
        </div>
        {/* Google Reviews summary badge */}
        <div className="bg-white/10 border-2 border-white/20 px-6 py-4 flex items-center gap-4 shrink-0">
          <div className="text-center">
            <p className="font-[1000] text-3xl text-white italic leading-none">5.0</p>
            <div className="flex gap-0.5 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} fill="currentColor" className="text-yellow-400" />
              ))}
            </div>
          </div>
          <div className="border-l border-white/20 pl-4">
            <p className="text-xs font-black text-white uppercase italic tracking-wide">Google Reviews</p>
            <p className="text-[10px] font-bold text-white/50 uppercase tracking-wider mt-0.5">Verified 5-Star Rating</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map(({ text, name, initials, town, color, accent, avatarBg }) => (
          <div
            key={name}
            className={`p-8 border-4 border-slate-900 shadow-[8px_8px_0px_#022c22] flex flex-col relative overflow-hidden ${color}`}
          >
            <Quote className={`absolute -top-3 -left-3 w-16 opacity-10 ${accent}`} aria-hidden="true" />

            <div className="flex gap-0.5 mb-4 relative z-10">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" className={accent} />
              ))}
            </div>

            <p className="text-base md:text-lg font-[1000] uppercase italic leading-tight tracking-tight mb-6 flex-grow relative z-10">
              "{text}"
            </p>

            <div className="flex items-center gap-3 pt-5 border-t border-current border-opacity-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-[1000] border-2 border-slate-900 text-sm italic shrink-0 ${avatarBg}`}>
                {initials}
              </div>
              <div>
                <p className="font-[1000] uppercase text-sm leading-none">{name}</p>
                <p className="font-bold opacity-60 text-[10px] uppercase italic mt-0.5">{town} · Verified Customer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LandingReviews;
