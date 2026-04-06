import React, { useState } from 'react';
import { Phone, ShieldCheck, Clock, BadgeCheck, Send, Lock, CheckCircle, Leaf } from 'lucide-react';

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
      {/* Form header */}
      <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 bg-[#4ade80] rounded-full animate-pulse" />
          <p className="text-sm font-black uppercase italic tracking-wider text-white">Get a Free Quote</p>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-white/50">Takes 30 secs</p>
      </div>

      <div className="p-6">
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
            <label htmlFor="hero-type" className={labelClass}>What Needs Clearing? *</label>
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
        <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-slate-100">
          <p className="flex items-center gap-1 text-[10px] text-slate-400 font-bold italic">
            <Lock size={10} /> No spam ever
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
  <header className="relative flex items-center pt-14 sm:pt-16 overflow-hidden bg-[#064e3b]">
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
      <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/90 to-[#064e3b]/70" />
    </div>

    <div className="container mx-auto px-6 relative z-10 text-left py-12 md:py-20">
      <div className="grid lg:grid-cols-[1fr,420px] gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
        {/* Left: Copy */}
        <div>
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <span className="bg-orange-500 text-black px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.1em] italic shadow-lg">
              Limited Slots Today
            </span>
            <span className="bg-[#4ade80] text-slate-900 px-4 py-2 text-[10px] md:text-xs font-black uppercase tracking-[0.1em] italic shadow-lg">
              Same Day Collection
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] mb-6 tracking-tighter uppercase italic">
            WASTE REMOVAL<br />
            <span className="text-[#4ade80]">FROM £50</span><br />
            <span className="text-white/30 text-3xl md:text-5xl lg:text-6xl">BERKSHIRE &amp; SURREY</span>
          </h1>

          <p className="text-base md:text-lg text-white/80 mb-8 max-w-lg font-bold leading-snug">
            Licensed waste carrier. Fixed prices — <span className="text-[#4ade80] font-black">no hidden fees.</span> We do all the heavy lifting. You don't touch a thing.
          </p>

          {/* Trust badges - desktop only, mobile sees them below form */}
          <div className="hidden lg:grid grid-cols-2 gap-3 mb-8">
            {[
              { icon: BadgeCheck, text: 'EA Licensed (CBDU630127)' },
              { icon: ShieldCheck, text: '£5M Public Liability' },
              { icon: Clock, text: 'Same Day Available' },
              { icon: Leaf, text: '94% Waste Recycled' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-2.5">
                <Icon size={14} className="text-[#4ade80] shrink-0" />
                <span className="text-xs font-bold text-white/80 uppercase tracking-wide">{text}</span>
              </div>
            ))}
          </div>

          <a
            href="tel:07769844298"
            className="hidden lg:inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-8 py-4 font-black uppercase italic tracking-wide text-sm transition-all border-2 border-white/30 hover:border-white/50"
          >
            <Phone size={16} fill="white" />
            Prefer to Call? 07769 844298
          </a>
        </div>

        {/* Right: Quote Form */}
        <div>
          <HeroQuoteForm />
          {/* Phone CTA - mobile only */}
          <a
            href="tel:07769844298"
            className="lg:hidden mt-4 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 font-black uppercase italic tracking-wide text-sm flex items-center justify-center gap-2 border-2 border-white/30"
          >
            <Phone size={14} fill="white" />
            Or Call: 07769 844298
          </a>
          {/* Trust badges - mobile only */}
          <div className="grid grid-cols-2 gap-2 mt-4 lg:hidden">
            {[
              { icon: BadgeCheck, text: 'EA Licensed' },
              { icon: ShieldCheck, text: '£5M Insured' },
              { icon: Clock, text: 'Same Day Service' },
              { icon: Leaf, text: '94% Recycled' },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 bg-white/5 border border-white/10 px-2.5 py-2">
                <Icon size={12} className="text-[#4ade80] shrink-0" />
                <span className="text-[10px] font-bold text-white/80 uppercase tracking-wide">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default LandingHero;
