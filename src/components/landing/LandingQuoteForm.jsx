import React, { useState } from 'react';
import { Send, CheckCircle, Lock } from 'lucide-react';

const clearanceTypes = [
  'House Clearance',
  'Garden Waste',
  'Rubbish Removal',
  'Office Clearance',
  'Furniture / Bulky Items',
  'Other',
];

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
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

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
          Email: formData.email,
          Postcode: formData.postcode,
          'Clearance Type': formData.clearanceType,
          Description: formData.description || 'Not provided',
          'Preferred Date': formData.preferredDate || 'Not specified',
        }),
      });

      if (response.ok) {
        setStatus('success');
        // Fire GTM event
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'quote_form_submission' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <section id="quote-form" className="py-16 sm:py-20 bg-[#064e3b]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-lg mx-auto text-center text-white">
            <CheckCircle size={48} className="text-[#4ade80] mx-auto mb-4" />
            <h2 className="text-2xl font-black mb-2">Thanks {formData.name}!</h2>
            <p className="text-white/80">We'll be in touch within the hour.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote-form" className="py-16 sm:py-20 bg-[#064e3b]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2">Get Your Free Quote</h2>
            <p className="text-sm text-white/60">We'll respond within 1 hour during business hours.</p>
          </div>

          <form
            onSubmit={handleSubmit}
            data-netlify="true"
            name="landing-quote"
            className="space-y-4"
          >
            <input type="hidden" name="form-name" value="landing-quote" />

            <div>
              <label htmlFor="lq-name" className="block text-xs font-bold text-white/70 mb-1.5">Name *</label>
              <input
                id="lq-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="lq-phone" className="block text-xs font-bold text-white/70 mb-1.5">Phone *</label>
                <input
                  id="lq-phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:border-transparent"
                  placeholder="07XXX XXXXXX"
                />
              </div>
              <div>
                <label htmlFor="lq-email" className="block text-xs font-bold text-white/70 mb-1.5">Email *</label>
                <input
                  id="lq-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:border-transparent"
                  placeholder="you@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="lq-postcode" className="block text-xs font-bold text-white/70 mb-1.5">Postcode *</label>
                <input
                  id="lq-postcode"
                  name="postcode"
                  type="text"
                  required
                  value={formData.postcode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:border-transparent"
                  placeholder="e.g. SL4 1AA"
                />
              </div>
              <div>
                <label htmlFor="lq-type" className="block text-xs font-bold text-white/70 mb-1.5">Type of clearance *</label>
                <select
                  id="lq-type"
                  name="clearanceType"
                  required
                  value={formData.clearanceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:border-transparent appearance-none"
                >
                  <option value="" disabled className="text-slate-900">Select type...</option>
                  {clearanceTypes.map((t) => (
                    <option key={t} value={t} className="text-slate-900">{t}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="lq-desc" className="block text-xs font-bold text-white/70 mb-1.5">Brief description</label>
              <textarea
                id="lq-desc"
                name="description"
                rows={3}
                value={formData.description}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:border-transparent resize-none"
                placeholder="Tell us what needs clearing..."
              />
            </div>

            <div>
              <label htmlFor="lq-date" className="block text-xs font-bold text-white/70 mb-1.5">Preferred date</label>
              <input
                id="lq-date"
                name="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#4ade80] focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-[#16a34a] hover:bg-[#15803d] disabled:opacity-60 text-white py-4 rounded-lg font-bold text-base flex items-center justify-center gap-2 transition-colors shadow-lg"
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
              <p className="text-red-300 text-sm text-center">Something went wrong. Please call us instead.</p>
            )}

            <p className="flex items-center justify-center gap-1.5 text-xs text-white/40 mt-3">
              <Lock size={12} /> Your details are safe. We never share your information.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LandingQuoteForm;
