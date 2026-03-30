import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import WhatsAppButton from '@/components/WhatsAppButton'

export const metadata: Metadata = {
  title: 'Agent Services - Kenya',
  description: 'Professional real estate agent services in Kenya: title verification at Ardhi House, legal conveyancing, market intelligence & boundary surveys.',
  alternates: {
    canonical: 'https://landika.net/agent-services',
  },
  openGraph: {
    title: 'Agent Services - Kenya',
    description: 'Professional real estate agent services in Kenya: title verification at Ardhi House, legal conveyancing, market intelligence & boundary surveys.',
    url: 'https://landika.net/agent-services',
  },
}

export default function AgentServices() {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Landika Real Estate Agent',
    },
    serviceType: 'Real Estate Agent Services',
    areaServed: { '@type': 'Country', name: 'Kenya' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Agent Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Strategic Title Verification' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Legal Conveyancing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Market Intelligence' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Physical Boundary Verification' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Guided Site Visits' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Diaspora Representation' } },
      ],
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.net' },
      { '@type': 'ListItem', position: 2, name: 'Agent Services', item: 'https://landika.net/agent-services' },
    ],
  }

  const faqs = [
    {
      question: 'What is a title search and why is it important when buying land in Kenya?',
      answer: 'A title search (Green Card search) is conducted at the Ministry of Lands (Ardhi House) to verify the legal owner of a plot, check for encumbrances such as caveats or charges, and confirm the land is free from disputes. It is the most critical step before committing to any land purchase in Kenya.',
    },
    {
      question: 'How much does stamp duty cost in Kenya?',
      answer: 'Stamp duty in Kenya is 4% of the property value for urban areas and 2% for rural areas. This is a government tax paid during the transfer of property ownership and must be settled before the title deed can be transferred to the new owner.',
    },
    {
      question: 'How long does the land transfer process take in Kenya?',
      answer: 'The full land transfer process typically takes 30 to 90 days, depending on the complexity of the transaction, the speed of processing at the Lands Registry, and whether all documents are in order. Working with a registered agent can significantly accelerate this timeline.',
    },
    {
      question: 'Do I need a lawyer to buy land in Kenya?',
      answer: 'While not legally mandatory, it is strongly recommended to engage a lawyer for the conveyancing process. A lawyer drafts the sale agreement, conducts due diligence, handles stamp duty processing, and ensures the transfer is legally binding. At Landika, our legal team handles the entire process.',
    },
  ]

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const services = [
    {
      title: 'Strategic Title Verification',
      description: 'We perform rigorous GREEN CARD searches at the Ministry of Lands (Ardhi House) for every plot. Our agents ensure zero encumbrances before you commit.',
      icon: '🔍',
      details: ['Green Card Search', 'Historical Trace', 'Ownership Validation']
    },
    {
      title: 'Legal Conveyancing',
      description: 'Our expert legal team handles the entire Sale Agreement and Transfer process. We coordinate with lawyers to ensure a flawless transition of ownership.',
      icon: '⚖️',
      details: ['Sale Agreements', 'Transfer Documentation', 'Stamp Duty Processing']
    },
    {
      title: 'Market Intelligence',
      description: 'Access capital appreciation data and strategic investment locations. We guide you where the infrastructure growth is highest.',
      icon: '📈',
      details: ['Appreciation Projections', 'Infrastructure Mapping', 'Yield Analysis']
    },
    {
      title: 'Physical Boundary Verification',
      description: 'On-ground survey coordination to ensure beacon placement matches title maps. We provide physical site tours and perimeter checks.',
      icon: '📍',
      details: ['Beacon Verification', 'Topographical Surveys', 'Perimeter Fencing']
    },
    {
      title: 'Guided Site Visits',
      description: 'Free, daily site tours to all listed hubs led by senior agents. See the land, meet the neighbours, and assess the infrastructure first-hand.',
      icon: '🚗',
      details: ['Scheduled Tours', 'Photo & Video Reports', 'Neighbourhood Assessment']
    },
    {
      title: 'Diaspora Representation',
      description: 'Full agent representation for Kenyans abroad. We handle site visits, documentation, and title transfer on your behalf via Power of Attorney.',
      icon: '🌍',
      details: ['Power of Attorney', 'Virtual Tours', 'Secure Payments']
    }
  ]

  return (
    <div className="container" style={{ paddingTop: '12rem', paddingBottom: '12rem' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <nav style={{ marginBottom: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <Link href="/" className="hover-gold">Home</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <span style={{ color: 'var(--primary)' }}>Agent Services</span>
      </nav>

      <section style={{
        textAlign: 'center', 
        marginBottom: '10rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{ 
          display: 'inline-block', 
          padding: '0.6rem 2rem', 
          background: 'rgba(212, 175, 55, 0.08)', 
          borderRadius: '40px', 
          color: 'var(--primary)',
          fontSize: '0.8rem',
          fontWeight: '800',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '2rem',
          border: '1px solid rgba(212, 175, 55, 0.2)'
        }} className="animate-fade-in">
          Professional Agency Bureau
        </div>
        <h1 className="title-xl text-gradient animate-fade-in" style={{ 
          marginBottom: '3rem',
          maxWidth: '1200px',
          lineHeight: '1.1'
        }}>
          Expert-Led Land <br /> Acquisition Services
        </h1>
        <p style={{ 
          fontSize: '1.5rem', 
          color: 'var(--text-muted)', 
          maxWidth: '800px', 
          margin: '0 auto',
          lineHeight: '1.6',
          fontWeight: '300'
        }} className="animate-fade-in">
          Beyond listings, we provide the transactional security and legal infrastructure required for high-stake land investments in Kenya.
        </p>
      </section>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
        gap: '3rem' 
      }}>
        {services.map((service, i) => (
          <div key={i} className="glass glass-card glass-hover" style={{ padding: '3.5rem' }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '2.5rem' }}>{service.icon}</div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
              {service.description}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {service.details.map((detail, j) => (
                <span key={j} style={{ 
                  background: 'rgba(212, 175, 55, 0.1)', 
                  color: 'var(--primary)', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '10px',
                  fontSize: '0.8rem',
                  fontWeight: '700'
                }}>
                  {detail}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FAQ Section — targets People Also Ask */}
      <section style={{ marginTop: '10rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Common questions about our real estate agent services in Kenya.
          </p>
        </div>
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {faqs.map((faq, i) => (
            <div key={i} className="glass" style={{ padding: '2rem 2.5rem' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#fff' }}>{faq.question}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Guide Cross-Link */}
      <section style={{ marginTop: '6rem' }}>
        <div className="glass" style={{ padding: 'clamp(2rem, 4vw, 3rem)', textAlign: 'center', border: '1px solid rgba(212, 175, 55, 0.1)' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
            For a complete walkthrough of the land buying process, costs, and legal requirements:
          </p>
          <Link href="/guides/how-to-buy-land-in-kenya" className="btn btn-outline" style={{ padding: '1rem 2.5rem' }}>
            Read Our Complete Buying Guide →
          </Link>
        </div>
      </section>

      <section style={{ marginTop: '10rem' }}>
        <div className="glass" style={{
          padding: 'clamp(3rem, 5vw, 8rem)',
          borderRadius: '40px',
          textAlign: 'center',
          background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 70%)'
        }}>
          <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Ready to Transact?</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.4rem', marginBottom: '5rem', maxWidth: '700px', margin: '0 auto 5rem' }}>
            Book a consultation with a senior Registered Real Estate Agent today and secure your legacy with confidence.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <Link href="/consult" className="btn btn-primary" style={{ padding: '1.5rem 4rem', fontSize: '1.2rem' }}>
              Book Agency Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
