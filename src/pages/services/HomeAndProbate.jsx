import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, CheckCircle, Heart, Clock, MapPin, Phone, Mail, ShieldCheck, Users, Package } from 'lucide-react';

const HomeAndProbate = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const whatWeRemove = [
    { icon: Home, label: "Full House Contents" },
    { icon: Package, label: "Personal Belongings" },
    { icon: Home, label: "Furniture & Beds" },
    { icon: Package, label: "Kitchen & Appliances" },
    { icon: Home, label: "Garage & Shed Items" },
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
        <title>House Clearout Reading Guildford | Probate Clearout & House Clearance Berkshire</title>
        <meta name="description" content="Professional house clearout and probate clearance in Reading, Guildford, Slough & Berkshire. Compassionate bereavement house clearouts, charity donations, licensed & insured." />
        <meta name="keywords" content="house clearout, house clearout reading, house clearout slough, house clearout guildford, house clearout berkshire, house clearout surrey, house clearout woking, house clearout bracknell, house clearout windsor, probate clearout, probate clearout reading, probate clearout berkshire, probate clearout guildford, estate clearout, estate clearout reading, estate clearout surrey, home clearout, home clearout reading, home clearout slough, house clearance, house clearance reading, house clearance slough, house clearance guildford, house clearance berkshire, house clearance surrey, probate clearance reading, probate clearance berkshire, probate house clearance, estate clearance reading, estate clearance surrey, bereavement clearance, bereavement clearout, deceased estate clearance, deceased estate clearout, property clearance berkshire, full house clearout, full house clearance, furniture removal reading, furniture disposal berkshire, house clearout near me, cheap house clearout reading, downsizing clearout, downsizing clearance, hoarder house clearout berkshire, whole house clearout, charity donation clearance, sensitive house clearout, compassionate clearance service" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/services/home-probate-clearance/" />
        <meta property="og:title" content="House Clearout & Probate Clearance | Total Waste Clearout Berkshire" />
        <meta property="og:description" content="Compassionate house clearout and probate clearance services across Reading, Guildford, and Berkshire & Surrey." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/services/home-probate-clearance/" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Do you do house clearouts in Reading?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Total Waste Clearout provides professional house clearout services throughout Reading and Berkshire. We handle probate clearouts, bereavement clearouts, downsizing clearouts, and landlord clearouts. Same-day service available. Call 07769 844298 for a free quote."
              }
            },
            {
              "@type": "Question",
              "name": "How much does a house clearout cost in Berkshire?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "House clearout costs in Berkshire start from £150 for a single room, £400 for a 2-3 bedroom house, and £600+ for larger properties. All prices include loading, transport, and responsible disposal with a 94% recycling rate. Call Total Waste Clearout on 07769 844298 for a free no-obligation quote."
              }
            },
            {
              "@type": "Question",
              "name": "Do you do probate clearouts in Berkshire and Surrey?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Total Waste Clearout specialises in sensitive probate clearouts across Berkshire and Surrey. We work with families and solicitors, provide full documentation including waste transfer notes, carefully set aside any valuables or sentimental items, and handle the entire clearout with respect and discretion. We serve Reading, Guildford, Slough, Woking, Bracknell, Windsor, Maidenhead, and all surrounding areas."
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
              <Home size={40} className="text-[#064e3b]" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic text-white tracking-tight leading-none">
              House Clearout &amp; Probate Clearance
            </h1>
          </div>
          <p className="text-white/80 text-lg md:text-xl font-bold italic max-w-3xl">
            Compassionate, professional house clearout and probate clearance services across Berkshire and Surrey. Bereavement clearouts, downsizing clearouts, and full estate clearances handled with respect and sensitivity.
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

          {/* Service Description */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Compassionate House Clearout &amp; Probate Clearance Services</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-white border-4 border-slate-900 rounded-xl p-8 shadow-[8px_8px_0px_#e2e8f0] mb-8">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Total Waste Clearout Ltd provides sensitive, professional house clearout and probate clearance services throughout Reading, Slough, Guildford, Woking, and across Berkshire and Surrey. We understand that clearing a deceased loved one's home is one of the most difficult tasks families face during bereavement. Our experienced teams approach every probate clearout with respect, care, and the utmost sensitivity, treating your family member's belongings with dignity throughout the process.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Whether you're dealing with probate requirements after a bereavement, completing a house clearout in Reading or Guildford, preparing an inherited property for sale, or managing an estate clearout as an executor, we provide a comprehensive service that removes the physical and emotional burden from your shoulders. We've completed hundreds of probate clearouts and house clearances across Berkshire and Surrey, and we understand both the practical challenges (tight probate deadlines, property sale requirements) and the emotional difficulty of sorting through a lifetime of possessions.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Our house clearout service is complete and thorough. We clear entire properties from top to bottom: all rooms, garages and outbuildings, gardens and sheds. During the clearout, our teams pay careful attention to locating important documents (wills, deeds, insurance policies), valuable items (jewellery, collectibles, photographs), and items of sentimental value that family members may wish to keep. We work methodically through each room, checking drawers, cupboards, and storage spaces — nothing is simply thrown away without consideration.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  We're committed to handling estate clearouts responsibly and respectfully. Usable furniture, household items, books, and clothing are donated to local charities across Reading, Slough, and Guildford wherever possible — many families find comfort knowing their loved one's possessions will benefit others. Unusable items are recycled extensively (94% recycling rate). As a fully licensed waste carrier registered with the Environment Agency (licence CBDU630127), we provide proper documentation for executors and solicitors. With £5 million public liability insurance and years of experience in sensitive clearouts, we're the trusted choice for probate and bereavement house clearouts throughout Berkshire and Surrey.
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
              <p className="text-white/90 font-bold text-center text-lg mb-6">
                Every job is different — we provide free, no-obligation quotes tailored to your property. No hidden costs, no surprises.
              </p>
              <div className="bg-[#4ade80]/20 border-2 border-[#4ade80] rounded-lg p-4 text-center">
                <p className="text-white font-black text-lg">
                  Usable Items Donated To Local Charities - Supporting Berkshire & Surrey Communities
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
                Probate and house clearance services throughout Berkshire and Surrey:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {serviceAreas.map((area, idx) => {
                  const mainAreas = ["Reading", "Slough", "Guildford", "Woking", "Bracknell", "Windsor", "Ascot", "Egham", "Maidenhead", "Staines"];
                  const slug = mainAreas.includes(area) ? `/house-clearance-${area.toLowerCase()}` : null;
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
                Need A House Clearout?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Compassionate house clearout and probate clearance services across Reading, Guildford, Slough, and all Berkshire &amp; Surrey. Free home visits and fixed-price quotes.
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

export default HomeAndProbate;
