import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "Brilliant service from start to finish. Called in the morning and they were here by lunchtime. Everything cleared, swept up, and a waste transfer note emailed over. Can't recommend enough.",
    name: 'Sarah',
    town: 'Windsor',
  },
  {
    text: "Used Total Waste Clearout for a full house clearance after my mum passed. They were respectful, efficient and recycled as much as possible. Fair price too. Would use again without hesitation.",
    name: 'James',
    town: 'Guildford',
  },
  {
    text: "Had a garden full of rubble, old decking and green waste. They loaded the lot in under an hour. Great communication, on time, and the price was exactly what they quoted. Top job.",
    name: 'Mark',
    town: 'Bracknell',
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={16} fill="#facc15" className="text-yellow-400" />
    ))}
  </div>
);

const LandingReviews = () => (
  <section className="py-16 sm:py-20 bg-slate-50">
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-black text-center text-slate-900 mb-10 sm:mb-12">
        What Our Customers Say
      </h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
        {reviews.map(({ text, name, town }) => (
          <div key={name} className="bg-white rounded-xl p-6 border border-slate-200 flex flex-col">
            <Stars />
            <p className="text-sm text-slate-600 leading-relaxed flex-grow mb-4">"{text}"</p>
            <p className="text-sm font-bold text-slate-900">{name} — <span className="font-normal text-slate-500">{town}</span></p>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <a href="#" className="text-[#16a34a] font-bold text-sm hover:underline">
          See all reviews on Google →
        </a>
      </div>
    </div>
  </section>
);

export default LandingReviews;
