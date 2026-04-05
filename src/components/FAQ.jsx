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

const FAQ = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group bg-gray-50 border border-gray-200 rounded-lg overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer px-5 py-4 font-semibold text-brand-charcoal text-sm md:text-base select-none list-none [&::-webkit-details-marker]:hidden">
                <span>{faq.q}</span>
                <span className="ml-4 text-brand-green transition-transform group-open:rotate-180 shrink-0">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6l4 4 4-4" />
                  </svg>
                </span>
              </summary>
              <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
