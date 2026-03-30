import { useState } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

const WEB3FORMS_KEY = '2302ca48-2fbd-4e27-a517-e214142cf489';

const JOB_TYPES = [
  'Home Clearance',
  'Garden Clear-out',
  'Office / Commercial',
  'Construction / Trade Waste',
  'Garage / Shed Clearance',
  'End of Tenancy',
  'Other',
];

function Notification({ type, message, onClose }) {
  if (!message) return null;
  const isSuccess = type === 'success';
  return (
    <div className={`flex items-center gap-3 p-4 rounded-lg border-2 mb-6 ${isSuccess ? 'bg-green-50 border-green-500 text-green-800' : 'bg-red-50 border-red-500 text-red-800'}`}>
      {isSuccess ? <CheckCircle size={20} className="text-green-500 shrink-0" /> : <AlertCircle size={20} className="text-red-500 shrink-0" />}
      <p className="font-bold text-sm flex-1">{message}</p>
      <button type="button" onClick={onClose} className="shrink-0 hover:opacity-70"><X size={16} /></button>
    </div>
  );
}

export default function ContactForm({ subject = 'New Quote Request', compact = false }) {
  const [form, setForm] = useState({ name: '', phone: '', postcode: '', jobType: JOB_TYPES[0] });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [sending, setSending] = useState(false);

  const set = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `${subject} – ${form.jobType}`,
          name: form.name,
          phone: form.phone,
          postcode: form.postcode,
          jobType: form.jobType,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus('success');
      setForm({ name: '', phone: '', postcode: '', jobType: JOB_TYPES[0] });
    } catch {
      setStatus('error');
    } finally {
      setSending(false);
    }
  };

  const inputClass = compact
    ? 'w-full bg-white border-2 border-slate-900 p-3 font-bold text-sm outline-none focus:border-[#16a34a]'
    : 'w-full bg-white border-4 border-slate-900 p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#16a34a]';

  const labelClass = 'block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2';

  return (
    <form onSubmit={handleSubmit} className={compact ? 'space-y-4' : 'space-y-6'}>
      <Notification
        type={status}
        message={
          status === 'success'
            ? 'Request sent! We\'ll call you back within 2 hours.'
            : status === 'error'
            ? 'Something went wrong. Please call us on 07769 844298.'
            : null
        }
        onClose={() => setStatus(null)}
      />

      <div>
        <label className={labelClass}>Your Name</label>
        <input required type="text" value={form.name} onChange={set('name')} placeholder="John Smith" className={inputClass} />
      </div>

      <div>
        <label className={labelClass}>Phone Number</label>
        <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="07xxx xxxxxx" className={inputClass} />
      </div>

      <div className={compact ? '' : 'grid md:grid-cols-2 gap-6'}>
        <div>
          <label className={labelClass}>Postcode</label>
          <input required type="text" value={form.postcode} onChange={set('postcode')} placeholder="e.g. RG1 1AA" className={inputClass} />
        </div>
        <div className={compact ? 'mt-4' : 'mt-0'}>
          <label className={labelClass}>Job Type</label>
          <select value={form.jobType} onChange={set('jobType')} className={`${inputClass} cursor-pointer appearance-none`}>
            {JOB_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={sending}
        className={`w-full text-white font-black uppercase tracking-widest transition-all shadow-xl active:scale-95 disabled:opacity-60 ${
          compact
            ? 'bg-[#16a34a] hover:bg-[#4ade80] p-4 text-sm'
            : 'bg-slate-900 hover:bg-[#16a34a] p-6 md:p-8 italic text-xl md:text-2xl'
        }`}
      >
        {sending ? 'Sending...' : compact ? 'Get Fixed Price' : 'Lock In Fixed Price'}
      </button>
    </form>
  );
}
