import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container" style={{ paddingTop: '16rem', paddingBottom: '12rem', textAlign: 'center' }}>
      <div style={{ fontSize: '8rem', fontWeight: '900', color: 'var(--primary)', opacity: 0.2, marginBottom: '1rem' }}>404</div>
      <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Property Not Found</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
        The listing you are looking for may have been sold or does not exist in our portfolio.
      </p>
      <Link href="/" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
        Return Home
      </Link>
    </div>
  )
}
