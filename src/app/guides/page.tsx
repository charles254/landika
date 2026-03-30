import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Land Buying Guides - Expert Resources for Kenya',
  description: 'Expert guides on buying land in Kenya: step-by-step process, costs, title searches, stamp duty, fraud prevention, and top investment locations.',
  alternates: {
    canonical: 'https://landika.net/guides',
  },
  openGraph: {
    title: 'Land Buying Guides - Expert Resources for Kenya',
    description: 'Expert guides on buying land in Kenya: step-by-step process, costs, legal requirements, and diaspora investment.',
    url: 'https://landika.net/guides',
  },
}

const featured = {
  title: 'How to Buy Land in Kenya',
  description: 'The definitive step-by-step guide covering title searches, stamp duty, legal fees, the transfer process, and common pitfalls to avoid. Start here if you\'re new to Kenya\'s land market.',
  href: '/guides/how-to-buy-land-in-kenya',
  badge: 'Start Here',
  readTime: '12 min read',
}

const categories = [
  {
    label: 'Getting Started',
    description: 'Essential guides for first-time land buyers in Kenya.',
    guides: [
      { title: 'Buy Land from Abroad', description: 'Agent representation, payment methods, and legal requirements for diaspora buyers.', href: '/guides/buy-land-in-kenya-from-abroad', badge: 'Diaspora', readTime: '8 min' },
      { title: 'Best Places to Buy Land', description: 'Top 10 investment locations for 2026 with prices, appreciation rates, and growth drivers.', href: '/guides/best-places-to-buy-land-in-kenya', badge: 'Investment', readTime: '10 min' },
      { title: 'Compare Locations', description: 'Side-by-side comparisons: Ruiru vs Juja, Kitengela vs Syokimau, and more.', href: '/guides/compare', badge: 'Comparison', readTime: '5 min' },
    ],
  },
  {
    label: 'Due Diligence',
    description: 'Protect yourself before committing any money.',
    guides: [
      { title: 'Title Deed Search', description: 'How to verify ownership at the Ministry of Lands: process, costs, and red flags.', href: '/guides/title-deed-search-kenya', badge: 'Essential', readTime: '7 min' },
      { title: 'Verify Land Ownership', description: 'The 6-step verification checklist every buyer must complete before purchasing.', href: '/guides/verify-land-ownership', badge: 'Checklist', readTime: '8 min' },
      { title: 'Avoid Land Fraud', description: 'Common scams, red flags, due diligence checklist, and what to do if you\'re a victim.', href: '/guides/avoid-land-fraud-kenya', badge: 'Protection', readTime: '9 min' },
    ],
  },
  {
    label: 'Taxes, Fees & Legal',
    description: 'Understand the costs and legal process of land transfer.',
    guides: [
      { title: 'Stamp Duty in Kenya', description: 'Rates (4% urban, 2% rural), how to pay via KRA iTax, exemptions, and a free calculator.', href: '/guides/stamp-duty-kenya', badge: 'Calculator', readTime: '6 min' },
      { title: 'Land Transfer Process', description: 'The complete 8-step process from sale agreement to title deed — with timelines.', href: '/guides/land-transfer-process', badge: '8 Steps', readTime: '7 min' },
      { title: 'Land Rates in Kenya', description: 'How county rates are calculated, payment methods, and getting a clearance certificate.', href: '/guides/land-rates-kenya', badge: 'Annual Tax', readTime: '5 min' },
    ],
  },
]

export default function GuidesIndex() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.net' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://landika.net/guides' },
    ],
  }

  return (
    <div className="container" style={{ paddingTop: '12rem', paddingBottom: '8rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav style={{ marginBottom: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <Link href="/" className="hover-gold">Home</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <span style={{ color: 'var(--primary)' }}>Guides</span>
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
            10 Free Guides
          </span>
        </div>
        <h1 className="title-xl text-gradient" style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>
          Land Buying Guides
        </h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6', fontWeight: '300' }}>
          Free expert resources to help you navigate the Kenyan land market with confidence — from first search to title deed in hand.
        </p>
      </section>

      {/* Featured Guide */}
      <section style={{ marginBottom: '5rem', padding: 0 }}>
        <Link href={featured.href} className="glass glass-hover" style={{
          display: 'block', padding: 'clamp(2.5rem, 5vw, 4rem)', position: 'relative', overflow: 'hidden',
          border: '1px solid rgba(212, 175, 55, 0.2)',
          background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.04) 0%, rgba(10, 20, 40, 0.4) 100%)',
        }}>
          <div style={{ position: 'absolute', top: '-30px', right: '-10px', fontSize: '12rem', fontWeight: '900', color: 'rgba(212, 175, 55, 0.02)', lineHeight: 1, pointerEvents: 'none' }}>01</div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              <span style={{
                padding: '0.5rem 1.2rem', background: 'var(--gold-gradient)', borderRadius: '8px',
                color: '#000', fontSize: '0.75rem', fontWeight: '800', letterSpacing: '0.15em', textTransform: 'uppercase'
              }}>
                {featured.badge}
              </span>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{featured.readTime}</span>
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', marginBottom: '1.5rem', color: '#fff', maxWidth: '700px' }}>
              {featured.title}
            </h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '700px' }}>
              {featured.description}
            </p>
            <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              Read Complete Guide <span style={{ fontSize: '1.2rem' }}>→</span>
            </div>
          </div>
        </Link>
      </section>

      {/* Categorized Guides */}
      {categories.map((cat) => (
        <section key={cat.label} style={{ marginBottom: '5rem', padding: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2.5rem' }}>
            <div>
              <h2 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', color: '#fff' }}>{cat.label}</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{cat.description}</p>
            </div>
            <div style={{ height: '1px', flex: 1, background: 'linear-gradient(to right, rgba(212, 175, 55, 0.15), transparent)' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
            {cat.guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="glass glass-card glass-hover" style={{
                padding: '2rem 2.25rem', display: 'flex', flexDirection: 'column',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                  <span style={{
                    padding: '0.35rem 0.9rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '6px',
                    color: 'var(--primary)', fontSize: '0.7rem', fontWeight: '800',
                    letterSpacing: '0.12em', textTransform: 'uppercase'
                  }}>
                    {guide.badge}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{guide.readTime}</span>
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: '#fff', lineHeight: '1.3' }}>{guide.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1.5rem', flex: 1 }}>
                  {guide.description}
                </p>
                <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem' }}>
                  Read Guide →
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ padding: 0 }}>
        <div className="glass" style={{
          padding: 'clamp(3rem, 5vw, 5rem)', borderRadius: '40px', textAlign: 'center',
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Still Have Questions?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '550px', margin: '0 auto 2.5rem' }}>
            Our agents are ready to answer your questions and guide you through every step of the process.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/consult" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
              Book Free Consultation
            </Link>
            <Link href="/plots-for-sale" className="btn btn-outline" style={{ padding: '1.2rem 3rem' }}>
              Browse Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
