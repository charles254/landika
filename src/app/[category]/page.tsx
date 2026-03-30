import { Metadata } from 'next'
import { getAllLocations, getPropertiesByLocation } from '@/lib/data_layer'
import Link from 'next/link'
import PropertyCard from '@/components/PropertyCard'

interface Props {
  params: Promise<{
    category: string
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const toTitleCase = (str: string) => str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const formattedCategory = toTitleCase(category)
  
  const title = `Verified ${formattedCategory} Across Kenya - Browse Portfolio`
  const description = `Explore ${formattedCategory} in Kenya's fastest-growing regions. Verified title deeds, agent-led site visits, and secure transactions with Landika.`

  return {
    title,
    description,
    alternates: {
      canonical: `https://landika.net/${category}`
    },
    openGraph: {
      title,
      description,
      url: `https://landika.net/${category}`,
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const toTitleCase = (str: string) => str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
  const formattedCategory = toTitleCase(category)

  // Parallelize ALL independent data fetches — eliminates waterfall (async-parallel)
  const [allLocations, ruiruProps, kitengelaProps, naivashaProps] = await Promise.all([
    getAllLocations(),
    getPropertiesByLocation('ruiru'),
    getPropertiesByLocation('kitengela'),
    getPropertiesByLocation('naivasha')
  ])
  const towns = allLocations.filter(loc => loc.type === 'town')

  const breadcrumbJsonLd = {
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
        name: formattedCategory,
        item: `https://landika.net/${category}`
      }
    ]
  }
  
  const featuredProperties = [...ruiruProps, ...kitengelaProps, ...naivashaProps].slice(0, 9)

  return (
    <div className="container" style={{ position: 'relative' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Premium Hero Section */}
      <section style={{ 
        paddingTop: '12rem', 
        paddingBottom: '8rem',
        textAlign: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{ 
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
          zIndex: -1
        }}></div>

        <div style={{ 
          display: 'inline-block', 
          padding: '0.6rem 2rem', 
          background: 'rgba(212, 175, 55, 0.08)', 
          borderRadius: '40px', 
          color: 'var(--primary)',
          fontSize: '0.75rem',
          fontWeight: '800',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '2.5rem',
          border: '1px solid rgba(212, 175, 55, 0.2)'
        }}>
          National Inventory Authority
        </div>
        
        <h1 className="title-xl text-gradient" style={{ 
          marginBottom: '2.5rem', 
          lineHeight: '1.1', 
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          maxWidth: '1000px'
        }}>
          Verified {formattedCategory} <br /> 
          <span style={{ fontSize: '0.5em', opacity: 0.8, letterSpacing: '0.1em' }}>Strategic Hubs Kenya</span>
        </h1>
        
        <p style={{ 
          fontSize: '1.4rem', 
          color: 'var(--text-muted)', 
          maxWidth: '800px', 
          margin: '0 auto 4rem',
          lineHeight: '1.6',
          fontWeight: '300'
        }}>
          Discover verified {formattedCategory} in Kenya's fastest-growing regions. As your Registered Real Estate Agent, we provide the legal security you need for high-yield land acquisition.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
          <div className="glass" style={{ padding: '1.5rem 3rem', borderRadius: '20px' }}>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem' }}>Total Units</div>
            <div style={{ fontSize: '2rem', fontWeight: '800' }}>142+ Listings</div>
          </div>
          <div className="glass" style={{ padding: '1.5rem 3rem', borderRadius: '20px' }}>
            <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--primary)', marginBottom: '0.5rem' }}>Avg. Growth</div>
            <div style={{ fontSize: '2rem', fontWeight: '800' }}>12.4% p.a</div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section style={{ paddingBottom: '12rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '6rem', alignItems: 'start' }}>
          
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5rem' }}>
              <h2 style={{ fontSize: '3rem' }}>Verified Selections</h2>
              <div style={{ height: '1px', flexGrow: 1, background: 'linear-gradient(to right, rgba(212, 175, 55, 0.2), transparent)', margin: '0 3rem' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '4rem' }}>
              {featuredProperties.map((prop, i) => (
                <PropertyCard key={i} property={prop} locationName="Kenya" />
              ))}
            </div>
          </div>

          {/* Sidebar Market Insight */}
          <aside style={{ position: 'sticky', top: '12rem' }}>
            <div className="glass glass-card" style={{ padding: '3.5rem', borderRadius: '40px' }}>
              <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '3rem', color: 'var(--primary)' }}>Agency Perspective</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1rem', marginBottom: '3rem' }}>
                Land prices in the {formattedCategory.toLowerCase()} sector have seen a shift towards satellite towns like Ruiru and Kitengela due to major infrastructure projects like the Eastern Bypass and SGR.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { label: 'Demand Index', value: 'High' },
                  { label: 'Risk Factor', value: 'Low (Verified)' },
                  { label: 'Market Outlook', value: 'Bullish' }
                ].map((item, idx) => (
                  <div key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{item.label}</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--primary)' }}>{item.value}</div>
                  </div>
                ))}
              </div>
              
