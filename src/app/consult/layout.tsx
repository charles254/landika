import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Free Consultation - Registered Real Estate Agent',
  description: 'Book a free consultation with a Registered Real Estate Agent in Kenya. Expert guidance on verified land acquisitions, title searches & transactions.',
  alternates: {
    canonical: 'https://landika.net/consult',
  },
  openGraph: {
    title: 'Book a Free Consultation - Registered Real Estate Agent',
    description: 'Book a free consultation with a Registered Real Estate Agent in Kenya. Expert guidance on verified land acquisitions, title searches & transactions.',
    url: 'https://landika.net/consult',
  },
}

export default function ConsultLayout({ children }: { children: React.ReactNode }) {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Landika Agent Consultation',
    url: 'https://landika.net/consult',
    mainEntity: {
      '@type': 'RealEstateAgent',
      name: 'Landika Real Estate Agent',
      url: 'https://landika.net',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  )
}
