import React from 'react';
import { ShieldCheck, Shield, Star } from 'lucide-react';

const beforeAfterPlaceholders = [
  { id: 1, alt: 'Garden clearance before and after' },
  { id: 2, alt: 'House clearance before and after' },
  { id: 3, alt: 'Rubbish removal before and after' },
];

const Trust = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal text-center mb-10">
          Trust &amp; Credentials
        </h2>

        {/* Licence & Insurance */}
        <div className="grid sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto mb-10">
          <div className="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
            <ShieldCheck size={28} className="text-brand-green shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-brand-charcoal mb-1">Licensed Waste Carrier</h3>
              <p className="text-gray-600 text-sm">
                Environment Agency registered waste carrier &mdash; Licence No: CBDU XXXXXX
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 flex items-start gap-4">
            <Shield size={28} className="text-brand-green shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-brand-charcoal mb-1">Fully Insured</h3>
              <p className="text-gray-600 text-sm">
                Fully insured with public liability coverage
              </p>
            </div>
          </div>
        </div>

        {/* Google Reviews placeholder */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <p className="font-bold text-brand-charcoal">Google Reviews</p>
            <div id="google-reviews" className="mt-4 min-h-[40px]">
              {/* Embed Google review widget here */}
            </div>
          </div>
        </div>

        {/* Before & After photos */}
        <div className="max-w-4xl mx-auto mb-10">
          <h3 className="font-bold text-brand-charcoal text-lg text-center mb-6">
            Before &amp; After
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-6">
            {beforeAfterPlaceholders.map((item) => (
              <div key={item.id} className="bg-white rounded-xl overflow-hidden border border-gray-200">
                <div className="grid grid-cols-2">
                  <div className="aspect-square bg-gray-200 flex items-center justify-center relative">
                    <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded">
                      Before
                    </span>
                    <img
                      src=""
                      alt={`${item.alt} - before`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="aspect-square bg-gray-100 flex items-center justify-center relative">
                    <span className="absolute top-2 left-2 bg-brand-green text-white text-xs font-bold px-2 py-0.5 rounded">
                      After
                    </span>
                    <img
                      src=""
                      alt={`${item.alt} - after`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Where Does Your Waste Go? */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-brand-navy text-white rounded-xl p-6 md:p-8">
            <h3 className="font-bold text-lg mb-3">Where Does Your Waste Go?</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              We take your waste to licensed transfer stations. We recycle and donate
              wherever possible. You receive a waste transfer note for your records.
              We never fly-tip &mdash; guaranteed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
