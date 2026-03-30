import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import BuyingProcess from '@/components/BuyingProcess'
import { getPropertiesByLocation } from '@/lib/data_layer'
import FeaturedListings from '@/components/FeaturedListings'

// Lazy-load heavy client component below the fold (bundle-dynamic-imports)
const LandCalculators = dynamic(() => import('@/components/LandCalculators'), {
  loading: () => <div style={{ minHeight: '400px' }} />
})

// Hoist static data outside component to avoid re-creation each render (rendering-hoist-jsx)
const TRUST_STATS = [
  { value: '500+', label: 'Plots Sold' },
  { value: '2,000+', label: 'Locations Listed' },
  { value: '100%', label: 'Title Verified' },
]

const STRATEGIC_LOCATIONS = [
  { name: 'Ruiru', county: 'Kiambu', slug: 'kiambu/ruiru', tag: 'Top Pick', price: 'From KES 2.5M', growth: '12-18% p.a.' },
  { name: 'Kitengela', county: 'Kajiado', slug: 'kajiado/kitengela', tag: 'High Growth', price: 'From KES 800K', growth: '10-15% p.a.' },
  { name: 'Juja', county: 'Kiambu', slug: 'kiambu/juja', tag: 'University Hub', price: 'From KES 1.5M', growth: '12-16% p.a.' },
  { name: 'Joska', county: 'Machakos', slug: 'machakos/joska', tag: 'Affordable', price: 'From KES 500K', growth: '15-20% p.a.' },
  { name: 'Naivasha', county: 'Nakuru', slug: 'nakuru/naivasha', tag: 'SGR Corridor', price: 'From KES 1.2M', growth: '12-18% p.a.' },
  { name: 'Syokimau', county: 'Machakos', slug: 'machakos/syokimau', tag: 'SGR Terminus', price: 'From KES 2M', growth: '10-14% p.a.' },
]

const GUIDES = [
  { title: 'How to Buy Land in Kenya', desc: 'Complete step-by-step process, costs, and pitfalls to avoid.', href: '/guides/how-to-buy-land-in-kenya', badge: 'Start Here', time: '12 min' },
  { title: 'Title Deed Search', desc: 'How to verify ownership at the Ministry of Lands before paying.', href: '/guides/title-deed-search-kenya', badge: 'Essential', time: '7 min' },
  { title: 'Avoid Land Fraud', desc: 'Common scams, red flags, and the due diligence checklist.', href: '/guides/avoid-land-fraud-kenya', badge: 'Protection', time: '9 min' },
  { title: 'Stamp Duty Calculator', desc: 'Rates, exemptions, and a free interactive calculator.', href: '/guides/stamp-duty-kenya', badge: 'Calculator', time: '6 min' },
  { title: 'Best Places to Buy', desc: 'Top 10 investment locations with prices and growth rates.', href: '/guides/best-places-to-buy-land-in-kenya', badge: 'Investment', time: '10 min' },
  { title: 'Buy from Abroad', desc: 'Diaspora guide: agent representation, payments, and legal steps.', href: '/guides/buy-land-in-kenya-from-abroad', badge: 'Diaspora', time: '8 min' },
]

const WHY_LANDIKA = [
  { title: 'Verified Title Deeds', desc: 'Every property undergoes an official search at the Ministry of Lands before listing.' },
  { title: 'Zero Middleman Fees', desc: 'Deal directly with the agency. No hidden commissions or brokerage layers.' },
  { title: 'Guided Site Tours', desc: 'Free, daily site visits to all featured hubs with senior agents.' },
  { title: 'Post-Sale Support', desc: 'From fencing to architectural consultation, we stay with you after transfer.' },
]

const CALCULATOR_FEATURES = [
  'Accurate Kenyan Stamp Duty Rates',
  'Flexible Installment Calculations',
  'Zero Hidden Fee Projections',
]

