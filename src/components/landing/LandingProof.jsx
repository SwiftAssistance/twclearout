import React from 'react';
import { Star, Phone, CheckCircle, Recycle, Clock, BadgeCheck } from 'lucide-react';

/*
  This section does THREE things in one flowing block:
  1. Photo strip of real jobs (visual proof)
  2. Customer quotes (social proof)
  3. Key stats woven in (trust)

  NOT a generic grid layout. Deliberately asymmetric and varied.
*/

const jobPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&h=500&fit=crop&auto=format&q=80',
    caption: 'House clearance, Windsor',
  },
  {
    src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=500&fit=crop&auto=format&q=80',
    caption: 'Garden waste, Bracknell',
  },
  {
    src: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=500&fit=crop&auto=format&q=80',
    caption: 'Rubbish removal, Slough',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=500&fit=crop&auto=format&q=80',
    caption: 'Office clearance, Guildford',
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
          <div key={caption} className="shrink-0 w-[260px] sm:w-[280px] md:w-[300px] relative group">
            <img
              src={src}
              alt={caption}
              className="w-full h-[200px] sm:h-[220px] object-cover"
              loading="lazy"
              width="400"
              height="500"
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
          {/* FIX 13: wrapped in anchor linking to Google reviews so claim is verifiable */}
          <a
            href="https://www.google.com/search?q=Total+Waste+Clearout+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-black text-slate-900 uppercase italic underline decoration-[#16a34a] hover:text-[#16a34a] transition-colors"
          >
            5.0 on Google ↗ {/* FIX 13: arrow indicates external link */}
          </a>
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
              "Called in the morning, they were here by lunchtime. Everything cleared, swept up, waste transfer note emailed over. Can't recommend enough."
            </p>
            <p className="text-white/60 text-sm font-bold">Sarah — Windsor</p>
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
                "Used them for a full house clearance after my mum passed. Respectful, efficient, recycled as much as possible. Fair price. Would use again without hesitation."
              </p>
              <p className="text-slate-500 text-xs font-bold">James — Guildford</p>
            </div>

            <div className="border-4 border-slate-900 p-5 bg-white">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} fill="currentColor" className="text-[#16a34a]" />
                ))}
              </div>
              <p className="text-slate-900 font-black text-sm italic leading-snug mb-2">
                "Garden full of rubble, old decking and green waste. Loaded the lot in under an hour. Price was exactly what they quoted. Top job."
              </p>
              <p className="text-slate-500 text-xs font-bold">Mark — Bracknell</p>
            </div>
          </div>
        </div>

        {/* Trust credentials — inline list, not cards */}
        <div className="border-t-4 border-slate-900 pt-8">
          <p className="text-slate-900 font-black text-sm uppercase italic tracking-wide mb-5">Why people pick us over a skip:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {[
              { icon: CheckCircle, text: 'We do ALL the lifting — you point, we load' },
              { icon: Clock, text: 'Same day or next day, most areas' },
              { icon: Recycle, text: '94% of waste recycled or donated' },
              { icon: BadgeCheck, text: 'Waste transfer note on every job' },
              { icon: CheckCircle, text: 'No skip permits, no blocked driveways' },
              { icon: CheckCircle, text: 'Fixed price — the quote IS the price' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-start gap-2.5">
                <Icon size={16} className="text-[#16a34a] shrink-0 mt-0.5" />
                <p className="text-sm font-bold text-slate-700 leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FIX 10: mid-page CTA after trust grid — phone primary, written quote secondary */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center pt-8 border-t-4 border-slate-900">
          {/* FIX 10: Phone is already imported in this file, no new import needed */}
          <a
            href="tel:07769844298"
            className="inline-flex items-center gap-2 bg-[#16a34a] text-white px-8 py-4 font-black uppercase italic tracking-wide text-sm shadow-[4px_4px_0px_#064e3b] hover:bg-[#15803d] transition-colors"
          >
            <Phone size={16} fill="white" /> Call 07769 844298 {/* FIX 10: Phone icon with fill */}
          </a>
          {/* FIX 10: secondary link to hero form for users who prefer written quote */}
          <a
            href="#hero-form"
            className="text-sm font-black uppercase italic text-[#16a34a] underline decoration-slate-900"
          >
            Or get a written quote → {/* FIX 10: anchors to the form div via #hero-form */}
          </a>
        </div>

      </div>
    </section>
  </>
);

export default LandingProof;
