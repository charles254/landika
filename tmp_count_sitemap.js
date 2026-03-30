import pseoHubs from './src/data/pseo_hubs.json';
import { supabase } from './src/lib/supabase';

// Mock getAllLocations logic to count
async function countSitemapUrls() {
  const categories = ['plots-for-sale'];
  const baseRoutesCount = 2; // Home + /plots-for-sale
  
  // Estimate towns from JSON
  const towns = pseoHubs.length;
  
  // Note: getAllLocations also fetches from Supabase.
  // But sitemap.ts filters for towns.
  // Town routes: categories.length * towns
  
  const townRoutesCount = towns * categories.length;
  const total = baseRoutesCount + townRoutesCount;
  
  console.log(`JSON Hubs: ${towns}`);
  console.log(`Categories: ${categories.length}`);
  console.log(`Base Routes: ${baseRoutesCount}`);
  console.log(`Town Routes (Estimated): ${townRoutesCount}`);
  console.log(`Total URLs: ${total}`);
}

countSitemapUrls();
