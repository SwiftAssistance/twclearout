import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, CheckCircle } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.557 4.126 1.527 5.856L.057 23.428a.75.75 0 0 0 .916.916l5.572-1.47A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.698-.5-5.25-1.373l-.372-.213-3.875 1.023 1.023-3.762-.228-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
  </svg>
);

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof gtag === 'function') {
      gtag('event', 'conversion', {
        send_to: 'AW-18054894614/YJ5BCIWWxZscEJaon6FD',
        value: 1.0,
        currency: 'GBP',
      });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Quote Received | Total Waste Clearout</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen bg-[#064e3b] flex flex-col items-center justify-center px-5 py-16 font-sans">
        <div className="w-full max-w-lg text-center">

          <CheckCircle size={64} className="text-[#4ade80] mx-auto mb-6" />

          <p className="text-[#4ade80] text-xs font-black uppercase tracking-[0.4em] italic mb-3">
            Quote Request Received
          </p>

          <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic leading-[0.95] tracking-tighter mb-4">
            We'll be in<br />touch shortly.
          </h1>

          <p className="text-white/70 font-bold text-base mb-10 leading-snug">
            We aim to call back within <span className="text-white">60 minutes</span> during business hours (Mon–Sat, 7am–7pm). If you need us sooner, call or WhatsApp now.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
            <a
              href="tel:07769844298"
              onClick={() => typeof gtag === 'function' && gtag('event', 'conversion', { send_to: 'AW-18054894614' })}
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 font-black uppercase italic tracking-wide text-sm shadow-[4px_4px_0px_#4ade80]"
            >
              <Phone size={16} fill="#16a34a" className="text-[#16a34a]" />
              Call 07769 844298
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=447769844298"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => typeof gtag === 'function' && gtag('event', 'conversion', { send_to: 'AW-18054894614/2mZ3CI_exaIcEJaon6FD', value: 1.0, currency: 'GBP' })}
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 font-black uppercase italic tracking-wide text-sm shadow-[4px_4px_0px_#4ade80]"
            >
              <WhatsAppIcon />
              WhatsApp Us
            </a>
          </div>

          <a
            href="/get-quote/"
            className="text-white/40 hover:text-white/70 text-xs font-bold uppercase tracking-widest italic transition-colors"
          >
            ← Back to quote form
          </a>
        </div>
      </div>
    </>
  );
};

export default ThankYou;
