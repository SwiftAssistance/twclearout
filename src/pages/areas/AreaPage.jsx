import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  MapPin, Phone, CheckCircle, Recycle, ShieldCheck, Zap, Scale,
  Star, ArrowRight, Truck, TreePine, Briefcase, HardHat, Hammer,
  Home, Clock, Mail, ChevronRight
} from 'lucide-react';
import { AREA_DATA, AREA_SERVICES } from '../../data/areaData';
import { getServiceAreaSlug, SERVICE_AREA_DATA } from '../../data/serviceAreaData';

const ICON_MAP = {
  Home, TreePine, Briefcase, HardHat, Hammer
};

const AreaPage = () => {
  const location = useLocation();
  const slug = location.pathname.replace(/^\//, '').replace(/\/$/, '');
  const area = AREA_DATA[slug];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white pt-24">
        <div className="text-center">
          <h1 className="text-4xl font-black uppercase text-slate-900 mb-4">Area Not Found</h1>
          <p className="text-slate-600 mb-8">The area you're looking for doesn't exist.</p>
          <Link to="/areas" className="bg-[#16a34a] text-white px-8 py-4 font-black uppercase rounded-lg">
            View All Areas
          </Link>
        </div>
      </div>
    );
  }

  const otherAreas = Object.values(AREA_DATA).filter(a => a.slug !== slug);

  // Schema.org FAQPage structured data
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": area.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  // Schema.org LocalBusiness structured data for this specific area
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Total Waste Clearout - ${area.name}`,
    "description": `Professional waste removal and rubbish clearance services in ${area.name}, ${area.county}. Same-day collection, 94% recycling rate, fully licensed.`,
    "url": `https://totalwasteclearout.co.uk/${area.slug}`,
    "telephone": "+447769844298",
    "priceRange": "££",
    "image": "https://totalwasteclearout.co.uk/logo-512.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": area.name,
      "addressRegion": area.county,
      "postalCode": area.postcode,
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": area.lat,
      "longitude": area.lng
    },
    "areaServed": {
      "@type": "City",
      "name": area.name,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": area.county
      }
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "££"
  };

  // Schema.org Service structured data
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Waste Removal",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Total Waste Clearout"
    },
    "areaServed": {
      "@type": "City",
      "name": area.name
    },
    "description": `Professional waste removal, rubbish clearance, house clearance, garden waste removal and commercial waste clearance in ${area.name}, ${area.county}.`,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "80",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "GBP",
        "price": "80",
        "unitText": "per load (starting price)"
      }
    }
  };

  // BreadcrumbList schema
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
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `Waste Removal ${area.name}`,
        "item": `https://totalwasteclearout.co.uk/${area.slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>{area.meta.title}</title>
        <meta name="description" content={area.meta.description} />
        <meta name="keywords" content={area.meta.keywords} />
        <link rel="canonical" href={`https://totalwasteclearout.co.uk/${area.slug}/`} />
        <meta name="geo.region" content={area.region} />
        <meta name="geo.placename" content={`${area.name}, ${area.county}`} />
        <meta name="geo.position" content={`${area.lat};${area.lng}`} />
        <meta property="og:title" content={area.meta.title} />
        <meta property="og:description" content={area.meta.description} />
        <meta property="og:url" content={`https://totalwasteclearout.co.uk/${area.slug}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://totalwasteclearout.co.uk/logo-512.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={area.meta.title} />
        <meta property="twitter:description" content={area.meta.description} />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-[#064e3b] to-[#065f46] pt-24 md:pt-28 pb-16 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={area.heroImage}
            alt={`Waste removal service in ${area.name}`}
            className="w-full h-full object-cover opacity-20 mix-blend-overlay grayscale"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#064e3b] via-[#064e3b]/80 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-white/60 text-xs font-bold uppercase tracking-wider">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><ChevronRight size={12} /></li>
              <li><Link to="/areas" className="hover:text-white transition-colors">Areas</Link></li>
              <li><ChevronRight size={12} /></li>
              <li className="text-[#4ade80]">{area.name}</li>
            </ol>
          </nav>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#4ade80] rounded-2xl flex items-center justify-center border-2 border-white/20">
              <MapPin size={40} className="text-[#064e3b]" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase italic text-white tracking-tight leading-none">
                Waste Removal {area.name}
              </h1>
              <p className="text-[#4ade80] font-black text-sm md:text-base uppercase tracking-wider mt-2">{area.county} | {area.postcodes.join(" • ")}</p>
            </div>
          </div>

          <p className="text-white/80 text-lg md:text-xl font-bold italic max-w-3xl mb-8">
            Professional waste removal and rubbish clearance across {area.name} and surrounding {area.county} areas. Same-day service, fixed pricing, 94% recycling rate.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap gap-3 md:gap-4 mb-8">
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg flex items-center gap-2">
              <Recycle size={16} className="text-[#4ade80]" />
              <span className="text-white font-black text-sm">94% Recycled</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg flex items-center gap-2">
              <Zap size={16} className="text-[#4ade80]" />
              <span className="text-white font-black text-sm">Same-Day Service</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#4ade80]" />
              <span className="text-white font-black text-sm">£5M Insured</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg flex items-center gap-2">
              <Scale size={16} className="text-[#4ade80]" />
              <span className="text-white font-black text-sm">Licensed Carrier</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:07769844298"
              className="bg-[#4ade80] hover:bg-white text-slate-900 px-8 py-4 rounded-lg font-black text-lg uppercase flex items-center gap-3 transition-all hover:scale-105 shadow-xl border-2 border-white/20"
            >
              <Phone size={20} /> 07769 844298
            </a>
            <a
              href="https://wa.me/447769844298"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-4 rounded-lg font-black text-lg uppercase flex items-center gap-3 transition-all hover:scale-105 shadow-xl"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Quote
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">

          {/* Introduction - Rich SEO content */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">
              Professional Waste Removal in {area.name}, {area.county}
            </h2>
            <div className="bg-white border-4 border-slate-900 rounded-xl p-8 shadow-[8px_8px_0px_#e2e8f0] mb-8">
              <p className="text-slate-700 leading-relaxed mb-4 text-lg">
                {area.intro}
              </p>
              <p className="text-slate-700 leading-relaxed mb-4">
                {area.areaDescription}
              </p>
              <p className="text-slate-700 leading-relaxed">
                {area.localContext}
              </p>
            </div>
          </section>

          {/* Services Available in This Area */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">
              Waste Removal Services in {area.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(SERVICE_AREA_DATA).map(([serviceKey, svcData]) => {
                const IconComponent = ICON_MAP[svcData.icon] || Truck;
                const serviceAreaSlug = getServiceAreaSlug(serviceKey, slug);
                return (
                  <Link
                    key={serviceKey}
                    to={`/${serviceAreaSlug}`}
                    className="bg-white border-4 border-slate-900 rounded-xl p-6 hover:shadow-[8px_8px_0px_#16a34a] transition-all hover:-translate-y-1 group"
                  >
                    <div className="w-14 h-14 bg-[#16a34a] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent size={28} className="text-white" />
                    </div>
                    <h3 className="font-black text-xl uppercase text-slate-900 mb-2 group-hover:text-[#16a34a] transition-colors">
                      {svcData.name} in {area.name}
                    </h3>
                    <p className="text-slate-600 font-bold text-sm mb-4">{svcData.price} — Same-day service available</p>
                    <div className="flex items-center justify-between">
                      <span className="text-[#16a34a] font-black text-lg">{svcData.price}</span>
                      <ArrowRight size={20} className="text-slate-400 group-hover:text-[#16a34a] group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Postcodes & Coverage */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8 flex items-center gap-4">
              <MapPin size={40} className="text-[#16a34a]" />
              {area.name} Postcodes We Cover
            </h2>
            <div className="bg-[#4ade80]/10 border-4 border-slate-900 rounded-xl p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {area.postcodes.map((pc, idx) => (
                  <div key={idx} className="bg-white border-2 border-[#16a34a] rounded-lg p-4 text-center">
                    <span className="font-black text-2xl text-[#16a34a]">{pc}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-black text-xl uppercase text-slate-900 mb-4">
                Nearby Areas We Also Serve:
              </h3>
              <div className="flex flex-wrap gap-3">
                {area.nearbyAreas.map((nearby, idx) => (
                  <span key={idx} className="bg-white border-2 border-slate-300 px-4 py-2 rounded-lg text-sm font-bold text-slate-700 flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#16a34a]" />
                    {nearby}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t-2 border-slate-200">
                <p className="text-slate-600 font-bold">
                  We cover all of {area.name} and the wider {area.county} region. Same-day collection available for most {area.postcodes[0]} postcodes.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us - Area Specific */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">
              Why Choose Total Waste Clearout in {area.name}?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_#e2e8f0]">
                <div className="flex items-center gap-3 mb-3">
                  <Zap size={24} className="text-[#16a34a]" />
                  <h3 className="font-black text-xl uppercase text-[#16a34a]">Same-Day {area.name} Collection</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  We respond to all {area.name} enquiries within 2 hours. Same-day waste collection available across all {area.postcodes[0]} postcodes, 7 days a week.
                </p>
              </div>
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_#e2e8f0]">
                <div className="flex items-center gap-3 mb-3">
                  <Recycle size={24} className="text-[#16a34a]" />
                  <h3 className="font-black text-xl uppercase text-[#16a34a]">94% Recycling Rate</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Almost all waste collected in {area.name} is recycled or repurposed at licensed {area.county} facilities. We provide waste transfer notes for every job.
                </p>
              </div>
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_#e2e8f0]">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck size={24} className="text-[#16a34a]" />
                  <h3 className="font-black text-xl uppercase text-[#16a34a]">Fully Licensed & Insured</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Environment Agency registered waste carrier with £5M public liability insurance. Full compliance for all waste removal in {area.name}.
                </p>
              </div>
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_#e2e8f0]">
                <div className="flex items-center gap-3 mb-3">
                  <Scale size={24} className="text-[#16a34a]" />
                  <h3 className="font-black text-xl uppercase text-[#16a34a]">Fixed Pricing — No Surprises</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Transparent fixed prices for all {area.name} waste removal. No hidden disposal fees, no fuel surcharges. The quote we give is the price you pay.
                </p>
              </div>
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_#e2e8f0]">
                <div className="flex items-center gap-3 mb-3">
                  <Truck size={24} className="text-[#16a34a]" />
                  <h3 className="font-black text-xl uppercase text-[#16a34a]">Skip Alternative {area.name}</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Faster and often cheaper than skip hire in {area.name}. No council permits needed. We load everything for you and take it away immediately.
                </p>
              </div>
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_#e2e8f0]">
                <div className="flex items-center gap-3 mb-3">
                  <Star size={24} className="text-[#16a34a]" />
                  <h3 className="font-black text-xl uppercase text-[#16a34a]">5-Star Rated Service</h3>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Rated 5 stars by customers across {area.name} and {area.county}. Professional, uniformed crews who leave your property spotless.
                </p>
              </div>
            </div>
          </section>

          {/* Local Landmarks & Areas */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">
              Waste Collection Near {area.name} Landmarks
            </h2>
            <div className="bg-white border-4 border-slate-900 rounded-xl p-8">
              <p className="text-slate-700 font-bold text-lg mb-6">
                We provide waste removal services near all major {area.name} locations including:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {area.landmarks.map((landmark, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <MapPin size={18} className="text-[#16a34a] shrink-0" />
                    <span className="font-bold text-slate-900">{landmark}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section - With FAQ Schema */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">
              Waste Removal {area.name} — Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {area.faqs.map((faq, idx) => (
                <details
                  key={idx}
                  className="bg-white border-4 border-slate-900 rounded-xl overflow-hidden group"
                >
                  <summary className="p-6 cursor-pointer font-black text-lg text-slate-900 hover:text-[#16a34a] transition-colors flex items-start gap-3 list-none [&::-webkit-details-marker]:hidden">
                    <span className="bg-[#16a34a] text-white w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-black mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{faq.q}</span>
                  </summary>
                  <div className="px-6 pb-6 pl-[4.25rem]">
                    <p className="text-slate-700 leading-relaxed font-bold">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] border-4 border-slate-900 rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">
                Need Waste Removed in {area.name}?
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Same-day collection across all {area.postcodes.join(", ")} postcodes. Professional, licensed, and eco-friendly waste removal in {area.name}.
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

          {/* Other Areas We Serve - Internal Linking */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">
              Other Areas We Serve Near {area.name}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {otherAreas.map((otherArea) => (
                <Link
                  key={otherArea.slug}
                  to={`/${otherArea.slug}`}
                  className="bg-white border-4 border-slate-900 rounded-xl p-6 hover:shadow-[6px_6px_0px_#16a34a] transition-all hover:-translate-y-1 group text-center"
                >
                  <MapPin size={24} className="text-[#16a34a] mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <h3 className="font-black text-lg uppercase text-slate-900 group-hover:text-[#16a34a] transition-colors">
                    {otherArea.name}
                  </h3>
                  <p className="text-slate-500 text-xs font-bold uppercase mt-1">{otherArea.county} | {otherArea.postcode}</p>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/areas"
                className="inline-flex items-center gap-2 bg-[#16a34a] hover:bg-[#064e3b] text-white font-black uppercase px-8 py-4 rounded-xl transition-colors border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a]"
              >
                <MapPin size={20} />
                View All Service Areas
              </Link>
            </div>
          </section>

          {/* Back to Home */}
          <div className="text-center pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-[#16a34a] text-white font-black uppercase px-8 py-4 rounded-xl transition-colors border-4 border-slate-900 shadow-[6px_6px_0px_#0f172a]"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaPage;
