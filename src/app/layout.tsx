import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import Link from 'next/link'
import Logo from '@/components/Logo'
import MobileNav from '@/components/MobileNav'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://landika.net'),
  title: {
    default: 'Landika | Premier Real Estate Agent in Kenya',
    template: '%s | Landika Real Estate Agent'
  },
  description: 'Kenya\'s premier Real Estate Agent. Verified plots, transparent title searches, and secure agent-led land acquisitions in Nairobi, Kiambu & beyond.',
  alternates: {
    canonical: 'https://landika.net'
  },
  openGraph: {
    type: 'website',
    locale: 'en_KE',
    siteName: 'Landika Real Estate Agent',
    title: 'Landika | Premier Real Estate Agent in Kenya',
    description: 'Kenya\'s premier Real Estate Agent. Verified plots, transparent title searches, and secure agent-led land acquisitions.',
    url: 'https://landika.net',
    images: [{
      url: 'https://landika.net/opengraph-image',
      width: 1200,
      height: 630,
      alt: 'Landika Real Estate Agent - Verified Land for Sale in Kenya',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Landika | Premier Real Estate Agent in Kenya',
    description: 'Kenya\'s premier Real Estate Agent. Verified plots, transparent title searches, and secure agent-led land acquisitions.',
    images: ['https://landika.net/opengraph-image'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: 'Landika Real Estate Agent',
    url: 'https://landika.net',
    logo: 'https://landika.net/icon.svg',
    description: 'EARB-registered real estate agent specializing in verified land transactions across Kenya. Title searches, legal conveyancing, and agent-led site visits.',
    foundingDate: '2024',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: '10-50' },
    knowsAbout: ['Real Estate', 'Land Acquisition', 'Title Verification', 'Conveyancing', 'Kenya Property Law'],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Professional License',
      name: 'Estate Agents Registration Board (EARB) License',
      recognizedBy: { '@type': 'Organization', name: 'Estate Agents Registration Board', url: 'https://earb.go.ke' }
    },
    sameAs: ['https://landika.net/about'],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+254-700-000-000',
      contactType: 'Sales Agent',
      areaServed: 'KE',
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Nairobi',
      addressRegion: 'Westlands',
      addressCountry: 'KE'
    }
  }

  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <div className="radial-glow"></div>
        <nav className="glass" style={{
          position: 'fixed',
          top: '1.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'calc(100% - 3rem)',
          maxWidth: 'var(--max-width)',
          padding: '1.1rem 2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          zIndex: 1000,
          borderRadius: '20px',
          borderColor: 'rgba(212, 175, 55, 0.15)',
          background: 'rgba(5, 7, 10, 0.8)'
        }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Logo size={36} />
            <div style={{ fontSize: '1.8rem', fontWeight: '900', color: 'var(--primary)', letterSpacing: '-0.06em' }}>
              LANDIKA
            </div>
          </Link>
          <div className="desktop-nav-links" style={{ display: 'flex', gap: '3.5rem', fontWeight: '600', fontSize: '0.9rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            <Link href="/plots-for-sale" className="hover-gold">Our Portfolio</Link>
            <Link href="/plots-for-sale" className="hover-gold">Locations</Link>
            <Link href="/agent-services" className="hover-gold">Agent Services</Link>
            <Link href="/guides" className="hover-gold">Guides</Link>
          </div>

          <Link href="/consult" className="btn btn-primary desktop-nav-cta" style={{ padding: '0.9rem 2rem' }}>Consult Agent</Link>
          <MobileNav />
        </nav>
        <main>{children}</main>
        <footer style={{ marginTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.03)', background: 'linear-gradient(to top, rgba(5, 7, 10, 0.95) 0%, rgba(10, 20, 40, 0.3) 100%)' }}>
          {/* Footer CTA Bar */}
          <div className="container" style={{ paddingBlock: '3rem 0' }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem',
              padding: '2rem 2.5rem', borderRadius: '20px',
              background: 'rgba(212, 175, 55, 0.04)', border: '1px solid rgba(212, 175, 55, 0.1)',
            }}>
              <div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.4rem', color: '#fff' }}>Ready to secure your land?</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Book a free consultation with a registered agent today.</p>
              </div>
              <Link href="/consult" className="btn btn-primary" style={{ padding: '1rem 2.5rem', whiteSpace: 'nowrap' }}>
                Book Free Consultation
              </Link>
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="container" style={{ paddingBlock: '3rem 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))', gap: '2.5rem 2rem' }}>
              {/* Brand */}
              <div style={{ gridColumn: 'span 1' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                  <Logo size={28} />
                  <span style={{ color: 'var(--primary)', fontSize: '1.4rem', fontWeight: '900', letterSpacing: '-0.04em' }}>LANDIKA</span>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: '1.8', maxWidth: '280px' }}>
                  Kenya&apos;s registered Real Estate Agent. Verified plots, transparent title searches, and secure transactions.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 style={{ marginBottom: '1.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary)', fontWeight: '800' }}>Quick Links</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {[
                    { label: 'Browse Portfolio', href: '/plots-for-sale' },
                    { label: 'Agent Services', href: '/agent-services' },
                    { label: 'About Us', href: '/about' },
                    { label: 'Consult Agent', href: '/consult' },
                  ].map((link) => (
                    <li key={link.href}><Link href={link.href} className="hover-gold" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{link.label}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Guides */}
              <div>
                <h4 style={{ marginBottom: '1.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary)', fontWeight: '800' }}>Guides</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {[
                    { label: 'How to Buy Land', href: '/guides/how-to-buy-land-in-kenya' },
                    { label: 'Title Deed Search', href: '/guides/title-deed-search-kenya' },
                    { label: 'Stamp Duty', href: '/guides/stamp-duty-kenya' },
                    { label: 'Avoid Land Fraud', href: '/guides/avoid-land-fraud-kenya' },
                    { label: 'Best Places to Buy', href: '/guides/best-places-to-buy-land-in-kenya' },
                    { label: 'Diaspora Guide', href: '/guides/buy-land-in-kenya-from-abroad' },
                  ].map((link) => (
                    <li key={link.href}><Link href={link.href} className="hover-gold" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{link.label}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Locations */}
              <div>
                <h4 style={{ marginBottom: '1.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary)', fontWeight: '800' }}>Top Locations</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  {[
                    { label: 'Ruiru, Kiambu', href: '/plots-for-sale/kiambu/ruiru' },
                    { label: 'Kitengela, Kajiado', href: '/plots-for-sale/kajiado/kitengela' },
                    { label: 'Juja, Kiambu', href: '/plots-for-sale/kiambu/juja' },
                    { label: 'Joska, Machakos', href: '/plots-for-sale/machakos/joska' },
                    { label: 'Naivasha, Nakuru', href: '/plots-for-sale/nakuru/naivasha' },
                  ].map((link) => (
                    <li key={link.href}><Link href={link.href} className="hover-gold" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{link.label}</Link></li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 style={{ marginBottom: '1.5rem', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--primary)', fontWeight: '800' }}>Contact</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                  <div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Office</div>
                    <p style={{ color: 'rgba(255,255,255,0.8)' }}>Westlands, Nairobi, KE</p>
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Email</div>
                    <p style={{ color: 'var(--primary)' }}>agent@landika.net</p>
                  </div>
                  <div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>Phone</div>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600' }}>+254 700 000 000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="container" style={{ paddingBlock: '2.5rem 3rem' }}>
            <div style={{
              paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.04)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem',
              color: 'var(--text-muted)', fontSize: '0.8rem'
            }}>
              <p>&copy; {new Date().getFullYear()} Landika Real Estate Agent. All rights reserved.</p>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <Link href="/about" className="hover-gold" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>About</Link>
                <Link href="/terms" className="hover-gold" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Terms</Link>
                <Link href="/privacy" className="hover-gold" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Privacy</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
