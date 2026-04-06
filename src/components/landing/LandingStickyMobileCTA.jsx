import React, { useState, useEffect, useRef } from 'react';
import { Phone, FileText } from 'lucide-react';

const LandingStickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      // FIX 6: still track scroll position for potential future use
      lastScrollY.current = currentY; // still track for potential future use
      // FIX 6: show whenever past hero regardless of scroll direction (was hidden on scroll-up)
      setVisible(currentY > 500); // show whenever past hero, regardless of direction
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-t-2 border-[#16a34a] shadow-[0_-4px_20px_rgba(0,0,0,0.3)] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-6">
        <div className="flex items-center gap-2 py-2.5 max-w-6xl mx-auto">
          {/* Desktop: show text + buttons */}
          <p className="hidden md:block text-white font-bold text-sm italic flex-shrink-0 mr-2">
            Get your waste cleared today →
          </p>
          {/* FIX 6: phone is primary (flex-[2], full green), quote is secondary (outlined, smaller) */}
          <div className="flex gap-2 flex-1 md:flex-none md:ml-auto items-center">
            {/* FIX 6: phone button takes 2x width on mobile, stronger visual hierarchy */}
            <a
              href="tel:07769844298"
              className="flex-[2] md:flex-none bg-[#16a34a] text-white py-3 md:py-2.5 px-4 md:px-8 font-black text-sm uppercase italic tracking-wider flex items-center justify-center gap-2 active:opacity-80"
            >
              <Phone size={15} fill="white" /> {/* FIX 6: size 15 as specified */}
              07769 844298
            </a>
            {/* FIX 5 + FIX 6: href changed from #top to #hero-form; styled as secondary outlined button */}
            <a
              href="#hero-form"
              className="flex-1 md:flex-none border-2 border-white/30 text-white/70 py-3 px-3 font-black text-xs uppercase italic tracking-wider flex items-center justify-center gap-1.5 active:opacity-80"
            >
              <FileText size={12} /> {/* FIX 6: size 12 as specified */}
              Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingStickyMobileCTA;
