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
  const [quoteStep, setQuoteStep] = useState(1);

  // Performance-focused scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const towns = ["Reading", "Slough", "Guildford", "Woking", "Bracknell", "Windsor", "Ascot", "Egham", "Maidenhead", "Staines"];
  
  const stats = [
    { label: "Waste Recycled", value: "94%", icon: <Recycle size={20} /> },
    { label: "Response Time", value: "< 2hrs", icon: <Zap size={20} /> },
    { label: "Compliance", value: "100%", icon: <ShieldCheck size={20} /> },
    { label: "Liability", value: "£5M", icon: <Scale size={20} /> }
  ];

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Locations', href: '#locations' },
    { name: 'Compliance', href: '#compliance' },
    { name: 'Reviews', href: '#reviews' }
  ];

  return (
    <div className="min-h-screen bg-[#021a12] font-sans text-white selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
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
            <span className="text-[9px] font-black opacity-80 uppercase tracking-tighter">Live Response</span>
            <span className="text-sm font-black tracking-tight">WHATSAPP US</span>
          </div>
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* --- STABLE NAVIGATION BAR --- */}
      <nav 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ease-out will-change-transform transform-gpu ${
          isScrolled 
          ? 'bg-[#04140e]/95 backdrop-blur-xl border-b border-[#22c55e]/30 py-2 shadow-2xl' 
          : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="container mx-auto px-6 h-16 flex justify-between items-center transition-all duration-300">
          
          {/* Brand Logo Section */}
          <div className="flex items-center gap-4 shrink-0 group cursor-pointer">
            <div className="relative h-12 w-12 md:h-14 md:w-14 transition-transform group-hover:scale-110">
              <img 
                src="logo.webp" 
                alt="Total Waste Clearout Logo" 
                className="h-full w-full object-contain relative z-10" 
              />
              <div className="absolute inset-0 bg-[#22c55e] rounded-sm translate-x-1 translate-y-1 opacity-20 blur-sm" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-[1000] text-xl md:text-3xl tracking-tighter text-white uppercase italic">Total Waste</span>
              <span className="text-[#22c55e] font-black text-[9px] md:text-[10px] tracking-[.4em] uppercase">Clearout Ltd</span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center gap-10 font-black text-[11px] uppercase tracking-[0.2em]">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-[#22c55e] transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
              </a>
            ))}
            <div className="h-6 w-px bg-white/10" />
            <a 
              href="tel:08001234567" 
              className="bg-[#22c55e] hover:bg-white text-black px-8 py-3 rounded-sm flex items-center gap-3 transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:-translate-y-0.5 active:translate-y-0 font-black italic uppercase tracking-wider"
            >
              <Phone size={16} fill="black" /> 0800 123 4567
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="xl:hidden text-white p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div 
          className={`xl:hidden fixed inset-0 top-[72px] bg-[#021a12]/98 backdrop-blur-2xl transition-all duration-500 ease-in-out border-t border-white/10 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none translate-x-full'
          }`}
        >
          <div className="p-10 flex flex-col gap-8 font-black text-xl uppercase tracking-widest italic">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-[#22c55e] border-b border-white/5 pb-4 flex justify-between items-center"
              >
                {link.name} <ChevronRight size={20} className="text-[#22c55e]" />
              </a>
            ))}
            <a href="tel:08001234567" className="bg-[#22c55e] text-black p-6 text-center rounded-sm flex items-center justify-center gap-4">
               <Phone /> CALL 0800 123 4567
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="relative min-h-screen flex items-center pt-24 overflow-hidden">
        {/* Subtle Green Mesh Grid */}
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
                Live: Crews operative in Reading & Guildford Today
              </div>
              <h1 className="text-6xl md:text-[10rem] font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase italic">
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
                  className="bg-orange-500 hover:bg-orange-400 text-black px-12 py-6 rounded-sm font-black text-xl uppercase italic tracking-wider flex items-center gap-4 transition-all hover:-translate-y-1 shadow-[8px_8px_0px_rgba(34,197,94,1)] active:shadow-none active:translate-y-1"
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
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#22c55e]">4.9/5 Trustpilot Excellence</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block relative">
              <div className="absolute -inset-10 bg-[#22c55e]/10 rounded-full blur-[100px]" />
              <div className="relative border-4 border-[#22c55e]/20 p-4 rounded-3xl bg-[#0a2a1d]/50 backdrop-blur-3xl overflow-hidden group">
                 <img 
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80" 
                    className="w-full rounded-2xl grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    alt="Professional team"
                  />
                  <div className="absolute top-8 left-8 bg-[#22c55e] text-black px-4 py-1 font-black uppercase italic text-[10px] shadow-lg">Mobile Hub Ready</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- STATS BAR --- */}
      <section className="bg-[#22c55e] py-8 border-y-4 border-black relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s, idx) => (
              <div key={idx} className="flex items-center gap-5 text-black group">
                <div className="bg-black text-[#22c55e] p-3 rounded-sm group-hover:rotate-12 transition-transform border-2 border-black">{s.icon}</div>
                <div className="flex flex-col">
                  <span className="font-black text-3xl leading-none uppercase italic">{s.value}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest opacity-90 leading-tight">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES: TACTICAL ASYMMETRIC GRID --- */}
      <section id="services" className="py-32 bg-[#04140e] relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Massive Brand Block */}
            <div className="lg:col-span-6 bg-[#22c55e] p-12 md:p-20 flex flex-col justify-end min-h-[500px] border-4 border-black shadow-[15px_15px_0px_rgba(255,165,0,1)] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:translate-x-10 transition-transform duration-1000">
                <Truck size={300} className="text-black" />
              </div>
              <div className="relative z-10 text-black">
                <h2 className="text-black text-6xl md:text-[7rem] font-[1000] leading-[0.8] uppercase italic mb-8 tracking-tighter">TOTAL <br /> IMPACT.</h2>
                <p className="font-black text-xl max-w-sm mb-10 leading-relaxed italic">
                  Sustainable removal with a zero-waste target. Point at it, and it's gone.
                </p>
                <div className="flex gap-4">
                  <div className="bg-black text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest">Est. 2018</div>
                  <div className="bg-black text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest italic">Fully Licensed</div>
                </div>
              </div>
            </div>

            {/* Service: House Clearance */}
            <article className="lg:col-span-3 bg-white group overflow-hidden relative border-4 border-black h-[500px] cursor-pointer">
              <div className="absolute inset-0 bg-black/60 z-10 group-hover:bg-black/30 transition-all duration-500" />
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="Home interior" />
              <div className="relative z-20 p-10 h-full flex flex-col justify-between">
                <div className="bg-orange-500 text-black w-14 h-14 flex items-center justify-center font-black border-2 border-black text-xl">01</div>
                <div>
                  <h3 className="text-4xl font-[900] text-white uppercase italic group-hover:text-[#22c55e] transition-colors tracking-tighter">House Clearance</h3>
                  <p className="text-white/80 transition-all text-sm font-bold mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">From loft to cellar, we leave property spotless and ready.</p>
                </div>
              </div>
            </article>

            {/* Service: Commercial */}
            <article className="lg:col-span-3 bg-[#0a2a1d] border-4 border-black p-10 flex flex-col justify-between hover:border-[#22c55e] transition-all group h-[500px]">
              <div className="flex flex-col">
                <Briefcase size={60} className="text-[#22c55e] mb-8 group-hover:-rotate-6 transition-transform" />
                <span className="text-[#22c55e] font-black text-[11px] tracking-widest uppercase mb-2 block italic">Corporate Compliance</span>
                <h3 className="text-4xl font-[900] text-white uppercase italic mb-6 tracking-tighter leading-none">Office & Retail</h3>
              </div>
              <p className="text-slate-400 font-bold text-lg leading-relaxed group-hover:text-slate-200 italic">Data-safe WEEE disposal and full commercial rip-outs with Waste Transfer Notes.</p>
            </article>

            {/* Row 2: Builders Spans */}
            <article className="lg:col-span-5 bg-[#0a2a1d] border-4 border-black p-10 flex flex-col justify-between group hover:bg-orange-500 transition-all duration-700 cursor-pointer h-[400px]">
              <div className="flex justify-between items-start">
                <Construction size={54} className="text-[#22c55e] group-hover:text-black mb-4 transition-colors" />
                <div className="text-[10px] font-black uppercase text-slate-500 group-hover:text-black italic tracking-widest">Rapid Builders Waste removal</div>
              </div>
              <div>
                <h3 className="text-5xl font-[900] text-white group-hover:text-black uppercase italic mb-4 tracking-tighter">Construction Site</h3>
                <p className="text-slate-400 group-hover:text-black/80 font-bold text-lg max-w-md italic">
                  No skip permits needed. We load heavy rubble, timber, and plasterboard instantly. Avoid fly-tipping risk.
                </p>
              </div>
            </article>

            <article className="lg:col-span-7 bg-white text-black p-12 flex flex-col md:flex-row gap-12 items-center border-4 border-black group h-auto lg:h-[400px]">
              <div className="md:w-1/3 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#22c55e]/20 blur-2xl group-hover:bg-[#22c55e]/40 transition-all" />
                  <Leaf size={140} className="text-green-700 group-hover:rotate-12 transition-transform relative z-10" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-5xl font-[1000] uppercase italic mb-6 tracking-tighter">Exterior Waste</h3>
                <p className="text-slate-600 font-bold text-xl mb-8 italic leading-snug">
                  Garden clearance, shed dismantling, and soil disposal. Professional green recycling for Thames Valley homes.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Sheds', 'Green Waste', 'Soil', 'Paving'].map(tag => (
                    <div key={tag} className="bg-[#021a12] text-white px-5 py-2.5 text-[10px] font-black uppercase tracking-widest italic">{tag}</div>
                  ))}
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* --- SEO TICKER (GREEN THEME) --- */}
      <div className="bg-[#021a12] py-6 overflow-hidden border-y border-[#22c55e]/20 relative z-30">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="flex items-center mx-12 gap-5 group">
              <div className="w-2.5 h-2.5 bg-[#22c55e] rounded-full shadow-[0_0_15px_#22c55e] group-hover:scale-150 transition-transform" />
              <span className="text-sm font-[900] uppercase tracking-[0.4em] text-white/30 italic">
                {towns[i % towns.length]} <span className="text-[#22c55e] font-[1000]">OPERATIONS</span> • Environment Agency Verified
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --- COMPLIANCE / REVIEWS (GREEN) --- */}
      <section id="compliance" className="py-32 bg-[#021a12]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-[#22c55e] font-black uppercase tracking-[0.4em] text-xs mb-6 italic underline decoration-white">Thames Valley Compliance</h2>
              <p className="text-5xl md:text-7xl font-black text-white italic uppercase leading-[0.9] mb-12 tracking-tighter">Total Legal <br /> Security.</p>
              
              <div className="space-y-12 text-slate-300">
                <div className="flex gap-8 group">
                   <div className="bg-[#0a2a1d] p-6 rounded-2xl border border-white/5 group-hover:border-[#22c55e] transition-colors">
                    <ShieldCheck size={40} className="text-[#22c55e]" />
                   </div>
                   <div>
                    <h4 className="text-2xl font-black uppercase italic mb-2 tracking-tighter text-white">Full Duty of Care</h4>
                    <p className="font-bold max-w-sm">Every clearance is logged. You receive a digital Waste Transfer Note, protecting you from fly-tipping fines.</p>
                   </div>
                </div>
                <div className="flex gap-8 group">
                   <div className="bg-[#0a2a1d] p-6 rounded-2xl border border-white/5 group-hover:border-[#22c55e] transition-colors">
                    <Award size={40} className="text-[#22c55e]" />
                   </div>
                   <div>
                    <h4 className="text-2xl font-black uppercase italic mb-2 tracking-tighter text-white">Licensed Carrier</h4>
                    <p className="font-bold max-w-sm italic">Registered Waste Carrier (CBDU12345). Fully insured up to £5M Public Liability for complete peace of mind.</p>
                   </div>
                </div>
              </div>
            </div>

            <div id="reviews" className="bg-[#22c55e] p-12 md:p-20 rounded-[3rem] text-black border-8 border-black shadow-[20px_20px_0px_white]">
               <div className="flex items-center gap-4 mb-10">
                 <Users size={32} />
                 <span className="font-black uppercase tracking-widest text-xs italic underline">Verified Local Feedback</span>
               </div>
               <div className="relative">
                 <span className="text-9xl font-black absolute -top-10 -left-6 opacity-20 select-none">"</span>
                 <p className="text-3xl md:text-4xl font-black uppercase italic leading-[1.1] mb-10 relative z-10 tracking-tight">
                   "The best waste company in Berkshire. Same-day service, zero fuss, and much cheaper than the skip permit process."
                 </p>
                 <div className="flex items-center gap-6">
                   <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center font-black text-white italic border-2 border-[#021a12]">MS</div>
                   <div>
                     <p className="font-black uppercase text-sm tracking-widest">Mark Saunders</p>
                     <p className="font-bold opacity-60 text-xs uppercase italic tracking-wider">Homeowner, Wokingham</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- QUOTE HUB --- */}
      <section id="quote" className="py-32 bg-[#04140e] relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-white p-8 md:p-20 border-8 border-black shadow-[30px_30px_0px_rgba(34,197,94,1)] text-black relative">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-6xl md:text-[6.5rem] font-[1000] leading-[0.85] uppercase italic mb-10 tracking-tighter">
                  GET YOUR <br /> <span className="text-[#22c55e] underline decoration-black">FIXED</span> PRICE.
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#22c55e] rounded-full" />
                    <span className="font-black uppercase text-sm italic tracking-tight underline decoration-orange-500 decoration-2">Guaranteed Pricing - No Extras</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#22c55e] rounded-full" />
                    <span className="font-black uppercase text-sm italic tracking-tight">Available Weekends & Evenings</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-[#22c55e] rounded-full" />
                    <span className="font-black uppercase text-sm italic tracking-tight">Rapid Response Network</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-10 border-4 border-black rounded-lg">
                 <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                   <div className="grid md:grid-cols-2 gap-8">
                      <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Clearance Job</label>
                        <select className="w-full bg-white border-4 border-black p-5 font-black uppercase text-xs outline-none focus:border-[#22c55e] transition-all cursor-pointer">
                          <option>House Clear-out</option>
                          <option>Trade Waste</option>
                          <option>Office Disposal</option>
                          <option>Garden Clear</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Postcode</label>
                        <input type="text" placeholder="RG1 / SL1 / GU1" className="w-full bg-white border-4 border-black p-5 font-black uppercase text-xs outline-none focus:border-[#22c55e] transition-all" />
                      </div>
                   </div>
                   <div className="flex flex-col gap-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Phone</label>
                      <input type="tel" placeholder="07XXX XXXXXX" className="w-full bg-white border-4 border-black p-5 font-black uppercase text-xs outline-none focus:border-[#22c55e] transition-all" />
                   </div>
                   <button className="w-full bg-black text-white p-8 font-black uppercase tracking-widest italic text-2xl hover:bg-[#22c55e] hover:text-black transition-all shadow-xl active:translate-y-1">
                     Lock In My Fixed Price
                   </button>
                 </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER (GREEN BASE) --- */}
      <footer className="bg-[#021a12] pt-32 pb-12 border-t-8 border-[#22c55e]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-20 mb-24">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-10 group">
                <img 
                  src="logo.webp" 
                  alt="Total Waste Clearout Logo" 
                  className="w-16 h-16 object-contain group-hover:rotate-12 transition-transform" 
                />
                <div className="flex flex-col leading-none">
                  <span className="font-black text-4xl tracking-tighter text-white uppercase italic leading-none">Total Waste</span>
                  <span className="text-[#22c55e] font-black text-sm tracking-[.4em] uppercase">Clearout Ltd</span>
                </div>
              </div>
              <p className="text-slate-400 max-w-sm mb-12 font-bold italic leading-relaxed text-xl underline decoration-green-900">
                Premium disposal for the modern era. Sustainable, legally compliant, and aggressively fast.
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="bg-[#0a2a1d] border-2 border-white/5 px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-300">Carrier: CBDU12345</div>
                 <div className="bg-[#0a2a1d] border-2 border-white/5 px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-300 italic">Insurance: £5,000,000</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-10">
              <div className="flex flex-col gap-6">
                <h5 className="font-black text-[#22c55e] uppercase tracking-widest text-[10px] italic">Nav</h5>
                {navLinks.map(l => <a key={l.name} href={l.href} className="text-xs font-black uppercase tracking-widest hover:text-[#22c55e] transition-colors underline decoration-transparent hover:decoration-orange-500">{l.name}</a>)}
              </div>
              <div className="flex flex-col gap-6 font-black uppercase tracking-widest text-xs">
                <h5 className="text-[#22c55e] text-[10px] italic">Trust</h5>
                <a href="#" className="hover:text-white">Privacy</a>
                <a href="#" className="hover:text-white italic">Duty of Care</a>
                <a href="#" className="hover:text-white">Environment Agency</a>
              </div>
            </div>

            <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
               <h5 className="font-black text-[#22c55e] mb-8 uppercase tracking-[0.3em] text-[10px] italic">Emergency Hot-Line</h5>
               <a href="tel:08001234567" className="text-4xl md:text-6xl font-[1000] text-white hover:text-orange-500 transition-colors italic tracking-tighter leading-none">0800 123 4567</a>
               <p className="mt-8 text-slate-500 font-black uppercase text-[10px] tracking-widest">Berkshire • Surrey • Thames Valley</p>
               <div className="mt-4 flex gap-1 justify-end">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#22c55e] fill-current" />)}
               </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
            <p className="text-slate-700 text-[9px] font-black uppercase tracking-[0.4em] text-center md:text-left leading-relaxed">© 2026 TOTAL WASTE CLEAROUT LTD. COMPANY NO: 09876543. REGISTERED IN ENGLAND. HIGHEST RECYCLING RATES IN THE UK.</p>
            <div className="flex gap-4 items-center">
              <span className="text-white font-black text-[10px] uppercase tracking-widest italic opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Terms & Conditions</span>
              <span className="text-white font-black text-[10px] uppercase tracking-widest italic opacity-40 hover:opacity-100 transition-opacity cursor-pointer">Sitemap</span>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text { -webkit-text-stroke: 1px white; }
        @media (min-width: 768px) { .stroke-text { -webkit-text-stroke: 2px white; } }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 35s linear infinite; }
        html { scroll-behavior: smooth; }
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      `}} />

    </div>
  );
};

export default App;
