import { MetadataRoute } from 'next'
import { getAllLocations } from '@/lib/data_layer'

export const revalidate = 3600 // Cache sitemap for 1 hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://landika.net'
  const allLocations = await getAllLocations()
  
  // Build a fast lookup map for parent county slugs
  const countyMap = new Map<string, string>()
  allLocations.forEach(loc => {
    if (loc.type === 'county') {
      countyMap.set(loc.id, loc.slug)
    }
  })

  // Static routes
  const baseRoutes = ['', '/plots-for-sale', '/agent-services', '/consult', '/guides', '/guides/how-to-buy-land-in-kenya', '/guides/buy-land-in-kenya-from-abroad', '/guides/title-deed-search-kenya', '/guides/stamp-duty-kenya', '/guides/avoid-land-fraud-kenya', '/guides/best-places-to-buy-land-in-kenya', '/guides/verify-land-ownership', '/guides/land-transfer-process', '/guides/land-rates-kenya', '/guides/compare', '/about', '/terms', '/privacy'].map(path => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date()
  }))

  const categories = ['plots-for-sale']

  // County-level routes (were missing — crawlers couldn't discover county pages)
  const countyRoutes = allLocations
    .filter(loc => loc.type === 'county')
    .flatMap(county =>
      categories.map(cat => ({
        url: `${baseUrl}/${cat}/${county.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }))
    )

  // Town-level pSEO routes generated in O(N)
  const townRoutes = allLocations
    .filter(loc => loc.type === 'town')
    .flatMap(town => {
      const countySlug = town.parentId ? countyMap.get(town.parentId) : null
      if (!countySlug) return []

      return categories.map(cat => ({
        url: `${baseUrl}/${cat}/${countySlug}/${town.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
      }))
    })

  return [...baseRoutes, ...countyRoutes, ...townRoutes]
}
