import pseoHubs from '../data/pseo_hubs.json';

export interface SEOContent {
  narrative: string;
  infrastructure: string[];
  faqs: { q: string; a: string }[];
  nearbyHubs: { name: string; slug: string; county?: string }[];
}

// Build a Map once for O(1) hub lookups
const hubMap = new Map(pseoHubs.map(h => [h.slug, h]));
const hubsByCounty = new Map<string, typeof pseoHubs>();
for (const hub of pseoHubs) {
  const list = hubsByCounty.get(hub.county) || [];
  list.push(hub);
  hubsByCounty.set(hub.county, list);
}

const toTitleCase = (str: string) =>
  str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

// Known infrastructure data for key towns (enriched data contract)
const infraMap: Record<string, string[]> = {
  'ruiru': ['Thika Superhighway access', 'Eastern Bypass connectivity', 'Northlands City Project', 'Tatu City proximity', 'Kenyatta University campus', 'Ruiru Sports Club'],
  'kitengela': ['Nairobi-Namanga Highway', 'SGR Terminus at Syokimau', 'Kitengela Mall', 'EPZ Industrial Zone', 'Athi River proximity', 'KAG University'],
  'naivasha': ['Nairobi-Nakuru Highway', 'SGR Suswa Station', 'Inland Container Depot (ICD)', 'Lake Naivasha resorts', 'Flower farms employment', 'Hell\'s Gate National Park'],
  'thika': ['Thika Superhighway (8-lane)', 'Garissa Road', 'Thika Greens Golf Estate', 'Mount Kenya University', 'Blue Post Hotel landmark', 'Del Monte pineapple farms'],
  'athiriver': ['Mombasa Road corridor', 'SGR Syokimau Station', 'Crystal Rivers Mall', 'Daystar University', 'Mavoko sub-county HQ', 'Export Processing Zone'],
  'joska': ['Kangundo Road widening', 'Matungulu Sub-county HQ', 'Joska Market Centre', 'Joska Police Station', 'Kyeleni Dam water project', 'New tarmac feeder roads'],
  'juja': ['Thika Superhighway access', 'JKUAT main campus', 'Juja City Mall', 'Juja Farm Estate', 'Murang\'a Road junction', 'Kenyatta University proximity'],
  'syokimau': ['SGR Syokimau Terminus', 'Mombasa Road corridor', 'Gateway Mall', 'Katani Road link', 'JKIA proximity (15 min)', 'Mavoko Municipal Council'],
  'kamulu': ['Kangundo Road corridor', 'Joska-Kamulu tarmac', 'Kamulu Market Centre', 'Rural electrification project', 'Borehole water schemes', 'County government offices'],
  'malaa': ['Kangundo Road access', 'Malaa Shopping Centre', 'Ruai-Malaa water project', 'Eastern Bypass extension plans', 'Ruai sewage treatment proximity', 'New residential estates'],
  'kangundo-road': ['Kangundo Road Highway', 'Tala Town proximity', 'Machakos junction link', 'Rural electrification projects', 'Borehole water access', 'Matungulu ward offices'],
  'rongai': ['Magadi Road access', 'Rimpa-Rongai tarmac', 'Ongata Rongai town centre', 'Maasai Lodge proximity', 'Karen-Rongai link', 'Multiple shopping malls'],
  'ngong': ['Ngong Road (dualled)', 'Ngong Hills proximity', 'Ngong Town market', 'Kibiko area growth', 'Kajiado County HQ nearby', 'Ngong Racecourse area'],
  'limuru': ['Nairobi-Nakuru Highway', 'Limuru Town centre', 'Tigoni tea estates', 'Bata Shoe Company', 'St. Paul\'s University', 'Cool highland climate'],
  'kiambu': ['Kiambu Road (tarmac)', 'Kiambu Town centre', 'Kiambu County HQ', 'Banana Hill proximity', 'Karura Forest access', 'Four Points by Sheraton'],
  'machakos': ['Machakos-Athi River Road', 'Machakos People\'s Park', 'Machakos County HQ', 'Kenyatta Stadium', 'New Machakos CBD development', 'SGR extension plans'],
};

