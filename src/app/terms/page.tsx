import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and conditions for using Landika Real Estate Agent services in Kenya. Read our service terms, liability limitations, and transaction policies.',
  alternates: {
    canonical: 'https://landika.net/terms',
  },
  openGraph: {
    title: 'Terms and Conditions - Landika Real Estate Agent',
    description: 'Terms and conditions for Landika real estate agent services in Kenya.',
    url: 'https://landika.net/terms',
  },
}

export default function TermsPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.net' },
      { '@type': 'ListItem', position: 2, name: 'Terms and Conditions', item: 'https://landika.net/terms' },
    ],
  }

  const sections = [
    {
      title: '1. Definitions',
      content: `"Landika," "we," "our," or "us" refers to Landika Real Estate Agent, a registered real estate agency operating in Kenya. "Client," "you," or "your" refers to any individual or entity using our services. "Services" refers to all real estate agent services offered by Landika, including property listing, title verification, conveyancing coordination, market intelligence, site visits, and diaspora representation. "Property" refers to any land, plot, or real estate listed or transacted through Landika.`,
    },
    {
      title: '2. Scope of Services',
      content: `Landika acts as a registered real estate agent facilitating land transactions in Kenya. Our services include but are not limited to: property listing and marketing, title deed verification at the Ministry of Lands, coordination of legal conveyancing, stamp duty and transfer processing, physical site visits and boundary verification, market analysis and investment advisory, and diaspora buyer representation. We are an intermediary agent — we do not own the properties listed on our platform unless explicitly stated.`,
    },
    {
      title: '3. Property Verification',
      content: `We conduct title searches at the Ministry of Lands for all properties in our portfolio. However, a title search reflects the status at the time of the search and does not guarantee against future encumbrances, government acquisitions, or changes in ownership status. Clients are advised to engage their own independent legal counsel for additional due diligence. While we exercise professional care in verifying properties, Landika does not guarantee the accuracy of information provided by third-party sellers, county governments, or the Lands Registry.`,
    },
    {
      title: '4. Client Responsibilities',
      content: `Clients are responsible for: providing accurate personal information for transaction processing, conducting their own independent due diligence in addition to our verification, ensuring they have the legal capacity and financial means to complete a transaction, obtaining necessary approvals (e.g., spousal consent, Land Control Board consent for agricultural land), and paying all applicable taxes, fees, and charges associated with the transaction including stamp duty, legal fees, and land rates.`,
    },
    {
      title: '5. Payments and Fees',
      content: `All property prices listed on our platform are indicative and subject to negotiation between buyer and seller. Agent service fees, where applicable, will be disclosed upfront before any engagement. Payments for property purchases should be made through traceable banking channels only. Landika does not accept cash payments or payments to personal mobile money accounts. All payments are subject to applicable Kenyan tax laws.`,
    },
    {
      title: '6. Limitation of Liability',
      content: `To the maximum extent permitted by Kenyan law, Landika shall not be liable for: losses arising from reliance on information provided by third-party sellers, delays in processing at the Lands Registry or government offices, changes in property value after purchase, disputes between buyers and sellers that arise after title transfer, any consequential, indirect, or incidental damages arising from our services. Our total liability for any claim shall not exceed the service fees paid by the client for the specific transaction in question.`,
    },
    {
      title: '7. Intellectual Property',
      content: `All content on the Landika website — including text, images, logos, design, and code — is the property of Landika Real Estate Agent and is protected under Kenyan intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written consent.`,
    },
    {
      title: '8. Dispute Resolution',
      content: `Any disputes arising from or related to these terms or our services shall be resolved through negotiation in good faith. If negotiation fails, the dispute shall be referred to mediation under the rules of the Chartered Institute of Arbitrators (Kenya Branch). If mediation fails, the dispute shall be referred to arbitration in Nairobi, Kenya. These terms are governed by the laws of the Republic of Kenya.`,
    },
    {
      title: '9. Modifications',
      content: `Landika reserves the right to modify these terms at any time. Changes will be posted on this page with an updated effective date. Continued use of our services after changes are posted constitutes acceptance of the modified terms.`,
    },
    {
      title: '10. Contact',
      content: `For questions about these terms, contact us at agent@landika.net or visit our office at Westlands, Nairobi, Kenya.`,
    },
  ]

  return (
    <div className="container" style={{ paddingTop: '12rem', paddingBottom: '8rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav style={{ marginBottom: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <Link href="/" className="hover-gold">Home</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <span style={{ color: 'var(--primary)' }}>Terms and Conditions</span>
      </nav>

      <section style={{ textAlign: 'center', marginBottom: '5rem', padding: 0 }}>
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{
            display: 'inline-block', padding: '0.6rem 2rem',
            background: 'rgba(212, 175, 55, 0.08)', borderRadius: '40px',
            color: 'var(--primary)', fontSize: '0.8rem', fontWeight: '800',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }}>
            Legal
          </span>
        </div>
        <h1 className="title-xl text-gradient" style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>
          Terms and Conditions
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Effective Date: March 2026. Please read these terms carefully before using our services.
        </p>
      </section>

      <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {sections.map((section) => (
          <section key={section.title} style={{ padding: 0 }}>
            <h2 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: '#fff' }}>{section.title}</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1rem' }}>{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  )
}
