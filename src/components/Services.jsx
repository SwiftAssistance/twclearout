import React from 'react';
import { Trash2, Home, TreePine, Briefcase, Armchair, Warehouse } from 'lucide-react';

const services = [
  {
    icon: Trash2,
    name: 'Rubbish Removal',
    description: 'Household junk and general waste cleared same day.',
  },
  {
    icon: Home,
    name: 'House Clearance',
    description: 'Full or partial house clearance, handled with care.',
  },
  {
    icon: TreePine,
    name: 'Garden Waste Removal',
    description: 'Green waste, soil, turf, hedges and garden structures.',
  },
  {
    icon: Briefcase,
    name: 'Office & Commercial',
    description: 'Desks, IT equipment and office waste removed fast.',
  },
  {
    icon: Armchair,
    name: 'Furniture & Bulky Items',
    description: 'Sofas, mattresses, white goods \u2014 we take it all.',
  },
  {
    icon: Warehouse,
    name: 'Shed & Hot Tub Removal',
    description: 'Dismantled and removed. No hassle.',
  },
];

const ServicesSection = () => {
  return (
    <section className="py-12 md:py-16 bg-white" id="services">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal text-center mb-10">
          Our Services
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-gray-50 border border-gray-200 rounded-xl p-5 md:p-6 flex flex-col items-start hover:shadow-md transition-shadow"
            >
              <div className="bg-brand-green/10 p-3 rounded-lg mb-4">
                <service.icon size={24} className="text-brand-green" />
              </div>
              <h3 className="font-bold text-brand-charcoal text-base md:text-lg mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">
                {service.description}
              </p>
              <a
                href="#quote-form"
                className="text-brand-green hover:text-brand-green-dark font-semibold text-sm transition-colors"
              >
                Get Quote &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
