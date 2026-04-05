import React from 'react';
import { MessageSquare, Truck, Recycle } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Get Your Free Quote',
    desc: "Call us or fill in the form below. We'll give you a fixed price within the hour — no surprises.",
  },
  {
    num: '02',
    icon: Truck,
    title: 'We Arrive & Load Up',
    desc: "Our uniformed team arrives at the agreed time. You point, we load. You don't lift a thing.",
  },
  {
    num: '03',
    icon: Recycle,
    title: 'Responsibly Disposed',
    desc: 'We sort, recycle and dispose at licensed facilities. Waste transfer note provided every time.',
  },
];

const LandingHowItWorks = () => (
  <section className="py-20 md:py-28 bg-[#064e3b] text-white overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-16">
        <h2 className="text-[#4ade80] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-white/30">Simple Process</h2>
        <p className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-white italic uppercase leading-[0.9] tracking-tighter">
          HOW IT<br />WORKS.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {steps.map(({ num, icon: Icon, title, desc }) => (
          <div key={num} className="bg-white/5 border-4 border-white/20 p-8 relative overflow-hidden">
            <span className="absolute -top-4 -right-2 text-[6rem] font-[1000] text-white/5 leading-none select-none">{num}</span>
            <div className="w-14 h-14 bg-[#16a34a] flex items-center justify-center border-4 border-[#4ade80] mb-6">
              <Icon size={24} className="text-white" />
            </div>
            <h3 className="font-black text-xl uppercase italic tracking-tight text-white mb-3 leading-tight">{title}</h3>
            <p className="text-sm font-bold text-white/70 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#quote-form"
          className="inline-flex items-center gap-3 bg-[#16a34a] hover:bg-[#15803d] text-white px-10 py-5 font-black uppercase italic tracking-wider text-base transition-all shadow-[6px_6px_0px_#4ade80] hover:shadow-[6px_6px_0px_#022c22] active:shadow-none active:translate-x-1 active:translate-y-1"
        >
          Get Your Free Quote Now →
        </a>
      </div>
    </div>
  </section>
);

export default LandingHowItWorks;
