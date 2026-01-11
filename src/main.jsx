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
  Zap,
  Home,
  HardHat,
  Timer,
  FileText,
  Warehouse,
  Leaf,
  Plus,
  Minus
} from 'lucide-react';

// --- Sub-Components ---

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/441753252500"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    whileHover={{ scale: 1.1, rotate: -3 }}
    className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(37,211,102,0.4)] flex items-center justify-center border-2 border-white group cursor-pointer"
  >
    <MessageCircle fill="white" size={24} />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 font-black uppercase text-[10px] tracking-widest ml-0 group-hover:ml-3">Contact Desk</span>
  </motion.a>
);

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-[#062a1f] border-b border-white/5 py-5 px-6">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <motion.div whileHover={{ x: 5 }} className="flex items-center gap-3 group cursor-pointer">
        <img 
          src="logo.webp" 
          alt="TOTAL WASTE CLEAROUT" 
          className="w-10 h-10 object-contain brightness-125"
          onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=TWC'; }}
        />
        <div className="flex flex-col leading-none">
          <span className="text-lg font-black uppercase tracking-tighter text-white">TOTAL WASTE CLEAROUT</span>
          <span className="text-[9px] font-bold text-[#16a34a] uppercase tracking-[0.2em] mt-0.5 tracking-widest">Thames Valley Elite</span>
        </div>
      </motion.div>
      
      <div className="hidden lg:flex items-center gap-10">
        {['Services', 'Reviews', 'Comparison', 'FAQ'].map(item => (
          <motion.a 
            key={item} 
            href={`#${item.toLowerCase()}`} 
            className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 hover:text-white transition-all relative group"
          >
            {item}
            <motion.span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#16a34a] transition-all group-hover:w-full" />
          </motion.a>
        ))}
      </div>

      <a href="tel:01753252500" className="flex items-center gap-4 text-white font-black group px-6 py-3 bg-white/5 rounded-sm hover:bg-[#16a34a] transition-all border border-white/10">
        <Phone size={14} className="text-[#16a34a] group-hover:text-white" />
        <span className="text-sm tracking-tighter uppercase italic">01753 252 500</span>
      </a>
    </div>
  </nav>
);

