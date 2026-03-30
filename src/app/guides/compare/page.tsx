import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compare Investment Locations - Town vs Town Analysis',
  description: 'Compare Kenya\'s top land investment locations side-by-side: prices, appreciation rates, infrastructure, and growth drivers for satellite towns.',
  alternates: {
    canonical: 'https://landika.net/guides/compare',
  },
  openGraph: {
    title: 'Compare Investment Locations - Town vs Town Analysis',
    description: 'Compare Kenya\'s top land investment locations side-by-side: prices, appreciation, infrastructure, and growth drivers.',
    url: 'https://landika.net/guides/compare',
  },
}

const comparisons = [
  {
    towns: ['Ruiru', 'Juja'],
    slug: 'ruiru-vs-juja',
    county: 'Kiambu',
    summary: 'Both along Thika Superhighway — Ruiru is more established with higher prices, Juja offers better entry prices near JKUAT.',
    ruiru: { price: 'KES 2.5M – 5M', appreciation: '12–18%', key: 'Established residential, Tatu City' },
    juja: { price: 'KES 1.5M – 4M', appreciation: '12–16%', key: 'University town, student demand' },
  },
  {
    towns: ['Kitengela', 'Syokimau'],
    slug: 'kitengela-vs-syokimau',
    county: 'Kajiado / Machakos',
    summary: 'Both along Mombasa Road corridor — Kitengela is more affordable, Syokimau is closer to Nairobi with SGR station.',
    kitengela: { price: 'KES 800K – 2.5M', appreciation: '10–15%', key: 'Affordable, Namanga Highway growth' },
    syokimau: { price: 'KES 2M – 4.5M', appreciation: '10–14%', key: 'SGR terminus, JKIA proximity' },
  },
  {
    towns: ['Joska', 'Kangundo'],
    slug: 'joska-vs-kangundo',
    county: 'Machakos',
    summary: 'Both along Kangundo Road — Joska is the nearer commuter belt, Kangundo is further out with lower prices.',
    joska: { price: 'KES 500K – 1.5M', appreciation: '15–20%', key: 'Kangundo Road expansion, commuter demand' },
    kangundo: { price: 'KES 300K – 800K', appreciation: '10–15%', key: 'Lowest entry price, long-term play' },
  },
  {
    towns: ['Naivasha', 'Nanyuki'],
    slug: 'naivasha-vs-nanyuki',
    county: 'Nakuru / Laikipia',
    summary: 'Both outside the Nairobi commuter belt — Naivasha is industrial/SGR-driven, Nanyuki is lifestyle/tourism-driven.',
    naivasha: { price: 'KES 1.2M – 3M', appreciation: '12–18%', key: 'SGR extension, ICD, flower industry' },
    nanyuki: { price: 'KES 800K – 2.5M', appreciation: '8–12%', key: 'Tourism, military base, cool climate' },
  },
]

export default function CompareIndex() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.net' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://landika.net/guides' },
      { '@type': 'ListItem', position: 3, name: 'Compare Locations', item: 'https://landika.net/guides/compare' },
    ],
  }

  return (
    <div className="container" style={{ paddingTop: '12rem', paddingBottom: '8rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav style={{ marginBottom: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <Link href="/" className="hover-gold">Home</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <Link href="/guides" className="hover-gold">Guides</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <span style={{ color: 'var(--primary)' }}>Compare Locations</span>
      </nav>

      <section style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <div style={{ display: 'inline-block', padding: '0.6rem 2rem', background: 'rgba(212, 175, 55, 0.08)', borderRadius: '40px', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2.5rem', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
          Investment Comparison
        </div>
        <h1 className="title-xl text-gradient" style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>
          Compare Locations
        </h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6', fontWeight: '300' }}>
          Side-by-side comparisons of Kenya&apos;s top land investment locations — prices, appreciation, and growth drivers.
        </p>
      </section>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', maxWidth: '900px', margin: '0 auto' }}>
        {comparisons.map((comp) => (
          <div key={comp.slug} className="glass glass-hover" style={{ padding: '3rem', cursor: 'default' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
              <h2 style={{ fontSize: '1.8rem', color: '#fff' }}>
                {comp.towns[0]} <span style={{ color: 'var(--primary)', fontWeight: '400' }}>vs</span> {comp.towns[1]}
              </h2>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{comp.county}</span>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '2rem' }}>{comp.summary}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {comp.towns.map((town, i) => {
                const data = i === 0 ? Object.values(comp)[3] as { price: string; appreciation: string; key: string } : Object.values(comp)[4] as { price: string; appreciation: string; key: string }
                return (
                  <div key={town} style={{ padding: '1.5rem', background: 'rgba(212, 175, 55, 0.03)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.08)' }}>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--primary)' }}>{town}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
                      <div><span style={{ color: 'var(--text-muted)' }}>Price: </span><span style={{ color: '#fff', fontWeight: '600' }}>{data.price}</span></div>
                      <div><span style={{ color: 'var(--text-muted)' }}>Growth: </span><span style={{ color: '#fff', fontWeight: '600' }}>{data.appreciation}</span></div>
                      <div><span style={{ color: 'var(--text-muted)' }}>Key driver: </span><span style={{ color: '#fff' }}>{data.key}</span></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <section style={{ marginTop: '6rem' }}>
        <div className="glass" style={{ padding: 'clamp(3rem, 5vw, 6rem)', borderRadius: '40px', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Need Help Choosing?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            Our agents provide personalized location recommendations based on your budget, timeline, and investment goals.
          </p>
          <Link href="/consult" className="btn btn-primary" style={{ padding: '1.35rem 3.5rem', fontSize: '1.15rem' }}>
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
