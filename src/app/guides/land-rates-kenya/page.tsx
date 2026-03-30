import type { Metadata } from 'next'
import Link from 'next/link'
import SEOAccordion from '@/components/SEOAccordion'

export const metadata: Metadata = {
  title: 'Land Rates Kenya 2026 - Guide',
  description: 'Land rates in Kenya explained: how county governments calculate rates, payment process, how to get clearance certificates, and penalties for non-payment.',
  alternates: {
    canonical: 'https://landika.co.ke/guides/land-rates-kenya',
  },
  openGraph: {
    title: 'Land Rates Kenya 2026 - Guide',
    description: 'Land rates in Kenya: how they\'re calculated, payment methods, clearance certificates, and what happens if you don\'t pay.',
    url: 'https://landika.co.ke/guides/land-rates-kenya',
  },
}

export default function LandRatesGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Land Rates in Kenya 2026 - County Rates, How to Pay & Clearance',
    description: 'A comprehensive guide to land rates in Kenya: how county governments calculate and collect annual land rates, payment methods, and clearance certificates.',
    author: [
      {
        '@type': 'Person',
        name: 'Landika Editorial Team',
        jobTitle: 'Licensed Real Estate Advisors',
        url: 'https://landika.co.ke/about',
        worksFor: { '@type': 'Organization', name: 'Landika Real Estate Agent', url: 'https://landika.co.ke' },
        hasCredential: { '@type': 'EducationalOccupationalCredential', credentialCategory: 'Professional License', name: 'EARB-Certified Real Estate Agents' },
      },
      {
        '@type': 'Organization',
        name: 'Landika Real Estate Agent',
        url: 'https://landika.co.ke',
        description: 'EARB-registered real estate agent specializing in verified land transactions in Kenya',
        sameAs: ['https://landika.co.ke/about'],
      }
    ],
    publisher: { '@type': 'Organization', name: 'Landika Real Estate Agent', logo: { '@type': 'ImageObject', url: 'https://landika.co.ke/icon.svg' } },
    datePublished: '2026-03-23',
    dateModified: '2026-03-23',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'What are land rates in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Land rates are annual taxes charged by county governments on all private land within their jurisdiction. The rate is calculated as a percentage of the unimproved site value (the value of the land without buildings or improvements). Revenue from land rates funds county services like roads, water, and waste management.' } },
      { '@type': 'Question', name: 'How much are land rates in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Land rates vary by county and are typically 0.1% to 2.5% of the land\'s unimproved site value per year. For example, Nairobi County charges rates based on the unimproved site value (USV), with different rates for residential, commercial, and industrial zones. A typical residential plot may pay KES 2,000-15,000 per year.' } },
      { '@type': 'Question', name: 'How do I pay land rates in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Land rates can be paid at county government offices, through M-Pesa (paybill numbers vary by county), or through county online portals like Nairobi\'s e-payments system. You need your plot/LR number to make a payment. Payments are due annually, usually by a deadline set by the county.' } },
      { '@type': 'Question', name: 'What is a land rates clearance certificate?', acceptedAnswer: { '@type': 'Answer', text: 'A rates clearance certificate is a document from the county government confirming that all land rates on a property are fully paid. It is required during land transfer — you cannot transfer a title deed without a valid rates clearance. Apply at the county finance office with the title number and proof of payment.' } },
      { '@type': 'Question', name: 'What happens if I don\'t pay land rates?', acceptedAnswer: { '@type': 'Answer', text: 'Non-payment of land rates can result in penalties and interest on the outstanding amount, inability to transfer or sell the property (no clearance certificate), and in extreme cases, the county government can attach the property or auction it to recover the debt. It is advisable to stay current on rates payments.' } },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.co.ke' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://landika.co.ke/guides' },
      { '@type': 'ListItem', position: 3, name: 'Land Rates Kenya', item: 'https://landika.co.ke/guides/land-rates-kenya' },
    ],
  }

  const faqs = [
    { q: 'What are land rates in Kenya?', a: 'Land rates are annual taxes charged by county governments on all private land within their jurisdiction. The rate is calculated as a percentage of the unimproved site value (the value of the land without buildings or improvements). Revenue from land rates funds county services like roads, water, and waste management.' },
    { q: 'How much are land rates in Kenya?', a: 'Land rates vary by county and are typically 0.1% to 2.5% of the land\'s unimproved site value per year. A typical residential plot may pay KES 2,000-15,000 per year depending on location and size.' },
    { q: 'How do I pay land rates in Kenya?', a: 'Land rates can be paid at county government offices, through M-Pesa (paybill numbers vary by county), or through county online portals. You need your plot/LR number to make a payment.' },
    { q: 'What is a land rates clearance certificate?', a: 'A rates clearance certificate is a document from the county government confirming that all land rates on a property are fully paid. It is required during land transfer — you cannot transfer a title deed without a valid rates clearance.' },
    { q: 'What happens if I don\'t pay land rates?', a: 'Non-payment can result in penalties and interest, inability to transfer or sell the property, and in extreme cases, the county can auction the property to recover the debt.' },
  ]

  return (
    <div className="container" style={{ paddingTop: '12rem', paddingBottom: '8rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav style={{ marginBottom: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <Link href="/" className="hover-gold">Home</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <Link href="/guides" className="hover-gold">Guides</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <span style={{ color: 'var(--primary)' }}>Land Rates Kenya</span>
      </nav>

      <section style={{ textAlign: 'center', marginBottom: '6rem', paddingBottom: '6rem', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ display: 'inline-block', padding: '0.6rem 2rem', background: 'rgba(212, 175, 55, 0.08)', borderRadius: '40px', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2.5rem', border: '1px solid rgba(212, 175, 55, 0.2)' }} className="animate-fade-in">
          Property Tax Guide
        </div>
        <h1 className="title-xl text-gradient animate-fade-in" style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>
          Land Rates <br /> in Kenya
        </h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontWeight: '300' }} className="animate-fade-in">
          How county governments calculate land rates, how to pay, how to get a clearance certificate, and what happens if you don&apos;t pay.
        </p>
      </section>

      {/* Quick Answer */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass quick-answer" style={{ padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Quick Answer</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            Land rates in Kenya are <strong style={{ color: '#fff' }}>annual taxes charged by county governments</strong>, typically 0.1–2.5% of the land&apos;s unimproved site value. A typical residential plot pays <strong style={{ color: '#fff' }}>KES 2,000–15,000 per year</strong>. Rates are paid via M-Pesa or county offices. A <strong style={{ color: '#fff' }}>rates clearance certificate</strong> is mandatory for any land transfer — you cannot sell or buy land without one.
          </p>
        </div>
      </section>

      {/* How Rates Are Calculated */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>How Land Rates Are Calculated</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          Land rates are calculated using a formula set by each county government:
        </p>
        <div className="glass" style={{ padding: '2rem 2.5rem', marginBottom: '2rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--primary)', fontSize: '1.3rem', fontWeight: '700', fontFamily: 'monospace' }}>
            Annual Rate = Unimproved Site Value (USV) x Rate in the Shilling
          </p>
        </div>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          The <strong style={{ color: '#fff' }}>Unimproved Site Value (USV)</strong> is the value of the bare land without any buildings, fences, or improvements. This is determined by the county valuer through periodic valuation rolls.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
          The <strong style={{ color: '#fff' }}>Rate in the Shilling</strong> is set by each county government and varies by zone (residential, commercial, industrial) and location. For example, Nairobi County may charge KES 0.025 per shilling of USV for residential land.
        </p>
      </section>

      {/* Sample Rates Table */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Sample Annual Rates by Location</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
          These are approximate figures — actual rates vary by specific plot and county valuation.
        </p>
        <div className="table-scroll">
          <div className="glass" style={{ overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.05rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.15)' }}>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Location</th>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Typical Rate (1/8 Acre)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Nairobi (Residential)', 'KES 5,000 – 15,000 / year'],
                  ['Nairobi (Commercial)', 'KES 20,000 – 80,000 / year'],
                  ['Kiambu (Ruiru, Juja)', 'KES 2,000 – 8,000 / year'],
                  ['Kajiado (Kitengela)', 'KES 2,000 – 6,000 / year'],
                  ['Machakos (Syokimau, Joska)', 'KES 1,500 – 5,000 / year'],
                  ['Nakuru (Naivasha)', 'KES 1,500 – 4,000 / year'],
                  ['Rural / Agricultural', 'KES 500 – 2,000 / year'],
                ].map(([location, rate], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                    <td style={{ padding: '1rem 1.5rem', color: '#fff' }}>{location}</td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>{rate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* How to Pay */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>How to Pay Land Rates</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            { title: 'County Office (In Person)', desc: 'Visit the county revenue office with your title number or LR number. Pay at the cashier and receive an official receipt. This is the most straightforward method.' },
            { title: 'M-Pesa', desc: 'Most counties accept M-Pesa payments. Use the county-specific paybill number and your plot/LR number as the account number. Keep the confirmation message as your receipt.' },
            { title: 'County Online Portal', desc: 'Some counties (including Nairobi) offer online payment portals where you can check your balance, view payment history, and pay rates electronically.' },
            { title: 'Bank Payment', desc: 'Pay at designated bank branches (often KCB, Equity, or Co-op Bank) using the county\'s bank account details and your plot reference number.' },
          ].map((method, i) => (
            <div key={i} className="glass" style={{ padding: '2rem 2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{method.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{method.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Clearance Certificate */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Getting a Rates Clearance Certificate</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          A rates clearance certificate is mandatory for any land transfer. Here&apos;s how to get one:
        </p>
        <ol style={{ color: 'var(--text-muted)', lineHeight: '2.2', fontSize: '1.05rem', paddingLeft: '1.5rem' }}>
          <li>Pay all outstanding land rates up to the current year</li>
          <li>Visit the county finance/revenue office with payment receipts and a copy of the title deed</li>
          <li>Fill in the application form for a rates clearance certificate</li>
          <li>Pay the application fee (typically KES 500–1,000)</li>
          <li>Collect the certificate within 3–7 working days</li>
        </ol>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginTop: '1.5rem' }}>
          Your conveyancing lawyer or <Link href="/agent-services" style={{ color: 'var(--primary)' }}>agent</Link> can handle this process on your behalf as part of the <Link href="/guides/land-transfer-process" style={{ color: 'var(--primary)' }}>land transfer process</Link>.
        </p>
      </section>

      {/* Cross-links */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass cross-link-banner" style={{ padding: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Rates clearance is one step in the land transfer process. Learn the full journey.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/guides/land-transfer-process" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>Transfer Process Guide →</Link>
            <Link href="/guides/stamp-duty-kenya" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>Stamp Duty Guide →</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SEOAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="glass" style={{ padding: 'clamp(3rem, 5vw, 8rem)', borderRadius: '40px', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Questions About Land Rates?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Our agents handle rates clearance as part of every transaction. Let us take care of the paperwork.
          </p>
          <Link href="/consult" className="btn btn-primary" style={{ padding: '1.35rem 3.5rem', fontSize: '1.15rem' }}>
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
