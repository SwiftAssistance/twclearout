import React from 'react';

const pricingData = [
  { size: 'Single item (mattress, sofa)', price: '\u00a350' },
  { size: 'Partial van load', price: '\u00a3120' },
  { size: 'Full van load', price: '\u00a3220' },
  { size: 'Multi-room / full house', price: 'Quote required' },
];

const Pricing = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal text-center mb-10">
          Pricing Guide
        </h2>

        <div className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-brand-navy text-white">
                <th className="text-left px-4 md:px-6 py-3 font-bold text-sm">
                  Load Size
                </th>
                <th className="text-right px-4 md:px-6 py-3 font-bold text-sm">
                  Starting From
                </th>
              </tr>
            </thead>
            <tbody>
              {pricingData.map((row, idx) => (
                <tr
                  key={row.size}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-4 md:px-6 py-4 text-sm text-brand-charcoal">
                    {row.size}
                  </td>
                  <td className="px-4 md:px-6 py-4 text-sm font-bold text-brand-green text-right">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-gray-500 text-sm text-center mt-4">
          Every job is different. Call or message us for an accurate,
          no-obligation quote.
        </p>

        <div className="text-center mt-6">
          <a
            href="#quote-form"
            className="inline-flex items-center justify-center bg-brand-green hover:bg-brand-green-dark text-white font-bold px-8 py-3 rounded-lg transition-colors shadow"
          >
            Get Your Free Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
