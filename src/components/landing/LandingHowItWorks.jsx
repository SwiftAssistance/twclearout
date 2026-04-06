import React from 'react';
import { MessageSquare, Truck, Recycle } from 'lucide-react';

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Get Your Free Quote',
    desc: "Call us or fill in the form below. We'll give you a fixed price within the hour — no surprises.",
    image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=480&h=360&fit=crop&auto=format&q=80',
  },
  {
    num: '02',
    icon: Truck,
    title: 'We Arrive & Load Up',
    desc: "Our uniformed team arrives at the agreed time. You point, we load. You don't lift a thing.",
    image: 'https://images.unsplash.com/photo-1601628828688-632f38a5a7d0?w=480&h=360&fit=crop&auto=format&q=80',
  },
  {
    num: '03',
    icon: Recycle,
    title: 'Responsibly Disposed',
    desc: 'We sort, recycle and dispose at licensed facilities. Waste transfer note provided every time.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=480&h=360&fit=crop&auto=format&q=80',
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
        {steps.map(({ num, icon: Icon, title, desc, image }) => (
          <div key={num} className="bg-white/5 border-4 border-white/20 relative overflow-hidden">
            {/* Step image */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
                width="480"
                height="360"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-[#064e3b]/40 to-transparent" />
              <span className="absolute top-3 left-3 bg-[#16a34a] text-white font-[1000] text-lg italic w-10 h-10 flex items-center justify-center border-2 border-[#4ade80]">
                {num}
              </span>
            </div>
            <div className="p-6 relative">
              <span className="absolute -top-4 -right-2 text-[5rem] font-[1000] text-white/5 leading-none select-none">{num}</span>
              <div className="w-12 h-12 bg-[#16a34a] flex items-center justify-center border-3 border-[#4ade80] mb-4">
                <Icon size={22} className="text-white" />
              </div>
              <h3 className="font-black text-xl uppercase italic tracking-tight text-white mb-3 leading-tight">{title}</h3>
              <p className="text-sm font-bold text-white/70 leading-relaxed">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a
          href="#quote-form"
          className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black px-10 py-5 font-black uppercase italic tracking-wider text-base transition-all shadow-[6px_6px_0px_#022c22] hover:-translate-y-1 active:shadow-none active:translate-x-1 active:translate-y-1"
        >
          Get Your Free Quote Now →
        </a>
        <p className="text-xs font-bold text-white/40 mt-4 italic uppercase tracking-wider">No obligation · Fixed price · 60-min response</p>
      </div>
    </div>
  </section>
);

export default LandingHowItWorks;
