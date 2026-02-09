import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Phone,
  Recycle,
  CheckCircle,
  ShieldCheck,
  Home,
  Briefcase,
  TreePine,
  HardHat,
  Hammer,
  Zap,
  Award,
  Users
} from 'lucide-react';

// Helper Components
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

const Services = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Waste Removal Services Berkshire & Surrey | Rubbish Clearance Reading, Slough, Guildford</title>
        <meta name="description" content="Professional waste removal services across Berkshire & Surrey. House clearance, garden waste removal, construction waste, office rip-outs. Same-day service, 94% recycling. Licensed & insured. Call 07769 844298." />
        <meta name="keywords" content="waste removal services, rubbish clearance Reading, house clearance Slough, garden waste removal Berkshire, office clearance Surrey, trade waste Guildford, commercial waste removal Woking, junk removal Bracknell, skip alternative Windsor, waste disposal Maidenhead" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/services" />
        <meta property="og:title" content="Professional Waste Removal Services | Total Waste Clearout" />
        <meta property="og:description" content="Complete waste removal services across Berkshire & Surrey. From home clearance to commercial rip-outs. 94% recycling rate. Same-day service." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/services" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Main Content */}
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
        {/* SERVICES HERO */}
        <header className="relative min-h-[85vh] md:min-h-screen flex items-center pt-32 pb-16 overflow-hidden bg-[#064e3b]">
          <div className="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&q=80&w=2000" alt="Waste removal services" className="w-full h-full object-cover opacity-30 mix-blend-overlay grayscale" loading="eager" />
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
                  <Phone size={20} className="group-hover:rotate-12 transition-transform" /> Instant Quote
                </a>
                <a href="https://wa.me/447769844298" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-lg font-black text-base uppercase transition-all hover:scale-105 shadow-2xl flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp
                </a>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border-4 border-slate-900 shadow-lg">
                  <Recycle size={36} className="text-[#16a34a] mb-2 mx-auto" />
                  <p className="text-[#16a34a] font-black text-3xl italic mb-1">94%</p>
                  <p className="text-slate-600 text-xs font-bold uppercase tracking-wider">Recycled</p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border-4 border-slate-900 shadow-lg">
                  <Zap size={36} className="text-orange-500 mb-2 mx-auto" />
                  <p className="text-orange-500 font-black text-3xl italic mb-1">&lt;2h</p>
                  <p className="text-slate-600 text-xs font-bold uppercase tracking-wider">Response</p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border-4 border-slate-900 shadow-lg">
                  <ShieldCheck size={36} className="text-[#16a34a] mb-2 mx-auto" />
                  <p className="text-[#16a34a] font-black text-3xl italic mb-1">£5M</p>
                  <p className="text-slate-600 text-xs font-bold uppercase tracking-wider">Insured</p>
                </div>
                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl border-4 border-slate-900 shadow-lg">
                  <Award size={36} className="text-orange-500 mb-2 mx-auto" />
                  <p className="text-orange-500 font-black text-3xl italic mb-1">100%</p>
                  <p className="text-slate-600 text-xs font-bold uppercase tracking-wider">Licensed</p>
                </div>
              </div>
            </div>
          </div>
        </header>

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
                  title="Garage & Loft"
                  description="Clear out cluttered garages, lofts, and storage spaces. We handle everything from old tools to heavy equipment."
                  features={['Complete garage clearance', 'Loft & attic clearing', 'Heavy item removal', 'Safe disposal guaranteed']}
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
                <p className="text-5xl md:text-7xl font-black text-slate-900 italic uppercase leading-[0.85] tracking-tighter mb-6">BUSINESS CLEARANCE.</p>
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
                        <span className="text-white/70">£5M public liability insurance and full waste carrier license</span>
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
                  <form className="space-y-6" onSubmit={e => e.preventDefault()}>
                    <div>
                      <label htmlFor="service-type" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Service Type</label>
                      <select id="service-type" className="w-full bg-white border-4 border-slate-900 p-4 font-black uppercase text-xs outline-none focus:border-[#16a34a]">
                        <option>Home Clearance</option>
                        <option>Garden Clearance</option>
                        <option>Office Rip-Out</option>
                        <option>Trade Waste</option>
                        <option>Retail Unit</option>
                        <option>Industrial Site</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="phone-service" className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Your Phone</label>
                      <input id="phone-service" type="tel" placeholder="07xxx xxxxxx" className="w-full bg-white border-4 border-slate-900 p-4 font-black uppercase text-xs outline-none focus:border-[#16a34a]" />
                    </div>
                    <button type="submit" className="w-full bg-[#16a34a] hover:bg-[#4ade80] text-white p-5 font-black uppercase text-sm transition-all shadow-xl active:scale-95">Get Fixed Price</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

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

export default Services;
