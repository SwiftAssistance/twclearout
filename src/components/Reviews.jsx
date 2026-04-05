import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: 'Mark',
    town: 'Windsor',
    text: 'Absolutely brilliant service. Called in the morning, they were here by lunchtime. Everything cleared and the garden looked brand new. Would highly recommend to anyone in the area.',
  },
  {
    name: 'Sarah',
    town: 'Guildford',
    text: 'Used Total Waste Clearout for a full house clearance after my mother passed. The team were respectful, efficient and very fairly priced. They even donated usable items to charity.',
  },
  {
    name: 'James',
    town: 'Reading',
    text: 'Had a mountain of garden waste after a big landscaping job. These guys turned up on time, loaded everything in no time and left the place spotless. Great value too.',
  },
];

const Reviews = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal text-center mb-10">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
            >
              <div className="flex gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
              <p className="font-bold text-brand-charcoal text-sm">
                {review.name}{' '}
                <span className="font-normal text-gray-500">&mdash; {review.town}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="#"
            className="text-brand-green hover:text-brand-green-dark font-semibold text-sm transition-colors"
          >
            See all reviews on Google &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
