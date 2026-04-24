import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HardHat, CheckCircle, Truck, Clock, MapPin, Phone, Mail, Hammer, Wrench, Drill, Package } from 'lucide-react';

const HardHatWasteHub = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatWeRemove = [
    { icon: Hammer, label: "Construction Debris" },
    { icon: Package, label: "Plasterboard & Drywall" },
    { icon: Wrench, label: "Metal & Piping" },
    { icon: Drill, label: "Wood & Timber" },
    { icon: Package, label: "Packaging Materials" },
    { icon: Truck, label: "Heavy Materials" }
  ];

  const serviceAreas = [
    "Reading", "Slough", "Guildford", "Woking", "Bracknell",
    "Windsor", "Ascot", "Egham", "Maidenhead", "Staines",
    "Wokingham", "Camberley", "Farnborough", "Aldershot"
  ];

  const benefits = [
    { title: "No Skip Permits Needed", desc: "Avoid council permit delays and costs - we load and go the same day" },
    { title: "Trade-Focused Service", desc: "Trusted by builders, plumbers, electricians, and contractors across Berkshire & Surrey" },
    { title: "Flexible Collection Times", desc: "Early morning or evening collections available to suit your project schedule" },
    { title: "Licensed Waste Carrier", desc: "Fully registered with Environment Agency - all waste transfer notes provided" },
    { title: "Competitive Trade Rates", desc: "Volume discounts and account terms available for regular customers" },
    { title: "Heavy Lifting Included", desc: "Our experienced crews handle all loading - no need for your team to help" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Builders Clearout Reading Slough | Construction Waste Clearout & Trade Waste Berkshire</title>
        <meta name="description" content="Professional builders clearout and construction waste clearout in Reading, Slough, Guildford & Berkshire. No skip permits. Same-day service, licensed carrier from £120." />
        <meta name="keywords" content="builders clearout, builders clearout reading, builders clearout slough, builders clearout guildford, builders clearout berkshire, builders clearout surrey, construction clearout, construction clearout reading, construction clearout berkshire, building site clearout, building site clearout reading, trade clearout, trade clearout berkshire, construction waste removal, construction waste removal reading, construction waste removal slough, construction waste removal guildford, construction waste removal berkshire, construction waste removal surrey, builder waste removal, builder waste removal reading, builder waste collection slough, trade waste collection berkshire, trade waste collection surrey, skip hire alternative reading, skip hire alternative slough, skip hire alternative berkshire, skip alternative near me, rubble removal reading, rubble removal slough, rubble clearance berkshire, plasterboard disposal, timber waste removal, building waste collection, renovation waste clearout, renovation waste removal, kitchen refit waste, bathroom refit waste, demolition waste berkshire, construction site clearance, builder skip alternative, cheap skip alternative reading, same day builders clearout, same day builder waste collection, no permit waste removal" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/services/construction-waste/" />
        <meta property="og:title" content="Builders Clearout &amp; Construction Waste Removal | Total Waste Clearout" />
        <meta property="og:description" content="Professional builders clearout and construction waste removal for tradespeople across Berkshire & Surrey. No permits, same-day service." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/services/construction-waste/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you do builders clearouts in Reading?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Total Waste Clearout provides same-day builders clearout services throughout Reading and Berkshire. We collect all construction waste including rubble, timber, plasterboard, tiles, and mixed building waste. No council permits needed. Call 07769 844298 for immediate availability."
              }
            },
            {
              "@type": "Question",
              "name": "How much does a construction clearout cost in Berkshire?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Construction clearout prices in Berkshire start from £120 for a small load, £250 for a medium load, and are quoted for larger projects. All prices include our crew loading everything — you don't need to fill a skip. Call Total Waste Clearout on 07769 844298 for an instant quote."
              }
            },
            {
              "@type": "Question",
              "name": "Are you cheaper than a skip for builders clearouts in Berkshire?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "In most cases, yes. Skip hire in Berkshire requires a council permit, takes days to arrange, has weight limits, and you load it yourself. Total Waste Clearout arrives same-day, our crew loads everything for you, and there are no permits required. We provide waste transfer notes for every builders clearout."
              }
            }
          ]
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#4ade80] rounded-2xl flex items-center justify-center">
              <HardHat size={40} className="text-[#064e3b]" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic text-white tracking-tight leading-none">
              Builders Clearout &amp; Construction Waste
            </h1>
          </div>
          <p className="text-white/80 text-lg md:text-xl font-bold italic max-w-3xl">
            Fast, reliable builders clearout and construction waste removal for tradespeople across Berkshire and Surrey. No skip permits. No waiting. Same-day construction clearouts.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Same-Day Service</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Trade Accounts</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">No Permits</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">

          {/* What We Remove */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">What We Remove</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {whatWeRemove.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-[#4ade80]/10 border-4 border-slate-900 rounded-xl p-6 hover:shadow-[8px_8px_0px_#064e3b] transition-all">
                    <div className="w-16 h-16 bg-[#16a34a] rounded-xl flex items-center justify-center mb-4">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="font-black text-xl uppercase text-slate-900">{item.label}</h3>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 bg-white border-4 border-slate-900 rounded-xl p-8">
              <h3 className="font-black text-2xl uppercase text-slate-900 mb-6">Trade Waste We Handle:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Plasterboard and drywall offcuts",
                  "Timber, wood, and MDF",
                  "Bathroom suites and fixtures",
                  "Kitchen units and worktops",
                  "Bricks, concrete, and rubble",
                  "Metal piping and radiators",
                  "Electrical cables and fixtures",
                  "Packaging and cardboard",
                  "Insulation materials (non-asbestos)",
                  "Site clearance and general waste",
                  "Flooring and carpets",
                  "Windows and doors"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle size={24} className="text-[#16a34a] shrink-0" />
                    <span className="text-slate-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t-2 border-slate-200">
                <p className="text-slate-600 text-sm">
                  <strong>Note:</strong> We cannot handle asbestos. For hazardous waste, please contact us to arrange specialist disposal.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Trade-Friendly Pricing</h2>
            <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] border-4 border-slate-900 rounded-xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£120+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Small Load</h3>
                  <p className="text-white/80">Perfect for single-room jobs - bathroom, kitchen, or small renovation projects.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£250+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Medium Load</h3>
                  <p className="text-white/80">Ideal for multi-room refits or week-long construction projects.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">POA</div>
                  <h3 className="font-black text-xl uppercase mb-3">Large/Regular</h3>
                  <p className="text-white/80">Multiple loads, ongoing projects, or account customers - call for best rates.</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/90 font-bold text-center mb-4">
                  All prices include loading, transport, and compliant disposal with waste transfer notes.
                </p>
                <div className="bg-[#4ade80]/20 border-2 border-[#4ade80] rounded-lg p-4 text-center">
                  <p className="text-white font-black text-lg">
                    Trade Accounts Available - Volume Discounts - Invoice Terms
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Service Areas */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8 flex items-center gap-4">
              <MapPin size={40} className="text-[#16a34a]" />
              Service Areas
            </h2>
            <div className="bg-[#4ade80]/10 border-4 border-slate-900 rounded-xl p-8">
              <p className="text-slate-700 font-bold text-lg mb-6">
                Serving construction professionals throughout Berkshire and Surrey:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  { name: "Reading", slug: "/waste-removal-reading/" },
                  { name: "Slough", slug: "/waste-removal-slough/" },
                  { name: "Guildford", slug: "/waste-removal-guildford/" },
                  { name: "Woking", slug: "/waste-removal-woking/" },
                  { name: "Bracknell", slug: "/waste-removal-bracknell/" },
                  { name: "Windsor", slug: "/waste-removal-windsor/" },
                  { name: "Ascot", slug: "/waste-removal-ascot/" },
                  { name: "Egham", slug: "/waste-removal-egham/" },
                  { name: "Maidenhead", slug: "/waste-removal-maidenhead/" },
                  { name: "Staines", slug: "/waste-removal-staines/" },
                ].map((area, idx) => (
                  <Link key={idx} to={area.slug} className="flex items-center gap-2 hover:text-[#16a34a] transition-colors group">
                    <CheckCircle size={20} className="text-[#16a34a] shrink-0" />
                    <span className="font-bold text-slate-900 group-hover:text-[#16a34a] underline decoration-[#16a34a]/30">Waste Removal {area.name}</span>
                  </Link>
                ))}
              </div>
              <p className="text-slate-600 mt-6 text-sm">
                Working further afield? We cover all surrounding areas - contact us for multi-site or regional coverage.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Why Tradespeople Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_#e2e8f0]">
                  <h3 className="font-black text-xl uppercase text-[#16a34a] mb-3 flex items-center gap-2">
                    <CheckCircle size={24} />
                    {benefit.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Service Description */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Builders Clearout &amp; Construction Waste Services — Reading, Berkshire &amp; Surrey</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-white border-4 border-slate-900 rounded-xl p-8 shadow-[8px_8px_0px_#e2e8f0] mb-8">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Total Waste Clearout Ltd is the go-to builders clearout service for builders, plumbers, electricians, and contractors working across Reading, Slough, Guildford, Woking, and throughout Berkshire and Surrey. We understand the demands of construction projects — tight deadlines, limited site space, and the need for efficient builders clearouts that don't slow down your work.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Forget the hassle of skip hire with its council permits, waiting times, parking restrictions, and manual loading. Our professional builders clearout service is faster, more flexible, and often more cost-effective. We arrive at your site when it suits you — early morning before your crew starts or evening after they finish — load everything ourselves, and clear the site completely. No permits required, no waiting for council approval, and no skip blocking your workspace or parking.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We handle all types of construction clearouts: plasterboard from drywalling jobs, timber offcuts from carpentry work, packaging materials from new installations, bathroom and kitchen rip-out debris, bricks and concrete, metal piping and electrical waste. Our experienced teams know how to load efficiently and safely, segregating materials for maximum recycling. Whether you're fitting one kitchen in Windsor or managing a multi-unit refurbishment in Bracknell, we scale our builders clearout service to match your needs.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  As a fully licensed waste carrier registered with the Environment Agency (licence CBDU630127), we provide complete legal compliance for your construction clearouts. All waste is transported to authorised facilities with proper documentation — we issue waste transfer notes for every collection, giving you and your clients peace of mind. With £5 million public liability insurance and a 94% recycling rate, we're the professional choice for builders clearouts and trade waste removal across Berkshire and Surrey. Many local contractors use us exclusively because we're reliable, efficient, and understand the pressures of site work.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] border-4 border-slate-900 rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">
                Need A Builders Clearout?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Same-day builders clearouts across Berkshire &amp; Surrey. No permits. No hassle. Just fast, professional service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="tel:07769844298"
                  className="inline-flex items-center gap-3 bg-[#4ade80] hover:bg-[#16a34a] text-slate-900 font-black uppercase px-8 py-5 rounded-xl transition-colors border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a] text-lg"
                >
                  <Phone size={24} />
                  Call 07769 844298
                </a>
                <a
                  href="mailto:office@totalwasteclearout.co.uk"
                  className="inline-flex items-center gap-3 bg-white hover:bg-slate-100 text-slate-900 font-black uppercase px-8 py-5 rounded-xl transition-colors border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a] text-lg"
                >
                  <Mail size={24} />
                  Email Us
                </a>
              </div>
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <Link to="/" className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#064e3b] text-white font-black uppercase px-8 py-4 rounded-xl transition-colors border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a]">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HardHatWasteHub;
