import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Hammer, CheckCircle, Wrench, Clock, MapPin, Phone, Mail, HardHat, Trash2, Package } from 'lucide-react';

const GarageShed = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatWeRemove = [
    { icon: Hammer, label: "Shed Demolition" },
    { icon: Wrench, label: "Garage Dismantling" },
    { icon: Package, label: "Contents Clearance" },
    { icon: Trash2, label: "Waste Removal" },
    { icon: HardHat, label: "Foundation Clearance" },
    { icon: Package, label: "Site Cleanup" }
  ];

  const serviceAreas = [
    "Reading", "Slough", "Guildford", "Woking", "Bracknell",
    "Windsor", "Ascot", "Egham", "Maidenhead", "Staines",
    "Wokingham", "Camberley", "Farnborough", "Aldershot"
  ];

  const benefits = [
    { title: "Complete Service", desc: "Full clearance of contents, demolition, waste removal, and site cleanup - everything in one job" },
    { title: "No Manual Work", desc: "We do all the heavy lifting, dismantling, and loading - you don't need to help or prepare anything" },
    { title: "Same-Day Available", desc: "Fast service for urgent projects - often complete clearance and demolition in a single day" },
    { title: "Safe Demolition", desc: "Careful dismantling of structures with consideration for neighboring properties and gardens" },
    { title: "Reclaim Your Space", desc: "Perfect for garden renovations, property development, or simply creating more outdoor space" },
    { title: "Licensed Disposal", desc: "All materials properly sorted, recycled, and disposed of with full waste carrier documentation" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Garage Clearout Reading Slough | Shed Clearout & Demolition Berkshire Surrey</title>
        <meta name="description" content="Professional garage clearout and shed clearout in Reading, Slough, Guildford & Berkshire. Contents clearance, full demolition, waste removal. Same-day service, licensed from £100." />
        <meta name="keywords" content="garage clearout, garage clearout reading, garage clearout slough, garage clearout guildford, garage clearout berkshire, garage clearout surrey, garage clearout near me, shed clearout, shed clearout reading, shed clearout slough, shed clearout berkshire, shed clearout surrey, garage clearance, garage clearance reading, garage clearance slough, garage clearance guildford, garage clearance berkshire, garage clearance surrey, shed clearance reading, shed clearance slough, shed clearance berkshire, garage demolition reading, garage demolition slough, garage demolition berkshire, shed demolition reading, shed demolition berkshire, shed removal near me, outbuilding clearout, outbuilding clearance, outbuilding demolition berkshire, concrete garage removal, prefab garage demolition, garden building removal, workshop clearout berkshire, workshop demolition berkshire, summerhouse removal, shed dismantling surrey, garage contents clearout, garage contents clearance, garden shed clearout near me, cheap garage clearout, same day garage clearout, same day shed clearout" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/services/garage-shed/" />
        <meta property="og:title" content="Garage Clearout &amp; Shed Clearout | Total Waste Clearout Berkshire" />
        <meta property="og:description" content="Professional garage clearout and shed clearout services across Berkshire & Surrey. Complete service from contents clearance to site cleanup." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/services/garage-shed/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you do garage clearouts in Reading?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Total Waste Clearout provides full garage clearout services in Reading and across Berkshire. We empty garage contents, dismantle structures if required, remove all waste, and leave the site clean. Same-day garage clearouts are available. Call 07769 844298 for a free quote."
              }
            },
            {
              "@type": "Question",
              "name": "How much does a garage clearout cost in Berkshire?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Garage clearout prices in Berkshire start from £100 for contents-only clearout, £250 for a small shed clearout including demolition, and £500+ for a full garage clearout with demolition and removal. All prices include loading, transport, and disposal. Call Total Waste Clearout on 07769 844298 for a free quote."
              }
            },
            {
              "@type": "Question",
              "name": "Do you demolish sheds and garages as part of the clearout?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Total Waste Clearout offers complete garage and shed clearout and demolition services across Berkshire and Surrey. We clear the contents, carefully dismantle the structure, remove all materials, and leave the site clean and level. We serve Reading, Slough, Guildford, Woking, Bracknell, Windsor, and all surrounding areas."
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
              <Hammer size={40} className="text-[#064e3b]" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic text-white tracking-tight leading-none">
              Garage &amp; Shed Clearout
            </h1>
          </div>
          <p className="text-white/80 text-lg md:text-xl font-bold italic max-w-3xl">
            Complete garage clearout and shed clearout services across Berkshire and Surrey. Contents clearance, demolition, waste removal, and site cleanup — all in one service.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Complete Service</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Same-Day Option</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Site Left Clean</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">

          {/* What We Remove */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">What We Do</h2>
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
              <h3 className="font-black text-2xl uppercase text-slate-900 mb-6">Structures We Demolish & Remove:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Garden sheds (timber, metal, plastic)",
                  "Concrete garages and prefab garages",
                  "Brick-built garages and outbuildings",
                  "Timber workshops and summerhouses",
                  "Metal storage units and containers",
                  "Greenhouses and conservatories",
                  "Old garden buildings and structures",
                  "Garages with asbestos roofing (with specialist support)",
                  "Carports and lean-to structures",
                  "Log cabins and garden offices",
                  "Chicken coops and animal housing",
                  "Any outdoor structures requiring removal"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle size={24} className="text-[#16a34a] shrink-0" />
                    <span className="text-slate-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t-2 border-slate-200">
                <p className="text-slate-600 text-sm">
                  <strong>Note:</strong> For asbestos-containing structures, we work with certified asbestos removal contractors to ensure safe, legal removal.
                </p>
              </div>
            </div>
          </section>

          {/* What's Included */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">What's Included In Our Service</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Contents Clearance", desc: "We empty the garage or shed completely before demolition - everything from tools and equipment to accumulated junk" },
                { title: "Careful Dismantling", desc: "Systematic deconstruction of the structure with consideration for surrounding gardens, fences, and properties" },
                { title: "Complete Removal", desc: "All materials, rubble, and waste loaded and removed from your property - nothing left behind" },
                { title: "Site Cleanup", desc: "Area left clean, level, and ready for your next project or landscaping plans" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gradient-to-r from-[#4ade80]/20 to-[#16a34a]/20 border-4 border-slate-900 rounded-xl p-6">
                  <h3 className="font-black text-xl uppercase text-[#16a34a] mb-3">{item.title}</h3>
                  <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Demolition Pricing</h2>
            <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] border-4 border-slate-900 rounded-xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£250+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Small Shed</h3>
                  <p className="text-white/80">Garden sheds up to 8x6ft. Includes contents clearance, demolition, and removal.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£500+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Large Shed/Garage</h3>
                  <p className="text-white/80">Large sheds, workshops, or standard single garages. Complete service included.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£1,000+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Double Garage</h3>
                  <p className="text-white/80">Double garages, large outbuildings, or complex structures requiring specialist work.</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/90 font-bold text-center mb-4">
                  All prices include contents clearance, complete demolition, waste removal, and site cleanup.
                </p>
                <div className="bg-[#4ade80]/20 border-2 border-[#4ade80] rounded-lg p-4">
                  <p className="text-white font-black text-center">
                    Free Site Visits - Exact Quotes After Inspection - Foundation Removal Available (POA)
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
                Garage and shed demolition services throughout Berkshire and Surrey:
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
                Multiple structures to remove? We offer discounts for clearing multiple garages, sheds, or outbuildings.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Why Choose Our Demolition Service?</h2>
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

          {/* Before You Book */}
          <section className="mb-16">
            <div className="bg-orange-50 border-4 border-orange-500 rounded-xl p-8">
              <h2 className="text-2xl font-black uppercase text-slate-900 mb-6 flex items-center gap-3">
                <HardHat size={32} className="text-orange-500" />
                Before You Book
              </h2>
              <div className="space-y-4 text-slate-700">
                <p className="leading-relaxed">
                  <strong>Planning Permission:</strong> Most garage and shed demolitions don't require planning permission, but it's your responsibility to check with your local council if needed (particularly for large structures or listed buildings).
                </p>
                <p className="leading-relaxed">
                  <strong>Asbestos:</strong> If your garage roof or shed contains asbestos (common in pre-2000 buildings), please inform us. We can arrange specialist asbestos removal before demolition.
                </p>
                <p className="leading-relaxed">
                  <strong>Utilities:</strong> Ensure all utilities (electricity, water) are safely disconnected before we arrive. We can recommend local tradespeople if needed.
                </p>
                <p className="leading-relaxed">
                  <strong>Access:</strong> We need reasonable vehicle access to your property for our trucks. Please advise if there are any access restrictions.
                </p>
              </div>
            </div>
          </section>

          {/* Service Description */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Garage Clearout &amp; Shed Clearout Services — Reading, Berkshire &amp; Surrey</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-white border-4 border-slate-900 rounded-xl p-8 shadow-[8px_8px_0px_#e2e8f0] mb-8">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Total Waste Clearout Ltd provides comprehensive garage clearout and shed clearout services throughout Reading, Slough, Guildford, Woking, and across Berkshire and Surrey. Whether you're clearing space for a garden renovation, doing a garage clearout on a dilapidated shed, demolishing an old garage for a property development, or simply reclaiming outdoor space, we handle the entire process from start to finish — no DIY required, no heavy lifting, no mess left behind.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Our complete garage clearout and shed clearout service covers everything: clearing the contents, carefully dismantling the structure, removing all materials and waste, and leaving your garden or property clean and clear. We work efficiently and safely, with consideration for neighbouring properties, existing gardens, and surrounding structures. Whether it's a small shed clearout in Windsor, a concrete garage clearout in Bracknell, a timber outbuilding clearout in Woking, or multiple structures that need removing, we have the experience, equipment, and manpower for projects of any size.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Most garage and shed clearouts are completed in a single day. We arrive with the right tools and equipment, systematically dismantle the structure (salvaging reusable materials where possible), load everything onto our vehicles, and clear the site completely. We handle timber sheds, metal garages, concrete garages, brick outbuildings, and combination structures. If you need the concrete base or foundation removed, we can arrange that too. The service is particularly popular with homeowners planning garden redesigns, developers preparing plots, and landlords maintaining properties across Berkshire and Surrey.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  As a fully licensed waste carrier registered with the Environment Agency (licence CBDU630127), we ensure all clearout waste is disposed of legally and responsibly. Timber is recycled, metal is salvaged for scrap, and concrete and bricks are processed at authorised facilities. We provide waste transfer notes for your records and work to our standard 94% recycling rate. With £5 million public liability insurance covering all clearout and demolition work, you have complete peace of mind throughout Berkshire and Surrey.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] border-4 border-slate-900 rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">
                Need A Garage Or Shed Clearout?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Complete garage clearout and shed clearout services across Reading, Guildford, Slough, and all Berkshire &amp; Surrey. Free site visits.
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

export default GarageShed;
