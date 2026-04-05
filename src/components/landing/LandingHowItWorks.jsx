import React from 'react';
import { MessageSquare, Truck, Recycle } from 'lucide-react';

const steps = [
  {
    num: 1,
    icon: MessageSquare,
    title: 'Get Your Free Quote',
    desc: "Call us or fill in the form. We'll give you a fixed price within the hour.",
  },
  {
    num: 2,
    icon: Truck,
    title: 'We Arrive & Load Up',
    desc: "Our team arrives at the agreed time. You point, we load. You don't lift a thing.",
  },
  {
    num: 3,
    icon: Recycle,
    title: 'Waste Responsibly Disposed',
    desc: 'We sort, recycle and dispose at licensed facilities. Waste transfer note provided.',
  },
];

const LandingHowItWorks = () => (
  <section className="py-16 sm:py-20 bg-slate-50">
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-black text-center text-slate-900 mb-10 sm:mb-12">
        How It Works
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
        {/* Connecting line (desktop only) */}
        <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-0.5 bg-[#16a34a]/20" aria-hidden="true" />
        {steps.map(({ num, icon: Icon, title, desc }) => (
          <div key={num} className="flex flex-col items-center text-center relative">
            <div className="w-12 h-12 rounded-full bg-[#16a34a] text-white flex items-center justify-center font-black text-lg mb-4 relative z-10">
              {num}
            </div>
            <div className="w-10 h-10 mb-3">
              <Icon size={28} className="text-[#16a34a] mx-auto" />
            </div>
            <h3 className="font-bold text-base sm:text-lg text-slate-900 mb-2">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LandingHowItWorks;
