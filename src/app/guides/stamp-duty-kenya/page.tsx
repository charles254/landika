import type { Metadata } from 'next'
import Link from 'next/link'
import LandCalculators from '@/components/LandCalculators'
import SEOAccordion from '@/components/SEOAccordion'

export const metadata: Metadata = {
  title: 'Stamp Duty in Kenya - Calculator',
  description: 'Stamp duty rates in Kenya: 4% urban, 2% rural. Use our free calculator, learn how to pay via eCitizen/KRA iTax, exemptions, and the full payment process.',
  alternates: {
    canonical: 'https://landika.net/guides/stamp-duty-kenya',
  },
  openGraph: {
    title: 'Stamp Duty in Kenya - Calculator',
    description: 'Stamp duty rates in Kenya: 4% urban, 2% rural. Free calculator, payment process via eCitizen, exemptions, and what happens if you don\'t pay.',
    url: 'https://landika.net/guides/stamp-duty-kenya',
  },
}

export default function StampDutyGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Stamp Duty in Kenya - Rates, Calculator & How to Pay',
    description: 'A comprehensive guide to stamp duty on property transactions in Kenya: rates, calculation, payment process, and exemptions.',
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
      { '@type': 'Question', name: 'What is stamp duty in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Stamp duty is a government tax payable on all property transfers in Kenya under the Stamp Duty Act (Cap 480). It is charged as a percentage of the property value and must be paid before a title deed can be transferred to a new owner.' } },
      { '@type': 'Question', name: 'What is the stamp duty rate in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Stamp duty is 4% of the property value for properties in urban (municipality) areas and 2% for properties in rural areas. The rate applies to the declared value or the government-assessed value, whichever is higher.' } },
      { '@type': 'Question', name: 'Who pays stamp duty in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'The buyer pays stamp duty in Kenya. It is the buyer\'s legal obligation to pay the tax before the title deed can be transferred into their name.' } },
      { '@type': 'Question', name: 'How do I pay stamp duty in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Stamp duty is paid through the KRA iTax portal. Your lawyer generates a payment slip on iTax, and you pay via M-Pesa, bank transfer, or at a KRA-designated bank. Once paid, the stamp duty certificate is generated and submitted to the Lands Registry for transfer processing.' } },
      { '@type': 'Question', name: 'What happens if I don\'t pay stamp duty?', acceptedAnswer: { '@type': 'Answer', text: 'Without paying stamp duty, the title deed cannot be legally transferred to your name. The property remains registered under the seller. Additionally, unpaid stamp duty may attract penalties and interest from KRA if payment is delayed beyond the statutory period.' } },
      { '@type': 'Question', name: 'Is stamp duty refundable in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Stamp duty is generally not refundable once paid. However, in cases where a transaction falls through before transfer is completed, you may apply to KRA for a refund, though approval is not guaranteed and the process can take several months.' } },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.net' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://landika.net/guides' },
      { '@type': 'ListItem', position: 3, name: 'Stamp Duty Kenya', item: 'https://landika.net/guides/stamp-duty-kenya' },
    ],
  }

  const faqs = [
    { q: 'What is stamp duty in Kenya?', a: 'Stamp duty is a government tax payable on all property transfers in Kenya under the Stamp Duty Act (Cap 480). It is charged as a percentage of the property value and must be paid before a title deed can be transferred to a new owner.' },
    { q: 'What is the stamp duty rate in Kenya?', a: 'Stamp duty is 4% of the property value for properties in urban (municipality) areas and 2% for properties in rural areas. The rate applies to the declared value or the government-assessed value, whichever is higher.' },
    { q: 'Who pays stamp duty in Kenya?', a: 'The buyer pays stamp duty in Kenya. It is the buyer\'s legal obligation to pay the tax before the title deed can be transferred into their name.' },
    { q: 'How do I pay stamp duty in Kenya?', a: 'Stamp duty is paid through the KRA iTax portal. Your lawyer generates a payment slip on iTax, and you pay via M-Pesa, bank transfer, or at a KRA-designated bank. Once paid, the stamp duty certificate is generated and submitted to the Lands Registry for transfer processing.' },
    { q: 'What happens if I don\'t pay stamp duty?', a: 'Without paying stamp duty, the title deed cannot be legally transferred to your name. The property remains registered under the seller. Additionally, unpaid stamp duty may attract penalties and interest from KRA if payment is delayed beyond the statutory period.' },
    { q: 'Is stamp duty refundable in Kenya?', a: 'Stamp duty is generally not refundable once paid. However, in cases where a transaction falls through before transfer is completed, you may apply to KRA for a refund, though approval is not guaranteed and the process can take several months.' },
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
        <span style={{ color: 'var(--primary)' }}>Stamp Duty Kenya</span>
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
          Tax &amp; Fees Guide
        </div>
        <h1 className="title-xl text-gradient animate-fade-in" style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>
          Stamp Duty <br /> in Kenya
        </h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontWeight: '300' }} className="animate-fade-in">
          Everything you need to know about stamp duty on land and property transfers in Kenya — rates, how to calculate, how to pay, and exemptions.
        </p>
      </section>

      {/* Quick Answer */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass quick-answer" style={{ padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Quick Answer</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            Stamp duty in Kenya is <strong style={{ color: '#fff' }}>4% of the property value in urban areas</strong> and <strong style={{ color: '#fff' }}>2% in rural areas</strong>. It is paid by the buyer through the KRA iTax portal before the title deed can be transferred. For example, a KES 2,000,000 plot in an urban area attracts KES 80,000 in stamp duty. Use our calculator below to estimate your exact amount.
          </p>
        </div>
      </section>

      {/* Rates Table */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Stamp Duty Rates</h2>
        <div className="table-scroll">
          <div className="glass" style={{ overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.05rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.15)' }}>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Location Type</th>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Rate</th>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Example (KES 3M Plot)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Urban / Municipality', '4%', 'KES 120,000'],
                  ['Rural', '2%', 'KES 60,000'],
                  ['Transfer between spouses', 'Exempt', 'KES 0'],
                  ['Transfer to family trust', '1%', 'KES 30,000'],
                ].map(([type, rate, example], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                    <td style={{ padding: '1rem 1.5rem', color: '#fff' }}>{type}</td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)', fontWeight: '700' }}>{rate}</td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Stamp Duty Calculator</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px' }}>
          Enter the property value and location type to calculate your stamp duty obligation and installment options.
        </p>
        <LandCalculators />
      </section>

      {/* How to Pay */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>How to Pay Stamp Duty</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            { num: '1', title: 'Get a KRA PIN', desc: <span>Both buyer and seller must have a Kenya Revenue Authority (KRA) PIN. If you don&apos;t have one, register free at the <a href="https://itax.kra.go.ke" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>KRA iTax portal</a>.</span> },
            { num: '2', title: 'Lawyer Generates Stamp Duty Return', desc: 'Your conveyancing lawyer submits the stamp duty return on the iTax portal with the property details, sale agreement, and valuation.' },
            { num: '3', title: 'KRA Assessment', desc: 'KRA reviews the declared value and may conduct their own valuation. The duty is assessed on the higher of the declared value or KRA\'s assessed value.' },
            { num: '4', title: 'Pay via iTax', desc: <span>Once assessed, generate a payment slip on <a href="https://itax.kra.go.ke" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>iTax</a>. Pay via M-Pesa (Paybill 572572), bank transfer, or at any KRA partner bank.</span> },
            { num: '5', title: 'Receive Stamp Duty Certificate', desc: 'After payment clears, KRA issues a stamp duty certificate. Your lawyer submits this to the Lands Registry to process the title deed transfer.' },
          ].map((step) => (
            <div key={step.num} className="glass step-card" style={{ padding: '2rem 2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0, minHeight: '40px', minWidth: '40px' }}>{step.num}</div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#fff' }}>{step.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exemptions */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Stamp Duty Exemptions</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          Certain property transfers are exempt from stamp duty or attract a reduced rate:
        </p>
        <ul style={{ color: 'var(--text-muted)', lineHeight: '2', fontSize: '1.05rem', paddingLeft: '1.5rem' }}>
          <li><strong style={{ color: '#fff' }}>Transfer between spouses</strong> — Exempt from stamp duty under the Stamp Duty Act.</li>
          <li><strong style={{ color: '#fff' }}>Inheritance / succession</strong> — Transfers through court-ordered succession are exempt.</li>
          <li><strong style={{ color: '#fff' }}>Government and diplomatic properties</strong> — Exempt under government policy.</li>
          <li><strong style={{ color: '#fff' }}>First-time homebuyer relief</strong> — Some counties offer reduced rates for first-time buyers purchasing residential property (check with your county government).</li>
          <li><strong style={{ color: '#fff' }}>Transfer to family trusts</strong> — Attracts a reduced rate of 1%.</li>
        </ul>
      </section>

      {/* Cross-links */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass cross-link-banner" style={{ padding: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Stamp duty is just one step in the land buying process. Learn the full process from start to finish.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/guides/how-to-buy-land-in-kenya" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
              Complete Buying Guide →
            </Link>
            <Link href="/guides/title-deed-search-kenya" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
              Title Deed Search →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Common questions about stamp duty in Kenya.
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
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Need Help With Stamp Duty?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Our agents coordinate the entire stamp duty and transfer process, working with trusted conveyancing lawyers to ensure a smooth transaction.
          </p>
          <Link href="/consult" className="btn btn-primary" style={{ padding: '1.35rem 3.5rem', fontSize: '1.15rem' }}>
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
