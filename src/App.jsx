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
  ShieldAlert,
  ExternalLink
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [quoteStep, setQuoteStep] = useState(1);
  
  // Review Carousel State
  const [currentReview, setCurrentReview] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const reviewsData = [
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
      text: "Cleared out my late father's property with such respect and speed. They recycled almost everything and provided a full audit note for the estate."
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

  const nextReview = useCallback(() => {
    setCurrentReview((prev) => (prev === reviewsData.length - 1 ? 0 : prev + 1));
  }, [reviewsData.length]);

  const prevReview = useCallback(() => {
    setCurrentReview((prev) => (prev === 0 ? reviewsData.length - 1 : prev - 1));
  }, [reviewsData.length]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) nextReview();
    if (isRightSwipe) prevReview();

    setTouchStart(null);
    setTouchEnd(null);
  };

  // 1. PERFORMANCE: DEBOUNCED SCROLL
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 2. ACCESSIBILITY: SCROLL SPY
  useEffect(() => {
    const sections = ['home', 'services', 'locations', 'compliance', 'reviews', 'quote'];
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px',
      threshold: 0
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
    { label: "Waste Recycled", value: "94%", icon: <Recycle size={20} aria-hidden="true" /> },
    { label: "Response Time", value: "< 2hrs", icon: <Zap size={20} aria-hidden="true" /> },
    { label: "Compliance", value: "100%", icon: <ShieldCheck size={20} aria-hidden="true" /> },
    { label: "Liability", value: "£5M", icon: <Scale size={20} aria-hidden="true" /> }
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
        <div role="status" className="bg-white text-black px-4 py-2 rounded-lg text-[10px] font-[900] shadow-2xl animate-bounce hidden md:block border-2 border-[#16a34a] pointer-events-auto select-none uppercase tracking-tighter">
          SNAP A PHOTO FOR A QUOTE!
        </div>
        <a 
          href="https://wa.me/447000000000" 
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="bg-[#25D366] hover:bg-[#128C7E] text-white p-5 rounded-2xl shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all hover:scale-110 active:scale-95 group flex items-center gap-4 border-2 border-white/20 pointer-events-auto"
        >
          <div className="flex flex-col items-end leading-none text-white">
            <span className="text-[9px] font-black opacity-80 uppercase tracking-tighter">Live Response</span>
            <span className="text-sm font-black tracking-tight">WHATSAPP US</span>
          </div>
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      {/* --- BULLETPROOF NAVIGATION BAR --- */}
      <nav 
        role="navigation"
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 transform-gpu ${
          isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md py-3' 
          : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <div className="container mx-auto px-6 h-16 flex justify-between items-center relative">
          
          <a href="#" aria-label="Total Waste Clearout Home" className="flex items-center gap-3 md:gap-4 shrink-0 group">
            <div className="relative h-10 w-10 md:h-14 md:w-14 transition-transform group-hover:scale-105">
              <img 
                src="logo.webp" 
                alt="Total Waste Clearout Logo" 
                className="h-full w-full object-contain relative z-10" 
                loading="eager"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className={`font-[1000] text-lg md:text-3xl tracking-tighter uppercase italic transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>Total Waste</span>
              <span className="text-[#4ade80] font-black text-[8px] md:text-[10px] tracking-[.3em] md:tracking-[.4em] uppercase">Clearout Ltd</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className={`hidden xl:flex items-center gap-8 font-black text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}>
            {navLinks.map(link => (
              <a 
                key={link.id} 
                href={link.href} 
                className={`transition-all relative group py-2 ${activeSection === link.id ? 'text-[#16a34a]' : 'hover:text-[#16a34a]'}`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${activeSection === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </a>
            ))}
            <div className="h-6 w-px bg-white/20 mx-2" />
            <a 
              href="tel:08001234567" 
              className="bg-[#16a34a] hover:bg-slate-900 text-white px-6 py-3 rounded-sm flex items-center gap-3 transition-all shadow-md font-black italic uppercase tracking-wider"
            >
              <Phone size={16} fill="white" aria-hidden="true" /> 0800 123 4567
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`xl:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        <div 
          className={`xl:hidden fixed left-0 w-full bg-white transition-all duration-500 ease-in-out transform-gpu border-t border-slate-100 shadow-2xl overflow-y-auto ${
            isMenuOpen 
            ? 'translate-y-0 opacity-100 visible h-[calc(100vh-80px)]' 
            : '-translate-y-full opacity-0 invisible h-0'
          }`}
          style={{ top: '80px' }}
        >
          <div className="p-8 md:p-12 flex flex-col h-full">
            <div className="flex flex-col gap-6 font-black text-xl md:text-2xl uppercase tracking-widest italic text-slate-900 mb-12">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={link.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`border-b border-slate-100 pb-4 flex justify-between items-center transition-colors ${activeSection === link.id ? 'text-[#16a34a]' : 'active:text-[#16a34a]'}`}
                >
                  {link.name} <ChevronRight size={24} className={activeSection === link.id ? 'text-[#16a34a]' : 'text-slate-200'} />
                </a>
              ))}
            </div>

            <div className="mt-auto space-y-6 text-center">
              <a href="tel:08001234567" className="bg-[#16a34a] text-white w-full p-6 text-center rounded-sm flex items-center justify-center gap-4 font-black italic text-xl uppercase shadow-lg">
                <Phone fill="white" aria-hidden="true" /> CALL 0800 123 4567
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header id="home" className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-[#064e3b]">
        <div className="absolute inset-0 opacity-[0.25] pointer-events-none" aria-hidden="true">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="industrial-forest-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#22c55e" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#industrial-forest-grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 text-left">
              <h1 className="text-6xl md:text-[9rem] font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase italic">
                WASTE <br />
                <span className="text-transparent stroke-text-light">VANISHED</span> <br />
                <span className="text-[#4ade80]">TODAY.</span>
              </h1>
              <p className="text-xl md:text-3xl text-white/70 mb-12 max-w-2xl font-bold leading-tight italic text-balance">
                Premium waste removal for <span className="text-white border-b-4 border-orange-500">Thames Valley</span>. Fully licensed. Fixed pricing. Professional crews.
              </p>

              <div className="flex flex-wrap gap-6 items-center">
                <a 
                  href="#quote" 
                  className="bg-orange-500 hover:bg-orange-400 text-black px-10 md:px-12 py-5 md:py-6 rounded-sm font-black text-lg md:text-xl uppercase italic tracking-wider flex items-center gap-4 transition-all hover:-translate-y-1 shadow-[8px_8px_0px_#022c22] active:shadow-none"
                >
                  Clear My Waste <ArrowRight size={24} aria-hidden="true" />
                </a>
                <div className="flex items-center gap-6 bg-white/5 backdrop-blur-md p-4 rounded-lg border border-white/10 shadow-sm">
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <img 
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i+14}`} 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-[#064e3b] shadow-sm"
                        alt="Verified customer avatar"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col leading-none text-white">
                    <div className="flex gap-0.5 text-orange-500 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" aria-hidden="true" />)}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#4ade80]">4.9/5 Local Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- STATS BAR --- */}
      <section className="bg-[#16a34a] py-8 border-y-4 border-black relative z-20 shadow-xl">
        <div className="container mx-auto px-6 text-white font-black">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((s, idx) => (
              <div key={idx} className="flex items-center gap-4 md:gap-5 text-white">
                <div className="bg-[#064e3b] text-[#4ade80] p-2 md:p-3 rounded-sm shrink-0 shadow-sm">{s.icon}</div>
                <div className="flex flex-col leading-none">
                  <span className="text-2xl md:text-3xl uppercase italic leading-none">{s.value}</span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-widest opacity-80">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-32 bg-white relative border-b border-slate-100 text-left">
        <div className="container mx-auto px-6 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-slate-900 text-left">
            
            <div className="lg:col-span-6 bg-[#dcfce7] p-12 md:p-20 flex flex-col justify-end min-h-[400px] md:min-h-[500px] border-4 border-slate-900 shadow-[12px_12px_0px_#16a34a] md:shadow-[15px_15px_0px_#16a34a] relative overflow-hidden group text-left">
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:translate-x-10 transition-transform duration-1000">
                <Truck size={300} className="text-black" aria-hidden="true" />
              </div>
              <div className="relative z-10 text-slate-900 text-left">
                <h2 className="text-5xl md:text-[7rem] font-[1000] leading-[0.8] uppercase italic mb-8 tracking-tighter">TOTAL <br /> IMPACT.</h2>
                <p className="font-black text-lg md:text-xl max-w-sm mb-10 leading-relaxed italic text-slate-700">Point at it, and it's gone. Same-day professional clearance across the Thames Valley corridor.</p>
                <div className="flex gap-4">
                  <div className="bg-[#16a34a] text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest italic">Fully Licensed</div>
                  <div className="bg-slate-900 text-white px-6 py-3 text-[10px] font-black uppercase tracking-widest">Est. 2018</div>
                </div>
              </div>
            </div>

            <article className="lg:col-span-3 bg-white group overflow-hidden relative border-4 border-slate-900 h-[400px] md:h-[500px] cursor-pointer shadow-lg text-left">
              <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-all duration-500" />
              <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" alt="Interior house clearance in progress" />
              <div className="relative z-20 p-8 h-full flex flex-col justify-between text-white text-left">
                <div className="bg-orange-500 text-black w-12 md:w-14 h-12 md:h-14 flex items-center justify-center font-black border-2 border-black text-xl italic shadow-md">01</div>
                <div className="text-left">
                  <h3 className="text-3xl md:text-4xl font-[900] uppercase italic group-hover:text-[#4ade80] transition-colors leading-none text-left">House Clearance</h3>
                  <p className="text-sm font-bold mt-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all italic text-left">Homes, flats, and probate clears.</p>
                </div>
              </div>
            </article>

            <article className="lg:col-span-3 bg-white border-4 border-slate-900 p-8 md:p-10 flex flex-col justify-between hover:border-[#16a34a] transition-all h-[400px] md:h-[500px] shadow-lg group text-left">
              <Briefcase size={60} className="text-[#16a34a] mb-8 group-hover:-rotate-6 transition-transform" aria-hidden="true" />
              <div className="text-left">
                <span className="text-slate-400 font-black text-[11px] tracking-widest uppercase mb-2 block italic text-left">B2B Duty of Care</span>
                <h3 className="text-3xl md:text-4xl font-[900] text-slate-900 uppercase italic mb-6 tracking-tighter leading-none text-left">Office & Retail</h3>
                <p className="text-slate-600 font-bold text-lg leading-relaxed italic text-left">Fast commercial rip-outs with secure WEEE disposal notes.</p>
              </div>
            </article>

            <article className="lg:col-span-5 bg-slate-900 border-4 border-slate-900 p-6 md:p-10 flex flex-col justify-between group hover:bg-orange-500 transition-all duration-700 cursor-pointer min-h-[380px] lg:h-[400px] text-left">
              <div className="flex justify-between items-start text-white text-left">
                <Construction size={54} className="text-[#4ade80] group-hover:text-black mb-4 transition-colors" aria-hidden="true" />
                <div className="text-[10px] font-black uppercase text-slate-400 group-hover:text-black/60 italic tracking-widest text-left">Trade Waste Specialists</div>
              </div>
              <div className="text-white text-left mt-4 md:mt-0">
                <h3 className="text-4xl md:text-5xl font-[900] group-hover:text-black uppercase italic mb-4 tracking-tighter leading-none text-left">Construction Site</h3>
                <p className="group-hover:text-black/80 font-bold text-sm md:text-lg max-w-md italic leading-tight text-left">
                  Avoid skip permits. We load heavy rubble, timber, and plasterboard instantly. Safe, legal, and rapid.
                </p>
              </div>
            </article>

            <article className="lg:col-span-7 bg-[#ecf3ef] text-slate-900 p-8 md:p-12 flex flex-col md:flex-row gap-12 items-center border-4 border-slate-900 group h-auto lg:h-[400px] shadow-xl text-left text-balance">
              <div className="md:w-1/3 flex justify-center shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#4ade80]/10 blur-2xl group-hover:bg-[#4ade80]/20 transition-all" />
                  <Leaf size={140} className="text-[#16a34a] group-hover:rotate-12 transition-transform relative z-10" aria-hidden="true" />
                </div>
              </div>
              <div className="md:w-2/3 text-left">
                <h3 className="text-4xl md:text-5xl font-[1000] uppercase italic mb-6 tracking-tighter leading-[0.9] text-left">Exterior <br /> Waste.</h3>
                <p className="text-slate-600 font-bold text-base md:text-xl mb-8 italic leading-snug text-left">
                  Garden clearance, shed dismantling, and soil disposal. We leave your outdoor space ready for landscaping.
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3 text-left">
                  {['Sheds', 'Green Waste', 'Soil', 'Decking'].map(tag => (
                    <div key={tag} className="bg-slate-900 text-white px-4 md:px-5 py-2 md:py-2.5 text-[10px] font-black uppercase tracking-widest italic whitespace-nowrap">{tag}</div>
                  ))}
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* --- LOCATIONS --- */}
      <section id="locations" className="py-24 bg-[#f8fafc] text-left">
        <div className="container mx-auto px-6 text-left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left border-t border-slate-200 pt-24 text-slate-900">
            <h3 className="text-3xl font-black uppercase italic shrink-0 underline decoration-[#16a34a]">Coverage <span className="text-[#16a34a]">Map</span></h3>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-8 md:gap-x-12 gap-y-6">
              {towns.map(t => (
                <div key={t} className="flex items-center gap-3 group cursor-default text-slate-500">
                   <MapPin size={16} className="text-[#16a34a] group-hover:scale-125 transition-transform" aria-hidden="true" />
                   <span className="text-[10px] md:text-xs font-black uppercase tracking-widest group-hover:text-slate-900 transition-colors">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPLIANCE & REVIEWS SECTION --- */}
      <section id="reviews" className="py-32 bg-white text-left overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-start">
            
            <div className="lg:col-span-4 text-left">
              <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-6 italic underline">Audit & Duty of Care</h2>
              <p className="text-5xl md:text-7xl font-black text-slate-900 italic uppercase leading-[0.9] mb-12 tracking-tighter text-left">Total Legal <br /> Safety.</p>
              
              <div className="space-y-8">
                <div className="flex gap-6 group items-start text-left">
                   <div className="bg-[#ecf3ef] p-4 rounded-xl border border-slate-200 group-hover:border-[#16a34a] transition-colors shrink-0">
                    <ShieldCheck size={32} className="text-[#16a34a]" aria-hidden="true" />
                   </div>
                   <div className="text-left">
                    <h4 className="text-xl font-black uppercase italic mb-1 text-slate-900 leading-none text-left">Waste Transfer Notes</h4>
                    <p className="font-bold text-slate-500 text-sm italic text-left">Digital proof for every clearance.</p>
                   </div>
                </div>
                <div className="flex gap-6 group items-start text-left">
                   <div className="bg-[#ecf3ef] p-4 rounded-xl border border-slate-200 group-hover:border-[#16a34a] transition-colors shrink-0">
                    <Award size={32} className="text-[#16a34a]" aria-hidden="true" />
                   </div>
                   <div className="text-left">
                    <h4 className="text-xl font-black uppercase italic mb-1 text-slate-900 leading-none text-left">Licensed Carrier</h4>
                    <p className="font-bold text-slate-500 text-sm italic text-left">Certified Upper Tier: CBDU12345.</p>
                   </div>
                </div>
              </div>

              <div className="mt-16 hidden lg:flex gap-4">
                 <button onClick={prevReview} aria-label="Previous review" className="w-14 h-14 border-4 border-slate-900 rounded-full flex items-center justify-center hover:bg-[#16a34a] hover:text-white transition-all active:scale-90"><ChevronLeft size={28} aria-hidden="true" /></button>
                 <button onClick={nextReview} aria-label="Next review" className="w-14 h-14 border-4 border-slate-900 rounded-full flex items-center justify-center hover:bg-[#16a34a] hover:text-white transition-all active:scale-90"><ChevronRight size={28} aria-hidden="true" /></button>
              </div>
            </div>

            <div className="lg:col-span-8 relative">
              <div 
                className="relative overflow-visible cursor-grab active:cursor-grabbing touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  style={{ transform: `translateX(-${currentReview * 100}%)` }}
                >
                  {reviewsData.map((review, idx) => (
                    <div key={idx} className="w-full flex-shrink-0 px-2 md:px-4">
                      <div className={`p-6 md:p-16 border-8 border-slate-900 rounded-[2.5rem] md:rounded-[3rem] shadow-[12px_12px_0px_#ecf3ef] md:shadow-[20px_20px_0px_#ecf3ef] min-h-[380px] md:min-h-[450px] flex flex-col relative overflow-hidden transition-all ${review.color}`}>
                        <Quote className={`absolute -top-6 -left-6 w-24 md:w-32 h-24 md:h-32 opacity-10 ${review.accent}`} aria-hidden="true" />
                        
                        <div className="relative z-10 flex-grow text-left">
                          <div className="flex gap-1 mb-6 md:mb-8" aria-label="5 star rating">
                             {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" className={review.accent} aria-hidden="true" />)}
                          </div>
                          
                          <p className="text-xl md:text-4xl font-[1000] uppercase italic leading-[1.15] mb-8 md:mb-12 tracking-tight text-left">
                            "{review.text}"
                          </p>
                        </div>

                        <div className="flex items-center gap-4 md:gap-6 mt-auto pt-4 border-t border-current border-opacity-10 text-left">
                          <div className={`w-12 md:w-16 h-12 md:h-16 rounded-full flex items-center justify-center font-[1000] border-4 border-slate-900 text-base md:text-xl italic shrink-0 ${idx % 2 === 0 ? 'bg-[#16a34a] text-white' : 'bg-white text-[#16a34a]'}`}>
                            {review.initials}
                          </div>
                          <div className="text-left overflow-hidden">
                            <p className="font-[1000] uppercase text-sm md:text-lg tracking-widest leading-none mb-1 truncate">{review.name}</p>
                            <p className="font-bold opacity-60 text-[10px] md:text-xs uppercase italic tracking-widest truncate">{review.location} • Verified Local Feedback</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center lg:justify-start gap-3 mt-12 px-4">
                {reviewsData.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentReview(idx)}
                    aria-label={`Go to review ${idx + 1}`}
                    className={`h-3 transition-all duration-500 rounded-full border-2 border-slate-900 ${idx === currentReview ? 'w-12 bg-[#16a34a]' : 'w-3 bg-slate-200'}`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- QUOTE HUB --- */}
      <section id="quote" className="py-32 bg-[#ecf3ef] relative overflow-hidden border-t border-slate-200 text-left">
        <div className="container mx-auto px-6 text-slate-900 text-left">
          <div className="bg-white p-8 md:p-20 border-8 border-slate-900 shadow-[15px_15px_0px_#16a34a] md:shadow-[30px_30px_0px_#16a34a] text-slate-900 relative text-left">
            <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center text-left">
              <div className="space-y-8 text-left">
                <h2 className="text-5xl md:text-[6.5rem] font-[1000] leading-[0.85] uppercase italic tracking-tighter text-left">GET YOUR <br /> <span className="text-[#16a34a] underline decoration-slate-900">FIXED</span> PRICE.</h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3 font-black uppercase italic text-sm text-slate-500 text-left"><CheckCircle size={16} className="text-[#16a34a]" aria-hidden="true" /> No Hidden Tipping Fees</div>
                  <div className="flex items-center gap-3 font-black uppercase italic text-sm text-slate-500 text-left"><CheckCircle size={16} className="text-[#16a34a]" aria-hidden="true" /> Professional Loaders Included</div>
                </div>
              </div>
              <div className="bg-slate-50 p-6 md:p-10 border-4 border-slate-900 rounded-lg text-left">
                 <form className="space-y-8 text-left" onSubmit={e => e.preventDefault()}>
                   <div className="grid md:grid-cols-2 gap-8 text-left">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="clearance-type" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Job Type</label>
                        <select id="clearance-type" className="w-full bg-white border-4 border-slate-900 p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#16a34a] appearance-none cursor-pointer">
                          <option>Full House Clearance</option>
                          <option>Trade Waste</option>
                          <option>Garden Removal</option>
                          <option>Office Disposal</option>
                        </select>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="postcode" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Postcode</label>
                        <input id="postcode" type="text" placeholder="e.g. RG1" className="w-full bg-white border-4 border-slate-900 p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#16a34a]" />
                      </div>
                   </div>
                   <div className="flex flex-col gap-2">
                      <label htmlFor="mobile" className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Mobile Contact</label>
                      <input id="mobile" type="tel" placeholder="Mobile Number" className="w-full bg-white border-4 border-slate-900 p-4 md:p-5 font-black uppercase text-xs outline-none focus:border-[#16a34a]" />
                   </div>
                   <button type="submit" className="w-full bg-slate-900 text-white p-6 md:p-8 font-black uppercase tracking-widest italic text-xl md:text-2xl hover:bg-[#16a34a] transition-all shadow-xl active:scale-95">Lock In Fixed Price</button>
                 </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- NEW LOCAL AUTHORITY FOOTER --- */}
      <footer className="bg-[#064e3b] pt-24 pb-12 border-t-8 border-[#4ade80] text-white text-left">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 mb-20 text-left">
            
            {/* Column 1: Brand & Compliance Box */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4 group cursor-pointer text-left">
                <img src="logo.webp" alt="Total Waste Clearout Logo White" className="w-16 h-16 object-contain group-hover:rotate-12 transition-transform" loading="lazy" />
                <div className="flex flex-col leading-none text-left">
                  <span className="font-black text-3xl md:text-4xl tracking-tighter uppercase italic text-white leading-none text-left">Total Waste</span>
                  <span className="text-[#4ade80] font-black text-sm tracking-[.4em] uppercase text-left">Clearout Ltd</span>
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 relative overflow-hidden group">
                 <ShieldAlert className="absolute -top-4 -right-4 w-24 h-24 text-white opacity-5 group-hover:scale-110 transition-transform" />
                 <h5 className="text-[#4ade80] font-black uppercase tracking-widest text-xs italic flex items-center gap-2">
                   <ShieldCheck size={16} /> Legal Duty of Care
                 </h5>
                 <p className="text-white/70 font-bold italic text-lg leading-relaxed text-balance">
                   Total Waste Clearout is a registered Upper Tier Waste Carrier (CBDU12345). We provide full legal audit trails for all Berkshire & Surrey disposals.
                 </p>
                 <div className="flex gap-4 pt-2">
                   <span className="bg-white/10 px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest italic">Insured £5M PLI</span>
                   <span className="bg-white/10 px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest italic">EA Licensed</span>
                 </div>
              </div>
            </div>

            {/* Column 2: Service Matrix */}
            <div className="lg:col-span-3 space-y-8">
              <h5 className="font-black text-[#4ade80] uppercase tracking-[0.3em] text-xs italic border-l-4 border-[#4ade80] pl-4 leading-none">Core Services</h5>
              <ul className="space-y-4 font-black text-sm uppercase tracking-widest italic text-white/50">
                {['House Clearances', 'Builders Waste', 'Garden Removal', 'Office Rip-outs', 'Sofa Disposal', 'Shed Demolition'].map(service => (
                  <li key={service} className="hover:text-white hover:translate-x-2 transition-all cursor-pointer flex items-center gap-2">
                    <ArrowRight size={14} className="text-[#4ade80]" /> {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact & Emergency Matrix */}
            <div className="lg:col-span-4 space-y-10 flex flex-col items-start lg:items-end text-left lg:text-right">
               <div className="space-y-3">
                 <h5 className="font-black text-[#4ade80] uppercase tracking-[0.3em] text-xs italic text-left lg:text-right">Emergency Support</h5>
                 <a href="tel:08001234567" className="text-4xl md:text-5xl lg:text-6xl font-[1000] text-white hover:text-orange-500 transition-colors italic tracking-tighter leading-none block text-left lg:text-right">
                   0800 123 4567
                 </a>
                 <div className="flex gap-2 lg:justify-end">
                    <span className="w-2 h-2 bg-[#4ade80] rounded-full animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white/40 italic">Available Daily: 7am — 7pm</span>
                 </div>
               </div>

               <div className="space-y-3">
                 <h5 className="font-black text-[#4ade80] uppercase tracking-[0.3em] text-xs italic text-left lg:text-right">Follow Our Story</h5>
                 <div className="flex gap-4 lg:justify-end text-left lg:text-right">
                    <a href="https://www.instagram.com/totalwasteclearout" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#4ade80] transition-colors hover:text-black shadow-sm text-white group"><Instagram size={24} className="group-hover:scale-110 transition-transform" /></a>
                    <a href="https://www.facebook.com/totalwasteclearout" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#4ade80] transition-colors hover:text-black shadow-sm text-white group"><Facebook size={24} className="group-hover:scale-110 transition-transform" /></a>
                 </div>
               </div>
            </div>
          </div>

          {/* Location SEO Grid */}
          <div className="border-t border-white/5 py-12">
            <h5 className="font-black text-[#4ade80] uppercase tracking-[0.3em] text-[10px] italic mb-8 text-center">Priority Service Corridor</h5>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-4 gap-x-8 text-center">
               {towns.map(t => (
                 <a key={t} href="#" className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-[#4ade80] transition-colors italic flex items-center justify-center gap-2">
                   <MapPin size={10} /> {t}
                 </a>
               ))}
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-left">
            <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.4em] text-center md:text-left leading-relaxed text-left text-balance">
              © 2026 TOTAL WASTE CLEAROUT LTD. COMPANY NO: 09876543. REGISTERED IN ENGLAND. BUILT FOR HIGH-PERFORMANCE CLEARANCE.
            </p>
            <div className="flex gap-8 items-center text-left">
              {['Privacy Policy', 'Cookie Usage', 'Compliance'].map(item => (<a key={item} href="#" className="text-[10px] font-black uppercase text-white/20 hover:text-[#4ade80] transition-colors italic tracking-widest flex items-center gap-2">{item} <ExternalLink size={10} /></a>))}
              <div className="hidden md:flex gap-1" aria-hidden="true">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} className="text-[#4ade80] fill-current" />)}
              </div>
            </div>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        .stroke-text-light { -webkit-text-stroke: 1px rgba(255,255,255,0.4); }
        .stroke-text-dark { -webkit-text-stroke: 1px #0f172a; }
        @media (min-width: 768px) { 
          .stroke-text-light { -webkit-text-stroke: 2px rgba(255,255,255,0.4); } 
          .stroke-text-dark { -webkit-text-stroke: 2px #0f172a; } 
        }
        html { scroll-behavior: smooth; }
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
        
        .transition-transform { transition-property: transform; }
        .text-balance { text-wrap: balance; }
        
        /* Smooth Carousel easing */
        .ease-[cubic-bezier(0.23,1,0.32,1)] {
          transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1);
        }
      `}} />

    </div>
  );
};

export default App;