// County-level infrastructure context for fallback generation
const countyInfraContext: Record<string, { roads: string; anchor: string; economy: string }> = {
  'kiambu': { roads: 'Thika Superhighway and Northern Bypass', anchor: 'Nairobi Metropolitan proximity', economy: 'commercial and residential development' },
  'kajiado': { roads: 'Nairobi-Namanga Highway and Magadi Road', anchor: 'Nairobi southern corridor', economy: 'ranching transitioning to residential estates' },
  'machakos': { roads: 'Kangundo Road and Mombasa Road', anchor: 'Machakos New City development', economy: 'mixed residential and light industrial growth' },
  'nakuru': { roads: 'Nairobi-Nakuru Highway and Mai Mahiu Road', anchor: 'Nakuru City charter status', economy: 'agriculture, tourism, and residential expansion' },
  'murang\'a': { roads: 'Thika-Murang\'a Highway', anchor: 'Agricultural heartland of Central Kenya', economy: 'tea, coffee farming and emerging residential zones' },
  'mombasa': { roads: 'Mombasa-Nairobi Highway and Nyali Bridge', anchor: 'Kenya\'s coastal economic hub', economy: 'tourism, port logistics, and coastal real estate' },
  'kisumu': { roads: 'Kisumu-Nairobi Highway and Kisumu bypass', anchor: 'Lake Victoria economic zone', economy: 'fishing, trade, and lakeside residential growth' },
  'nyandarua': { roads: 'Naivasha-Nyahururu Road', anchor: 'Agricultural highlands', economy: 'dairy farming and emerging residential plots' },
  'nyeri': { roads: 'Nyeri-Nairobi Highway', anchor: 'Mount Kenya region gateway', economy: 'agriculture, tourism, and institutional development' },
  'uasin-gishu': { roads: 'Eldoret-Nairobi Highway', anchor: 'North Rift economic centre', economy: 'athletics, agriculture, and university town expansion' },
  'kilifi': { roads: 'Mombasa-Malindi Highway', anchor: 'Coastal tourism corridor', economy: 'tourism, cashew farming, and beach property development' },
  'laikipia': { roads: 'Nanyuki-Nairobi Highway', anchor: 'Nanyuki military and conservation hub', economy: 'ranching, conservation, and eco-tourism real estate' },
};

/**
 * Generate differentiated SEO content per town using available data.
 * Each town gets unique content based on its description, county context,
 * and infrastructure data — meeting the pSEO minimum uniqueness threshold.
 */
export const getSEOContent = (
  town: string,
  county: string,
  category: string,
  nearbyHubs?: { name: string; slug: string; county?: string }[]
): SEOContent => {
  const formattedTown = toTitleCase(town);
  const formattedCounty = toTitleCase(county);
  const formattedCat = toTitleCase(category);

  const hub = hubMap.get(town);
  const hubDescription = hub?.description || `Emerging investment area in ${formattedCounty} County.`;
  const countyContext = countyInfraContext[county.toLowerCase()];

  // --- Infrastructure: use enriched data or derive from county + hub context ---
  const localInfra = infraMap[town.toLowerCase()] || generateInfrastructure(formattedTown, formattedCounty, countyContext);

  // --- Narrative: unique per town using hub description + county context ---
  const narrative = generateNarrative(formattedTown, formattedCounty, formattedCat, hubDescription, localInfra, countyContext);

  // --- FAQs: differentiated by town description and county context ---
  const faqs = generateFAQs(formattedTown, formattedCounty, formattedCat, hubDescription, countyContext);

  // --- Nearby hubs: relationship-based linking ---
  const resolvedNearbyHubs = nearbyHubs && nearbyHubs.length > 0
    ? nearbyHubs
    : getRelatedHubs(town, county, 3);

  return { narrative, infrastructure: localInfra, faqs, nearbyHubs: resolvedNearbyHubs };
};

/** Generate infrastructure points from county context when no enriched data exists */
function generateInfrastructure(
  formattedTown: string,
  formattedCounty: string,
  countyContext?: { roads: string; anchor: string; economy: string }
): string[] {
  if (countyContext) {
    return [
      countyContext.roads,
      `${formattedCounty} County government services`,
      `Local market centres and shopping`,
      `Primary and secondary school access`,
      `${countyContext.anchor}`,
      `Growing ${countyContext.economy}`,
    ];
  }
  return [
    `${formattedTown}–Nairobi transport link`,
    `${formattedCounty} County administrative access`,
    `Local market and shopping centres`,
    `Primary and secondary schools`,
    `Water and electricity connectivity`,
    `Emerging residential development zone`,
  ];
}

