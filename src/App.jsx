import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Trash2, 
  Truck, 
  Star, 
  Quote, 
  Instagram, 
  Facebook, 
  CheckCircle2, 
  Loader2, 
  MessageCircle, 
  ArrowUp, 
  Award, 
  Users, 
  Camera, 
  Check, 
  ChevronRight,
  ChevronLeft,
  X,
  Menu,
  Zap,
  Home as HomeIcon,
  HardHat,
  Timer,
  FileText,
  Warehouse,
  Leaf,
  Plus,
  Minus,
  Mail
} from 'lucide-react';

// --- Components ---

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/441753252500"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    whileHover={{ scale: 1.1, rotate: -3 }}
    className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-2xl shadow-lg flex items-center justify-center border-2 border-white group cursor-pointer"
  >
    <MessageCircle fill="white" size={24} />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold uppercase text-[10px] tracking-widest ml-0 group-hover:ml-3">WhatsApp Us</span>
  </motion.a>
);

const Navbar = ({ currentView, setView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Services', id: 'services' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Comparison', id: 'comparison' },
    { name: 'FAQ', id: 'faq' }
  ];

  const handleNavClick = (id) => {
    setIsOpen(false);
    if (id === 'home' || id === 'faq') {
      setView('home');
      setTimeout(() => {
        const target = id === 'home' ? '#hero' : '#faq';
        document.querySelector(target)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setView(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#062a1f]/95 backdrop-blur-md border-b border-white/5 py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <motion.div 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-4 group cursor-pointer"
        >
          <img 
            src="/logo.webp" 
            alt="TOTAL WASTE CLEAROUT" 
            className="w-14 h-14 md:w-16 md:h-16 object-contain brightness-125 transition-transform group-hover:scale-105"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/60?text=TWC'; }}
          />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black uppercase tracking-tighter text-white">TOTAL WASTE CLEAROUT</span>
            <span className="text-[10px] font-bold text-[#16a34a] uppercase tracking-[0.2em] mt-1">Professional Waste Removal</span>
          </div>
        </motion.div>
        
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.id)}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative group flex flex-col items-center bg-transparent border-none cursor-pointer ${
                (currentView === link.id || (currentView === 'home' && link.id === 'home')) ? 'text-white' : 'text-white/40 hover:text-white'
              }`}
            >
              {link.name}
              <motion.span 
                initial={false}
                animate={{ width: (currentView === link.id || (currentView === 'home' && link.id === 'home')) ? '100%' : '0%' }}
                className="h-0.5 bg-[#16a34a] mt-1.5"
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:01753252500" className="hidden sm:flex items-center gap-3 text-white font-bold px-5 py-2.5 bg-white/5 rounded-full hover:bg-[#16a34a] transition-all border border-white/10">
            <Phone size={14} className="text-[#16a34a]" />
            <span className="text-sm tracking-tight">01753 252 500</span>
          </a>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-white/5 rounded-full transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#062a1f] border-b border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col p-8 gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-2xl font-bold transition-colors flex items-center gap-3 bg-transparent border-none text-left ${
                    (currentView === link.id || (currentView === 'home' && link.id === 'home')) ? 'text-[#16a34a]' : 'text-white/80'
                  }`}
                >
                  {link.id === 'home' && <HomeIcon size={20} />}
                  {link.name}
                </button>
              ))}
              <div className="h-px bg-white/5" />
              <a href="tel:01753252500" className="flex items-center justify-center gap-3 bg-[#16a34a] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs">
                <Phone size={18} /> Call Us Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// --- Page Views ---

const PlaceholderPage = ({ title, setView }) => (
  <div className="min-h-screen pt-40 px-6 bg-[#fcfaf7]">
    <div className="max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }}
        className="mb-20"
      >
        <button 
          onClick={() => setView('home')}
          className="flex items-center gap-2 text-[#16a34a] font-bold uppercase tracking-widest text-[10px] mb-8 group"
        >
          <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
        </button>
        <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-[#062a1f] leading-none mb-10">
          Our <br /><span className="text-[#16a34a]">{title}</span>
        </h1>
        <p className="text-xl text-black/60 max-w-2xl">
          We are currently updating this section with new information. Check back soon for the latest details on our {title.toLowerCase()}.
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <div key={i} className="h-64 bg-white border border-black/5 rounded-sm" />
        ))}
      </div>
    </div>
  </div>
);

