/**
 * Area SEO data for each service town.
 * Each entry contains unique, locally-relevant content to maximise
 * search engine visibility for "[service] + [location]" queries.
 */

const AREA_DATA = {
  reading: {
    name: "Reading",
    slug: "reading",
    county: "Berkshire",
    region: "GB-BRK",
    postcode: "RG1",
    postcodes: ["RG1", "RG2", "RG4", "RG5", "RG6", "RG7", "RG8", "RG10", "RG30", "RG31"],
    lat: "51.4543",
    lng: "-0.9781",
    population: "174,000",
    mapQuery: "Reading,Berkshire,UK",
    heroImage: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?auto=format&fit=crop&q=80&w=2000",
    nearbyAreas: ["Wokingham", "Caversham", "Tilehurst", "Woodley", "Earley", "Calcot", "Pangbourne", "Theale"],
    landmarks: ["Oracle Shopping Centre", "Reading Station", "Forbury Gardens", "Madejski Stadium", "University of Reading", "Reading Abbey Ruins"],
    meta: {
      title: "Waste Removal Reading | Rubbish Clearance RG1 | Same-Day Collection",
      description: "Professional waste removal in Reading, Berkshire. Same-day rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, 94% recycled. Call 07769 844298.",
      keywords: "waste removal reading, rubbish clearance reading, waste collection reading, house clearance reading, garden waste removal reading, skip hire alternative reading, commercial waste reading, junk removal reading, RG1 waste removal, RG2 rubbish clearance, same day waste collection reading, licensed waste carrier reading, berkshire waste removal"
    },
    intro: "Reading is the largest town in Berkshire and a major commercial hub in the Thames Valley. With thousands of residential properties, busy commercial districts around the Oracle Centre, and ongoing development projects, waste removal services are in constant demand. Total Waste Clearout provides fast, professional waste clearance across all Reading postcodes from RG1 through to RG31.",
    areaDescription: "As Reading's trusted waste removal partner, we serve every neighbourhood — from the busy town centre around Broad Street and Friar Street, to residential areas in Caversham, Tilehurst, Woodley, Earley, and Whitley. Whether you're a landlord clearing a rental property near the University of Reading campus, a business owner renovating office space in Green Park, or a homeowner decluttering in Calcot, our uniformed crews arrive promptly with the right equipment to handle any job.",
    localContext: "Reading's thriving property market means end-of-tenancy clearances are one of our most requested services. With major employers like Microsoft, Cisco, and Huawei headquartered here, we also handle commercial office clearances and IT equipment disposal with full WEEE compliance. The town's ongoing regeneration — including developments around Reading Station and the IDR — generates significant construction waste that we clear efficiently as a cost-effective skip alternative.",
    faqs: [
      { q: "How quickly can you collect waste in Reading?", a: "We offer same-day waste collection across all Reading postcodes. For most RG1-RG31 addresses, we can be with you within 2 hours of your call." },
      { q: "Do you cover all Reading postcodes?", a: "Yes — we cover every Reading postcode including RG1, RG2, RG4, RG5, RG6, RG7, RG8, RG10, RG30 and RG31. We also serve surrounding areas like Caversham, Tilehurst, Woodley and Earley." },
      { q: "Are you cheaper than hiring a skip in Reading?", a: "In most cases, yes. Skip hire in Reading requires a council permit (£25+), you have to load it yourself, and there are weight restrictions. We load for you, take everything away immediately, and our pricing is transparent with no hidden charges." },
      { q: "Can you clear a house in Reading for probate?", a: "Absolutely. We specialise in sensitive house clearances for probate and estate purposes. We work respectfully and can provide full inventory documentation for solicitors." },
      { q: "Do you remove garden waste in Reading?", a: "Yes — garden waste removal is one of our core services in Reading. We clear trees, branches, hedges, grass, soil and garden furniture. All green waste is composted at licensed facilities." },
      { q: "What happens to waste you collect in Reading?", a: "94% of waste we collect is recycled or repurposed. We use licensed recycling facilities in the Berkshire area and provide waste transfer notes for every collection." }
    ]
  },

  slough: {
    name: "Slough",
    slug: "slough",
    county: "Berkshire",
    region: "GB-BRK",
    postcode: "SL1",
    postcodes: ["SL1", "SL2", "SL3"],
    lat: "51.5105",
    lng: "-0.5950",
    population: "164,000",
    mapQuery: "Slough,Berkshire,UK",
    heroImage: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?auto=format&fit=crop&q=80&w=2000",
    nearbyAreas: ["Langley", "Cippenham", "Colnbrook", "Burnham", "Farnham Royal", "Iver", "Datchet"],
    landmarks: ["Slough Trading Estate", "The Curve", "Slough High Street", "Salt Hill Park", "Herschel Park"],
    meta: {
      title: "Waste Removal Slough | Rubbish Clearance SL1 | Same-Day Service",
      description: "Fast waste removal in Slough, Berkshire. Rubbish clearance, commercial waste, house clearance & garden waste. Licensed, £5M insured. 94% recycled. Call 07769 844298.",
      keywords: "waste removal slough, rubbish clearance slough, waste collection slough, house clearance slough, commercial waste slough, skip hire alternative slough, junk removal slough, SL1 waste removal, SL2 rubbish clearance, SL3 waste collection, same day waste removal slough, licensed waste carrier slough"
    },
    intro: "Slough is one of the most economically productive towns outside London, home to Europe's largest trading estate and a rapidly growing residential sector. With major regeneration transforming the town centre and constant commercial activity on the Trading Estate, professional waste removal in Slough is essential. Total Waste Clearout delivers fast, compliant waste clearance across all SL postcodes.",
    areaDescription: "We cover every part of Slough — from the bustling Trading Estate where we handle commercial and industrial waste, to residential neighbourhoods in Langley, Cippenham, Colnbrook, and Burnham. Whether you need a full office clearance in a Trading Estate unit, an end-of-tenancy clean-out near Slough High Street, or construction waste removed from a building site, our professional crews handle it all.",
    localContext: "Slough's position as a major business hub means commercial waste clearance is a significant part of our work here. The Trading Estate alone houses over 500 businesses generating regular waste needs. With Slough's ambitious regeneration programme reshaping the town centre, construction waste removal is increasingly in demand. For residential customers, the town's large rental market keeps our end-of-tenancy clearance teams busy year-round.",
    faqs: [
      { q: "Do you collect commercial waste from Slough Trading Estate?", a: "Yes — we regularly clear commercial and industrial waste from units across Slough Trading Estate. We handle office clearances, warehouse clean-outs, and construction waste with full compliance documentation." },
      { q: "How fast can you get to Slough?", a: "We offer same-day service across Slough. For SL1, SL2 and SL3 postcodes, we can typically arrive within 2 hours." },
      { q: "Do you cover Langley and Cippenham?", a: "Yes — we serve all Slough areas including Langley, Cippenham, Colnbrook, Burnham, Farnham Royal, and surrounding villages." },
      { q: "Can you handle large commercial clearances in Slough?", a: "Absolutely. We have experience with large-scale commercial clearances including full office rip-outs, warehouse clearances, and industrial site clean-ups across Slough." },
      { q: "What does waste removal in Slough cost?", a: "Pricing depends on volume and waste type. Small loads start from £80, with full house clearances from £300. We provide fixed quotes with no hidden fees — what we quote is what you pay." },
      { q: "Are you licensed for waste removal in Slough?", a: "Yes — we're a fully registered waste carrier with the Environment Agency, carrying £5M public liability insurance. We provide waste transfer notes for every collection in Slough." }
    ]
  },

  guildford: {
    name: "Guildford",
    slug: "guildford",
    county: "Surrey",
    region: "GB-SRY",
    postcode: "GU1",
    postcodes: ["GU1", "GU2", "GU3", "GU4", "GU5"],
    lat: "51.2362",
    lng: "-0.5704",
    population: "137,000",
    mapQuery: "Guildford,Surrey,UK",
    heroImage: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?auto=format&fit=crop&q=80&w=2000",
    nearbyAreas: ["Godalming", "Shalford", "Merrow", "Burpham", "Stoughton", "Park Barn", "Onslow Village", "Compton"],
    landmarks: ["Guildford Castle", "Guildford Cathedral", "University of Surrey", "The Friary Centre", "Guildford High Street", "Stoke Park"],
    meta: {
      title: "Waste Removal Guildford | Rubbish Clearance GU1 | Same-Day Service",
      description: "Professional waste removal in Guildford, Surrey. House clearance, garden waste, commercial waste & rubbish clearance. Licensed carrier, 94% recycled. Call 07769 844298.",
      keywords: "waste removal guildford, rubbish clearance guildford, waste collection guildford, house clearance guildford, garden waste removal guildford, skip hire alternative guildford, commercial waste guildford, junk removal guildford, GU1 waste removal, GU2 rubbish clearance, surrey waste removal, same day collection guildford"
    },
    intro: "Guildford is Surrey's county town and one of the most affluent areas in southern England. With a mix of period properties, modern developments, and significant commercial activity around the university and town centre, waste removal needs in Guildford are diverse. Total Waste Clearout provides premium waste clearance services across all GU postcodes with same-day availability.",
    areaDescription: "Our Guildford coverage extends from the historic town centre around the cobbled High Street and Castle, through residential areas in Merrow, Burpham, Stoughton, Park Barn, and Onslow Village, to surrounding villages like Compton, Shalford, and Godalming. We handle everything from delicate probate clearances in period properties to heavy construction waste from renovation projects.",
    localContext: "Guildford's property market features many large, established homes that generate significant clearance needs — whether for downsizing, probate, or renovation. The University of Surrey campus creates seasonal demand for student accommodation clearances. The town's thriving commercial sector around the Friary Centre and business parks requires reliable commercial waste removal. Our garden waste service is particularly popular in Guildford's leafy residential areas where mature gardens produce substantial green waste.",
    faqs: [
      { q: "How quickly can you collect waste in Guildford?", a: "We offer same-day collection across Guildford and surrounding Surrey areas. Most GU1-GU5 postcodes can be reached within 2 hours." },
      { q: "Do you handle probate clearances in Guildford?", a: "Yes — probate and estate clearances are one of our specialities. We work sensitively with families and solicitors, providing full inventory documentation when required." },
      { q: "Can you remove garden waste in Guildford?", a: "Absolutely. Garden waste removal is hugely popular in Guildford's leafy suburbs. We clear trees, hedges, soil, turf and all green waste — everything is composted responsibly." },
      { q: "Do you serve the University of Surrey area?", a: "Yes — we cover the entire university area including Stag Hill and Manor Park campuses, plus surrounding student accommodation in GU2." },
      { q: "What areas around Guildford do you cover?", a: "We serve all of Guildford plus Godalming, Shalford, Merrow, Burpham, Stoughton, Park Barn, Onslow Village, Compton and wider Surrey." },
      { q: "Is your waste removal service in Guildford eco-friendly?", a: "Very much so. 94% of waste we collect is recycled or repurposed. All waste is processed at licensed Surrey facilities and we provide full documentation." }
    ]
  },

  woking: {
    name: "Woking",
    slug: "woking",
    county: "Surrey",
    region: "GB-SRY",
    postcode: "GU21",
    postcodes: ["GU21", "GU22", "GU24"],
    lat: "51.3162",
    lng: "-0.5600",
    population: "105,000",
    mapQuery: "Woking,Surrey,UK",
    heroImage: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?auto=format&fit=crop&q=80&w=2000",
    nearbyAreas: ["Byfleet", "West Byfleet", "Sheerwater", "Horsell", "Knaphill", "St Johns", "Pyrford", "Ripley"],
    landmarks: ["Victoria Square", "Peacocks Centre", "Shah Jahan Mosque", "Woking Park", "Basingstoke Canal", "HG Wells Statue"],
    meta: {
      title: "Waste Removal Woking | Rubbish Clearance GU21 | Same-Day Service",
      description: "Fast waste removal in Woking, Surrey. Rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier, £5M insured. Call 07769 844298.",
      keywords: "waste removal woking, rubbish clearance woking, waste collection woking, house clearance woking, garden waste removal woking, skip hire alternative woking, commercial waste woking, junk removal woking, GU21 waste removal, GU22 rubbish clearance, surrey waste removal woking"
    },
    intro: "Woking has undergone dramatic transformation with Victoria Square and extensive residential development making it one of Surrey's fastest-growing towns. This rapid growth brings constant demand for waste removal — from construction debris on development sites to household clearances in established residential areas. Total Waste Clearout serves all Woking postcodes with same-day professional waste clearance.",
    areaDescription: "We cover every part of Woking — from the regenerated town centre around Victoria Square and the Peacocks Centre, to residential neighbourhoods in Horsell, Knaphill, St Johns, Pyrford, and Sheerwater. Our teams regularly work in Byfleet, West Byfleet, and surrounding villages. Whether it's a flat clearance in a new-build development or a garden overhaul in Horsell's leafy streets, we handle it professionally.",
    localContext: "Woking's ongoing regeneration has created significant demand for construction waste removal as older buildings make way for modern developments. The town's growing population means more household waste, more end-of-tenancy clearances, and more garden maintenance generating green waste. For businesses along Victoria Way and the town centre, we offer rapid commercial waste clearance that avoids the disruption of skips on busy streets.",
    faqs: [
      { q: "How fast can you collect waste in Woking?", a: "Same-day collection is available across Woking. We can typically reach GU21, GU22 and GU24 postcodes within 2 hours of your call." },
      { q: "Do you handle construction waste from Woking building sites?", a: "Yes — we're a popular skip alternative for builders in Woking. We clear rubble, timber, metal and mixed construction waste without the need for council permits." },
      { q: "What areas around Woking do you serve?", a: "We cover all of Woking plus Horsell, Knaphill, St Johns, Pyrford, Byfleet, West Byfleet, Sheerwater, Ripley and surrounding Surrey villages." },
      { q: "Can you clear a house in Woking?", a: "Absolutely. We offer full house clearances in Woking for moving, downsizing, probate or landlord purposes. Same-day service often available." },
      { q: "Do you remove garden waste in Woking?", a: "Yes — garden waste removal across Woking is one of our busiest services. We clear everything from grass cuttings to full tree removal. All green waste composted." },
      { q: "What's the cost of waste removal in Woking?", a: "Small loads start from £80, with full house clearances from £300. We give fixed, transparent quotes — no hidden fees or surprise charges." }
    ]
  },

  bracknell: {
    name: "Bracknell",
    slug: "bracknell",
    county: "Berkshire",
    region: "GB-BRK",
    postcode: "RG12",
    postcodes: ["RG12", "RG42"],
    lat: "51.4136",
    lng: "-0.7519",
    population: "84,000",
    mapQuery: "Bracknell,Berkshire,UK",
    heroImage: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?auto=format&fit=crop&q=80&w=2000",
    nearbyAreas: ["Crowthorne", "Sandhurst", "Binfield", "Warfield", "Winkfield", "Martins Heron", "Harmans Water"],
    landmarks: ["The Lexicon", "Bracknell Town Centre", "South Hill Park", "Coral Reef Waterworld", "Bracknell Forest", "Swinley Forest"],
    meta: {
      title: "Waste Removal Bracknell | Rubbish Clearance RG12 | Same-Day Service",
      description: "Professional waste removal in Bracknell, Berkshire. House clearance, garden waste, commercial waste & rubbish clearance. Licensed, 94% recycled. Call 07769 844298.",
      keywords: "waste removal bracknell, rubbish clearance bracknell, waste collection bracknell, house clearance bracknell, garden waste removal bracknell, skip hire alternative bracknell, commercial waste bracknell, junk removal bracknell, RG12 waste removal, RG42 rubbish clearance, berkshire waste removal bracknell"
    },
    intro: "Bracknell is a thriving new town in Berkshire with a regenerated town centre anchored by The Lexicon and a strong technology sector. The mix of modern housing estates, established residential areas, and busy commercial parks creates consistent demand for professional waste removal. Total Waste Clearout provides reliable, same-day waste clearance across all Bracknell postcodes.",
    areaDescription: "Our service covers all of Bracknell — from the regenerated town centre around The Lexicon, to residential estates in Martins Heron, Harmans Water, Wildridings, Birch Hill, and Great Hollands. We also serve Crowthorne, Sandhurst, Binfield, Warfield, and Winkfield. Whether you're clearing a garage in Easthampstead or removing commercial waste from an office on the Western Industrial Area, we're your local waste removal experts.",
    localContext: "Bracknell's large technology sector — including major employers like Dell, Hewlett-Packard, and Waitrose head office — generates consistent commercial waste clearance needs. The town's extensive housing estates built from the 1950s onwards often require clearances as properties change hands. Garden waste removal is popular across Bracknell's many green residential areas, and the proximity to Swinley Forest means tree and foliage clearance is frequently requested.",
    faqs: [
      { q: "How fast can you collect waste in Bracknell?", a: "Same-day collection across Bracknell. We typically reach RG12 and RG42 postcodes within 2 hours." },
      { q: "Do you clear commercial waste in Bracknell?", a: "Yes — we handle commercial waste clearance across Bracknell's business parks and industrial areas. Full compliance documentation provided." },
      { q: "What areas around Bracknell do you cover?", a: "We serve all of Bracknell plus Crowthorne, Sandhurst, Binfield, Warfield, Winkfield, Martins Heron and surrounding Berkshire villages." },
      { q: "Can you clear a full house in Bracknell?", a: "Absolutely. Full house clearances in Bracknell for any purpose — moving, probate, landlord clearances. Same-day service often available." },
      { q: "Do you offer a skip alternative in Bracknell?", a: "Yes — we're a faster, easier alternative to skip hire. No council permits needed, we do all the loading, and we take everything away immediately." },
      { q: "Is garden waste removal available in Bracknell?", a: "Yes — we remove all garden waste including trees, hedges, soil, turf and garden structures. Everything composted at licensed facilities." }
    ]
  },

  windsor: {
    name: "Windsor",
    slug: "windsor",
    county: "Berkshire",
    region: "GB-BRK",
    postcode: "SL4",
    postcodes: ["SL4"],
    lat: "51.4812",
    lng: "-0.6044",
    population: "32,000",
    mapQuery: "Windsor,Berkshire,UK",
    heroImage: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?auto=format&fit=crop&q=80&w=2000",
    nearbyAreas: ["Eton", "Clewer", "Dedworth", "Old Windsor", "Datchet", "Wraysbury", "Horton"],
    landmarks: ["Windsor Castle", "Windsor Great Park", "Eton College", "Windsor Royal Station", "The Long Walk", "Legoland"],
    meta: {
      title: "Waste Removal Windsor | Rubbish Clearance SL4 | Same-Day Service",
      description: "Professional waste removal in Windsor, Berkshire. House clearance, garden waste, commercial waste & rubbish clearance. Licensed carrier, 94% recycled. Call 07769 844298.",
      keywords: "waste removal windsor, rubbish clearance windsor, waste collection windsor, house clearance windsor, garden waste removal windsor, skip hire alternative windsor, commercial waste windsor, junk removal windsor, SL4 waste removal, berkshire waste removal windsor, end of tenancy clearance windsor"
    },
    intro: "Windsor is one of England's most prestigious towns, home to Windsor Castle and surrounded by Royal parkland. The town's mix of historic properties, luxury homes, and tourist-facing businesses creates unique waste removal requirements. Total Waste Clearout provides discreet, professional waste clearance services across Windsor and all SL4 postcodes.",
    areaDescription: "We serve the entire Windsor area — from the historic town centre near the Castle and Royal Station, through residential streets in Clewer, Dedworth, and Old Windsor, to neighbouring Eton, Datchet, and Wraysbury. Our crews understand the sensitivity required when working near listed buildings and in conservation areas, ensuring waste is removed efficiently without disruption.",
    localContext: "Windsor's heritage properties and conservation areas require careful waste management. Skip placement is often restricted near the Castle and town centre, making our load-and-go service the ideal alternative. The town's tourism and hospitality sector generates regular commercial waste needs, while the large period homes in areas like Clewer and Old Windsor frequently require clearances for renovation, probate, or downsizing. Windsor Great Park's proximity means garden and green waste removal is consistently popular.",
    faqs: [
      { q: "Can you remove waste near Windsor Castle and the town centre?", a: "Yes — our load-and-go service is perfect for Windsor's town centre where skip placement is often restricted. We arrive, load, and leave with minimal disruption." },
      { q: "How fast can you collect waste in Windsor?", a: "Same-day service across Windsor. We typically reach SL4 postcodes within 2 hours of your call." },
      { q: "Do you work in conservation areas in Windsor?", a: "Yes — our teams are experienced working in Windsor's conservation areas and near listed buildings. We work carefully and leave sites spotless." },
      { q: "What areas around Windsor do you serve?", a: "We cover all of Windsor plus Eton, Clewer, Dedworth, Old Windsor, Datchet, Wraysbury, and Horton." },
      { q: "Can you clear a large property in Windsor?", a: "Absolutely. We regularly clear large period properties in Windsor for probate, downsizing, or renovation. Multiple loads handled efficiently." },
      { q: "Do you remove garden waste in Windsor?", a: "Yes — garden waste removal is very popular in Windsor. We clear trees, hedges, soil and all green waste. Everything composted at licensed facilities." }
    ]
  },

  ascot: {
    name: "Ascot",
    slug: "ascot",
    county: "Berkshire",
    region: "GB-BRK",
    postcode: "SL5",
    postcodes: ["SL5"],
    lat: "51.4084",
    lng: "-0.6712",
    population: "18,000",
    mapQuery: "Ascot,Berkshire,UK",
    heroImage: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?auto=format&fit=crop&q=80&w=2000",
    nearbyAreas: ["Sunninghill", "Sunningdale", "North Ascot", "South Ascot", "Virginia Water", "Cheapside", "Winkfield Row"],
    landmarks: ["Ascot Racecourse", "Royal Ascot", "Ascot High Street", "Englemere Pond", "Swinley Forest"],
    meta: {
      title: "Waste Removal Ascot | Rubbish Clearance SL5 | Same-Day Service",
      description: "Premium waste removal in Ascot, Berkshire. House clearance, garden waste, commercial waste & rubbish clearance. Licensed carrier, £5M insured. Call 07769 844298.",
      keywords: "waste removal ascot, rubbish clearance ascot, waste collection ascot, house clearance ascot, garden waste removal ascot, skip hire alternative ascot, commercial waste ascot, junk removal ascot, SL5 waste removal, berkshire waste removal ascot, trade waste ascot"
    },
    intro: "Ascot is one of Berkshire's most exclusive areas, renowned for Royal Ascot and home to many of the county's finest properties. The large estates, extensive gardens, and high-specification homes in Ascot create demand for a premium-quality waste removal service. Total Waste Clearout delivers professional, discreet waste clearance across all SL5 postcodes.",
    areaDescription: "Our service covers the entire Ascot area — from the High Street and racecourse surroundings to residential areas in Sunninghill, Sunningdale, North Ascot, South Ascot, and Virginia Water. We regularly work on large estate properties, handling everything from whole-house clearances during renovations to ongoing garden waste management for properties with substantial grounds.",
    localContext: "Ascot's large properties and extensive grounds generate significant waste clearance needs. Many homes undergo regular renovation and refurbishment, creating construction waste that needs professional removal. The area's mature gardens — often spanning multiple acres — produce substantial green waste that requires regular clearance. For property managers and estate agents handling high-value rentals, our end-of-tenancy service ensures properties are returned to pristine condition.",
    faqs: [
      { q: "Do you handle large estate clearances in Ascot?", a: "Yes — we regularly clear large properties in the Ascot area. We can handle multi-room clearances across several days if needed, with crews scaled to match the job." },
      { q: "How fast can you collect waste in Ascot?", a: "Same-day service across Ascot. We typically reach SL5 postcodes within 2 hours." },
      { q: "Do you offer regular garden waste collection in Ascot?", a: "Yes — many Ascot clients use our regular garden waste collection service for their larger gardens. We can arrange weekly or monthly collections." },
      { q: "Can you work discreetly on Ascot properties?", a: "Absolutely. Our uniformed crews work professionally and discreetly, which is particularly valued by our Ascot clients." },
      { q: "What areas around Ascot do you cover?", a: "We serve all of Ascot plus Sunninghill, Sunningdale, North Ascot, South Ascot, Virginia Water, Cheapside and Winkfield Row." },
      { q: "Do you remove construction waste in Ascot?", a: "Yes — we handle all construction waste including rubble, timber, plasterboard and metal. Licensed carrier with full documentation provided." }
    ]
  },

  egham: {
    name: "Egham",
    slug: "egham",
    county: "Surrey",
    region: "GB-SRY",
    postcode: "TW20",
    postcodes: ["TW20"],
    lat: "51.4319",
    lng: "-0.5448",
    population: "37,000",
    mapQuery: "Egham,Surrey,UK",
    heroImage: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?auto=format&fit=crop&q=80&w=2000",
    nearbyAreas: ["Englefield Green", "Virginia Water", "Thorpe", "Staines", "Hythe", "Pooley Green"],
    landmarks: ["Royal Holloway University", "Runnymede", "The Magna Carta Memorial", "Savill Garden", "Air Forces Memorial"],
    meta: {
      title: "Waste Removal Egham | Rubbish Clearance TW20 | Same-Day Service",
      description: "Professional waste removal in Egham, Surrey. House clearance, garden waste, commercial waste & rubbish clearance. Licensed carrier, 94% recycled. Call 07769 844298.",
      keywords: "waste removal egham, rubbish clearance egham, waste collection egham, house clearance egham, garden waste removal egham, skip hire alternative egham, commercial waste egham, junk removal egham, TW20 waste removal, surrey waste removal egham"
    },
    intro: "Egham sits at the gateway between Berkshire and Surrey, with a vibrant community anchored by Royal Holloway University and the historic Runnymede meadows. The town's mix of student accommodation, family homes, and commercial properties creates consistent demand for waste removal services. Total Waste Clearout provides reliable, same-day waste clearance across all TW20 postcodes.",
    areaDescription: "We serve all of Egham — from the town centre and High Street area, through Englefield Green near the university, to residential areas in Virginia Water, Thorpe, and the Hythe. Our crews are familiar with the area's access requirements, including the narrower streets near the town centre and the larger properties around Englefield Green.",
    localContext: "Royal Holloway University creates seasonal peaks in waste removal demand, particularly during end-of-term and when student houses are cleared between tenancies. Egham's proximity to the M25 and Heathrow makes it a popular location for commercial properties, generating regular office and commercial waste clearance needs. The area's leafy residential character means garden waste removal is consistently requested, especially in the larger properties around Virginia Water and Englefield Green.",
    faqs: [
      { q: "How fast can you collect waste in Egham?", a: "Same-day collection across Egham and surrounding areas. We typically reach TW20 postcodes within 2 hours." },
      { q: "Do you handle student house clearances in Egham?", a: "Yes — we regularly clear student accommodation in Egham, particularly around Englefield Green and the Royal Holloway area." },
      { q: "What areas around Egham do you cover?", a: "We serve all of Egham plus Englefield Green, Virginia Water, Thorpe, Staines, Hythe and Pooley Green." },
      { q: "Can you clear commercial premises in Egham?", a: "Absolutely. We handle commercial clearances of all sizes in Egham — from small office clean-outs to full warehouse clearances." },
      { q: "Do you remove garden waste in Egham?", a: "Yes — garden waste removal across Egham is one of our core services. All green waste composted at licensed Surrey facilities." },
      { q: "Are you cheaper than a skip in Egham?", a: "In most cases, yes. No permit required, we load everything for you, and take it all away immediately. Fixed pricing with no hidden charges." }
    ]
  },

  maidenhead: {
    name: "Maidenhead",
    slug: "maidenhead",
    county: "Berkshire",
    region: "GB-BRK",
    postcode: "SL6",
    postcodes: ["SL6"],
    lat: "51.5217",
    lng: "-0.7177",
    population: "75,000",
    mapQuery: "Maidenhead,Berkshire,UK",
    heroImage: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?auto=format&fit=crop&q=80&w=2000",
    nearbyAreas: ["Cookham", "Marlow", "Taplow", "Bray", "Maidenhead Court", "Cox Green", "Furze Platt", "Pinkneys Green"],
    landmarks: ["Maidenhead Heritage Centre", "Boulters Lock", "Ray Mill Island", "Maidenhead Bridge", "Norden Farm Centre for the Arts"],
    meta: {
      title: "Waste Removal Maidenhead | Rubbish Clearance SL6 | Same-Day Service",
      description: "Professional waste removal in Maidenhead, Berkshire. House clearance, garden waste, commercial waste & rubbish clearance. Licensed, £5M insured. Call 07769 844298.",
      keywords: "waste removal maidenhead, rubbish clearance maidenhead, waste collection maidenhead, house clearance maidenhead, garden waste removal maidenhead, skip hire alternative maidenhead, commercial waste maidenhead, junk removal maidenhead, SL6 waste removal, berkshire waste removal maidenhead"
    },
    intro: "Maidenhead is a prosperous Thames-side town experiencing significant regeneration, particularly around the town centre and Crossrail corridor. With new residential developments, established family homes along the river, and a growing commercial sector, waste removal in Maidenhead is in strong demand. Total Waste Clearout delivers fast, professional waste clearance across all SL6 postcodes.",
    areaDescription: "Our Maidenhead coverage extends across the whole town — from the High Street and regenerated town centre, through riverside areas near Boulters Lock and Ray Mill Island, to residential neighbourhoods in Cox Green, Furze Platt, and Pinkneys Green. We also serve nearby Cookham, Taplow, Bray, and Marlow.",
    localContext: "Maidenhead's ongoing regeneration — boosted by the Elizabeth Line connection — has brought significant development activity and associated construction waste. The town's riverside properties often require careful clearance work for renovation and refurbishment. Cookham and Bray nearby are known for large properties with extensive grounds, generating regular garden waste removal needs. For landlords managing rental properties near the station, our end-of-tenancy clearance service is frequently used.",
    faqs: [
      { q: "How fast can you collect waste in Maidenhead?", a: "Same-day service across Maidenhead. We typically reach SL6 postcodes within 2 hours of your call." },
      { q: "Do you serve Cookham and Bray?", a: "Yes — we cover Cookham, Bray, Taplow, Marlow, Cox Green, Furze Platt, Pinkneys Green and all surrounding areas." },
      { q: "Can you handle riverside property clearances?", a: "Absolutely. We regularly work on Thames-side properties in Maidenhead. Our crews are experienced with access challenges and work carefully around waterside locations." },
      { q: "Do you remove construction waste in Maidenhead?", a: "Yes — we handle all construction waste as a skip alternative. Rubble, timber, plasterboard, metal — all cleared and disposed of compliantly." },
      { q: "What does waste removal in Maidenhead cost?", a: "Small loads from £80, full house clearances from £300. Fixed pricing with no hidden fees — we quote what you pay." },
      { q: "Do you offer garden waste collection in Maidenhead?", a: "Yes — garden waste removal is very popular in Maidenhead and surrounding villages. All green waste composted at licensed facilities." }
    ]
  },

  staines: {
    name: "Staines",
    slug: "staines",
    county: "Surrey",
    region: "GB-SRY",
    postcode: "TW18",
    postcodes: ["TW18", "TW19"],
    lat: "51.4343",
    lng: "-0.5088",
    population: "54,000",
    mapQuery: "Staines-upon-Thames,Surrey,UK",
    heroImage: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb6?auto=format&fit=crop&q=80&w=2000",
    nearbyAreas: ["Ashford", "Laleham", "Stanwell", "Shepperton", "Sunbury", "Feltham", "Bedfont"],
    landmarks: ["Two Rivers Shopping Centre", "Staines Bridge", "Lammas Recreation Ground", "Thorpe Park", "River Thames"],
    meta: {
      title: "Waste Removal Staines | Rubbish Clearance TW18 | Same-Day Service",
      description: "Fast waste removal in Staines-upon-Thames, Surrey. Rubbish clearance, house clearance, garden waste & commercial waste. Licensed carrier. Call 07769 844298.",
      keywords: "waste removal staines, rubbish clearance staines, waste collection staines, house clearance staines, garden waste removal staines, skip hire alternative staines, commercial waste staines, junk removal staines, TW18 waste removal, TW19 rubbish clearance, staines upon thames waste removal, surrey waste removal staines"
    },
    intro: "Staines-upon-Thames is a key commercial centre in north Surrey, strategically located near Heathrow Airport and the M25. The town's busy commercial district, diverse residential areas, and proximity to major transport links create strong demand for waste removal services. Total Waste Clearout provides fast, reliable waste clearance across all TW18 and TW19 postcodes.",
    areaDescription: "We cover all of Staines — from the town centre around Two Rivers and the High Street, to residential areas in Ashford, Laleham, Stanwell, and Shepperton. Our crews are well-versed in the area's mixed property types, from Victorian terraces to modern apartment complexes, and commercial units ranging from small offices to large industrial premises near the airport corridor.",
    localContext: "Staines' proximity to Heathrow Airport means a concentration of commercial and industrial properties generating regular waste clearance needs. The town's position on the M25 corridor makes it a hub for logistics and warehousing operations that periodically require large-scale clearances. Residential areas in Laleham, Ashford and Shepperton have a strong rental market driving demand for end-of-tenancy clearances. The River Thames frontage creates additional garden waste and property clearance requirements.",
    faqs: [
      { q: "How fast can you collect waste in Staines?", a: "Same-day service across Staines-upon-Thames. We typically reach TW18 and TW19 postcodes within 2 hours." },
      { q: "Do you handle commercial waste near Heathrow?", a: "Yes — we regularly clear commercial and industrial waste from premises in the Staines/Heathrow corridor. Full compliance documentation provided." },
      { q: "What areas around Staines do you cover?", a: "We serve all of Staines plus Ashford, Laleham, Stanwell, Shepperton, Sunbury, Feltham and Bedfont." },
      { q: "Can you clear a flat or house in Staines?", a: "Absolutely. Full house and flat clearances available same-day across Staines. Perfect for landlords, moving, or probate." },
      { q: "Are you a good skip alternative in Staines?", a: "Yes — skip permits can be difficult in busy Staines streets. We arrive, load everything, and leave. No permit needed, no waiting days for delivery and collection." },
      { q: "Do you offer garden waste removal in Staines?", a: "Yes — garden waste clearance across Staines and surrounding areas. All green waste composted responsibly at licensed facilities." }
    ]
  }
};

