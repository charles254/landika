import { Metadata } from 'next'
import { getLocationBySlug, getPropertiesByLocation, getMarketInsight, getNearbyHubs, getAllLocations, Location } from '@/lib/data_layer'
import { getSEOContent } from '@/lib/seo_content'
import Link from 'next/link'
import NextImage from 'next/image'
import PropertyCard from '@/components/PropertyCard'
import SEOAccordion from '@/components/SEOAccordion'

// Enable ISR for 2000+ towns (revalidate every hour)
export const revalidate = 3600
export const dynamicParams = true

// Pre-render the top 100 hubs for instant performance
export async function generateStaticParams() {
  const allLocations = await getAllLocations()
  const categories = ['plots-for-sale']
  
  // Filter for towns and take top 100 hubs (100 towns * 1 category = 100 pages)
  const towns = allLocations.filter((loc: Location) => loc.type === 'town').slice(0, 100)
  const countyMap = new Map(allLocations.filter((l: Location) => l.type === 'county').map((l: Location) => [l.id, l.slug]))

  return towns.flatMap((town: Location) => {
    const countySlug = town.parentId ? countyMap.get(town.parentId) : null
    if (!countySlug) return []
    return categories.map(category => ({
      category,
      county: countySlug,
      town: town.slug
    }))
  })
}

interface Props {
  params: Promise<{
    category: string
    county: string
    town: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, county, town } = await params

  const toTitleCase = (str: string) => str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  const formattedCategory = toTitleCase(category)
  const formattedTown = toTitleCase(town)
  const formattedCounty = toTitleCase(county)

  // pSEO indexation policy: noindex if location doesn't exist in our data
  const location = await getLocationBySlug(town)
  if (!location) {
    return {
      title: `${formattedCategory} in ${formattedTown}`,
      robots: { index: false, follow: true },
    }
  }

  // Fetch market data for differentiated title tags (price + listing count)
  const insights = await getMarketInsight(town)
  const priceTag = `From KES ${(insights.avgPrice * 0.6 / 1000000).toFixed(1)}M`

  // Differentiated titles: include price and county for long-tail targeting
  const title = `${formattedCategory} in ${formattedTown}, ${formattedCounty} ${priceTag} | Verified`
  const description = `${insights.totalListings}+ verified ${formattedCategory.toLowerCase()} in ${formattedTown}, ${formattedCounty} County starting ${priceTag}. Title deeds searched, agent-led site visits, and secure transactions by Landika.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://landika.net/${category}/${county}/${town}`
    },
    openGraph: {
      title,
      description,
      url: `https://landika.net/${category}/${county}/${town}`,
    },
  }
}

