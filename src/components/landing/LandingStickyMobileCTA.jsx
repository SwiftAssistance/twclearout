import React, { useState, useEffect, useRef } from 'react';
import { Phone, FileText } from 'lucide-react';

const LandingStickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      // Show after scrolling past hero (roughly 500px)
      const pastHero = currentY > 500;
      // On mobile, hide when scrolling up fast
      const scrollingDown = currentY > lastScrollY.current;
      setVisible(pastHero && (scrollingDown || currentY < 10));
      lastScrollY.current = currentY;
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
          <div className="flex gap-2 flex-1 md:flex-none md:ml-auto">
            <a
              href="tel:07769844298"
              className="flex-1 md:flex-none bg-[#16a34a] text-white py-3 md:py-2.5 px-4 md:px-6 font-black text-xs uppercase italic tracking-wider flex items-center justify-center gap-2 active:opacity-80"
            >
              <Phone size={14} fill="white" />
              <span className="md:hidden">Call Now</span>
              <span className="hidden md:inline">07769 844298</span>
            </a>
            <a
              href="#quote-form"
              className="flex-1 md:flex-none bg-orange-500 text-black py-3 md:py-2.5 px-4 md:px-6 font-black text-xs uppercase italic tracking-wider flex items-center justify-center gap-2 active:opacity-80"
            >
              <FileText size={14} />
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingStickyMobileCTA;
