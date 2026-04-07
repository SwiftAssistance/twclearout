import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, Phone, Truck, Recycle, ShieldCheck, Clock, BadgeCheck, ChevronDown } from 'lucide-react';

const AREAS = [
  { name: 'Reading', slug: 'reading' },
  { name: 'Slough', slug: 'slough' },
  { name: 'Guildford', slug: 'guildford' },
  { name: 'Woking', slug: 'woking' },
  { name: 'Bracknell', slug: 'bracknell' },
  { name: 'Windsor', slug: 'windsor' },
  { name: 'Ascot', slug: 'ascot' },
  { name: 'Egham', slug: 'egham' },
  { name: 'Maidenhead', slug: 'maidenhead' },
  { name: 'Staines', slug: 'staines' },
];

const SERVICES = [
  { name: 'House Clearance & Waste Removal', desc: 'Full or partial house clearance. We remove furniture, appliances, rubbish, and everything in between — same day if needed.' },
  { name: 'Garden Waste Removal', desc: 'Trees, hedges, grass, soil, turf, decking, fencing — all garden waste removed and composted at licensed facilities.' },
  { name: 'Commercial Waste Removal', desc: 'Office and retail waste removal, desk strip-outs, WEEE disposal, and commercial rubbish clearance for businesses of all sizes.' },
  { name: 'Construction Waste Removal', desc: 'Rubble, plasterboard, timber, and mixed trade waste removed without skip permits. A faster alternative for builders.' },
  { name: 'End of Tenancy Waste Removal', desc: 'Landlord and tenant clearances. Same-day availability to help you meet handover deadlines and secure deposits.' },
  { name: 'Garage & Shed Waste Removal', desc: 'Cluttered garage or old shed cleared completely. We dismantle structures and remove all contents in a single visit.' },
];

const FAQS = [
  {
    q: 'What is waste removal and how does it work?',
    a: 'Waste removal is a man-and-van collection service where a licensed team comes to your property, loads all the waste, and takes it to a licensed transfer station for recycling and disposal. Unlike skip hire, you don\'t need a permit, there\'s nothing blocking your drive, and we do all the heavy lifting. Total Waste Clearout provides same-day waste removal across Berkshire and Surrey — call 07769 844298 for availability.',
  },
  {
    q: 'How much does waste removal cost in Berkshire and Surrey?',
    a: 'Waste removal prices depend on the volume and type of waste. At Total Waste Clearout, a single item starts from £50, a partial van load from £120, and a full van load from £220. All prices are fixed with no hidden disposal fees or fuel surcharges. Call us for a free, no-obligation waste removal quote.',
  },
  {
    q: 'Can you do same-day waste removal?',
    a: 'Yes. Total Waste Clearout offers same-day waste removal across Berkshire and Surrey. We typically respond within 2 hours and can collect the same day in most of our service area. Call 07769 844298 to check availability for your postcode.',
  },
  {
    q: 'Are you a licensed waste removal company?',
    a: 'Yes. Total Waste Clearout is a fully licensed waste carrier registered with the Environment Agency (licence CBDU630127). We carry £5M public liability insurance and provide a waste transfer note for every job — your legal proof of responsible disposal.',
  },
  {
    q: 'What types of waste can you remove?',
    a: 'We remove household rubbish, furniture, mattresses, white goods, garden waste, construction debris, office furniture, trade waste, and general commercial waste. We cannot accept asbestos, clinical waste, or other hazardous materials.',
  },
  {
    q: 'Is waste removal cheaper than a skip in Berkshire?',
    a: 'For most jobs, yes. Skip hire in Berkshire requires a council permit (up to £75) if placed on the road, takes 2–3 days for delivery and collection, and leaves all the loading to you. Our waste removal service is often a similar price but we arrive the same day, do all the lifting, and leave within hours. No permits, no waiting, no blocked driveways.',
  },
];

