import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Landika Real Estate Agent privacy policy. How we collect, use, and protect your personal data in compliance with the Kenya Data Protection Act 2019.',
  alternates: {
    canonical: 'https://landika.co.ke/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - Landika Real Estate Agent',
    description: 'How Landika collects, uses, and protects your personal data.',
    url: 'https://landika.co.ke/privacy',
  },
}

export default function PrivacyPage() {
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://landika.co.ke' },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://landika.co.ke/privacy' },
    ],
  }

  const sections = [
    {
      title: '1. Information We Collect',
      content: `We collect personal information that you voluntarily provide when using our services, including: name, email address, phone number, and investment preferences (via our consultation form); national ID or passport details (required for property transactions); KRA PIN (required for stamp duty processing); communication records (emails, WhatsApp messages, phone calls related to transactions). We also automatically collect non-personal data such as browser type, device information, IP address, and pages visited through standard web analytics.`,
    },
    {
      title: '2. How We Use Your Information',
      content: `We use your personal information to: process and facilitate property transactions on your behalf; conduct title searches and legal conveyancing; communicate with you about properties, services, and transaction updates; provide market intelligence and investment recommendations; comply with legal obligations under Kenyan law (including anti-money laundering regulations); improve our website and services. We will never use your personal information for purposes unrelated to our real estate agent services without your explicit consent.`,
    },
    {
      title: '3. Information Sharing',
      content: `We do not sell, rent, or trade your personal information to third parties. We may share your information with: conveyancing lawyers engaged to process your transaction; the Kenya Revenue Authority (KRA) for stamp duty processing; the Ministry of Lands for title search and transfer purposes; licensed surveyors conducting boundary verification; law enforcement or regulatory bodies when required by Kenyan law. All third parties who receive your data are bound by confidentiality obligations and may only use it for the specific purpose for which it was shared.`,
    },
    {
      title: '4. Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (SSL/TLS), secure storage systems, access controls limiting data access to authorized personnel only, and regular security reviews. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security of data transmitted to us online.`,
    },
    {
      title: '5. Cookies and Analytics',
      content: `Our website uses cookies and similar technologies to improve your browsing experience, analyze website traffic, and understand how visitors interact with our site. We use essential cookies (required for the website to function), analytics cookies (to understand visitor behavior and improve our site), and preference cookies (to remember your settings and choices). You can control cookies through your browser settings. Disabling cookies may affect some website functionality.`,
    },
    {
      title: '6. Your Rights',
      content: `Under the Kenya Data Protection Act 2019, you have the right to: access the personal data we hold about you; request correction of inaccurate or incomplete data; request deletion of your personal data (subject to legal retention requirements); object to processing of your data for specific purposes; withdraw consent for data processing at any time; lodge a complaint with the Office of the Data Protection Commissioner, Kenya. To exercise any of these rights, contact us at agent@landika.co.ke.`,
    },
    {
      title: '7. Data Retention',
      content: `We retain your personal data for as long as necessary to fulfill the purposes for which it was collected, including: active transaction data is retained for the duration of the transaction plus 7 years (as required by Kenyan tax and property law); consultation enquiries are retained for 2 years; website analytics data is retained for 26 months. After the retention period, data is securely deleted or anonymized.`,
    },
    {
      title: '8. Children\u2019s Privacy',
      content: `Our services are not directed at individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a minor, we will take steps to delete it promptly.`,
    },
    {
      title: '9. Changes to This Policy',
      content: `We may update this privacy policy from time to time. Changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically. Continued use of our services after changes are posted constitutes acceptance of the updated policy.`,
    },
    {
      title: '10. Contact Us',
      content: `For privacy-related questions, data access requests, or complaints, contact our Data Protection Officer at: Email: agent@landika.co.ke | Address: Westlands, Nairobi, Kenya | Phone: +254 700 000 000. You may also contact the Office of the Data Protection Commissioner, Kenya for complaints regarding data processing.`,
    },
  ]

  return (
    <div className="container" style={{ paddingTop: '12rem', paddingBottom: '8rem' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <nav style={{ marginBottom: '3rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
        <Link href="/" className="hover-gold">Home</Link>
        <span style={{ margin: '0 0.75rem', color: 'rgba(212,175,55,0.3)' }}>/</span>
        <span style={{ color: 'var(--primary)' }}>Privacy Policy</span>
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
            Privacy
          </span>
        </div>
        <h1 className="title-xl text-gradient" style={{ marginBottom: '2.5rem', lineHeight: '1.1' }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto' }}>
          Effective Date: March 2026. This policy explains how Landika collects, uses, and protects your personal data in compliance with the Kenya Data Protection Act 2019.
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
