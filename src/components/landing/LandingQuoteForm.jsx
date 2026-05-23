import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Lock, Phone } from 'lucide-react';

const clearanceTypes = [
  'House Clearance',
  'Garden Waste',
  'Rubbish Removal',
  'Office Clearance',
  'Furniture / Bulky Items',
  'Other',
];

const dateChips = ['Today', 'Tomorrow', 'This Week', 'Next Week'];

const inputClass = "w-full px-4 py-3 bg-white/10 border-2 border-white/20 text-white placeholder-white/40 text-sm font-bold focus:outline-none focus:border-[#4ade80] focus:bg-white/15 transition-colors";
const labelClass = "block text-[10px] font-black uppercase tracking-widest text-white/60 mb-1.5 italic";

const LandingQuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    postcode: '',
    clearanceType: '',
    description: '',
    preferredDate: '',
  });
  const [status, setStatus] = useState('idle');
  const [gclid, setGclid] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('gclid');
    if (stored) setGclid(stored);
  }, []);

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
          subject: `Landing Page Quote — ${formData.clearanceType}`,
          from_name: formData.name,
          'Form Source': 'Google Ads Landing Page (/get-quote)',
          Name: formData.name,
          Phone: formData.phone,
          Email: formData.email || 'Not provided',
          Postcode: formData.postcode,
          'Clearance Type': formData.clearanceType,
          Description: formData.description || 'Not provided',
          'Preferred Date': formData.preferredDate || 'Not specified',
          gclid: gclid || undefined,
        }),
      });

      if (response.ok) {
        setStatus('success');
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'quote_form_submission' });
        if (typeof gtag === 'function') {
          gtag('event', 'generate_lead', { currency: 'GBP', value: 1.0 });
          gtag('event', 'conversion', {
            send_to: 'AW-18054894614/YJ5BCIWWxZscEJaon6FD',
            value: 1.0,
            currency: 'GBP',
          });
        }
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="quote-form" className="py-20 md:py-28 bg-[#022c22]">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <CheckCircle size={56} className="text-[#4ade80] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-[1000] uppercase italic text-white tracking-tight mb-3">
              Thanks, {formData.name}!
            </h2>
            <p className="font-bold text-white/70">We'll be in touch within the hour during business hours.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote-form" className="py-20 md:py-28 bg-[#022c22]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl">

          {/* Left: Copy */}
          <div>
            <h2 className="text-[#4ade80] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-white/30">Free, No Obligation</h2>
            <p className="text-4xl md:text-6xl font-[1000] text-white italic uppercase leading-[0.9] tracking-tighter mb-8">
              GET YOUR<br />FREE QUOTE.
            </p>
            <div className="space-y-4 mb-8">
              {[
                'Fixed price — no hidden extras',
                'Response within 1 hour',
                'Same day collection available',
                'You do no lifting whatsoever',
                'EA licensed — waste transfer note included',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#4ade80] shrink-0" />
                  <p className="font-bold text-sm text-white/80 uppercase italic tracking-wide">{item}</p>
                </div>
              ))}
            </div>

            {/* Inline testimonial for trust near form */}
            <div className="bg-white/5 border-2 border-white/10 p-5 mb-8">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-[#4ade80] fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                ))}
              </div>
              <p className="text-sm font-bold text-white/80 italic leading-snug mb-2">
                "Used Total Waste Clearout twice — once for our office, once for my garden. Professional, on time, and spotless both times. Highly recommend."
              </p>
              <p className="text-[10px] font-black text-white/40 uppercase tracking-wider">— Wisetax Accountants, Slough</p>
            </div>

            <a
              href="tel:07769844298"
              onClick={() => typeof gtag === 'function' && gtag('event', 'conversion', { send_to: 'AW-18054894614' })}
              className="inline-flex items-center gap-3 bg-[#16a34a] hover:bg-[#15803d] text-white px-8 py-4 font-black uppercase italic tracking-wide text-sm transition-all shadow-[4px_4px_0px_#4ade80] active:shadow-none"
            >
              <Phone size={16} fill="white" />
              Prefer to Call? 07769 844298
            </a>
          </div>

          {/* Right: Form */}
          <div className="bg-white/5 border-4 border-white/10 p-8">
            {/* Reply time note */}
            <div className="bg-[#4ade80]/10 border border-[#4ade80]/30 px-4 py-2.5 mb-5">
              <p className="text-xs font-bold text-[#4ade80]/90 italic leading-snug">
                ⏱ Reply within 1 hour during working hours · Same-day slots usually available
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div>
                <label htmlFor="lq-name" className={labelClass}>Your Name *</label>
                <input
                  id="lq-name" name="name" type="text" required
                  value={formData.name} onChange={handleChange}
                  className={inputClass} placeholder="First and last name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lq-phone" className={labelClass}>Phone *</label>
                  <input
                    id="lq-phone" name="phone" type="tel" required
                    value={formData.phone} onChange={handleChange}
                    className={inputClass} placeholder="07XXX XXXXXX"
                    pattern="^0[0-9\s]{9,13}$" title="Please enter a valid UK phone number starting with 0"
                  />
                </div>
                <div>
                  <label htmlFor="lq-email" className={labelClass}>Email</label>
                  <input
                    id="lq-email" name="email" type="email"
                    value={formData.email} onChange={handleChange}
                    className={inputClass} placeholder="you@email.com (optional)"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="lq-postcode" className={labelClass}>Postcode *</label>
                  <input
                    id="lq-postcode" name="postcode" type="text" required
                    value={formData.postcode} onChange={handleChange}
                    className={inputClass} placeholder="e.g. SL4 1AA"
                  />
                </div>
                <div>
                  <label htmlFor="lq-type" className={labelClass}>Type of Clearance *</label>
                  <select
                    id="lq-type" name="clearanceType" required
                    value={formData.clearanceType} onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled className="text-slate-900 bg-white">Select type...</option>
                    {clearanceTypes.map((t) => (
                      <option key={t} value={t} className="text-slate-900 bg-white">{t}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="lq-desc" className={labelClass}>Brief Description</label>
                <textarea
                  id="lq-desc" name="description" rows={3}
                  value={formData.description} onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell us what needs clearing..."
                />
              </div>

              {/* Chip-picker for preferred date */}
              <div>
                <label className={labelClass}>Preferred Date</label>
                <div className="flex flex-wrap gap-2">
                  {dateChips.map((chip) => (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => setFormData((prev) => ({ ...prev, preferredDate: prev.preferredDate === chip ? '' : chip }))}
                      className={`px-4 py-2 border-2 font-black text-xs uppercase italic transition-all ${
                        formData.preferredDate === chip
                          ? 'bg-[#4ade80] border-[#4ade80] text-slate-900'
                          : 'bg-transparent border-white/20 text-white/60 hover:border-white/40 hover:text-white/80'
                      }`}
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#16a34a] hover:bg-[#15803d] disabled:opacity-60 text-white py-4 font-black uppercase italic tracking-wide text-base flex items-center justify-center gap-2 transition-colors shadow-[4px_4px_0px_#4ade80] active:shadow-none"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Get My Free Quote
                  </>
                )}
              </button>

              {status === 'error' && (
                <p className="text-red-300 text-sm text-center font-bold italic">Something went wrong. Please call us instead.</p>
              )}

              <p className="flex items-center justify-center gap-1.5 text-xs text-white/30 mt-2 font-bold italic">
                <Lock size={12} /> Your details are safe. <a href="/privacy" className="underline text-white/50 hover:text-white/70">Privacy Policy</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingQuoteForm;
