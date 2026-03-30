import type { Metadata } from 'next'
import Link from 'next/link'
import SEOAccordion from '@/components/SEOAccordion'

export const metadata: Metadata = {
  title: 'Buy Land in Kenya from Abroad - Diaspora Guide',
  description: 'How Kenyans abroad can buy land remotely: agent representation, payment methods, legal requirements, and site visit options with Landika.',
  alternates: {
    canonical: 'https://landika.co.ke/guides/buy-land-in-kenya-from-abroad',
  },
  openGraph: {
    title: 'Buy Land in Kenya from Abroad - Diaspora Guide',
    description: 'How Kenyans abroad can buy land remotely: agent representation, payment methods, legal requirements, and site visit options with Landika.',
    url: 'https://landika.co.ke/guides/buy-land-in-kenya-from-abroad',
  },
}

export default function DiasporaGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Buy Land in Kenya from Abroad - Diaspora Guide',
    description: 'A comprehensive guide for Kenyans in the diaspora on how to purchase verified land remotely with agent representation.',
    author: { '@type': 'Organization', name: 'Landika Real Estate Agent', url: 'https://landika.co.ke' },
    publisher: { '@type': 'Organization', name: 'Landika Real Estate Agent', logo: { '@type': 'ImageObject', url: 'https://landika.co.ke/icon.svg' } },
    datePublished: '2026-03-23',
    dateModified: '2026-03-23',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Can I buy land in Kenya while living abroad?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Kenyan citizens abroad retain full rights to purchase land in Kenya. You can appoint a registered agent or grant power of attorney to a trusted representative to handle the transaction on your behalf.' } },
      { '@type': 'Question', name: 'How do I pay for land in Kenya from abroad?', acceptedAnswer: { '@type': 'Answer', text: 'Common payment methods include international bank wire transfer directly to the seller\'s or escrow account, M-Pesa global transfers, and diaspora mortgage products offered by Kenyan banks like KCB and Equity. Always pay into a verifiable account — never to an individual\'s personal M-Pesa.' } },
      { '@type': 'Question', name: 'Do I need a KRA PIN to buy land in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, all property buyers in Kenya need a KRA (Kenya Revenue Authority) PIN to process stamp duty payments. Kenyans abroad can apply for a KRA PIN online through the iTax portal.' } },
      { '@type': 'Question', name: 'Can a foreigner buy land in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Under the 2010 Constitution, non-citizens can only hold leasehold land (maximum 99 years). Freehold land is reserved for Kenyan citizens. However, companies registered in Kenya can hold freehold land even with foreign shareholders.' } },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.co.ke' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://landika.co.ke/guides' },
      { '@type': 'ListItem', position: 3, name: 'Buy Land from Abroad', item: 'https://landika.co.ke/guides/buy-land-in-kenya-from-abroad' },
    ],
  }

  const faqs = [
    { q: 'Can I buy land in Kenya while living abroad?', a: 'Yes. Kenyan citizens abroad retain full rights to purchase land in Kenya. You can appoint a registered agent or grant power of attorney to a trusted representative to handle the transaction on your behalf.' },
    { q: 'How do I pay for land in Kenya from abroad?', a: 'Common payment methods include international bank wire transfer directly to the seller\'s or escrow account, M-Pesa global transfers, and diaspora mortgage products offered by Kenyan banks like KCB and Equity. Always pay into a verifiable account — never to an individual\'s personal M-Pesa.' },
    { q: 'Do I need a KRA PIN to buy land in Kenya?', a: 'Yes, all property buyers in Kenya need a KRA (Kenya Revenue Authority) PIN to process stamp duty payments. Kenyans abroad can apply for a KRA PIN online through the iTax portal.' },
    { q: 'Can a foreigner buy land in Kenya?', a: 'Under the 2010 Constitution, non-citizens can only hold leasehold land (maximum 99 years). Freehold land is reserved for Kenyan citizens. However, companies registered in Kenya can hold freehold land even with foreign shareholders.' },
  ]

  const steps = [
    { num: '01', title: 'Engage a Registered Agent', desc: 'Contact a registered real estate agent like Landika who can act on your behalf. They will provide verified listings, conduct site visits, and handle all paperwork.' },
    { num: '02', title: 'Select and Verify Your Plot', desc: 'Browse listings remotely, receive photos and video tours, and have the agent conduct an official title search at the Ministry of Lands to verify ownership.' },
    { num: '03', title: 'Sign Via Power of Attorney', desc: 'Grant power of attorney to your agent or a family member to sign the Sale Agreement on your behalf. Alternatively, sign digitally if both parties agree.' },
    { num: '04', title: 'Transfer Payment Securely', desc: 'Pay via bank wire transfer or diaspora-friendly channels directly to a verified escrow or seller account. Never send money to personal mobile wallets.' },
    { num: '05', title: 'Complete Transfer & Receive Title', desc: 'Your agent processes stamp duty, submits transfer documents to the Lands Registry, and the title deed is registered in your name. The original can be collected or couriered to you.' },
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
        <span style={{ color: 'var(--primary)' }}>Buy Land from Abroad</span>
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
          Diaspora Investment Guide
        </div>
        <h1 className="title-xl text-gradient animate-fade-in" style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>
          Buy Land in Kenya <br /> from Abroad
        </h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontWeight: '300' }} className="animate-fade-in">
          A complete guide for Kenyans in the diaspora on purchasing verified land remotely — from agent representation to title deed delivery.
        </p>
      </section>

      {/* Why Buy from Abroad */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Why Diaspora Kenyans Are Investing in Land</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          Land in Kenya remains one of the most stable and appreciating assets. Satellite towns around Nairobi — including Ruiru, Kitengela, and Joska — have seen 10–15% annual price growth driven by infrastructure expansion. For Kenyans abroad, purchasing land is both a secure investment and a foundation for returning home.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
          The challenge has always been trust and distance. Working with a <Link href="/agent-services" style={{ color: 'var(--primary)' }}>registered real estate agent</Link> who handles verification, legal paperwork, and physical site inspections eliminates the risks that have historically plagued diaspora land purchases.
        </p>
      </section>

      {/* Remote Purchase Process */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>The Remote Buying Process</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Five steps to purchasing verified land from anywhere in the world.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
          {steps.map((step) => (
            <div key={step.num} className="glass" style={{ padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-15px', right: '-5px', fontSize: '6rem', fontWeight: '900', color: 'rgba(212, 175, 55, 0.03)' }}>{step.num}</div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', marginBottom: '1.5rem', minHeight: '48px', minWidth: '48px' }}>{step.num}</div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Payment Methods */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Payment Methods for Diaspora Buyers</h2>
        <div className="table-scroll">
        <div className="glass" style={{ overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.05rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.15)' }}>
                <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Method</th>
                <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Details</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Bank Wire Transfer', 'Direct SWIFT transfer to seller\'s or escrow bank account. Most secure for large amounts.'],
                ['M-Pesa Global', 'Send via M-Pesa international partners (Safaricom diaspora). Suitable for deposits up to KES 150,000.'],
                ['Diaspora Mortgage', 'KCB, Equity, and Co-op Bank offer mortgage products for Kenyans abroad. Requires KRA PIN and proof of income.'],
                ['Escrow Services', 'A neutral third-party holds funds until title transfer is confirmed. Recommended for high-value transactions.'],
              ].map(([method, details], i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '1rem 1.5rem', color: '#fff', fontWeight: '600', whiteSpace: 'nowrap' }}>{method}</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>{details}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </section>

      {/* Legal Requirements */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Legal Requirements</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            { title: 'KRA PIN', desc: 'Required for stamp duty payment. Apply online via the iTax portal — no physical presence needed.' },
            { title: 'Power of Attorney', desc: 'If you cannot sign documents in person, execute a Power of Attorney at the nearest Kenyan embassy or consulate. This allows your agent or representative to act on your behalf.' },
            { title: 'Spousal Consent', desc: 'Under Kenyan law, land transactions by married persons may require spousal consent. Ensure this is addressed before signing.' },
            { title: 'Land Control Board Consent', desc: 'For agricultural land, the Land Control Board must approve the transaction. Your agent coordinates this process.' },
          ].map((item, i) => (
            <div key={i} className="glass" style={{ padding: '2rem 2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-link to main guide */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <div className="glass cross-link-banner" style={{ padding: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            New to the Kenyan land market? Start with our complete buying guide.
          </p>
          <Link href="/guides/how-to-buy-land-in-kenya" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
            How to Buy Land in Kenya →
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Diaspora FAQs</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Common questions from Kenyans buying land from abroad.
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
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to Invest from Abroad?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Our agents represent diaspora buyers across the USA, UK, Canada, UAE, and beyond. Book a free virtual consultation today.
          </p>
          <Link href="/consult" className="btn btn-primary" style={{ padding: '1.35rem 3.5rem', fontSize: '1.15rem' }}>
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
