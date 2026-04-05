import React from 'react';
import { Phone, ChevronDown, ShieldCheck, Star, Clock, BadgeCheck } from 'lucide-react';

const LandingHero = () => (
  <header className="relative min-h-[85vh] md:min-h-screen flex items-center pt-14 sm:pt-16 overflow-hidden bg-[#064e3b]">
    <div className="absolute inset-0 z-0">
      <img
        src="/hero.webp"
        alt="Professional waste removal service loading rubbish in Berkshire"
        className="w-full h-full object-cover opacity-15 grayscale"
        loading="eager"
        fetchPriority="high"
        width="1600"
        height="1487"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-transparent to-transparent" />
    </div>

    <div className="container mx-auto px-6 relative z-10 text-left py-12 md:py-20">
      <div className="max-w-5xl">
        <div className="mb-6 inline-block">
          <span className="bg-[#4ade80] text-slate-900 px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] italic border-2 md:border-4 border-white shadow-lg">
            Same Day Collection Available
          </span>
        </div>

        <h1 className="text-5xl md:text-[7rem] lg:text-[9rem] font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase italic">
          WASTE<br />
          <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>REMOVAL</span><br />
          <span className="text-[#4ade80]">BERKSHIRE<br />&amp; SURREY.</span>
        </h1>

        <p className="text-lg md:text-2xl text-white/70 mb-10 max-w-2xl font-bold leading-tight italic">
          Fully licensed. Fixed pricing. <span className="text-white border-b-4 border-orange-500">No hidden fees.</span> Professional crews across Berkshire &amp; Surrey.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-10">
          <a
            href="tel:07769844298"
            className="bg-orange-500 hover:bg-orange-400 text-black px-8 md:px-10 py-4 md:py-5 font-black text-base md:text-lg uppercase italic tracking-wide flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-[6px_6px_0px_#022c22] active:shadow-none"
          >
            <Phone size={20} fill="black" />
            Call Now — Free Quote
          </a>
          <a
            href="#quote-form"
            className="bg-white/10 hover:bg-white/20 text-white px-8 md:px-10 py-4 md:py-5 font-black text-base md:text-lg uppercase italic tracking-wide flex items-center justify-center gap-3 border-2 border-white/40 hover:border-white/60 transition-all"
          >
            Get a Free Quote Online
            <ChevronDown size={18} />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: BadgeCheck, text: 'Licensed Waste Carrier' },
            { icon: ShieldCheck, text: 'Fully Insured — £5M' },
            { icon: Star, text: '5★ Google Reviews' },
            { icon: Clock, text: 'Same Day Service' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 bg-white/5 border-2 border-white/10 px-3 py-2.5">
              <Icon size={16} className="text-[#4ade80] shrink-0" />
              <span className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-wide">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </header>
);

export default LandingHero;
