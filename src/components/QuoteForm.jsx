import React, { useState } from 'react';
import { Send, Lock } from 'lucide-react';

const clearanceTypes = [
  'House Clearance',
  'Garden Waste',
  'Rubbish Removal',
  'Office Clearance',
  'Furniture / Bulky Items',
  'Other',
];

const QuoteForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(e.target);
    const name = formData.get('name');

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
      });

      // Fire GTM event
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'quote_form_submission' });

      setSubmittedName(name);
      setSubmitted(true);
    } catch {
      alert('Something went wrong. Please call us instead.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section className="py-12 md:py-16 bg-brand-navy" id="quote-form">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <div className="bg-white rounded-xl p-8 md:p-10">
            <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send size={28} className="text-brand-green" />
            </div>
            <h2 className="text-2xl font-extrabold text-brand-charcoal mb-2">
              Thanks {submittedName}!
            </h2>
            <p className="text-gray-600">
              We&apos;ll be in touch within the hour.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16 bg-brand-navy" id="quote-form">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white text-center mb-2">
          Get Your Free Quote
        </h2>
        <p className="text-gray-400 text-center mb-8">
          We&apos;ll respond within 1 hour during business hours.
        </p>

        <form
          name="landing-quote"
          method="POST"
          data-netlify="true"
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-6 md:p-8 shadow-lg"
        >
          <input type="hidden" name="form-name" value="landing-quote" />

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-brand-charcoal mb-1">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-brand-charcoal mb-1">
                Phone number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition"
                placeholder="07XXX XXXXXX"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-brand-charcoal mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="postcode" className="block text-sm font-semibold text-brand-charcoal mb-1">
                Postcode *
              </label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition"
                placeholder="e.g. SL4 1AA"
              />
            </div>

            <div>
              <label htmlFor="clearanceType" className="block text-sm font-semibold text-brand-charcoal mb-1">
                Type of clearance *
              </label>
              <select
                id="clearanceType"
                name="clearanceType"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition bg-white"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service...
                </option>
                {clearanceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-brand-charcoal mb-1">
                Brief description
              </label>
              <textarea
                id="description"
                name="description"
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition resize-none"
                placeholder="Tell us what needs clearing..."
              />
            </div>

            <div>
              <label htmlFor="preferredDate" className="block text-sm font-semibold text-brand-charcoal mb-1">
                Preferred date
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-brand-green focus:border-brand-green outline-none transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full bg-brand-green hover:bg-brand-green-dark disabled:bg-gray-400 text-white font-bold text-lg py-3.5 rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            {submitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Send size={18} />
                Get My Free Quote
              </>
            )}
          </button>

          <p className="flex items-center justify-center gap-1.5 text-gray-500 text-xs mt-3">
            <Lock size={12} />
            Your details are safe. We never share your information.
          </p>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;
