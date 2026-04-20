import React from 'react';
import { Star, Phone, Trash2, Home, TreePine, Briefcase, Sofa, Warehouse } from 'lucide-react';

/*
  This section does THREE things in one flowing block:
  1. Photo strip of real jobs (visual proof)
  2. Customer quotes (social proof)
  3. Key stats woven in (trust)

  NOT a generic grid layout. Deliberately asymmetric and varied.
*/

const jobPhotos = [
  {
    src: '/jobs/garden-before.webp',
    caption: 'Garden clearout — before',
  },
  {
    src: '/jobs/garden-after.webp',
    caption: 'Garden clearout — after',
  },
  {
    src: '/jobs/shed-before.webp',
    caption: 'Shed demolition — before',
  },
  {
    src: '/jobs/shed-after.webp',
    caption: 'Shed demolition — after',
  },
  {
    src: '/jobs/construction-before.webp',
    caption: 'Construction clearout — before',
  },
  {
    src: '/jobs/construction-after.webp',
    caption: 'Construction clearout — after',
  },
];

const LandingProof = () => (
  <>
    {/* PHOTO STRIP — full bleed, no padding, raw feel */}
    <section className="bg-slate-900 pt-10 pb-0 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 mb-6">
        <p className="text-white font-black text-lg md:text-xl uppercase italic tracking-tight">
          Recent jobs <span className="text-white/30">— just a few from this month</span>
        </p>
      </div>
      <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
        {jobPhotos.map(({ src, caption }) => (
          <div key={caption} className="shrink-0 w-[260px] sm:w-[280px] md:w-[300px] relative group bg-slate-800">
            <img
              src={src}
              alt={caption}
              className="w-full h-[200px] sm:h-[220px] object-cover block"
              /* No lazy-load, no fade-in, no fetchpriority downgrade.
                 Show the byte the moment it arrives. */
              loading="eager"
              decoding="sync"
              width="600"
              height="600"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
              <p className="text-white text-[11px] font-bold">{caption}</p>
            </div>
          </div>
        ))}
        {/* "More" card */}
        <div className="shrink-0 w-[200px] bg-[#064e3b] flex flex-col items-center justify-center px-6">
          <p className="text-[#4ade80] font-black text-3xl italic">500+</p>
          <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest text-center mt-1">Jobs completed</p>
        </div>
      </div>
    </section>

    {/* SERVICES — compact, not a full section, just enough to show range */}
    <section className="bg-[#ecf3ef] py-10 md:py-14 border-b-4 border-slate-900">
      <div className="container mx-auto px-5 sm:px-6">
        <p className="text-slate-900 font-black text-sm uppercase italic tracking-wide mb-5">What we clear:</p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {[
            { icon: Trash2, label: 'Rubbish Removal' },
            { icon: Home, label: 'House Clearance' },
            { icon: TreePine, label: 'Garden Waste' },
            { icon: Briefcase, label: 'Office & Commercial' },
            { icon: Sofa, label: 'Furniture & Bulky Items' },
            { icon: Warehouse, label: 'Shed & Hot Tub Removal' },
          ].map(({ icon: Icon, label }) => (
            <a
              key={label}
              href="#quote-form"
              className="inline-flex items-center gap-2 bg-white border-2 border-slate-900 px-3 py-2 hover:bg-[#dcfce7] hover:border-[#16a34a] transition-colors group"
            >
              <Icon size={14} className="text-[#16a34a] shrink-0" />
              <span className="text-xs font-black text-slate-900 uppercase italic tracking-tight">{label}</span>
            </a>
          ))}
        </div>
        <p className="text-xs font-bold text-slate-500 mt-4 italic">
          From single items (£50) to full house clearances. Fixed price, no hidden fees.
        </p>
      </div>
    </section>

    {/* REVIEWS + STATS — deliberately NOT matching cards */}
    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-5 sm:px-6">

        {/* Google rating inline */}
        <div className="flex items-center gap-3 mb-8">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#f59e0b" className="text-yellow-500" />
            ))}
          </div>
          <p className="text-sm font-black text-slate-900 uppercase italic">5.0 on Google</p>
          <span className="text-slate-300">|</span>
          <p className="text-xs font-bold text-slate-500">Verified reviews</p>
        </div>

        {/* Reviews — staggered, different sizes, not a grid */}
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 md:items-start mb-14">

          {/* Big featured review */}
          <div className="md:w-1/2 bg-[#064e3b] border-4 border-slate-900 p-6 md:p-8 shadow-[6px_6px_0px_#16a34a]">
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" className="text-[#4ade80]" />
              ))}
            </div>
            <p className="text-white font-black text-lg md:text-xl italic leading-tight mb-4">
              "We used Total Waste Clearout twice and honestly couldn't fault them either time. First they cleared out our office, then a few weeks later sorted my garden at home. Showed up on time, got stuck in straight away, and left everything spotless. Really professional team, great communication, and the price was fair."
            </p>
            <p className="text-white/60 text-sm font-bold">Wisetax Accountants — Slough</p>
          </div>

          {/* Smaller stacked reviews */}
          <div className="md:w-1/2 space-y-4">
            <div className="border-4 border-slate-900 p-5 bg-[#ecf3ef]">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" className="text-[#16a34a]" />
                ))}
              </div>
              <p className="text-slate-900 font-black text-sm italic leading-snug mb-2">
                "Really pleased with Total Waste Clearout. They demolished an old shed and cleared all the waste from my garden - turned up on time, worked quickly, and left everything spotless. Great value and friendly team. Will definitely use them again."
              </p>
              <p className="text-slate-500 text-xs font-bold">Leo Luxe Clean — Slough</p>
            </div>

            <div className="border-4 border-slate-900 p-5 bg-white">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" className="text-[#16a34a]" />
                ))}
              </div>
              <p className="text-slate-900 font-black text-sm italic leading-snug mb-2">
                "Brilliant service from Total Waste Clear Out. Quick, reliable, and very professional. They cleared out my garden, shed, and old trees with no hassle and left everything spotless."
              </p>
              <p className="text-slate-500 text-xs font-bold">Conor Waterman — Woking</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  </>
);

export default LandingProof;
