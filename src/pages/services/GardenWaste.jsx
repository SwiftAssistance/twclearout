import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { TreePine, CheckCircle, Leaf, Clock, MapPin, Phone, Mail, Flower, Trees, Sprout } from 'lucide-react';

const GardenWaste = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatWeRemove = [
    { icon: Trees, label: "Trees & Branches" },
    { icon: Leaf, label: "Leaves & Grass" },
    { icon: Flower, label: "Hedges & Shrubs" },
    { icon: TreePine, label: "Logs & Wood" },
    { icon: Sprout, label: "Soil & Turf" },
    { icon: Leaf, label: "Garden Furniture" }
  ];

  const serviceAreas = [
    "Reading", "Slough", "Guildford", "Woking", "Bracknell",
    "Windsor", "Ascot", "Egham", "Maidenhead", "Staines",
    "Wokingham", "Camberley", "Farnborough", "Aldershot"
  ];

  const benefits = [
    { title: "Same-Day Clearance", desc: "Quick response for urgent garden clearances - perfect after storms or major landscaping work" },
    { title: "Heavy Lifting Included", desc: "We handle all the heavy work - you don't need to move anything to the roadside" },
    { title: "100% Composted", desc: "All green waste is composted at licensed facilities - fully environmentally responsible disposal" },
    { title: "No Size Limits", desc: "From single trees to full garden clearances - we handle projects of any scale" },
    { title: "Licensed & Insured", desc: "Registered waste carrier with £5M public liability - full documentation provided" },
    { title: "Competitive Pricing", desc: "Often cheaper than multiple trips to the council recycling centre in your own vehicle" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Garden Waste Removal Reading Guildford | Green Waste Clearance Berkshire</title>
        <meta name="description" content="Professional garden waste removal in Reading, Guildford, Slough. Trees, hedges, grass cleared. 100% composted, same-day service, licensed from £80." />
        <meta name="keywords" content="garden waste removal, green waste Reading, tree removal Guildford, hedge clearance Slough, Berkshire Surrey, garden clearance Woking" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/services/garden-waste" />
        <meta property="og:title" content="Garden & Green Waste Removal | Total Waste Clearout" />
        <meta property="og:description" content="Professional garden waste clearance across Berkshire & Surrey. 100% composted, same-day service available." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/services/garden-waste" />
        <meta property="og:type" content="website" />
      </Helmet>
      {/* Header */}
      <header className="bg-[#064e3b] border-b-4 border-[#4ade80] py-6 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-4 group">
            <img src="/logo.webp" alt="Total Waste Clearout Ltd logo" className="w-12 h-12 object-contain group-hover:rotate-12 transition-transform" />
            <div className="flex flex-col leading-none">
              <span className="font-black text-2xl md:text-3xl tracking-tighter uppercase italic leading-none text-white">Total Waste</span>
              <span className="text-[#4ade80] font-black text-xs tracking-[.4em] uppercase">Clearout Ltd</span>
            </div>
          </Link>
          <a href="tel:07769844298" className="text-white font-black text-xl md:text-2xl hover:text-[#4ade80] transition-colors italic">
            07769 844298
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#4ade80] rounded-2xl flex items-center justify-center">
              <TreePine size={40} className="text-[#064e3b]" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic text-white tracking-tight leading-none">
              Garden & Green Waste
            </h1>
          </div>
          <p className="text-white/80 text-lg md:text-xl font-bold italic max-w-3xl">
            Professional garden waste removal across Berkshire and Surrey. From grass cuttings to fallen trees - we clear it all. Same-day service available.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">100% Composted</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Licensed Carrier</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Heavy Lifting Done</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">

          {/* Service Description */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Complete Garden Waste Clearance Services</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-white border-4 border-slate-900 rounded-xl p-8 shadow-[8px_8px_0px_#e2e8f0] mb-8">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Total Waste Clearout Ltd provides comprehensive garden and green waste removal services throughout Reading, Slough, Guildford, Woking, and all of Berkshire and Surrey. Whether you're a homeowner clearing seasonal garden waste, a landlord maintaining rental properties, or a professional gardener working across multiple sites, we offer fast, reliable, and environmentally responsible garden clearance.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Garden waste can quickly pile up after hedge trimming, tree felling, lawn maintenance, or major landscaping projects. Instead of making multiple trips to your local council recycling centre in Reading or Guildford - wasting fuel, time, and vehicle space - let our professional team handle everything. We arrive with the right equipment, load all your green waste efficiently, and transport it directly to licensed composting facilities where it's processed responsibly.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We handle all types of garden waste: fallen trees and large branches, hedge trimmings and prunings, grass cuttings and leaves, soil and turf, plant pots and garden furniture, shed contents, and general garden clearance. Our experienced crews come equipped with proper loading equipment, so you don't need to lift a finger - we do all the heavy work. Whether it's a small amount of cuttings from a day's gardening or a complete garden overhaul involving multiple loads, we scale our service to match your needs.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  As a fully licensed waste carrier registered with the Environment Agency, we guarantee legal, compliant disposal for all garden waste. We provide waste transfer notes as documentation, and all green waste is transported to authorized composting facilities across Berkshire and Surrey. With same-day service often available and competitive pricing that's frequently cheaper than DIY disposal, we're the smart choice for garden waste removal. Our service is particularly popular with landscapers and professional gardeners who need reliable, repeat collections without the hassle of permits or waiting.
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
              <h3 className="font-black text-2xl uppercase text-slate-900 mb-6">Garden Waste We Clear:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Trees, logs, and large branches",
                  "Hedge trimmings and prunings",
                  "Grass cuttings and lawn clippings",
                  "Leaves and organic debris",
                  "Bushes, shrubs, and plants",
                  "Soil, compost, and turf",
                  "Garden furniture and ornaments",
                  "Sheds and garden structures",
                  "Pots, planters, and containers",
                  "Fencing panels and posts",
                  "Paving slabs and stones",
                  "General garden clearance"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle size={24} className="text-[#16a34a] shrink-0" />
                    <span className="text-slate-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t-2 border-slate-200">
                <p className="text-slate-600 text-sm">
                  <strong>Eco-Friendly:</strong> All green waste is composted at licensed facilities. We recycle garden furniture and donate usable items to local charities.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Garden Clearance Pricing</h2>
            <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] border-4 border-slate-900 rounded-xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£80+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Small Load</h3>
                  <p className="text-white/80">Perfect for hedge trimmings, grass cuttings, or weekly maintenance waste.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£180+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Medium Load</h3>
                  <p className="text-white/80">Ideal for seasonal clearances, small tree removal, or larger garden projects.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£350+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Full Garden</h3>
                  <p className="text-white/80">Complete garden clearances, multiple large trees, or overgrown property cleanup.</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/90 font-bold text-center mb-4">
                  All prices include collection, loading, transport, and composting at licensed facilities.
                </p>
                <div className="bg-[#4ade80]/20 border-2 border-[#4ade80] rounded-lg p-4 text-center">
                  <p className="text-white font-black text-lg">
                    Regular Gardeners - Ask About Weekly/Monthly Collection Rates
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
                Professional garden waste removal throughout Berkshire and Surrey:
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
                Professional gardeners working across multiple locations? We can arrange regular collections along your route.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Why Choose Our Garden Service?</h2>
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
                Need Garden Waste Removed?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Same-day service across Reading, Guildford, Slough, and all Berkshire & Surrey. We do all the heavy lifting.
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

export default GardenWaste;
