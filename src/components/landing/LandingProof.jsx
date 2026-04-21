import React from 'react';
import { Star, Trash2, Home, TreePine, Briefcase, Sofa, Warehouse } from 'lucide-react';
import PlatformLogo from '../PlatformLogo';

const jobPhotos = [
  { src: '/jobs/garden-before.webp', caption: 'Garden clearout — before' },
  { src: '/jobs/garden-after.webp', caption: 'Garden clearout — after' },
  { src: '/jobs/shed-before.webp', caption: 'Shed demolition — before' },
  { src: '/jobs/shed-after.webp', caption: 'Shed demolition — after' },
  { src: '/jobs/construction-before.webp', caption: 'Construction clearout — before' },
  { src: '/jobs/construction-after.webp', caption: 'Construction clearout — after' },
];

const reviews = [
  {
    text: "We used Total Waste Clearout twice and honestly couldn't fault them either time. First they cleared out our office, then a few weeks later sorted my garden at home. Showed up on time, got stuck in straight away, and left everything spotless. Really professional team, great communication, and the price was fair.",
    name: 'Wisetax Accountants',
    location: 'Slough',
    platform: 'google',
  },
  {
    text: "Really pleased with Total Waste Clearout. They demolished an old shed and cleared all the waste from my garden — turned up on time, worked quickly, and left everything spotless. Great value and friendly team. Will definitely use them again.",
    name: 'Leo Luxe Clean',
    location: 'Slough',
    platform: 'google',
  },
  {
    text: "Brilliant service from Total Waste Clear Out. Quick, reliable, and very professional. They cleared out my garden, shed, and old trees with no hassle and left everything spotless.",
    name: 'Conor Waterman',
    location: 'Woking',
    platform: 'google',
  },
];

const Reviews = () => (
  <div>
    <div className="flex items-center gap-3 mb-8">
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" className="text-yellow-500" />)}
      </div>
      <span className="text-sm font-black text-slate-900 uppercase italic">5.0</span>
      <PlatformLogo platform="google" size={16} />
      <span className="text-xs font-bold text-slate-400">Google Reviews</span>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {reviews.map(({ text, name, location, platform }, idx) => (
        <div key={idx} className="border-4 border-slate-900 p-6 bg-[#064e3b] shadow-[6px_6px_0px_#16a34a] flex flex-col">
          <div className="flex items-center gap-1.5 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="currentColor" className="text-[#4ade80]" />)}
            {platform && <PlatformLogo platform={platform} size={15} className="ml-1" />}
          </div>
          <p className="text-white font-black text-base italic leading-snug mb-4 flex-grow">
            "{text}"
          </p>
          <p className="text-white/50 text-xs font-bold uppercase tracking-wide">{name} — {location}</p>
        </div>
      ))}
    </div>
  </div>
);

const LandingProof = () => (
  <>
    {/* PHOTO STRIP */}
    <section className="bg-slate-900 pt-10 pb-0 overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 mb-6">
        <p className="text-white font-black text-lg md:text-xl uppercase italic tracking-tight">
          Recent jobs <span className="text-white/30">— just a few from this month</span>
        </p>
      </div>
      <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
        {jobPhotos.map(({ src, caption }) => (
          <div key={caption} className="shrink-0 w-[260px] sm:w-[280px] md:w-[300px] relative group bg-slate-800">
            <img src={src} alt={caption} className="w-full h-[200px] sm:h-[220px] object-cover block"
              loading="eager" decoding="sync" width="600" height="600" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-3 py-2">
              <p className="text-white text-[11px] font-bold">{caption}</p>
            </div>
          </div>
        ))}
        <div className="shrink-0 w-[200px] bg-[#064e3b] flex flex-col items-center justify-center px-6">
          <p className="text-[#4ade80] font-black text-3xl italic">500+</p>
          <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest text-center mt-1">Jobs completed</p>
        </div>
      </div>
    </section>

    {/* SERVICES */}
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
            <a key={label} href="#quote-form"
              className="inline-flex items-center gap-2 bg-white border-2 border-slate-900 px-3 py-2 hover:bg-[#dcfce7] hover:border-[#16a34a] transition-colors group">
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

    {/* REVIEWS */}
    <section className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-5 sm:px-6">
        <Reviews />
      </div>
    </section>
  </>
);

export default LandingProof;
