import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How quickly can you come?',
    a: 'In most cases we offer same day or next day collection across Berkshire and Surrey. Call us at 07769 844298 for immediate availability.',
  },
  {
    q: 'Are you a licensed waste carrier?',
    a: "Yes. We're registered with the Environment Agency (Licence No: CBDU630127). You can verify this on the public register. We carry £5 million public liability insurance.",
  },
  {
    q: 'What happens to my waste?',
    a: 'We take everything to licensed transfer stations. We recycle and donate wherever possible — achieving a 94% recycling rate. You receive a waste transfer note for your records.',
  },
  {
    q: 'Do I need to be home?',
    a: "It helps, but it's not essential. We can work from photos and clear instructions if you need to be elsewhere.",
  },
  {
    q: 'How much does it cost?',
    a: 'It depends on the volume and type of waste. Single items start from £50, full van loads from £220. Call or use the form above for a free, no-obligation quote with a fixed price.',
  },
  {
    q: 'Do you clear everything?',
    a: "Almost everything. We handle household, garden, commercial and bulky waste. We can't take asbestos, clinical waste, or hazardous materials.",
  },
  {
    q: 'Why use you instead of a skip?',
    a: "No council permits, no blocked driveways, no waiting. We arrive, load everything ourselves, and leave the same day. Often cheaper than a skip when you add up permit costs and waiting time.",
  },
];

const LandingFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900">Everything You Need To Know</h2>
          <p className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-slate-900 italic uppercase leading-[0.9] tracking-tighter">
            FREQUENTLY<br />ASKED.
          </p>
        </div>

        <div className="max-w-4xl space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-4 border-slate-900 overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 md:p-8 bg-[#ecf3ef] hover:bg-[#dcfce7] transition-colors text-left cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <h3 className="text-base md:text-lg font-black uppercase italic text-slate-900">{faq.q}</h3>
                <ChevronDown
                  size={24}
                  className={`text-slate-900 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 md:px-8 pb-6 md:pb-8 pt-2 text-slate-700 font-bold leading-relaxed bg-[#ecf3ef]">{faq.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingFAQ;
