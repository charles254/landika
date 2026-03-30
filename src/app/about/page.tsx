import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Landika - Kenya Agent',
  description: 'Landika is a registered real estate agent in Kenya specializing in verified land acquisition. Learn about our mission, values, and commitment to secure transactions.',
  alternates: {
    canonical: 'https://landika.co.ke/about',
  },
  openGraph: {
    title: 'About Landika - Kenya Agent',
    description: 'Learn about Landika — our mission, values, and commitment to verified, secure land transactions in Kenya.',
    url: 'https://landika.co.ke/about',
  },
}

export default function AboutPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.co.ke' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://landika.co.ke/about' },
    ],
  }

  return (
    <div className="container" style={{ paddingTop: '12rem', paddingBottom: '8rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav style={{ marginBottom: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <Link href="/" className="hover-gold">Home</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <span style={{ color: 'var(--primary)' }}>About</span>
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
            About Landika
          </span>
        </div>
        <h1 className="title-xl text-gradient" style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>
          Transacting with Integrity
        </h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '750px', margin: '0 auto', lineHeight: '1.6', fontWeight: '300' }}>
          We exist to make land ownership in Kenya transparent, secure, and accessible to every Kenyan — at home and abroad.
        </p>
      </section>

      {/* Mission */}
      <section style={{ padding: 0, marginBottom: '5rem' }}>
        <div className="glass quick-answer" style={{ padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Our Mission</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            To eliminate the risks, fraud, and opacity that have plagued Kenya&apos;s land market for decades. Every property we list is title-verified, boundary-surveyed, and agent-guaranteed — so our clients invest with confidence, not fear.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: 0, marginBottom: '5rem', maxWidth: '900px', margin: '0 auto 5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
          {[
            { value: '500+', label: 'Plots Sold', desc: 'Successful land transactions completed' },
            { value: '2,000+', label: 'Locations', desc: 'Towns and hubs listed across 44 counties' },
            { value: '100%', label: 'Title Verified', desc: 'Every listing undergoes a Ministry of Lands search' },
            { value: '0', label: 'Disputes', desc: 'Zero legal disputes from our verified transactions' },
          ].map((stat) => (
            <div key={stat.label} className="glass" style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)', lineHeight: 1, marginBottom: '0.75rem' }}>{stat.value}</div>
              <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#fff', marginBottom: '0.5rem' }}>{stat.label}</div>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.5' }}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why We Exist */}
      <section style={{ padding: 0, marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Why Landika Exists</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          Land is the most valuable asset in Kenya — yet buying it has historically been one of the riskiest transactions a person can make. Forged title deeds, double-sold plots, and unscrupulous brokers have cost Kenyan families billions of shillings.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          Landika was founded to change that. As a registered real estate agent, we bring professional standards, legal rigour, and full transparency to every transaction. We don&apos;t just sell land — we verify it, document it, and stand behind it.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
          Whether you&apos;re a first-time buyer in Nairobi or a Kenyan in the diaspora investing from abroad, we provide the same level of due diligence, legal support, and personal attention.
        </p>
      </section>

      {/* Values */}
      <section style={{ padding: 0, marginBottom: '5rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Our Values</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
          {[
            { title: 'Verification First', desc: 'No property enters our portfolio without a completed title search at the Ministry of Lands. We verify before we list — never after.' },
            { title: 'Full Transparency', desc: 'Every cost, fee, and timeline is disclosed upfront. No hidden charges, no surprises, no fine print that works against you.' },
            { title: 'Client Advocacy', desc: 'We represent the buyer&apos;s interest. Our agents negotiate fair prices, coordinate legal processes, and protect your investment at every step.' },
            { title: 'Accessibility', desc: 'Land ownership should not be reserved for the connected few. We serve all buyers — local and diaspora — with equal professionalism.' },
            { title: 'Legal Rigour', desc: 'Every transaction is backed by proper sale agreements, stamp duty processing, and title deed transfer through registered legal channels.' },
            { title: 'Long-Term Partnership', desc: 'Our relationship doesn&apos;t end at title transfer. We provide post-sale support including fencing coordination, development advice, and market updates.' },
          ].map((value) => (
            <div key={value.title} className="glass" style={{ padding: '2.5rem 2rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{value.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Registration */}
      <section style={{ padding: 0, marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Professional Registration</h2>
        <div className="glass" style={{ padding: '2.5rem', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            Landika operates as a registered real estate agent under the laws of Kenya. Our agents are certified by the <strong style={{ color: '#fff' }}><a href="https://earb.go.ke" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>Estate Agents Registration Board (EARB)</a></strong>, the statutory body that regulates real estate practice in Kenya.
          </p>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
            This registration means we are legally accountable, professionally insured, and bound by a code of conduct that protects your interests as a buyer.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: 0 }}>
        <div className="glass" style={{
          padding: 'clamp(3rem, 5vw, 6rem)', borderRadius: '32px', textAlign: 'center',
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
          border: '1px solid rgba(212, 175, 55, 0.1)',
        }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1.5rem' }}>Work With Us</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.7' }}>
            Ready to invest in verified Kenyan land? Speak with a registered agent today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link href="/consult" className="btn btn-primary" style={{ padding: '1.25rem 3rem' }}>Book Free Consultation</Link>
            <Link href="/plots-for-sale" className="btn btn-outline" style={{ padding: '1.25rem 3rem' }}>Browse Portfolio</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
