import React from 'react';
import { Camera, ArrowRight } from 'lucide-react';

const jobs = [
  {
    title: 'House Clearance',
    location: 'Windsor',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop&auto=format&q=80',
    tag: 'Full Clearance',
  },
  {
    title: 'Garden Clearout',
    location: 'Bracknell',
    image: '/jobs/garden-clearout.webp',
    tag: 'Same Day',
  },
  {
    title: 'Office Clearance',
    location: 'Guildford',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&auto=format&q=80',
    tag: 'Commercial',
  },
  {
    title: 'Construction Clearout',
    location: 'Reading',
    image: '/jobs/construction-before.webp',
    tag: 'Before',
  },
  {
    title: 'Construction Clearout',
    location: 'Reading',
    image: '/jobs/construction-after.webp',
    tag: 'After',
  },
  {
    title: 'Shed Demolition',
    location: 'Maidenhead',
    image: '/jobs/shed-demolition.webp',
    tag: 'Dismantled & Removed',
  },
];

const LandingGallery = () => (
  <section className="py-20 md:py-28 bg-slate-900 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-16">
        <h2 className="text-[#4ade80] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-white/30">
          Recent Jobs
        </h2>
        <p className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-white italic uppercase leading-[0.9] tracking-tighter">
          SEE OUR<br />WORK.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {jobs.map(({ title, location, image, tag }) => (
          <a
            key={title}
            href="#quote-form"
            className="group relative block overflow-hidden border-4 border-white/10 hover:border-[#16a34a] transition-colors"
          >
            {/* Image */}
            <div className="aspect-[3/2] overflow-hidden">
              <img
                src={image}
                alt={`${title} job in ${location}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="600"
                height="400"
              />
            </div>

            {/* Tag badge */}
            <span className="absolute top-3 left-3 bg-[#16a34a] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1.5 italic">
              {tag}
            </span>

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="font-black text-base uppercase italic text-white tracking-tight leading-tight mb-1">
                {title}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                {location} · Completed
              </p>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          href="#quote-form"
          className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-black px-10 py-5 font-black uppercase italic tracking-wider text-base transition-all shadow-[6px_6px_0px_#16a34a] hover:-translate-y-1 active:shadow-none active:translate-y-1"
        >
          Get a Free Quote <ArrowRight size={18} />
        </a>
        <p className="flex items-center gap-2 text-xs font-bold text-white/40 uppercase italic tracking-wider">
          <Camera size={14} /> 500+ jobs completed across Berkshire & Surrey
        </p>
      </div>
    </div>
  </section>
);

export default LandingGallery;
