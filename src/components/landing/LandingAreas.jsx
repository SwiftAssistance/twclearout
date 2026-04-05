import React from 'react';
import { MapPin } from 'lucide-react';

const berkshire = ['Windsor', 'Slough', 'Maidenhead', 'Reading', 'Bracknell', 'Wokingham', 'Newbury', 'Ascot', 'Sandhurst'];
const surrey = ['Guildford', 'Woking', 'Camberley', 'Farnham', 'Staines', 'Egham', 'Weybridge', 'Chertsey', 'Virginia Water'];

const LandingAreas = () => (
  <section className="py-16 sm:py-20 bg-white">
    <div className="container mx-auto px-4 sm:px-6">
      <div className="text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-2">Areas We Cover</h2>
        <p className="text-sm sm:text-base text-slate-500">
          Based in Windsor. Covering a 20-mile radius across Berkshire and Surrey.
        </p>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
        <div>
          <h3 className="font-bold text-base text-slate-900 mb-3 flex items-center gap-2">
            <MapPin size={16} className="text-[#16a34a]" /> Berkshire
          </h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {berkshire.map((t) => (
              <li key={t} className="text-sm text-slate-600">{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-base text-slate-900 mb-3 flex items-center gap-2">
            <MapPin size={16} className="text-[#16a34a]" /> Surrey
          </h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {surrey.map((t) => (
              <li key={t} className="text-sm text-slate-600">{t}</li>
            ))}
          </ul>
        </div>
      </div>
      <div id="service-area-map" className="max-w-3xl mx-auto bg-slate-100 rounded-xl border border-slate-200 h-64 flex items-center justify-center">
        <p className="text-sm text-slate-400">Google Map embed will appear here</p>
      </div>
    </div>
  </section>
);

export default LandingAreas;