const FaqItem = ({ faq, isOpen, onToggle }) => (
  <div className="border-4 border-slate-900 overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 p-6 bg-[#ecf3ef] hover:bg-[#dcfce7] transition-colors text-left cursor-pointer"
      aria-expanded={isOpen}
    >
      <h3 className="text-base md:text-lg font-black uppercase italic text-slate-900">{faq.q}</h3>
      <ChevronDown size={22} className={`text-slate-900 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
      <div className="overflow-hidden">
        <p className="px-6 pb-6 pt-2 text-slate-700 font-bold leading-relaxed bg-[#ecf3ef]">{faq.a}</p>
      </div>
    </div>
  </div>
);

const WasteRemoval = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Waste Removal Berkshire & Surrey',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Total Waste Clearout',
      telephone: '07769844298',
      areaServed: 'Berkshire, Surrey',
    },
    serviceType: 'Waste Removal',
    description: 'Licensed waste removal service covering Berkshire and Surrey. Same-day collection, fixed pricing, 94% recycling rate.',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', minPrice: '50', priceCurrency: 'GBP' },
    },
  };

  return (
    <>
      <Helmet>
        <title>Waste Removal Berkshire & Surrey | Same-Day Licensed Collection | Total Waste Clearout</title>
        <meta name="description" content="Professional waste removal across Berkshire & Surrey. Same-day collection, fixed pricing, 94% recycling rate. Licensed carrier, £5M insured. Call 07769 844298 for a free quote." />
        <meta name="keywords" content="waste removal, waste removal berkshire, waste removal surrey, waste removal near me, waste removal service, same day waste removal, licensed waste removal, rubbish removal berkshire, rubbish removal surrey, waste collection berkshire, junk removal berkshire, man and van waste removal" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/waste-removal" />
        <meta property="og:title" content="Waste Removal Berkshire & Surrey | Total Waste Clearout" />
        <meta property="og:description" content="Same-day waste removal across Berkshire & Surrey. Licensed, insured, 94% recycling rate. Call 07769 844298." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/waste-removal" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero */}
      <header className="relative pt-20 pb-16 md:pt-28 md:pb-24 bg-[#064e3b] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="/hero.webp" alt="Waste removal service Berkshire Surrey" className="w-full h-full object-cover opacity-20 grayscale" loading="eager" fetchPriority="high" width="1600" height="1487" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/85 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block bg-[#4ade80] text-slate-900 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] italic border-2 border-white mb-6">Licensed Waste Carrier</span>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tighter uppercase italic">
              Waste Removal<br />
              <span className="text-[#4ade80]">Berkshire</span><br />
              <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>&amp; Surrey.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl font-bold leading-relaxed">
              Same-day waste removal from <strong className="text-white">£50</strong>. We collect, load, and dispose — all in a single visit. No skips, no permits, no hassle.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { Icon: BadgeCheck, text: 'EA Licensed — CBDU630127' },
                { Icon: ShieldCheck, text: '£5M Insured' },
                { Icon: Recycle, text: '94% Recycling Rate' },
                { Icon: Clock, text: 'Same-Day Available' },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-white/90 text-sm font-bold">
                  <Icon size={15} className="text-[#4ade80] shrink-0" />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="tel:07769844298" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-black px-8 py-4 font-black uppercase italic tracking-wide transition-colors shadow-[4px_4px_0px_#064e3b]">
                <Phone size={18} fill="black" /> Call 07769 844298
              </a>
              <Link to="/get-quote" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-8 py-4 font-black uppercase italic tracking-wide transition-colors">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* What is waste removal */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic">Professional Waste Removal Service</h2>
            <p className="text-4xl md:text-6xl font-black text-slate-900 italic uppercase leading-[0.9] tracking-tighter mb-10">
              WHAT IS<br />WASTE REMOVAL?
            </p>
            <div className="prose-custom space-y-5 text-slate-700 font-bold leading-relaxed text-base md:text-lg">
              <p>
                Waste removal is a professional collection service where a licensed team visits your property, loads all the waste into a vehicle, and takes it to a licensed transfer station for recycling and disposal. Unlike skip hire, waste removal requires no council permit, causes no obstruction on your property or road, and includes the labour — the crew do all the heavy lifting for you.
              </p>
              <p>
                Total Waste Clearout provides waste removal across Berkshire and Surrey, serving homes, landlords, businesses, and trade customers. We cover Reading, Slough, Guildford, Woking, Bracknell, Windsor, Ascot, Maidenhead, Egham, Staines, and all surrounding areas. In most cases we can arrange same-day waste removal — call <a href="tel:07769844298" className="text-[#16a34a] underline">07769 844298</a> to check availability.
              </p>
              <p>
                Our waste removal service is fully compliant with UK waste regulations. As a registered waste carrier (Environment Agency licence CBDU630127), we provide a waste transfer note for every job — your legal proof that your waste has been disposed of responsibly. We recycle or donate 94% of everything we collect, making us one of the most eco-friendly waste removal companies in the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-[#ecf3ef]">
        <div className="container mx-auto px-6">
          <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic">All Types Covered</h2>
          <p className="text-4xl md:text-6xl font-black text-slate-900 italic uppercase leading-[0.9] tracking-tighter mb-12">
            WASTE REMOVAL<br />SERVICES.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ name, desc }) => (
              <div key={name} className="bg-white border-4 border-slate-900 p-6 shadow-[6px_6px_0px_#16a34a]">
                <CheckCircle size={22} className="text-[#16a34a] mb-3" />
                <h3 className="font-black text-base uppercase italic text-slate-900 mb-2">{name}</h3>
                <p className="text-sm font-bold text-slate-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How waste removal works */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic">Simple Process</h2>
            <p className="text-4xl md:text-6xl font-black text-slate-900 italic uppercase leading-[0.9] tracking-tighter mb-10">
              HOW WASTE<br />REMOVAL WORKS.
            </p>
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              {[
                { n: 1, t: 'Call or Quote Online', d: 'Tell us what needs removing and your postcode. We give you a fixed price with no hidden fees.' },
                { n: 2, t: 'We Arrive Same Day', d: 'Our uniformed crew arrives at your property at the agreed time — often within 2 hours of your call.' },
                { n: 3, t: 'We Load Everything', d: 'We carry all waste from wherever it is — loft, garden, basement, upstairs rooms. You don\'t lift a thing.' },
                { n: 4, t: 'Sorted & Recycled', d: 'Your waste goes to a licensed facility. We recycle 94% of everything and provide a waste transfer note.' },
              ].map(({ n, t, d }) => (
                <div key={n} className="border-4 border-slate-900 p-6 bg-[#ecf3ef] text-center">
                  <div className="w-12 h-12 rounded-full bg-[#16a34a] text-white flex items-center justify-center font-black text-xl mx-auto mb-4 border-4 border-slate-900">{n}</div>
                  <h3 className="font-black text-sm uppercase italic text-slate-900 mb-2">{t}</h3>
                  <p className="text-xs font-bold text-slate-600 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>

            {/* Waste removal vs skip */}
            <div className="bg-slate-900 border-4 border-slate-900 p-8 md:p-10">
              <h3 className="text-2xl md:text-3xl font-black uppercase italic text-white mb-6">Waste Removal vs Skip Hire — Which Is Better?</h3>
              <div className="grid md:grid-cols-2 gap-6 text-sm font-bold">
                <div>
                  <p className="text-[#4ade80] font-black uppercase text-xs tracking-widest mb-3">Our Waste Removal Service</p>
                  {[
                    'No council permit required',
                    'Same-day collection available',
                    'We do all the heavy lifting',
                    'Gone within hours, not days',
                    'Access tight spaces and upstairs',
                    'Fixed price — no surprises',
                    'Waste transfer note included',
                  ].map(t => (
                    <div key={t} className="flex items-center gap-2 text-white/90 mb-2">
                      <CheckCircle size={14} className="text-[#4ade80] shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-orange-400 font-black uppercase text-xs tracking-widest mb-3">Traditional Skip Hire</p>
                  {[
                    'Permit needed if on public road (up to £75)',
                    '2–3 day wait for delivery',
                    'You load everything yourself',
                    'Skip sits for days blocking space',
                    'Cannot access narrow driveways',
                    'Variable weight charges',
                    'No guarantee of recycling',
                  ].map(t => (
                    <div key={t} className="flex items-center gap-2 text-white/50 mb-2">
                      <span className="w-3.5 h-3.5 border-2 border-white/30 rounded-sm shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waste removal pricing */}
      <section className="py-20 md:py-28 bg-[#ecf3ef]">
        <div className="container mx-auto px-6">
          <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic">Transparent Pricing</h2>
          <p className="text-4xl md:text-6xl font-black text-slate-900 italic uppercase leading-[0.9] tracking-tighter mb-4">
            WASTE REMOVAL<br />PRICES.
          </p>
          <p className="text-slate-600 font-bold mb-10 max-w-xl">Fixed prices for waste removal across Berkshire and Surrey. No hidden fees — the price we quote is the price you pay.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl">
            {[
              { label: 'Single Item', price: 'From £50', eg: 'e.g. sofa, fridge, mattress' },
              { label: 'Partial Load', price: 'From £120', eg: 'e.g. 2–3 items or a small clearance' },
              { label: 'Full Van Load', price: 'From £220', eg: 'e.g. garage, garden, or room clearance' },
              { label: 'Large Clearance', price: 'Custom Quote', eg: 'e.g. whole house, commercial site' },
            ].map(({ label, price, eg }) => (
              <div key={label} className="bg-white border-4 border-slate-900 p-6 shadow-[4px_4px_0px_#16a34a]">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{label}</p>
                <p className="text-2xl font-black italic text-[#16a34a] mb-1">{price}</p>
                <p className="text-xs font-bold text-slate-500 italic">{eg}</p>
              </div>
            ))}
          </div>
          <p className="text-sm font-bold text-slate-500 mt-6 italic">All waste removal prices include labour, loading, transport, and responsible disposal. Prices vary by volume and waste type.</p>
        </div>
      </section>

      {/* Area links */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic">Where We Operate</h2>
          <p className="text-4xl md:text-6xl font-black text-slate-900 italic uppercase leading-[0.9] tracking-tighter mb-4">
            WASTE REMOVAL<br />NEAR YOU.
          </p>
          <p className="text-slate-600 font-bold mb-10 max-w-xl">
            We provide waste removal across all of Berkshire and Surrey. Click your area for local pricing, coverage details, and same-day availability.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-3xl">
            {AREAS.map(({ name, slug }) => (
              <Link
                key={slug}
                to={`/waste-removal-${slug}`}
                className="bg-[#ecf3ef] border-4 border-slate-900 p-4 text-center hover:bg-[#dcfce7] hover:border-[#16a34a] transition-colors group"
              >
                <Truck size={18} className="text-[#16a34a] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="font-black text-xs uppercase italic text-slate-900">Waste Removal {name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-28 bg-[#ecf3ef]">
        <div className="container mx-auto px-6">
          <h2 className="text-[#16a34a] font-black uppercase tracking-[0.4em] text-xs mb-4 italic">Waste Removal FAQ</h2>
          <p className="text-4xl md:text-6xl font-black text-slate-900 italic uppercase leading-[0.9] tracking-tighter mb-10">
            FREQUENTLY<br />ASKED.
          </p>
          <div className="max-w-3xl space-y-3">
            {FAQS.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#064e3b]">
        <div className="container mx-auto px-6 text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#4ade80] mb-4">Ready to Book?</p>
          <h2 className="text-4xl md:text-6xl font-black text-white italic uppercase leading-[0.9] tracking-tighter mb-6">
            SAME-DAY WASTE<br />REMOVAL AVAILABLE.
          </h2>
          <p className="text-white/70 font-bold mb-8 max-w-lg mx-auto">Call now for a free, fixed-price waste removal quote. We cover all of Berkshire and Surrey — same-day slots available most days.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="tel:07769844298" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-black px-10 py-5 font-black uppercase italic tracking-wide text-lg transition-colors shadow-[6px_6px_0px_#022c22]">
              <Phone size={22} fill="black" /> 07769 844298
            </a>
            <Link to="/get-quote" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 px-10 py-5 font-black uppercase italic tracking-wide text-lg transition-colors">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WasteRemoval;