const ServiceCard = ({ title, desc, icon: Icon, i }) => {
  const cardRef = useRef(null);

  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="bg-white p-8 md:p-12 group transition-all duration-300 border border-black/5 flex flex-col min-h-[380px] relative shadow-sm overflow-hidden rounded-sm"
    >
      <div className="w-14 h-14 bg-[#fcfaf7] border border-black/5 rounded-xl flex items-center justify-center mb-8 group-hover:bg-[#16a34a] transition-all duration-300 relative z-10">
        <Icon className="text-[#062a1f] group-hover:text-white transition-colors" size={28} />
      </div>

      <h4 className="text-2xl font-black uppercase tracking-tight mb-6 text-[#062a1f] group-hover:text-[#16a34a] transition-colors relative z-10">
        {title}
      </h4>
      <p className="text-black/60 text-base leading-relaxed font-medium mb-10 relative z-10">
        {desc}
      </p>
      
      <div className="mt-auto flex items-center gap-4 opacity-40 group-hover:opacity-100 transition-all duration-300 relative z-10">
        <span className="text-[#16a34a] font-bold uppercase text-[10px] tracking-widest">Learn More</span>
        <div className="h-px flex-grow bg-black/10" />
        <ChevronRight className="text-[#16a34a] group-hover:translate-x-2 transition-transform" size={20} />
      </div>
    </motion.div>
  );
};

