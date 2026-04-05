import React from 'react';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/logo.webp"
            alt="Total Waste Clearout logo"
            className="h-8 w-auto"
            width="32"
            height="32"
          />
          <span className="font-bold text-brand-charcoal text-sm sm:text-base leading-tight">
            Total Waste<br className="sm:hidden" /> Clearout
          </span>
        </div>
        <a
          href="tel:07XXXXXXXXX"
          className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-dark text-white font-bold text-sm px-4 py-2 rounded-lg transition-colors"
        >
          <Phone size={16} />
          <span className="hidden sm:inline">Call Now</span>
          <span className="sm:hidden">Call</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
