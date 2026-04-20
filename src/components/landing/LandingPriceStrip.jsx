import React from 'react';

const prices = [
  { label: 'Van load', price: 'from £50' },
  { label: 'Garden waste', price: 'from £80' },
  { label: 'House clearance', price: 'from £150' },
  { label: 'End-of-tenancy', price: 'from £250' },
];

const LandingPriceStrip = () => (
  <div className="bg-slate-900 border-b-4 border-[#16a34a] py-3 overflow-hidden">
    <div className="container mx-auto px-5 sm:px-6">
      <div className="flex flex-wrap items-center gap-x-1 gap-y-1.5">
        <span className="text-[10px] font-black text-white/40 uppercase tracking-widest mr-3 whitespace-nowrap">
          Price guide:
        </span>
        {prices.map(({ label, price }, i) => (
          <React.Fragment key={label}>
            <span className="whitespace-nowrap">
              <span className="text-xs font-bold text-white/60">{label} </span>
              <span className="text-xs font-black text-[#4ade80]">{price}</span>
            </span>
            {i < prices.length - 1 && (
              <span className="text-white/20 text-xs mx-2 hidden sm:inline">·</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default LandingPriceStrip;
