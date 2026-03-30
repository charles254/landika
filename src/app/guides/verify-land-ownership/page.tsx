import type { Metadata } from 'next'
import Link from 'next/link'
import SEOAccordion from '@/components/SEOAccordion'

export const metadata: Metadata = {
  title: 'How to Verify Land Ownership in Kenya - Complete Guide',
  description: 'Step-by-step guide to verifying land ownership in Kenya: title search, surveyor verification, county records check, and online options via Ardhisasa.',
  alternates: {
    canonical: 'https://landika.net/guides/verify-land-ownership',
  },
  openGraph: {
    title: 'How to Verify Land Ownership in Kenya - Complete Guide',
    description: 'Step-by-step guide to verifying land ownership in Kenya: title search, surveyor verification, county records, and online options.',
    url: 'https://landika.net/guides/verify-land-ownership',
  },
}

export default function VerifyLandOwnershipGuide() {
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Verify Land Ownership in Kenya',
    description: 'A comprehensive guide to verifying that the person selling you land is the legitimate owner.',
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
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'KES', value: '1000-50000' },
    totalTime: 'P7D',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Conduct an Official Title Search', text: 'Visit the Ministry of Lands (lands.go.ke) or use the Ardhisasa platform (ardhisasa.lands.go.ke) to search the title number and confirm the registered owner.' },
      { '@type': 'HowToStep', position: 2, name: 'Verify Seller Identity', text: 'Cross-check the seller\'s national ID against the name on the title search results.' },
      { '@type': 'HowToStep', position: 3, name: 'Confirm Physical Boundaries', text: 'Hire a licensed surveyor to verify beacons, boundaries, and that the physical plot matches the title map.' },
      { '@type': 'HowToStep', position: 4, name: 'Check County Land Records', text: 'Visit the county physical planning office to confirm the land is zoned correctly and is not public utility land.' },
      { '@type': 'HowToStep', position: 5, name: 'Verify Land Rates Clearance', text: 'Request a land rates clearance certificate from the county government to confirm all rates are paid up.' },
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How do I verify who owns a piece of land in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Conduct an official title search at the Ministry of Lands using the title deed number. This reveals the registered owner, plot size, and any encumbrances. You can do this at Ardhi House (Nairobi) or the relevant county lands office. Online searches are also available through the Ardhisasa platform.' } },
      { '@type': 'Question', name: 'Can I verify land ownership online in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Ardhisasa platform (ardhisasa.lands.go.ke) allows online title searches for counties that have been digitized. You need a registered account and the title number. Not all counties are fully online yet, so a physical search may still be required in some areas.' } },
      { '@type': 'Question', name: 'How much does it cost to verify land ownership?', acceptedAnswer: { '@type': 'Answer', text: 'An official title search costs KES 500-1,000. A surveyor to verify physical boundaries costs KES 15,000-40,000 depending on the plot size and location. County records verification is typically free. Total due diligence budget: KES 20,000-50,000.' } },
      { '@type': 'Question', name: 'What documents should a land seller provide?', acceptedAnswer: { '@type': 'Answer', text: 'A legitimate seller should provide: original title deed, national ID or passport (matching the title), KRA PIN certificate, land rates clearance certificate, recent passport photos, and a copy of the survey map (mutation form). If the property was inherited, they should also provide succession documents.' } },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.net' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://landika.net/guides' },
      { '@type': 'ListItem', position: 3, name: 'Verify Land Ownership', item: 'https://landika.net/guides/verify-land-ownership' },
    ],
  }

  const faqs = [
    { q: 'How do I verify who owns a piece of land in Kenya?', a: 'Conduct an official title search at the Ministry of Lands using the title deed number. This reveals the registered owner, plot size, and any encumbrances. You can do this at Ardhi House (Nairobi) or the relevant county lands office. Online searches are also available through the Ardhisasa platform.' },
    { q: 'Can I verify land ownership online in Kenya?', a: 'Yes. The Ardhisasa platform allows online title searches for counties that have been digitized. You need a registered account and the title number. Not all counties are fully online yet, so a physical search may still be required in some areas.' },
    { q: 'How much does it cost to verify land ownership?', a: 'An official title search costs KES 500-1,000. A surveyor to verify physical boundaries costs KES 15,000-40,000 depending on the plot size and location. County records verification is typically free. Total due diligence budget: KES 20,000-50,000.' },
    { q: 'What documents should a land seller provide?', a: 'A legitimate seller should provide: original title deed, national ID or passport (matching the title), KRA PIN certificate, land rates clearance certificate, recent passport photos, and a copy of the survey map (mutation form). If the property was inherited, they should also provide succession documents.' },
  ]

  const verificationSteps = [
    { num: '01', title: 'Official Title Search', desc: 'Visit the Ministry of Lands (Ardhi House or county office) with the title deed number, or use the Ardhisasa platform (ardhisasa.lands.go.ke) for an online search. Fill in Form RL 26, pay KES 500-1,000, and receive a search certificate within 1-3 days showing the registered owner, plot size, and any caveats or charges.', critical: true },
    { num: '02', title: 'Seller Identity Verification', desc: 'The seller\'s national ID name must exactly match the registered owner on the title search results. If buying from a company, verify the company at the Registrar of Companies and confirm the director\'s authority to sell.', critical: true },
    { num: '03', title: 'Physical Boundary Survey', desc: 'Hire a licensed surveyor (registered with the Institution of Surveyors of Kenya) to visit the site, locate beacons, measure boundaries, and confirm the physical plot matches the title deed map. This costs KES 15,000-40,000.', critical: true },
    { num: '04', title: 'County Physical Planning Check', desc: 'Visit the county physical planning department to confirm: the land is not zoned as public utility, road reserve, or riparian. Check the land use zoning (residential, commercial, agricultural) matches your intended use.', critical: false },
    { num: '05', title: 'Land Rates Clearance', desc: 'Request a rates clearance certificate from the county government. This confirms all annual land rates are paid. Outstanding rates become the new owner\'s liability after transfer.', critical: false },
    { num: '06', title: 'Land Control Board (Agricultural Land)', desc: 'If the property is classified as agricultural land, the transaction requires Land Control Board consent. Apply through the local chief\'s office. Without LCB approval, the sale is legally void.', critical: false },
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
        <span style={{ color: 'var(--primary)' }}>Verify Land Ownership</span>
      </nav>

      <section style={{ textAlign: 'center', marginBottom: '6rem', paddingBottom: '6rem', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ display: 'inline-block', padding: '0.6rem 2rem', background: 'rgba(212, 175, 55, 0.08)', borderRadius: '40px', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '800', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2.5rem', border: '1px solid rgba(212, 175, 55, 0.2)' }} className="animate-fade-in">
          Verification Guide
        </div>
        <h1 className="title-xl text-gradient animate-fade-in" style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>
          How to Verify Land <br /> Ownership in Kenya
        </h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontWeight: '300' }} className="animate-fade-in">
          Six verification steps every buyer must complete to confirm legitimate land ownership before purchasing property in Kenya.
        </p>
      </section>

      {/* Quick Answer */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass quick-answer" style={{ padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Quick Answer</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            To verify land ownership in Kenya, conduct an <strong style={{ color: '#fff' }}>official title search at the <a href="https://lands.go.ke" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Ministry of Lands</a></strong> (KES 500-1,000) using the title deed number. The search certificate reveals the registered owner, plot size, and any legal restrictions. Additionally, verify the seller&apos;s ID matches the title, hire a <strong style={{ color: '#fff' }}>licensed surveyor</strong> to confirm physical boundaries, and check county records for zoning and rates clearance.
          </p>
        </div>
      </section>

      {/* Verification Steps */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>The 6-Step Verification Process</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Steps marked as critical should never be skipped under any circumstances.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
          {verificationSteps.map((step) => (
            <div key={step.num} className="glass step-card" style={{ padding: '2.5rem', display: 'flex', gap: '2rem', alignItems: 'flex-start', border: step.critical ? '1px solid rgba(212, 175, 55, 0.15)' : undefined }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: step.critical ? 'var(--primary)' : 'rgba(212, 175, 55, 0.15)', color: step.critical ? '#000' : 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0, fontSize: '0.9rem' }}>{step.num}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>{step.title}</h3>
                  {step.critical && <span style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.2rem 0.6rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '4px' }}>Critical</span>}
                </div>
                <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documents Seller Must Provide */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Documents a Seller Must Provide</h2>
        <div className="table-scroll">
        <div className="glass" style={{ overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.05rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.15)' }}>
                <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Document</th>
                <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Why You Need It</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Original Title Deed', 'Proves the seller holds the legal document of ownership'],
                ['National ID / Passport', 'Confirms seller identity matches the title'],
                ['KRA PIN Certificate', 'Required for stamp duty processing'],
                ['Land Rates Clearance', 'Confirms no outstanding county rates'],
                ['Survey Map / Mutation Form', 'Shows exact boundaries and measurements'],
                ['Passport Photos (2)', 'Required for transfer documentation'],
                ['Succession Documents (if inherited)', 'Court order authorizing the sale of inherited land'],
                ['Company Documents (if corporate seller)', 'CR12, Board resolution authorizing the sale'],
              ].map(([doc, reason], i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '1rem 1.5rem', color: '#fff', fontWeight: '500' }}>{doc}</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>{reason}</td>
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
            Deep dive into the title search process or learn how to protect yourself from scams.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/guides/title-deed-search-kenya" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
              Title Deed Search Guide →
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
            Common questions about verifying land ownership in Kenya.
          </p>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SEOAccordion faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="glass" style={{ padding: 'clamp(3rem, 5vw, 8rem)', borderRadius: '40px', textAlign: 'center', background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Let Us Verify for You</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Every property in the Landika portfolio comes with a completed title search, boundary verification, and rates clearance — so you don&apos;t have to.
          </p>
          <Link href="/consult" className="btn btn-primary" style={{ padding: '1.35rem 3.5rem', fontSize: '1.15rem' }}>
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
