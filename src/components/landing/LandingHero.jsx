import React, { useState, useEffect } from 'react';
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

// FIX 7B: maps service URL param to the dropdown option string
const serviceToType = {
  'house-clearance': 'House Clearance',
  'garden-waste': 'Garden Waste',
  'office-clearance': 'Office Clearance',
  'rubbish-removal': 'Rubbish Removal',
  'bulky-items': 'Furniture / Bulky Items',
  'same-day': '',
  'estate-clearance': 'House Clearance',
};

const HeroQuoteForm = () => {
  // FIX 7B: lazy initialiser reads ?service= param to pre-select clearance type on load
  const [formData, setFormData] = useState(() => {
    const params = new URLSearchParams(window.location.search); // read URL params once on init
    const service = params.get('service'); // get service param if present
    return {
      name: '',
      phone: '',
      postcode: '',
      clearanceType: serviceToType[service] || '', // pre-select matching type or leave blank
    };
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
    // FIX 4: id="hero-form" added so anchor links (#hero-form) can scroll here
    <div id="hero-form" className="bg-white border-4 border-slate-900 shadow-[8px_8px_0px_#16a34a]">
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
          {/* FIX 12: licence/insurance badge directly below submit to build trust before they leave */}
          <p className="text-center text-[10px] text-slate-400 font-bold italic">
            EA Licensed · CBDU630127 · £5M Insured
          </p>
          {/* FIX 3: error state replaced with tappable phone link so mobile users can convert */}
          {status === 'error' && (
            <div className="bg-red-50 border-2 border-red-500 p-3 text-center rounded">
              <p className="text-red-700 text-sm font-bold">Form failed — please call us directly.</p>
              <a
                href="tel:07769844298"
                className="inline-flex items-center gap-1.5 mt-2 text-red-700 font-black text-base underline"
              >
                <Phone size={14} /> Call 07769 844298 {/* FIX 3: Phone icon already imported, no new import */}
              </a>
            </div>
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

const LandingHero = () => {
  // FIX 1: real time-based urgency text (replaces fake random slotsLeft)
  const [urgencyText, setUrgencyText] = useState('');
  const [todayStr, setTodayStr] = useState('');
  // FIX 7A: dynamic headline driven by URL params, defaults to original copy
  const [heroHeadline, setHeroHeadline] = useState({ line1: "We'll clear it.", line2: 'Today.' });

  useEffect(() => {
    const d = new Date();
    // Set the human-readable date string for display alongside the urgency badge
    setTodayStr(d.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' }));

    // FIX 1: derive urgency message from actual day and hour
    const day = d.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = d.getHours(); // 0–23

    if (day === 0) {
      setUrgencyText(''); // Sunday: show nothing, we're closed
    } else if (day === 6 && hour >= 17) {
      setUrgencyText(''); // Saturday after 5pm: show nothing
    } else if (hour < 7) {
      setUrgencyText('Bookings open from 7am'); // before working hours start
    } else if (hour >= 17) {
      setUrgencyText('Same-day slots may still be available — call to confirm'); // after hours but may still help
    } else {
      setUrgencyText('Same-day collection available today'); // active working hours, strongest message
    }
  }, []);

  useEffect(() => {
    // FIX 7A: read ?service= and ?loc= params to customise headline for ad scent
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service'); // e.g. "house-clearance"
    const loc = params.get('loc'); // e.g. "Windsor"

    const serviceMap = {
      'house-clearance': 'House clearance.',
      'garden-waste': 'Garden waste.',
      'same-day': 'Same day clearance.',
      'office-clearance': 'Office clearance.',
      'rubbish-removal': 'Rubbish removed.',
      'bulky-items': 'Bulky items gone.',
      'estate-clearance': 'Estate clearance.',
    };

    const line1 = serviceMap[service] || "We'll clear it."; // service-specific or default
    const line2 = loc ? loc + ', today.' : 'Today.'; // location-specific or plain "Today."
    setHeroHeadline({ line1, line2 }); // update headline on mount
  }, []);

  return (
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
            {/* FIX 1: Urgency bar — only renders when urgencyText is non-empty */}
            <div className="mb-6 flex flex-wrap items-center gap-2">
              {urgencyText && ( // FIX 1: conditional render — no badge on Sunday or late Saturday
                <span className="bg-[#16a34a] text-white px-3 py-1.5 text-[10px] font-black uppercase tracking-wider italic inline-flex items-center gap-1.5">
                  {/* FIX 1: green background (was orange) reads as informational not alarming */}
                  <span className="w-2 h-2 bg-white rounded-full animate-pulse" /> {/* FIX 1: white pulse dot on green */}
                  {urgencyText} {/* FIX 1: real time-based string, no fake slot count */}
                </span>
              )}
              {todayStr && (
                <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">{todayStr}</span>
              )}
            </div>

            <h1 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] font-black text-white leading-[0.95] mb-5 tracking-tighter uppercase italic">
              {heroHeadline.line1}{/* FIX 7A: dynamic service-specific or default headline */}<br />
              {/* FIX 7A: capitalize handles "windsor, today." → "Windsor, today." from loc param */}
              <span className="text-[#4ade80] capitalize">{heroHeadline.line2}</span>
            </h1>

            {/* FIX 8: updated subtext with two price anchors (£50 single, £220 full van) */}
            <p className="text-base md:text-lg text-white/80 mb-6 max-w-md font-bold leading-snug">
              Single items from <span className="text-white font-black">£50</span>. Full van loads
              from <span className="text-white font-black">£220</span>. Fixed price — no hidden fees,
              no permits, we do all the lifting.
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
            {/* FIX 11: two-button grid replaces single phone anchor — phone + WhatsApp on mobile */}
            <div className="lg:hidden mt-3 grid grid-cols-2 gap-2">
              {/* FIX 11: phone call button — left of pair */}
              <a
                href="tel:07769844298"
                className="bg-white/10 text-white px-4 py-3 font-black uppercase italic tracking-wide text-xs flex items-center justify-center gap-2 border-2 border-white/20"
              >
                <Phone size={13} fill="white" /> Call Us {/* FIX 11: Phone already imported, no new import */}
              </a>
              {/* FIX 11: WhatsApp as second mobile conversion path with pre-filled message */}
              <a
                href="https://wa.me/447769844298?text=Hi%2C%20I%27d%20like%20a%20waste%20clearance%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25d366] text-white px-4 py-3 font-black uppercase italic tracking-wide text-xs flex items-center justify-center gap-2"
              >
                {/* FIX 11: inline SVG — no new lucide import needed for WhatsApp logo */}
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-white" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingHero;
