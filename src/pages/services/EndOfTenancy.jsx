import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, CheckCircle, Trash2, Clock, MapPin, Phone, Mail, ArrowRight, Package, Sofa, ShoppingCart, Briefcase } from 'lucide-react';

const EndOfTenancy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatWeRemove = [
    { icon: Sofa, label: "Furniture & White Goods" },
    { icon: Package, label: "Personal Belongings" },
    { icon: ShoppingCart, label: "Kitchen Items" },
    { icon: Briefcase, label: "Office Equipment" },
    { icon: Trash2, label: "General Rubbish" },
    { icon: Package, label: "Unwanted Items" }
  ];

  const serviceAreas = [
    "Reading", "Slough", "Guildford", "Woking", "Bracknell",
    "Windsor", "Ascot", "Egham", "Maidenhead", "Staines",
    "Wokingham", "Camberley", "Farnborough", "Aldershot"
  ];

  const benefits = [
    { title: "Same-Day Service", desc: "Emergency clearances available 7 days a week across Berkshire and Surrey" },
    { title: "Deposit Protection", desc: "We help tenants and landlords meet deposit return requirements with thorough clearance" },
    { title: "Licensed & Insured", desc: "Fully licensed waste carriers with £5M public liability insurance" },
    { title: "94% Recycling Rate", desc: "Environmentally responsible disposal with full waste transfer notes provided" },
    { title: "No Hidden Costs", desc: "Fixed-price quotes include loading, transport, and disposal - no surprises" },
    { title: "Professional Team", desc: "Uniformed, experienced crews who respect your property and timeframes" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>End of Tenancy Clearance Reading Slough Guildford | Same-Day Service</title>
        <meta name="description" content="Professional end of tenancy clearance in Reading, Slough, Guildford & Berkshire. Same-day service, help secure your deposit. Licensed waste removal from £150." />
        <meta name="keywords" content="end of tenancy clearance, house clearance Reading, flat clearance Slough, tenancy cleanup Guildford, Berkshire Surrey, deposit return" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/services/end-of-tenancy" />
        <meta property="og:title" content="End of Tenancy Clearance | Total Waste Clearout Berkshire" />
        <meta property="og:description" content="Same-day end of tenancy clearance across Reading, Slough, Guildford. Help secure your deposit with professional clearance." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/services/end-of-tenancy" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#4ade80] rounded-2xl flex items-center justify-center">
              <Home size={40} className="text-[#064e3b]" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic text-white tracking-tight leading-none">
              End of Tenancy Clearance
            </h1>
          </div>
          <p className="text-white/80 text-lg md:text-xl font-bold italic max-w-3xl">
            Professional end of tenancy clearance services across Berkshire and Surrey. Same-day service available. Get your deposit back with a spotless clearance.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Same-Day Available</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Licensed & Insured</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">94% Recycled</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">

          {/* Service Description */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Complete End of Tenancy Clearance Services</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-white border-4 border-slate-900 rounded-xl p-8 shadow-[8px_8px_0px_#e2e8f0] mb-8">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Moving out of a rental property in Reading, Slough, Guildford, or anywhere across Berkshire and Surrey? Total Waste Clearout Ltd provides fast, professional end of tenancy clearance services that help tenants secure their deposit returns and landlords prepare properties for new occupants quickly.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Our experienced teams understand the time pressures of end-of-tenancy situations. Whether you're a tenant facing tight move-out deadlines or a landlord dealing with abandoned items, we offer same-day and next-day clearance services throughout the local area. We've worked with hundreds of letting agents across Berkshire and Surrey, and we know exactly what's required to meet property inspection standards.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Unlike skip hire (which requires council permits, waiting times, and manual loading), our professional clearance service is immediate, comprehensive, and hassle-free. Our uniformed teams arrive on time, load everything efficiently, and leave the property clean and ready for inspection. We handle everything from single-room clearances to entire house clearouts, including bulky furniture, white goods, and accumulated rubbish.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  As fully licensed waste carriers registered with the Environment Agency, we provide legal waste transfer notes for every job - essential documentation for landlords and property managers. Our 94% recycling rate means your unwanted items are disposed of responsibly, with usable furniture donated to local charities across Reading, Slough, and Guildford wherever possible. With £5 million public liability insurance, you can trust us to work safely and professionally in your property.
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
              <h3 className="font-black text-2xl uppercase text-slate-900 mb-6">Common Items We Clear:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Sofas, beds, and mattresses",
                  "Wardrobes and cabinets",
                  "Fridges, freezers, and washing machines",
                  "TVs and electrical items",
                  "Kitchen appliances and utensils",
                  "Carpets and flooring",
                  "Garden furniture and equipment",
                  "Boxes and personal belongings",
                  "Office desks and chairs",
                  "General household waste"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle size={24} className="text-[#16a34a] shrink-0" />
                    <span className="text-slate-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Transparent Pricing</h2>
            <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] border-4 border-slate-900 rounded-xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£150+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Single Room</h3>
                  <p className="text-white/80">Perfect for clearing one bedroom, kitchen, or living room. Includes all loading and disposal.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£350+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Full Flat</h3>
                  <p className="text-white/80">Complete 1-2 bedroom flat clearance. Ideal for end of tenancy situations.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£600+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Whole House</h3>
                  <p className="text-white/80">Full 3-4 bedroom house clearance including garages and gardens.</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/90 font-bold text-center">
                  All prices include loading, transport, and legal disposal. Free no-obligation quotes available - call 07769 844298
                </p>
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
                We provide end of tenancy clearance services throughout Berkshire and Surrey:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {serviceAreas.map((area, idx) => {
                  const mainAreas = ["Reading", "Slough", "Guildford", "Woking", "Bracknell", "Windsor", "Ascot", "Egham", "Maidenhead", "Staines"];
                  const slug = mainAreas.includes(area) ? `/end-of-tenancy-clearance-${area.toLowerCase()}` : null;
                  return slug ? (
                    <Link key={idx} to={slug} className="flex items-center gap-2 hover:text-[#16a34a] transition-colors group">
                      <CheckCircle size={20} className="text-[#16a34a] shrink-0" />
                      <span className="font-bold text-slate-900 group-hover:text-[#16a34a] underline decoration-[#16a34a]/30">{area}</span>
                    </Link>
                  ) : (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle size={20} className="text-[#16a34a] shrink-0" />
                      <span className="font-bold text-slate-900">{area}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-slate-600 mt-6 text-sm">
                Not listed? We cover all surrounding areas - call us to confirm service availability in your location.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Why Choose Total Waste Clearout?</h2>
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
                Need An End Of Tenancy Clearance?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Same-day service available across Reading, Slough, Guildford, and all Berkshire & Surrey areas. Free quotes in minutes.
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

export default EndOfTenancy;
