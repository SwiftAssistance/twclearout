import React, { useState, useEffect, useRef } from 'react';
import { Phone, FileText } from 'lucide-react';

const LandingStickyMobileCTA = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setVisible(currentY > lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-slate-900 border-t-4 border-[#16a34a] shadow-[0_-4px_20px_rgba(0,0,0,0.3)] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex gap-2 px-3 py-3 max-w-lg mx-auto">
        <a
          href="tel:07769844298"
          className="flex-1 bg-[#16a34a] text-white py-3.5 font-black text-xs uppercase italic tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_#064e3b] active:shadow-none"
        >
          <Phone size={15} fill="white" />
          Call Now
        </a>
        <a
          href="#quote-form"
          className="flex-1 bg-white text-slate-900 py-3.5 font-black text-xs uppercase italic tracking-wider flex items-center justify-center gap-2 shadow-[3px_3px_0px_#16a34a] active:shadow-none"
        >
          <FileText size={15} />
          Get Quote
        </a>
      </div>
    </div>
  );
};

export default LandingStickyMobileCTA;
