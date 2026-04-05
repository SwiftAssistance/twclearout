import React from 'react';
import { Trash2, Home, TreePine, Briefcase, Sofa, Warehouse } from 'lucide-react';

const services = [
  { icon: Trash2, name: 'Rubbish Removal', desc: 'Household junk and general waste cleared same day.' },
  { icon: Home, name: 'House Clearance', desc: 'Full or partial house clearance, handled with care.' },
  { icon: TreePine, name: 'Garden Waste Removal', desc: 'Green waste, soil, turf, hedges and garden structures.' },
  { icon: Briefcase, name: 'Office & Commercial', desc: 'Desks, IT equipment and office waste removed fast.' },
  { icon: Sofa, name: 'Furniture & Bulky Items', desc: 'Sofas, mattresses, white goods — we take it all.' },
  { icon: Warehouse, name: 'Shed & Hot Tub Removal', desc: 'Dismantled and removed. No hassle.' },
];

const LandingServices = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
      <h2 className="text-2xl sm:text-3xl font-black text-center text-slate-900 mb-10 sm:mb-12">
        What We Clear
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {services.map(({ icon: Icon, name, desc }) => (
          <div key={name} className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-100 flex flex-col">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#dcfce7] rounded-lg flex items-center justify-center mb-4">
              <Icon size={20} className="text-[#16a34a]" />
            </div>
            <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-2">{name}</h3>
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-4 flex-grow">{desc}</p>
            <a
              href="#quote-form"
              className="text-[#16a34a] font-bold text-xs sm:text-sm hover:underline"
            >
              Get Quote →
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LandingServices;