/** Generate a unique narrative per town using its specific description */
function generateNarrative(
  formattedTown: string,
  formattedCounty: string,
  formattedCat: string,
  hubDescription: string,
  localInfra: string[],
  countyContext?: { roads: string; anchor: string; economy: string }
): string {
  // Use the hub's unique description as the foundation
  const economyContext = countyContext
    ? `The wider ${formattedCounty} region is characterised by ${countyContext.economy}, with ${countyContext.anchor} driving sustained demand for land.`
    : `${formattedCounty} County continues to attract investment as infrastructure development opens new corridors for residential and commercial growth.`;

  return `${formattedTown} is a ${hubDescription.charAt(0).toLowerCase()}${hubDescription.slice(1)}${hubDescription.endsWith('.') ? '' : '.'} Investing in ${formattedCat.toLowerCase()} here positions you within one of ${formattedCounty}'s most promising growth corridors. ${economyContext} Key infrastructure includes ${localInfra[0]} and nearby ${localInfra[1].toLowerCase()}, making ${formattedTown} accessible for both residents and developers.`;
}

/** Generate town-specific FAQs using hub description and county context */
function generateFAQs(
  formattedTown: string,
  formattedCounty: string,
  formattedCat: string,
  hubDescription: string,
  countyContext?: { roads: string; anchor: string; economy: string }
): { q: string; a: string }[] {
  const roadContext = countyContext?.roads || `main ${formattedCounty} access roads`;

  return [
    {
      q: `What makes ${formattedTown} a good place to buy land?`,
      a: `${formattedTown} is a ${hubDescription.charAt(0).toLowerCase()}${hubDescription.slice(1)}${hubDescription.endsWith('.') ? '' : '.'} Its location in ${formattedCounty} County provides access to ${roadContext}, and the area benefits from growing demand for residential and commercial plots.`
    },
    {
      q: `What is the average price of a plot in ${formattedTown}?`,
      a: `Plot prices in ${formattedTown} vary depending on size and proximity to infrastructure. Contact Landika for current verified pricing — our agents provide free market reports with comparable sales data for the ${formattedTown} area.`
    },
    {
      q: `Can I pay for land in ${formattedTown} via installments?`,
      a: `Yes. Most Landika projects in ${formattedTown}, ${formattedCounty} County offer flexible payment plans from 3 to 12 months with a standard 30% deposit. Both cash and installment buyers receive the same title deed guarantee.`
    },
    {
      q: `How do I verify a title deed in ${formattedCounty} County?`,
      a: `Verification involves an official search at the ${formattedCounty} County Land Registry. Landika handles this on your behalf, providing a certified search certificate confirming ownership, boundaries, and absence of encumbrances before any payment.`
    },
    {
      q: `Is ${formattedTown} safe for land investment?`,
      a: `Yes, when you work with a registered agent. ${formattedTown} falls under ${formattedCounty} County jurisdiction with established land registries. Landika verifies every title deed at the Ministry of Lands and provides guided site visits before you commit.`
    }
  ];
}

/** Get related hubs using relationship logic: same county first, then major hubs */
function getRelatedHubs(townSlug: string, countySlug: string, limit: number): { name: string; slug: string; county?: string }[] {
  // Same-county siblings (relationship logic: nearest service areas)
  const sameCounty = (hubsByCounty.get(countySlug) || [])
    .filter(h => h.slug !== townSlug)
    .slice(0, limit);

  if (sameCounty.length >= limit) {
    return sameCounty.slice(0, limit).map(h => ({ name: h.name, slug: h.slug, county: h.county }));
  }

  // Pad with major investment hubs from other counties (relationship logic: high-demand alternatives)
  const majorHubs = ['ruiru', 'kitengela', 'juja', 'naivasha', 'syokimau', 'thika']
    .filter(s => s !== townSlug)
    .map(s => hubMap.get(s))
    .filter((h): h is NonNullable<typeof h> => h != null)
    .map(h => ({ name: h.name, slug: h.slug, county: h.county }));

  const combined = [...sameCounty.map(h => ({ name: h.name, slug: h.slug, county: h.county })), ...majorHubs];
  const seen = new Set<string>();
  return combined.filter(h => {
    if (seen.has(h.slug)) return false;
    seen.add(h.slug);
    return true;
  }).slice(0, limit);
}
