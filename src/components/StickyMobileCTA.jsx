import React, { useState, useEffect, useRef } from 'react';
import { Phone, FileText } from 'lucide-react';

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 100) {
        setVisible(true); // scrolling down — show
      } else {
        setVisible(false); // scrolling up — hide
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.1)] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ maxHeight: '60px' }}
    >
      <div className="flex h-[60px]">
        <a
          href="tel:07XXXXXXXXX"
          className="flex-1 flex items-center justify-center gap-2 bg-brand-green text-white font-bold text-sm"
        >
          <Phone size={16} />
          Call Now
        </a>
        <a
          href="#quote-form"
          className="flex-1 flex items-center justify-center gap-2 bg-brand-navy text-white font-bold text-sm"
        >
          <FileText size={16} />
          Get Quote
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
