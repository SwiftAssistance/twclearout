/**
 * Service + Area combination data for generating 60 unique SEO-optimised pages.
 * Each service-area page targets "[service] + [location]" search queries
 * (e.g. "house clearance reading", "end of tenancy clearance slough").
 *
 * Content is generated dynamically by combining service-specific templates
 * with area-specific data from areaData.js, ensuring every page has
 * unique, locally-relevant content that Google treats as distinct.
 */

import { AREA_DATA } from './areaData';

// ── SERVICE DEFINITIONS ──────────────────────────────────────────────

const SERVICE_AREA_DATA = {
  "house-clearance": {
    name: "House Clearance",
    servicePageSlug: "/services/home-probate-clearance",
    icon: "Home",
    price: "From £150",
    badges: ["Same-Day Available", "Probate Specialists", "94% Recycled"],
    whatWeRemove: [
      { icon: "Sofa", label: "Furniture & Sofas" },
      { icon: "Package", label: "Personal Belongings" },
      { icon: "ShoppingCart", label: "Kitchen & Appliances" },
      { icon: "Trash2", label: "General Household Waste" },
      { icon: "Hammer", label: "Carpets & Flooring" },
      { icon: "Package", label: "Loft & Attic Contents" }
    ],
    commonItems: [
      "Sofas, armchairs, and beds",
      "Wardrobes, cabinets, and drawers",
      "Fridges, freezers, and washing machines",
      "TVs, computers, and electronics",
      "Kitchen appliances and utensils",
      "Carpets, curtains, and soft furnishings",
      "Books, ornaments, and personal items",
      "Loft and attic contents",
      "Garden furniture and tools",
      "Mattresses and bed frames"
    ],
    benefits: [
      { title: "Compassionate Service", desc: "We handle probate and bereavement clearances with sensitivity and respect for your situation" },
      { title: "Same-Day Available", desc: "Urgent house clearances completed same-day, 7 days a week across the local area" },
      { title: "Full Property Clearance", desc: "Every room cleared including loft, garage, garden, and outbuildings — nothing left behind" },
      { title: "Licensed & Insured", desc: "Fully licensed waste carriers with £5M public liability insurance for your peace of mind" },
      { title: "94% Recycling Rate", desc: "Usable items donated to charity, everything else recycled responsibly at licensed facilities" },
      { title: "No Hidden Costs", desc: "Fixed-price quotes include loading, transport, and disposal — the quote we give is the price you pay" }
    ],
    pricing: [
      { price: "£150+", tier: "Single Room", desc: "One room cleared including all furniture, belongings, and waste" },
      { price: "£400+", tier: "2-3 Bed House", desc: "Full house clearance for standard family homes. Includes all rooms" },
      { price: "£600+", tier: "4+ Bed House", desc: "Large property clearance including loft, garage, and garden if needed" }
    ],
    getIntro: (area) =>
      `Looking for professional house clearance in ${area.name}? Total Waste Clearout provides fast, compassionate house clearance services across ${area.name} and the wider ${area.county} area. Whether you need a full property cleared for probate, downsizing, moving, or landlord purposes, our experienced crews handle everything — from single-room clearances to complete whole-house clear-outs across all ${area.postcodes[0]} postcodes.`,
    getDescription: (area) =>
      `Our ${area.name} house clearance service covers every part of the property — bedrooms, living areas, kitchens, bathrooms, lofts, garages, and gardens. We work with families dealing with probate and bereavement, helping to clear properties sensitively while providing full inventory documentation for solicitors when required. For landlords across ${area.name}, we offer rapid turnaround clearances to prepare rental properties for new tenants. Every item is sorted on-site: usable furniture and belongings are donated to local ${area.county} charities, and 94% of remaining waste is recycled at licensed facilities. As a fully licensed waste carrier with £5M public liability insurance, we provide waste transfer notes for every job — essential for probate documentation and landlord compliance.`,
    getLocalContext: (area) =>
      `${area.name}'s diverse property market — from period homes to modern developments — means house clearance needs vary significantly. ${area.localContext} Our experienced crews are familiar with all property types across ${area.postcodes.join(", ")} postcodes, from terraced houses in the town centre to larger detached properties in surrounding areas like ${area.nearbyAreas.slice(0, 3).join(", ")}. We understand the local area and can often provide same-day service for urgent clearances.`,
    getFaqs: (area) => [
      { q: `How quickly can you clear a house in ${area.name}?`, a: `We offer same-day house clearance across all ${area.name} postcodes including ${area.postcodes.join(", ")}. Most standard 2-3 bedroom houses can be fully cleared within a single day. For larger properties, we can arrange multi-day clearances.` },
      { q: `How much does house clearance in ${area.name} cost?`, a: `Single room clearances in ${area.name} start from £150, with full 2-3 bed house clearances from £400. We provide fixed-price quotes with no hidden fees — the price we quote is the price you pay. Every quote includes loading, transport, and disposal.` },
      { q: `Do you handle probate house clearances in ${area.name}?`, a: `Yes — probate clearances are one of our specialities in ${area.name}. We work sensitively with families and can provide full inventory documentation for solicitors. We set aside any items of value or sentimental importance before clearing.` },
      { q: `What happens to items from house clearances in ${area.name}?`, a: `Usable furniture and household items are donated to charities across ${area.county}. 94% of everything we collect is recycled or repurposed at licensed facilities. We provide waste transfer notes for every clearance job in ${area.name}.` },
      { q: `Do you clear the entire house including loft and garage?`, a: `Absolutely. Our ${area.name} house clearance service covers every part of the property — all rooms, loft/attic, garage, shed, garden, and any outbuildings. We leave the property completely empty and broom-clean.` },
      { q: `Are you licensed for house clearance in ${area.name}?`, a: `Yes — we're fully registered waste carriers with the Environment Agency, carrying £5M public liability insurance. We provide legal waste transfer notes for every house clearance in ${area.name} and the wider ${area.county} area.` }
    ],
    getMeta: (area) => ({
      title: `House Clearance ${area.name} | Probate & Home Clearance ${area.postcode} | Same-Day`,
      description: `Professional house clearance in ${area.name}, ${area.county}. Probate, downsizing & landlord clearances. Same-day service, 94% recycled, licensed carrier. From £150. Call 07769 844298.`,
      keywords: `house clearance ${area.name.toLowerCase()}, home clearance ${area.name.toLowerCase()}, probate clearance ${area.name.toLowerCase()}, property clearance ${area.name.toLowerCase()}, house clearout ${area.name.toLowerCase()}, furniture removal ${area.name.toLowerCase()}, ${area.postcode} house clearance, ${area.county.toLowerCase()} house clearance, bereavement clearance ${area.name.toLowerCase()}, full house clearance ${area.name.toLowerCase()}`
    })
  },

  "end-of-tenancy-clearance": {
    name: "End of Tenancy Clearance",
    servicePageSlug: "/services/end-of-tenancy",
    icon: "Home",
    price: "From £150",
    badges: ["Same-Day Available", "Deposit Protection", "94% Recycled"],
    whatWeRemove: [
      { icon: "Sofa", label: "Furniture & White Goods" },
      { icon: "Package", label: "Personal Belongings" },
      { icon: "ShoppingCart", label: "Kitchen Items" },
      { icon: "Briefcase", label: "Office Equipment" },
      { icon: "Trash2", label: "General Rubbish" },
      { icon: "Package", label: "Unwanted Items" }
    ],
    commonItems: [
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
    ],
    benefits: [
      { title: "Same-Day Service", desc: "Emergency end of tenancy clearances available 7 days a week — meet tight move-out deadlines" },
      { title: "Deposit Protection", desc: "We help tenants and landlords meet deposit return requirements with thorough property clearance" },
      { title: "Licensed & Insured", desc: "Fully licensed waste carriers with £5M public liability insurance and waste transfer notes provided" },
      { title: "94% Recycling Rate", desc: "Environmentally responsible disposal with usable items donated to local charities" },
      { title: "No Hidden Costs", desc: "Fixed-price quotes include loading, transport, and disposal — no surprise charges" },
      { title: "Professional Team", desc: "Uniformed, experienced crews who respect your property and work to your timeframes" }
    ],
    pricing: [
      { price: "£150+", tier: "Single Room", desc: "One room cleared completely. Ideal for a bedroom or kitchen clear-out" },
      { price: "£350+", tier: "Full Flat", desc: "Complete 1-2 bedroom flat clearance, perfect for end of tenancy" },
      { price: "£600+", tier: "Whole House", desc: "Full 3-4 bedroom house clearance including garages and gardens" }
    ],
    getIntro: (area) =>
      `Need an end of tenancy clearance in ${area.name}? Total Waste Clearout provides fast, professional end of tenancy clearance services across ${area.name} and all ${area.postcodes[0]} postcodes. Whether you're a tenant facing tight move-out deadlines or a landlord dealing with abandoned items, we deliver same-day clearances that help secure deposit returns and prepare properties for new occupants.`,
    getDescription: (area) =>
      `Moving out of a rental property in ${area.name}? Our experienced teams understand the time pressures of end-of-tenancy situations across ${area.county}. Unlike skip hire — which requires ${area.name} council permits, waiting times, and you loading it yourself — our professional clearance service is immediate, comprehensive, and hassle-free. We arrive on time, load everything efficiently, and leave the property clean and ready for inspection. We handle everything from single-room clearances to entire property clear-outs, including bulky furniture, white goods, and accumulated rubbish. We've worked with hundreds of letting agents across ${area.county}, and we know exactly what's required to meet property inspection standards.`,
    getLocalContext: (area) =>
      `${area.name}'s rental market drives significant demand for end of tenancy clearances. ${area.localContext} Whether it's a student let near local campuses, a professional rental in the town centre, or a family home in areas like ${area.nearbyAreas.slice(0, 3).join(", ")}, we provide the fast, thorough clearance service that landlords and tenants across ${area.postcodes.join(", ")} postcodes depend on.`,
    getFaqs: (area) => [
      { q: `How fast can you do an end of tenancy clearance in ${area.name}?`, a: `We offer same-day end of tenancy clearance across all ${area.name} postcodes including ${area.postcodes.join(", ")}. Most flat clearances are completed within 2-3 hours, full houses within a day.` },
      { q: `How much does end of tenancy clearance cost in ${area.name}?`, a: `Single room clearances in ${area.name} start from £150, full flat clearances from £350, and whole house clearances from £600. Fixed pricing with no hidden fees — the quote includes everything.` },
      { q: `Will your clearance help me get my deposit back?`, a: `Yes — our thorough end of tenancy clearance service in ${area.name} is designed to meet landlord and letting agent inspection standards. We leave properties clean and clear, helping tenants secure their deposit returns.` },
      { q: `Do you work with letting agents in ${area.name}?`, a: `Yes — we work with numerous letting agents and property managers across ${area.name} and ${area.county}. We can coordinate directly with agents for access and scheduling.` },
      { q: `Can you clear a property at short notice in ${area.name}?`, a: `Absolutely. We specialise in urgent end of tenancy clearances across ${area.name}. Same-day service is available — call us on 07769 844298 and we can often be with you within 2 hours.` },
      { q: `Do you provide waste transfer notes for ${area.name} clearances?`, a: `Yes — as fully licensed waste carriers, we provide legal waste transfer notes for every end of tenancy clearance in ${area.name}. This documentation protects both landlords and tenants.` }
    ],
    getMeta: (area) => ({
      title: `End of Tenancy Clearance ${area.name} | Tenant Clearout ${area.postcode} | Same-Day`,
      description: `Professional end of tenancy clearance in ${area.name}, ${area.county}. Same-day service, deposit protection, licensed carrier. Flats from £350, houses from £600. Call 07769 844298.`,
      keywords: `end of tenancy clearance ${area.name.toLowerCase()}, tenant clearance ${area.name.toLowerCase()}, rental clearance ${area.name.toLowerCase()}, move out clearance ${area.name.toLowerCase()}, landlord clearance ${area.name.toLowerCase()}, flat clearance ${area.name.toLowerCase()}, ${area.postcode} end of tenancy, ${area.county.toLowerCase()} tenancy clearance, deposit return clearance ${area.name.toLowerCase()}`
    })
  },

  "garden-waste-removal": {
    name: "Garden Waste Removal",
    servicePageSlug: "/services/garden-waste",
    icon: "TreePine",
    price: "From £80",
    badges: ["100% Composted", "Same-Day Available", "Skip Alternative"],
    whatWeRemove: [
      { icon: "TreePine", label: "Trees & Branches" },
      { icon: "TreePine", label: "Hedges & Shrubs" },
      { icon: "Trash2", label: "Grass & Turf" },
      { icon: "HardHat", label: "Soil & Rubble" },
      { icon: "Hammer", label: "Garden Structures" },
      { icon: "Package", label: "Garden Furniture" }
    ],
    commonItems: [
      "Tree branches and logs",
      "Hedge trimmings and cuttings",
      "Grass clippings and turf",
      "Soil, earth, and topsoil",
      "Old fencing and trellis",
      "Garden furniture and BBQs",
      "Plant pots, planters, and containers",
      "Paving slabs and decking",
      "Compost bins and water butts",
      "Sheds and greenhouse debris"
    ],
    benefits: [
      { title: "100% Composted", desc: "All green waste is composted at licensed facilities — the most environmentally responsible disposal method" },
      { title: "Same-Day Collection", desc: "Garden waste collected same-day across the local area, 7 days a week" },
      { title: "Any Volume", desc: "From a few bags of hedge trimmings to full garden overhauls — no job too small or too large" },
      { title: "We Load Everything", desc: "No bagging required — we load loose branches, soil, rubble, and all garden waste for you" },
      { title: "Skip Alternative", desc: "Faster and cheaper than skip hire — no council permits, no waiting, no loading it yourself" },
      { title: "Licensed Carrier", desc: "Environment Agency registered with £5M insurance. Waste transfer notes for every collection" }
    ],
    pricing: [
      { price: "£80+", tier: "Small Load", desc: "A few bags of cuttings, branches, or garden waste. Quick collection and removal" },
      { price: "£200+", tier: "Medium Load", desc: "Hedge clearance, tree branches, or moderate garden clear-out" },
      { price: "£400+", tier: "Full Garden", desc: "Complete garden clearance including soil, structures, and heavy waste" }
    ],
    getIntro: (area) =>
      `Need garden waste removed in ${area.name}? Total Waste Clearout provides fast, eco-friendly garden waste removal across ${area.name} and all ${area.postcodes[0]} postcodes. From a few bags of hedge trimmings to complete garden overhauls, we collect and compost all green waste at licensed ${area.county} facilities — 100% responsibly.`,
    getDescription: (area) =>
      `Our ${area.name} garden waste removal service handles everything your green bin can't. We collect trees, branches, hedges, grass, soil, turf, old fencing, garden furniture, decking, and any other garden waste — no bagging required. Our crews load everything for you, take it away immediately, and ensure all green waste is composted at licensed facilities in the ${area.county} area. Unlike skip hire in ${area.name}, there are no council permits to arrange, no waiting for delivery, and no loading it yourself. We arrive, collect, and leave — often within the same day you call.`,
    getLocalContext: (area) =>
      `${area.name}'s residential gardens — from compact town-centre plots to larger properties in ${area.nearbyAreas.slice(0, 3).join(", ")} — generate significant volumes of green waste, especially during spring and autumn. ${area.localContext} Our garden waste service is one of our most popular offerings across all ${area.postcodes.join(", ")} postcodes, with regular customers booking seasonal clearances to keep their gardens manageable.`,
    getFaqs: (area) => [
      { q: `How much does garden waste removal cost in ${area.name}?`, a: `Garden waste removal in ${area.name} starts from just £80 for a small load. Medium loads (hedge clearances, tree branches) from £200, and full garden clearances from £400. Fixed pricing — no hidden fees.` },
      { q: `Do you collect garden waste same-day in ${area.name}?`, a: `Yes — same-day garden waste collection is available across all ${area.name} postcodes including ${area.postcodes.join(", ")}. Call us and we can typically be with you within 2 hours.` },
      { q: `Do I need to bag my garden waste first?`, a: `No — we load everything loose. Just leave your garden waste where it is and our ${area.name} crews will load it all onto our vehicles. No bagging, no preparation needed.` },
      { q: `Can you remove trees and large branches in ${area.name}?`, a: `Yes — we remove felled trees, large branches, stumps, and heavy green waste across ${area.name}. For standing tree removal, we can recommend trusted local tree surgeons and then clear all the waste.` },
      { q: `What happens to garden waste collected in ${area.name}?`, a: `100% of green waste we collect in ${area.name} is composted at licensed ${area.county} facilities. Non-green garden waste (fencing, furniture, etc.) is recycled wherever possible.` },
      { q: `Are you cheaper than a skip for garden waste in ${area.name}?`, a: `In most cases, yes. Skip hire in ${area.name} requires a council permit, you load it yourself, and there are weight limits. We load for you, take everything immediately, and our pricing is transparent from the start.` }
    ],
    getMeta: (area) => ({
      title: `Garden Waste Removal ${area.name} | Green Waste Clearance ${area.postcode} | Same-Day`,
      description: `Garden waste removal in ${area.name}, ${area.county}. Trees, hedges, grass, soil cleared. 100% composted, same-day service, licensed carrier. From £80. Call 07769 844298.`,
      keywords: `garden waste removal ${area.name.toLowerCase()}, green waste clearance ${area.name.toLowerCase()}, garden clearance ${area.name.toLowerCase()}, tree removal ${area.name.toLowerCase()}, hedge clearance ${area.name.toLowerCase()}, garden rubbish ${area.name.toLowerCase()}, ${area.postcode} garden waste, ${area.county.toLowerCase()} garden clearance, soil removal ${area.name.toLowerCase()}, garden skip alternative ${area.name.toLowerCase()}`
    })
  },

  "commercial-waste-removal": {
    name: "Commercial Waste Removal",
    servicePageSlug: "/services/commercial-ripouts",
    icon: "Briefcase",
    price: "From £300",
    badges: ["Out-of-Hours Available", "Full Compliance", "WEEE Disposal"],
    whatWeRemove: [
      { icon: "Briefcase", label: "Office Furniture" },
      { icon: "Package", label: "IT Equipment" },
      { icon: "ShoppingCart", label: "Retail Fixtures" },
      { icon: "Hammer", label: "Shop Fittings" },
      { icon: "Trash2", label: "Commercial Waste" },
      { icon: "HardHat", label: "Industrial Waste" }
    ],
    commonItems: [
      "Office desks, chairs, and furniture",
      "IT equipment, servers, and computers",
      "Retail shelving, counters, and displays",
      "Restaurant kitchen equipment",
      "Commercial flooring and partitions",
      "Warehouse racking and pallets",
      "Electrical equipment and cabling",
      "Filing cabinets and storage units",
      "Reception furniture and fittings",
      "Commercial signage and fixtures"
    ],
    benefits: [
      { title: "Out-of-Hours Service", desc: "Evening and weekend clearances available to minimise disruption to your business operations" },
      { title: "Full Compliance", desc: "Complete waste documentation including duty of care notes and WEEE compliance for IT equipment" },
      { title: "Any Scale", desc: "From single office clearances to full commercial strip-outs — we handle projects of every size" },
      { title: "Rapid Turnaround", desc: "Same-day and next-day service available for urgent commercial clearances" },
      { title: "Data Destruction", desc: "Secure disposal of IT equipment with certified data destruction available on request" },
      { title: "Licensed & Insured", desc: "£5M public liability, Environment Agency registered. Full audit trail provided" }
    ],
    pricing: [
      { price: "£300+", tier: "Small Office", desc: "Single office or small commercial unit clearance" },
      { price: "£800+", tier: "Full Office", desc: "Complete office suite or medium commercial premises" },
      { price: "£1,500+", tier: "Large Commercial", desc: "Full commercial strip-out, warehouse, or multi-unit clearance" }
    ],
    getIntro: (area) =>
      `Need commercial waste removed in ${area.name}? Total Waste Clearout provides professional commercial waste removal and office clearance services across ${area.name} and all ${area.postcodes[0]} postcodes. From small office clear-outs to full commercial strip-outs, we deliver fast, compliant waste removal with out-of-hours service available to minimise business disruption.`,
    getDescription: (area) =>
      `Our ${area.name} commercial waste removal service covers the full range of business clearance needs — office furniture removal, IT equipment disposal with WEEE compliance, retail fixture strip-outs, restaurant kitchen clearances, warehouse clear-outs, and industrial waste removal. We understand that business premises in ${area.name} often need clearances completed outside normal hours, which is why we offer evening and weekend services. Every commercial clearance comes with full waste documentation including duty of care notes, essential for business compliance across ${area.county}.`,
    getLocalContext: (area) =>
      `${area.name}'s commercial sector generates consistent demand for professional waste removal. ${area.localContext} Whether it's an office clearance in the town centre, a retail unit strip-out, or a warehouse clear-out in surrounding areas like ${area.nearbyAreas.slice(0, 3).join(", ")}, we provide the rapid, compliant commercial waste removal that ${area.name} businesses require.`,
    getFaqs: (area) => [
      { q: `Do you offer out-of-hours commercial clearance in ${area.name}?`, a: `Yes — we offer evening and weekend commercial waste removal across ${area.name} to minimise disruption to your business. We can work outside your operating hours across all ${area.postcodes.join(", ")} postcodes.` },
      { q: `How much does commercial waste removal cost in ${area.name}?`, a: `Small office clearances in ${area.name} start from £300, full office suites from £800, and large commercial strip-outs from £1,500. We provide detailed fixed-price quotes after assessing the job.` },
      { q: `Can you handle IT equipment disposal in ${area.name}?`, a: `Yes — we provide WEEE-compliant IT equipment disposal across ${area.name}. Computers, servers, monitors, and electronics are all handled properly. Certified data destruction is available on request.` },
      { q: `Do you provide waste documentation for businesses in ${area.name}?`, a: `Absolutely. Every commercial clearance in ${area.name} comes with full duty of care waste documentation, waste transfer notes, and compliance records for your business audit trail.` },
      { q: `Can you strip out a shop or restaurant in ${area.name}?`, a: `Yes — we handle complete commercial strip-outs including retail fixtures, restaurant kitchens, salon equipment, and all commercial fittings across ${area.name} and ${area.county}.` },
      { q: `How fast can you clear a commercial premises in ${area.name}?`, a: `We offer same-day and next-day commercial clearances across ${area.name}. For large projects, we can deploy multiple crews to complete the job efficiently. Call 07769 844298 for a rapid quote.` }
    ],
    getMeta: (area) => ({
      title: `Commercial Waste Removal ${area.name} | Office Clearance ${area.postcode} | Same-Day`,
      description: `Professional commercial waste removal in ${area.name}, ${area.county}. Office clearance, retail strip-outs, WEEE disposal. Out-of-hours service, fully licensed. From £300. Call 07769 844298.`,
      keywords: `commercial waste removal ${area.name.toLowerCase()}, office clearance ${area.name.toLowerCase()}, commercial clearance ${area.name.toLowerCase()}, office furniture removal ${area.name.toLowerCase()}, shop strip out ${area.name.toLowerCase()}, business waste ${area.name.toLowerCase()}, ${area.postcode} commercial waste, ${area.county.toLowerCase()} office clearance, IT disposal ${area.name.toLowerCase()}, trade waste ${area.name.toLowerCase()}`
    })
  },

  "construction-waste-removal": {
    name: "Construction Waste Removal",
    servicePageSlug: "/services/construction-waste",
    icon: "HardHat",
    price: "From £180",
    badges: ["Skip Alternative", "No Permits Needed", "Same-Day Service"],
    whatWeRemove: [
      { icon: "HardHat", label: "Rubble & Concrete" },
      { icon: "Hammer", label: "Timber & Wood" },
      { icon: "Package", label: "Plasterboard" },
      { icon: "Trash2", label: "Mixed Building Waste" },
      { icon: "Briefcase", label: "Metal & Piping" },
      { icon: "Package", label: "Tiles & Ceramics" }
    ],
    commonItems: [
      "Rubble, bricks, and concrete",
      "Timber, wood, and MDF",
      "Plasterboard and plaster",
      "Metal piping and steelwork",
      "Tiles, ceramics, and porcelain",
      "Electrical fittings and cables",
      "Old kitchens and bathrooms",
      "Windows, doors, and frames",
      "Insulation materials",
      "Mixed construction waste"
    ],
    benefits: [
      { title: "No Permits Needed", desc: "Unlike skip hire, our service requires no council permits — we arrive, load, and leave" },
      { title: "Same-Day Collection", desc: "Same-day construction waste collection keeps your building site clear and productive" },
      { title: "We Load Everything", desc: "Our crews load all rubble, timber, and waste — you don't need to fill a skip yourself" },
      { title: "Builder-Friendly", desc: "We work around your project schedule with flexible timing that suits tradespeople" },
      { title: "Multiple Loads", desc: "Need waste collected throughout a project? We offer repeat collections at discounted rates" },
      { title: "Licensed Disposal", desc: "Full compliance with waste regulations. Waste transfer notes for every collection" }
    ],
    pricing: [
      { price: "£180+", tier: "Small Load", desc: "A few bags of rubble or timber. Quick collection from site" },
      { price: "£350+", tier: "Medium Load", desc: "Kitchen/bathroom refit waste, moderate renovation debris" },
      { price: "£600+", tier: "Full Build", desc: "Large renovation or construction project waste removal" }
    ],
    getIntro: (area) =>
      `Need construction waste removed in ${area.name}? Total Waste Clearout is the smart skip alternative for builders and homeowners across ${area.name} and all ${area.postcodes[0]} postcodes. No council permits, no waiting days for delivery, no loading it yourself — we arrive same-day, load all your rubble, timber, and building waste, and take it away immediately.`,
    getDescription: (area) =>
      `Our ${area.name} construction waste removal service is designed for builders, tradespeople, and homeowners carrying out renovation projects. We collect rubble, concrete, bricks, timber, plasterboard, metal, tiles, old kitchens, bathrooms, and all mixed building waste. Unlike skip hire in ${area.name} — which requires ${area.name.includes("London") ? "expensive" : "council"} permits, takes days to arrive, has weight restrictions, and needs you to load it — we provide same-day collection with our crews doing all the heavy lifting. We're the preferred skip alternative for builders across ${area.county}.`,
    getLocalContext: (area) =>
      `${area.name}'s active construction and renovation sector creates constant demand for efficient waste removal. ${area.localContext} From kitchen and bathroom refits in residential properties to larger renovation projects across ${area.postcodes.join(", ")} postcodes, our construction waste service keeps ${area.name} building sites clear without the hassle and expense of traditional skip hire.`,
    getFaqs: (area) => [
      { q: `Are you cheaper than a skip in ${area.name}?`, a: `In most cases, yes. Skip hire in ${area.name} requires a council permit (£25+), takes days to arrange, has weight limits, and you load it yourself. We arrive same-day, load everything for you, and take it away immediately — often at a lower total cost.` },
      { q: `How fast can you collect construction waste in ${area.name}?`, a: `Same-day construction waste collection is available across all ${area.name} postcodes (${area.postcodes.join(", ")}). We can typically be on your building site within 2 hours of your call.` },
      { q: `Do you collect rubble and heavy waste in ${area.name}?`, a: `Yes — we collect all construction waste including rubble, concrete, bricks, soil, tiles, and heavy materials across ${area.name}. Our crews are equipped for heavy lifting so you don't need to.` },
      { q: `Can I book regular collections during a project in ${area.name}?`, a: `Absolutely. Many builders across ${area.name} book us for weekly or bi-weekly collections throughout their projects. We offer discounted rates for regular construction waste removal.` },
      { q: `Do I need a permit for your service in ${area.name}?`, a: `No — unlike skip hire, our construction waste removal service in ${area.name} requires no council permits whatsoever. We park on your property, load the waste, and leave. No road permits, no restrictions.` },
      { q: `What construction waste do you accept in ${area.name}?`, a: `We accept all standard construction waste in ${area.name}: rubble, bricks, concrete, timber, plasterboard, tiles, metal, piping, old kitchens, bathrooms, flooring — everything except hazardous materials like asbestos.` }
    ],
    getMeta: (area) => ({
      title: `Construction Waste Removal ${area.name} | Skip Alternative ${area.postcode} | Same-Day`,
      description: `Construction waste removal in ${area.name}, ${area.county}. Skip alternative — no permits, same-day collection, we load for you. Rubble, timber, building waste. From £180. Call 07769 844298.`,
      keywords: `construction waste removal ${area.name.toLowerCase()}, skip alternative ${area.name.toLowerCase()}, building waste ${area.name.toLowerCase()}, rubble removal ${area.name.toLowerCase()}, builder waste ${area.name.toLowerCase()}, trade waste collection ${area.name.toLowerCase()}, ${area.postcode} construction waste, ${area.county.toLowerCase()} building waste, renovation waste ${area.name.toLowerCase()}, skip hire alternative ${area.name.toLowerCase()}`
    })
  },

  "garage-shed-clearance": {
    name: "Garage & Shed Clearance",
    servicePageSlug: "/services/garage-shed",
    icon: "Hammer",
    price: "From £100",
    badges: ["Complete Service", "Demolition Included", "Site Left Clean"],
    whatWeRemove: [
      { icon: "Hammer", label: "Shed Demolition" },
      { icon: "Hammer", label: "Garage Dismantling" },
      { icon: "Package", label: "Contents Clearance" },
      { icon: "Trash2", label: "Waste Removal" },
      { icon: "HardHat", label: "Foundation Clearance" },
      { icon: "Package", label: "Site Cleanup" }
    ],
    commonItems: [
      "Garden sheds (timber, metal, plastic)",
      "Concrete garages and prefab garages",
      "Garage contents and clutter",
      "Garden tools and equipment",
      "Old paint, chemicals, and DIY supplies",
      "Bikes, toys, and outdoor equipment",
      "Timber workshops and summerhouses",
      "Metal storage units",
      "Old garden machinery and mowers",
      "Any outbuilding contents"
    ],
    benefits: [
      { title: "Complete Service", desc: "Contents clearance, demolition, waste removal, and site cleanup — everything in one job" },
      { title: "No Manual Work", desc: "We do all the heavy lifting, dismantling, and loading — you don't need to help or prepare" },
      { title: "Same-Day Available", desc: "Fast service for urgent projects — often complete clearance and demolition in a single day" },
      { title: "Safe Demolition", desc: "Careful dismantling with consideration for neighbouring properties and gardens" },
      { title: "Reclaim Your Space", desc: "Perfect for garden renovations, property development, or simply creating more outdoor space" },
      { title: "Licensed Disposal", desc: "All materials properly sorted, recycled, and disposed of with full waste carrier documentation" }
    ],
    pricing: [
      { price: "£100+", tier: "Contents Only", desc: "Clear out garage or shed contents without demolition" },
      { price: "£250+", tier: "Small Shed", desc: "Garden shed up to 8x6ft including contents, demolition, and removal" },
      { price: "£500+", tier: "Garage/Large Shed", desc: "Large shed, workshop, or single garage — complete service" }
    ],
    getIntro: (area) =>
      `Need a garage or shed cleared or demolished in ${area.name}? Total Waste Clearout provides complete garage and shed clearance services across ${area.name} and all ${area.postcodes[0]} postcodes. From clearing out contents to full demolition and removal, we handle everything — leaving your outdoor space clean and ready for whatever comes next.`,
    getDescription: (area) =>
      `Our ${area.name} garage and shed clearance service covers the full range — from simply clearing out years of accumulated clutter to complete structural demolition and waste removal. We empty the contents, carefully dismantle the structure if required, load everything onto our vehicles, and leave the site clean and level. Whether it's a wooden garden shed in ${area.nearbyAreas[0] || area.name}, a concrete garage, a timber workshop, or multiple outbuildings, our experienced crews handle projects of any size across all ${area.postcodes.join(", ")} postcodes.`,
    getLocalContext: (area) =>
      `${area.name}'s residential properties often feature garages and sheds that have become storage dumping grounds over the years. ${area.localContext} Whether you're renovating, preparing a property for sale, or simply reclaiming garden space in ${area.name}, our complete clearance and demolition service handles everything so you don't have to.`,
    getFaqs: (area) => [
      { q: `How much does garage clearance cost in ${area.name}?`, a: `Contents-only clearance in ${area.name} starts from £100. Small shed demolition and removal from £250, and full garage clearance with demolition from £500. We provide fixed-price quotes after assessing the job.` },
      { q: `Do you demolish garages and sheds in ${area.name}?`, a: `Yes — we offer complete demolition services for garages, sheds, workshops, and outbuildings across ${area.name}. This includes contents clearance, careful dismantling, waste removal, and site cleanup.` },
      { q: `Can you just clear the contents without demolishing in ${area.name}?`, a: `Absolutely. Many customers in ${area.name} just need years of accumulated clutter cleared from their garage or shed. We'll empty everything out and take it all away.` },
      { q: `How long does garage clearance take in ${area.name}?`, a: `Most garage and shed clearances in ${area.name} are completed in a single day. Contents-only clearances typically take 1-3 hours, while full demolitions are usually finished within 4-6 hours.` },
      { q: `Do you handle asbestos garages in ${area.name}?`, a: `If your garage or shed in ${area.name} contains asbestos (common in pre-2000 buildings), we can arrange specialist asbestos removal before demolition. Please inform us when booking so we can plan accordingly.` },
      { q: `Will you leave the site clean after demolition in ${area.name}?`, a: `Yes — we leave the site completely clear, clean, and level after every demolition in ${area.name}. All materials, rubble, and debris are removed. The area is ready for your next project.` }
    ],
    getMeta: (area) => ({
      title: `Garage & Shed Clearance ${area.name} | Demolition & Removal ${area.postcode} | Same-Day`,
      description: `Garage & shed clearance in ${area.name}, ${area.county}. Contents clearance, demolition, full removal. Same-day service, site left clean, licensed. From £100. Call 07769 844298.`,
      keywords: `garage clearance ${area.name.toLowerCase()}, shed clearance ${area.name.toLowerCase()}, garage demolition ${area.name.toLowerCase()}, shed removal ${area.name.toLowerCase()}, outbuilding clearance ${area.name.toLowerCase()}, garage clearout ${area.name.toLowerCase()}, ${area.postcode} garage clearance, ${area.county.toLowerCase()} shed demolition, shed demolition ${area.name.toLowerCase()}, garden building removal ${area.name.toLowerCase()}`
    })
  }
};

