import { supabase } from './supabase';
import pseoHubs from '../data/pseo_hubs.json';

export type LocationType = 'county' | 'town' | 'area';

export interface Location {
  id: string;
  name: string;
  slug: string;
  type: LocationType;
  description: string;
  parentId?: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  size: string;
  category: string;
  locationId: string;
  features: Record<string, boolean>;
  images: string[];
  verificationStatus: 'pending' | 'verified';
}

export interface MarketInsight {
  locationId: string;
  avgPrice: number;
  totalListings: number;
  demandScore: number;
}

// Memoize locations to avoid repeated slow JSON parsing and DB calls
let cachedLocations: Location[] | null = null;

// Fetch all locations for sitemap/navigation
export const getAllLocations = async (): Promise<Location[]> => {
  if (cachedLocations) return cachedLocations;

  const { data, error } = await supabase
    .from('locations')
    .select('id, name, slug, type, description, parent_id');
  
  const dbLocations: Location[] = (data || []).map(loc => ({
    id: loc.id,
    name: loc.name,
    slug: loc.slug,
    type: loc.type as LocationType,
    description: loc.description,
    parentId: loc.parent_id
  }));

  // Build a Map of DB counties for O(1) lookup during JSON hub mapping
  const dbCountyMap = new Map(
    dbLocations
      .filter(l => l.type === 'county')
      .map(l => [l.slug, l])
  );

  // Map JSON hubs to Location format efficiently
  const jsonLocations: Location[] = pseoHubs.map(hub => {
    const dbCounty = dbCountyMap.get(hub.county);
    return {
      id: `town-${hub.slug}`,
      name: hub.name,
      slug: hub.slug,
      type: 'town',
      description: hub.description,
      parentId: dbCounty ? dbCounty.id : `county-${hub.county}`
    };
  });

  // Collect unique counties from JSON hubs
  const jsonCounties: Location[] = Array.from(new Set(pseoHubs.map(h => h.county))).map(countySlug => ({
    id: `county-${countySlug}`,
    name: countySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    slug: countySlug,
    type: 'county',
    description: `Investment destinations in ${countySlug.replace(/-/g, ' ')} region.`
  }));

  // Combine and de-duplicate (DB locations take precedence)
  const allRaw = [...dbLocations, ...jsonLocations, ...jsonCounties];
  const uniqueMap = new Map<string, Location>();

  for (const loc of allRaw) {
    const key = `${loc.type}:${loc.slug}`;
    if (!uniqueMap.has(key)) {
      uniqueMap.set(key, loc);
    }
  }

  cachedLocations = Array.from(uniqueMap.values());
  return cachedLocations;
};

// Get nearby hubs for a given town and county
export const getNearbyHubs = async (townSlug: string, countySlug: string, limit: number = 3): Promise<{ name: string, slug: string }[]> => {
  const hubs = pseoHubs
    .filter(h => h.county === countySlug && h.slug !== townSlug)
    .slice(0, limit);
  
  if (hubs.length < limit) {
    // If fewer than limit in the same county, add some major investment hubs
    const defaults = ['ruiru', 'thika', 'kitengela', 'naivasha', 'athiriver', 'joska']
      .filter(s => s !== townSlug && s !== countySlug)
      .slice(0, limit - hubs.length);
    
    for (const dSlug of defaults) {
      const hub = pseoHubs.find(h => h.slug === dSlug);
      if (hub) hubs.push(hub);
    }
  }

  return hubs.map(h => ({ name: h.name, slug: h.slug, county: h.county }));
};

export const getLocationBySlug = async (slug: string): Promise<Location | null> => {
  const { data, error } = await supabase
    .from('locations')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!error && data) {
    return {
      id: data.id,
      name: data.name,
      slug: data.slug,
      type: data.type as LocationType,
      description: data.description,
      parentId: data.parent_id
    };
  }

  // Fallback to JSON hubs
  const hub = pseoHubs.find(h => h.slug === slug);
  if (hub) {
    return {
      id: `town-${hub.slug}`,
      name: hub.name,
      slug: hub.slug,
      type: 'town',
      description: hub.description,
      parentId: `county-${hub.county}`
    };
  }

  // Fallback to JSON counties
  const isCounty = pseoHubs.some(h => h.county === slug);
  if (isCounty || slug === 'machakos') {
    return {
      id: `county-${slug}`,
      name: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
      slug: slug as string,
      type: 'county',
      description: `Strategic investment area in ${slug.replace(/-/g, ' ')}.`
    };
  }

  return null;
};


