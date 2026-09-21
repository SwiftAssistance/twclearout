import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  UtensilsCrossed,
  Hotel,
  Beer,
  Coffee,
  ChefHat,
  Sofa,
  Trash2,
  CalendarClock,
  Clock,
  ShieldCheck,
  FileCheck,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  AlertTriangle,
  Recycle
} from 'lucide-react';
import ContactForm from '../../components/ContactForm';

const HospitalityWaste = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const venues = [
    { icon: Hotel, label: "Hotels & Guest Houses" },
    { icon: UtensilsCrossed, label: "Restaurants" },
    { icon: Beer, label: "Pubs & Bars" },
    { icon: Coffee, label: "Cafés & Coffee Shops" },
    { icon: ChefHat, label: "Event & Contract Caterers" },
    { icon: Trash2, label: "Staff Canteens & Dark Kitchens" }
  ];

  const wasteGroups = [
    {
      icon: Sofa,
      title: "Bulky & fit-out",
      items: [
        "Restaurant and bar furniture — tables, chairs, booth seating, banquettes",
        "Hotel bedroom furniture — bed frames, mattresses, wardrobes, desks",
        "Commercial kitchen equipment — ranges, prep benches, extraction, shelving",
        "Refrigeration units and cellar cooling equipment (degassed by a certified engineer)",
        "Bar fit-out, back-bar units, pumps and fixtures",
        "Carpets, flooring, curtains, soft furnishings and ceiling tiles",
        "Signage, menu boards, A-boards and display units"
      ]
    },
    {
      icon: Trash2,
      title: "High-volume general & dry mixed",
      items: [
        "Overflow general waste when scheduled trade collections fall short",
        "Cardboard, packaging and delivery waste",
        "Glass, cans and dry mixed recycling",
        "Bin store and yard clear-downs",
        "Cellar and dry-store clearances",
        "Post-event and festival site waste",
        "Back-of-house and stockroom clutter"
      ]
    },
    {
      icon: Hotel,
      title: "Refurbishment & lease-end",
      items: [
        "Full venue strip-outs between tenancies",
        "Partial refits — front-of-house, kitchen, or washroom only",
        "Dilapidations and landlord handover clearance",
        "Closure and liquidation clearances"
      ]
    }
  ];

  const notHandled = [
    {
      title: "Food waste / Category 3 animal by-products",
      desc: "Separated food waste is regulated as an animal by-product and must go to an ABP-approved processor on a dedicated round. That needs a separate registration to a waste carrier licence. We don't collect it — you'll need a licensed food waste contractor for that stream."
    },
    {
      title: "Waste cooking oil",
      desc: "Used fryer oil is a liquid waste requiring a registered oil collector, usually collected free or at a rebate because of its biodiesel value. We don't take it."
    },
    {
      title: "Clinical and hazardous waste",
      desc: "Sharps, chemicals and clinical waste sit outside our licence. See our terms for the full list."
    }
  ];

  const compliance = [
    {
      icon: ShieldCheck,
      title: "Upper-Tier Licensed Carrier",
      desc: "Registered with the Environment Agency under licence CBDU630127. Verifiable on the public register at any time — your environmental health officer can check it in thirty seconds."
    },
    {
      icon: FileCheck,
      title: "Waste Transfer Note Every Visit",
      desc: "A legal waste transfer note for every collection, as required under the Environmental Protection Act 1990. Your duty of care doesn't end when the waste leaves your yard — the paperwork is what proves you discharged it."
    },
    {
      icon: Recycle,
      title: "94% Recycled",
      desc: "94% of everything we collect is recycled or reused at licensed facilities. Useful for your own sustainability reporting and for the questions guests and corporate clients increasingly ask."
    },
    {
      icon: CheckCircle,
      title: "£5M Public Liability",
      desc: "£5 million public liability insurance, with certificates supplied for your contractor records and landlord requirements."
    }
  ];

  const benefits = [
    { title: "Nothing Happens In Front Of Guests", desc: "Collections timed around service. Discreet crews, unmarked approach where you need it, no noise during covers." },
    { title: "We Load Everything", desc: "Your KPs and porters don't touch it. Our crew carries it out, including from cellars, upstairs function rooms and awkward back-of-house access." },
    { title: "No Skip, No Permit, No Blocked Yard", desc: "A skip in a town-centre car park costs you covers and often needs a council permit. We're in and out the same hour." },
    { title: "Two-Hour Response", desc: "Enquiries answered within two hours during working hours. Same-day collection is usually possible for calls before noon." },
    { title: "Uniformed, DBS-Checked Crews", desc: "Presentable crews who understand they're in a guest-facing environment." },
    { title: "One Contact, Multiple Sites", desc: "Running more than one venue? One point of contact, one schedule, one monthly invoice across the group." }
  ];

  const serviceAreas = [
    { name: "Reading", slug: "/commercial-waste-removal-reading/" },
    { name: "Slough", slug: "/commercial-waste-removal-slough/" },
    { name: "Guildford", slug: "/commercial-waste-removal-guildford/" },
    { name: "Woking", slug: "/commercial-waste-removal-woking/" },
    { name: "Bracknell", slug: "/commercial-waste-removal-bracknell/" },
    { name: "Windsor", slug: "/commercial-waste-removal-windsor/" },
    { name: "Ascot", slug: "/commercial-waste-removal-ascot/" },
    { name: "Egham", slug: "/commercial-waste-removal-egham/" },
    { name: "Maidenhead", slug: "/commercial-waste-removal-maidenhead/" },
    { name: "Staines", slug: "/commercial-waste-removal-staines/" }
  ];

  // Rendered visibly below AND serialised into the FAQPage JSON-LD from the
  // same source, so the schema and the on-page copy cannot drift apart.
  const faqs = [
    {
      q: "Do you collect food waste from restaurants?",
      a: "No. Separated food waste is classed as a Category 3 animal by-product and has to go to an ABP-approved processor on a dedicated round, which requires a separate registration. You'll need a specialist food waste contractor for that stream. We handle everything else — general waste, dry mixed recycling, glass, cardboard, bulky items and fit-out waste — with a waste transfer note every time."
    },
    {
      q: "Can you collect before we open?",
      a: "Yes. Early-morning, late-evening and closed-day collections are available so nothing happens in front of guests. Ask about slots from 06:00 when you book. Our standard hours are Monday to Friday 07:00–19:00 and Saturday 08:00–17:00, with out-of-hours arranged in advance."
    },
    {
      q: "Do you offer scheduled contracts or is it one-off only?",
      a: "Both. We run fixed-schedule collections — weekly, fortnightly or monthly — for hospitality venues that want a standing slot, and we take ad-hoc bookings for one-off clear-downs. Account customers get priority on same-day call-outs. Call 07769 844298 to arrange a free site audit."
    },
    {
      q: "Are you licensed to take commercial waste from a pub or hotel?",
      a: "Yes. Total Waste Clearout Ltd is registered with the Environment Agency as an upper-tier waste carrier under licence number CBDU630127, which you can verify on the public register. We carry £5 million public liability insurance and issue a legal waste transfer note for every collection, as required under the Environmental Protection Act 1990."
    },
    {
      q: "Can you clear a restaurant or pub for a refurbishment?",
      a: "Yes. We handle full venue strip-outs and partial refits — furniture, commercial kitchen equipment, bar fit-out, refrigeration, flooring, ceilings and signage. Commercial electricals are disposed of under WEEE regulations and refrigerant gas is handled by certified engineers. Work can be scheduled around a closure period or a landlord's dilapidations deadline."
    },
    {
      q: "How much does hospitality waste collection cost?",
      a: "Ad-hoc collections start from £120 for a partial van load and £280 for a full load, with all labour, loading, transport, licensed disposal and documentation included. Scheduled contracts are priced on volume, frequency and number of sites — book a free site audit on 07769 844298 for a fixed monthly figure."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Helmet>
        <title>Hospitality Waste Collection Berkshire | Hotels, Pubs &amp; Restaurants</title>
        <meta name="description" content="Commercial waste collection for hotels, restaurants, pubs & cafés across Berkshire & Surrey. Scheduled or ad-hoc, out-of-hours, EA licensed. Call 07769 844298." />
        <meta name="keywords" content="hospitality waste collection, hospitality waste berkshire, hospitality waste surrey, restaurant waste collection reading, restaurant waste removal berkshire, pub waste collection berkshire, pub waste removal surrey, hotel waste collection berkshire, hotel waste removal windsor, cafe waste collection reading, bar waste clearance guildford, commercial waste collection hospitality, trade waste collection restaurants, restaurant clearance berkshire, pub clearance surrey, hotel furniture disposal berkshire, commercial kitchen equipment removal, restaurant strip out berkshire, pub refurbishment clearance, hotel refurbishment waste removal, bar fit out removal surrey, catering equipment disposal berkshire, out of hours waste collection hospitality, scheduled commercial waste collection berkshire, recurring waste collection surrey, licensed waste carrier hospitality, duty of care waste hospitality, event catering waste removal, venue waste clearance berkshire, hospitality waste windsor, hospitality waste ascot, hospitality waste reading, hospitality waste guildford, restaurant waste removal near me, pub waste collection near me" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://totalwasteclearout.co.uk/services/hospitality-waste/" />
        <meta property="og:title" content="Hospitality Waste Collection & Clearance | Total Waste Clearout" />
        <meta property="og:description" content="Waste collection and clearance for hotels, restaurants, pubs, bars and cafés across Berkshire & Surrey. Scheduled contracts and out-of-hours collections." />
        <meta property="og:url" content="https://totalwasteclearout.co.uk/services/hospitality-waste/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://totalwasteclearout.co.uk/logo-512.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="Hospitality Waste Collection & Clearance | Total Waste Clearout" />
        <meta property="twitter:description" content="Waste collection and clearance for hotels, restaurants, pubs, bars and cafés across Berkshire & Surrey. Scheduled contracts and out-of-hours collections." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "Hospitality Waste Collection and Clearance",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Total Waste Clearout Ltd",
            "telephone": "+447769844298",
            "email": "office@totalwasteclearout.co.uk",
            "identifier": {
              "@type": "PropertyValue",
              "propertyID": "Environment Agency Waste Carrier Licence",
              "value": "CBDU630127"
            }
          },
          "areaServed": [
            { "@type": "AdministrativeArea", "name": "Berkshire" },
            { "@type": "AdministrativeArea", "name": "Surrey" }
          ],
          "audience": { "@type": "BusinessAudience", "audienceType": "Hotels, restaurants, pubs, bars, cafés and event caterers" },
          "url": "https://totalwasteclearout.co.uk/services/hospitality-waste/"
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-[#4ade80] rounded-2xl flex items-center justify-center shrink-0">
              <UtensilsCrossed size={40} className="text-[#064e3b]" />
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase italic text-white tracking-tight leading-none">
              Hospitality Waste Collection &amp; Clearance
            </h1>
          </div>
          <p className="text-white/80 text-lg md:text-xl font-bold italic max-w-3xl">
            Commercial waste collection and clearance for hotels, restaurants, pubs, bars, cafés and event caterers across Berkshire, Surrey and the Thames Valley. Scheduled or ad-hoc, worked around your service times.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Pre-Service Collections</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">Scheduled or Ad-Hoc</span>
            </div>
            <div className="bg-white/10 border-2 border-white/20 px-4 py-2 rounded-lg">
              <span className="text-white font-black">EA Licensed — CBDU630127</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">

          {/* Venues We Work With */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Venues We Work With</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {venues.map((venue, idx) => {
                const Icon = venue.icon;
                return (
                  <div key={idx} className="bg-[#4ade80]/10 border-4 border-slate-900 rounded-xl p-6 hover:shadow-[8px_8px_0px_#064e3b] transition-all">
                    <div className="w-16 h-16 bg-[#16a34a] rounded-xl flex items-center justify-center mb-4">
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="font-black text-xl uppercase text-slate-900">{venue.label}</h3>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Hospitality Waste We Clear */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Hospitality Waste We Clear</h2>
            <div className="bg-white border-4 border-slate-900 rounded-xl p-8">
              {wasteGroups.map((group, idx) => {
                const Icon = group.icon;
                return (
                  <div key={idx} className={idx === 0 ? '' : 'mt-8'}>
                    <h3 className="font-black text-sm uppercase tracking-widest text-[#16a34a] mb-4 flex items-center gap-2">
                      <Icon size={20} className="text-[#16a34a] shrink-0" />
                      {group.title}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {group.items.map((item, i) => (
                        <div key={i} className="flex gap-3 items-start">
                          <CheckCircle size={24} className="text-[#16a34a] shrink-0" />
                          <span className="text-slate-700 font-bold">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
              <div className="mt-6 pt-6 border-t-2 border-slate-200">
                <p className="text-slate-600 text-sm">
                  <strong>WEEE compliance:</strong> commercial fridges, freezers, dishwashers, coffee machines and kitchen electricals are disposed of under WEEE regulations. Refrigerant gas is handled by certified engineers before disposal.
                </p>
              </div>
            </div>
          </section>

          {/* Scheduled & Recurring Collections */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Scheduled &amp; Recurring Collections</h2>
            <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] border-4 border-slate-900 rounded-xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <CalendarClock size={32} className="text-[#4ade80] mb-4" />
                  <h3 className="font-black text-xl uppercase mb-3">Fixed-Schedule Collections</h3>
                  <p className="text-white/80">A standing slot on a set day and time, weekly, fortnightly or monthly. Same crew, same van, no booking call needed.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <Clock size={32} className="text-[#4ade80] mb-4" />
                  <h3 className="font-black text-xl uppercase mb-3">Pre-Service &amp; Out-of-Hours</h3>
                  <p className="text-white/80">Early-morning, late-evening and closed-day collections so nothing happens in front of guests. Ask about slots from 06:00.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <Phone size={32} className="text-[#4ade80] mb-4" />
                  <h3 className="font-black text-xl uppercase mb-3">Priority Ad-Hoc</h3>
                  <p className="text-white/80">Account customers get priority on same-day call-outs for an unexpected delivery backlog, a post-event clear-down or a broken-down unit.</p>
                </div>
              </div>
              {/* TODO(kurt): confirm invoice terms (30-day? monthly billing?) before this goes
                  live — the construction page already advertises "Trade Accounts Available -
                  Volume Discounts - Invoice Terms", so keep this consistent with whatever
                  that actually means in practice. */}
              <div className="mt-8 bg-[#4ade80]/20 border-2 border-[#4ade80] rounded-lg p-4 text-center">
                <p className="text-white font-black text-lg">
                  Account Terms Available — Multi-Site Coverage — One Consolidated Monthly Invoice
                </p>
              </div>
            </div>
          </section>

          {/* What We Don't Handle */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">What We Don't Handle — And Who To Call</h2>
            <div className="bg-orange-50 border-4 border-orange-500 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle size={32} className="text-orange-500 shrink-0" />
                <p className="text-slate-700 leading-relaxed font-bold">
                  Being straight about this saves everyone a wasted visit. Three hospitality waste streams need a specialist, and we're not it:
                </p>
              </div>
              <div className="space-y-6">
                {notHandled.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <span className="text-orange-500 font-black text-xl leading-tight">×</span>
                    <div>
                      <h3 className="font-black text-lg uppercase text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t-2 border-orange-200">
                <p className="text-slate-700 font-bold">
                  Everything else — general, dry mixed recycling, glass, cardboard, bulky items, fit-out and strip-out waste — we handle in full, with a waste transfer note every time.
                </p>
              </div>
            </div>
          </section>

          {/* Compliance & Duty Of Care */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Compliance &amp; Duty Of Care</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {compliance.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_#e2e8f0]">
                    <h3 className="font-black text-xl uppercase text-[#16a34a] mb-3 flex items-center gap-2">
                      <Icon size={24} className="text-[#16a34a] shrink-0" />
                      {item.title}
                    </h3>
                    <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-8 bg-white border-4 border-slate-900 rounded-xl p-8 shadow-[8px_8px_0px_#e2e8f0]">
              <p className="text-slate-700 leading-relaxed">
                Duty of care is worth being clear about, because it catches venues out. The legal responsibility for waste stays with the business that produced it — it does not transfer to whoever drives it away. If waste from your kitchen or bin store is fly-tipped in a lay-by, the enforcement trail leads back to your venue, and "we paid a man with a van" is not a defence. Using an unlicensed carrier exposes the business to prosecution and unlimited fines regardless of who actually dumped it. That is precisely what the carrier licence number and the waste transfer note exist to protect against: the licence shows the carrier is registered to move your waste, and the transfer note is the written record that proves you checked. Total Waste Clearout Ltd is a fully licensed upper-tier waste carrier registered with the Environment Agency under licence number CBDU630127, we carry £5 million public liability insurance on every job, and we provide legal waste transfer notes as standard. Keep them for two years and your audit trail is complete.
              </p>
            </div>
          </section>

          {/* Pricing */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Hospitality Waste Pricing</h2>
            {/* TODO(kurt): these are the site's existing generic van-load prices. If hospitality
                contracts have their own rate card (per-collection or monthly), replace these
                three tiers before launch. Don't publish a number you can't honour. */}
            <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] border-4 border-slate-900 rounded-xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£120+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Ad-Hoc Collection</h3>
                  <p className="text-white/80">Partial van load. Bulky items, an overflow clear-down, a bin store tidy. Fixed price, quoted before we arrive.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">£280+</div>
                  <h3 className="font-black text-xl uppercase mb-3">Full Van Load</h3>
                  <p className="text-white/80">A full clear-down — post-event waste, a cellar or dry-store clearance, a big delivery backlog.</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-xl p-6 border-2 border-white/20">
                  <div className="text-[#4ade80] font-black text-4xl mb-2">POA</div>
                  <h3 className="font-black text-xl uppercase mb-3">Scheduled Contract</h3>
                  <p className="text-white/80">Recurring collections priced on volume, frequency and site count. Book a free site audit for a fixed monthly figure.</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/90 font-bold text-center">
                  All prices include labour, loading, transport, licensed disposal and a waste transfer note. No permit costs, no weight surcharges, no hidden disposal fees.
                </p>
              </div>
            </div>
          </section>

          {/* Why Hospitality Operators Use Us */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Why Hospitality Operators Use Us</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_#e2e8f0]">
                  <h3 className="font-black text-xl uppercase text-[#16a34a] mb-3 flex items-center gap-2">
                    <CheckCircle size={24} className="shrink-0" />
                    {benefit.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{benefit.desc}</p>
                </div>
              ))}
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
                Hospitality waste collection across Berkshire, Surrey and the Thames Valley:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {serviceAreas.map((area, idx) => (
                  <Link key={idx} to={area.slug} className="flex items-center gap-2 hover:text-[#16a34a] transition-colors group">
                    <CheckCircle size={20} className="text-[#16a34a] shrink-0" />
                    <span className="font-bold text-slate-900 group-hover:text-[#16a34a] underline decoration-[#16a34a]/30">Commercial Waste {area.name}</span>
                  </Link>
                ))}
              </div>
              <p className="text-slate-600 mt-6 text-sm">
                Also covering Wokingham, Camberley, Henley-on-Thames, Farnborough and the wider Thames Valley. Multi-site hospitality groups — we can cover your whole estate.
              </p>
            </div>
          </section>

          {/* Long-form Service Description */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-6">Hospitality Waste Collection — Berkshire, Surrey &amp; The Thames Valley</h2>
            <div className="prose prose-lg max-w-none">
              <div className="bg-white border-4 border-slate-900 rounded-xl p-8 shadow-[8px_8px_0px_#e2e8f0] mb-8">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Hospitality waste does not behave like office waste. Volumes move with covers, events and deliveries, so a bin round sized for a quiet February week is overflowing by the second week of June — and the same contract is paying for half-empty lifts in January. Most venues end up managing the gap themselves: bags stacked in the yard, a bin store that fills before the next scheduled collection, staff making tip runs in their own cars. Bulky items are a separate problem again. A wheelie bin round will not take a banquette, a stack of broken chairs, a prep bench or a failed under-counter fridge, so those items sit in a corridor, a cellar or a car park until someone finds a contractor who will move them. The result is a venue paying for a service that covers the predictable half of its waste and nothing else.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  We work the other way round. Our crew loads — your KPs, porters and duty managers don't touch it — and collections are timed to your service rather than to a round. Venues with steady volume take a fixed slot, weekly, fortnightly or monthly, and keep priority ad-hoc call-outs for the weeks that blow up: an event week in Windsor or Ascot when the bin store fills by Wednesday, a delivery backlog after a bank holiday. Town-centre restaurants in Reading and Guildford often have no yard and no loading bay at all, so we work early or late and carry out through the front. Riverside pubs at Bray and Sonning have the same constraint for a different reason — there is nowhere to stand a skip, and nobody wants one in the car park in August. A van in and out inside the hour answers both.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Refurbishment and lease-end work is a different job again. A venue strip-out means furniture, banquettes and bar fit-out first, then commercial kitchen equipment — ranges, prep benches, extraction and shelving — and then the finishes: flooring, ceiling tiles, signage and display units. Commercial electricals are handled under WEEE regulations, and refrigeration is degassed by a certified engineer before the unit is moved, which applies to cellar cooling and under-counter units as much as to a walk-in. Where a landlord has issued a dilapidations schedule we work to it and hand the site back to specification. Where a venue has to be turned around between tenancies we organise the work around the closure window rather than stretching it, and partial refits are run the same way — front-of-house only, or kitchen only, with the rest of the building trading as normal.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Compliance is the part venue managers get caught by. Your duty of care under the Environmental Protection Act 1990 stays with your business after the waste leaves your yard: if it is fly-tipped, the business that produced it can be prosecuted, and the waste transfer note and the carrier's licence number are what prove you discharged that duty. Total Waste Clearout Ltd is a fully licensed upper-tier waste carrier registered with the Environment Agency under licence number CBDU630127. We carry £5 million public liability insurance on every job and provide legal waste transfer notes as standard, and 94% of what we collect is recycled or reused at licensed facilities — a figure you can use directly in a hotel's sustainability reporting or a corporate client's supplier questionnaire. Trading since 2014. To arrange a site audit, call 07769 844298.
                </p>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Hospitality Waste — Common Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_#e2e8f0]">
                  <h3 className="font-black text-xl uppercase text-slate-900 mb-3">{faq.q}</h3>
                  <p className="text-slate-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-[#064e3b] to-[#065f46] border-4 border-slate-900 rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl md:text-5xl font-black uppercase italic mb-6">
                Book A Free Site Audit
              </h2>
              <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                We'll visit your venue, look at your current arrangement and volumes, and come back with a fixed contract price. No obligation, no sales visit dressed up as a survey.
              </p>
              <div className="bg-white border-4 border-slate-900 rounded-xl p-6 md:p-8 text-slate-900 max-w-xl mx-auto text-left">
                <ContactForm subject="Hospitality Site Audit Request" compact />
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
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

          {/* Related Pages */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black uppercase text-slate-900 mb-8">Related Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link to="/services/commercial-ripouts/" className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_#e2e8f0] hover:shadow-[8px_8px_0px_#064e3b] transition-all">
                <h3 className="font-black text-xl uppercase text-[#16a34a]">Commercial Clearout &amp; Strip-Out</h3>
              </Link>
              <Link to="/services/construction-waste/" className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_#e2e8f0] hover:shadow-[8px_8px_0px_#064e3b] transition-all">
                <h3 className="font-black text-xl uppercase text-[#16a34a]">Construction &amp; Trade Waste</h3>
              </Link>
              <Link to="/services/" className="bg-white border-4 border-slate-900 rounded-xl p-6 shadow-[6px_6px_0px_#e2e8f0] hover:shadow-[8px_8px_0px_#064e3b] transition-all">
                <h3 className="font-black text-xl uppercase text-[#16a34a]">All Services</h3>
              </Link>
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

export default HospitalityWaste;
