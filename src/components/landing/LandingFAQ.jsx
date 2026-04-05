import React from 'react';

const faqs = [
  {
    q: 'How quickly can you come?',
    a: 'In most cases we offer same day or next day collection across Berkshire and Surrey.',
  },
  {
    q: 'Are you a licensed waste carrier?',
    a: 'Yes. We\u2019re registered with the Environment Agency (Licence No: CBDU XXXXXX). You can verify this on the public register.',
  },
  {
    q: 'What happens to my waste?',
    a: 'We take everything to licensed transfer stations. We recycle and donate wherever possible, and you receive a waste transfer note for your records.',
  },
  {
    q: 'Do I need to be home?',
    a: 'It helps, but it\u2019s not essential. We can work from photos and clear instructions if needed.',
  },
  {
    q: 'How much does it cost?',
    a: 'It depends on the volume and type of waste. Single items start from \u00a350, full van loads from \u00a3220. Call or use the form above for a free, no-obligation quote.',
  },
  {
    q: 'Do you clear everything?',
    a: 'Almost. We handle household, garden, commercial and bulky waste. We can\u2019t take asbestos, clinical waste, or hazardous materials.',
  },
  {
    q: 'What areas do you cover?',
    a: 'We\u2019re based in Windsor and cover Berkshire and Surrey \u2014 including Slough, Reading, Bracknell, Guildford, Woking, Camberley and everywhere in between.',
  },
];

const LandingFAQ = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-black text-center text-slate-900 mb-10 sm:mb-12">
        Frequently Asked Questions
      </h2>
      <div className="max-w-2xl mx-auto divide-y divide-slate-200">
        {faqs.map(({ q, a }) => (
          <details key={q} className="group">
            <summary className="flex justify-between items-center cursor-pointer py-4 sm:py-5 text-sm sm:text-base font-bold text-slate-900 list-none [&::-webkit-details-marker]:hidden">
              {q}
              <span className="ml-4 shrink-0 text-[#16a34a] group-open:rotate-45 transition-transform text-xl leading-none">+</span>
            </summary>
            <p className="pb-4 sm:pb-5 text-sm text-slate-500 leading-relaxed -mt-1">{a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default LandingFAQ;