const ReviewSlider = () => {
  const [current, setCurrent] = useState(0);
  const reviews = [
    { 
      name: "Arthur Stirling", location: "Windsor", service: "Estate Clearance",
      text: "Outstanding service. They cleared the entire property in under 4 hours. No damage, no fuss, and the driveway was left spotless."
    },
    { 
      name: "Marcus Thorne", location: "Ascot", service: "Wait & Load",
      text: "Much easier than skip hire. Arrived exactly on time. Friendly staff and high-quality trucks. Highly recommended."
    },
    { 
      name: "Elena Rossi", location: "Reading", service: "Builders Waste",
      text: "Speed is their specialty. A mountain of renovation debris was gone by lunch. Great for local contractors."
    },
    { 
      name: "Sir James L.", location: "Marlow", service: "House Clearance",
      text: "Efficient and discreet. The team handled a sensitive relocation clearance with absolute care. Best in the South East."
    }
  ];

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-white relative overflow-hidden border-y border-black/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 md:mb-24 gap-12">
          <div className="max-w-2xl">
            <p className="text-[#16a34a] font-black uppercase tracking-[0.5em] text-[10px] mb-6">Customer Feedback</p>
            <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.8] text-[#062a1f]">What our <br />clients say.</h2>
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#062a1f] hover:text-white transition-all group">
              <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button onClick={next} className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#062a1f] hover:text-white transition-all group">
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative min-h-[320px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-[#fcfaf7] border border-black/5 p-8 md:p-20 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <Quote className="text-[#16a34a] opacity-5 absolute top-10 right-10" size={80} />
              
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-8">
                  <div className="flex gap-1 text-[#16a34a]">
                    {[1,2,3,4,5].map(s => <Star key={s} fill="currentColor" size={12} />)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 border-l border-black/10 pl-4">{reviews[current].service}</span>
                </div>
                <p className="text-2xl md:text-5xl font-bold leading-tight text-[#062a1f] mb-8">
                  "{reviews[current].text}"
                </p>
                <div>
                  <h5 className="text-xl font-black uppercase tracking-tighter text-[#062a1f]">{reviews[current].name}</h5>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#16a34a] mt-1">{reviews[current].location}</p>
                </div>
              </div>
              <div className="lg:col-span-4 hidden lg:flex justify-end opacity-20">
                 <Trash2 size={120} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [view, setView] = useState('home');
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setStatus("SUCCESS");
      setLoading(false);
    }, 1500);
  };

  const services = [
    { title: "Wait & Load", desc: "The better alternative to skips. We arrive, load, and vanish within the hour. No permits needed.", icon: Timer },
    { title: "Builders Waste", desc: "Reliable removal of rubble, soil, and construction debris. Trade-grade service for local contractors.", icon: HardHat },
    { title: "House Clearance", desc: "From loft clearouts to full property stripping. We handle all the heavy lifting for you.", icon: HomeIcon },
    { title: "Probate Service", desc: "A discreet and professional clearing service for executors during sensitive estate transfers.", icon: FileText },
    { title: "Office Clearance", desc: "Furniture recycling and IT disposal for commercial spaces across the Thames Valley.", icon: Warehouse },
    { title: "Garden Waste", desc: "Fast removal of green waste, soil, and garden debris with a clean-sweep finish.", icon: Leaf }
  ];

  const faqs = [
    { q: "How much does it cost?", a: "We provide fixed pricing based on volume and weight. You can get an instant quote via photo or a quick site visit." },
    { q: "Is this better than a skip?", a: "Yes. You don't need council permits, there's no driveway damage, and our team does 100% of the loading for you." },
    { q: "Are you fully licensed?", a: "Absolutely. We are Upper Tier Waste Carriers (CBDU12345) and provide a Waste Transfer Note for every job." }
  ];

  const renderContent = () => {
    switch (view) {
      case 'services': return <PlaceholderPage title="Services" setView={setView} />;
      case 'reviews': return <PlaceholderPage title="Reviews" setView={setView} />;
      case 'comparison': return <PlaceholderPage title="Comparison" setView={setView} />;
      default: return (
        <>
          {/* Hero Section */}
          <section id="hero" className="relative min-h-screen flex items-center bg-[#062a1f] overflow-hidden pt-32 pb-20 px-6">
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
              <div className="lg:col-span-7 flex flex-col justify-center">
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#16a34a] text-[10px] font-bold uppercase tracking-[0.4em] mb-10 w-fit"
                >
                  <Zap size={12} className="fill-current" />
                  Same Day Response
                </motion.div>
                
                <h1 className="text-white text-5xl md:text-[8vw] font-black leading-[0.85] tracking-tighter mb-10 uppercase italic">
                  WE CLEAR. <br />
                  YOU <span className="text-[#16a34a] relative">RECLAIM.
                    <motion.span initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} className="absolute bottom-2 left-0 h-3 bg-[#16a34a]/20 -z-10" />
                  </span>
                </h1>

                <p className="text-white/40 text-lg md:text-2xl max-w-xl mb-12 font-medium leading-tight">
                  Fast, professional waste removal with no heavy lifting and no skip permits required.
                </p>

                <div className="flex flex-wrap gap-8 items-center">
                  <motion.a 
                    href="#quote" 
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#16a34a] text-white px-10 md:px-12 py-5 md:py-6 rounded-full font-black uppercase tracking-widest text-[11px] shadow-2xl cursor-pointer"
                  >
                    Get a Quote
                  </motion.a>
                  <div className="flex flex-col border-l border-white/10 pl-8">
                    <div className="flex text-yellow-500 gap-1 mb-2">
                       {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="currentColor" />)}
                    </div>
                    <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">5-Star Local Service</p>
                  </div>
                </div>
              </div>

              <div id="quote" className="lg:col-span-5 flex flex-col justify-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.98 }} 
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="bg-[#fcfaf7] p-8 md:p-14 rounded-2xl shadow-2xl text-black relative border border-black/5"
                >
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#16a34a] rounded-full flex items-center justify-center text-white font-black italic text-center text-[9px] leading-none -rotate-12 shadow-xl border-4 border-[#fcfaf7] z-20">
                    98%<br/>RECYCLED
                  </div>
                  
                  <AnimatePresence mode="wait">
                    {status === "SUCCESS" ? (
                      <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                        <CheckCircle2 className="text-[#16a34a] mx-auto mb-6" size={60} />
                        <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none">Thank You</h3>
                        <p className="text-black/40 text-sm font-bold uppercase tracking-widest italic">We'll get back to you shortly.</p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="border-b-2 border-black pb-6">
                          <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none">Get a <br />Quote</h3>
                        </div>
                        <div className="space-y-5">
                          <input name="name" required placeholder="Name" className="w-full bg-transparent border-b border-black/10 py-4 text-sm outline-none focus:border-[#16a34a] transition-all font-bold placeholder:text-black/20" />
                          <input name="phone" required placeholder="Phone Number" className="w-full bg-transparent border-b border-black/10 py-4 text-sm outline-none focus:border-[#16a34a] transition-all font-bold placeholder:text-black/20" />
                          <input name="postcode" required placeholder="Postcode" className="w-full bg-transparent border-b border-black/10 py-4 text-sm outline-none focus:border-[#16a34a] transition-all font-bold placeholder:text-black/20" />
                          <button disabled={loading} className="w-full bg-[#062a1f] text-white font-black py-6 rounded-xl uppercase tracking-widest text-[12px] hover:bg-[#16a34a] transition-all flex items-center justify-center gap-3 mt-8 shadow-xl">
                            {loading ? <Loader2 className="animate-spin" size={18} /> : <span>Send Request <ArrowRight size={18} /></span>}
                          </button>
                        </div>
                      </form>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Trust bar */}
          <section className="bg-white border-b border-black/5 py-10 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-8 opacity-40 grayscale">
              <div className="flex items-center gap-3 font-bold uppercase tracking-widest text-[9px]"><Check size={18} className="text-[#16a34a]" strokeWidth={4}/> EA Licensed</div>
              <div className="flex items-center gap-3 font-bold uppercase tracking-widest text-[9px]"><Check size={18} className="text-[#16a34a]" strokeWidth={4}/> 95% Diversion</div>
              <div className="flex items-center gap-3 font-bold uppercase tracking-widest text-[9px]"><Check size={18} className="text-[#16a34a]" strokeWidth={4}/> Same-Day Response</div>
              <div className="flex items-center gap-3 font-bold uppercase tracking-widest text-[9px]"><Check size={18} className="text-[#16a34a]" strokeWidth={4}/> Fully Insured</div>
            </div>
          </section>

          {/* Services Grid */}
          <section id="services" className="py-24 md:py-32 px-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {services.map((s, i) => <ServiceCard key={i} i={i} {...s} />)}
              </div>
              <div className="flex justify-center">
                 <button 
                  onClick={() => { setView('services'); window.scrollTo({top: 0}); }}
                  className="group flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.5em] text-[#062a1f] border-b-2 border-[#16a34a] pb-3 hover:text-[#16a34a] transition-all italic cursor-pointer bg-transparent"
                 >
                   View All Services <ArrowRight className="group-hover:translate-x-3 transition-transform" />
                 </button>
              </div>
            </div>
          </section>

          <ReviewSlider />

          {/* Comparison Section */}
          <section id="comparison" className="py-24 md:py-32 bg-[#fcfaf7] overflow-hidden px-6">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-xl mb-16 md:mb-20">
                <p className="text-[#16a34a] font-black uppercase tracking-[0.5em] text-[10px] mb-4">Why choose us</p>
                <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-none text-[#062a1f]">Skips vs <br />Clearout.</h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/5 border border-black/5 shadow-2xl rounded-2xl overflow-hidden">
                <div className="bg-white p-8 md:p-12">
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-10 text-red-600 flex items-center gap-3"><X size={24} /> Traditional Skips</h4>
                  <ul className="space-y-6">
                    {['Council permits required', 'You do all the loading', 'Neighbours fill it up', 'Driveway damage risk'].map(item => (
                      <li key={item} className="flex items-center gap-4 text-black/40 text-sm font-bold uppercase tracking-widest"><div className="w-1.5 h-1.5 bg-red-400 rounded-full" /> {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#062a1f] p-8 md:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#16a34a] opacity-10 blur-3xl" />
                  <h4 className="text-2xl font-black uppercase tracking-tighter mb-10 text-[#16a34a] flex items-center gap-3"><Check size={24} /> Total Waste Clearout</h4>
                  <ul className="space-y-6">
                    {['No permits needed', 'We load everything', 'Gone the same day', 'We sweep up after'].map(item => (
                      <li key={item} className="flex items-center gap-4 text-white text-sm font-bold uppercase tracking-widest"><Check size={16} className="text-[#16a34a]" /> {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="py-24 md:py-32 bg-white px-6 border-t border-black/5">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <p className="text-[#16a34a] font-black uppercase tracking-[0.5em] text-[10px] mb-6">Common Questions</p>
                <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter leading-none text-[#062a1f] mb-12">How it <br />Works.</h2>
                <a href="tel:01753252500" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] border-b-2 border-black pb-2 hover:text-[#16a34a] hover:border-[#16a34a] transition-all">Call Our Team</a>
              </div>
              <div className="space-y-4">
                {faqs.map((f, i) => (
                  <div key={i} className="border-b border-black/10 overflow-hidden">
                    <button onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)} className="w-full py-8 md:py-10 flex justify-between items-center text-left hover:text-[#16a34a] transition-colors group cursor-pointer bg-transparent border-none">
                      <span className="text-xl md:text-2xl font-black uppercase tracking-tighter leading-none pr-4">{f.q}</span>
                      {openFAQ === i ? <Minus size={20} className="shrink-0" /> : <Plus size={20} className="group-hover:rotate-90 transition-transform shrink-0" />}
                    </button>
                    <AnimatePresence>
                      {openFAQ === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pb-10 text-black/60 text-base md:text-lg font-medium leading-relaxed">{f.a}</motion.div>}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-black font-sans selection:bg-[#16a34a] selection:text-white scroll-smooth overflow-x-hidden">
      <Navbar currentView={view} setView={setView} />
      
      {renderContent()}

      {/* Massive Final CTA */}
      <section className="py-32 md:py-48 bg-[#062a1f] overflow-hidden relative border-y border-white/5 px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-6xl md:text-[15vw] text-white font-black italic uppercase leading-[0.75] tracking-tighter mb-20 md:mb-28">
            DONE BY <br /><span className="text-[#16a34a]">LUNCH.</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-12 items-center">
            <motion.a whileTap={{ scale: 0.95 }} href={view === 'home' ? "#quote" : "#hero"} onClick={() => { if(view !== 'home') setView('home'); }} className="bg-white text-[#062a1f] px-16 md:px-20 py-6 md:py-8 rounded-full font-black uppercase tracking-widest text-[11px] md:text-[13px] shadow-2xl w-full md:w-auto hover:bg-[#16a34a] hover:text-white transition-all text-center">Get a Free Quote</motion.a>
            <div className="h-px w-24 bg-white/10 hidden md:block" />
            <a href="tel:01753252500" className="flex items-center justify-center gap-6 md:gap-8 text-2xl md:text-4xl font-black italic uppercase tracking-tighter text-white hover:text-[#16a34a] transition-all">
              <Phone size={32} className="text-[#16a34a]" /> 01753 252 500
            </a>
          </div>
        </div>
      </section>

      {/* Mega Footer */}
      <footer className="bg-[#051a14] text-white pt-24 pb-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <img 
                  src="/logo.webp" 
                  alt="Logo" 
                  className="w-20 h-20 object-contain brightness-110" 
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/80?text=TWC'; }} 
                />
                <span className="text-2xl font-black uppercase tracking-tighter text-white leading-none">TOTAL WASTE <br/>CLEAROUT</span>
              </div>
              <p className="text-white/40 text-sm leading-relaxed max-w-xs">
                Professional waste management for residential and commercial properties across the Thames Valley.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#16a34a] transition-all">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#16a34a] transition-all">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[#16a34a] font-bold uppercase tracking-widest text-xs mb-8">What We Do</h4>
              <ul className="space-y-4 text-sm text-white/50">
                {['Wait & Load', 'Builders Waste', 'House Clearout', 'Probate Services', 'Office Removal'].map(item => (
                  <li key={item}><button onClick={() => { setView('services'); window.scrollTo({top: 0}); }} className="hover:text-white transition-colors bg-transparent border-none p-0 cursor-pointer">{item}</button></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[#16a34a] font-bold uppercase tracking-widest text-xs mb-8">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a href="tel:01753252500" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                    <Phone size={16} className="text-[#16a34a]" />
                    <span className="font-bold">01753 252 500</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@twclearout.co.uk" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                    <Mail size={16} className="text-[#16a34a]" />
                    <span>info@twclearout.co.uk</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <MapPin size={16} className="text-[#16a34a] mt-1 shrink-0" />
                  <span className="text-xs leading-relaxed">Windsor, Berkshire<br />United Kingdom</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#16a34a] font-bold uppercase tracking-widest text-xs mb-8">Information</h4>
              <ul className="space-y-4 text-sm text-white/50">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Waste License</a></li>
              </ul>
              <motion.button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="mt-10 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-all bg-transparent border-none cursor-pointer"
              >
                <ArrowUp size={14} /> Back to top
              </motion.button>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-white/20">
            <p>© 2026 TOTAL WASTE CLEAROUT LTD. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <span>Carrier License: CBDU12345</span>
            </div>
          </div>
        </div>
      </footer>
      
      <WhatsAppButton />
    </div>
  );
}