export default async function Home() {
  // Limit to 8 properties — avoid serializing 25 full objects to client (server-serialization)
  const featuredProperties = await getPropertiesByLocation('ruiru', 8)

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Landika Real Estate Agent',
    url: 'https://landika.net',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://landika.net/plots-for-sale?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <div className="container" style={{ position: 'relative' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* ===== HERO ===== */}
      <div style={{
        position: 'relative',
        borderRadius: '32px',
        overflow: 'hidden',
        marginTop: 'clamp(6rem, 10vw, 8rem)',
        marginBottom: 'clamp(3rem, 5vw, 5rem)',
      }}>
        {/* Hero Background Image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image
            src="/assets/hero-land.jpg"
            alt="Aerial view of subdivided land plots in Kenya — verified real estate investment opportunities"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
            sizes="(max-width: 768px) 100vw, 800px"
            priority
            fetchPriority="high"
            quality={40}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(5, 7, 10, 0.78) 0%, rgba(5, 7, 10, 0.65) 50%, rgba(5, 7, 10, 0.88) 100%)',
          }} />
        </div>

        {/* Hero Content */}
        <div style={{
          position: 'relative', zIndex: 1,
          padding: 'clamp(3rem, 5vw, 5rem) clamp(2rem, 4vw, 4rem)',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.8rem',
            background: 'rgba(212, 175, 55, 0.12)',
            borderRadius: '40px',
            color: 'var(--primary)',
            fontSize: '0.8rem',
            fontWeight: '800',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
            border: '1px solid rgba(212, 175, 55, 0.25)',
            backdropFilter: 'blur(10px)',
          }} className="animate-fade-in">
            Registered Real Estate Agent — Kenya
          </div>
          <h1 className="title-xl text-gradient animate-fade-in" style={{ marginBottom: '1.25rem', lineHeight: '1.05' }}>
            Secure Your Legacy <br /> in Verified Kenyan Land
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
            color: 'rgba(255, 255, 255, 0.75)',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            lineHeight: '1.6',
            fontWeight: '300'
          }} className="animate-fade-in">
            Expert-led acquisition of prime plots with verified title deeds. We handle the legal complexities — you build your future.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '2rem' }} className="animate-fade-in">
            <Link href="/plots-for-sale" className="btn btn-primary" style={{ padding: '1.25rem 3rem', fontSize: '1.05rem' }}>
              Browse Portfolio
            </Link>
            <Link href="/consult" className="btn btn-outline" style={{ padding: '1.25rem 3rem', fontSize: '1.05rem' }}>
              Consult Agent
            </Link>
          </div>

          {/* Trust Metrics */}
          <div style={{
            display: 'inline-flex', justifyContent: 'center', gap: 'clamp(2rem, 5vw, 4rem)', flexWrap: 'wrap',
            padding: '1.5rem 3rem', borderRadius: '20px',
            background: 'rgba(5, 7, 10, 0.5)', backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
          }} className="animate-fade-in">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: '800', color: 'var(--primary)', lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: '600' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== FEATURED LISTINGS ===== */}
      <section style={{ padding: 0, paddingBlock: 'clamp(4rem, 8vw, 8rem) 0', borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', flexWrap: 'wrap', gap: '2rem' }}>
          <div>
            <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Selected Properties</div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.75rem' }}>Newly Verified Listings</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '500px', lineHeight: '1.7' }}>Each listing has undergone a rigorous 5-point legal and physical verification process.</p>
          </div>
          <Link href="/plots-for-sale" className="btn btn-outline" style={{ whiteSpace: 'nowrap' }}>Explore All Portfolios</Link>
        </div>
        <FeaturedListings properties={featuredProperties} />
      </section>

      {/* ===== BUYING PROCESS ===== */}
      <section style={{ padding: 0, paddingBlock: 'clamp(5rem, 10vw, 8rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>How It Works</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.25rem' }}>Transparent Land Acquisition</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
            A streamlined, multi-step journey from property selection to title deed registration.
          </p>
        </div>
        <BuyingProcess />
      </section>

      {/* ===== STRATEGIC HUBS ===== */}
      <section style={{ padding: 0, paddingBlock: 'clamp(4rem, 8vw, 8rem)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Investment Hubs</div>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.25rem' }}>Strategic Locations</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.7' }}>
            High-growth regions with the strongest infrastructure momentum and capital appreciation.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
          {STRATEGIC_LOCATIONS.map((loc) => (
            <Link key={loc.name} href={`/plots-for-sale/${loc.slug}`} className="glass glass-card glass-hover" style={{ padding: '2.5rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ padding: '0.3rem 0.8rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '6px', color: 'var(--primary)', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{loc.tag}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{loc.county}</span>
              </div>
              <h3 style={{ fontSize: '1.8rem', color: '#fff' }}>{loc.name}</h3>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{loc.price}</span>
                <span style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '700' }}>{loc.growth}</span>
              </div>
              <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                View Portfolio →
              </div>
            </Link>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/guides/best-places-to-buy-land-in-kenya" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.95rem' }}>
            See all 10 top locations →
          </Link>
        </div>
      </section>

      {/* ===== CALCULATOR ===== */}
      <section style={{
        padding: 0,
        paddingBlock: 'clamp(4rem, 8vw, 6rem)',
      }}>
        <div className="glass" style={{
          padding: 'clamp(2.5rem, 5vw, 5rem) clamp(1.5rem, 4vw, 4rem)',
          borderRadius: '32px',
          background: 'linear-gradient(135deg, rgba(10, 20, 40, 0.5) 0%, rgba(10, 20, 40, 0.2) 100%)',
          border: '1px solid rgba(212, 175, 55, 0.08)',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Investment Tools</div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '1.5rem', lineHeight: '1.15' }}>Plan Your <br /> Investment</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                Estimate stamp duty, transfer costs, and flexible payment plans with our free calculators.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {CALCULATOR_FEATURES.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />
                    <span style={{ fontWeight: '500', fontSize: '0.95rem', color: 'rgba(255,255,255,0.85)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <LandCalculators />
          </div>
        </div>
      </section>

      {/* ===== GUIDES ===== */}
      <section style={{ padding: 0, paddingBlock: 'clamp(4rem, 8vw, 8rem)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Expert Resources</div>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>Land Buying Guides</h2>
          </div>
          <Link href="/guides" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.95rem', whiteSpace: 'nowrap' }}>
            View all 10 guides →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))', gap: '1.5rem' }}>
          {GUIDES.map((guide) => (
            <Link key={guide.href} href={guide.href} className="glass glass-card glass-hover" style={{ padding: '2rem 2.25rem', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <span style={{ padding: '0.3rem 0.8rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '6px', color: 'var(--primary)', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{guide.badge}</span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{guide.time}</span>
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#fff', lineHeight: '1.3' }}>{guide.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.9rem', marginBottom: '1.5rem', flex: 1 }}>{guide.desc}</p>
              <div style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem' }}>Read Guide →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ===== WHY LANDIKA ===== */}
      <section style={{ padding: 0, paddingBlock: 'clamp(4rem, 8vw, 8rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: 'clamp(2rem, 5vw, 5rem)', alignItems: 'center' }}>
          <div style={{
            height: 'clamp(350px, 50vw, 550px)',
            borderRadius: '32px',
            position: 'relative',
            overflow: 'hidden',
            border: '1px solid rgba(212, 175, 55, 0.15)'
          }}>
            <Image
              src="/assets/most_trusted_agent_2024.png"
              alt="Certified Real Estate Agent Landika - Most Trusted Agent"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--background) 0%, transparent 50%)' }} />
            <div className="glass" style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', padding: '1.25rem 1.75rem', borderRadius: '16px' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--primary)' }}>100%</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '0.1em' }}>Title Verified</div>
            </div>
          </div>

          <div>
            <div style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1rem' }}>Why Landika</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: '2.5rem', lineHeight: '1.15' }}>Why Transact <br /> Through Landika?</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {WHY_LANDIKA.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '10px',
                    background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'var(--primary)', fontSize: '0.85rem', fontWeight: '800', flexShrink: 0
                  }}>0{i + 1}</div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.4rem', color: '#fff' }}>{item.title}</h4>
                    <p style={{ color: 'var(--text-muted)', lineHeight: '1.65', fontSize: '0.95rem' }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ padding: 0, paddingBlock: 'clamp(4rem, 8vw, 8rem)' }}>
        <div className="glass" style={{
          padding: 'clamp(3rem, 6vw, 6rem) clamp(2rem, 5vw, 5rem)',
          borderRadius: '32px',
          textAlign: 'center',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(212, 175, 55, 0.06) 0%, transparent 60%)',
          border: '1px solid rgba(212, 175, 55, 0.1)',
        }}>
          <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
            Join 500+ Secure <br /> Land Owners
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.3rem)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem', fontWeight: '300', lineHeight: '1.7' }}>
            Speak directly with a senior Real Estate Agent and secure your future in the Kenyan soil.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <Link href="/consult" className="btn btn-primary" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem' }}>
              Book Free Consultation
            </Link>
            <Link href="/plots-for-sale" className="btn btn-outline" style={{ padding: '1.25rem 3.5rem', fontSize: '1.1rem' }}>
              Browse Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
