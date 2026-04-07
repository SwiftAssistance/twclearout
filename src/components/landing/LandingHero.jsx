import React, { useState } from 'react';
import { Phone, Send, Lock, Clock, CheckCircle, BadgeCheck, ShieldCheck } from 'lucide-react';

const clearanceTypes = [
  'House Clearance',
  'Garden Waste',
  'Rubbish Removal',
  'Office Clearance',
  'Furniture / Bulky Items',
  'Other',
];

const inputClass = "w-full px-4 py-3 bg-white border-2 border-slate-200 text-slate-900 placeholder-slate-400 text-sm font-bold focus:outline-none focus:border-[#16a34a] focus:ring-2 focus:ring-[#16a34a]/20 transition-all rounded-none";
const labelClass = "block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1 italic";

const HeroQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    postcode: '',
    clearanceType: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '2302ca48-2fbd-4e27-a517-e214142cf489',
          subject: `Hero Quick Quote — ${formData.clearanceType}`,
          from_name: formData.name,
          'Form Source': 'Google Ads Landing Page — Hero Form (/get-quote)',
          Name: formData.name,
          Phone: formData.phone,
          Postcode: formData.postcode,
          'Clearance Type': formData.clearanceType,
        }),
      });
      if (response.ok) {
        setStatus('success');
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'quote_form_submission', form_location: 'hero' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white border-4 border-[#16a34a] p-8 text-center shadow-[8px_8px_0px_#064e3b]">
        <CheckCircle size={48} className="text-[#16a34a] mx-auto mb-4" />
        <p className="font-black text-xl uppercase italic text-slate-900 mb-2">Quote Request Received!</p>
        <p className="text-sm font-bold text-slate-600 mb-4">We'll call you back within 60 minutes during business hours.</p>
        <a
          href="tel:07769844298"
          className="inline-flex items-center gap-2 bg-[#16a34a] text-white px-6 py-3 font-black uppercase italic text-sm tracking-wide"
        >
          <Phone size={14} fill="white" />
          Need It Faster? Call Us
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white border-4 border-slate-900 shadow-[8px_8px_0px_#16a34a]">
      <div className="bg-slate-900 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-[#4ade80] rounded-full animate-pulse" />
          <p className="text-sm font-black uppercase italic tracking-wider text-white">Free Quote</p>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">30 seconds</p>
      </div>

      <div className="p-5">
        <form onSubmit={handleSubmit} className="space-y-2.5">
          <div>
            <label htmlFor="hero-name" className={labelClass}>Name *</label>
            <input id="hero-name" name="name" type="text" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your name" />
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            <div>
              <label htmlFor="hero-phone" className={labelClass}>Phone *</label>
              <input id="hero-phone" name="phone" type="tel" required value={formData.phone} onChange={handleChange} className={inputClass} placeholder="07XXX XXXXXX" />
            </div>
            <div>
              <label htmlFor="hero-postcode" className={labelClass}>Postcode *</label>
              <input id="hero-postcode" name="postcode" type="text" required value={formData.postcode} onChange={handleChange} className={inputClass} placeholder="e.g. SL4 1AA" />
            </div>
          </div>
          <div>
            <label htmlFor="hero-type" className={labelClass}>What needs clearing? *</label>
            <select id="hero-type" name="clearanceType" required value={formData.clearanceType} onChange={handleChange} className={`${inputClass} appearance-none`}>
              <option value="" disabled>Select type...</option>
              {clearanceTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-black py-4 font-black uppercase italic tracking-wide text-base flex items-center justify-center gap-2 transition-colors shadow-[4px_4px_0px_#064e3b] active:shadow-none active:translate-y-0.5"
          >
            {status === 'sending' ? (
              <><div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />Sending...</>
            ) : (
              <><Send size={16} />Get My Free Quote</>
            )}
          </button>
          {status === 'error' && (
            <p className="text-red-600 text-sm text-center font-bold italic">Something went wrong. Please call us instead.</p>
          )}
        </form>
        <div className="flex items-center justify-center gap-4 mt-3 pt-2.5 border-t border-slate-100">
          <p className="flex items-center gap-1 text-[10px] text-slate-400 font-bold italic">
            <Lock size={10} /> No spam
          </p>
          <p className="flex items-center gap-1 text-[10px] text-slate-400 font-bold italic">
            <Clock size={10} /> Reply in 60 mins
          </p>
        </div>
      </div>
    </div>
  );
};

const LandingHero = () => (
    <header className="relative pt-14 sm:pt-16 overflow-hidden bg-[#064e3b]">
      {/* Background image - visible and real */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.webp"
          alt="Professional waste removal service in Berkshire"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          fetchPriority="high"
          width="1600"
          height="1487"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/80 to-[#064e3b]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-transparent to-[#064e3b]/30" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 relative z-10 py-10 md:py-16 lg:py-20">
        <div className="grid lg:grid-cols-[1fr,380px] xl:grid-cols-[1fr,420px] gap-8 lg:gap-12 items-start max-w-6xl mx-auto">

          {/* Left: The pitch */}
          <div>
            <div className="mb-5">
              <span className="bg-[#4ade80] text-slate-900 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider italic">
                Same Day Collection Available
              </span>
            </div>

            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-black text-white leading-[0.95] mb-5 tracking-tighter uppercase italic">
              Waste Removal.<br />
              <span className="text-[#4ade80]">Done Today.</span>
            </h1>

            <p className="text-base md:text-lg text-white/80 mb-6 max-w-md font-bold leading-snug">
              Professional waste removal from <span className="text-white font-black">£50</span>. Fixed price, no hidden fees. We do the heavy lifting — you don't touch a thing.
            </p>

            {/* Trust - NOT in a neat grid. Stacked, rough, real */}
            <div className="space-y-2 mb-8">
              <div className="flex items-center gap-2">
                <BadgeCheck size={15} className="text-[#4ade80] shrink-0" />
                <span className="text-sm font-bold text-white/90">EA Licensed Waste Carrier — <span className="text-white/50">CBDU630127</span></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-[#4ade80] shrink-0" />
                <span className="text-sm font-bold text-white/90">£5M Public Liability Insurance</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-[#4ade80] shrink-0" />
                <span className="text-sm font-bold text-white/90">Same day collection across Berkshire & Surrey</span>
              </div>
            </div>

            {/* Phone CTA - big, obvious */}
            <a
              href="tel:07769844298"
              className="hidden lg:inline-flex items-center gap-3 text-white hover:text-[#4ade80] transition-colors group"
            >
              <span className="bg-[#16a34a] p-3 group-hover:bg-[#15803d] transition-colors">
                <Phone size={20} fill="white" />
              </span>
              <span>
                <span className="block text-[10px] font-bold uppercase tracking-widest text-white/40">Or just call us</span>
                <span className="block font-black text-2xl italic tracking-tight">07769 844298</span>
              </span>
            </a>
          </div>

          {/* Right: The form */}
          <div>
            <HeroQuoteForm />
            {/* Mobile phone CTA */}
            <a
              href="tel:07769844298"
              className="lg:hidden mt-3 bg-white/10 text-white px-5 py-3 font-black uppercase italic tracking-wide text-sm flex items-center justify-center gap-2 border-2 border-white/20"
            >
              <Phone size={14} fill="white" />
              Or Call: 07769 844298
            </a>
          </div>
        </div>
      </div>
    </header>
);

export default LandingHero;
