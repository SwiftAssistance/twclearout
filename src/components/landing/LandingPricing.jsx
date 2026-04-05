import React from 'react';

const rows = [
  { size: 'Single item (mattress, sofa)', price: '£50' },
  { size: 'Partial van load', price: '£120' },
  { size: 'Full van load', price: '£220' },
  { size: 'Multi-room / full house', price: 'Quote required' },
];

const LandingPricing = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-black text-center text-slate-900 mb-10 sm:mb-12">
        Pricing Guide
      </h2>
      <div className="max-w-lg mx-auto">
        <div className="rounded-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-2 bg-[#064e3b] text-white font-bold text-sm">
            <div className="px-5 py-3">Load Size</div>
            <div className="px-5 py-3 text-right">Starting From</div>
          </div>
          {rows.map(({ size, price }, i) => (
            <div key={size} className={`grid grid-cols-2 text-sm ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
              <div className="px-5 py-4 text-slate-700 font-medium">{size}</div>
              <div className="px-5 py-4 text-right font-bold text-slate-900">{price}</div>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 text-center mt-4 leading-relaxed">
          Every job is different. Call or message us for an accurate, no-obligation quote.
        </p>
        <div className="text-center mt-6">
          <a
            href="#quote-form"
            className="inline-block bg-[#16a34a] hover:bg-[#15803d] text-white px-8 py-3.5 rounded-lg font-bold transition-colors"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default LandingPricing;
