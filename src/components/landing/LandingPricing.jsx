import React from 'react';
import { CheckCircle, XCircle, TrendingDown } from 'lucide-react';

const rows = [
  { size: 'Single Item', example: 'Mattress, sofa, fridge', price: 'From £50', highlight: false },
  { size: 'Partial Load', example: '¼ – ½ van of mixed waste', price: 'From £120', highlight: false },
  { size: 'Full Van Load', example: 'Full clearance, one van', price: 'From £220', highlight: true },
  { size: 'Multi-Room / Full House', example: 'Large clearance, multiple vans', price: 'Custom Quote', highlight: false },
];

const included = [
  'All labour — we do the lifting',
  'Transport & disposal',
  'Waste transfer note',
  '94% recycling rate',
  'No skip permits needed',
];

const skipComparison = [
  { feature: 'Full Van Load', us: 'From £220', skip: '£250–£350', usBetter: true },
  { feature: 'Council Permit', us: 'Not needed', skip: '£60–£100 extra', usBetter: true },
  { feature: 'Labour (loading)', us: 'Included', skip: 'You load it', usBetter: true },
  { feature: 'Same-Day Collection', us: 'Available', skip: '3–5 day wait', usBetter: true },
  { feature: 'Typical Total Cost', us: '~£220', skip: '~£350–£500', usBetter: true },
];

const LandingPricing = () => (
  <section className="py-20 md:py-28 bg-white overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-16">
        <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900">Cheaper Than Skip Hire</h2>
        <p className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-slate-900 italic uppercase leading-[0.9] tracking-tighter">
          PRICING<br />GUIDE.
        </p>
      </div>

      {/* Skip hire comparison */}
      <div className="mb-12 max-w-3xl">
        <div className="flex items-center gap-2 mb-4">
          <TrendingDown size={18} className="text-[#16a34a]" />
          <p className="font-black text-sm uppercase italic tracking-wide text-slate-900">Us vs Skip Hire — See the difference</p>
        </div>
        <div className="border-4 border-slate-900 overflow-hidden shadow-[8px_8px_0px_#16a34a]">
          <div className="grid grid-cols-3 bg-slate-900 text-white">
            <div className="px-4 py-3 font-black text-xs uppercase italic tracking-wide"></div>
            <div className="px-4 py-3 font-black text-xs uppercase italic tracking-wide text-[#4ade80] text-center">Total Waste Clearout</div>
            <div className="px-4 py-3 font-black text-xs uppercase italic tracking-wide text-white/40 text-center">Skip Hire</div>
          </div>
          {skipComparison.map(({ feature, us, skip }) => (
            <div key={feature} className="grid grid-cols-3 border-t-2 border-slate-200 items-center">
              <div className="px-4 py-3">
                <p className="text-xs font-black uppercase italic text-slate-600">{feature}</p>
              </div>
              <div className="px-4 py-3 text-center bg-[#f0fdf4] border-x-2 border-[#16a34a]/20">
                <span className="text-xs font-black text-[#16a34a] italic">{us}</span>
              </div>
              <div className="px-4 py-3 text-center">
                <span className="text-xs font-bold text-slate-400 line-through italic">{skip}</span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] font-bold text-slate-400 mt-2 italic">* Skip hire estimates based on typical Berkshire/Surrey rates including standard permits.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start max-w-5xl">
        {/* Pricing table */}
        <div className="border-4 border-slate-900 overflow-hidden shadow-[10px_10px_0px_#16a34a]">
          <div className="grid grid-cols-2 bg-slate-900 text-white">
            <div className="px-6 py-4 font-black text-sm uppercase italic tracking-wide">Load Size</div>
            <div className="px-6 py-4 text-right font-black text-sm uppercase italic tracking-wide">Starting From</div>
          </div>
          {rows.map(({ size, example, price, highlight }) => (
            <div
              key={size}
              className={`grid grid-cols-2 border-t-4 border-slate-900 items-center ${highlight ? 'bg-[#dcfce7] border-[#16a34a]' : 'bg-white'}`}
            >
              <div className="px-6 py-5">
                <p className="font-black text-sm uppercase italic text-slate-900">{size}</p>
                <p className="text-xs font-bold text-slate-500 mt-0.5">{example}</p>
              </div>
              <div className="px-6 py-5 text-right">
                <span className={`font-black text-base uppercase italic ${highlight ? 'text-[#16a34a]' : 'text-slate-900'}`}>{price}</span>
              </div>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="bg-[#064e3b] border-4 border-slate-900 p-8 shadow-[10px_10px_0px_#ecf3ef]">
          <h3 className="font-black text-xl uppercase italic text-white mb-6 tracking-tight">Everything Included</h3>
          <ul className="space-y-3 mb-8">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <CheckCircle size={18} className="text-[#4ade80] shrink-0" />
                <span className="font-bold text-sm text-white/90">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="#quote-form"
            className="block text-center bg-[#16a34a] hover:bg-[#15803d] text-white px-8 py-4 font-black uppercase italic tracking-wide text-sm transition-all shadow-[4px_4px_0px_#4ade80] active:shadow-none"
          >
            Get Your Fixed Price →
          </a>
          <p className="text-xs font-bold text-white/40 text-center mt-4 italic">
            Every job is different — call for an accurate quote.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default LandingPricing;
