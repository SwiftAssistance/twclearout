import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  MapPin,
  CheckCircle
} from 'lucide-react';

// Helper Components
const MapContact = () => (
  <section id="location" className="py-24 md:py-32 bg-white">
    <div className="container mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900">Service Area</h2>
        <p className="text-5xl md:text-8xl font-black text-slate-900 italic uppercase leading-[0.85] tracking-tighter">COVERING BERKSHIRE.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
        <div className="space-y-8">
          <div className="bg-[#ecf3ef] p-8 md:p-12 border-4 border-slate-900 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-black uppercase italic mb-6 text-slate-900">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#16a34a] p-3 rounded-sm shrink-0">
                  <Phone size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Phone</p>
                  <a href="tel:07769844298" className="text-xl md:text-2xl font-black text-slate-900 hover:text-[#16a34a] transition-colors">07769 844298</a>
                  <p className="text-xs font-bold text-slate-500 italic mt-1">Open 7am - 7pm Daily</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#16a34a] p-3 rounded-sm shrink-0">
                  <MapPin size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Service Area</p>
                  <p className="text-lg font-bold text-slate-900">Berkshire & Surrey</p>
                  <p className="text-sm font-bold text-slate-600 italic mt-2">Covering: Reading, Slough, Guildford, Woking, Bracknell, Windsor, Ascot, Egham, Maidenhead, Staines</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-300">
                <a href="https://wa.me/447769844298" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white p-5 rounded-lg flex items-center justify-center gap-3 font-black uppercase text-sm transition-all hover:scale-105 shadow-lg">
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-4 border-slate-900 rounded-lg overflow-hidden shadow-lg h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201683.57894736842!2d-0.9781303!3d51.4542645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48768c3f0d0d0d0d%3A0x0!2sBerkshire%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Area Map - Entire Berkshire Region"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

const HomeQuote = () => (
  <section id="quote" className="py-24 md:py-32 bg-[#ecf3ef] border-t border-slate-200 text-left">
    <div className="container mx-auto px-6 text-slate-900">
      <div className="bg-white p-8 md:p-20 border-8 border-slate-900 shadow-[15px_15px_0px_#16a34a] md:shadow-[30px_30px_0px_#16a34a] relative">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div><h2 className="text-5xl md:text-[6.5rem] font-[1000] leading-[0.85] uppercase italic tracking-tighter text-slate-900">GET YOUR <br /> <span className="text-[#16a34a] underline decoration-slate-900">FIXED</span> PRICE.</h2><div className="space-y-4 mt-8"><div className="flex items-center gap-3 font-black uppercase italic text-sm text-slate-500"><CheckCircle size={16} className="text-[#16a34a]" aria-hidden="true" /> No Hidden Disposal Fees</div><div className="flex items-center gap-3 font-black uppercase italic text-sm text-slate-500"><CheckCircle size={16} className="text-[#16a34a]" aria-hidden="true" /> Uniformed Loaders Included</div></div></div>
          <div className="bg-slate-50 p-6 md:p-10 border-4 border-slate-900 rounded-lg">
             <form className="space-y-8" onSubmit={e => e.preventDefault()}>
               <div className="grid md:grid-cols-2 gap-8"><div><label htmlFor="job-description" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Job Description</label><select id="job-description" className="w-full bg-white border-4 border-slate-900 p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#16a34a] appearance-none cursor-pointer"><option>End of Tenancy Clearance</option><option>HardHat Waste Hub</option><option>Garden Clear-out</option><option>Office Removal</option></select></div><div><label htmlFor="postcode" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Postcode Area</label><input id="postcode" type="text" placeholder="e.g. RG1" className="w-full bg-white border-4 border-slate-900 p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#16a34a]" /></div></div>
               <div><label htmlFor="phone" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Phone Number</label><input id="phone" type="tel" placeholder="07xxx xxxxxx" className="w-full bg-white border-4 border-slate-900 p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#16a34a]" /></div>
               <button type="submit" className="w-full bg-slate-900 text-white p-6 md:p-8 font-black uppercase tracking-widest italic text-xl md:text-2xl hover:bg-[#16a34a] transition-all shadow-xl active:scale-95">Lock In Fixed Price</button>
             </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Contact Us | Get a Quote for Waste Removal in Reading, Slough, Berkshire & Surrey</title>
        <meta name="description" content="Contact Total Waste Clearout for professional waste removal services. Call 07769 844298 or message on WhatsApp. 2-hour response time. Serving Reading, Slough, Guildford & all Berkshire & Surrey." />
        <meta name="keywords" content="contact waste removal, get quote rubbish clearance, waste disposal Reading phone, junk removal Slough contact, clearance quote Berkshire, waste removal Surrey phone number, book clearance Guildford, instant quote Woking, WhatsApp waste removal" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/contact" />
        <meta property="og:title" content="Contact Total Waste Clearout | Get Your Free Quote Today" />
        <meta property="og:description" content="Contact us for professional waste removal. 2-hour response time. Available 7 days a week across Berkshire & Surrey." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/contact" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Header */}
      <header className="bg-[#064e3b] border-b-4 border-[#4ade80] py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <img src="/logo.webp" alt="Total Waste Clearout Ltd logo" className="w-12 h-12 object-contain group-hover:rotate-12 transition-transform" />
            <div className="flex flex-col leading-none">
              <span className="font-black text-2xl md:text-3xl tracking-tighter uppercase italic leading-none text-white">Total Waste</span>
              <span className="text-[#4ade80] font-black text-xs tracking-[.4em] uppercase">Clearout Ltd</span>
            </div>
          </Link>
          <a href="tel:07769844298" className="text-white font-black text-xl md:text-2xl hover:text-[#4ade80] transition-colors italic">
            07769 844298
          </a>
        </div>
      </header>

      {/* Main Content */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* CONTACT HERO */}
        <header className="relative min-h-[70vh] md:min-h-[85vh] lg:min-h-screen flex items-center pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden bg-[#064e3b]">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=2000" alt="Contact us" className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale" loading="eager" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-transparent to-transparent" />
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 md:mb-8 inline-block animate-pulse">
                <span className="bg-orange-500 text-black px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] italic border-2 md:border-4 border-white shadow-2xl rounded-sm">Get In Touch</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-[7rem] lg:text-[9rem] font-black text-white leading-[0.85] mb-6 md:mb-8 tracking-tighter uppercase italic">
                READY TO<br/>
                <span className="text-[#4ade80]">CLEAR</span><br/>
                <span className="text-transparent stroke-text-light">OUT?</span>
              </h1>
              <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 font-bold leading-relaxed max-w-3xl mx-auto px-4">
                We respond to all enquiries within <span className="text-[#4ade80]">2 hours</span>. Available <span className="text-orange-500">7 days a week</span>.
              </p>

              {/* Quick Contact Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 justify-center px-4">
                <a href="tel:07769844298" className="bg-white text-[#064e3b] px-6 md:px-10 py-4 md:py-6 rounded-lg font-black text-base md:text-xl uppercase transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3 group">
                  <Phone size={20} className="group-hover:rotate-12 transition-transform md:w-6 md:h-6" /> <span className="text-sm md:text-xl">07769 844298</span>
                </a>
                <a href="https://wa.me/447769844298" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 md:px-10 py-4 md:py-6 rounded-lg font-black text-base md:text-xl uppercase transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  <span className="text-sm md:text-xl">WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* CONTACT INFO SECTION */}
        <section className="py-16 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
                <div className="bg-[#dcfce7] p-6 md:p-8 border-4 border-slate-900 rounded-xl md:rounded-2xl text-center shadow-[6px_6px_0px_#16a34a] md:shadow-[8px_8px_0px_#16a34a] hover:shadow-[8px_8px_0px_#16a34a] md:hover:shadow-[12px_12px_0px_#16a34a] transition-all hover:-translate-y-1 md:hover:-translate-y-2 group">
                  <Phone size={40} className="text-[#16a34a] mx-auto mb-3 md:mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform md:w-12 md:h-12" />
                  <h3 className="text-lg md:text-xl font-black uppercase italic mb-3 md:mb-4 text-slate-900 group-hover:text-[#16a34a] transition-colors">Phone</h3>
                  <a href="tel:07769844298" className="text-xl md:text-2xl font-black text-[#16a34a] hover:text-slate-900 transition-colors block">07769 844298</a>
                  <p className="text-xs md:text-sm text-slate-600 font-bold mt-2">Open 7am - 7pm Daily</p>
                </div>
                <div className="bg-[#dcfce7] p-6 md:p-8 border-4 border-slate-900 rounded-xl md:rounded-2xl text-center shadow-[6px_6px_0px_#16a34a] md:shadow-[8px_8px_0px_#16a34a] hover:shadow-[8px_8px_0px_#16a34a] md:hover:shadow-[12px_12px_0px_#16a34a] transition-all hover:-translate-y-1 md:hover:-translate-y-2 group">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 md:w-12 md:h-12 fill-current text-[#16a34a] mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  <h3 className="text-lg md:text-xl font-black uppercase italic mb-3 md:mb-4 text-slate-900 group-hover:text-[#16a34a] transition-colors">WhatsApp</h3>
                  <a href="https://wa.me/447769844298" target="_blank" rel="noopener noreferrer" className="text-xl md:text-2xl font-black text-[#16a34a] hover:text-slate-900 transition-colors block">Message Us</a>
                  <p className="text-xs md:text-sm text-slate-600 font-bold mt-2">Instant Photo Quotes</p>
                </div>
                <div className="bg-[#dcfce7] p-6 md:p-8 border-4 border-slate-900 rounded-xl md:rounded-2xl text-center shadow-[6px_6px_0px_#16a34a] md:shadow-[8px_8px_0px_#16a34a] hover:shadow-[8px_8px_0px_#16a34a] md:hover:shadow-[12px_12px_0px_#16a34a] transition-all hover:-translate-y-1 md:hover:-translate-y-2 group sm:col-span-2 lg:col-span-1">
                  <MapPin size={40} className="text-[#16a34a] mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform md:w-12 md:h-12" />
                  <h3 className="text-lg md:text-xl font-black uppercase italic mb-3 md:mb-4 text-slate-900 group-hover:text-[#16a34a] transition-colors">Service Area</h3>
                  <p className="text-base md:text-lg font-black text-slate-900">Berkshire & Surrey</p>
                  <p className="text-xs md:text-sm text-slate-600 font-bold mt-2">All Thames Valley</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <MapContact />
        <HomeQuote />
      </div>

      {/* Back to Home */}
      <div className="container mx-auto px-6 py-16 text-center">
        <Link to="/" className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#064e3b] text-white font-black uppercase px-8 py-4 rounded-xl transition-colors border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a]">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Contact;
