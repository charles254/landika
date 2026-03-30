import type { Metadata } from 'next'
import Link from 'next/link'
import SEOAccordion from '@/components/SEOAccordion'

export const metadata: Metadata = {
  title: 'Title Deed Search Kenya - Guide',
  description: 'How to conduct an official title deed search in Kenya: step-by-step process at the Ministry of Lands, costs (KES 500-1,000), what to check, and red flags to avoid.',
  alternates: {
    canonical: 'https://landika.co.ke/guides/title-deed-search-kenya',
  },
  openGraph: {
    title: 'Title Deed Search Kenya - Guide',
    description: 'How to conduct an official title deed search in Kenya: step-by-step process at the Ministry of Lands, costs, what to check, and red flags to avoid.',
    url: 'https://landika.co.ke/guides/title-deed-search-kenya',
  },
}

export default function TitleDeedSearchGuide() {
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Conduct a Title Deed Search in Kenya',
    description: 'A step-by-step guide to verifying land ownership through an official title search at the Ministry of Lands in Kenya.',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'KES', value: '500-1000' },
    totalTime: 'P3D',
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
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Obtain the Title Number', text: 'Get the title deed number from the seller or their agent. This is the unique reference number for the property at the Lands Registry.' },
      { '@type': 'HowToStep', position: 2, name: 'Visit the Lands Registry', text: 'Go to the Ministry of Lands (Ardhi House, Nairobi or county lands office) with the title number and a copy of your national ID.' },
      { '@type': 'HowToStep', position: 3, name: 'Fill the Search Application Form', text: 'Complete the official search application form (RL 26) and pay the search fee of KES 500-1,000.' },
      { '@type': 'HowToStep', position: 4, name: 'Receive the Search Certificate', text: 'The registry issues a search certificate within 1-3 working days showing ownership details, encumbrances, and caveats.' },
      { '@type': 'HowToStep', position: 5, name: 'Verify the Results', text: 'Review the certificate for the registered owner name, plot size, any caveats, charges, or court orders. Cross-check with the seller\'s details.' },
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does a title deed search cost in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'An official title search at the Ministry of Lands costs KES 500 to KES 1,000 depending on the county. If you engage a lawyer or agent to conduct the search on your behalf, expect to pay an additional KES 2,000-5,000 for their service fee.' } },
      { '@type': 'Question', name: 'How long does a title search take in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'An official title search takes 1 to 3 working days at the Ministry of Lands. Some county offices may take longer during peak periods. Digital searches through the Ardhisasa platform can return results within 24 hours.' } },
      { '@type': 'Question', name: 'Can I do a title deed search online in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. The Kenya government launched the Ardhisasa platform (ardhisasa.lands.go.ke) for digital land transactions including online title searches. However, not all counties are fully digitized, so a physical search at the Lands Registry may still be necessary.' } },
      { '@type': 'Question', name: 'What does a title search reveal?', acceptedAnswer: { '@type': 'Answer', text: 'A title search reveals the registered owner, the size and description of the property, any caveats (restrictions on sale), charges (mortgages or liens), court orders, and whether the land has been subdivided or consolidated.' } },
      { '@type': 'Question', name: 'What is the difference between a Green Card search and a title search?', acceptedAnswer: { '@type': 'Answer', text: 'They are the same thing. A "Green Card" search refers to the physical index card (green in color) maintained at the Lands Registry for each parcel of land. It is the official record of ownership and encumbrances.' } },
      { '@type': 'Question', name: 'Should I do a title search before paying any money?', acceptedAnswer: { '@type': 'Answer', text: 'Absolutely. Never pay any money — including a deposit — before conducting an official title search. The search confirms that the seller is the registered owner and that the property has no legal disputes or encumbrances.' } },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.co.ke' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://landika.co.ke/guides' },
      { '@type': 'ListItem', position: 3, name: 'Title Deed Search', item: 'https://landika.co.ke/guides/title-deed-search-kenya' },
    ],
  }

  const faqs = [
    { q: 'How much does a title deed search cost in Kenya?', a: 'An official title search at the Ministry of Lands costs KES 500 to KES 1,000 depending on the county. If you engage a lawyer or agent to conduct the search on your behalf, expect to pay an additional KES 2,000-5,000 for their service fee.' },
    { q: 'How long does a title search take in Kenya?', a: 'An official title search takes 1 to 3 working days at the Ministry of Lands. Some county offices may take longer during peak periods. Digital searches through the Ardhisasa platform can return results within 24 hours.' },
    { q: 'Can I do a title deed search online in Kenya?', a: 'Yes. The Kenya government launched the Ardhisasa platform (ardhisasa.lands.go.ke) for digital land transactions including online title searches. However, not all counties are fully digitized, so a physical search at the Lands Registry may still be necessary.' },
    { q: 'What does a title search reveal?', a: 'A title search reveals the registered owner, the size and description of the property, any caveats (restrictions on sale), charges (mortgages or liens), court orders, and whether the land has been subdivided or consolidated.' },
    { q: 'What is the difference between a Green Card search and a title search?', a: 'They are the same thing. A "Green Card" search refers to the physical index card (green in color) maintained at the Lands Registry for each parcel of land. It is the official record of ownership and encumbrances.' },
    { q: 'Should I do a title search before paying any money?', a: 'Absolutely. Never pay any money — including a deposit — before conducting an official title search. The search confirms that the seller is the registered owner and that the property has no legal disputes or encumbrances.' },
  ]

  const steps = [
    { num: '01', title: 'Obtain the Title Number', desc: 'Request the title deed number from the seller or their agent. Every parcel of land in Kenya has a unique title number registered at the Lands Registry. Without this number, a search cannot be conducted.' },
    { num: '02', title: 'Visit the Lands Registry', desc: 'Go to the Ministry of Lands office — Ardhi House in Nairobi for Nairobi properties, or the relevant county lands office. Bring a copy of your national ID or passport and the title number.' },
    { num: '03', title: 'Submit Search Application (RL 26)', desc: 'Fill in the official search application form (Form RL 26) at the registry. Pay the search fee of KES 500-1,000 at the cashier. Keep the receipt — you will need it to collect results.' },
    { num: '04', title: 'Receive the Search Certificate', desc: 'The registry processes your application and issues a search certificate within 1-3 working days. This document shows the registered owner, plot size, and any encumbrances on the property.' },
    { num: '05', title: 'Verify and Cross-Check', desc: 'Compare the search results against the seller\'s documents. The registered owner must match the seller\'s ID. Check for caveats, charges, or court orders. If anything is unclear, consult a lawyer before proceeding.' },
  ]

  return (
    <div className="container" style={{ paddingTop: '12rem', paddingBottom: '8rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* Breadcrumb */}
      <nav style={{ marginBottom: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <Link href="/" className="hover-gold">Home</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <Link href="/guides" className="hover-gold">Guides</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <span style={{ color: 'var(--primary)' }}>Title Deed Search</span>
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
          Due Diligence Guide
        </div>
        <h1 className="title-xl text-gradient animate-fade-in" style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>
          Title Deed Search <br /> in Kenya
        </h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontWeight: '300' }} className="animate-fade-in">
          How to verify land ownership at the <a href="https://lands.go.ke" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Ministry of Lands</a> before buying — costs, process, timelines, and red flags every buyer must know.
        </p>
      </section>

      {/* Quick Answer Box — Featured Snippet Target */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass quick-answer" style={{ padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Quick Answer</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            A title deed search in Kenya is an official verification process at the Ministry of Lands that confirms who owns a piece of land and whether it has any legal restrictions. It costs KES 500–1,000, takes 1–3 working days, and should <strong style={{ color: '#fff' }}>always be done before paying any money</strong> to a seller. The search reveals the registered owner, plot size, caveats, charges, and court orders.
          </p>
        </div>
      </section>

      {/* Why Title Search Matters */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Why a Title Search Is Non-Negotiable</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          Land fraud costs Kenyan buyers billions of shillings every year. The most common scams — double-selling, forged title deeds, and selling disputed land — are all preventable with a single step: an official title search at the Lands Registry.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
          A title search is the only way to confirm that the person selling you land is the actual registered owner, and that the property is free from legal disputes or financial obligations. Skipping this step is the single biggest mistake land buyers make in Kenya.
        </p>
      </section>

      {/* Step-by-Step Process */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>How to Conduct a Title Search</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Five steps to verify land ownership at the Ministry of Lands.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem' }}>
          {steps.map((step) => (
            <div key={step.num} className="glass step-card" style={{ padding: '2.5rem 2rem', position: 'relative', overflow: 'hidden' }}>
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

      {/* Cost Breakdown */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Title Search Costs</h2>
        <div className="table-scroll">
          <div className="glass" style={{ overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.05rem' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.15)' }}>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Item</th>
                  <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Cost (KES)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Official Search Fee (Ministry of Lands)', '500 – 1,000'],
                  ['Ardhisasa Online Search', '500'],
                  ['Agent / Lawyer Service Fee (optional)', '2,000 – 5,000'],
                  ['Certified Copy of Title (if needed)', '500 – 1,000'],
                  ['Survey Map / Registry Index Map', '1,000 – 3,000'],
                ].map(([item, cost], i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                    <td style={{ padding: '1rem 1.5rem', color: '#fff' }}>{item}</td>
                    <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What to Check */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>What to Check on the Search Certificate</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {[
            { title: 'Registered Owner', desc: 'The name on the title must match the seller\'s national ID. If it\'s a company, verify with the Registrar of Companies. If the owner is deceased, confirm succession documents.' },
            { title: 'Property Size and Description', desc: 'Cross-check the plot size on the certificate against what the seller claims. Visit the site with a surveyor to verify physical boundaries match the title map.' },
            { title: 'Caveats', desc: 'A caveat is a legal warning that prevents transactions on the property. Common reasons include pending court cases, succession disputes, or boundary disagreements. Do not buy land with an active caveat.' },
            { title: 'Charges and Liens', desc: 'Check for any mortgages, bank charges, or financial liens against the property. These must be cleared before a transfer can be processed.' },
            { title: 'Court Orders', desc: 'Any court orders restricting the sale or use of the property will appear on the search. This includes injunctions and orders related to family disputes.' },
          ].map((item, i) => (
            <div key={i} className="glass" style={{ padding: '2rem 2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Red Flags */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Red Flags During a Title Search</h2>
        <ul style={{ color: 'var(--text-muted)', lineHeight: '2', fontSize: '1.05rem', paddingLeft: '1.5rem' }}>
          <li><strong style={{ color: '#fff' }}>Seller name doesn&apos;t match title</strong> — The seller cannot sell property they don&apos;t own. Demand proof of ownership or walk away.</li>
          <li><strong style={{ color: '#fff' }}>Active caveats or court orders</strong> — The property is legally restricted. Do not proceed until the caveat is lifted by the person who placed it or by court order.</li>
          <li><strong style={{ color: '#fff' }}>Multiple titles for the same land</strong> — This may indicate fraud or a subdivision that was not properly registered. Consult a surveyor.</li>
          <li><strong style={{ color: '#fff' }}>Seller refuses to provide the title number</strong> — A legitimate seller has no reason to withhold this. Treat refusal as a major red flag.</li>
          <li><strong style={{ color: '#fff' }}>Suspiciously recent title issuance</strong> — If the title was issued very recently and the seller is in a hurry to sell, investigate further. This pattern is common in land fraud.</li>
          <li><strong style={{ color: '#fff' }}>Land under succession</strong> — If the registered owner is deceased and succession has not been completed, the sale cannot legally proceed until a court grants succession.</li>
        </ul>
      </section>

      {/* Ardhisasa Online */}
      <section style={{ marginBottom: '6rem', maxWidth: '800px', margin: '0 auto 6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Online Title Search via Ardhisasa</h2>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
          The Kenya government&apos;s <a href="https://ardhisasa.lands.go.ke" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Ardhisasa platform</a> allows digital land transactions, including online title searches. To use it, you need a registered account on the platform, a KRA PIN, and the title number of the property you want to search.
        </p>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
          While Ardhisasa is expanding coverage, not all counties are fully digitized. For properties in counties not yet on the platform, a physical visit to the Lands Registry is still required. A <Link href="/agent-services" style={{ color: 'var(--primary)' }}>registered agent like Landika</Link> can handle both online and physical searches on your behalf.
        </p>
      </section>

      {/* Cross-links */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass cross-link-banner" style={{ padding: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Learn the full land buying process from start to finish.
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
            Common questions about title deed searches in Kenya.
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
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Need a Title Search Done?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Our agents conduct official title searches at the Ministry of Lands for every property in our portfolio. Let us verify your next investment.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/consult" className="btn btn-primary" style={{ padding: '1.35rem 3.5rem', fontSize: '1.15rem' }}>
              Request Title Search
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
