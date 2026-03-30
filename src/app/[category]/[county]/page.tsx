import { Metadata } from 'next'
import { getAllLocations } from '@/lib/data_layer'
import Link from 'next/link'

interface Props {
  params: Promise<{
    category: string
    county: string
  }>
}

const toTitleCase = (str: string) => str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, county } = await params
  const formattedCounty = toTitleCase(county)
  const formattedCat = toTitleCase(category)

  const title = `${formattedCat} in ${formattedCounty} County`
  const description = `Browse verified ${formattedCat.toLowerCase()} in ${formattedCounty} County, Kenya. Title-verified plots with agent-led site visits and secure transactions.`

  return {
    title,
    description,
    alternates: { canonical: `https://landika.co.ke/${category}/${county}` },
    openGraph: { title, description, url: `https://landika.co.ke/${category}/${county}` },
  }
}

export default async function CountyPage({ params }: Props) {
  const { category, county } = await params
  const formattedCounty = toTitleCase(county)
  const formattedCat = toTitleCase(category)

  const allLocations = await getAllLocations()

  // Find towns in this county
  const countyLocation = allLocations.find(l => l.type === 'county' && l.slug === county)
  const towns = allLocations.filter(l => l.type === 'town' && l.parentId === countyLocation?.id)

  // County-level FAQs for rich snippets and GEO/AI search citation
  const countyFaqs = [
    { q: `How much does land cost in ${formattedCounty} County?`, a: `Land prices in ${formattedCounty} County vary by town and proximity to infrastructure. Contact Landika for current verified pricing across ${towns.length} towns.` },
    { q: `Is it safe to buy land in ${formattedCounty}?`, a: `Yes, when you work with a registered agent. Landika verifies every title deed at the Ministry of Lands before listing any property in ${formattedCounty} County.` },
    { q: `Which towns in ${formattedCounty} are best for investment?`, a: `The best investment towns depend on your budget and goals. ${formattedCounty} County has ${towns.length} listed towns — book a free consultation for personalized recommendations.` },
  ]

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.co.ke' },
        { '@type': 'ListItem', position: 2, name: formattedCat, item: `https://landika.co.ke/${category}` },
        { '@type': 'ListItem', position: 3, name: `${formattedCounty} County`, item: `https://landika.co.ke/${category}/${county}` },
      ],
    },
    // Place schema for county-level geographic entity
    {
      '@context': 'https://schema.org',
      '@type': 'Place',
      name: `${formattedCounty} County, Kenya`,
      description: `Verified ${formattedCat.toLowerCase()} across ${towns.length} towns in ${formattedCounty} County. Title-searched and agent-verified listings by Landika.`,
      address: {
        '@type': 'PostalAddress',
        addressRegion: formattedCounty,
        addressCountry: 'KE'
      }
    },
    // FAQ schema for rich results and AI search citations
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: countyFaqs.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a }
      }))
    }
  ]

  return (
    <div className="container" style={{ paddingTop: '12rem', paddingBottom: '8rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav style={{ marginBottom: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <Link href="/" className="hover-gold">Home</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <Link href={`/${category}`} className="hover-gold">{formattedCat}</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <span style={{ color: 'var(--primary)' }}>{formattedCounty}</span>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '5rem', padding: 0 }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{
            display: 'inline-block', padding: '0.6rem 2rem',
            background: 'rgba(212, 175, 55, 0.08)', borderRadius: '40px',
            color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '800',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            {formattedCounty} County
          </span>
        </div>
        <h1 className="title-xl text-gradient" style={{ marginBottom: '2rem', lineHeight: '1.1' }}>
          {formattedCat} in <br /> {formattedCounty}
        </h1>
        <p style={{ fontSize: '1.3rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6', fontWeight: '300' }}>
          Explore verified plots across {towns.length} towns in {formattedCounty} County. Every listing is title-searched and agent-verified.
        </p>
      </section>

      {/* Towns Grid */}
      <section style={{ padding: 0, marginBottom: '5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.6rem', color: '#fff' }}>{towns.length} Towns in {formattedCounty}</h2>
          <div style={{ height: '1px', flex: 1, background: 'linear-gradient(to right, rgba(212, 175, 55, 0.15), transparent)' }} />
        </div>

        {towns.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 250px), 1fr))', gap: '1.5rem' }}>
            {towns.slice(0, 60).map((town) => (
              <Link
                key={town.id}
                href={`/${category}/${county}/${town.slug}`}
                className="glass glass-card glass-hover"
                style={{ padding: '2rem 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}
              >
                <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>{town.name}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5', flex: 1 }}>
                  Verified plots in {town.name}, {formattedCounty} County
                </p>
                <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem' }}>
                  View Plots →
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="glass" style={{ padding: '3rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              No towns currently listed in {formattedCounty} County. Check back soon or explore other counties.
            </p>
            <Link href={`/${category}`} className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
              Browse All Locations
            </Link>
          </div>
        )}

        {towns.length > 60 && (
          <p style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Showing 60 of {towns.length} towns. Visit individual town pages for detailed listings.
          </p>
        )}
      </section>

      {/* CTA */}
      <section style={{ padding: 0 }}>
        <div className="glass" style={{
          padding: 'clamp(3rem, 5vw, 5rem)', borderRadius: '32px', textAlign: 'center',
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
          border: '1px solid rgba(212, 175, 55, 0.1)',
        }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1.5rem' }}>Invest in {formattedCounty}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '550px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            Our agents provide market intelligence, guided site visits, and full transaction support across {formattedCounty} County.
          </p>
          <Link href="/consult" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
