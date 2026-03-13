import { useState } from 'react';
import { X, ClipboardList, CheckCircle } from 'lucide-react';

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
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'quote-request',
          ...form,
        }).toString(),
      });
      setSubmitted(true);
    } catch {
      setError(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setSubmitted(false);
    setError(false);
    setForm({ name: '', phone: '', postcode: '', jobType: JOB_TYPES[0] });
  };

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={buttonClassName}>
        {buttonLabel}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
          <div className="relative bg-white border-4 border-slate-900 shadow-[8px_8px_0px_#16a34a] p-8 w-full max-w-md">
            <button type="button" onClick={handleClose} className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition-colors">
              <X size={24} />
            </button>

            {submitted ? (
              <div className="text-center py-6">
                <CheckCircle size={56} className="text-[#16a34a] mx-auto mb-4" />
                <h2 className="text-2xl font-black uppercase italic text-slate-900 mb-2">Request Sent!</h2>
                <p className="text-slate-600 font-bold">We'll call you back within 2 hours.</p>
                <button onClick={handleClose} className="mt-6 bg-slate-900 text-white px-8 py-3 font-black uppercase text-sm hover:bg-[#16a34a] transition-colors">
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-3 mb-2">
                  <ClipboardList size={28} className="text-[#16a34a]" />
                  <h2 className="text-2xl font-black uppercase italic text-slate-900">Get a Fixed Quote</h2>
                </div>
                <p className="text-slate-500 text-sm font-bold mb-6">We'll call you back within 2 hours.</p>

                <form
                  onSubmit={handleSubmit}
                  name="quote-request"
                  data-netlify="true"
                  className="space-y-4"
                >
                  <input type="hidden" name="form-name" value="quote-request" />
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Your Name</label>
                    <input required name="name" type="text" value={form.name} onChange={set('name')} placeholder="John Smith" className="w-full border-2 border-slate-900 p-3 font-bold text-sm outline-none focus:border-[#16a34a]" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Phone Number</label>
                    <input required name="phone" type="tel" value={form.phone} onChange={set('phone')} placeholder="07xxx xxxxxx" className="w-full border-2 border-slate-900 p-3 font-bold text-sm outline-none focus:border-[#16a34a]" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Postcode</label>
                    <input required name="postcode" type="text" value={form.postcode} onChange={set('postcode')} placeholder="e.g. RG1 1AA" className="w-full border-2 border-slate-900 p-3 font-bold text-sm outline-none focus:border-[#16a34a]" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Job Type</label>
                    <select name="jobType" value={form.jobType} onChange={set('jobType')} className="w-full border-2 border-slate-900 p-3 font-bold text-sm outline-none focus:border-[#16a34a] bg-white cursor-pointer">
                      {JOB_TYPES.map((t) => <option key={t}>{t}</option>)}
                    </select>
                  </div>
                  {error && <p className="text-red-500 text-sm font-bold">Something went wrong — please call us directly on 07769 844298.</p>}
                  <button type="submit" className="w-full bg-slate-900 hover:bg-[#16a34a] text-white p-4 font-black uppercase tracking-widest text-sm transition-colors">
                    Send Enquiry
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
