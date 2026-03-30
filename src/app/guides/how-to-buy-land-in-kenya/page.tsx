import type { Metadata } from 'next'
import Link from 'next/link'
import BuyingProcess from '@/components/BuyingProcess'
import LandCalculators from '@/components/LandCalculators'
import SEOAccordion from '@/components/SEOAccordion'

export const metadata: Metadata = {
  title: 'How to Buy Land in Kenya - Guide',
  description: 'Complete guide to buying land in Kenya: title search process, stamp duty rates, legal costs, sale agreements, and pitfalls to avoid.',
  alternates: {
    canonical: 'https://landika.net/guides/how-to-buy-land-in-kenya',
  },
  openGraph: {
    title: 'How to Buy Land in Kenya - Guide',
    description: 'Complete guide to buying land in Kenya: title search process, stamp duty rates, legal costs, sale agreements, and pitfalls to avoid.',
    url: 'https://landika.net/guides/how-to-buy-land-in-kenya',
  },
}

export default function HowToBuyLandGuide() {
  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Buy Land in Kenya',
    description: 'A step-by-step guide to purchasing verified land in Kenya, from title search to title deed registration.',
    estimatedCost: { '@type': 'MonetaryAmount', currency: 'KES', value: '500000-5000000' },
    totalTime: 'P90D',
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
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Research and Select a Location', text: 'Identify a location with strong infrastructure growth and capital appreciation potential. Work with a registered agent to access verified listings.' },
      { '@type': 'HowToStep', position: 2, name: 'Conduct a Title Search', text: 'Perform a Green Card search at the Ministry of Lands (Ardhi House) to verify ownership, check for caveats, charges, or disputes.' },
      { '@type': 'HowToStep', position: 3, name: 'Negotiate and Agree on Price', text: 'Agree on the purchase price with the seller. A registered agent can provide market intelligence to ensure fair pricing.' },
      { '@type': 'HowToStep', position: 4, name: 'Draft and Sign the Sale Agreement', text: 'Engage a lawyer to draft the Sale Agreement. Both parties sign, and the buyer pays a deposit (typically 10-30%).' },
      { '@type': 'HowToStep', position: 5, name: 'Pay Stamp Duty and Transfer Fees', text: 'Pay stamp duty (4% urban, 2% rural) and legal/conveyancing fees. Submit transfer documents to the Lands Registry.' },
      { '@type': 'HowToStep', position: 6, name: 'Register the Title Deed', text: 'Once processed, the title deed is registered in the new owner\'s name at the Lands Registry. This takes 30-90 days.' },
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'How much does it cost to buy land in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Land prices vary by location: plots in satellite towns like Joska and Kitengela start from KES 500,000, while prime areas like Ruiru and Juja range from KES 1.5M to 5M+. Additional costs include stamp duty (2-4%), legal fees (1-2% of value), and a land search fee of KES 500-1,000.' } },
      { '@type': 'Question', name: 'Is it safe to buy land in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, when proper due diligence is followed. Always conduct an official title search at the Ministry of Lands, work with a registered real estate agent, engage a lawyer for conveyancing, and verify physical boundaries with a surveyor before paying.' } },
      { '@type': 'Question', name: 'How long does land transfer take in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'The full transfer process takes 30 to 90 days from signing the sale agreement to receiving the title deed in your name. Working with a registered agent and lawyer can accelerate this timeline.' } },
      { '@type': 'Question', name: 'What is stamp duty in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Stamp duty is a government tax paid during property transfer. The rate is 4% of the property value for urban areas and 2% for rural areas. It must be paid before the title deed can be transferred.' } },
      { '@type': 'Question', name: 'Do I need a lawyer to buy land in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'While not legally mandatory, engaging a lawyer is strongly recommended. A lawyer drafts the sale agreement, conducts due diligence, processes stamp duty, and ensures the transfer is legally binding.' } },
      { '@type': 'Question', name: 'How do I verify a title deed in Kenya?', acceptedAnswer: { '@type': 'Answer', text: 'Visit the Ministry of Lands (Ardhi House) and request an official search on the title number. This reveals the registered owner, plot size, any caveats or charges, and encumbrances. A registered agent like Landika handles this process for you.' } },
    ],
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.net' },
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://landika.net/guides' },
      { '@type': 'ListItem', position: 3, name: 'How to Buy Land in Kenya', item: 'https://landika.net/guides/how-to-buy-land-in-kenya' },
    ],
  }

  const faqs = [
    { q: 'How much does it cost to buy land in Kenya?', a: 'Land prices vary by location: plots in satellite towns like Joska and Kitengela start from KES 500,000, while prime areas like Ruiru and Juja range from KES 1.5M to 5M+. Additional costs include stamp duty (2-4%), legal fees (1-2% of value), and a land search fee of KES 500-1,000.' },
    { q: 'Is it safe to buy land in Kenya?', a: 'Yes, when proper due diligence is followed. Always conduct an official title search at the Ministry of Lands, work with a registered real estate agent, engage a lawyer for conveyancing, and verify physical boundaries with a surveyor before paying.' },
    { q: 'How long does land transfer take in Kenya?', a: 'The full transfer process takes 30 to 90 days from signing the sale agreement to receiving the title deed in your name. Working with a registered agent and lawyer can accelerate this timeline.' },
    { q: 'What is stamp duty in Kenya?', a: 'Stamp duty is a government tax paid during property transfer. The rate is 4% of the property value for urban areas and 2% for rural areas. It must be paid before the title deed can be transferred.' },
    { q: 'Do I need a lawyer to buy land in Kenya?', a: 'While not legally mandatory, engaging a lawyer is strongly recommended. A lawyer drafts the sale agreement, conducts due diligence, processes stamp duty, and ensures the transfer is legally binding.' },
    { q: 'How do I verify a title deed in Kenya?', a: 'Visit the Ministry of Lands (Ardhi House) and request an official search on the title number. This reveals the registered owner, plot size, any caveats or charges, and encumbrances. A registered agent like Landika handles this process for you.' },
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
        <span style={{ color: 'var(--primary)' }}>How to Buy Land in Kenya</span>
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
          Kenya Land Buying Guide
        </div>
        <h1 className="title-xl text-gradient animate-fade-in" style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>
          How to Buy Land <br /> in Kenya
        </h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6', fontWeight: '300' }} className="animate-fade-in">
          A complete guide covering title searches, stamp duty, legal fees, the transfer process, and how to avoid common pitfalls when purchasing land in Kenya.
        </p>
      </section>

      {/* Quick Answer Box — Featured Snippet Target */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass quick-answer" style={{ padding: 'clamp(2rem, 4vw, 3rem)', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Quick Answer</h2>
          <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem' }}>
            To buy land in Kenya, you need to: (1) select a location and verify the plot through a <Link href="/agent-services" style={{ color: 'var(--primary)' }}>registered agent</Link>, (2) conduct an official title search at the Ministry of Lands, (3) sign a sale agreement drafted by a lawyer, (4) pay stamp duty (4% urban / 2% rural), and (5) register the title deed in your name at the Lands Registry. The entire process takes 30–90 days and costs approximately 6–8% above the land price in fees and taxes.
          </p>
        </div>
      </section>

      {/* Cost Breakdown Table */}
      <section style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Cost of Buying Land in Kenya</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '3rem', maxWidth: '700px' }}>
          Beyond the land price, budget for the following mandatory costs when purchasing property in Kenya.
        </p>
        <div className="table-scroll">
        <div className="glass" style={{ overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.05rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.15)' }}>
                <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Cost Item</th>
                <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Rate / Amount</th>
                <th style={{ padding: '1.25rem 1.5rem', textAlign: 'left', color: 'var(--primary)', fontWeight: '700' }}>Example (KES 2M Plot)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Land Price', 'Varies by location', 'KES 2,000,000'],
                ['Stamp Duty (Urban)', '4% of property value', 'KES 80,000'],
                ['Stamp Duty (Rural)', '2% of property value', 'KES 40,000'],
                ['Legal / Conveyancing Fee', '1–2% of property value', 'KES 20,000–40,000'],
                ['Land Search Fee', 'KES 500–1,000', 'KES 1,000'],
                ['Land Rent Clearance', 'Varies', 'KES 2,000–5,000'],
                ['Total (Urban)', '~6–8% above land price', 'KES 2,103,000–2,126,000'],
              ].map(([item, rate, example], i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
                  <td style={{ padding: '1rem 1.5rem', color: '#fff', fontWeight: i === 6 ? '700' : '400' }}>{item}</td>
                  <td style={{ padding: '1rem 1.5rem', color: 'var(--text-muted)' }}>{rate}</td>
                  <td style={{ padding: '1rem 1.5rem', color: i === 6 ? 'var(--primary)' : 'var(--text-muted)', fontWeight: i === 6 ? '700' : '400' }}>{example}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>
      </section>

      {/* Buying Process Steps */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>The Land Buying Process</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            A transparent, multi-step journey from property selection to title deed registration.
          </p>
        </div>
        <BuyingProcess />
      </section>

      {/* Detailed Steps */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '5rem' }}>

          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Step 1: Research and Select Your Location</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              The most important decision is where to buy. Focus on areas with strong infrastructure development — roads, SGR stations, water, and electricity access drive capital appreciation. Satellite towns around Nairobi like Ruiru, Kitengela, Joska, and Naivasha offer the best balance of affordability and growth potential.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              Work with a <Link href="/agent-services" style={{ color: 'var(--primary)' }}>registered real estate agent</Link> who can provide market intelligence, verified listings, and physical site visits. <Link href="/plots-for-sale" style={{ color: 'var(--primary)' }}>Browse our verified portfolio</Link> to explore locations across Kenya.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Step 2: Conduct a Title Search</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Before committing any money, conduct an official search at the <a href="https://lands.go.ke" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Ministry of Lands</a> (Ardhi House). This Green Card search reveals the registered owner, the plot size, and any encumbrances such as caveats, charges, or court orders. The search costs KES 500–1,000 and takes 1–3 working days.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              At Landika, our agents perform this <Link href="/agent-services" style={{ color: 'var(--primary)' }}>title verification</Link> on every listed property before it enters our portfolio, so you never encounter a disputed or encumbered plot.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Step 3: Negotiate and Sign the Sale Agreement</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Once the title is verified, negotiate the price with the seller. A registered agent can provide comparable market data to ensure you pay a fair price. A lawyer then drafts the Sale Agreement, which both parties sign. At this stage, the buyer typically pays a deposit of 10–30% of the purchase price.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              The Sale Agreement should specify the full purchase price, payment schedule, completion date, and penalties for breach. Never sign without a lawyer reviewing the document.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Step 4: Pay Stamp Duty and Transfer Fees</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              Stamp duty is a government tax payable on all property transfers in Kenya. The rate is 4% for properties in urban (municipality) areas and 2% for rural areas. This must be paid to the <a href="https://itax.kra.go.ke" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>Kenya Revenue Authority (KRA)</a> through the eCitizen portal before the transfer can be processed.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '2.5rem' }}>
              Use our calculator below to estimate your stamp duty and installment payments.
            </p>
            <LandCalculators />
          </div>

          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Step 5: Register the Title Deed</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              After stamp duty is paid and all documents are in order, submit the transfer forms to the Lands Registry. The Registrar processes the transfer and issues a new title deed in the buyer's name. This typically takes 30–90 days depending on the county and workload at the registry.
            </p>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.05rem' }}>
              Once the title deed is in your name, the land is legally yours. Consider fencing the property and engaging a caretaker, especially for plots you don't plan to develop immediately.
            </p>
          </div>

          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Common Pitfalls to Avoid</h2>
            <ul style={{ color: 'var(--text-muted)', lineHeight: '2', fontSize: '1.05rem', paddingLeft: '1.5rem' }}>
              <li><strong style={{ color: '#fff' }}>Skipping the title search</strong> — Always verify ownership at the Lands Registry before paying any money.</li>
              <li><strong style={{ color: '#fff' }}>Buying without a lawyer</strong> — A verbal agreement or unregistered document has no legal standing.</li>
              <li><strong style={{ color: '#fff' }}>Paying cash without a receipt</strong> — Always pay via bank transfer and get a signed receipt for every payment.</li>
              <li><strong style={{ color: '#fff' }}>Ignoring physical verification</strong> — Visit the site in person. Confirm beacons, boundaries, and access roads match the title map.</li>
              <li><strong style={{ color: '#fff' }}>Dealing with unregistered agents</strong> — Only work with agents registered with the Estate Agents Registration Board (EARB).</li>
              <li><strong style={{ color: '#fff' }}>Buying agricultural land without Land Control Board consent</strong> — Transactions on agricultural land require LCB approval, or the sale is void.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cross-link to Diaspora Guide */}
      <section style={{ marginBottom: '6rem' }}>
        <div className="glass cross-link-banner" style={{ padding: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            Buying from abroad? Read our dedicated guide for Kenyans in the diaspora.
          </p>
          <Link href="/guides/buy-land-in-kenya-from-abroad" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
            Diaspora Buying Guide →
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ marginBottom: '6rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Common questions about buying land in Kenya.
          </p>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <SEOAccordion faqs={faqs} />
        </div>
      </section>

      {/* Popular Locations */}
      <section style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Explore Popular Locations</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem' }}>
          Browse verified plots in Kenya's fastest-growing investment hubs.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2rem' }}>
          {[
            { name: 'Ruiru', county: 'kiambu', tag: 'From KES 2.5M' },
            { name: 'Kitengela', county: 'kajiado', tag: 'From KES 800K' },
            { name: 'Naivasha', county: 'nakuru', tag: 'From KES 1.2M' },
            { name: 'Joska', county: 'machakos', tag: 'From KES 500K' },
          ].map((loc) => (
            <Link key={loc.name} href={`/plots-for-sale/${loc.county}/${loc.name.toLowerCase()}`} className="glass glass-card glass-hover" style={{ padding: '2.5rem 2rem', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#fff' }}>{loc.name}</h3>
              <div style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '700' }}>{loc.tag}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="glass" style={{
          padding: 'clamp(3rem, 5vw, 8rem)',
          borderRadius: '40px', textAlign: 'center',
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)'
        }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Ready to Buy?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Speak with a Registered Real Estate Agent who will guide you through every step of the process.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <Link href="/consult" className="btn btn-primary" style={{ padding: '1.35rem 3.5rem', fontSize: '1.15rem' }}>
              Book Free Consultation
            </Link>
            <Link href="/plots-for-sale" className="btn btn-outline" style={{ padding: '1.35rem 3.5rem', fontSize: '1.15rem' }}>
              Browse Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
