import type { Metadata } from 'next'
import Link from 'next/link'
import SEOAccordion from '@/components/SEOAccordion'

export const metadata: Metadata = {
  title: 'Land Transfer Process Kenya',
  description: 'How to transfer land ownership in Kenya: documents needed, stamp duty, Lands Registry process, timelines (30-90 days), and costs involved.',
  alternates: {
    canonical: 'https://landika.co.ke/guides/land-transfer-process',
  },
  openGraph: {
    title: 'Land Transfer Process Kenya',
    description: 'How to transfer land ownership in Kenya: documents, stamp duty, Lands Registry process, timelines, and costs.',
    url: 'https://landika.co.ke/guides/land-transfer-process',
  },
}

export default function LandTransferProcessGuide() {
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Transfer Land Ownership in Kenya',
    description: 'Step-by-step guide to transferring a title deed from seller to buyer at the Lands Registry in Kenya.',
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
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'KES', value: '50000-300000' },
    totalTime: 'P90D',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Sign the Sale Agreement', text: 'Both buyer and seller sign a legally binding sale agreement drafted by a conveyancing lawyer.' },
      { '@type': 'HowToStep', position: 2, name: 'Obtain Consent (if required)', text: 'For agricultural land, apply for Land Control Board consent. For leasehold land, obtain the landlord\'s consent.' },
      { '@type': 'HowToStep', position: 3, name: 'Pay Stamp Duty', text: 'Submit stamp duty return via KRA iTax (itax.kra.go.ke) and pay 4% (urban) or 2% (rural) of the property value.' },
      { '@type': 'HowToStep', position: 4, name: 'Submit Transfer Documents', text: 'Lodge the transfer forms, stamp duty certificate, sale agreement, and supporting documents at the Lands Registry.' },
      { '@type': 'HowToStep', position: 5, name: 'Registrar Processes Transfer', text: 'The Registrar verifies documents, cancels the old entry, and registers the title in the buyer\'s name.' },
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How long does it take to transfer land in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'The full transfer process takes 30 to 90 days from signing the sale agreement to receiving the title deed in the buyer\'s name. The actual processing at the Lands Registry takes 2-4 weeks, but stamp duty assessment, consent applications, and document preparation add to the timeline.' } },
      { '@type': 'Question', name: 'How much does land transfer cost in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Total transfer costs are approximately 6-8% of the property value. This includes: stamp duty (2-4%), legal/conveyancing fees (1-2%), land search fee (KES 500-1,000), land rent clearance, registration fees, and surveyor fees if needed.' } },
      { '@type': 'Question', name: 'What documents are needed for land transfer in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Required documents include: signed sale agreement, original title deed, stamp duty certificate, transfer forms (signed by both parties), national IDs and KRA PINs of both parties, passport photos, land rates clearance certificate, and consent letters (Land Control Board for agricultural land, landlord for leasehold).' } },
      { '@type': 'Question', name: 'Can I transfer land without a lawyer in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'While not legally mandatory, transferring land without a lawyer is strongly discouraged. The process involves legal documents, stamp duty returns, and Lands Registry procedures that require specialized knowledge. A conveyancing lawyer ensures the transfer is legally valid and protects your interests.' } },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.co.ke' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://landika.co.ke/guides' },
      { '@type': 'ListItem', position: 3, name: 'Land Transfer Process', item: 'https://landika.co.ke/guides/land-transfer-process' },
    ],
  }

  const faqs = [
    { q: 'How long does it take to transfer land in Kenya?', a: 'The full transfer process takes 30 to 90 days from signing the sale agreement to receiving the title deed in the buyer\'s name. The actual processing at the Lands Registry takes 2-4 weeks, but stamp duty assessment, consent applications, and document preparation add to the timeline.' },
    { q: 'How much does land transfer cost in Kenya?', a: 'Total transfer costs are approximately 6-8% of the property value. This includes: stamp duty (2-4%), legal/conveyancing fees (1-2%), land search fee (KES 500-1,000), land rent clearance, registration fees, and surveyor fees if needed.' },
    { q: 'What documents are needed for land transfer in Kenya?', a: 'Required documents include: signed sale agreement, original title deed, stamp duty certificate, transfer forms (signed by both parties), national IDs and KRA PINs of both parties, passport photos, land rates clearance certificate, and consent letters (Land Control Board for agricultural land, landlord for leasehold).' },
    { q: 'Can I transfer land without a lawyer in Kenya?', a: 'While not legally mandatory, transferring land without a lawyer is strongly discouraged. The process involves legal documents, stamp duty returns, and Lands Registry procedures that require specialized knowledge.' },
  ]

  const steps = [
    { num: '01', title: 'Complete Due Diligence', desc: 'Before initiating transfer, ensure a title search has been done, boundaries verified, and the seller\'s identity confirmed. This protects you from fraud and ensures a smooth transfer process.', timeline: '1–7 days' },
    { num: '02', title: 'Sign the Sale Agreement', desc: 'A conveyancing lawyer drafts the sale agreement specifying the price, payment terms, completion date, and conditions. Both buyer and seller sign. The buyer pays the agreed deposit (typically 10-30%).', timeline: '1–3 days' },
    { num: '03', title: 'Obtain Necessary Consents', desc: 'Agricultural land requires Land Control Board consent (apply via the local chief\'s office, takes 2-4 weeks). Leasehold land needs the landlord\'s (often county government) consent to transfer.', timeline: '2–4 weeks' },
    { num: '04', title: 'Pay Stamp Duty', desc: 'Your lawyer submits a stamp duty return on KRA iTax (itax.kra.go.ke). KRA assesses the value and you pay 4% (urban) or 2% (rural). Payment is via M-Pesa or bank transfer. KRA issues a stamp duty certificate.', timeline: '1–2 weeks' },
    { num: '05', title: 'Prepare Transfer Documents', desc: 'Your lawyer prepares: Transfer Form (signed by both parties), Discharge of Charge (if there was a mortgage), Land Rent Clearance, Rates Clearance, and copies of IDs and KRA PINs.', timeline: '1–3 days' },
    { num: '06', title: 'Lodge at the Lands Registry', desc: 'All documents are submitted to the Lands Registry (Ardhi House or county office). The submission is receipted and assigned a registration number for tracking.', timeline: '1 day' },
    { num: '07', title: 'Registrar Processes Transfer', desc: 'The Registrar verifies all documents, confirms stamp duty payment, checks for any restrictions, then cancels the seller\'s entry and registers the property in the buyer\'s name.', timeline: '2–6 weeks' },
    { num: '08', title: 'Collect New Title Deed', desc: 'Once processing is complete, the new title deed is ready for collection. Your lawyer or agent collects it from the registry. The land is now legally yours.', timeline: '1 day' },
  ]

  return (
    <div className="container" style={{ paddingTop: '12rem', paddingBottom: '8rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav style={{ marginBottom: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <Link href="/" className="hover-gold">Home</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <Link href="/guides" className="hover-gold">Guides</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <span style={{ color: 'var(--primary)' }}>Land Transfer Process</span>
      </nav>

      <section style={{ textAlign: 'center', marginBottom: '6rem', paddingBottom: '6rem', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ display: 'inline-block', padding: '0.6rem 2rem', background: 'rgba(212, 175, 55, 0.08)', borderRadius: '40px', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2.5rem', border: '1px solid rgba(212, 175, 55, 0.2)' }} className="animate-fade-in">
          Legal Process Guide
        </div>
        <h1 className="title-xl text-gradient animate-fade-in" style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>
          Land Transfer Process <br /> in Kenya
        </h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontWeight: '300' }} className="animate-fade-in">
          The complete process for transferring land ownership from seller to buyer at the Lands Registry — documents, costs, timelines, and what to expect.
        </p>
      </section>

      {/* Quick Answer */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass quick-answer" style={{ padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Quick Answer</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            Land transfer in Kenya involves signing a sale agreement, paying <Link href="/guides/stamp-duty-kenya" style={{ color: 'var(--primary)' }}>stamp duty</Link> (4% urban / 2% rural), and submitting transfer documents to the Lands Registry. The process takes <strong style={{ color: '#fff' }}>30–90 days</strong> and costs approximately <strong style={{ color: '#fff' }}>6–8% of the property value</strong> in taxes and fees. A conveyancing lawyer handles the paperwork and ensures the transfer is legally binding.
          </p>
        </div>
      </section>

      {/* Timeline Steps */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>The 8-Step Transfer Process</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            From sale agreement to title deed in your name — here&apos;s exactly what happens and how long each step takes.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
          {steps.map((step) => (
            <div key={step.num} className="glass step-card" style={{ padding: '2rem 2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'var(--primary)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0, fontSize: '0.85rem' }}>{step.num}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>{step.title}</h3>
                  <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '700', whiteSpace: 'nowrap' }}>{step.timeline}</span>
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Cost Summary */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Transfer Cost Summary</h2>
        <div className="table-scroll">
          <div className="glass" style={{ overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.05rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.15)' }}>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Cost Item</th>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Amount</th>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Example (KES 3M)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Stamp Duty (Urban)', '4%', 'KES 120,000'],
                  ['Stamp Duty (Rural)', '2%', 'KES 60,000'],
                  ['Legal / Conveyancing Fees', '1–2%', 'KES 30,000–60,000'],
                  ['Land Search Fee', 'KES 500–1,000', 'KES 1,000'],
                  ['Land Rent Clearance', 'Varies', 'KES 2,000–5,000'],
                  ['Registration Fee', 'KES 500–2,000', 'KES 1,000'],
                  ['Total (Urban)', '~6–8%', 'KES 154,000–188,000'],
                ].map(([item, amount, example], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                    <td style={{ padding: '1rem 1.5rem', color: '#fff', fontWeight: i === 6 ? '700' : '400' }}>{item}</td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>{amount}</td>
                    <td style={{ padding: '1rem 1.5rem', color: i === 6 ? 'var(--primary)' : 'var(--text-muted)', fontWeight: i === 6 ? '700' : '400' }}>{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Cross-links */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass cross-link-banner" style={{ padding: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Learn more about specific steps in the transfer process.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/guides/stamp-duty-kenya" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>Stamp Duty Guide →</Link>
            <Link href="/guides/title-deed-search-kenya" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>Title Search Guide →</Link>
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
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Need Transfer Assistance?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Our agents coordinate the entire transfer process with trusted conveyancing lawyers — from sale agreement to title deed in your name.
          </p>
          <Link href="/consult" className="btn btn-primary" style={{ padding: '1.35rem 3.5rem', fontSize: '1.15rem' }}>
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