              <Link href="/consult" className="btn btn-primary" style={{ width: '100%', marginTop: '3rem', textAlign: 'center' }}>
                Consult Agent for Report
              </Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Location Discovery Grid - Replaced with Investment Hub Cards */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.03)', padding: '10rem 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '8rem' }}>
          <h2 style={{ fontSize: '4rem', marginBottom: '2rem' }}>Strategic Investment Hubs</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.4rem', maxWidth: '750px', margin: '0 auto' }}>
            Select a region to view detailed investment narratives, local data, and town-specific land portfolios.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          {(() => {
            const countyMap = new Map(allLocations.filter(l => l.type === 'county').map(l => [l.id, l.slug]));
            // Slice to top 100 towns to avoid DOM bloat (2,000+ items kills browser performance)
            // SEO is preserved via Sitemap.xml which contains all 2,000+ links
            return towns.slice(0, 100).map((town) => {
              const county = town.parentId ? countyMap.get(town.parentId) : 'unknown'
              return (
                <Link 
                  key={town.id} 
                  href={`/${category}/${county}/${town.slug}`}
                  className="glass glass-card glass-hover"
                  style={{ padding: '4rem 3rem', position: 'relative', overflow: 'hidden' }}
                >
                  <div style={{ 
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    fontSize: '8rem',
                    fontWeight: '900',
                    color: 'rgba(212, 175, 55, 0.03)',
                    zIndex: 0
                  }}>
                    {town.name.charAt(0)}
                  </div>
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '800', textTransform: 'uppercase', marginBottom: '1.5rem' }}>{county} Region</div>
                    <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>{town.name}</h3>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontSize: '1rem' }}>Explore verified plots in the heart of {town.name}.</p>
                    <div style={{ color: 'var(--primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      View Town Portfolio <span>→</span>
                    </div>
                  </div>
                </Link>
              )
            })
          })()}
        </div>
        
        {towns.length > 100 && (
          <div style={{ textAlign: 'center', marginTop: '6rem' }}>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Showing top 100 strategic hubs. Use our sitemap or regional navigation for all {(towns.length).toLocaleString()} locations.</p>
            <Link href="/" className="btn btn-outline">Back to Home</Link>
          </div>
        )}
      </section>

      {/* "Why Invest Locally" Section */}
      <section style={{ paddingBottom: '12rem' }}>
        <div className="glass" style={{ padding: '8rem 6rem', borderRadius: '60px', background: 'linear-gradient(135deg, rgba(10, 20, 40, 0.3) 0%, transparent 100%)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '3.5rem', marginBottom: '3rem' }}>Why Secure {formattedCategory} <br /> Through Landika?</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {[
                  { q: 'Can I verify the title deed immediately?', a: 'Yes. Every listing in this category has a pre-verified green card search ready for your inspection.' },
                  { q: 'Do you handle the legal transfer?', a: 'Absolutely. Our agency legal team handles the entire Sale Agreement and Transfer process to ensure zero errors.' },
                  { q: 'Are there site visits for all hubs?', a: 'We provide coordinated site tours to all listed regions, led by senior investment agents.' }
                ].map((item, i) => (
                  <div key={i}>
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--primary)', marginBottom: '0.8rem' }}>{item.q}</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div style={{ 
                height: '500px', 
                background: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")', 
                backgroundSize: 'cover',
                borderRadius: '40px',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}></div>
              <div className="glass" style={{ 
                position: 'absolute', 
                bottom: '-2rem', 
                left: '-2rem', 
                padding: '2.5rem', 
                borderRadius: '20px' 
              }}>
                <div style={{ fontSize: '2rem', fontWeight: '800' }}>100%</div>
                <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Security Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
