import React from 'react';
import { Trash2, Home, TreePine, Briefcase, Sofa, Warehouse } from 'lucide-react';

const services = [
  {
    icon: Trash2,
    name: 'Waste Removal',
    desc: 'Household junk and general waste removal, cleared same day.',
    image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=480&h=320&fit=crop&auto=format&q=80',
  },
  {
    icon: Home,
    name: 'House Clearance',
    desc: 'Full or partial house clearance, handled with care.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=480&h=320&fit=crop&auto=format&q=80',
  },
  {
    icon: TreePine,
    name: 'Garden Waste',
    desc: 'Green waste, soil, turf, hedges and garden structures.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=480&h=320&fit=crop&auto=format&q=80',
  },
  {
    icon: Briefcase,
    name: 'Office & Commercial',
    desc: 'Desks, IT equipment and office waste removed fast.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=480&h=320&fit=crop&auto=format&q=80',
  },
  {
    icon: Sofa,
    name: 'Furniture & Bulky Items',
    desc: 'Sofas, mattresses, white goods — we take it all.',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=480&h=320&fit=crop&auto=format&q=80',
  },
  {
    icon: Warehouse,
    name: 'Shed & Hot Tub Removal',
    desc: 'Dismantled and removed. No hassle, no mess.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=480&h=320&fit=crop&auto=format&q=80',
  },
];

const LandingServices = () => (
  <section className="py-20 md:py-28 bg-white text-slate-900 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-16">
        <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900">Waste Removal Services</h2>
        <p className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-slate-900 italic uppercase leading-[0.9] tracking-tighter">
          WASTE <br /> REMOVAL.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, name, desc, image }) => (
          <a
            key={name}
            href="#quote-form"
            className="group bg-[#ecf3ef] border-4 border-slate-900 flex flex-col hover:border-[#16a34a] transition-colors shadow-[6px_6px_0px_#16a34a] hover:shadow-[6px_6px_0px_#064e3b] overflow-hidden"
          >
            <div className="aspect-[3/2] overflow-hidden relative">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="480"
                height="320"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-3 left-3 bg-[#16a34a] p-2">
                <Icon size={20} className="text-white" />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-black text-lg uppercase italic tracking-tight text-slate-900 mb-2 leading-tight">{name}</h3>
              <p className="text-sm font-bold text-slate-600 leading-relaxed flex-grow mb-4">{desc}</p>
              <span className="text-[#16a34a] font-black text-xs uppercase tracking-widest italic group-hover:underline">
                Get Free Quote →
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default LandingServices;
