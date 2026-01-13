import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  Users
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [quoteStep, setQuoteStep] = useState(1);

  // 1. STABLE SCROLL DETECTION
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. SCROLL SPY (SELECTION LOGIC)
  useEffect(() => {
    const sections = ['services', 'locations', 'compliance', 'reviews', 'quote'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -20% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // 3. PREVENT BACKGROUND SCROLL WHEN MENU OPEN
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const towns = ["Reading", "Slough", "Guildford", "Woking", "Bracknell", "Windsor", "Ascot", "Egham", "Maidenhead", "Staines"];
  
  const stats = [
    { label: "Waste Recycled", value: "94%", icon: <Recycle size={20} /> },
    { label: "Response Time", value: "< 2hrs", icon: <Zap size={20} /> },
    { label: "Compliance", value: "100%", icon: <ShieldCheck size={20} /> },
    { label: "Liability", value: "£5M", icon: <Scale size={20} /> }
  ];

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Locations', href: '#locations', id: 'locations' },
    { name: 'Compliance', href: '#compliance', id: 'compliance' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      {/* --- WHATSAPP HUB (BOTTOM RIGHT) --- */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 pointer-events-none">
        <div className="bg-white text-black px-4 py-2 rounded-lg text-[10px] font-[900] shadow-2xl animate-bounce hidden md:block border-2 border-[#22c55e] pointer-events-auto select-none uppercase tracking-tighter">
          SNAP A PHOTO FOR A QUOTE!
        </div>
        <a 
          href="https://wa.me/447000000000" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white p-5 rounded-2xl shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all hover:scale-110 active:scale-95 group flex items-center gap-4 border-2 border-white/20 pointer-events-auto"
        >
          <div className="flex flex-col items-end leading-none">
            <span className="text-[9px] font-black opacity-80 uppercase tracking-tighter text-white">Live Response</span>
            <span className="text-sm font-black tracking-tight text-white">WHATSAPP US</span>
          </div>
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* --- BULLETPROOF NAVIGATION BAR --- */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 transform-gpu ${
          isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md' 
          : 'bg-[#021a12]'
        }`}
      >
        {/* Inner container with FIXED HEIGHT to prevent layout jumps */}
        <div className="container mx-auto px-6 h-20 md:h-24 flex justify-between items-center relative">
          
          {/* Brand Logo Section */}
          <a href="#" className="flex items-center gap-3 md:gap-4 shrink-0 group">
            <div className="relative h-10 w-10 md:h-14 md:w-14 transition-transform group-hover:scale-105">
              <img 
                src="logo.webp" 
                alt="Total Waste Clearout Logo" 
                className="h-full w-full object-contain relative z-10" 
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-[1000] text-lg md:text-3xl tracking-tighter uppercase italic transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>Total Waste</span>
              <span className="text-[#22c55e] font-black text-[8px] md:text-[10px] tracking-[.3em] md:tracking-[.4em] uppercase">Clearout Ltd</span>
            </div>
          </a>

          {/* Desktop Navigation Links (SCROLL SPY ENABLED) */}
          <div className={`hidden xl:flex items-center gap-8 font-black text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${isScrolled ? 'text-slate-600' : 'text-slate-200'}`}>
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={link.href} 
                className={`transition-all relative group py-2 ${activeSection === link.id ? 'text-[#22c55e]' : 'hover:text-[#22c55e]'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            ))}
            <div className="h-6 w-px bg-slate-400 opacity-20 mx-2" />
            <a 
              href="tel:08001234567" 
              className="bg-[#22c55e] hover:bg-slate-900 hover:text-white text-black px-6 py-3 rounded-sm flex items-center gap-3 transition-all shadow-md font-black italic uppercase tracking-wider"
            >
              <Phone size={16} fill="black" /> 0800 123 4567
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`xl:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN - LOCKED TO THE BOTTOM OF THE HEADER */}
        <div 
          className={`xl:hidden fixed left-0 w-full bg-white transition-all duration-500 ease-in-out transform-gpu border-t border-slate-100 shadow-2xl overflow-y-auto ${
            isMenuOpen 
            ? 'translate-y-0 opacity-100 visible h-[calc(100vh-80px)] md:h-[calc(100vh-96px)]' 
            : '-translate-y-full opacity-0 invisible h-0'
          }`}
          style={{ top: isScrolled ? '80px' : '80px' }} // Dynamic top would match h-20/h-24
        >
          <div className="p-8 md:p-12 flex flex-col h-full">
            <div className="flex flex-col gap-6 font-black text-xl md:text-2xl uppercase tracking-widest italic text-slate-900 mb-12">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`border-b border-slate-100 pb-4 flex justify-between items-center transition-colors ${activeSection === link.id ? 'text-[#22c55e]' : 'active:text-[#22c55e]'}`}
                >
                  {link.name} <ChevronRight size={24} className={activeSection === link.id ? 'text-[#22c55e]' : 'text-slate-200'} />
                </a>
              ))}
            </div>

            <div className="mt-auto space-y-6">
              <a href="tel:08001234567" className="bg-[#22c55e] text-black w-full p-6 text-center rounded-sm flex items-center justify-center gap-4 font-black italic text-xl uppercase shadow-lg">
                <Phone fill="black" /> CALL 0800 123 4567
              </a>
              <div className="flex flex-col items-center gap-4 py-6 border-t border-slate-100">
                <div className="flex gap-1 text-orange-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Environment Agency Licensed Carrier</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#021a12]">
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="green-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#22c55e" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#green-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-3 bg-[#0a2a1d] border border-[#22c55e]/40 px-5 py-2.5 rounded-sm text-[10px] md:text-[11px] font-black text-[#22c55e] mb-8 tracking-[.25em] uppercase italic">
                <div className="w-2 h-2 bg-[#22c55e] rounded-full animate-ping shadow-[0_0_10px_#22c55e]" />
                Live: Crews operative in Thames Valley Today
              </div>
              <h1 className="text-6xl md:text-[9rem] font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase italic">
                WASTE <br />
                <span className="text-transparent stroke-text">VANISHED</span> <br />
                <span className="text-[#22c55e]">TODAY.</span>
              </h1>
              <p className="text-xl md:text-3xl text-slate-300 mb-12 max-w-2xl font-bold leading-tight">
                Elite waste removal for <span className="text-white border-b-4 border-orange-500 italic">Berkshire & Surrey</span>. Fully licensed. Fixed pricing. Professional crews.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <a 
                  href="#quote" 
                  className="bg-orange-500 hover:bg-orange-400 text-black px-12 py-6 rounded-sm font-black text-xl uppercase italic tracking-wider flex items-center gap-4 transition-all hover:-translate-y-1 shadow-[8px_8px_0px_rgba(34,197,94,1)]"
                >
                  Clear My Waste <ArrowRight size={24} />
                </a>
                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <img 
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i+14}`} 
                        className="w-12 h-12 rounded-full border-2 border-black bg-slate-800"
                        alt="Customer"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col leading-none">
                    <div className="flex gap-0.5 text-orange-500 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">4.9/5 Local Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- STATS BAR --- */}
      <section className="bg-[#22c55e] py-8 border-y-4 border-black relative z-20">
        <div className="container mx-auto px-6 text-black">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s, idx) => (
              <div key={idx} className="flex items-center gap-4 md:gap-5">
                <div className="bg-black text-[#22c55e] p-2 md:p-3 rounded-sm shrink-0">{s.icon}</div>
                <div className="flex flex-col">
                  <span className="font-black text-2xl md:text-3xl leading-none uppercase italic">{s.value}</span>
                  <span className="text-[9px] md:text-[10px] font-black uppercase tracking-widest opacity-90 leading-tight">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-32 bg-slate-50 relative border-b border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-slate-900">
            <div className="lg:col-span-6 bg-[#22c55e] p-12 md:p-20 flex flex-col justify-end min-h-[400px] md:min-h-[500px] border-4 border-black shadow-[15px_15px_0px_rgba(255,165,0,1)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:translate-x-10 transition-transform duration-1000">
                <Truck size={300} className="text-black" />
              </div>
              <div className="relative z-10 text-black">
                <h2 className="text-black text-5xl md:text-[7rem] font-[1000] leading-[0.8] uppercase italic mb-8 tracking-tighter">TOTAL <br /> IMPACT.</h2>
                <p className="font-black text-lg md:text-xl max-w-sm mb-10 leading-relaxed italic">Point at it, and it's gone. Same-day professional clearance.</p>
                <div className="flex gap-4">
                  <div className="bg-black text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest italic">Fully Licensed</div>
                </div>
              </div>
            </div>

            <article className="lg:col-span-3 bg-white group overflow-hidden relative border-4 border-black h-[400px] md:h-[500px] cursor-pointer shadow-lg">
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-all duration-500" />
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="House" />
              <div className="relative z-20 p-8 h-full flex flex-col justify-between">
                <div className="bg-orange-500 text-black w-12 md:w-14 h-12 md:h-14 flex items-center justify-center font-black border-2 border-black text-xl">01</div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-[900] text-white uppercase italic group-hover:text-[#22c55e] transition-colors">Property Clearances</h3>
                  <p className="text-white text-sm font-bold mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">Homes, flats, and probate clears.</p>
                </div>
              </div>
            </article>

            <article className="lg:col-span-3 bg-white border-4 border-black p-8 md:p-10 flex flex-col justify-between hover:border-[#22c55e] transition-all h-[400px] md:h-[500px] shadow-lg">
              <Briefcase size={60} className="text-[#22c55e] mb-8" />
              <div>
                <span className="text-slate-400 font-black text-[11px] tracking-widest uppercase mb-2 block italic">B2B Compliance</span>
                <h3 className="text-3xl md:text-4xl font-[900] text-slate-900 uppercase italic mb-6 tracking-tighter leading-none">Office & Retail</h3>
                <p className="text-slate-600 font-bold text-lg leading-relaxed italic">Fast commercial rip-outs.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* --- LOCATIONS --- */}
      <section id="locations" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <h3 className="text-3xl font-black uppercase italic shrink-0 underline decoration-[#22c55e]">Coverage <span className="text-[#22c55e]">Map</span></h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 md:gap-x-12 gap-y-6">
              {towns.map(t => (
                <div key={t} className="flex items-center gap-3">
                   <MapPin size={16} className="text-[#22c55e]" />
                   <span className="text-[10px] md:text-xs font-black uppercase tracking-widest text-slate-400">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPLIANCE --- */}
      <section id="compliance" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-[#22c55e] font-black uppercase tracking-[0.4em] text-xs mb-6 italic underline">Audit & Duty of Care</h2>
              <p className="text-5xl md:text-7xl font-black text-slate-900 italic uppercase leading-[0.9] mb-12 tracking-tighter">Total Legal <br /> Safety.</p>
              <div className="space-y-12 text-slate-600">
                <div className="flex gap-8 group">
                   <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 group-hover:border-[#22c55e] transition-colors">
                    <ShieldCheck size={40} className="text-[#22c55e]" />
                   </div>
                   <div>
                    <h4 className="text-2xl font-black uppercase italic mb-2 tracking-tighter text-slate-900">Full Audit Trail</h4>
                    <p className="font-bold max-w-sm">Every clearance receives a digital Waste Transfer Note.</p>
                   </div>
                </div>
              </div>
            </div>

            <div id="reviews" className="bg-[#22c55e] p-10 md:p-20 rounded-[2rem] md:rounded-[3rem] text-black border-8 border-black shadow-[20px_20px_0px_white]">
               <Users size={32} className="mb-10" />
               <p className="text-2xl md:text-4xl font-black uppercase italic leading-[1.1] mb-10 tracking-tight">
                 "The best waste company in Berkshire. Same-day service, zero fuss, and much cheaper than a skip permit."
               </p>
               <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center font-black text-white italic">MS</div>
                 <p className="font-black uppercase text-sm tracking-widest leading-none">Mark Saunders • Reading</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUOTE HUB --- */}
      <section id="quote" className="py-32 bg-slate-50 relative overflow-hidden border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="bg-white p-8 md:p-20 border-8 border-black shadow-[15px_15px_0px_#22c55e] md:shadow-[30px_30px_0px_#22c55e] text-black relative">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <h2 className="text-5xl md:text-[6.5rem] font-[1000] leading-[0.85] uppercase italic tracking-tighter">
                GET YOUR <br /> <span className="text-[#22c55e] underline decoration-black">FIXED</span> PRICE.
              </h2>
              <div className="bg-slate-50 p-6 md:p-10 border-4 border-black rounded-lg">
                 <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                   <div className="grid md:grid-cols-2 gap-8">
                      <select className="w-full bg-white border-4 border-black p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#22c55e] appearance-none cursor-pointer">
                        <option>House Clear-out</option>
                        <option>Trade Waste</option>
                      </select>
                      <input type="text" placeholder="Postcode" className="w-full bg-white border-4 border-black p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#22c55e]" />
                   </div>
                   <input type="tel" placeholder="Mobile" className="w-full bg-white border-4 border-black p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#22c55e]" />
                   <button className="w-full bg-black text-white p-6 md:p-8 font-black uppercase tracking-widest italic text-xl md:text-2xl hover:bg-[#22c55e] hover:text-black transition-all">
                     Lock In Fixed Price
                   </button>
                 </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#021a12] pt-32 pb-12 border-t-8 border-[#22c55e]">
        <div className="container mx-auto px-6 text-white">
          <div className="grid lg:grid-cols-4 gap-20 mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <img src="logo.webp" alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
                <div className="flex flex-col leading-none">
                  <span className="font-black text-2xl md:text-4xl tracking-tighter uppercase italic leading-none">Total Waste</span>
                  <span className="text-[#22c55e] font-black text-[10px] md:text-sm tracking-[.3em] md:tracking-[.4em] uppercase">Clearout Ltd</span>
                </div>
              </div>
              <p className="text-slate-400 max-w-sm mb-12 font-bold italic leading-relaxed text-xl underline decoration-green-900">Sustainable, legally compliant, and fast.</p>
              <div className="flex flex-wrap gap-4">
                 <div className="bg-[#0a2a1d] border-2 border-white/5 px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-300 italic">Licensed Carrier</div>
                 <div className="bg-[#0a2a1d] border-2 border-white/5 px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-300 italic">Insured £5M</div>
              </div>
            </div>
            <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
               <h5 className="font-black text-[#22c55e] mb-8 uppercase tracking-[0.3em] text-[10px] italic leading-none">Emergency Line</h5>
               <a href="tel:08001234567" className="text-4xl md:text-6xl font-[1000] text-white hover:text-orange-500 transition-colors italic tracking-tighter leading-none">0800 123 4567</a>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text { -webkit-text-stroke: 1px white; }
        @media (min-width: 768px) { .stroke-text { -webkit-text-stroke: 2px white; } }
        html { scroll-behavior: smooth; }
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      `}} />

    </div>
  );
};

export default App;
