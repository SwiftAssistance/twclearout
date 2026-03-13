const items = [
  '★ 94% Recycled',
  '★ Same-Day Service',
  '★ <2h Response',
  '★ £5M Insured',
  '★ Licensed Carrier',
  '★ Fixed Pricing',
  '★ No Hidden Fees',
  '★ Fully Licensed',
];

export default function StatsTicker() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-[#4ade80] py-3 overflow-hidden border-y-4 border-slate-900">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="mx-8 font-black uppercase text-slate-900 text-sm tracking-widest">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