const ServiceCard = ({ title, desc, icon: Icon, i }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.05 }}
      whileHover={{ y: -15, scale: 1.02 }}
      className="bg-white p-12 group transition-all duration-700 border border-black/5 cursor-pointer flex flex-col min-h-[420px] relative shadow-sm overflow-hidden"
    >
      {/* Magnetic Glow Effect */}
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(22, 163, 74, 0.15), transparent 40%)`,
        }}
      />
      
      <div className="w-16 h-16 bg-[#fcfaf7] border border-black/5 rounded-sm flex items-center justify-center mb-10 group-hover:bg-[#16a34a] transition-all duration-500 shadow-sm relative z-10">
        <Icon className="text-[#062a1f] group-hover:text-white transition-colors" size={32} />
      </div>

      <h4 className="text-3xl font-black uppercase italic tracking-tighter mb-8 text-[#062a1f] group-hover:text-[#062a1f] transition-colors duration-500 leading-none relative z-10">
        {title}
      </h4>
      <p className="text-black/50 group-hover:text-black/70 text-base leading-relaxed font-medium transition-colors duration-500 mb-10 italic relative z-10">
        {desc}
      </p>
      
      <div className="mt-auto flex items-center gap-4 opacity-40 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 relative z-10">
        <span className="text-[#16a34a] font-black uppercase text-[10px] tracking-[0.4em]">Inquiry Protocol</span>
        <div className="h-px flex-grow bg-black/10 transition-colors" />
        <ChevronRight className="text-[#16a34a] group-hover:translate-x-2 transition-transform" size={20} />
      </div>
    </motion.div>
  );
};

const ReviewSlider = () => {
  const [current, setCurrent] = useState(0);
  const reviews = [
    { 
      name: "Arthur Stirling", location: "Windsor SL4", service: "Estate Clearance",
      text: "Outstanding surgical precision. They cleared an entire probate estate in under 4 hours. No damage, no fuss, and the driveway was swept spotless."
    },
    { 
      name: "Marcus Thorne", location: "Ascot SL5", service: "Wait & Load",
      text: "Much more professional than any skip hire I've used. Arrived exactly on the minute. Uniformed staff and high-quality trucks. Worth the premium price."
    },
    { 
      name: "Elena Rossi", location: "Reading RG1", service: "Builders Waste",
      text: "Speed is their specialty. A mountain of renovation debris was gone by lunch. Highly recommend for any Thames Valley contractors."
    },
    { 
      name: "Sir James L.", location: "Marlow SL7", service: "House Clearance",
      text: "Discreet and efficient. The team handled a sensitive relocation clearance with absolute grace. The only company to trust in the South East."
    }
  ];

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-32 bg-white relative overflow-hidden border-y border-black/5 font-sans px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <p className="text-[#16a34a] font-black uppercase tracking-[0.5em] text-[10px] mb-6">Social Proof</p>
            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.8] text-[#062a1f]">Verified <br />Service Logs.</h2>
          </div>
          <div className="flex gap-4">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={prev} className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#062a1f] hover:text-white transition-all group">
              <ChevronLeft className="group-hover:-translate-x-1 transition-transform" />
            </motion.button>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={next} className="w-16 h-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-[#062a1f] hover:text-white transition-all group">
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div 
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#fcfaf7] border border-black/5 p-12 lg:p-20 relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              <Quote className="text-[#16a34a] opacity-5 absolute top-10 right-10" size={120} />
              
              <div className="lg:col-span-8">
                <div className="flex items-center gap-3 mb-10">
                  <div className="flex gap-1 text-[#16a34a]">
                    {[1,2,3,4,5].map(s => <Star key={s} fill="currentColor" size={14} />)}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/30 border-l border-black/10 pl-4 uppercase">Verified {reviews[current].service}</span>
                </div>
                <p className="text-3xl md:text-5xl font-bold italic leading-[1.1] text-[#062a1f] mb-12">
                  "{reviews[current].text}"
                </p>
                <div>
                  <h5 className="text-xl font-black uppercase italic tracking-tighter text-[#062a1f]">{reviews[current].name}</h5>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#16a34a] mt-1">{reviews[current].location}</p>
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
    { title: "Wait & Load Units", desc: "The elite skip alternative. Arrive, load, and vanish within 60 minutes. No permits required.", icon: Timer },
    { title: "Builders Refurb Waste", desc: "Heavy-duty removal of soil, rubble, and timber. Trade-grade reliability for local contractors.", icon: HardHat },
    { title: "Residential Asset Removal", desc: "Complete property clearing for relocations. Loft clearouts to full home stripping.", icon: Home },
    { title: "Probate & Estate Logistics", desc: "A discreet, documentation-first service for executors during sensitive estate transfers.", icon: FileText },
    { title: "Commercial Office Strip", desc: "Furniture recycling, IT disposal, and industrial debris removal for Berkshire firms.", icon: Warehouse },
    { title: "Green Waste & Soil", desc: "Garden clearance and landscaping waste removal with a signature clean-sweep finish.", icon: Leaf }
  ];

  const faqs = [
    { q: "How are prices calculated?", a: "Unlike generic quotes, we calculate based on specialized volume and weight metrics. You receive a fixed price via photo or site visit, guaranteed with no hidden fuel surcharges." },
    { q: "Is 'Wait & Load' better than a skip?", a: "Yes. No council permits required (£60-100 saving), no driveway damage, and our team does 100% of the loading for you." },
    { q: "Are you licensed?", a: "Strictly. We are Upper Tier Waste Carriers (CBDU12345). We provide a digital Waste Transfer Note for every job, ensuring 100% legal compliance." }
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf7] text-black font-sans selection:bg-[#16a34a] selection:text-white scroll-smooth overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center bg-[#062a1f] overflow-hidden pt-32 pb-20 px-6">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-white/5 border border-white/10 text-[#16a34a] text-[10px] font-black uppercase tracking-[0.4em] mb-10 w-fit">
              <Zap size={12} className="fill-current" />
              Berkshire's Priority Dispatch Active
            </motion.div>
            
            <h1 className="text-white text-6xl md:text-[9vw] font-black leading-[0.8] tracking-tighter mb-10 uppercase italic">
              WE CLEAR. <br />
              YOU <span className="text-[#16a34a] relative">RECLAIM.
                <motion.span initial={{ width: 0 }} whileInView={{ width: '100%' }} className="absolute bottom-2 left-0 h-3 bg-[#16a34a]/20 -z-10" />
              </span>
            </h1>

            <p className="text-white/40 text-xl md:text-2xl max-w-xl mb-12 font-medium leading-tight italic">
              "The professional alternative to skips. No heavy lifting, no driveway permits, and zero debris left behind."
            </p>

            <div className="flex flex-wrap gap-8 items-center">
              <motion.a href="#quote" whileHover={{ scale: 1.05 }} className="bg-white text-[#062a1f] px-12 py-6 rounded-sm font-black uppercase tracking-[0.2em] text-[12px] shadow-2xl cursor-pointer">
                Get Fixed Pricing
              </motion.a>
              <div className="flex flex-col border-l border-white/10 pl-8">
                <div className="flex text-yellow-500 gap-1 mb-2"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.3em]">5-Star Windsor Service</p>
              </div>
            </div>
          </div>

          <div id="quote" className="lg:col-span-5 flex flex-col justify-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-[#fcfaf7] p-10 md:p-14 rounded-sm shadow-[40px_40px_0px_rgba(22,163,74,0.05)] text-black relative border border-black/5">
              <div className="absolute -top-6 -left-6 w-20 h-20 bg-[#16a34a] rounded-full flex items-center justify-center text-white font-black italic text-center text-[11px] leading-none -rotate-12 shadow-2xl border-4 border-[#fcfaf7] z-20">
                98%<br/>ECO-DIVERTED
              </div>
              
              <AnimatePresence mode="wait">
                {status === "SUCCESS" ? (
                  <motion.div key="success" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
                    <CheckCircle2 className="text-[#16a34a] mx-auto mb-6 animate-bounce" size={60} />
                    <h3 className="text-3xl font-black uppercase italic tracking-tighter leading-none mb-4">Transmission <br/>Acknowledged.</h3>
                    <p className="text-black/40 text-sm font-bold uppercase tracking-widest italic">A coordinator will call you in 15 mins.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="border-b-2 border-black pb-6">
                      <h3 className="text-4xl font-black uppercase italic tracking-tighter leading-none">Instant <br />Estimate</h3>
                    </div>
                    <div className="space-y-5">
                      <input name="name" required placeholder="Full Name" className="w-full bg-transparent border-b border-black/10 py-4 text-sm outline-none focus:border-[#16a34a] transition-all font-bold placeholder:text-black/20" />
                      <input name="phone" required placeholder="Phone Number" className="w-full bg-transparent border-b border-black/10 py-4 text-sm outline-none focus:border-[#16a34a] transition-all font-bold placeholder:text-black/20" />
                      <input name="postcode" required placeholder="Postcode (SL / RG Corridor)" className="w-full bg-transparent border-b border-black/10 py-4 text-sm outline-none focus:border-[#16a34a] transition-all font-bold placeholder:text-black/20" />
                      <button disabled={loading} className="w-full bg-[#062a1f] text-white font-black py-6 uppercase tracking-[0.3em] text-[12px] hover:bg-[#16a34a] transition-all flex items-center justify-center gap-3 mt-8 shadow-xl cursor-pointer">
                        {loading ? <Loader2 className="animate-spin" size={18} /> : <span>Request Call Back <ArrowRight size={18} /></span>}
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
      <section className="bg-white border-b border-black/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center lg:justify-between items-center gap-12 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-3 font-black uppercase tracking-widest text-[9px] italic"><Check size={18} className="text-[#16a34a]" strokeWidth={4}/> EA Licensed Specialists</div>
          <div className="flex items-center gap-3 font-black uppercase tracking-widest text-[9px] italic"><Check size={18} className="text-[#16a34a]" strokeWidth={4}/> 95% Diversion Rate</div>
          <div className="flex items-center gap-3 font-black uppercase tracking-widest text-[9px] italic"><Check size={18} className="text-[#16a34a]" strokeWidth={4}/> Same-Day Rapid Response</div>
          <div className="flex items-center gap-3 font-black uppercase tracking-widest text-[9px] italic"><Check size={18} className="text-[#16a34a]" strokeWidth={4}/> £10M Public Liability</div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {services.map((s, i) => <ServiceCard key={i} i={i} {...s} />)}
          </div>
          <div className="flex justify-center">
             <motion.button whileHover={{ scale: 1.05, x: 5 }} className="group flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.5em] text-[#062a1f] border-b-2 border-[#16a34a] pb-3 hover:text-[#16a34a] transition-all italic cursor-pointer">
               Explore Full Fleet Capabilities <ArrowRight className="group-hover:translate-x-3 transition-transform" />
             </motion.button>
          </div>
        </div>
      </section>

      <ReviewSlider />

      {/* Comparison Section */}
      <section id="comparison" className="py-32 bg-[#fcfaf7] overflow-hidden px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-20">
            <p className="text-[#16a34a] font-black uppercase tracking-[0.5em] text-[10px] mb-4">The Advantage</p>
            <h2 className="text-6xl md:text-7xl font-black italic uppercase tracking-tighter leading-none text-[#062a1f]">Why Skips <br />Are Legacy.</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-black/5 border border-black/5 shadow-2xl">
            <div className="bg-white p-12">
              <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-10 text-red-600 flex items-center gap-3"><X size={24} /> Legacy Skips</h4>
              <ul className="space-y-6">
                {['Council permits required', 'Manual labor required (By You)', 'Neighbours fill it up', 'Driveway damage risk'].map(item => (
                  <li key={item} className="flex items-center gap-4 text-black/40 text-sm font-bold uppercase tracking-widest italic"><div className="w-1.5 h-1.5 bg-red-400 rounded-full" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-[#062a1f] p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#16a34a] opacity-10 blur-3xl" />
              <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-10 text-[#16a34a] flex items-center gap-3"><Check size={24} /> Total Waste Clearout</h4>
              <ul className="space-y-6">
                {['Zero permits needed', 'We load everything', 'Gone in 60 minutes', 'Sweep & clean finish'].map(item => (
                  <li key={item} className="flex items-center gap-4 text-white text-sm font-bold uppercase tracking-widest italic"><Check size={16} className="text-[#16a34a]" /> {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <p className="text-[#16a34a] font-black uppercase tracking-[0.5em] text-[10px] mb-6">Expertise</p>
            <h2 className="text-6xl font-black italic uppercase tracking-tighter leading-none text-[#062a1f] mb-12">Inquiry <br />Briefings.</h2>
            <a href="tel:01753252500" className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] border-b-2 border-black pb-2 hover:text-[#16a34a] hover:border-[#16a34a] transition-all italic">Direct Priority Line</a>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border-b border-black/10 overflow-hidden">
                <button onClick={() => setOpenFAQ(openFAQ === i ? -1 : i)} className="w-full py-10 flex justify-between items-center text-left hover:text-[#16a34a] transition-colors group cursor-pointer">
                  <span className="text-2xl font-black uppercase italic tracking-tighter leading-none">{f.q}</span>
                  {openFAQ === i ? <Minus size={20} /> : <Plus size={20} className="group-hover:rotate-90 transition-transform" />}
                </button>
                <AnimatePresence>
                  {openFAQ === i && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="pb-10 text-black/50 text-lg font-medium leading-relaxed italic">{f.a}</motion.div>}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section id="coverage" className="py-32 bg-[#fcfaf7] border-y border-black/5 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <div>
            <p className="text-[#16a34a] font-black uppercase tracking-[0.5em] text-[10px] mb-6">Territory</p>
            <h2 className="text-7xl font-black italic uppercase tracking-tighter mb-12 text-[#062a1f] leading-[0.9]">Thames <br />Valley HQ.</h2>
            <div className="grid grid-cols-2 gap-y-6 gap-x-12 border-t-2 border-black pt-12">
              {['Windsor SL4', 'Ascot SL5', 'Reading RG1', 'Slough SL1', 'Maidenhead SL6', 'Bracknell RG12', 'Woking GU21', 'Guildford GU1'].map(town => (
                <div key={town} className="flex items-center gap-4 group cursor-default">
                  <div className="w-1.5 h-1.5 bg-[#16a34a] rounded-full group-hover:scale-[2.5] transition-transform" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em] text-black/50 group-hover:text-[#16a34a] transition-colors italic">{town}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[550px] w-full bg-white border border-black/10 rounded-sm overflow-hidden shadow-2xl group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d159152.05445214044!2d-0.6723235478496417!3d51.41163486026955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487664687259160d%3A0xe726107b34b172a1!2sWindsor!5e0!3m2!1sen!2suk!4v1705000000000!5m2!1sen!2suk" 
              width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) contrast(1.1) invert(0.05)' }} 
              allowFullScreen="" loading="lazy" title="Coverage Map"
            />
            <div className="absolute inset-0 bg-[#062a1f]/10 pointer-events-none group-hover:opacity-0 transition-opacity duration-1000" />
            <div className="absolute bottom-10 right-10 bg-[#16a34a] text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.5em] shadow-2xl italic animate-pulse border border-white/20">90-Min Response Zone</div>
          </div>
        </div>
      </section>

      {/* Massive Final CTA */}
      <section className="py-48 bg-[#062a1f] overflow-hidden relative border-y border-white/5 px-6">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-8xl md:text-[15vw] text-white font-black italic uppercase leading-[0.75] tracking-tighter mb-28">
            DONE BY <br /><span className="text-[#16a34a]">LUNCH.</span>
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 items-center">
            <motion.a whileHover={{ scale: 1.05, y: -5 }} href="#quote" className="bg-white text-[#062a1f] px-20 py-8 rounded-sm font-black uppercase tracking-[0.4em] text-[13px] shadow-2xl w-full md:w-auto hover:bg-[#16a34a] hover:text-white transition-all cursor-pointer">Get Call Back Now</motion.a>
            <div className="h-px w-24 bg-white/10 hidden md:block" />
            <a href="tel:01753252500" className="flex items-center justify-center gap-8 text-4xl font-black italic uppercase tracking-tighter text-white hover:text-[#16a34a] transition-all">
              <Phone size={40} className="text-[#16a34a]" /> 01753 252 500
            </a>
          </div>
        </div>
      </section>

      {/* Mega Footer */}
      <footer className="bg-[#062a1f] text-white pt-32 pb-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-40">
            <div className="md:col-span-6">
              <div className="flex items-center gap-4 mb-10">
                <img src="logo.webp" alt="Logo" className="w-12 h-12 object-contain brightness-125" onError={(e) => { e.target.src = 'https://via.placeholder.com/40?text=TWC'; }} />
                <span className="text-3xl font-black uppercase tracking-tighter text-white leading-none">TOTAL WASTE <br/>CLEAROUT</span>
              </div>
              <p className="text-white/20 max-w-sm text-xl font-medium leading-relaxed mb-12 italic">The Thames Valley standard for professional waste management. High-ticket service for high-stakes environments.</p>
              <div className="flex gap-6">
                <a href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:bg-[#16a34a] transition-all bg-white/5 group cursor-pointer"><Instagram size={24} className="group-hover:scale-110 transition-transform" /></a>
                <a href="#" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:bg-[#16a34a] transition-all bg-white/5 group cursor-pointer"><Facebook size={24} className="group-hover:scale-110 transition-transform" /></a>
              </div>
            </div>
            <div className="md:col-span-3">
              <p className="text-[#16a34a] font-black uppercase tracking-widest text-[10px] mb-12">Fleet Assets</p>
              <ul className="space-y-6 font-black uppercase text-[11px] tracking-[0.3em] text-white/30">
                {['Wait & Load Service', 'Builders Refurb Waste', 'Residential Assets', 'Probate Logistics'].map(item => (<li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>))}
              </ul>
            </div>
            <div className="md:col-span-3">
              <p className="text-[#16a34a] font-black uppercase tracking-widest text-[10px] mb-12">Regional Access</p>
              <a href="tel:01753252500" className="text-4xl font-black italic uppercase hover:text-[#16a34a] transition-colors block mb-8 tracking-tighter">01753 252 500</a>
              <div className="space-y-3 text-white/20 text-[11px] font-bold uppercase tracking-[0.2em] italic"><p>Windsor HQ — SL4 Corridor</p><p>Waste Carrier CBDU12345</p></div>
              <motion.button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} whileHover={{ y: -5 }} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.4em] text-white/20 hover:text-white mt-20 transition-all border-b border-white/10 pb-2 cursor-pointer bg-transparent">
                <ArrowUp size={14} /> Back to Start
              </motion.button>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-black uppercase tracking-[0.5em] text-white/10">
            <p>© 2026 TOTAL WASTE CLEAROUT LTD. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-14"><a href="#" className="hover:text-white transition-colors">Compliance</a><a href="#" className="hover:text-white transition-colors">Privacy</a></div>
          </div>
        </div>
      </footer>
      
      <WhatsAppButton />
    </div>
  );
}
