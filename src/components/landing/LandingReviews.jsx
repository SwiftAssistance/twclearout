import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    text: "Brilliant service from start to finish. Called in the morning and they were here by lunchtime. Everything cleared, swept up, and a waste transfer note emailed over. Can't recommend enough.",
    name: 'Sarah',
    initials: 'S',
    town: 'Windsor',
    color: 'bg-white text-slate-900',
    accent: 'text-[#16a34a]',
    avatarBg: 'bg-[#16a34a] text-white',
  },
  {
    text: "Used Total Waste Clearout for a full house clearance after my mum passed. They were respectful, efficient and recycled as much as possible. Fair price too. Would use again without hesitation.",
    name: 'James',
    initials: 'J',
    town: 'Guildford',
    color: 'bg-[#16a34a] text-white',
    accent: 'text-white',
    avatarBg: 'bg-white text-[#16a34a]',
  },
  {
    text: "Had a garden full of rubble, old decking and green waste. They loaded the lot in under an hour. Great communication, on time, and the price was exactly what they quoted. Top job.",
    name: 'Mark',
    initials: 'M',
    town: 'Bracknell',
    color: 'bg-white text-slate-900',
    accent: 'text-[#16a34a]',
    avatarBg: 'bg-[#16a34a] text-white',
  },
];

const LandingReviews = () => (
  <section className="py-20 md:py-28 bg-[#064e3b] overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-16">
        <h2 className="text-[#4ade80] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-white/30">Real Customers</h2>
        <p className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-white italic uppercase leading-[0.9] tracking-tighter">
          WHAT THEY<br />SAY.
        </p>
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
