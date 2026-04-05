import React from 'react';
import { MapPin } from 'lucide-react';

const berkshire = ['Windsor', 'Slough', 'Maidenhead', 'Reading', 'Bracknell', 'Wokingham', 'Newbury', 'Ascot', 'Sandhurst'];
const surrey = ['Guildford', 'Woking', 'Camberley', 'Farnham', 'Staines', 'Egham', 'Weybridge', 'Chertsey', 'Virginia Water'];

const LandingAreas = () => (
  <section className="py-20 md:py-28 bg-white overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="mb-12 md:mb-16">
        <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900">Service Area</h2>
        <p className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-slate-900 italic uppercase leading-[0.9] tracking-tighter">
          COVERING<br />BERKSHIRE<br />&amp; SURREY.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 items-start max-w-4xl">
        {/* Berkshire */}
        <div className="bg-[#ecf3ef] border-4 border-slate-900 p-8 shadow-[8px_8px_0px_#16a34a]">
          <h3 className="flex items-center gap-3 font-black text-lg uppercase italic text-slate-900 mb-6">
            <div className="bg-[#16a34a] p-2">
              <MapPin size={16} className="text-white" />
            </div>
            Berkshire
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {berkshire.map((t) => (
              <p key={t} className="text-sm font-bold text-slate-700 uppercase italic tracking-wide">{t}</p>
            ))}
          </div>
        </div>

        {/* Surrey */}
        <div className="bg-[#dcfce7] border-4 border-slate-900 p-8 shadow-[8px_8px_0px_#064e3b]">
          <h3 className="flex items-center gap-3 font-black text-lg uppercase italic text-slate-900 mb-6">
            <div className="bg-[#16a34a] p-2">
              <MapPin size={16} className="text-white" />
            </div>
            Surrey
          </h3>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {surrey.map((t) => (
              <p key={t} className="text-sm font-bold text-slate-700 uppercase italic tracking-wide">{t}</p>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-8 font-bold text-slate-500 italic text-sm">
        Based in Windsor. Covering a 20-mile radius. Not sure if we cover your area?{' '}
        <a href="tel:07769844298" className="text-[#16a34a] underline font-black">Call us — we'll confirm instantly.</a>
      </p>
    </div>
  </section>
);

export default LandingAreas;
