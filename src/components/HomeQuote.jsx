import React from 'react';
import { CheckCircle } from 'lucide-react';

const HomeQuote = () => (
  <section id="quote" className="py-24 md:py-32 bg-[#ecf3ef] border-t border-slate-200 text-left">
    <div className="container mx-auto px-6 text-slate-900">
      <div className="bg-white p-8 md:p-20 border-8 border-slate-900 shadow-[15px_15px_0px_#16a34a] md:shadow-[30px_30px_0px_#16a34a] relative">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div><h2 className="text-5xl md:text-[6.5rem] font-[1000] leading-[0.85] uppercase italic tracking-tighter text-slate-900">GET YOUR <br /> <span className="text-[#16a34a] underline decoration-slate-900">FIXED</span> PRICE.</h2><div className="space-y-4 mt-8"><div className="flex items-center gap-3 font-black uppercase italic text-sm text-slate-500"><CheckCircle size={16} className="text-[#16a34a]" aria-hidden="true" /> No Hidden Disposal Fees</div><div className="flex items-center gap-3 font-black uppercase italic text-sm text-slate-500"><CheckCircle size={16} className="text-[#16a34a]" aria-hidden="true" /> Uniformed Loaders Included</div></div></div>
          <div className="bg-slate-50 p-6 md:p-10 border-4 border-slate-900 rounded-lg">
             <form
               className="space-y-8"
               name="homepage-quote"
               method="POST"
               data-netlify="true"
               onSubmit={(e) => {
                 e.preventDefault();
                 const formData = new FormData(e.target);
                 fetch('/', {
                   method: 'POST',
                   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                   body: new URLSearchParams(formData).toString(),
                 }).then(() => {
                   alert('Quote request sent! We will call you back within 2 hours.');
                   e.target.reset();
                 }).catch(() => {
                   alert('Something went wrong. Please call us directly on 07769 844298.');
                 });
               }}
             >
               <input type="hidden" name="form-name" value="homepage-quote" />
               <div className="grid md:grid-cols-2 gap-8"><div><label htmlFor="job-description" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Job Description</label><select id="job-description" name="jobType" className="w-full bg-white border-4 border-slate-900 p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#16a34a] appearance-none cursor-pointer"><option>End of Tenancy Clearance</option><option>HardHat Waste Hub</option><option>Garden Clear-out</option><option>Office Removal</option></select></div><div><label htmlFor="postcode" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Postcode Area</label><input id="postcode" name="postcode" type="text" placeholder="e.g. RG1" className="w-full bg-white border-4 border-slate-900 p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#16a34a]" /></div></div>
               <div><label htmlFor="phone" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Phone Number</label><input id="phone" name="phone" type="tel" placeholder="07xxx xxxxxx" className="w-full bg-white border-4 border-slate-900 p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#16a34a]" /></div>
               <button type="submit" className="w-full bg-slate-900 text-white p-6 md:p-8 font-black uppercase tracking-widest italic text-xl md:text-2xl hover:bg-[#16a34a] transition-all shadow-xl active:scale-95">Lock In Fixed Price</button>
             </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HomeQuote;
