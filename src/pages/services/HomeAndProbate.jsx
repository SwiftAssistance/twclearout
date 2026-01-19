import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, CheckCircle, Heart, Clock, MapPin, Phone, Mail, ShieldCheck, Users, Package } from 'lucide-react';

const HomeAndProbate = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatWeRemove = [
    { icon: Home, label: "Full House Contents" },
    { icon: Package, label: "Personal Belongings" },
    { icon: Home, label: "Furniture & Beds" },
    { icon: Package, label: "Kitchen & Appliances" },
    { icon: Home, label: "Garage & Loft Items" },
    { icon: Heart, label: "Sensitive Items" }
  ];

  const serviceAreas = [
    "Reading", "Slough", "Guildford", "Woking", "Bracknell",
    "Windsor", "Ascot", "Egham", "Maidenhead", "Staines",
    "Wokingham", "Camberley", "Farnborough", "Aldershot"
  ];

  const benefits = [
    { title: "Respectful & Sensitive", desc: "We understand the emotional nature of probate clearances - our teams work with care, dignity, and discretion" },
    { title: "Full House Service", desc: "Complete clearance from attic to basement including garages, sheds, and outbuildings" },
    { title: "Valuables Check", desc: "Careful attention to locating important documents, jewelry, and sentimental items during clearance" },
    { title: "Charity Donations", desc: "Usable furniture and household items donated to local Berkshire & Surrey charities where appropriate" },
    { title: "Quick Turnaround", desc: "Fast service for urgent probate deadlines or property sale requirements - often completed in 1-2 days" },
    { title: "Licensed & Insured", desc: "Fully licensed waste carrier with £5M public liability - professional service you can trust" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Probate House Clearance Reading Guildford | Bereavement Estate Clearance</title>
        <meta name="description" content="Compassionate probate & estate clearance in Reading, Guildford, Slough. Respectful bereavement house clearance, charity donations, licensed from £600." />
        <meta name="keywords" content="probate clearance, house clearance bereavement, estate clearance Reading, deceased estate Guildford, Berkshire Surrey, respectful service" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/services/home-and-probate" />
        <meta property="og:title" content="House & Probate Clearance | Total Waste Clearout Berkshire" />
        <meta property="og:description" content="Compassionate probate and estate clearance services across Reading, Guildford, and Berkshire & Surrey." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/services/home-and-probate" />
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
              <Home size={40} className="text-[#064e3b]" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic text-white tracking-tight leading-none">
              Home & Probate Clearance
            </h1>
          </div>
          <p className="text-white/80 text-lg md:text-xl font-bold italic max-w-3xl">
            Compassionate, professional house and probate clearance services across Berkshire and Surrey. Handling bereavement clearances with respect, care, and sensitivity.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Respectful Service</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Fast Turnaround</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Charity Donations</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">

          {/* Service Description */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Compassionate House & Estate Clearance</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-white border-4 border-slate-900 rounded-xl p-8 shadow-[8px_8px_0px_#e2e8f0] mb-8">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Total Waste Clearout Ltd provides sensitive, professional house and probate clearance services throughout Reading, Slough, Guildford, Woking, and across Berkshire and Surrey. We understand that clearing a deceased loved one's home is one of the most difficult tasks families face during bereavement. Our experienced teams approach every probate clearance with respect, care, and the utmost sensitivity, treating your family member's belongings with dignity throughout the process.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Whether you're dealing with probate requirements after a bereavement, clearing a parent's property in Reading or Guildford, preparing an inherited house for sale, or managing an estate clearance as an executor, we provide a comprehensive service that removes the physical and emotional burden from your shoulders. We've worked with hundreds of families across Berkshire and Surrey, and we understand both the practical challenges (tight probate deadlines, property sale requirements) and the emotional difficulty of sorting through a lifetime of possessions.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Our house clearance service is complete and thorough. We clear entire properties from top to bottom: all rooms, lofts and attics, garages and outbuildings, gardens and sheds. During clearance, our teams pay careful attention to locating important documents (wills, deeds, insurance policies), valuable items (jewelry, collectibles, photographs), and items of sentimental value that family members may wish to keep. We work methodically through each room, checking drawers, cupboards, and storage spaces - nothing is simply thrown away without consideration.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  We're committed to handling estate clearances responsibly and respectfully. Usable furniture, household items, books, and clothing are donated to local charities across Reading, Slough, and Guildford wherever possible - many families find comfort knowing their loved one's possessions will benefit others. Unusable items are recycled extensively (we achieve 94% recycling rates). As a fully licensed waste carrier with the Environment Agency, we provide proper documentation for executors and solicitors. With £5 million public liability insurance and years of experience in sensitive clearances, we're the trusted choice for probate and bereavement house clearances throughout Berkshire and Surrey.
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
              <h3 className="font-black text-2xl uppercase text-slate-900 mb-6">Items We Clear From Properties:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Furniture - sofas, beds, wardrobes, tables",
                  "White goods - fridges, freezers, washing machines",
                  "Personal belongings and clothing",
                  "Books, ornaments, and collectibles",
                  "Kitchen items and crockery",
                  "Electrical items and TVs",
                  "Carpets and curtains",
                  "Loft and attic contents",
                  "Garage and shed items",
                  "Garden furniture and equipment",
                  "Paperwork and documents (carefully sorted)",
                  "Anything else found in the property"
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <CheckCircle size={24} className="text-[#16a34a] shrink-0" />
                    <span className="text-slate-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t-2 border-slate-200">
                <p className="text-slate-600 text-sm">
                  <strong>Important:</strong> We carefully check for valuables, documents, and sentimental items throughout the clearance process.
                </p>
              </div>
            </div>
          </section>

          {/* Our Approach */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8 flex items-center gap-4">
              <Heart size={40} className="text-[#16a34a]" />
              Our Respectful Approach
            </h2>
            <div className="bg-gradient-to-r from-[#4ade80]/20 to-[#16a34a]/20 border-4 border-slate-900 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck size={28} className="text-[#16a34a]" />
                    <h3 className="font-black text-xl uppercase text-slate-900">Before We Start</h3>
                  </div>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Free home visit to assess the property</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Clear fixed-price quote with no hidden costs</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Discuss any items you wish to keep or donate</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Flexible scheduling around your needs</span></li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users size={28} className="text-[#16a34a]" />
                    <h3 className="font-black text-xl uppercase text-slate-900">During Clearance</h3>
                  </div>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Careful handling of all possessions</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Systematic checking for valuables and documents</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Items set aside for family inspection if needed</span></li>
                    <li className="flex gap-2"><span className="text-[#16a34a] font-black">•</span><span>Clean, tidy work - property left clean and empty</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">House Clearance Pricing</h2>
            <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] border-4 border-slate-900 rounded-xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£600+</div>
                  <h3 className="font-black text-xl uppercase mb-3">1-2 Bedroom</h3>
                  <p className="text-white/80">Flats, small houses, or partial clearances. Includes all loading and disposal.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£1,200+</div>
                  <h3 className="font-black text-xl uppercase mb-3">3-4 Bedroom</h3>
                  <p className="text-white/80">Most common family homes including garages and standard outbuildings.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£2,500+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Large House</h3>
                  <p className="text-white/80">5+ bedrooms, extensive contents, or properties with multiple outbuildings.</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/90 font-bold text-center mb-4">
                  All prices include complete house clearance, loading, transport, disposal, and cleaning. Free home visit for accurate quotes.
                </p>
                <div className="bg-[#4ade80]/20 border-2 border-[#4ade80] rounded-lg p-4 text-center">
                  <p className="text-white font-black text-lg">
                    Usable Items Donated To Local Charities - Supporting Berkshire & Surrey Communities
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
                Probate and house clearance services throughout Berkshire and Surrey:
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
                We serve all surrounding areas across Berkshire and Surrey - contact us for any location.
              </p>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Why Families Choose Us</h2>
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
                Need A House Clearance?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Compassionate probate clearance services across Reading, Guildford, Slough, and all Berkshire & Surrey. Free home visits.
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

export default HomeAndProbate;
