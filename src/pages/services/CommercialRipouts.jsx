import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Briefcase, CheckCircle, Building, Clock, MapPin, Phone, Mail, Store, ShoppingBag, Warehouse } from 'lucide-react';

const CommercialRipouts = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatWeRemove = [
    { icon: Briefcase, label: "Office Equipment" },
    { icon: Store, label: "Retail Fixtures" },
    { icon: Building, label: "Partition Walls" },
    { icon: ShoppingBag, label: "Shop Fittings" },
    { icon: Warehouse, label: "Stock & Inventory" },
    { icon: Building, label: "Signage & Displays" }
  ];

  const serviceAreas = [
    "Reading", "Slough", "Guildford", "Woking", "Bracknell",
    "Windsor", "Ascot", "Egham", "Maidenhead", "Staines",
    "Wokingham", "Camberley", "Farnborough", "Aldershot"
  ];

  const benefits = [
    { title: "Out-of-Hours Service", desc: "Evening, weekend, and overnight clearances to minimize business disruption in Reading and Guildford" },
    { title: "Complete Strip-Out", desc: "From office desks to retail fixtures - we clear everything down to bare walls and floors" },
    { title: "Data Security", desc: "Secure handling and destruction of confidential documents and IT equipment with certificates provided" },
    { title: "Fast Turnaround", desc: "Single-day clearances available for urgent commercial projects and lease-end deadlines" },
    { title: "Licensed & Compliant", desc: "Full waste carrier licensing, WEEE compliance, and comprehensive documentation for your records" },
    { title: "Commercial Insurance", desc: "£5M public liability and employer's liability - fully insured for commercial premises work" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Commercial Clearance Reading Slough | Office Strip-Out Berkshire Surrey</title>
        <meta name="description" content="Professional commercial site rip-outs in Reading, Slough, Guildford. Office, retail, restaurant clearance. Out-of-hours service, licensed from £400." />
        <meta name="keywords" content="commercial clearance, office strip-out Reading, retail clearance Slough, shop rip-out Guildford, Berkshire Surrey, business waste" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/services/commercial-ripouts" />
        <meta property="og:title" content="Commercial Site Rip-outs | Total Waste Clearout Berkshire" />
        <meta property="og:description" content="Professional commercial clearance and strip-out services across Berkshire & Surrey. Out-of-hours available." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/services/commercial-ripouts" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#4ade80] rounded-2xl flex items-center justify-center">
              <Briefcase size={40} className="text-[#064e3b]" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic text-white tracking-tight leading-none">
              Commercial Site Rip-outs
            </h1>
          </div>
          <p className="text-white/80 text-lg md:text-xl font-bold italic max-w-3xl">
            Professional commercial clearance and strip-out services across Berkshire and Surrey. Offices, retail units, restaurants, and industrial sites cleared efficiently.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Out-of-Hours Available</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Single-Day Clearance</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">WEEE Compliant</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">

          {/* Service Description */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Complete Commercial Strip-Out Services</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-white border-4 border-slate-900 rounded-xl p-8 shadow-[8px_8px_0px_#e2e8f0] mb-8">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Total Waste Clearout Ltd provides comprehensive commercial site rip-out and clearance services for businesses across Reading, Slough, Guildford, Woking, and throughout Berkshire and Surrey. Whether you're relocating offices in Reading town centre, closing a retail unit in Guildford High Street, refitting a restaurant in Windsor, or clearing an industrial unit in Bracknell, we deliver fast, professional, and discreet commercial clearance services.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Commercial property clearances require specialist knowledge, proper equipment, and strict adherence to health and safety regulations. Our experienced teams understand the unique challenges of commercial work: tight deadlines, lease-end requirements, data security concerns, minimizing disruption to neighboring businesses, and meeting landlord handover standards. We've worked with hundreds of commercial clients across Berkshire and Surrey - from small independent shops to large corporate offices - and we know exactly what's required to strip premises back to specification.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Our commercial rip-out service is comprehensive: office furniture and partitions, IT equipment and server rooms, retail fixtures and shop fittings, signage and displays, carpets and flooring, suspended ceilings and lighting, kitchen equipment, air conditioning units, and all general commercial waste. We handle everything from complete strip-outs (leaving premises as bare shells) to selective clearances (removing specific items or areas). Evening, weekend, and overnight work is available to minimize disruption to your business operations or allow clearance to happen when premises are closed to the public.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  As a fully licensed commercial waste carrier registered with the Environment Agency, we provide complete legal compliance for all commercial clearances. This includes WEEE (Waste Electrical and Electronic Equipment) regulations for IT and electrical items, confidential waste destruction certificates for sensitive documents, and comprehensive waste transfer notes for your audit trail. With £5 million public liability insurance, full employer's liability cover, and professional indemnity insurance, we meet all commercial insurance requirements. Our 94% recycling rate means office furniture, retail fixtures, and electrical equipment are recycled or donated wherever possible, supporting your corporate social responsibility goals.
                </p>
              </div>
            </div>
          </section>

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
              <h3 className="font-black text-2xl uppercase text-slate-900 mb-6">Commercial Items We Clear:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Office desks, chairs, and furniture",
                  "IT equipment, computers, and servers",
                  "Filing cabinets and storage units",
                  "Partition walls and cubicles",
                  "Retail fixtures and shop fittings",
                  "Display units and shelving",
                  "Restaurant kitchen equipment",
                  "Bar fixtures and refrigeration",
                  "Carpets, flooring, and ceiling tiles",
                  "Signage and branding materials",
                  "Stock, inventory, and packaging",
                  "General commercial waste",
                  "Confidential documents (secure destruction)",
                  "Air conditioning and ventilation units"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle size={24} className="text-[#16a34a] shrink-0" />
                    <span className="text-slate-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t-2 border-slate-200">
                <p className="text-slate-600 text-sm">
                  <strong>Data Security:</strong> We provide secure destruction of IT equipment and confidential documents with certification.
                </p>
              </div>
            </div>
          </section>

          {/* Commercial Sectors */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Commercial Sectors We Serve</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Offices", items: ["Corporate offices", "Serviced offices", "Co-working spaces", "Office relocations"] },
                { title: "Retail", items: ["High street shops", "Shopping centres", "Pop-up stores", "Warehouse clearances"] },
                { title: "Hospitality", items: ["Restaurants", "Cafes & bars", "Hotels", "Event venues"] },
                { title: "Industrial", items: ["Warehouses", "Workshops", "Factories", "Distribution centres"] }
              ].map((sector, idx) => (
                <div key={idx} className="bg-[#4ade80]/10 border-4 border-slate-900 rounded-xl p-6">
                  <h3 className="font-black text-xl uppercase text-[#16a34a] mb-4">{sector.title}</h3>
                  <ul className="space-y-2">
                    {sector.items.map((item, i) => (
                      <li key={i} className="text-slate-700 text-sm flex gap-2 items-start">
                        <span className="text-[#16a34a] font-black">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Commercial Clearance Pricing</h2>
            <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] border-4 border-slate-900 rounded-xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£400+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Small Office</h3>
                  <p className="text-white/80">Perfect for small offices, single rooms, or partial clearances up to 1,000 sq ft.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£1,200+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Medium Unit</h3>
                  <p className="text-white/80">Ideal for retail shops, restaurants, or multi-room offices up to 3,000 sq ft.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">POA</div>
                  <h3 className="font-black text-xl uppercase mb-3">Large Sites</h3>
                  <p className="text-white/80">Complete strip-outs, warehouses, or multi-site projects - call for detailed quote.</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/90 font-bold text-center mb-4">
                  All prices include labor, loading, transport, and compliant disposal with full documentation.
                </p>
                <div className="bg-[#4ade80]/20 border-2 border-[#4ade80] rounded-lg p-4 text-center">
                  <p className="text-white font-black text-lg">
                    Account Terms Available - Multi-Site Discounts - Insurance Documentation Provided
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
                Commercial clearance services throughout Berkshire and Surrey:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {serviceAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle size={20} className="text-[#16a34a] shrink-0" />
                    <span className="font-bold text-slate-900">{area}</span>
                  </div>
                ))}
              </div>
              <p className="text-slate-600 mt-6 text-sm">
                Multi-site operations? We can coordinate clearances across your entire portfolio in the Southeast.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Why Businesses Trust Us</h2>
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

          {/* Call to Action */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] border-4 border-slate-900 rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">
                Need A Commercial Clearance?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Professional strip-out services across Reading, Guildford, Slough, and all Berkshire & Surrey. Free detailed quotes.
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
                  href="mailto:info@totalwasteclearout.co.uk"
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

export default CommercialRipouts;
