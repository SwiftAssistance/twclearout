import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { 
  Phone, 
  Trash2, 
  Truck, 
  Recycle, 
  CheckCircle, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Star, 
  Menu, 
  X, 
  ChevronLeft,
  ChevronRight, 
  ArrowRight,
  House, 
  Briefcase, 
  Leaf, 
  Construction, 
  Hammer, 
  Scale, 
  Zap, 
  Award, 
  Users, 
  Instagram, 
  Facebook, 
  Linkedin, 
  Quote, 
  ExternalLink
} from 'lucide-react';

// --- GLOBAL DATA & CONFIGURATION ---

const TOWNS = ["Reading", "Slough", "Guildford", "Woking", "Bracknell", "Windsor", "Ascot", "Egham", "Maidenhead", "Staines"];

const REVIEWS = [
  {
    name: "Mark Saunders",
    location: "Reading",
    initials: "MS",
    color: "bg-white text-slate-900",
    accent: "text-[#16a34a]",
    text: "The best waste company in Berkshire. Same-day service, zero fuss, and much cheaper than the skip permit process. Uniformed team were brilliant."
  },
  {
    name: "Sarah Jenkins",
    location: "Guildford",
    initials: "SJ",
    color: "bg-[#16a34a] text-white",
    accent: "text-white",
    text: "Cleared out my late father's property with such respect and speed. They recycled almost everything and provided a full audit note."
  },
  {
    name: "Dave Miller",
    location: "Woking",
    initials: "DM",
    color: "bg-white text-slate-900",
    accent: "text-[#16a34a]",
    text: "Used them for trade waste on a kitchen fit. Way faster than a skip and saved me the headache of council permits. Reliable and professional."
  },
  {
    name: "James Wilson",
    location: "Slough",
    initials: "JW",
    color: "bg-[#16a34a] text-white",
    accent: "text-white",
    text: "Total Waste Clearout is my go-to for commercial sites. They handle the compliance perfectly and the crews are incredibly hard-working."
  }
];

const STATS = [
  { label: "Waste Recycled", value: "94%", Icon: Recycle },
  { label: "Response Time", value: "< 2hrs", Icon: Zap },
  { label: "Compliance", value: "100%", Icon: ShieldCheck },
  { label: "Liability", value: "£5M", Icon: Scale }
];

// --- STABLE SUB-COMPONENTS (Defined outside App to prevent scroll-reset and re-mounting) ---

