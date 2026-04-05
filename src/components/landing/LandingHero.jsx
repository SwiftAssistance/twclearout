import React, { useState } from 'react';
import { Phone, ChevronDown, ShieldCheck, Star, Clock, BadgeCheck, Send, Lock, CheckCircle } from 'lucide-react';

const clearanceTypes = [
  'House Clearance',
  'Garden Waste',
  'Rubbish Removal',
  'Office Clearance',
  'Furniture / Bulky Items',
  'Other',
];

const inputClass = "w-full px-3 py-2.5 bg-white/10 border-2 border-white/20 text-white placeholder-white/40 text-sm font-bold focus:outline-none focus:border-[#4ade80] focus:bg-white/15 transition-colors";
const labelClass = "block text-[10px] font-black uppercase tracking-widest text-white/60 mb-1 italic";

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
      <div className="bg-white/5 border-4 border-[#4ade80] p-6 text-center">
        <CheckCircle size={40} className="text-[#4ade80] mx-auto mb-3" />
        <p className="font-black text-lg uppercase italic text-white mb-1">We'll call you within 60 mins!</p>
        <p className="text-sm font-bold text-white/60">During business hours</p>
      </div>
    );
  }

  return (
    <div className="bg-white/5 border-4 border-white/20 p-5 md:p-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2.5 h-2.5 bg-[#4ade80] rounded-full animate-pulse" />
        <p className="text-xs font-black uppercase italic tracking-wider text-[#4ade80]">Get Your Free Quote in 60 Seconds</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label htmlFor="hero-name" className={labelClass}>Your Name *</label>
          <input id="hero-name" name="name" type="text" required value={formData.name} onChange={handleChange} className={inputClass} placeholder="First and last name" />
        </div>
        <div className="grid grid-cols-2 gap-3">
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
          <label htmlFor="hero-type" className={labelClass}>What Do You Need Cleared? *</label>
          <select id="hero-type" name="clearanceType" required value={formData.clearanceType} onChange={handleChange} className={`${inputClass} appearance-none`}>
            <option value="" disabled className="text-slate-900 bg-white">Select type...</option>
            {clearanceTypes.map((t) => (
              <option key={t} value={t} className="text-slate-900 bg-white">{t}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-orange-500 hover:bg-orange-400 disabled:opacity-60 text-black py-3.5 font-black uppercase italic tracking-wide text-sm flex items-center justify-center gap-2 transition-colors shadow-[4px_4px_0px_#022c22] active:shadow-none"
        >
          {status === 'sending' ? (
            <><div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />Sending…</>
          ) : (
            <><Send size={16} />Get My Free Quote Now</>
          )}
        </button>
        {status === 'error' && (
          <p className="text-red-300 text-sm text-center font-bold italic">Something went wrong. Please call us instead.</p>
        )}
        <p className="flex items-center justify-center gap-1.5 text-[10px] text-white/30 font-bold italic">
          <Lock size={10} /> No spam. We reply within 60 minutes.
        </p>
      </form>
    </div>
  );
};

const LandingHero = () => (
  <header className="relative min-h-[85vh] md:min-h-screen flex items-center pt-14 sm:pt-16 overflow-hidden bg-[#064e3b]">
    <div className="absolute inset-0 z-0">
      <img
        src="/hero.webp"
        alt="Professional waste removal service loading rubbish in Berkshire"
        className="w-full h-full object-cover opacity-15 grayscale"
        loading="eager"
        fetchPriority="high"
        width="1600"
        height="1487"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-transparent to-transparent" />
    </div>

    <div className="container mx-auto px-6 relative z-10 text-left py-12 md:py-16">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center max-w-6xl">
        {/* Left: Copy */}
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="bg-orange-500 text-black px-4 md:px-5 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.15em] italic border-2 border-white shadow-lg animate-pulse">
              Limited Slots Today
            </span>
            <span className="bg-[#4ade80] text-slate-900 px-4 md:px-5 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.15em] italic border-2 border-white shadow-lg">
              Same Day Collection
            </span>
          </div>

          <h1 className="text-4xl md:text-[5.5rem] lg:text-[7rem] font-black text-white leading-[0.85] mb-6 tracking-tighter uppercase italic">
            FAST WASTE<br />
            <span className="text-transparent" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.4)' }}>REMOVAL</span><br />
            <span className="text-[#4ade80]">FROM £50.</span>
          </h1>

          <p className="text-base md:text-xl text-white/70 mb-8 max-w-xl font-bold leading-tight italic">
            Berkshire &amp; Surrey's trusted waste clearance. <span className="text-white border-b-4 border-orange-500">Fixed prices. No hidden fees.</span> We do all the heavy lifting.
          </p>

          <a
            href="tel:07769844298"
            className="bg-orange-500 hover:bg-orange-400 text-black px-8 md:px-10 py-4 md:py-5 font-black text-base md:text-lg uppercase italic tracking-wide inline-flex items-center gap-3 transition-all hover:-translate-y-1 shadow-[6px_6px_0px_#022c22] active:shadow-none mb-8"
          >
            <Phone size={20} fill="black" />
            Call Now: 07769 844298
          </a>

          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: BadgeCheck, text: 'EA Licensed Carrier' },
              { icon: ShieldCheck, text: '£5M Insured' },
              { icon: Star, text: '5★ Rated on Google' },
              { icon: Clock, text: 'Same Day Service' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white/5 border-2 border-white/10 px-3 py-2">
                <Icon size={14} className="text-[#4ade80] shrink-0" />
                <span className="text-[10px] sm:text-xs font-bold text-white/90 uppercase tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Quick Quote Form */}
        <div className="lg:mt-0 mt-4">
          <HeroQuoteForm />
        </div>
      </div>
    </div>
  </header>
);

export default LandingHero;
