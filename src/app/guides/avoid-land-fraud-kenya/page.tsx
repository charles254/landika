import type { Metadata } from 'next'
import Link from 'next/link'
import SEOAccordion from '@/components/SEOAccordion'

export const metadata: Metadata = {
  title: 'Avoid Land Fraud Kenya - Guide',
  description: 'Protect yourself from land scams in Kenya: common fraud tactics, red flags to watch for, verification steps, and how to ensure a safe land purchase.',
  alternates: {
    canonical: 'https://landika.co.ke/guides/avoid-land-fraud-kenya',
  },
  openGraph: {
    title: 'Avoid Land Fraud Kenya - Guide',
    description: 'Protect yourself from land scams in Kenya: common fraud tactics, red flags, verification steps, and how to ensure a safe purchase.',
    url: 'https://landika.co.ke/guides/avoid-land-fraud-kenya',
  },
}

export default function AvoidLandFraudGuide() {
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Avoid Land Fraud in Kenya',
    description: 'A comprehensive guide to protecting yourself from land scams and fraudulent property transactions in Kenya.',
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
      { '@type': 'Question', name: 'What are the most common land scams in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'The most common land scams in Kenya include: selling land using forged title deeds, double-selling the same plot to multiple buyers, selling government or public land as private property, selling land under succession without proper court orders, and impersonating the registered owner using fake IDs.' } },
      { '@type': 'Question', name: 'How can I verify if a title deed is genuine in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Conduct an official title search at the Ministry of Lands (Ardhi House) or through the Ardhisasa online platform. The search costs KES 500-1,000 and reveals the true registered owner, plot details, and any encumbrances. Never rely on a photocopy of a title deed — always verify at the source.' } },
      { '@type': 'Question', name: 'What should I do if I discover I bought fraudulent land?', acceptedAnswer: { '@type': 'Answer', text: 'Report the fraud to the police (DCI) and file a case at the Environment and Land Court. Engage a lawyer specializing in land disputes. If the seller used forged documents, you may have grounds for criminal prosecution and civil recovery of your money.' } },
      { '@type': 'Question', name: 'Is it safe to buy land in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, buying land in Kenya is safe when you follow proper due diligence: conduct an official title search, work with a registered real estate agent (EARB-certified), engage a conveyancing lawyer, verify physical boundaries with a surveyor, and pay through traceable bank channels.' } },
      { '@type': 'Question', name: 'Should I use a lawyer when buying land in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'While not legally mandatory, using a conveyancing lawyer is strongly recommended. A lawyer verifies documents, drafts the sale agreement, processes stamp duty, and ensures the transfer is legally binding. The legal fee is typically 1-2% of the property value — a small price for protecting an investment worth millions.' } },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.co.ke' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://landika.co.ke/guides' },
      { '@type': 'ListItem', position: 3, name: 'Avoid Land Fraud', item: 'https://landika.co.ke/guides/avoid-land-fraud-kenya' },
    ],
  }

  const faqs = [
    { q: 'What are the most common land scams in Kenya?', a: 'The most common land scams in Kenya include: selling land using forged title deeds, double-selling the same plot to multiple buyers, selling government or public land as private property, selling land under succession without proper court orders, and impersonating the registered owner using fake IDs.' },
    { q: 'How can I verify if a title deed is genuine in Kenya?', a: 'Conduct an official title search at the Ministry of Lands (Ardhi House) or through the Ardhisasa online platform. The search costs KES 500-1,000 and reveals the true registered owner, plot details, and any encumbrances. Never rely on a photocopy of a title deed — always verify at the source.' },
    { q: 'What should I do if I discover I bought fraudulent land?', a: 'Report the fraud to the police (DCI) and file a case at the Environment and Land Court. Engage a lawyer specializing in land disputes. If the seller used forged documents, you may have grounds for criminal prosecution and civil recovery of your money.' },
    { q: 'Is it safe to buy land in Kenya?', a: 'Yes, buying land in Kenya is safe when you follow proper due diligence: conduct an official title search, work with a registered real estate agent (EARB-certified), engage a conveyancing lawyer, verify physical boundaries with a surveyor, and pay through traceable bank channels.' },
    { q: 'Should I use a lawyer when buying land in Kenya?', a: 'While not legally mandatory, using a conveyancing lawyer is strongly recommended. A lawyer verifies documents, drafts the sale agreement, processes stamp duty, and ensures the transfer is legally binding. The legal fee is typically 1-2% of the property value — a small price for protecting an investment worth millions.' },
  ]

  const scamTypes = [
    { title: 'Forged Title Deeds', desc: 'Fraudsters create fake title deeds with fabricated title numbers, forged stamps, and false owner names. The document looks genuine but is not registered at the Lands Registry.', protection: 'Always conduct an official title search at the Ministry of Lands before paying any money.' },
    { title: 'Double-Selling', desc: 'The seller sells the same plot to multiple buyers, collecting deposits from each. By the time victims realize, the seller has disappeared.', protection: 'Pay only after a title search confirms ownership, and ensure your lawyer lodges a caveat immediately after signing the sale agreement.' },
    { title: 'Selling Public or Government Land', desc: 'Unscrupulous dealers sell road reserves, riparian land, school grounds, or other public land as private property. These transactions are void.', protection: 'Check with the county government physical planning office to confirm the land is not designated as public utility land.' },
    { title: 'Impersonation', desc: 'Fraudsters use fake IDs to impersonate the registered owner and sell their land without their knowledge.', protection: 'Verify the seller\'s identity against the title search results. Meet the seller in person, or confirm through a registered agent.' },
    { title: 'Selling Succession Land Without Court Orders', desc: 'After a property owner dies, relatives sell the land without obtaining the required succession documents from court.', protection: 'If the title shows a deceased owner, demand the grant of letters of administration and court order authorizing the sale.' },
    { title: 'Fake Agents and Companies', desc: 'Scammers pose as registered real estate agents or form fake companies to lure buyers with too-good-to-be-true prices.', protection: <span>Verify agent registration with the <a href="https://earb.go.ke" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Estate Agents Registration Board (EARB)</a>. Check company registration at the Registrar of Companies.</span> },
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
        <span style={{ color: 'var(--primary)' }}>Avoid Land Fraud</span>
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
          Buyer Protection Guide
        </div>
        <h1 className="title-xl text-gradient animate-fade-in" style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>
          How to Avoid <br /> Land Fraud in Kenya
        </h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontWeight: '300' }} className="animate-fade-in">
          Common land scams, how to spot them, and the due diligence steps that protect your investment.
        </p>
      </section>

      {/* Quick Answer */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass quick-answer" style={{ padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Quick Answer</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            To avoid land fraud in Kenya: (1) <strong style={{ color: '#fff' }}>always conduct an official title search</strong> at the Ministry of Lands before paying, (2) work with a <Link href="/agent-services" style={{ color: 'var(--primary)' }}>registered real estate agent</Link> (EARB-certified), (3) engage a conveyancing lawyer to draft and review all documents, (4) verify physical boundaries with a licensed surveyor, and (5) pay only through traceable bank channels — never M-Pesa to personal numbers.
          </p>
        </div>
      </section>

      {/* Common Scams */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Common Land Scams in Kenya</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Know the tactics fraudsters use so you can recognize and avoid them.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '2rem' }}>
          {scamTypes.map((scam, i) => (
            <div key={i} className="glass" style={{ padding: '2.5rem 2rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: '#fff' }}>{scam.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '1.5rem' }}>{scam.desc}</p>
              <div style={{ padding: '1rem 1.5rem', background: 'rgba(212, 175, 55, 0.05)', borderRadius: '12px', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <p style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Protection</p>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>{scam.protection}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Due Diligence Checklist */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Your Due Diligence Checklist</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem' }}>
          Follow every step on this checklist before committing money to any land purchase in Kenya.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {[
            { check: 'Official title search at Ministry of Lands', detail: 'Confirm the registered owner, plot size, and absence of caveats or charges. Cost: KES 500-1,000.' },
            { check: 'Verify seller identity', detail: 'The seller\'s national ID must match the name on the title. Meet in person or verify through a registered agent.' },
            { check: 'Engage a conveyancing lawyer', detail: 'Have a lawyer review and draft the sale agreement. Never sign documents prepared solely by the seller.' },
            { check: 'Physical site visit with surveyor', detail: 'Visit the land and confirm beacons, boundaries, and access roads match the title map. A licensed surveyor costs KES 15,000-40,000.' },
            { check: 'Check with county physical planning', detail: 'Confirm the land is not designated as a road reserve, riparian zone, or public utility land.' },
            { check: 'Verify agent registration (EARB)', detail: 'If buying through an agent, verify their registration with the Estate Agents Registration Board.' },
            { check: 'Pay via bank transfer only', detail: 'Never pay cash or send money to personal M-Pesa numbers. Always use traceable bank channels and get official receipts.' },
            { check: 'Lodge a caveat after signing', detail: 'Your lawyer should lodge a caveat on the property immediately after signing the sale agreement to prevent the seller from selling to someone else.' },
          ].map((item, i) => (
            <div key={i} className="glass" style={{ padding: '1.5rem 2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '6px', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px', color: 'var(--primary)', fontWeight: '800', fontSize: '0.8rem' }}>{i + 1}</div>
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#fff' }}>{item.check}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What to Do If Scammed */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>What to Do If You&apos;ve Been Scammed</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            { title: 'Report to the Police (DCI)', desc: 'File a report at your nearest police station or directly with the Directorate of Criminal Investigations (DCI). Provide all documents, payment receipts, and communication records.' },
            { title: 'File a Case at the Environment and Land Court', desc: 'The Environment and Land Court handles all land disputes in Kenya. Engage a lawyer specializing in land law to file your case. The court can order the cancellation of fraudulent titles and award compensation.' },
            { title: 'Report to the National Land Commission', desc: <span>The <a href="https://nlc.or.ke" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>National Land Commission (NLC)</a> investigates historical land injustices and can intervene in cases involving public land fraud or systemic title irregularities.</span> },
            { title: 'Notify the Lands Registry', desc: 'Inform the Registrar of Lands about the fraudulent transaction to prevent further sales of the property and place a restriction on the title.' },
          ].map((item, i) => (
            <div key={i} className="glass" style={{ padding: '2rem 2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-links */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass cross-link-banner" style={{ padding: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Learn the proper verification process and the full land buying journey.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/guides/title-deed-search-kenya" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
              Title Deed Search Guide →
            </Link>
            <Link href="/guides/how-to-buy-land-in-kenya" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
              Complete Buying Guide →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Common questions about land fraud in Kenya.
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
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Buy With Confidence</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Every property in the Landika portfolio is title-verified, surveyed, and agent-guaranteed. No shortcuts, no risks.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/consult" className="btn btn-primary" style={{ padding: '1.35rem 3.5rem', fontSize: '1.15rem' }}>
              Book Free Consultation
            </Link>
            <Link href="/plots-for-sale" className="btn btn-outline" style={{ padding: '1.35rem 3.5rem', fontSize: '1.15rem' }}>
              Browse Verified Plots
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