// Services offered in every area
const AREA_SERVICES = [
  {
    name: "House Clearance",
    slug: "/services/home-probate-clearance",
    icon: "Home",
    description: "Complete house clearance for moving, downsizing, probate or landlord purposes",
    price: "From £150"
  },
  {
    name: "End of Tenancy",
    slug: "/services/end-of-tenancy",
    icon: "Home",
    description: "Fast tenant changeover clearance with full property clean-out",
    price: "From £150"
  },
  {
    name: "Garden Waste",
    slug: "/services/garden-waste",
    icon: "TreePine",
    description: "Trees, hedges, grass, soil and garden structure removal",
    price: "From £80"
  },
  {
    name: "Commercial Waste",
    slug: "/services/commercial-ripouts",
    icon: "Briefcase",
    description: "Office clearance, shop fitting removal and commercial rip-outs",
    price: "From £300"
  },
  {
    name: "Construction Waste",
    slug: "/services/construction-waste",
    icon: "HardHat",
    description: "Skip alternative for rubble, timber, metal and building waste",
    price: "From £180"
  },
  {
    name: "Garage & Shed",
    slug: "/services/garage-shed",
    icon: "Hammer",
    description: "Garage clearance, shed demolition and outbuilding removal",
    price: "From £100"
  }
];

export { AREA_DATA, AREA_SERVICES };
export default AREA_DATA;
