import React from 'react';
import { MapPin } from 'lucide-react';

const berkshireTowns = [
  'Windsor', 'Slough', 'Maidenhead', 'Reading', 'Bracknell',
  'Wokingham', 'Newbury', 'Ascot', 'Sandhurst',
];

const surreyTowns = [
  'Guildford', 'Woking', 'Camberley', 'Farnham', 'Staines',
  'Egham', 'Weybridge', 'Chertsey', 'Virginia Water',
];

const Areas = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-brand-charcoal text-center mb-2">
          Areas We Cover
        </h2>
        <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
          Based in Windsor. Covering a 20-mile radius across Berkshire and Surrey.
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto mb-10">
          <div>
            <h3 className="font-bold text-brand-charcoal text-lg mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-brand-green" />
              Berkshire
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {berkshireTowns.map((town) => (
                <li key={town} className="text-gray-600 text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full shrink-0" />
                  {town}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-brand-charcoal text-lg mb-4 flex items-center gap-2">
              <MapPin size={18} className="text-brand-green" />
              Surrey
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {surreyTowns.map((town) => (
                <li key={town} className="text-gray-600 text-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-brand-green rounded-full shrink-0" />
                  {town}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Google Map placeholder */}
        <div
          id="service-area-map"
          className="max-w-3xl mx-auto bg-gray-100 rounded-xl border border-gray-200 h-64 md:h-80 flex items-center justify-center"
        >
          <p className="text-gray-400 text-sm">Google Map embed placeholder</p>
        </div>
      </div>
    </section>
  );
};

export default Areas;
