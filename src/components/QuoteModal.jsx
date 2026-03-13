import { useState } from 'react';
import { X, ClipboardList } from 'lucide-react';

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const JOB_TYPES = [
  'Home Clearance',
  'Garden Clear-out',
  'Office / Commercial',
  'Construction / Trade Waste',
  'Garage / Shed Clearance',
  'End of Tenancy',
  'Other',
];

export default function QuoteModal({ buttonClassName, buttonLabel = 'Get a Quote' }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', postcode: '', jobType: JOB_TYPES[0] });

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      'Quick Quote Request',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Postcode: ${form.postcode}`,
      `Job: ${form.jobType}`,
    ].join('\n');
    window.open(`https://wa.me/447769844298?text=${encodeURIComponent(text)}`, '_blank');
    setOpen(false);
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={buttonClassName}>
        {buttonLabel}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
          <div className="relative bg-white border-4 border-slate-900 shadow-[8px_8px_0px_#16a34a] p-8 w-full max-w-md">
            <button type="button" onClick={() => setOpen(false)} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors">
              <X size={24} />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <ClipboardList size={28} className="text-[#16a34a]" />
              <h2 className="text-2xl font-black uppercase italic text-slate-900">Get a Fixed Quote</h2>
            </div>
            <p className="text-slate-500 text-sm font-bold mb-6">We'll reply via WhatsApp within 2 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Your Name</label>
                <input required type="text" value={form.name} onChange={set('name')} placeholder="John Smith" className="w-full border-2 border-slate-900 p-3 font-bold text-sm outline-none focus:border-[#16a34a]" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Phone Number</label>
                <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="07xxx xxxxxx" className="w-full border-2 border-slate-900 p-3 font-bold text-sm outline-none focus:border-[#16a34a]" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Postcode</label>
                <input required type="text" value={form.postcode} onChange={set('postcode')} placeholder="e.g. RG1 1AA" className="w-full border-2 border-slate-900 p-3 font-bold text-sm outline-none focus:border-[#16a34a]" />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Job Type</label>
                <select value={form.jobType} onChange={set('jobType')} className="w-full border-2 border-slate-900 p-3 font-bold text-sm outline-none focus:border-[#16a34a] bg-white cursor-pointer">
                  {JOB_TYPES.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
              <button type="submit" className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white p-4 font-black uppercase tracking-widest text-sm transition-colors flex items-center justify-center gap-2">
                {WA_ICON} Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
