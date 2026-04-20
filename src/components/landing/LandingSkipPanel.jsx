import React from 'react';
import { CheckCircle, Clock, Recycle, BadgeCheck } from 'lucide-react';

const reasons = [
  { icon: CheckCircle, text: 'We do ALL the lifting — you point, we load' },
  { icon: Clock, text: 'Same day or next day, most areas' },
  { icon: Recycle, text: '94% of waste recycled or donated' },
  { icon: BadgeCheck, text: 'Waste transfer note on every job' },
  { icon: CheckCircle, text: 'No skip permits, no blocked driveways' },
  { icon: CheckCircle, text: 'Fixed price — the quote IS the price' },
];

const LandingSkipPanel = () => (
  <section className="bg-white py-10 md:py-14 border-b-4 border-slate-900">
    <div className="container mx-auto px-5 sm:px-6">
      <p className="text-slate-900 font-black text-sm uppercase italic tracking-wide mb-5">
        Why people pick us over a skip:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
        {reasons.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-start gap-2.5">
            <Icon size={16} className="text-[#16a34a] shrink-0 mt-0.5" />
            <p className="text-sm font-bold text-slate-700 leading-snug">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LandingSkipPanel;
