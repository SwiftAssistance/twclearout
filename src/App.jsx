import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
  Home,
  Briefcase,
  TreePine,
  HardHat,
  Hammer,
  Scale,
  Zap,
  Award,
  Users,
  Instagram,
  Facebook,
  Linkedin,
  Quote,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

// Eagerly loaded (used on every page)
import ContactForm from './components/ContactForm';
import StatsTicker from './components/StatsTicker';
import HomeQuoteComponent from './components/HomeQuote';
import PlatformLogo from './components/PlatformLogo';

// Route-based code splitting
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const CookieUsage = lazy(() => import('./pages/CookieUsage'));
const Legal = lazy(() => import('./pages/Legal'));
const Sitemap = lazy(() => import('./pages/Sitemap'));
const EndOfTenancy = lazy(() => import('./pages/services/EndOfTenancy'));
const HardHatWasteHub = lazy(() => import('./pages/services/HardHatWasteHub'));
const GardenWaste = lazy(() => import('./pages/services/GardenWaste'));
const CommercialRipouts = lazy(() => import('./pages/services/CommercialRipouts'));
const HomeAndProbate = lazy(() => import('./pages/services/HomeAndProbate'));
const GarageShed = lazy(() => import('./pages/services/GarageShed'));
const Services = lazy(() => import('./pages/Services'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Areas = lazy(() => import('./pages/areas/Areas'));
const AreaPage = lazy(() => import('./pages/areas/AreaPage'));
const ServiceAreaPage = lazy(() => import('./pages/areas/ServiceAreaPage'));
const WasteRemovalPage = lazy(() => import('./pages/WasteRemoval'));
const NotFound = lazy(() => import('./pages/NotFound'));
const GetQuote = lazy(() => import('./pages/GetQuote'));

// --- GLOBAL DATA & CONFIGURATION ---

const TOWNS = ["Reading", "Slough", "Guildford", "Woking", "Bracknell", "Windsor", "Ascot", "Egham", "Maidenhead", "Staines"];

const REVIEWS = [
  {
    name: "Mark Saunders",
    location: "Reading",
    initials: "MS",
    color: "bg-white text-slate-900",
    accent: "text-[#16a34a]",
    text: "The best waste company in Berkshire. Same-day service, zero fuss, and much cheaper than the skip permit process. Uniformed team were brilliant.",
    platform: "google"
  },
  {
    name: "Sarah Jenkins",
    location: "Guildford",
    initials: "SJ",
    color: "bg-[#16a34a] text-white",
    accent: "text-white",
    text: "Cleared out my late father's property with such respect and speed. They recycled almost everything and provided a full audit note.",
    platform: "google"
  },
  {
    name: "Dave Miller",
    location: "Woking",
    initials: "DM",
    color: "bg-white text-slate-900",
    accent: "text-[#16a34a]",
    text: "Used them for trade waste on a kitchen fit. Way faster than a skip and saved me the headache of council permits. Reliable and professional.",
    platform: "google"
  },
  {
    name: "James Wilson",
    location: "Slough",
    initials: "JW",
    color: "bg-[#16a34a] text-white",
    accent: "text-white",
    text: "Total Waste Clearout is my go-to for commercial sites. They handle the compliance perfectly and the crews are incredibly hard-working.",
    platform: "google"
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
  <div className="w-full flex-shrink-0 px-1 sm:px-2">
    <div className={`p-4 sm:p-10 md:p-14 border-4 sm:border-8 border-slate-900 rounded-[2rem] md:rounded-[3rem] shadow-[10px_10px_0px_#ecf3ef] md:shadow-[20px_20px_0px_#ecf3ef] flex flex-col relative overflow-hidden transition-all ${review.color} h-auto`}>
      <Quote className={`absolute -top-4 -left-4 w-16 md:w-32 opacity-10 ${review.accent}`} aria-hidden="true" />

      <div className="relative z-10 flex-grow text-left mb-6 md:mb-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" className={review.accent} />)}
          </div>
          {review.platform && <PlatformLogo platform={review.platform} size={18} />}
        </div>
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

// Clone last slide at start + first slide at end for seamless infinite forward loop
const SLIDES = [REVIEWS[REVIEWS.length - 1], ...REVIEWS, REVIEWS[0]];

const ReviewsSection = ({ title = "CLIENTS TALK." }) => {
  const [current, setCurrent] = useState(1); // 1 = first real slide
  const [animated, setAnimated] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const goNext = useCallback(() => setCurrent(c => c + 1), []);
  const goPrev = useCallback(() => setCurrent(c => c - 1), []);

  const handleTransitionEnd = useCallback(() => {
    if (current === SLIDES.length - 1) {
      // Reached clone of first — silently jump to real first
      setAnimated(false);
      setCurrent(1);
    } else if (current === 0) {
      // Reached clone of last — silently jump to real last
      setAnimated(false);
      setCurrent(REVIEWS.length);
    }
  }, [current]);

  useEffect(() => {
    if (!animated) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
      return () => cancelAnimationFrame(id);
    }
  }, [animated]);

  const handleTouchStart = (e) => { setTouchStart(e.targetTouches[0].clientX); setTouchEnd(null); };
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const dist = touchStart - touchEnd;
    if (dist > 50) goNext();
    else if (dist < -50) goPrev();
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Dot index maps to the real slide (strip the clones at 0 and end)
  const dotIndex = (current - 1 + REVIEWS.length) % REVIEWS.length;

  return (
    <section id="reviews" className="py-24 md:py-32 bg-[#f8fafc] overflow-hidden text-left">
      <div className="container mx-auto px-4 sm:px-6 text-left">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-20 items-start text-left">
          <div className="lg:col-span-4 text-left text-slate-900">
            <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900">Proven Trust</h2>
            <p className="text-5xl md:text-8xl font-black text-slate-900 italic uppercase leading-[0.85] mb-12 tracking-tighter">{title}</p>
            <div className="flex items-center gap-4 mb-12 relative z-[60]">
              <button type="button" onClick={goPrev} aria-label="Previous review" className="w-12 h-12 md:w-14 md:h-14 border-4 border-slate-900 rounded-full flex items-center justify-center bg-white hover:bg-[#16a34a] hover:text-white transition-all text-slate-900 active:scale-90 shadow-md cursor-pointer pointer-events-auto">
                <ChevronLeft size={24} className="md:w-7 md:h-7" />
              </button>
              <button type="button" onClick={goNext} aria-label="Next review" className="w-12 h-12 md:w-14 md:h-14 border-4 border-slate-900 rounded-full flex items-center justify-center bg-white hover:bg-[#16a34a] hover:text-white transition-all text-slate-900 active:scale-90 shadow-md cursor-pointer pointer-events-auto">
                <ChevronRight size={24} className="md:w-7 md:h-7" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 relative overflow-hidden">
            <div
              className="relative overflow-hidden w-full cursor-grab active:cursor-grabbing select-none touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              style={{ touchAction: 'pan-y' }}
            >
              <div
                className="flex flex-nowrap"
                style={{
                  transform: `translateX(-${current * 100}%)`,
                  transition: animated ? 'transform 700ms cubic-bezier(0.23,1,0.32,1)' : 'none',
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {SLIDES.map((review, idx) => (
                  <ReviewCard key={`slide-${idx}`} review={review} idx={idx} />
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-start gap-4 mt-12 px-4 text-left">
              {REVIEWS.map((_, idx) => (
                <button
                  key={`dot-${idx}`}
                  aria-label={`Slide ${idx + 1}`}
                  onClick={() => { setAnimated(true); setCurrent(idx + 1); }}
                  className={`h-3 transition-all duration-500 rounded-full border-2 border-slate-900 ${idx === dotIndex ? 'w-12 bg-[#16a34a]' : 'w-3 bg-slate-200'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HomeHero = () => (
  <header className="relative min-h-[85vh] md:min-h-screen flex items-center pt-20 md:pt-24 overflow-hidden bg-[#064e3b]">
    <div className="absolute inset-0 z-0">
      <img src="/hero.webp" alt="Professional waste removal service loading rubbish in Berkshire" className="w-full h-full object-cover opacity-15 grayscale" loading="eager" fetchpriority="high" width="1600" height="1487" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-transparent to-transparent" />
    </div>
    <div className="container mx-auto px-6 relative z-10 text-left">
      <div className="max-w-5xl">
        <div className="mb-8 inline-block animate-pulse">
          <span className="bg-[#4ade80] text-slate-900 px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] italic border-2 md:border-4 border-white shadow-lg rounded-sm">Professional Clearance</span>
        </div>
        <h1 className="text-5xl md:text-[8rem] lg:text-[10rem] font-black text-white leading-[0.85] mb-8 tracking-tighter uppercase italic">WASTE <br /><span className="text-transparent stroke-text-light">REMOVAL</span> <br /><span className="text-[#4ade80]">BERKSHIRE<br />& SURREY.</span></h1>
        <p className="text-lg md:text-3xl text-white/70 mb-12 max-w-2xl font-bold leading-tight italic text-balance">Premium waste removal for <span className="text-white border-b-4 border-orange-500">Berkshire & Surrey</span>. Fully licensed. Fixed pricing. Professional crews.</p>
        <div className="flex flex-wrap gap-4 md:gap-6">
          <Link to="/services/" className="bg-orange-500 hover:bg-orange-400 text-black px-10 md:px-12 py-5 md:py-6 rounded-sm font-black text-lg md:text-xl uppercase italic tracking-wider transition-all hover:-translate-y-1 shadow-[8px_8px_0px_#022c22] active:shadow-none flex items-center cursor-pointer">
            Explore Services <ArrowRight className="ml-2" size={24} />
          </Link>
        </div>
      </div>
    </div>
  </header>
);

const HomeServices = () => (
  <section id="services" className="py-24 md:py-32 bg-white text-left text-slate-900 overflow-hidden">
    <div className="container mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900">Waste Removal Services</h2>
        <p className="text-5xl md:text-7xl lg:text-8xl font-[1000] text-slate-900 italic uppercase leading-[0.9] tracking-tighter">WASTE <br /> REMOVAL.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 text-left">
        <Link to="/services/commercial-ripouts/" className="lg:col-span-7 bg-[#dcfce7] p-10 md:p-20 flex flex-col justify-end min-h-[400px] border-4 border-slate-900 shadow-[12px_12px_0px_#16a34a] relative overflow-hidden group cursor-pointer hover:border-[#16a34a] transition-colors">
          <Truck size={350} className="absolute top-0 right-0 p-10 opacity-5 text-black group-hover:translate-x-10 transition-transform duration-1000" />
          <h3 className="text-4xl md:text-6xl font-[1000] text-slate-900 uppercase italic mb-6 leading-none tracking-tight">Full Site <br /> Waste Removal</h3>
          <p className="font-bold text-lg md:text-xl text-slate-700 max-w-sm italic leading-relaxed text-balance text-left">Industrial warehouses and multi-floor office blocks. Professional logistical removal.</p>
        </Link>

        <Link to="/services/commercial-ripouts/" className="lg:col-span-5 bg-[#064e3b] p-10 md:p-12 border-4 border-slate-900 flex flex-col justify-between shadow-xl text-white group cursor-pointer hover:border-[#4ade80] transition-colors">
          <Briefcase size={50} className="text-[#4ade80]" />
          <div>
            <h3 className="text-3xl md:text-4xl font-black uppercase italic mb-4 leading-tight text-white text-left">Commercial <br /> Waste Removal</h3>
            <p className="text-white/70 font-bold italic text-lg leading-snug text-balance text-left">Retail decommissioning with secure WEEE disposal notes and full audit trails.</p>
          </div>
        </Link>

        <Link to="/services/construction-waste/" className="lg:col-span-4 bg-slate-900 p-10 border-4 border-slate-900 flex flex-col justify-between text-white group hover:bg-orange-500 transition-all duration-500 cursor-pointer text-left">
           <HardHat size={40} className="text-orange-500 group-hover:text-black transition-colors" />
           <div className="text-left text-white">
             <h4 className="text-3xl font-black uppercase italic mb-2 leading-none">Trade Waste Removal</h4>
             <p className="text-white/50 group-hover:text-black/70 font-bold italic text-sm leading-tight">Skip-alternative for builders. Rubble and timber cleared instantly.</p>
           </div>
        </Link>

        <Link to="/services/garden-waste/" className="lg:col-span-8 bg-[#ecf3ef] border-4 border-slate-900 p-8 md:p-12 flex flex-col items-start shadow-lg cursor-pointer hover:border-[#16a34a] transition-colors group">
          <div className="w-full text-left">
            <TreePine size={40} className="text-[#16a34a] mb-4" aria-hidden="true" />
            <h4 className="text-4xl md:text-5xl font-black text-slate-900 uppercase italic leading-none mb-6">Garden Waste <br /> Removal.</h4>
            <p className="text-slate-600 font-bold italic text-lg mb-8 leading-snug text-balance">Garden clearing, shed demolition, and soil removal. Site-ready for landscaping.</p>
            <div className="flex flex-wrap gap-2">
              {['Sheds', 'Green Waste', 'Soil'].map(t => <span key={t} className="bg-white border-2 border-slate-900 px-4 py-1 text-[10px] font-black uppercase tracking-widest italic">{t}</span>)}
            </div>
          </div>
        </Link>
      </div>

      <div className="text-center">
        <Link to="/services/" className="inline-flex items-center gap-3 bg-slate-900 hover:bg-[#16a34a] text-white px-10 py-5 font-black uppercase italic tracking-wider text-lg transition-all shadow-[6px_6px_0px_#16a34a] hover:shadow-[6px_6px_0px_#064e3b] active:shadow-none active:translate-x-1 active:translate-y-1">
          View All Services <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  </section>
);

const HomeQuote = HomeQuoteComponent;

const WasteRemovalIntro = () => (
  <section className="py-20 md:py-28 bg-[#ecf3ef]">
    <div className="container mx-auto px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900">About Our Service</h2>
        <p className="text-4xl md:text-6xl lg:text-7xl font-[1000] text-slate-900 italic uppercase leading-[0.9] tracking-tighter mb-10">
          PROFESSIONAL<br />WASTE REMOVAL.
        </p>
        <div className="grid lg:grid-cols-2 gap-10 text-slate-700 font-bold leading-relaxed text-base">
          <div className="space-y-5">
            <p>
              Total Waste Clearout provides licensed waste removal across Berkshire and Surrey. Whether you need a single sofa collected or a full property cleared, our uniformed team arrives, loads everything, and leaves your space clean — often the same day you call.
            </p>
            <p>
              Our waste removal service covers every type of job: house clearances, garden waste removal, end of tenancy clearances, commercial and trade waste, garage and shed clearances, and construction debris. We take on the work skips can't — tight access, upstairs rooms, and jobs that need to be done today.
            </p>
            <p>
              Every waste removal job comes with a <strong className="text-slate-900">waste transfer note</strong> — your legal proof that your waste has been disposed of correctly by a licensed carrier. We recycle or donate 94% of everything we collect, keeping as much as possible out of landfill.
            </p>
          </div>
          <div className="space-y-5">
            <p>
              As an alternative to skip hire, our waste removal service is often faster and simpler. No council permit needed, no waiting days for a skip to arrive and be collected, no heavy lifting on your part. We arrive within hours, do the work, and the job is done.
            </p>
            <p>
              We serve all of Berkshire including Reading, Slough, Bracknell, Windsor, Ascot, and Maidenhead, and all of Surrey including Guildford, Woking, Egham, and Staines-upon-Thames. Same-day waste removal is available across our entire service area — call <a href="tel:07769844298" className="text-[#16a34a] underline hover:text-[#15803d]">07769 844298</a> or use the quote form to book.
            </p>
            <Link
              to="/waste-removal"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-[#16a34a] text-white px-8 py-4 font-black uppercase italic tracking-wider text-sm transition-all shadow-[4px_4px_0px_#16a34a] hover:shadow-[4px_4px_0px_#064e3b]"
            >
              Learn More About Our Waste Removal Service →
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const faqItems = [
  { q: "How much does waste removal cost in Berkshire?", a: "Total Waste Clearout offers fixed pricing with no hidden fees. A single item collection starts from £40, a partial load from £120, and a full load from £280. All prices include labour, loading, transport, and responsible disposal with a 94% recycling rate. We serve Reading, Slough, Bracknell, Windsor, Ascot, Maidenhead, Guildford, Woking, Egham and Staines." },
  { q: "Do you offer same-day waste collection?", a: "Yes, Total Waste Clearout offers same-day waste collection across Berkshire and Surrey. We respond within 2 hours of your call and can often collect on the same day. Our operating hours are Monday to Friday 7am-7pm and Saturday 8am-5pm. Call 07769 844298 or WhatsApp us for immediate availability." },
  { q: "Are you a licensed waste carrier?", a: "Yes, Total Waste Clearout is a fully licensed waste carrier registered with the Environment Agency (licence number CBDU630127). We carry £5 million public liability insurance and provide waste transfer notes for every job. We recycle 94% of all waste collected, making us one of the most environmentally responsible waste removal companies in Berkshire and Surrey." },
  { q: "What types of waste do you remove?", a: "We remove all types of non-hazardous waste including household rubbish, garden waste, construction debris, office furniture, end-of-tenancy waste, probate clearances, garage and shed demolitions, bulky items like sofas and mattresses, white goods, and commercial waste. We are a cheaper, faster alternative to skip hire across Berkshire and Surrey." },
  { q: "What areas do you cover?", a: "Total Waste Clearout covers all of Berkshire and Surrey including Reading (RG1-RG31), Slough (SL1-SL3), Guildford (GU1-GU5), Woking (GU21-GU22), Bracknell (RG12, RG42), Windsor (SL4), Ascot (SL5), Maidenhead (SL6), Egham (TW20), and Staines-upon-Thames (TW18-TW19) plus surrounding villages." },
  { q: "Why choose Total Waste Clearout over skip hire?", a: "Total Waste Clearout is a faster, easier, and often cheaper alternative to skip hire. No council permits needed, no waiting for delivery and collection, no blocked driveways, and no weight limits. We do all the heavy lifting, load the waste for you, and can collect same-day. Our 94% recycling rate means your waste is disposed of responsibly." }
];

const GeoFaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-left">
          <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900">Everything You Need to Know</h2>
          <p className="text-5xl md:text-7xl lg:text-8xl font-[1000] text-slate-900 italic uppercase leading-[0.9] tracking-tighter">FREQUENTLY<br />ASKED.</p>
        </div>

        <div className="max-w-4xl space-y-4">
          {faqItems.map((faq, i) => (
            <article key={i} className="border-4 border-slate-900 rounded-lg overflow-hidden" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 md:p-8 bg-[#ecf3ef] hover:bg-[#dcfce7] transition-colors text-left cursor-pointer"
                aria-expanded={openIndex === i}
              >
                <h3 className="text-lg md:text-xl font-black uppercase italic text-slate-900" itemProp="name">{faq.q}</h3>
                <ChevronDown size={24} className={`text-slate-900 shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
              >
                <div className="overflow-hidden" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                  <p className="px-6 md:px-8 pb-6 md:pb-8 pt-2 text-slate-700 font-bold leading-relaxed bg-[#ecf3ef]" itemProp="text">{faq.a}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const MapContact = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  return (
  <section id="location" className="py-24 md:py-32 bg-white">
    <div className="container mx-auto px-6">
      <div className="mb-16 text-center">
        <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900">Service Area</h2>
        <p className="text-5xl md:text-8xl font-black text-slate-900 italic uppercase leading-[0.85] tracking-tighter">WASTE REMOVAL ACROSS BERKSHIRE & SURREY.</p>
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

        <div className="border-4 border-slate-900 rounded-lg overflow-hidden shadow-lg h-[500px] relative bg-[#ecf3ef]">
          {mapLoaded ? (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201683.57894736842!2d-0.9781303!3d51.4542645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48768c3f0d0d0d0d%3A0x0!2sBerkshire%2C%20UK!5e0!3m2!1sen!2suk!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Service Area Map - Entire Berkshire Region"
            />
          ) : (
            <button
              onClick={() => setMapLoaded(true)}
              className="w-full h-full flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#dcfce7] transition-colors"
              aria-label="Load interactive map of service area"
            >
              <MapPin size={48} className="text-[#16a34a]" />
              <span className="font-black uppercase text-slate-700 text-sm tracking-widest italic">Click to load map</span>
              <span className="text-xs font-bold text-slate-500">Berkshire & Surrey service area</span>
            </button>
          )}
        </div>
      </div>
    </div>
  </section>
  );
};

const ModernServiceCard = ({ icon, emoji, title, description, features, price, dark, green, accentColor, borderColor }) => (
  <div className={`group relative ${accentColor} p-8 md:p-10 rounded-3xl border-4 ${borderColor} shadow-[8px_8px_0px_rgba(0,0,0,0.1)] hover:shadow-[16px_16px_0px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-3 overflow-hidden`}>
    {/* Background decoration */}
    <div className="absolute top-0 right-0 text-8xl opacity-5 pointer-events-none">{emoji}</div>

    {/* Icon header */}
    <div className="flex items-start justify-between mb-6">
      <div className={`p-4 rounded-2xl ${dark ? 'bg-[#4ade80]' : green ? 'bg-white' : 'bg-white'} border-2 ${borderColor} shadow-lg group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <div className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider ${dark || green ? 'bg-white/20 text-white' : 'bg-slate-900 text-white'}`}>
        Popular
      </div>
    </div>

    {/* Content */}
    <h3 className={`text-2xl md:text-3xl font-black uppercase italic mb-4 leading-tight ${dark || green ? 'text-white' : 'text-slate-900'}`}>
      {title}
    </h3>
    <p className={`font-bold mb-6 leading-relaxed text-sm ${dark ? 'text-white/80' : green ? 'text-white/90' : 'text-slate-600'}`}>
      {description}
    </p>

    {/* Features */}
    <ul className="space-y-3 mb-8">
      {features.map((feature, idx) => (
        <li key={idx} className={`flex items-start gap-3 text-sm font-bold ${dark ? 'text-white/70' : green ? 'text-white/80' : 'text-slate-600'}`}>
          <CheckCircle size={16} className={`${dark || green ? 'text-white' : 'text-[#16a34a]'} shrink-0 mt-0.5`} />
          <span>{feature}</span>
        </li>
      ))}
    </ul>

    {/* Price footer */}
    <div className={`pt-6 border-t-2 ${dark || green ? 'border-white/20' : 'border-slate-900/20'} flex items-center justify-between`}>
      <div>
        <p className={`text-xs font-black uppercase tracking-widest mb-1 ${dark || green ? 'text-white/40' : 'text-slate-400'}`}>Starting at</p>
        <p className={`text-2xl md:text-3xl font-black italic ${dark || green ? 'text-white' : 'text-[#16a34a]'}`}>{price}</p>
      </div>
      <a href="tel:07769844298" className={`p-3 rounded-full ${dark || green ? 'bg-white text-slate-900' : 'bg-[#16a34a] text-white'} hover:scale-110 transition-transform shadow-lg`}>
        <Phone size={20} />
      </a>
    </div>
  </div>
);

const AboutView = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
    {/* ABOUT HERO */}
    <header className="relative min-h-[55vh] flex items-center pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden bg-[#064e3b]">
      <div className="absolute inset-0 z-0">
        <img src="/hero.webp" alt="About us" className="w-full h-full object-cover opacity-15 grayscale" loading="lazy" width="1600" height="1487" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-transparent to-transparent" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 md:mb-8 inline-block animate-pulse">
            <span className="bg-[#4ade80] text-slate-900 px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] italic border-2 md:border-4 border-white shadow-2xl rounded-sm">Our Story</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-[7rem] lg:text-[9rem] font-black text-white leading-[0.85] mb-6 md:mb-8 tracking-tighter uppercase italic">
            BERKSHIRE'S<br/>
            <span className="text-[#4ade80]">WASTE</span><br/>
            <span className="text-transparent stroke-text-light">EXPERTS.</span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-12 font-bold leading-relaxed max-w-3xl mx-auto px-4">
            Over <span className="text-[#4ade80]">10 years</span> of professional waste removal excellence across <span className="text-orange-500">Berkshire & Surrey</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <a href="tel:07769844298" className="bg-white text-[#064e3b] px-8 py-4 rounded-lg font-black text-base uppercase transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3">
              Call 07769 844298
            </a>
            <a href="#quote" className="bg-[#4ade80] hover:bg-white text-slate-900 px-8 py-4 rounded-lg font-black text-base uppercase transition-all hover:scale-105 shadow-2xl flex items-center justify-center gap-3">Get a Quote</a>
          </div>
        </div>
      </div>
    </header>
    <StatsTicker />

    {/* ABOUT CONTENT */}
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Mission */}
          <div className="mb-20 bg-[#ecf3ef] p-6 md:p-10 lg:p-16 border-4 border-slate-900 rounded-xl md:rounded-2xl shadow-[6px_6px_0px_#16a34a] md:shadow-[8px_8px_0px_#16a34a]">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 mb-6">
              <Award size={40} className="text-[#16a34a] md:w-14 md:h-14" />
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-black text-slate-900 italic uppercase leading-tight">Our Mission</h2>
            </div>
            <p className="text-base md:text-xl text-slate-700 font-bold leading-relaxed mb-4 md:mb-6">
              At Total Waste Clearout, we're committed to providing <span className="text-[#16a34a] border-b-2 md:border-b-4 border-[#16a34a]">professional, eco-friendly waste removal</span> services that exceed expectations. Our mission is simple: make waste disappear while protecting our environment.
            </p>
            <p className="text-sm md:text-lg text-slate-600 font-bold leading-relaxed">
              We believe in sustainable practices, which is why we maintain a <span className="text-[#16a34a] font-black">94% recycling rate</span> and work with licensed facilities to ensure proper waste management.
            </p>
          </div>

          {/* Why Choose Us */}
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8 lg:gap-12 mb-20">
            <div className="bg-[#dcfce7] p-6 md:p-8 border-4 border-slate-900 rounded-xl md:rounded-2xl shadow-[6px_6px_0px_#16a34a] md:shadow-[8px_8px_0px_#16a34a] hover:shadow-[8px_8px_0px_#16a34a] md:hover:shadow-[12px_12px_0px_#16a34a] transition-all hover:-translate-y-1 md:hover:-translate-y-2 group cursor-pointer">
              <ShieldCheck size={40} className="text-[#16a34a] mb-3 md:mb-4 group-hover:scale-110 transition-transform md:w-12 md:h-12" />
              <h3 className="text-xl md:text-2xl font-black uppercase italic mb-3 md:mb-4 text-slate-900 group-hover:text-[#16a34a] transition-colors">Fully Licensed</h3>
              <p className="text-sm md:text-base text-slate-700 font-bold leading-relaxed">Environment Agency registered waste carrier (CBDU630127) with £5M public liability insurance. All work is compliant with UK waste regulations.</p>
            </div>
            <div className="bg-[#dcfce7] p-6 md:p-8 border-4 border-slate-900 rounded-xl md:rounded-2xl shadow-[6px_6px_0px_#16a34a] md:shadow-[8px_8px_0px_#16a34a] hover:shadow-[8px_8px_0px_#16a34a] md:hover:shadow-[12px_12px_0px_#16a34a] transition-all hover:-translate-y-1 md:hover:-translate-y-2 group cursor-pointer">
              <Recycle size={40} className="text-[#16a34a] mb-3 md:mb-4 group-hover:scale-110 transition-transform md:w-12 md:h-12" />
              <h3 className="text-xl md:text-2xl font-black uppercase italic mb-3 md:mb-4 text-slate-900 group-hover:text-[#16a34a] transition-colors">Eco-Friendly</h3>
              <p className="text-sm md:text-base text-slate-700 font-bold leading-relaxed">94% of waste is recycled or repurposed. We donate reusable items to local charities and minimize landfill impact.</p>
            </div>
            <div className="bg-[#dcfce7] p-6 md:p-8 border-4 border-slate-900 rounded-xl md:rounded-2xl shadow-[6px_6px_0px_#16a34a] md:shadow-[8px_8px_0px_#16a34a] hover:shadow-[8px_8px_0px_#16a34a] md:hover:shadow-[12px_12px_0px_#16a34a] transition-all hover:-translate-y-1 md:hover:-translate-y-2 group cursor-pointer">
              <Users size={40} className="text-[#16a34a] mb-3 md:mb-4 group-hover:scale-110 transition-transform md:w-12 md:h-12" />
              <h3 className="text-xl md:text-2xl font-black uppercase italic mb-3 md:mb-4 text-slate-900 group-hover:text-[#16a34a] transition-colors">Professional Team</h3>
              <p className="text-sm md:text-base text-slate-700 font-bold leading-relaxed">Uniformed, trained professionals who treat your property with respect. Background-checked and fully insured crew members.</p>
            </div>
            <div className="bg-[#dcfce7] p-6 md:p-8 border-4 border-slate-900 rounded-xl md:rounded-2xl shadow-[6px_6px_0px_#16a34a] md:shadow-[8px_8px_0px_#16a34a] hover:shadow-[8px_8px_0px_#16a34a] md:hover:shadow-[12px_12px_0px_#16a34a] transition-all hover:-translate-y-1 md:hover:-translate-y-2 group cursor-pointer">
              <Zap size={40} className="text-[#16a34a] mb-3 md:mb-4 group-hover:scale-110 transition-transform md:w-12 md:h-12" />
              <h3 className="text-xl md:text-2xl font-black uppercase italic mb-3 md:mb-4 text-slate-900 group-hover:text-[#16a34a] transition-colors">Fast Response</h3>
              <p className="text-sm md:text-base text-slate-700 font-bold leading-relaxed">Same-day and next-day services available. We respond to quotes within 2 hours and work 7 days a week.</p>
            </div>
          </div>

          {/* Service Areas */}
          <div className="bg-slate-900 p-8 md:p-12 lg:p-16 rounded-xl md:rounded-2xl border-4 border-slate-900 shadow-[8px_8px_0px_#4ade80] md:shadow-[12px_12px_0px_#4ade80]">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 mb-6 md:mb-8">
              <MapPin size={40} className="text-[#4ade80] md:w-14 md:h-14" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white italic uppercase text-center">Coverage Area</h2>
            </div>
            <p className="text-white/80 text-base md:text-lg font-bold text-center mb-8 md:mb-10">Serving the entire Thames Valley corridor</p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {TOWNS.map(town => (
                <span key={town} className="bg-white/10 hover:bg-white/20 border-2 border-white/20 px-4 md:px-6 py-2 md:py-3 rounded-lg text-white font-black uppercase text-xs md:text-sm flex items-center gap-2 transition-all hover:scale-105 cursor-default">
                  <MapPin size={14} className="text-[#4ade80] md:w-4 md:h-4" />
                  {town}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <HomeQuote />
  </div>
);

const ContactView = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
    {/* CONTACT HERO */}
    <header className="relative min-h-[55vh] flex items-center pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden bg-[#064e3b]">
      <div className="absolute inset-0 z-0">
        <img src="/hero.webp" alt="Contact us" className="w-full h-full object-cover opacity-15 grayscale" loading="lazy" width="1600" height="1487" />
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
);

const ServicesView = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
    {/* SERVICES HERO */}
    <header className="relative min-h-[55vh] flex items-center pt-20 md:pt-24 pb-16 overflow-hidden bg-[#064e3b]">
      <div className="absolute inset-0 z-0">
        <img src="/hero.webp" alt="Waste removal services" className="w-full h-full object-cover opacity-15 grayscale" loading="lazy" width="1600" height="1487" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b] via-transparent to-transparent" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6 inline-block animate-bounce">
            <span className="bg-orange-500 text-black px-6 py-3 text-xs font-black uppercase tracking-[0.3em] italic border-4 border-white shadow-2xl rounded-sm">Full Service Catalogue</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-none mb-6 tracking-tighter uppercase italic">
            <span className="text-[#4ade80]">WASTE</span> <span className="text-transparent stroke-text-light">REMOVAL</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 font-bold leading-relaxed max-w-3xl mx-auto">
            From <span className="text-[#4ade80] underline decoration-wavy">domestic clutter</span> to <span className="text-orange-500 underline decoration-wavy">industrial demolitions</span>.
            We handle everything with precision and care.
          </p>

          <div className="flex flex-wrap gap-6 justify-center mb-12">
            <a href="tel:07769844298" className="bg-white text-[#064e3b] px-8 py-4 rounded-lg font-black text-base uppercase transition-all hover:scale-105 shadow-2xl flex items-center gap-3 group">
              <Phone size={20} className="group-hover:rotate-12 transition-transform" /> Call for a Quote
            </a>
            <a href="#quote" className="bg-[#4ade80] hover:bg-white text-slate-900 px-8 py-4 rounded-lg font-black text-base uppercase transition-all hover:scale-105 shadow-2xl flex items-center gap-3">Get a Fixed Quote</a>
          </div>
        </div>
      </div>
    </header>
    <StatsTicker />

    {/* SERVICES GRID */}
    <section className="py-24 md:py-32 bg-gradient-to-b from-white via-[#f8fafc] to-white">
      <div className="container mx-auto px-6">
        {/* Residential Services */}
        <div className="mb-32">
          <div className="mb-16 text-center">
            <div className="inline-block mb-6">
              <Home size={48} className="text-[#16a34a] mx-auto mb-4" />
            </div>
            <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic">Residential Solutions</h2>
            <p className="text-5xl md:text-7xl font-black text-slate-900 italic uppercase leading-[0.85] tracking-tighter mb-6">HOME CLEARANCE.</p>
            <p className="text-slate-600 text-lg font-bold max-w-2xl mx-auto">Professional domestic waste removal with care, respect, and environmental responsibility.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ModernServiceCard
              icon={<Home size={40} className="text-[#16a34a]" />}
              emoji="🏠"
              title="Home Clearance"
              description="Complete property clearance including furniture, appliances, and general household items. Perfect for downsizing, probate, or moving."
              features={['Full or partial clearance', 'Same/next-day service available', 'Probate specialists', 'Donation of reusable items']}
              price="From £150"
              accentColor="bg-[#dcfce7]"
              borderColor="border-[#16a34a]"
            />
            <ModernServiceCard
              icon={<TreePine size={40} className="text-[#16a34a]" />}
              emoji="🌳"
              title="Garden & Green Waste"
              description="Professional garden clearance including soil, turf, tree branches, and shed demolition. Site left spotless and ready for landscaping."
              features={['Shed/outbuilding removal', 'Soil & rubble removal', 'Green waste recycling', 'Fencing removal']}
              price="From £120"
              accentColor="bg-[#dcfce7]"
              borderColor="border-[#16a34a]"
            />
            <ModernServiceCard
              icon={<Hammer size={40} className="text-[#16a34a]" />}
              emoji="🚗"
              title="Garage & Shed"
              description="Clear out cluttered garages, sheds, and storage spaces. We handle everything from old tools to heavy equipment."
              features={['Complete garage clearance', 'Shed & outbuilding clearing', 'Heavy item removal', 'Safe disposal guaranteed']}
              price="From £100"
              accentColor="bg-[#dcfce7]"
              borderColor="border-[#16a34a]"
            />
          </div>
        </div>

        {/* Commercial Services */}
        <div className="mb-32">
          <div className="mb-16 text-center">
            <div className="inline-block mb-6">
              <Briefcase size={48} className="text-orange-500 mx-auto mb-4" />
            </div>
            <h2 className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-4 italic">Commercial Solutions</h2>
            <p className="text-5xl md:text-7xl font-black text-slate-900 italic uppercase leading-[0.85] tracking-tighter mb-6">COMMERCIAL WASTE REMOVAL.</p>
            <p className="text-slate-600 text-lg font-bold max-w-2xl mx-auto">Industrial-grade waste management for businesses, builders, and commercial operations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            <ModernServiceCard
              icon={<Briefcase size={40} className="text-white" />}
              emoji="🏢"
              title="Office Rip-Outs"
              description="Full office decommissioning including desks, IT equipment, partitions, and cabling. WEEE disposal certificates provided."
              features={['Complete office clearance', 'IT equipment & WEEE disposal', 'Secure document destruction', 'Out-of-hours available']}
              price="From £300"
              dark
              accentColor="bg-slate-900"
              borderColor="border-[#4ade80]"
            />
            <ModernServiceCard
              icon={<HardHat size={40} className="text-white" />}
              emoji="🏗️"
              title="Trade & HardHat"
              description="Skip alternative for builders. We handle rubble, timber, metal, and mixed construction waste. No permit needed."
              features={['Rubble & hardcore removal', 'Timber & metal waste', 'Skip alternative - no permit', 'Same-day collection']}
              price="From £180"
              green
              accentColor="bg-[#16a34a]"
              borderColor="border-slate-900"
            />
            <ModernServiceCard
              icon={<Users size={40} className="text-orange-500" />}
              emoji="🏬"
              title="Retail Units"
              description="Shop fitting removal, retail rip-outs, and end-of-lease clearances. Full compliance documentation provided."
              features={['Shop fitting removal', 'Retail unit clearance', 'Lease end services', 'Rapid turnaround']}
              price="From £250"
              accentColor="bg-orange-50"
              borderColor="border-orange-500"
            />
            <ModernServiceCard
              icon={<Hammer size={40} className="text-[#16a34a]" />}
              emoji="🏭"
              title="Industrial Sites"
              description="Large-scale clearances for warehouses, factories, and industrial units. Professional logistics and heavy machinery available."
              features={['Warehouse clearance', 'Industrial equipment', 'Heavy machinery removal', 'Project management']}
              price="From £500"
              accentColor="bg-[#ecf3ef]"
              borderColor="border-[#16a34a]"
            />
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-32">
          <div className="mb-16 text-center">
            <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic underline decoration-slate-900">Simple Process</h2>
            <p className="text-5xl md:text-7xl font-black text-slate-900 italic uppercase leading-[0.85] tracking-tighter">HOW IT WORKS.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: 1, title: 'Contact Us', desc: 'Call, WhatsApp, or send a photo of what needs clearing. We respond in under 2 hours.' },
              { num: 2, title: 'Fixed Quote', desc: 'Get a transparent, fixed price with no hidden fees. All labor and disposal included.' },
              { num: 3, title: 'We Clear', desc: 'Professional uniformed crew arrives on time. We do all the heavy lifting and loading.' },
              { num: 4, title: 'Job Done', desc: 'Site left spotless. 94% recycled. Waste transfer note provided for compliance.' }
            ].map((step) => (
              <div key={step.num} className="bg-white p-8 border-4 border-slate-900 rounded-lg shadow-lg text-center group hover:bg-[#dcfce7] transition-all">
                <div className="bg-[#16a34a] text-white w-16 h-16 rounded-full flex items-center justify-center font-black text-3xl mx-auto mb-6 border-4 border-slate-900 group-hover:scale-110 transition-transform">{step.num}</div>
                <h3 className="text-xl font-black uppercase italic mb-4 text-slate-900">{step.title}</h3>
                <p className="font-bold text-slate-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-orange-500 inline-block px-8 py-4 border-4 border-slate-900 shadow-[8px_8px_0px_#16a34a]">
              <p className="text-slate-900 font-black text-lg md:text-2xl uppercase italic">Same-day service available • 7 days a week</p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-slate-900 p-12 md:p-20 border-8 border-slate-900 rounded-2xl shadow-xl text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase italic mb-8 text-white">Why Choose <br/><span className="text-[#4ade80]">Total Waste?</span></h2>
              <ul className="space-y-6 text-lg font-bold">
                <li className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-[#4ade80] shrink-0 mt-1" />
                  <div>
                    <span className="font-black uppercase text-[#4ade80]">Licensed & Insured</span><br/>
                    <span className="text-white/70">£5M public liability insurance — waste carrier licence CBDU630127</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-[#4ade80] shrink-0 mt-1" />
                  <div>
                    <span className="font-black uppercase text-[#4ade80]">94% Recycling Rate</span><br/>
                    <span className="text-white/70">Committed to environmental sustainability</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-[#4ade80] shrink-0 mt-1" />
                  <div>
                    <span className="font-black uppercase text-[#4ade80]">Fixed Pricing</span><br/>
                    <span className="text-white/70">No hidden fees or disposal charges</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle size={24} className="text-[#4ade80] shrink-0 mt-1" />
                  <div>
                    <span className="font-black uppercase text-[#4ade80]">Professional Crews</span><br/>
                    <span className="text-white/70">Uniformed, trained, and fully equipped teams</span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg border-4 border-slate-900">
              <h3 className="text-2xl font-black uppercase italic mb-6 text-slate-900">Get Your Quote</h3>
              <ContactForm subject="Homepage Sidebar Quote" compact />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

const ServiceCard = ({ emoji, title, description, features, price, dark, green }) => (
  <div className={`p-8 md:p-10 border-4 border-slate-900 rounded-lg shadow-[8px_8px_0px_${green ? '#064e3b' : dark ? '#4ade80' : '#16a34a'}] hover:shadow-[12px_12px_0px_${green ? '#064e3b' : dark ? '#4ade80' : '#16a34a'}] group cursor-pointer transition-all hover:-translate-y-2 ${dark ? 'bg-slate-900 text-white' : green ? 'bg-[#16a34a] text-white' : 'bg-[#dcfce7]'}`}>
    <div className="text-5xl mb-4">{emoji}</div>
    <h3 className={`text-2xl md:text-3xl font-black uppercase italic mb-4 ${dark || green ? 'text-white' : 'text-slate-900 group-hover:text-[#16a34a]'} transition-colors`}>{title}</h3>
    <p className={`font-bold mb-6 leading-relaxed ${dark ? 'text-white/70' : green ? 'text-white/90' : 'text-slate-700'}`}>{description}</p>
    <ul className="space-y-2 text-sm font-bold">
      {features.map((feature, idx) => (
        <li key={idx} className={`flex items-start gap-2 ${dark ? 'text-white/60' : green ? 'text-white/80' : 'text-slate-600'}`}>
          <span className={dark || green ? 'text-white' : 'text-[#16a34a]'}>✓</span> {feature}
        </li>
      ))}
    </ul>
    <div className={`mt-6 pt-6 border-t-2 ${dark || green ? 'border-white/20' : 'border-slate-900/20'}`}>
      <p className={`text-xs font-black uppercase tracking-widest ${dark ? 'text-white/40' : green ? 'text-white/40' : 'text-slate-400'}`}>{price}</p>
    </div>
  </div>
);

// --- MAIN APPLICATION ---

const App = () => {
  const location = useLocation();
  const isLandingPage = location.pathname === '/get-quote';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentView, setCurrentView] = useState('home');

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

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);


  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      {/* WHATSAPP FLOAT */}
      {!isLandingPage && <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3 pointer-events-none text-slate-900">
        <div role="status" className="bg-white text-black px-4 py-2 rounded-lg text-[10px] font-[900] shadow-2xl animate-bounce hidden md:block border-2 border-[#16a34a] pointer-events-auto select-none uppercase tracking-tighter">SNAP A PHOTO FOR A QUOTE!</div>
        <a href="https://wa.me/447769844298" target="_blank" rel="noopener noreferrer" aria-label="Contact us on WhatsApp at 07769844298" className="bg-[#25D366] hover:bg-[#128C7E] text-white p-5 rounded-2xl shadow-[0_0_40px_rgba(37,211,102,0.5)] transition-all hover:scale-110 active:scale-95 group flex items-center gap-4 border-2 border-white/20 pointer-events-auto"><div className="flex flex-col items-end leading-none text-white text-right"><span className="text-[9px] font-black opacity-80 uppercase tracking-tighter text-white text-right">Live Response</span><span className="text-sm font-black tracking-tight text-white text-right">WHATSAPP US</span></div><svg viewBox="0 0 24 24" className="w-8 h-8 fill-current text-white" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg></a>
      </div>}

      {/* NAVIGATION */}
      {!isLandingPage && <nav role="navigation" className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 transform-gpu ${isScrolled ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-md py-2' : 'bg-[#064e3b] py-3 md:py-4'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center relative">
          <Link to="/" onClick={() => setIsMenuOpen(false)} aria-label="Go to homepage" className="flex items-center gap-3 md:gap-4 shrink-0 group text-left"><div className="relative h-12 w-12 md:h-16 md:w-16 transition-transform group-hover:scale-105"><img src="/logo.webp" alt="Total Waste Clearout Ltd logo" className="h-full w-full object-contain relative z-10" loading="eager" width="64" height="64" /></div><div className="flex flex-col leading-none text-left"><span className={`font-[1000] text-lg md:text-2xl tracking-tighter uppercase italic transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`}>Total Waste</span><span className="text-[#4ade80] font-black text-[8px] md:text-[10px] tracking-[.3em] md:tracking-[.4em] uppercase text-left text-balance">Clearout Ltd</span></div></Link>
          <div className={`hidden xl:flex items-center gap-8 font-black text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${isScrolled ? 'text-slate-600' : 'text-white/80'}`}>
            <Link to="/" onClick={() => setIsMenuOpen(false)} className={`transition-all relative group py-2 hover:text-[#16a34a] ${location.pathname === '/' ? 'text-[#16a34a]' : ''}`}>Home<span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'}`} /></Link>
            <Link to="/services/" onClick={() => setIsMenuOpen(false)} className={`transition-all relative group py-2 hover:text-[#16a34a] ${location.pathname.startsWith('/services') ? 'text-[#16a34a]' : ''}`}>Services<span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${location.pathname.startsWith('/services') ? 'w-full' : 'w-0 group-hover:w-full'}`} /></Link>
            <Link to="/areas/" onClick={() => setIsMenuOpen(false)} className={`transition-all relative group py-2 hover:text-[#16a34a] ${location.pathname.startsWith('/areas') ? 'text-[#16a34a]' : ''}`}>Areas<span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${location.pathname.startsWith('/areas') ? 'w-full' : 'w-0 group-hover:w-full'}`} /></Link>
            <Link to="/about/" onClick={() => setIsMenuOpen(false)} className={`transition-all relative group py-2 hover:text-[#16a34a] ${location.pathname === '/about' ? 'text-[#16a34a]' : ''}`}>Why Us<span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${location.pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`} /></Link>
            <Link to="/contact/" onClick={() => setIsMenuOpen(false)} className={`transition-all relative group py-2 hover:text-[#16a34a] ${location.pathname === '/contact' ? 'text-[#16a34a]' : ''}`}>Contact<span className={`absolute bottom-0 left-0 h-0.5 bg-orange-500 transition-all duration-300 ${location.pathname === '/contact' ? 'w-full' : 'w-0 group-hover:w-full'}`} /></Link>
            <div className="h-6 w-px bg-white/20 mx-2" /><a href="tel:07769844298" className="bg-[#16a34a] hover:bg-slate-900 text-white px-6 py-3 rounded-sm flex items-center gap-3 transition-all shadow-md font-black italic uppercase tracking-wider"><Phone size={16} fill="white" /> 07769 844298</a>
          </div>
          <button className={`xl:hidden p-2 transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu" aria-expanded={isMenuOpen} aria-controls="mobile-menu">{isMenuOpen ? <X size={28} /> : <Menu size={28} />}</button>
        </div>
        <div id="mobile-menu" role="navigation" aria-label="Mobile navigation menu" className={`xl:hidden fixed left-0 w-full bg-white transition-all duration-500 ease-in-out transform-gpu border-t border-slate-100 shadow-2xl overflow-y-auto ${isMenuOpen ? 'translate-y-0 opacity-100 visible max-h-[calc(100vh-72px)]' : '-translate-y-full opacity-0 invisible h-0'}`} style={{ top: '72px' }}>
          <div className="p-8 flex flex-col h-full overflow-y-auto text-left text-slate-900">
            <div className="flex flex-col gap-6 font-black text-xl uppercase tracking-widest italic text-slate-900 mb-12">
              <Link key="m-home" to="/" onClick={() => setIsMenuOpen(false)} className={`border-b border-slate-100 pb-4 flex justify-between items-center transition-colors ${location.pathname === '/' ? 'text-[#16a34a]' : ''}`}>Home <ChevronRight size={24} className={location.pathname === '/' ? 'text-[#16a34a]' : 'text-slate-200'} /></Link>
              <Link key="m-serv" to="/services/" onClick={() => setIsMenuOpen(false)} className={`border-b border-slate-100 pb-4 flex justify-between items-center transition-colors ${location.pathname.startsWith('/services') ? 'text-[#16a34a]' : ''}`}>Services <ChevronRight size={24} className={location.pathname.startsWith('/services') ? 'text-[#16a34a]' : 'text-slate-200'} /></Link>
              <Link key="m-areas" to="/areas/" onClick={() => setIsMenuOpen(false)} className={`border-b border-slate-100 pb-4 flex justify-between items-center transition-colors ${location.pathname.startsWith('/areas') ? 'text-[#16a34a]' : ''}`}>Areas <ChevronRight size={24} className={location.pathname.startsWith('/areas') ? 'text-[#16a34a]' : 'text-slate-200'} /></Link>
              <Link key="m-about" to="/about/" onClick={() => setIsMenuOpen(false)} className={`border-b border-slate-100 pb-4 flex justify-between items-center transition-colors ${location.pathname === '/about' ? 'text-[#16a34a]' : ''}`}>Why Us <ChevronRight size={24} className={location.pathname === '/about' ? 'text-[#16a34a]' : 'text-slate-200'} /></Link>
              <Link key="m-contact" to="/contact/" onClick={() => setIsMenuOpen(false)} className={`border-b border-slate-100 pb-4 flex justify-between items-center transition-colors ${location.pathname === '/contact' ? 'text-[#16a34a]' : ''}`}>Contact <ChevronRight size={24} className={location.pathname === '/contact' ? 'text-[#16a34a]' : 'text-slate-200'} /></Link>
            </div>
            <div className="mt-auto space-y-6 text-center pb-12"><a href="tel:07769844298" className="bg-[#16a34a] text-white w-full p-6 text-center rounded-sm flex items-center justify-center gap-4 font-black italic text-xl uppercase shadow-lg"><Phone fill="white" /> CALL 07769 844298</a></div>
          </div>
        </div>
      </nav>}

      {/* PAGE CONTENT */}
      <main className="relative min-h-[70vh] text-left text-slate-900">
        <Suspense fallback={<div className="min-h-[70vh] flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#16a34a] border-t-transparent rounded-full animate-spin" /></div>}>
        <Routes>
          <Route path="/" element={
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-slate-900 text-left">
              <Helmet>
                <title>Total Waste Clearout | Waste Removal Berkshire & Surrey | 07769 844298</title>
                <meta name="description" content="Professional waste removal across Berkshire & Surrey. Same-day collection, fixed pricing, 94% recycling rate. House clearance, garden waste, commercial waste. Call 07769 844298." />
                <link rel="canonical" href="https://totalwasteclearout.co.uk/" />
              </Helmet>
              <HomeHero />
              {/* STATS STRIP */}
              <section className="bg-[#16a34a] py-6 border-y-4 border-black relative z-20 shadow-xl">
                <div className="container mx-auto px-6 text-left text-white">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                    {STATS.map((s, idx) => (<div key={`stat-${idx}`} className="flex items-center gap-3 md:gap-5 text-white"><div className="bg-[#064e3b] text-[#4ade80] p-2 md:p-3 rounded-sm shrink-0 shadow-sm"><s.Icon size={20} /></div><div className="flex flex-col"><span className="text-xl md:text-3xl font-black uppercase italic leading-none">{s.value}</span><span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest opacity-80">{s.label}</span></div></div>))}
                  </div>
                </div>
              </section>
              {/* TRUST BADGES */}
              <section className="bg-slate-900 py-6 md:py-8 border-b-4 border-black">
                <div className="container mx-auto px-6">
                  <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                    <div className="flex items-center gap-3">
                      <ShieldCheck size={28} className="text-[#4ade80] shrink-0" />
                      <div>
                        <span className="text-white font-black text-sm md:text-base uppercase">EA Registered</span>
                        <span className="block text-[#4ade80] font-black text-xs md:text-sm tracking-wider">CBDU630127</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Scale size={28} className="text-[#4ade80] shrink-0" />
                      <span className="text-white font-black text-sm md:text-base uppercase">£5M Insured</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Recycle size={28} className="text-[#4ade80] shrink-0" />
                      <span className="text-white font-black text-sm md:text-base uppercase">94% Recycling</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle size={28} className="text-[#4ade80] shrink-0" />
                      <span className="text-white font-black text-sm md:text-base uppercase">Waste Transfer Notes</span>
                    </div>
                  </div>
                </div>
              </section>
              <HomeServices />
              <WasteRemovalIntro />
              <ReviewsSection title="CLIENTS TALK." />
              <HomeQuote />
              <GeoFaqSection />
              <MapContact />
            </div>
          } />
          <Route path="/waste-removal" element={<WasteRemovalPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-usage" element={<CookieUsage />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/services/end-of-tenancy" element={<EndOfTenancy />} />
          <Route path="/services/construction-waste" element={<HardHatWasteHub />} />
          <Route path="/services/garden-waste" element={<GardenWaste />} />
          <Route path="/services/commercial-ripouts" element={<CommercialRipouts />} />
          <Route path="/services/home-probate-clearance" element={<HomeAndProbate />} />
          <Route path="/services/garage-shed" element={<GarageShed />} />
          <Route path="/areas" element={<Areas />} />
          <Route path="/waste-removal-reading" element={<AreaPage />} />
          <Route path="/waste-removal-slough" element={<AreaPage />} />
          <Route path="/waste-removal-guildford" element={<AreaPage />} />
          <Route path="/waste-removal-woking" element={<AreaPage />} />
          <Route path="/waste-removal-bracknell" element={<AreaPage />} />
          <Route path="/waste-removal-windsor" element={<AreaPage />} />
          <Route path="/waste-removal-ascot" element={<AreaPage />} />
          <Route path="/waste-removal-egham" element={<AreaPage />} />
          <Route path="/waste-removal-maidenhead" element={<AreaPage />} />
          <Route path="/waste-removal-staines" element={<AreaPage />} />
          {/* Service + Area combination pages (60 pages) */}
          <Route path="/house-clearance-reading" element={<ServiceAreaPage />} />
          <Route path="/house-clearance-slough" element={<ServiceAreaPage />} />
          <Route path="/house-clearance-guildford" element={<ServiceAreaPage />} />
          <Route path="/house-clearance-woking" element={<ServiceAreaPage />} />
          <Route path="/house-clearance-bracknell" element={<ServiceAreaPage />} />
          <Route path="/house-clearance-windsor" element={<ServiceAreaPage />} />
          <Route path="/house-clearance-ascot" element={<ServiceAreaPage />} />
          <Route path="/house-clearance-egham" element={<ServiceAreaPage />} />
          <Route path="/house-clearance-maidenhead" element={<ServiceAreaPage />} />
          <Route path="/house-clearance-staines" element={<ServiceAreaPage />} />
          <Route path="/end-of-tenancy-clearance-reading" element={<ServiceAreaPage />} />
          <Route path="/end-of-tenancy-clearance-slough" element={<ServiceAreaPage />} />
          <Route path="/end-of-tenancy-clearance-guildford" element={<ServiceAreaPage />} />
          <Route path="/end-of-tenancy-clearance-woking" element={<ServiceAreaPage />} />
          <Route path="/end-of-tenancy-clearance-bracknell" element={<ServiceAreaPage />} />
          <Route path="/end-of-tenancy-clearance-windsor" element={<ServiceAreaPage />} />
          <Route path="/end-of-tenancy-clearance-ascot" element={<ServiceAreaPage />} />
          <Route path="/end-of-tenancy-clearance-egham" element={<ServiceAreaPage />} />
          <Route path="/end-of-tenancy-clearance-maidenhead" element={<ServiceAreaPage />} />
          <Route path="/end-of-tenancy-clearance-staines" element={<ServiceAreaPage />} />
          <Route path="/garden-waste-removal-reading" element={<ServiceAreaPage />} />
          <Route path="/garden-waste-removal-slough" element={<ServiceAreaPage />} />
          <Route path="/garden-waste-removal-guildford" element={<ServiceAreaPage />} />
          <Route path="/garden-waste-removal-woking" element={<ServiceAreaPage />} />
          <Route path="/garden-waste-removal-bracknell" element={<ServiceAreaPage />} />
          <Route path="/garden-waste-removal-windsor" element={<ServiceAreaPage />} />
          <Route path="/garden-waste-removal-ascot" element={<ServiceAreaPage />} />
          <Route path="/garden-waste-removal-egham" element={<ServiceAreaPage />} />
          <Route path="/garden-waste-removal-maidenhead" element={<ServiceAreaPage />} />
          <Route path="/garden-waste-removal-staines" element={<ServiceAreaPage />} />
          <Route path="/commercial-waste-removal-reading" element={<ServiceAreaPage />} />
          <Route path="/commercial-waste-removal-slough" element={<ServiceAreaPage />} />
          <Route path="/commercial-waste-removal-guildford" element={<ServiceAreaPage />} />
          <Route path="/commercial-waste-removal-woking" element={<ServiceAreaPage />} />
          <Route path="/commercial-waste-removal-bracknell" element={<ServiceAreaPage />} />
          <Route path="/commercial-waste-removal-windsor" element={<ServiceAreaPage />} />
          <Route path="/commercial-waste-removal-ascot" element={<ServiceAreaPage />} />
          <Route path="/commercial-waste-removal-egham" element={<ServiceAreaPage />} />
          <Route path="/commercial-waste-removal-maidenhead" element={<ServiceAreaPage />} />
          <Route path="/commercial-waste-removal-staines" element={<ServiceAreaPage />} />
          <Route path="/construction-waste-removal-reading" element={<ServiceAreaPage />} />
          <Route path="/construction-waste-removal-slough" element={<ServiceAreaPage />} />
          <Route path="/construction-waste-removal-guildford" element={<ServiceAreaPage />} />
          <Route path="/construction-waste-removal-woking" element={<ServiceAreaPage />} />
          <Route path="/construction-waste-removal-bracknell" element={<ServiceAreaPage />} />
          <Route path="/construction-waste-removal-windsor" element={<ServiceAreaPage />} />
          <Route path="/construction-waste-removal-ascot" element={<ServiceAreaPage />} />
          <Route path="/construction-waste-removal-egham" element={<ServiceAreaPage />} />
          <Route path="/construction-waste-removal-maidenhead" element={<ServiceAreaPage />} />
          <Route path="/construction-waste-removal-staines" element={<ServiceAreaPage />} />
          <Route path="/garage-shed-clearance-reading" element={<ServiceAreaPage />} />
          <Route path="/garage-shed-clearance-slough" element={<ServiceAreaPage />} />
          <Route path="/garage-shed-clearance-guildford" element={<ServiceAreaPage />} />
          <Route path="/garage-shed-clearance-woking" element={<ServiceAreaPage />} />
          <Route path="/garage-shed-clearance-bracknell" element={<ServiceAreaPage />} />
          <Route path="/garage-shed-clearance-windsor" element={<ServiceAreaPage />} />
          <Route path="/garage-shed-clearance-ascot" element={<ServiceAreaPage />} />
          <Route path="/garage-shed-clearance-egham" element={<ServiceAreaPage />} />
          <Route path="/garage-shed-clearance-maidenhead" element={<ServiceAreaPage />} />
          <Route path="/garage-shed-clearance-staines" element={<ServiceAreaPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/get-quote" element={<GetQuote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </main>

      {/* FOOTER */}
      {!isLandingPage && <footer className="bg-[#064e3b] pt-24 pb-12 border-t-8 border-[#4ade80] text-white text-left">
        <div className="container mx-auto px-6">
          {/* Top Section — 4 columns */}
          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 md:gap-16 mb-16">
            {/* Brand */}
            <div className="lg:col-span-4 space-y-6">
              <Link to="/" aria-label="Go to homepage" className="flex items-center gap-4 group cursor-pointer">
                <img src="/logo.webp" alt="Total Waste Clearout Ltd licensed waste removal Berkshire Surrey" className="w-14 h-14 object-contain group-hover:rotate-12 transition-transform" loading="lazy" />
                <div className="flex flex-col leading-none">
                  <span className="font-black text-2xl md:text-3xl tracking-tighter uppercase italic leading-none text-white">Total Waste</span>
                  <span className="text-[#4ade80] font-black text-xs tracking-[.4em] uppercase">Clearout Ltd</span>
                </div>
              </Link>
              <p className="text-white/50 max-w-xs font-bold italic leading-relaxed text-balance">
                Berkshire & Surrey's trusted waste removal company. Fully licensed, £5M insured, 94% recycling rate.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/5 border border-white/10 px-4 py-2.5 text-[9px] font-black uppercase tracking-widest text-white/50 italic flex items-center gap-2">
                  <ShieldCheck size={12} className="text-[#4ade80]" aria-hidden="true" /> EA Registered
                </div>
                <div className="bg-white/5 border border-white/10 px-4 py-2.5 text-[9px] font-black uppercase tracking-widest text-white/50 italic flex items-center gap-2">
                  <Recycle size={12} className="text-[#4ade80]" aria-hidden="true" /> 94% Recycled
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-3 space-y-6">
              <h5 className="font-black text-[#4ade80] uppercase tracking-[0.3em] text-xs italic border-l-4 border-[#4ade80] pl-4 leading-none">Our Services</h5>
              <ul className="space-y-3">
                <li><Link to="/waste-removal" className="text-white/70 hover:text-[#4ade80] transition-all flex items-center gap-2 text-sm font-bold"><Truck size={14} className="text-[#4ade80]/60 shrink-0" /> Waste Removal Service</Link></li>
                <li><Link to="/services/home-probate-clearance/" className="text-white/70 hover:text-[#4ade80] transition-all flex items-center gap-2 text-sm font-bold"><Home size={14} className="text-[#4ade80]/60 shrink-0" /> House & Probate Clearance</Link></li>
                <li><Link to="/services/end-of-tenancy/" className="text-white/70 hover:text-[#4ade80] transition-all flex items-center gap-2 text-sm font-bold"><Home size={14} className="text-[#4ade80]/60 shrink-0" /> End of Tenancy Clearance</Link></li>
                <li><Link to="/services/garden-waste/" className="text-white/70 hover:text-[#4ade80] transition-all flex items-center gap-2 text-sm font-bold"><TreePine size={14} className="text-[#4ade80]/60 shrink-0" /> Garden Waste Removal</Link></li>
                <li><Link to="/services/commercial-ripouts/" className="text-white/70 hover:text-[#4ade80] transition-all flex items-center gap-2 text-sm font-bold"><Briefcase size={14} className="text-[#4ade80]/60 shrink-0" /> Commercial Waste Removal</Link></li>
                <li><Link to="/services/construction-waste/" className="text-white/70 hover:text-[#4ade80] transition-all flex items-center gap-2 text-sm font-bold"><HardHat size={14} className="text-[#4ade80]/60 shrink-0" /> Construction Waste Removal</Link></li>
                <li><Link to="/services/garage-shed/" className="text-white/70 hover:text-[#4ade80] transition-all flex items-center gap-2 text-sm font-bold"><Hammer size={14} className="text-[#4ade80]/60 shrink-0" /> Garage & Shed Clearance</Link></li>
              </ul>
              <Link to="/services/" className="text-[10px] font-black uppercase tracking-widest text-[#4ade80]/60 hover:text-[#4ade80] transition-colors italic inline-flex items-center gap-1">View All Services <ArrowRight size={10} /></Link>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-6">
              <h5 className="font-black text-[#4ade80] uppercase tracking-[0.3em] text-xs italic border-l-4 border-[#4ade80] pl-4 leading-none">Company</h5>
              <ul className="space-y-3">
                <li><Link to="/about/" className="text-white/70 hover:text-[#4ade80] transition-all text-sm font-bold">About Us</Link></li>
                <li><Link to="/areas/" className="text-white/70 hover:text-[#4ade80] transition-all text-sm font-bold">Areas We Serve</Link></li>
                <li><Link to="/contact/" className="text-white/70 hover:text-[#4ade80] transition-all text-sm font-bold">Contact & Quotes</Link></li>
                <li><Link to="/privacy-policy" className="text-white/70 hover:text-[#4ade80] transition-all text-sm font-bold">Privacy Policy</Link></li>
                <li><Link to="/cookie-usage" className="text-white/70 hover:text-[#4ade80] transition-all text-sm font-bold">Cookie Policy</Link></li>
                <li><Link to="/legal" className="text-white/70 hover:text-[#4ade80] transition-all text-sm font-bold">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3 space-y-6">
              <h5 className="font-black text-[#4ade80] uppercase tracking-[0.3em] text-xs italic border-l-4 border-[#4ade80] pl-4 leading-none">Get In Touch</h5>
              <div className="space-y-4">
                <a href="tel:07769844298" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-[#4ade80] rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone size={18} className="text-[#064e3b]" fill="#064e3b" />
                  </div>
                  <div>
                    <span className="text-white font-black text-lg block leading-tight">07769 844298</span>
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">7am — 7pm, 7 days</span>
                  </div>
                </a>
                <a href="https://wa.me/447769844298" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-[#25D366] rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  </div>
                  <div>
                    <span className="text-white font-black text-sm block leading-tight">WhatsApp Us</span>
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">Instant quote</span>
                  </div>
                </a>
                <a href="mailto:office@totalwasteclearout.co.uk" className="flex items-center gap-3 group">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform group-hover:bg-[#4ade80]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:text-[#064e3b]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  </div>
                  <div>
                    <span className="text-white font-black text-sm block leading-tight">office@totalwasteclearout.co.uk</span>
                    <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">Email anytime</span>
                  </div>
                </a>
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://www.instagram.com/totalwasteclearout" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#4ade80] transition-colors hover:text-black group">
                  <Instagram size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://m.facebook.com/totalwasteclearoutt/" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#4ade80] transition-colors hover:text-black group">
                  <Facebook size={18} className="group-hover:scale-110 transition-transform" />
                </a>
                <a href="https://share.google/LlF3dWmvgamOAhgMy" target="_blank" rel="noopener noreferrer" aria-label="View us on Google Business" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#4ade80] transition-colors hover:text-black group">
                  <svg viewBox="0 0 24 24" width="18" height="18" className="group-hover:scale-110 transition-transform fill-current"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053z"/></svg>
                </a>
                <a href="https://www.bark.com/en/gb/b/total-waste-clearout/j8mElk/" target="_blank" rel="noopener noreferrer" aria-label="View our Bark.com profile" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-[#4ade80] transition-colors hover:text-black group">
                  <Award size={18} className="group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Areas bar */}
          <div className="border-t border-white/5 py-10">
            <h5 className="font-black text-[#4ade80] uppercase tracking-[0.3em] text-[10px] italic mb-6 text-center text-balance">Areas We Cover Across Berkshire & Surrey</h5>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-y-3 gap-x-8 text-center">
              {TOWNS.map(t => (
                <Link key={`town-f-${t}`} to={`/waste-removal-${t.toLowerCase()}/`} className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-[#4ade80] transition-colors italic flex items-center justify-center gap-2">
                  <MapPin size={10} /> {t}
                </Link>
              ))}
            </div>
            <div className="text-center mt-4">
              <Link to="/areas/" className="text-[10px] font-black uppercase tracking-widest text-[#4ade80]/60 hover:text-[#4ade80] transition-colors italic inline-flex items-center gap-1">View All Service Areas <ArrowRight size={10} /></Link>
            </div>
          </div>

          {/* Copyright bar */}
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/20 text-[9px] font-black uppercase tracking-[0.3em] text-center md:text-left leading-relaxed text-balance">
              © 2026 Total Waste Clearout Ltd. Registered in England & Wales.
            </p>
            <div className="flex items-center gap-2">
              <div className="hidden md:flex gap-1" aria-hidden="true">
                {[...Array(5)].map((_, i) => <Star key={`foot-star-${i}`} size={10} className="text-[#4ade80] fill-current" />)}
              </div>
              <span className="text-white/20 text-[9px] font-black uppercase tracking-widest">5-Star Rated Service</span>
            </div>
          </div>
        </div>
      </footer>}

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
