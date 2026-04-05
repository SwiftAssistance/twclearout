import React from 'react';
import { Phone, ChevronDown, ShieldCheck, Star, Clock, BadgeCheck } from 'lucide-react';

const LandingHero = () => (
  <section className="pt-14 sm:pt-16 bg-gradient-to-br from-[#064e3b] to-[#022c22] text-white">
    <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4 sm:mb-5 tracking-tight">
          Fast, Licensed Waste Removal Across Berkshire &amp; Surrey
        </h1>
        <p className="text-lg sm:text-xl text-white/80 font-semibold mb-6 sm:mb-8">
          Same day collection. Fixed prices. No hidden fees.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
          <a
            href="tel:07XXX XXXXXX"
            className="bg-[#16a34a] hover:bg-[#15803d] text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-3 transition-colors shadow-lg shadow-green-900/30"
          >
            <Phone size={20} fill="white" />
            Call Now — Free Quote
          </a>
          <a
            href="#quote-form"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-colors border border-white/20"
          >
            Get a Free Quote Online
            <ChevronDown size={18} />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {[
            { icon: BadgeCheck, text: 'Licensed Waste Carrier' },
            { icon: ShieldCheck, text: 'Fully Insured' },
            { icon: Star, text: '5★ Google Reviews' },
            { icon: Clock, text: 'Same Day Service' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-2.5 border border-white/10">
              <Icon size={16} className="text-[#4ade80] shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-white/90">{text}</span>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto aspect-video bg-white/5 rounded-xl border border-white/10 overflow-hidden">
          <img
            src="/placeholder-hero.webp"
            alt="Total Waste Clearout van"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
);

export default LandingHero;
