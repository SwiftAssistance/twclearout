import React, { useState, useEffect, useRef } from 'react';
import { Phone, FileText } from 'lucide-react';

const LandingStickyMobileCTA = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      // Show on scroll down, hide on scroll up
      setVisible(currentY > lastScrollY.current || currentY < 10);
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex gap-2 px-3 py-2.5 max-w-lg mx-auto">
        <a
          href="tel:07XXX XXXXXX"
          className="flex-1 bg-[#16a34a] text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
        >
          <Phone size={16} fill="white" />
          Call Now
        </a>
        <a
          href="#quote-form"
          className="flex-1 bg-slate-900 text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2"
        >
          <FileText size={16} />
          Get Quote
        </a>
      </div>
    </div>
  );
};

export default LandingStickyMobileCTA;
