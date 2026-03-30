import type { Metadata } from 'next'
import Link from 'next/link'
import SEOAccordion from '@/components/SEOAccordion'

export const metadata: Metadata = {
  title: 'Best Places to Buy Land Kenya 2026',
  description: 'Best places to buy land in Kenya in 2026: Ruiru, Kitengela, Juja, Joska, Syokimau, Naivasha & more. Prices, growth rates, and infrastructure driving value.',
  alternates: {
    canonical: 'https://landika.net/guides/best-places-to-buy-land-in-kenya',
  },
  openGraph: {
    title: 'Best Places to Buy Land Kenya 2026',
    description: 'Top locations to buy land in Kenya: satellite towns with 10-20% annual appreciation, infrastructure growth, and affordable entry prices.',
    url: 'https://landika.net/guides/best-places-to-buy-land-in-kenya',
  },
}

export default function BestPlacesGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Places to Buy Land in Kenya 2026',
    description: 'A data-driven guide to the best locations for land investment in Kenya, covering satellite towns, growth corridors, and emerging markets.',
    author: [
      {
        '@type': 'Person',
        name: 'Landika Editorial Team',
        jobTitle: 'Licensed Real Estate Advisors',
        url: 'https://landika.net/about',
        worksFor: { '@type': 'Organization', name: 'Landika Real Estate Agent', url: 'https://landika.net' },
        hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional License', name: 'EARB-Certified Real Estate Agents' },
      },
      {
        '@type': 'Organization',
        name: 'Landika Real Estate Agent',
        url: 'https://landika.net',
        description: 'EARB-registered real estate agent specializing in verified land transactions in Kenya',
        sameAs: ['https://landika.net/about'],
      }
    ],
    publisher: { '@type': 'Organization', name: 'Landika Real Estate Agent', logo: { '@type': 'ImageObject', url: 'https://landika.net/icon.svg' } },
    datePublished: '2026-03-23',
    dateModified: '2026-03-23',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Where is the cheapest place to buy land in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'The most affordable land near Nairobi is found in satellite towns like Joska (from KES 500,000 per 1/8 acre), Matuu, Kangundo, and Konza. Further from Nairobi, towns in Nakuru, Nyandarua, and Laikipia counties offer plots from KES 200,000-400,000.' } },
      { '@type': 'Question', name: 'Which area in Kenya has the highest land appreciation?', acceptedAnswer: { '@type': 'Answer', text: 'Satellite towns along major infrastructure corridors see the highest appreciation. Ruiru, Juja, and Thika (along Thika Superhighway) have seen 12-18% annual growth. Kitengela and Syokimau (along Mombasa Road/SGR) have seen 10-15% annual growth. Naivasha has surged with the SGR extension.' } },
      { '@type': 'Question', name: 'Is buying land in Kenya a good investment?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Land in Kenya appreciates at 10-20% annually in growth corridors, outperforming most traditional investments. Key drivers include rapid urbanization (4.3% annual urban growth), infrastructure expansion (SGR, expressways), and a growing middle class. The key is buying in locations with strong infrastructure and development momentum.' } },
      { '@type': 'Question', name: 'What should I consider when choosing where to buy land?', acceptedAnswer: { '@type': 'Answer', text: 'Key factors include: proximity to infrastructure (roads, SGR, expressway), water and electricity access, county development plans, current and projected land prices, security, title deed status (freehold preferred), and the presence of amenities like schools, hospitals, and shopping centers.' } },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.net' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://landika.net/guides' },
      { '@type': 'ListItem', position: 3, name: 'Best Places to Buy Land', item: 'https://landika.net/guides/best-places-to-buy-land-in-kenya' },
    ],
  }

  const faqs = [
    { q: 'Where is the cheapest place to buy land in Kenya?', a: 'The most affordable land near Nairobi is found in satellite towns like Joska (from KES 500,000 per 1/8 acre), Matuu, Kangundo, and Konza. Further from Nairobi, towns in Nakuru, Nyandarua, and Laikipia counties offer plots from KES 200,000-400,000.' },
    { q: 'Which area in Kenya has the highest land appreciation?', a: 'Satellite towns along major infrastructure corridors see the highest appreciation. Ruiru, Juja, and Thika (along Thika Superhighway) have seen 12-18% annual growth. Kitengela and Syokimau (along Mombasa Road/SGR) have seen 10-15% annual growth. Naivasha has surged with the SGR extension.' },
    { q: 'Is buying land in Kenya a good investment?', a: 'Yes. Land in Kenya appreciates at 10-20% annually in growth corridors, outperforming most traditional investments. Key drivers include rapid urbanization (4.3% annual urban growth), infrastructure expansion (SGR, expressways), and a growing middle class.' },
    { q: 'What should I consider when choosing where to buy land?', a: 'Key factors include: proximity to infrastructure (roads, SGR, expressway), water and electricity access, county development plans, current and projected land prices, security, title deed status (freehold preferred), and the presence of amenities like schools, hospitals, and shopping centers.' },
  ]

  const locations = [
    { name: 'Ruiru', county: 'Kiambu', slug: 'kiambu/ruiru', price: 'KES 2.5M – 5M', appreciation: '12–18%', drivers: 'Thika Superhighway, Ruiru bypass, JKUAT expansion, Tatu City', badge: 'Top Pick' },
    { name: 'Kitengela', county: 'Kajiado', slug: 'kajiado/kitengela', price: 'KES 800K – 2.5M', appreciation: '10–15%', drivers: 'Mombasa Road, SGR Syokimau station, Namanga Highway, EPZ proximity', badge: 'High Growth' },
    { name: 'Juja', county: 'Kiambu', slug: 'kiambu/juja', price: 'KES 1.5M – 4M', appreciation: '12–16%', drivers: 'JKUAT university town, Thika Superhighway, residential demand from students and staff', badge: 'Top Pick' },
    { name: 'Joska', county: 'Machakos', slug: 'machakos/joska', price: 'KES 500K – 1.5M', appreciation: '15–20%', drivers: 'Kangundo Road expansion, affordable entry price, commuter belt growth', badge: 'Affordable' },
    { name: 'Syokimau', county: 'Machakos', slug: 'machakos/syokimau', price: 'KES 2M – 4.5M', appreciation: '10–14%', drivers: 'SGR terminus station, Mombasa Road, JKIA proximity, established middle-class residential', badge: 'Established' },
    { name: 'Naivasha', county: 'Nakuru', slug: 'nakuru/naivasha', price: 'KES 1.2M – 3M', appreciation: '12–18%', drivers: 'SGR extension, Naivasha ICD, flower industry, tourism, geothermal energy', badge: 'Emerging' },
    { name: 'Thika', county: 'Kiambu', slug: 'kiambu/thika', price: 'KES 1.5M – 3.5M', appreciation: '10–14%', drivers: 'Thika Superhighway, industrial zone, Blue Post Hotel area gentrification', badge: 'Established' },
    { name: 'Athi River', county: 'Machakos', slug: 'machakos/athi-river', price: 'KES 1.2M – 3M', appreciation: '8–12%', drivers: 'EPZ industrial hub, Mombasa Road, cement and manufacturing industries', badge: 'Industrial' },
    { name: 'Konza', county: 'Machakos', slug: 'machakos/konza', price: 'KES 300K – 1M', appreciation: '15–25%', drivers: 'Konza Technopolis (Silicon Savannah), SGR station, long-term government smart city project', badge: 'Speculative' },
    { name: 'Nanyuki', county: 'Laikipia', slug: 'laikipia/nanyuki', price: 'KES 800K – 2.5M', appreciation: '8–12%', drivers: 'Tourism hub, military base, cool climate, retirement destination, conservancy lifestyle', badge: 'Lifestyle' },
  ]

  return (
    <div className="container" style={{ paddingTop: '12rem', paddingBottom: '8rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Breadcrumb */}
      <nav style={{ marginBottom: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <Link href="/" className="hover-gold">Home</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <Link href="/guides" className="hover-gold">Guides</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <span style={{ color: 'var(--primary)' }}>Best Places to Buy Land</span>
      </nav>

      {/* Hero */}
      <section style={{ textAlign: 'center', marginBottom: '6rem', paddingBottom: '6rem', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{
          display: 'inline-block', padding: '0.6rem 2rem',
          background: 'rgba(212, 175, 55, 0.08)', borderRadius: '40px',
          color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '800',
          letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2.5rem',
          border: '1px solid rgba(212, 175, 55, 0.2)'
        }} className="animate-fade-in">
          Investment Guide 2026
        </div>
        <h1 className="title-xl text-gradient animate-fade-in" style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>
          Best Places to Buy <br /> Land in Kenya
        </h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontWeight: '300' }} className="animate-fade-in">
          A data-driven guide to Kenya&apos;s top land investment locations — satellite towns with strong appreciation, infrastructure growth, and affordable entry prices.
        </p>
      </section>

      {/* Quick Answer */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass quick-answer" style={{ padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Quick Answer</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            The best places to buy land in Kenya in 2026 are <strong style={{ color: '#fff' }}>satellite towns around Nairobi</strong> that sit along major infrastructure corridors. Top picks include <Link href="/plots-for-sale/kiambu/ruiru" style={{ color: 'var(--primary)' }}>Ruiru</Link> and <Link href="/plots-for-sale/kiambu/juja" style={{ color: 'var(--primary)' }}>Juja</Link> (Thika Superhighway), <Link href="/plots-for-sale/kajiado/kitengela" style={{ color: 'var(--primary)' }}>Kitengela</Link> and <Link href="/plots-for-sale/machakos/syokimau" style={{ color: 'var(--primary)' }}>Syokimau</Link> (Mombasa Road/SGR), and <Link href="/plots-for-sale/machakos/joska" style={{ color: 'var(--primary)' }}>Joska</Link> (Kangundo Road) for budget-conscious investors. These areas see 10–20% annual appreciation driven by urbanization and infrastructure expansion.
          </p>
        </div>
      </section>

      {/* What Makes a Great Location */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>What Makes a Great Land Investment Location</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))', gap: '1.5rem' }}>
          {[
            { title: 'Infrastructure', desc: 'Proximity to highways, SGR stations, and the Nairobi Expressway' },
            { title: 'Utilities', desc: 'Water, electricity, and sewer connectivity or near-term plans' },
            { title: 'Development Plans', desc: 'County spatial plans showing zoning for residential or commercial use' },
            { title: 'Amenities', desc: 'Schools, hospitals, shopping centers, and security services' },
            { title: 'Title Status', desc: 'Freehold titles with clean ownership records and no disputes' },
            { title: 'Demand Signals', desc: 'Population growth, new housing projects, and rising land transactions' },
          ].map((item, i) => (
            <div key={i} className="glass" style={{ padding: '2rem 1.5rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Location Cards */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Top 10 Locations for 2026</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Each location ranked by investment potential, affordability, and infrastructure momentum.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {locations.map((loc, i) => (
            <Link key={i} href={`/plots-for-sale/${loc.slug}`} className="glass glass-hover" style={{ padding: '2.5rem 3rem', display: 'block', textDecoration: 'none' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '1.5rem', fontWeight: '900', color: 'rgba(212, 175, 55, 0.3)' }}>#{i + 1}</span>
                    <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>{loc.name}</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{loc.county} County</p>
                </div>
                <div style={{
                  padding: '0.4rem 1rem', background: 'rgba(212, 175, 55, 0.1)',
                  borderRadius: '8px', color: 'var(--primary)', fontSize: '0.75rem',
                  fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase'
                }}>{loc.badge}</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Price Range (1/8 acre)</p>
                  <p style={{ color: '#fff', fontWeight: '700', fontSize: '1.1rem' }}>{loc.price}</p>
                </div>
                <div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Annual Appreciation</p>
                  <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1.1rem' }}>{loc.appreciation}</p>
                </div>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>
                <strong style={{ color: 'rgba(255,255,255,0.7)' }}>Growth drivers:</strong> {loc.drivers}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Cross-links */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass cross-link-banner" style={{ padding: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Found a location you like? Learn how to purchase safely.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/guides/how-to-buy-land-in-kenya" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
              Complete Buying Guide →
            </Link>
            <Link href="/guides/avoid-land-fraud-kenya" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
              Avoid Land Fraud →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Common questions about where to buy land in Kenya.
          </p>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SEOAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="glass" style={{
          padding: 'clamp(3rem, 5vw, 8rem)',
          borderRadius: '40px', textAlign: 'center',
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)'
        }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to Invest?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Our agents provide location-specific market intelligence, verified listings, and guided site visits across all top investment hubs.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/consult" className="btn btn-primary" style={{ padding: '1.35rem 3.5rem', fontSize: '1.15rem' }}>
              Book Free Consultation
            </Link>
            <Link href="/plots-for-sale" className="btn btn-outline" style={{ padding: '1.35rem 3.5rem', fontSize: '1.15rem' }}>
              Browse All Locations
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