const ReviewCard = ({ review, idx }) => (
  <div className="w-full flex-shrink-0 px-2">
    {/* FIXED: Removed h-full from outer wrapper and fixed min-height for mobile. p-6 provides safe spacing. */}
    <div className={`p-6 sm:p-10 md:p-14 border-8 border-slate-900 rounded-[2rem] md:rounded-[3rem] shadow-[10px_10px_0px_#ecf3ef] md:shadow-[20px_20px_0px_#ecf3ef] flex flex-col relative overflow-hidden transition-all ${review.color} h-auto`}>
      <Quote className={`absolute -top-4 -left-4 w-16 md:w-32 opacity-10 ${review.accent}`} aria-hidden="true" />
      
      <div className="relative z-10 flex-grow text-left mb-6 md:mb-10">
        <div className="flex gap-0.5 mb-4">
          {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" className={review.accent} />)}
        </div>
        {/* FIXED: Text scaling (text-base sm:text-xl) ensures content stays on-screen */}
        <p className="text-base sm:text-xl md:text-3xl lg:text-4xl font-[1000] uppercase italic leading-tight md:leading-[1.2] tracking-tight text-balance">
          "{review.text}"
        </p>
      </div>

      <div className="flex items-center gap-4 pt-6 border-t border-current border-opacity-10 text-left">
        <div className={`w-10 md:w-16 h-10 md:h-16 rounded-full flex items-center justify-center font-[1000] border-2 md:border-4 border-slate-900 text-sm md:text-xl italic shrink-0 ${idx % 2 === 0 ? 'bg-[#16a34a] text-white' : 'bg-white text-[#16a34a]'}`}>{review.initials}</div>
        <div className="overflow-hidden">
          <p className="font-[1000] uppercase text-sm md:text-lg leading-none truncate">{review.name}</p>
          <p className="font-bold opacity-60 text-[10px] md:text-xs uppercase italic truncate mt-1">{review.location} • Verified Review</p>
        </div>
      </div>
    </div>
  </div>
);

const HomeHero = () => (
  <header className="relative min-h-[85vh] md:min-h-screen flex items-center pt-24 overflow-hidden bg-[#064e3b]">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=2000" alt="Removal logistics" className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-transparent to-transparent" />
    </div>
    <div className="container mx-auto px-6 relative z-10 text-left">
      <div className="max-w-5xl">
        <h1 className="text-5xl md:text-[8rem] lg:text-[10rem] font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase italic">WASTE <br /><span className="text-transparent stroke-text-light">VANISHED</span> <br /><span className="text-[#4ade80]">TODAY.</span></h1>
        <p className="text-lg md:text-3xl text-white/70 mb-12 max-w-2xl font-bold leading-tight italic text-balance">Premium waste removal for <span className="text-white border-b-4 border-orange-500">Berkshire & Surrey</span>. Fully licensed. Fixed pricing. Professional crews.</p>
        <div className="flex flex-wrap gap-4 md:gap-6">
          <a href="services.html" className="bg-orange-500 hover:bg-orange-400 text-black px-10 md:px-12 py-5 md:py-6 rounded-sm font-black text-lg md:text-xl uppercase italic tracking-wider transition-all hover:-translate-y-1 shadow-[8px_8px_0px_#022c22] active:shadow-none flex items-center">
            Explore Services <ArrowRight className="ml-2" size={24} />
          </a>
        </div>
      </div>
    </div>
  </header>
);

const HomeServices = () => (
  <section id="services" className="py-24 md:py-32 bg-white text-left text-slate-900 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900">Capabilities</h2>
        <p className="text-5xl md:text-7xl lg:text-8xl font-[1000] text-slate-900 italic uppercase leading-[0.9] tracking-tighter">OUR <br /> SERVICES.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 text-left">
        <div className="lg:col-span-7 bg-[#dcfce7] p-10 md:p-20 flex flex-col justify-end min-h-[400px] border-4 border-slate-900 shadow-[12px_12px_0px_#16a34a] relative overflow-hidden group">
          <Truck size={350} className="absolute top-0 right-0 p-10 opacity-5 text-black group-hover:translate-x-10 transition-transform duration-1000" />
          <h3 className="text-4xl md:text-6xl font-[1000] text-slate-900 uppercase italic mb-6 leading-none tracking-tight">Full Site <br /> Clear-outs</h3>
          <p className="font-bold text-lg md:text-xl text-slate-700 max-w-sm italic leading-relaxed text-balance text-left">Industrial warehouses and multi-floor office blocks. Professional logistical removal.</p>
        </div>

        <a href="services.html" className="lg:col-span-5 bg-[#064e3b] p-10 md:p-12 border-4 border-slate-900 flex flex-col justify-between shadow-xl text-white group cursor-pointer hover:border-[#4ade80] transition-colors">
          <Briefcase size={50} className="text-[#4ade80]" />
          <div>
            <h3 className="text-3xl md:text-4xl font-black uppercase italic mb-4 leading-tight text-white">Commercial <br /> Rip-outs</h3>
            <p className="text-white/70 font-bold italic text-lg leading-snug text-balance">Retail decommissioning with secure WEEE disposal notes and full audit trails.</p>
          </div>
        </a>

        <a href="services.html" className="lg:col-span-4 bg-slate-900 p-10 border-4 border-slate-900 flex flex-col justify-between text-white group hover:bg-orange-500 transition-all duration-500 cursor-pointer text-left">
           <Construction size={40} className="text-orange-500 group-hover:text-black transition-colors" />
           <div className="text-left text-white">
             <h4 className="text-3xl font-black uppercase italic mb-2 leading-none">Trade Waste</h4>
             <p className="text-white/50 group-hover:text-black/70 font-bold italic text-sm leading-tight">Skip-alternative for builders. Rubble and timber cleared instantly.</p>
           </div>
        </a>

        <article className="lg:col-span-8 bg-[#ecf3ef] border-4 border-slate-900 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 shadow-lg">
          <div className="md:w-1/2 text-left order-2 md:order-1">
            <h4 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic leading-none mb-6">Exterior <br /> Recovery.</h4>
            <p className="text-slate-600 font-bold italic text-lg mb-8 leading-snug text-balance">Garden clearing, shed demolition, and soil removal. Site-ready for landscaping.</p>
            <div className="flex flex-wrap gap-2">
              {['Sheds', 'Green Waste', 'Soil'].map(t => <span key={t} className="bg-white border-2 border-slate-900 px-4 py-1 text-[10px] font-black uppercase tracking-widest italic">{t}</span>)}
            </div>
          </div>
          <div className="md:w-1/2 overflow-hidden rounded-lg border-2 border-slate-900 h-64 w-full order-1 md:order-2">
            <img src="https://images.unsplash.com/photo-1591336395884-633009a05531?auto=format&fit=crop&q=80" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Garden and outdoor waste clearance" loading="lazy" />
          </div>
        </article>
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
               <div className="grid md:grid-cols-2 gap-8"><div><label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Job Description</label><select className="w-full bg-white border-4 border-slate-900 p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#16a34a] appearance-none cursor-pointer"><option>End of Tenancy Clearance</option><option>Construction Waste Hub</option><option>Garden Clear-out</option><option>Office Removal</option></select></div><div><label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Postcode Area</label><input type="text" placeholder="e.g. RG1" className="w-full bg-white border-4 border-slate-900 p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#16a34a]" /></div></div>
               <div><label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Phone Number</label><input type="tel" placeholder="07xxx xxxxxx" className="w-full bg-white border-4 border-slate-900 p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#16a34a]" /></div>
               <button type="submit" className="w-full bg-slate-900 text-white p-6 md:p-8 font-black uppercase tracking-widest italic text-xl md:text-2xl hover:bg-[#16a34a] transition-all shadow-xl active:scale-95">Lock In Fixed Price</button>
             </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// --- MAIN APPLICATION ---

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState('home'); 
  const [currentReview, setCurrentReview] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Logic: Stability & Scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      if (scrolled !== isScrolled) setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [currentView]);

  const nextReview = useCallback(() => setCurrentReview((prev) => (prev + 1) % REVIEWS.length), []);
  const prevReview = useCallback(() => setCurrentReview((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length), []);

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextReview();
    if (distance < -50) prevReview();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const ReviewsSection = ({ title = "CLIENTS TALK." }) => (
    <section id="reviews" className="py-24 md:py-32 bg-[#f8fafc] overflow-hidden text-left">
      <div className="container mx-auto px-6 text-left">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-start text-left">
          <div className="lg:col-span-4 text-left text-slate-900 text-left">
            <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900 text-left">Proven Trust</h2>
            <p className="text-5xl md:text-8xl font-black text-slate-900 italic uppercase leading-[0.85] mb-12 tracking-tighter text-left">{title}</p>
            <div className="hidden lg:flex items-center gap-4 mb-12 relative z-[60] text-left">
               <button type="button" onClick={prevReview} aria-label="Previous review" className="w-14 h-14 border-4 border-slate-900 rounded-full flex items-center justify-center bg-white hover:bg-[#16a34a] hover:text-white transition-all text-slate-900 active:scale-90 shadow-md cursor-pointer pointer-events-auto">
                 <ChevronLeft size={28} />
               </button>
               <button type="button" onClick={nextReview} aria-label="Next review" className="w-14 h-14 border-4 border-slate-900 rounded-full flex items-center justify-center bg-white hover:bg-[#16a34a] hover:text-white transition-all text-slate-900 active:scale-90 shadow-md cursor-pointer pointer-events-auto">
                 <ChevronRight size={28} />
               </button>
            </div>
            <p className="lg:hidden text-[10px] font-black uppercase tracking-widest text-[#16a34a] italic mb-6 text-left">← Swipe reviews →</p>
          </div>
          
          <div className="lg:col-span-8 relative">
            {/* FIXED: strict overflow-hidden masks previous cards correctly */}
            <div className="relative overflow-hidden touch-pan-y" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
              <div className="flex flex-nowrap transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]" style={{ transform: `translateX(-${currentReview * 100}%)` }}>
                {REVIEWS.map((review, idx) => (
                  <ReviewCard key={`rev-${idx}`} review={review} idx={idx} />
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-start gap-4 mt-12 px-4 text-left">
                {REVIEWS.map((_, idx) => (
                  <button key={`dot-${idx}`} aria-label={`Slide ${idx+1}`} onClick={() => setCurrentReview(idx)} className={`h-3 transition-all duration-500 rounded-full border-2 border-slate-900 ${idx === currentReview ? 'w-12 bg-[#16a34a]' : 'w-3 bg-slate-200'}`} />
                ))}
              </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      {/* WHATSAPP FLOAT */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 pointer-events-none text-slate-900">
        <div role="status" className="bg-white text-black px-4 py-2 rounded-lg text-[10px] font-[900] shadow-2xl animate-bounce hidden md:block border-2 border-[#16a34a] pointer-events-auto select-none uppercase tracking-tighter">SNAP A PHOTO FOR A QUOTE!</div>
        <a href="https://wa.me/447000000000" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white p-5 rounded-2xl shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all hover:scale-110 active:scale-95 group flex items-center gap-4 border-2 border-white/20 pointer-events-auto"><div className="flex flex-col items-end leading-none text-white text-right"><span className="text-[9px] font-black opacity-80 uppercase tracking-tighter text-white text-right">Live Response</span><span className="text-sm font-black tracking-tight text-white text-right">WHATSAPP US</span></div><svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg></a>
      </div>

      {/* NAVIGATION */}
      <nav role="navigation" className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 transform-gpu ${isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md py-3' : 'bg-[#064e3b] py-4 md:py-6'}`}>
        <div className="container mx-auto px-6 h-16 flex justify-between items-center relative">
          <button onClick={() => setCurrentView('home')} className="flex items-center gap-3 md:gap-4 shrink-0 group text-left"><div className="relative h-10 w-10 md:h-14 md:w-14 transition-transform group-hover:scale-105"><img src="logo.webp" alt="Logo" className="h-full w-full object-contain relative z-10" loading="eager" /></div><div className="flex flex-col leading-none text-left"><span className={`font-[1000] text-lg md:text-3xl tracking-tighter uppercase italic transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>Total Waste</span><span className="text-[#4ade80] font-black text-[8px] md:text-[10px] tracking-[.3em] md:tracking-[.4em] uppercase text-left text-balance text-left text-left text-left">Clearout Ltd</span></div></button>
          <div className={`hidden xl:flex items-center gap-8 font-black text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}>
            <button onClick={() => setCurrentView('home')} className={`transition-all relative group py-2 ${currentView === 'home' ? 'text-[#16a34a]' : 'hover:text-[#16a34a]'}`}>Home<span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${currentView === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`} /></button>
            <a href="services.html" className="transition-all relative group py-2 hover:text-[#16a34a]">Services<span className="absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 w-0 group-hover:w-full" /></a>
            <button onClick={() => setCurrentView('reviews')} className={`transition-all relative group py-2 ${currentView === 'reviews' ? 'text-[#16a34a]' : 'hover:text-[#16a34a]'}`}>Reviews<span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${currentView === 'reviews' ? 'w-full' : 'w-0 group-hover:w-full'}`} /></button>
            <div className="h-6 w-px bg-white/20 mx-2" /><a href="tel:08001234567" className="bg-[#16a34a] hover:bg-slate-900 text-white px-6 py-3 rounded-sm flex items-center gap-3 transition-all shadow-md font-black italic uppercase tracking-wider"><Phone size={16} fill="white" /> 0800 123 4567</a>
          </div>
          <button className={`xl:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
        <div className={`xl:hidden fixed left-0 w-full bg-white transition-all duration-500 ease-in-out transform-gpu border-t border-slate-100 shadow-2xl overflow-y-auto ${isMenuOpen ? 'translate-y-0 opacity-100 visible h-[calc(100vh-80px)]' : '-translate-y-full opacity-0 invisible h-0'}`} style={{ top: '80px' }}>
          <div className="p-8 flex flex-col h-full overflow-y-auto text-left text-slate-900">
            <div className="flex flex-col gap-6 font-black text-xl uppercase tracking-widest italic text-slate-900 mb-12">
              <button key="m-home" onClick={() => setCurrentView('home')} className={`border-b border-slate-100 pb-4 flex justify-between items-center ${currentView === 'home' ? 'text-[#16a34a]' : ''}`}>Home <ChevronRight size={24} className={currentView === 'home' ? 'text-[#16a34a]' : 'text-slate-200'} /></button>
              <a key="m-serv" href="services.html" className="border-b border-slate-100 pb-4 flex justify-between items-center hover:text-[#16a34a]">Services <ChevronRight size={24} className="text-slate-200" /></a>
              <button key="m-rev" onClick={() => setCurrentView('reviews')} className={`border-b border-slate-100 pb-4 flex justify-between items-center ${currentView === 'reviews' ? 'text-[#16a34a]' : ''}`}>Reviews <ChevronRight size={24} className={currentView === 'reviews' ? 'text-[#16a34a]' : 'text-slate-200'} /></button>
            </div>
            <div className="mt-auto space-y-6 text-center pb-12"><a href="tel:08001234567" className="bg-[#16a34a] text-white w-full p-6 text-center rounded-sm flex items-center justify-center gap-4 font-black italic text-xl uppercase shadow-lg"><Phone fill="white" /> CALL 0800 123 4567</a></div>
          </div>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="relative min-h-[70vh] text-left text-slate-900">
        {currentView === 'home' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-slate-900 text-left">
            <HomeHero />
            {/* STATS STRIP */}
            <section className="bg-[#16a34a] py-6 border-y-4 border-black relative z-20 shadow-xl">
              <div className="container mx-auto px-6 text-left text-white">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                  {STATS.map((s, idx) => (<div key={`stat-${idx}`} className="flex items-center gap-3 md:gap-5 text-white"><div className="bg-[#064e3b] text-[#4ade80] p-2 md:p-3 rounded-sm shrink-0 shadow-sm"><s.Icon size={20} /></div><div className="flex flex-col"><span className="text-xl md:text-3xl font-black uppercase italic leading-none">{s.value}</span><span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-80">{s.label}</span></div></div>))}
                </div>
              </div>
            </section>
            <HomeServices />
            <ReviewsSection title="CLIENTS TALK." />
            <HomeQuote />
          </div>
        )}

        {currentView === 'reviews' && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-slate-900 text-left">
            <ReviewsSection title="VERIFIED REVIEWS." />
            <HomeQuote />
          </div>
        )}
      </main>

      {/* FOOTER */}
      <footer className="bg-[#064e3b] pt-24 pb-12 border-t-8 border-[#4ade80] text-white text-left">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 mb-20">
            <div className="lg:col-span-5 space-y-8">
              <button onClick={() => setCurrentView('home')} className="flex items-center gap-4 group cursor-pointer"><img src="logo.webp" alt="Logo" className="w-16 h-16 object-contain group-hover:rotate-12 transition-transform" loading="lazy" /><div className="flex flex-col leading-none"><span className="font-black text-3xl md:text-4xl tracking-tighter uppercase italic leading-none text-white">Total Waste</span><span className="text-[#4ade80] font-black text-sm tracking-[.4em] uppercase">Clearout Ltd</span></div></button>
              <p className="text-white/60 max-w-sm font-bold italic text-lg leading-relaxed underline decoration-white/5 text-balance">Berkshire & Surrey's premier disposal service. 94% recycling rate and fully licensed for every clearance.</p>
              <div className="flex flex-wrap gap-4"><div className="bg-white/5 border-2 border-white/10 px-6 py-4 text-[10px] font-black uppercase tracking-widest text-white/60 italic flex items-center gap-2 shadow-sm"><ShieldCheck size={14} className="text-[#4ade80]" aria-hidden="true" /> Registered Carrier</div></div>
            </div>
            <div className="lg:col-span-3 space-y-8">
              <h5 className="font-black text-[#4ade80] uppercase tracking-[0.3em] text-xs italic border-l-4 border-[#4ade80] pl-4 leading-none">Job Matrix</h5>
              <ul className="space-y-4 font-black text-sm uppercase tracking-widest italic text-white/50">{['End of Tenancy Clearance', 'Construction Waste Hub', 'Garden & Green Waste', 'Commercial Site Rip-outs', 'House & Probate Clearance', 'Garage & Shed Demolition'].map(service => (<li key={service}><a href="services.html" className="hover:text-white hover:translate-x-2 transition-all flex items-center gap-2 leading-tight text-balance text-white">{service}</a></li>))}</ul>
            </div>
            <div className="lg:col-span-4 space-y-10 flex flex-col items-start lg:items-end text-left lg:text-right">
               <div className="space-y-3"><h5 className="font-black text-[#4ade80] uppercase tracking-[0.3em] text-xs italic">Emergency Line</h5><a href="tel:08001234567" className="text-4xl md:text-5xl lg:text-6xl font-[1000] text-white hover:text-orange-500 transition-colors italic tracking-tighter leading-none block">0800 123 4567</a><div className="flex gap-2 lg:justify-end items-center text-balance"><span className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse" /><span className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Open 7am — 7pm Daily</span></div></div>
               <div className="pt-2 flex gap-4 lg:justify-end"><a href="https://www.instagram.com/totalwasteclearout" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#4ade80] transition-colors hover:text-black shadow-sm group"><Instagram size={24} className="group-hover:scale-110 transition-transform" /></a><a href="https://www.facebook.com/totalwasteclearout" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#4ade80] transition-colors hover:text-black shadow-sm group"><Facebook size={24} className="group-hover:scale-110 transition-transform" /></a></div>
            </div>
          </div>
          <div className="border-t border-white/5 py-12"><h5 className="font-black text-[#4ade80] uppercase tracking-[0.3em] text-[10px] italic mb-8 text-center text-balance">Priority Thames Valley corridor</h5><div className="grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-8 text-center">{TOWNS.map(t => (<button key={`town-f-${t}`} onClick={() => setCurrentView('home')} className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-[#4ade80] transition-colors italic flex items-center justify-center gap-2"><MapPin size={10} /> {t}</button>))}</div></div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"><p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em] text-center md:text-left leading-relaxed text-balance">© 2026 TOTAL WASTE CLEAROUT LTD. REGISTERED IN ENGLAND & WALES. CO NO: 09876543.</p><div className="flex flex-wrap gap-6 items-center text-white/40 font-black uppercase tracking-widest italic text-[10px]">{['Privacy Policy', 'Cookie Usage', 'Legal'].map(item => (<button key={`foot-leg-${item}`} onClick={() => setCurrentView('home')} className="hover:text-[#4ade80] transition-colors uppercase">{item}</button>))}<div className="hidden md:flex gap-1" aria-hidden="true">{[...Array(5)].map((_, i) => <Star key={`foot-star-${i}`} size={12} className="text-[#4ade80] fill-current" />)}</div></div></div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text-light { -webkit-text-stroke: 1px rgba(255,255,255,0.4); }
        .stroke-text-dark { -webkit-text-stroke: 1px #0f172a; }
        @media (min-width: 768px) { .stroke-text-light { -webkit-text-stroke: 2px rgba(255,255,255,0.4); } .stroke-text-dark { -webkit-text-stroke: 2px #0f172a; } }
        html { scroll-behavior: smooth; }
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        .text-balance { text-wrap: balance; }
        .transition-transform { transition-property: transform; }
        .ease-[cubic-bezier(0.23,1,0.32,1)] { transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1); }
      `}} />

    </div>
  );
};

export default App;