export default async function PSEOPage({ params }: Props) {
  const { category, county, town } = await params
  
  // Parallelize data fetching to eliminate waterfalls
  const [properties, insights, location, nearbyHubs] = await Promise.all([
    getPropertiesByLocation(town, 4),
    getMarketInsight(town),
    getLocationBySlug(town),
    getNearbyHubs(town, county)
  ])
  
  const seoContent = getSEOContent(town, county, category, nearbyHubs)

  const toTitleCase = (str: string) => str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

  const formattedCat = toTitleCase(category)
  const formattedTown = toTitleCase(town)
  const formattedCounty = toTitleCase(county)

  // Compute price range from actual properties for schema
  const prices = properties.map(p => p.price).filter(p => p > 0)
  const minPrice = prices.length > 0 ? Math.min(...prices) : insights.avgPrice * 0.7
  const maxPrice = prices.length > 0 ? Math.max(...prices) : insights.avgPrice * 1.3

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Place',
      name: `${formattedTown}, ${formattedCounty}`,
      description: location?.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: formattedTown,
        addressRegion: formattedCounty,
        addressCountry: 'KE'
      }
    },
    // RealEstateListing schema for rich results on property searches
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `Verified ${formattedCat} in ${formattedTown}, ${formattedCounty}`,
      description: `${insights.totalListings} verified land listings in ${formattedTown} starting from KES ${(minPrice / 1000000).toFixed(1)}M`,
      numberOfItems: insights.totalListings,
      itemListElement: properties.slice(0, 4).map((prop, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'RealEstateListing',
          name: prop.title,
          description: prop.description,
          url: `https://landika.net/${category}/${county}/${town}`,
          image: prop.images[0],
          offers: {
            '@type': 'Offer',
            priceCurrency: 'KES',
            price: prop.price,
            availability: 'https://schema.org/InStock',
            seller: {
              '@type': 'RealEstateAgent',
              name: 'Landika Real Estate Agent',
              url: 'https://landika.net'
            }
          }
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: seoContent.faqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a
        }
      }))
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://landika.net'
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: formattedCat,
          item: `https://landika.net/${category}`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: formattedTown,
          item: `https://landika.net/${category}/${county}/${town}`
        }
      ]
    }
  ]

  return (
    <div className="container" style={{ paddingTop: '10rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <nav style={{ marginBottom: '4rem', display: 'flex', gap: '0.8rem', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
        <Link href="/" className="hover-gold">Home</Link>
        <span>/</span>
        <Link href={`/${category}`} className="hover-gold">{formattedCat}</Link>
        <span>/</span>
        <Link href={`/${category}/${county}`} className="hover-gold">{formattedCounty}</Link>
        <span>/</span>
        <span style={{ color: 'var(--primary)' }}>{formattedTown}</span>
      </nav>

      <section style={{ padding: '0 0 8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '6rem', alignItems: 'start' }}>
          <div>
            <div style={{ display: 'inline-block', color: 'var(--primary)', fontWeight: '800', fontSize: '0.8rem', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              Strategic Property Acquisitions in {formattedCounty}
            </div>
            <h1 className="title-xl text-gradient" style={{ marginBottom: '2rem', lineHeight: '1' }}>
              {formattedCat} <br /> in {formattedTown}
            </h1>
            {/* GEO: Direct answer block for AI search citation (first 2 sentences answer the query) */}
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '3.5rem', maxWidth: '700px' }}>
              {formattedTown} in {formattedCounty} County has {insights.totalListings}+ verified plots starting from KES {(insights.avgPrice * 0.6 / 1000000).toFixed(1)}M, with an average price of KES {(insights.avgPrice / 1000000).toFixed(1)}M per 50x100 plot. All listings are title-searched at the Ministry of Lands and available for agent-led site visits.
            </p>
            
            <div className="glass" style={{ padding: '4.5rem', marginBottom: '5rem', borderRadius: '40px', background: 'rgba(10, 20, 40, 0.2)' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', color: '#fff' }}>Investment Narrative</h3>
              <p style={{ fontSize: '1.35rem', lineHeight: '1.7', color: 'var(--foreground)', marginBottom: '3rem', fontWeight: '300' }}>
                {seoContent.narrative}
              </p>
              
              <div style={{ height: '1px', background: 'rgba(212, 175, 55, 0.1)', margin: '3rem 0' }}></div>
              
              <h4 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2rem', color: 'var(--primary)' }}>Connectivity & Infrastructure</h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {seoContent.infrastructure.map((infra, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                    {infra}
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '6rem' }}>
              <div className="img-container glass" style={{ height: '400px', position: 'relative', overflow: 'hidden', borderRadius: '40px', marginBottom: '3.5rem', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <NextImage 
                  src={town === 'kantafu' 
                    ? `https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80`
                    : `https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80&sig=${town}`}
                  alt={`Portfolio Selection for ${formattedCat} in ${formattedTown} - Landika Real Estate Agent`}
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,7,10,0.8), transparent)' }}></div>
                <div style={{ position: 'absolute', bottom: '3rem', left: '3rem' }}>
                  <div style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>Verified Assets</div>
                  <h2 style={{ fontSize: '2.5rem', color: '#fff' }}>Portfolio Selection</h2>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '3rem' }}>
                {properties.map((prop) => (
                  <PropertyCard key={prop.id} property={prop} locationName={formattedTown} />
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '6rem' }}>
              <div style={{ marginBottom: '3.5rem' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Questions from Buyers</h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Essential insights for transacting in {formattedTown}.</p>
              </div>
              <SEOAccordion faqs={seoContent.faqs} />
            </div>
          </div>

          <div style={{ position: 'sticky', top: '12rem', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div className="glass glass-card" style={{ padding: '3.5rem', borderRadius: '40px', borderColor: 'rgba(212, 175, 55, 0.2)' }}>
              <h3 style={{ fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '3rem', color: 'var(--primary)' }}>Bureau Insights</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.8rem' }}>Area Price Benchmark</div>
                  <div style={{ fontSize: '2.8rem', fontWeight: '800' }}>KES {(insights.avgPrice / 1000000).toFixed(1)}M</div>
                </div>
                
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '2.5rem' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.8rem' }}>Verified Portfolio</div>
                  <div style={{ fontSize: '2.8rem', fontWeight: '800' }}>{insights.totalListings} Units</div>
                </div>

                <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '2.5rem' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.8rem' }}>Liquidity Index</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <div style={{ fontSize: '2.8rem', fontWeight: '800', color: 'var(--primary)' }}>{insights.demandScore}%</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.3' }}>Transaction <br /> Velocity</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass" style={{ padding: '3rem', borderRadius: '40px' }}>
              <h4 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2rem', color: '#fff' }}>Nearby Hubs</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {seoContent.nearbyHubs.map((hub: any, i) => (
                  <Link key={i} href={`/${category}/${hub.county || county}/${hub.slug}`} className="hover-gold" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                    {hub.name} Town
                    <span style={{ color: 'var(--primary)' }}>→</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="glass" style={{ padding: '3rem', borderRadius: '40px', background: 'rgba(212, 175, 55, 0.05)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '1.5rem' }}>Need Area Consultation?</div>
              <button className="btn btn-primary" style={{ width: '100%' }}>Speak with Local Agent</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

