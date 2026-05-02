import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import PlatformLogo from '../PlatformLogo';

const reviews = [
  {
    text: "Very professional, well presented, 3 lads turned up and just cracked on with the job, also if I'm honest it was the best price as I was looking around elsewhere, well recommended, will be using their services again 100%. Cheers lads !",
    name: 'H Hussain',
    initials: 'H',
    town: 'Verified Customer',
    color: 'bg-white text-slate-900',
    accent: 'text-[#16a34a]',
    avatarBg: 'bg-[#16a34a] text-white',
    platform: 'google',
  },
  {
    text: "Faultless! 5 star service at a reasonable price! I found it even easier than getting a skip. Really great, fast communication by Watsapp which is very convenient when you don't have much time! Thank you, will definitely use again.",
    name: 'Chantel Deebank',
    initials: 'C',
    town: 'Verified Customer',
    color: 'bg-[#16a34a] text-white',
    accent: 'text-white',
    avatarBg: 'bg-white text-[#16a34a]',
    platform: 'google',
  },
  {
    text: "They were fab, asked for a quote which was unbeatable on price after asking multiple places for quotes. Offered same day collection, kept me updated on arrival time, fast service and cleaned up after themselves tremendously - will be using again for future removals.",
    name: 'Amy Burrows',
    initials: 'A',
    town: 'Verified Customer',
    color: 'bg-white text-slate-900',
    accent: 'text-[#16a34a]',
    avatarBg: 'bg-[#16a34a] text-white',
    platform: 'google',
  },
];

// Clone last at start + first at end for seamless infinite loop
const SLIDES = [reviews[reviews.length - 1], ...reviews, reviews[0]];

const LandingReviews = () => {
  const [current, setCurrent] = useState(1); // 1 = first real slide
  const [animated, setAnimated] = useState(true);
  const [transitioning, setTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const transitionTimer = useRef(null);

  const navigate = useCallback((next) => {
    if (transitioning) return;
    setTransitioning(true);
    setAnimated(true);
    setCurrent(next);
    // Fallback unlock in case transitionend doesn't fire (e.g. tab hidden)
    transitionTimer.current = setTimeout(() => setTransitioning(false), 700);
  }, [transitioning]);

  const goNext = useCallback(() => navigate(c => c + 1), [navigate]);
  const goPrev = useCallback(() => navigate(c => c - 1), [navigate]);

  useEffect(() => () => clearTimeout(transitionTimer.current), []);

  const handleTransitionEnd = useCallback(() => {
    clearTimeout(transitionTimer.current);
    setCurrent(c => {
      if (c === SLIDES.length - 1) { setAnimated(false); return 1; }
      if (c === 0) { setAnimated(false); return reviews.length; }
      return c;
    });
    setTransitioning(false);
  }, []);

  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  const handleTouchStart = (e) => { setTouchStart(e.targetTouches[0].clientX); setTouchEnd(null); };
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const dist = touchStart - touchEnd;
    if (dist > 50) goNext();
    else if (dist < -50) goPrev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const dotIndex = (current - 1 + reviews.length) % reviews.length;

  return (
    <section className="py-20 md:py-28 bg-[#064e3b]">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <h2 className="text-[#4ade80] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-white/30">Real Customers</h2>
            <p className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-white italic uppercase leading-[0.9] tracking-tighter">
              WHAT THEY<br />SAY.
            </p>
          </div>
          <div className="bg-white/10 border-2 border-white/20 px-6 py-4 flex items-center gap-4 shrink-0">
            <div className="text-center">
              <p className="font-[1000] text-3xl text-white italic leading-none">5.0</p>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" className="text-yellow-400" />)}
              </div>
            </div>
            <div className="border-l border-white/20 pl-4 flex items-center gap-2">
              <PlatformLogo platform="google" size={22} />
              <div>
                <p className="text-xs font-black text-white uppercase italic tracking-wide">Google Reviews</p>
                <p className="text-[10px] font-bold text-white/50 uppercase tracking-wider mt-0.5">Verified 5-Star Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Single-card carousel — all screen sizes */}
        <div
          className="relative overflow-hidden touch-pan-y cursor-grab active:cursor-grabbing select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ touchAction: 'pan-y' }}
        >
          <div
            className="flex items-stretch"
            style={{
              transform: `translateX(-${current * 100}%)`,
              transition: animated ? 'transform 600ms cubic-bezier(0.23,1,0.32,1)' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {SLIDES.map(({ text, name, initials, town, color, accent, avatarBg, platform }, idx) => (
              <div key={idx} className="w-full flex-shrink-0 flex">
                <div className={`p-8 md:p-12 border-4 border-slate-900 shadow-[8px_8px_0px_#022c22] flex flex-col relative overflow-hidden w-full ${color}`}>
                  <Quote className={`absolute -top-3 -left-3 w-16 opacity-10 ${accent}`} aria-hidden="true" />

                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" className={accent} />)}
                    </div>
                    {platform && <PlatformLogo platform={platform} size={20} />}
                  </div>

                  <p className="text-lg md:text-2xl font-[1000] uppercase italic leading-tight tracking-tight mb-8 flex-grow relative z-10">
                    "{text}"
                  </p>

                  <div className="flex items-center gap-3 pt-5 border-t border-current border-opacity-10">
                    <div className={`w-11 h-11 rounded-full flex items-center justify-center font-[1000] border-2 border-slate-900 text-sm italic shrink-0 ${avatarBg}`}>
                      {initials}
                    </div>
                    <div>
                      <p className="font-[1000] uppercase text-sm leading-none">{name}</p>
                      <p className="font-bold opacity-60 text-[10px] uppercase italic mt-0.5">{town} · Google Review</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex gap-3">
            <button
              type="button"
              onClick={goPrev}
              disabled={transitioning}
              aria-label="Previous review"
              className="w-11 h-11 border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:border-white transition-colors active:scale-90 disabled:opacity-50"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={transitioning}
              aria-label="Next review"
              className="w-11 h-11 border-2 border-white/30 rounded-full flex items-center justify-center text-white hover:border-white transition-colors active:scale-90 disabled:opacity-50"
            >
              <ChevronRight size={20} />
            </button>
          </div>
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Review ${idx + 1}`}
                onClick={() => { if (!transitioning) { setAnimated(true); setCurrent(idx + 1); } }}
                className={`h-2 rounded-full border border-white/40 transition-all duration-300 ${idx === dotIndex ? 'w-8 bg-[#4ade80]' : 'w-2 bg-white/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingReviews;
