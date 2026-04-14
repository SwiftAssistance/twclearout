import React, { useState, useEffect } from 'react';
import { Phone, FileText } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.126 1.527 5.856L.057 23.428a.75.75 0 0 0 .916.916l5.572-1.47A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.5-5.25-1.373l-.372-.213-3.875 1.023 1.023-3.762-.228-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const LandingStickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-t-2 border-[#16a34a] shadow-[0_-4px_20px_rgba(0,0,0,0.3)] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
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
              <span className="md:hidden">Call</span>
              <span className="hidden md:inline">07769 844298</span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=447769844298"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-none bg-[#25D366] text-white py-3 md:py-2.5 px-4 md:px-6 font-black text-xs uppercase italic tracking-wider flex items-center justify-center gap-2 active:opacity-80"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
            <a
              href="#quote-form"
              className="flex-1 md:flex-none bg-orange-500 text-black py-3 md:py-2.5 px-4 md:px-6 font-black text-xs uppercase italic tracking-wider flex items-center justify-center gap-2 active:opacity-80"
            >
              <FileText size={14} />
              Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingStickyMobileCTA;
