import React from 'react';
import { Phone, FileText, CheckCircle, Shield, Star, Clock } from 'lucide-react';

const trustItems = [
  { icon: Shield, text: 'Licensed Waste Carrier' },
  { icon: CheckCircle, text: 'Fully Insured' },
  { icon: Star, text: '5\u2605 Google Reviews' },
  { icon: Clock, text: 'Same Day Service' },
];

const Hero = () => {
  return (
    <section className="bg-brand-navy text-white">
      <div className="container mx-auto px-4 py-8 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
              Fast, Licensed Waste Removal Across Berkshire &amp; Surrey
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              Same day collection. Fixed prices. No hidden fees.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6 justify-center lg:justify-start">
              <a
                href="tel:07XXXXXXXXX"
                className="inline-flex items-center justify-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold text-lg px-6 py-4 rounded-lg transition-colors shadow-lg"
              >
                <Phone size={20} />
                Call Now &mdash; Free Quote
              </a>
              <a
                href="#quote-form"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-6 py-4 rounded-lg transition-colors border border-white/20"
              >
                <FileText size={20} />
                Get a Free Quote Online
              </a>
            </div>

            {/* Trust strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {trustItems.map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-2 text-sm text-gray-300"
                >
                  <item.icon size={16} className="text-brand-green-light shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="aspect-video bg-gray-700 rounded-xl overflow-hidden flex items-center justify-center">
            <img
              src="/hero.webp"
              alt="Total Waste Clearout van"
              className="w-full h-full object-cover"
              width="640"
              height="360"
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