// ── SERVICE KEYS & AREA KEYS ─────────────────────────────────────────

const SERVICE_KEYS = Object.keys(SERVICE_AREA_DATA);

const AREA_KEYS = Object.keys(AREA_DATA);

// ── GENERATE ALL SERVICE-AREA COMBINATIONS ──────────────────────────

/**
 * Generates the full slug for a service+area combination.
 * e.g. "house-clearance" + "waste-removal-reading" → "house-clearance-reading"
 */
function getServiceAreaSlug(serviceKey, areaKey) {
  const areaName = AREA_DATA[areaKey].name.toLowerCase().replace(/\s+/g, '-');
  return `${serviceKey}-${areaName}`;
}

/**
 * Returns all 60 service-area combination slugs for routing.
 */
function getAllServiceAreaSlugs() {
  const slugs = [];
  for (const serviceKey of SERVICE_KEYS) {
    for (const areaKey of AREA_KEYS) {
      slugs.push({
        slug: getServiceAreaSlug(serviceKey, areaKey),
        serviceKey,
        areaKey
      });
    }
  }
  return slugs;
}

/**
 * Looks up the service+area data from a URL slug.
 * Returns { service, area, serviceKey, areaKey } or null.
 */
function getServiceAreaFromSlug(slug) {
  for (const serviceKey of SERVICE_KEYS) {
    for (const areaKey of AREA_KEYS) {
      if (getServiceAreaSlug(serviceKey, areaKey) === slug) {
        return {
          service: SERVICE_AREA_DATA[serviceKey],
          area: AREA_DATA[areaKey],
          serviceKey,
          areaKey
        };
      }
    }
  }
  return null;
}

export {
  SERVICE_AREA_DATA,
  SERVICE_KEYS,
  AREA_KEYS,
  getServiceAreaSlug,
  getAllServiceAreaSlugs,
  getServiceAreaFromSlug
};

export default SERVICE_AREA_DATA;
