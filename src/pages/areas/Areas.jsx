import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  MapPin, Phone, CheckCircle, Recycle, ShieldCheck, Zap, Scale,
  ArrowRight, ChevronRight
} from 'lucide-react';
import { AREA_DATA } from '../../data/areaData';

const areas = Object.values(AREA_DATA);

const Areas = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://totalwasteclearout.co.uk/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Areas We Serve",
        "item": "https://totalwasteclearout.co.uk/areas"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Waste Removal",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Total Waste Clearout",
      "url": "https://totalwasteclearout.co.uk"
    },
    "areaServed": areas.map(area => ({
      "@type": "City",
      "name": area.name,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": area.county
      }
    })),
    "description": "Professional waste removal, rubbish clearance, house clearance, garden waste removal and commercial waste clearance across Berkshire and Surrey."
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Areas We Serve | Waste Removal Berkshire & Surrey | Total Waste Clearout</title>
        <meta name="description" content="Professional waste removal across Berkshire & Surrey. Serving Reading, Slough, Guildford, Woking, Bracknell, Windsor, Ascot, Egham, Maidenhead & Staines. Same-day service." />
        <meta name="keywords" content="waste removal berkshire, waste removal surrey, rubbish clearance berkshire, waste collection surrey, areas we serve, waste removal near me, local waste removal, skip hire alternative berkshire surrey, licensed waste carrier, same day waste collection" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/areas" />
        <meta property="og:title" content="Areas We Serve | Waste Removal Berkshire & Surrey" />
        <meta property="og:description" content="Professional waste removal across Berkshire & Surrey. 10 towns served with same-day collection." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/areas" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-[#064e3b] to-[#065f46] pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?auto=format&fit=crop&q=80&w=2000"
            alt="Waste removal service areas across Berkshire and Surrey"
            className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/80 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
            <ol className="flex items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-wider">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><ChevronRight size={12} /></li>
              <li className="text-[#4ade80]">Areas We Serve</li>
            </ol>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#4ade80] rounded-2xl flex items-center justify-center border-2 border-white/20">
              <MapPin size={40} className="text-[#064e3b]" />
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase italic text-white tracking-tight leading-none">
              Areas We Serve
            </h1>
          </div>

          <p className="text-white/80 text-lg md:text-xl font-bold italic max-w-3xl mb-8">
            Professional waste removal and rubbish clearance across Berkshire and Surrey. Same-day collection available in all service areas. Fully licensed, £5M insured, 94% recycling rate.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-4 text-center">
              <p className="text-[#4ade80] font-black text-3xl">10+</p>
              <p className="text-white/80 font-bold text-xs uppercase tracking-wider">Towns Covered</p>
            </div>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-4 text-center">
              <p className="text-[#4ade80] font-black text-3xl">94%</p>
              <p className="text-white/80 font-bold text-xs uppercase tracking-wider">Recycled</p>
            </div>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-4 text-center">
              <p className="text-[#4ade80] font-black text-3xl">&lt;2h</p>
              <p className="text-white/80 font-bold text-xs uppercase tracking-wider">Response</p>
            </div>
            <div className="bg-white/10 border-2 border-white/20 rounded-lg p-4 text-center">
              <p className="text-[#4ade80] font-black text-3xl">£5M</p>
              <p className="text-white/80 font-bold text-xs uppercase tracking-wider">Insured</p>
            </div>
          </div>
        </div>
      </header>

      {/* Areas Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black uppercase text-slate-900 italic mb-4">
                Waste Removal Across Berkshire & Surrey
              </h2>
              <p className="text-slate-600 font-bold text-lg max-w-2xl mx-auto">
                Click on any area below to see our full range of waste removal services, local coverage details, pricing, and FAQs specific to your area.
              </p>
            </div>

            {/* Berkshire Areas */}
            <div className="mb-16">
              <h3 className="text-2xl font-black uppercase text-[#16a34a] mb-6 flex items-center gap-3 border-l-4 border-[#16a34a] pl-4">
                <MapPin size={24} /> Berkshire
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {areas.filter(a => a.county === "Berkshire").map((area) => (
                  <Link
                    key={area.slug}
                    to={`/areas/${area.slug}`}
                    className="bg-white border-4 border-slate-900 rounded-xl p-6 md:p-8 hover:shadow-[8px_8px_0px_#16a34a] transition-all hover:-translate-y-2 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#16a34a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin size={24} className="text-white" />
                      </div>
                      <span className="bg-[#dcfce7] text-[#16a34a] px-3 py-1 rounded-full text-xs font-black uppercase">{area.postcode}</span>
                    </div>
                    <h4 className="font-black text-2xl uppercase text-slate-900 mb-2 group-hover:text-[#16a34a] transition-colors">
                      {area.name}
                    </h4>
                    <p className="text-slate-600 font-bold text-sm mb-4 leading-relaxed line-clamp-2">
                      Waste removal, rubbish clearance, house clearance & garden waste in {area.name}.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {area.nearbyAreas.slice(0, 3).map((nearby, idx) => (
                        <span key={idx} className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-500">
                          {nearby}
                        </span>
                      ))}
                      {area.nearbyAreas.length > 3 && (
                        <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-500">
                          +{area.nearbyAreas.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t-2 border-slate-100">
                      <span className="text-[#16a34a] font-black text-sm uppercase">View Services</span>
                      <ArrowRight size={18} className="text-slate-400 group-hover:text-[#16a34a] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Surrey Areas */}
            <div className="mb-16">
              <h3 className="text-2xl font-black uppercase text-[#16a34a] mb-6 flex items-center gap-3 border-l-4 border-[#16a34a] pl-4">
                <MapPin size={24} /> Surrey
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {areas.filter(a => a.county === "Surrey").map((area) => (
                  <Link
                    key={area.slug}
                    to={`/areas/${area.slug}`}
                    className="bg-white border-4 border-slate-900 rounded-xl p-6 md:p-8 hover:shadow-[8px_8px_0px_#16a34a] transition-all hover:-translate-y-2 group"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 bg-[#16a34a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin size={24} className="text-white" />
                      </div>
                      <span className="bg-[#dcfce7] text-[#16a34a] px-3 py-1 rounded-full text-xs font-black uppercase">{area.postcode}</span>
                    </div>
                    <h4 className="font-black text-2xl uppercase text-slate-900 mb-2 group-hover:text-[#16a34a] transition-colors">
                      {area.name}
                    </h4>
                    <p className="text-slate-600 font-bold text-sm mb-4 leading-relaxed line-clamp-2">
                      Waste removal, rubbish clearance, house clearance & garden waste in {area.name}.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {area.nearbyAreas.slice(0, 3).map((nearby, idx) => (
                        <span key={idx} className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-500">
                          {nearby}
                        </span>
                      ))}
                      {area.nearbyAreas.length > 3 && (
                        <span className="bg-slate-100 px-2 py-1 rounded text-xs font-bold text-slate-500">
                          +{area.nearbyAreas.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t-2 border-slate-100">
                      <span className="text-[#16a34a] font-black text-sm uppercase">View Services</span>
                      <ArrowRight size={18} className="text-slate-400 group-hover:text-[#16a34a] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* SEO Content Section */}
            <section className="mb-16">
              <div className="bg-white border-4 border-slate-900 rounded-xl p-8 md:p-12 shadow-[8px_8px_0px_#e2e8f0]">
                <h2 className="text-2xl md:text-3xl font-black uppercase text-slate-900 mb-6">
                  Local Waste Removal Across the Thames Valley
                </h2>
                <div className="space-y-4 text-slate-700 leading-relaxed">
                  <p>
                    Total Waste Clearout provides professional waste removal, rubbish clearance, and property clearance services across the entire Berkshire and Surrey region. Our service area covers the Thames Valley corridor from Reading in the west to Staines in the east, and from Maidenhead in the north to Guildford in the south.
                  </p>
                  <p>
                    As a fully licensed waste carrier registered with the Environment Agency, we offer a complete range of waste removal services in every town we serve: house clearance, end of tenancy clearance, garden waste removal, commercial waste clearance, construction waste removal, and garage and shed demolition. Every job comes with transparent fixed pricing, professional uniformed crews, and our industry-leading 94% recycling rate.
                  </p>
                  <p>
                    Whether you need a same-day rubbish collection in Reading, a full house clearance in Guildford, commercial waste removal in Slough, or garden waste cleared in Windsor, we deliver the same high standard of service across all areas. Our teams are based locally across Berkshire and Surrey, meaning we can respond quickly and arrive promptly — often within 2 hours of your call.
                  </p>
                  <p>
                    We're proud to be the go-to waste removal company for homeowners, landlords, property managers, builders, landscapers, and businesses across the Thames Valley. With £5M public liability insurance and full waste carrier licensing, you can trust us to handle your waste legally, responsibly, and efficiently.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section>
              <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] border-4 border-slate-900 rounded-xl p-8 md:p-12 text-white text-center">
                <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">
                  Get Your Free Quote Today
                </h2>
                <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                  Same-day waste removal across Berkshire and Surrey. Call now for a fixed-price quote with no hidden fees.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a
                    href="tel:07769844298"
                    className="inline-flex items-center gap-3 bg-[#4ade80] hover:bg-white text-slate-900 font-black uppercase px-8 py-5 rounded-xl transition-colors border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a] text-lg"
                  >
                    <Phone size={24} />
                    Call 07769 844298
                  </a>
                  <a
                    href="https://wa.me/447769844298"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white font-black uppercase px-8 py-5 rounded-xl transition-colors border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a] text-lg"
                  >
                    <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    WhatsApp Quote
                  </a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Areas;
