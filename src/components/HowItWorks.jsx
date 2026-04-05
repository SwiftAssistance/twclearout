import React from 'react';
import { MessageSquare, Truck, Recycle } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: MessageSquare,
    title: 'Get Your Free Quote',
    description:
      "Call us or fill in the form. We'll give you a fixed price within the hour.",
  },
  {
    number: 2,
    icon: Truck,
    title: 'We Arrive & Load Up',
    description:
      "Our team arrives at the agreed time. You point, we load. You don't lift a thing.",
  },
  {
    number: 3,
    icon: Recycle,
    title: 'Waste Responsibly Disposed',
    description:
      'We sort, recycle and dispose at licensed facilities. Waste transfer note provided.',
  },
];

const HowItWorks = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal text-center mb-10">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-0.5 bg-brand-green/30" />

          {steps.map((step) => (
            <div key={step.number} className="text-center relative">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-green text-white font-bold text-lg mb-4 relative z-10">
                {step.number}
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex justify-center mb-4">
                  <step.icon size={32} className="text-brand-green" />
                </div>
                <h3 className="font-bold text-brand-charcoal text-lg mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