export const getPropertiesByLocation = async (locationSlug: string, limit: number = 25): Promise<Property[]> => {
  // First get the location ID from slug
  let locData = (await supabase
    .from('locations')
    .select('id, type')
    .eq('slug', locationSlug)
    .single()).data;

  // Fallback for development if location doesn't exist in Supabase
  if (!locData) {
    if (locationSlug === 'ruiru') locData = { id: 'county-kiambu', type: 'town' };
    else if (locationSlug === 'joska') locData = { id: 'town-joska', type: 'town' };
    else locData = { id: `mock-${locationSlug}`, type: 'town' };
  }

  const { data: dbData, error } = await supabase
    .from('properties')
    .select('*')
    .eq('location_id', locData.id);

  const realProperties: Property[] = (dbData || []).map(p => ({
    id: p.id,
    title: p.title,
    description: p.description,
    price: p.price,
    size: p.size,
    category: p.category,
    locationId: p.location_id,
    features: p.features,
    images: p.images,
    verificationStatus: p.verification_status as 'pending' | 'verified'
  }));

  // If we have enough real data, return it (respecting the limit)
  if (realProperties.length >= limit) return realProperties.slice(0, limit);

  // Otherwise, pad with high-quality mocks to reach the limit
  const getDynamicImage = (index: number) => {
    // Realistic Kenyan land images — aerial farm plots, red dirt roads, open terrain, developing areas
    // All free, watermark-free from Pexels (configured in next.config.mjs)
    // Replace with your own photos: swap files in public/assets/mock-plots/ as plot-1.jpg to plot-10.jpg
    const plotImages = [
      'https://images.pexels.com/photos/30255135/pexels-photo-30255135.jpeg?auto=compress&cs=tinysrgb&w=640', // Aerial farmland Mau Narok Kenya — real Kenya location
      'https://images.pexels.com/photos/3030296/pexels-photo-3030296.jpeg?auto=compress&cs=tinysrgb&w=640', // Aerial subdivided farm land plots — looks like plot demarcation
      'https://images.pexels.com/photos/8747714/pexels-photo-8747714.jpeg?auto=compress&cs=tinysrgb&w=640', // Aerial agricultural land parcels
      'https://images.pexels.com/photos/16419878/pexels-photo-16419878.jpeg?auto=compress&cs=tinysrgb&w=640', // Red dirt road through countryside — typical Kenyan access road
      'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=640', // African savanna with acacia tree — Kajiado/Kitengela feel
      'https://images.pexels.com/photos/2832040/pexels-photo-2832040.jpeg?auto=compress&cs=tinysrgb&w=640', // Lush green farmland from above — Kiambu/Central feel
      'https://images.pexels.com/photos/1525612/pexels-photo-1525612.jpeg?auto=compress&cs=tinysrgb&w=640', // Dirt track through open grass terrain
      'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=640', // Wide open green plains with hills — Nakuru/Naivasha feel
      'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=640', // Dry savanna with scattered vegetation — Machakos/Joska feel
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=640', // Sunny open field with blue sky — clean plot appearance
    ];
    return plotImages[(index - 1) % plotImages.length];
  }

  const hubLocations = ['ruiru', 'kitengela', 'naivasha', 'joska', 'kamulu', 'malaa', 'kantafu', 'kangundo-road']
  const paddedProperties = [...realProperties];

  for (let i = realProperties.length + 1; paddedProperties.length < limit; i++) {
    const loc = hubLocations[i % hubLocations.length]
    const uniqueImage = getDynamicImage(i)
    paddedProperties.push({
      id: `verified-pad-${i}`,
      title: `Verified ${i % 2 === 0 ? '50x100' : '1/4 Acre'} Plot in ${loc.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}`,
      description: `Premium vacant land in the strategic hub of ${loc.replace(/-/g, ' ')} with ready title deed, red soil, and visible beacons.`,
      price: 850000 + (i * 75000),
      size: i % 2 === 0 ? '50x100' : '1/4 Acre',
      category: 'residential',
      locationId: locData.id,
      features: { water: true, electricity: true, title_deed: true },
      images: [uniqueImage],
      verificationStatus: 'verified',
    })
  }

  return paddedProperties;
};

export const getMarketInsight = async (locationSlug: string): Promise<MarketInsight> => {
  const { data: locData } = await supabase
    .from('locations')
    .select('id')
    .eq('slug', locationSlug)
    .single();

  const effectiveId = locData?.id || (pseoHubs.find(h => h.slug === locationSlug) ? `town-${locationSlug}` : `county-${locationSlug}`);

  const { data, error } = await supabase
    .from('market_insights')
    .select('*')
    .eq('location_id', effectiveId)
    .single();

  if (error || !data) {
    // Generate deterministic mock insights based on slug length/chars for consistency
    const priceBase = 1200000 + (locationSlug.length * 50000);
    const listings = 10 + (locationSlug.charCodeAt(0) % 20);
    const demand = 85 + (locationSlug.charCodeAt(locationSlug.length - 1) % 10);

    return {
      locationId: effectiveId,
      avgPrice: priceBase,
      totalListings: listings,
      demandScore: demand > 98 ? 98 : demand
    };
  }

  return {
    locationId: data.location_id,
    avgPrice: data.avg_price_per_50x100,
    totalListings: data.total_listings,
    demandScore: data.demand_score
  };
};
