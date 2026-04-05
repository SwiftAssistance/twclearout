import React from 'react';
import { Trash2, Home, TreePine, Briefcase, Sofa, Warehouse } from 'lucide-react';

const services = [
  { icon: Trash2, name: 'Rubbish Removal', desc: 'Household junk and general waste cleared same day.' },
  { icon: Home, name: 'House Clearance', desc: 'Full or partial house clearance, handled with care.' },
  { icon: TreePine, name: 'Garden Waste', desc: 'Green waste, soil, turf, hedges and garden structures.' },
  { icon: Briefcase, name: 'Office & Commercial', desc: 'Desks, IT equipment and office waste removed fast.' },
  { icon: Sofa, name: 'Furniture & Bulky Items', desc: 'Sofas, mattresses, white goods — we take it all.' },
  { icon: Warehouse, name: 'Shed & Hot Tub Removal', desc: 'Dismantled and removed. No hassle, no mess.' },
];

const LandingServices = () => (
  <section className="py-20 md:py-28 bg-white text-slate-900 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-16">
        <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900">What We Clear</h2>
        <p className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-slate-900 italic uppercase leading-[0.9] tracking-tighter">
          OUR <br /> SERVICES.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, name, desc }) => (
          <a
            key={name}
            href="#quote-form"
            className="group bg-[#ecf3ef] p-8 border-4 border-slate-900 flex flex-col hover:border-[#16a34a] hover:bg-[#dcfce7] transition-colors shadow-[6px_6px_0px_#16a34a] hover:shadow-[6px_6px_0px_#064e3b]"
          >
            <Icon size={36} className="text-[#16a34a] mb-5" />
            <h3 className="font-black text-lg uppercase italic tracking-tight text-slate-900 mb-2 leading-tight">{name}</h3>
            <p className="text-sm font-bold text-slate-600 leading-relaxed flex-grow mb-5">{desc}</p>
            <span className="text-[#16a34a] font-black text-xs uppercase tracking-widest italic group-hover:underline">
              Get Quote →
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default LandingServices;
