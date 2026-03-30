'use client'

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="container" style={{ paddingTop: '16rem', paddingBottom: '12rem', textAlign: 'center' }}>
      <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>⚠</div>
      <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Something Went Wrong</h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '500px', margin: '0 auto 3rem' }}>
        An unexpected error occurred. Please try again.
      </p>
      <button onClick={reset} className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
        Try Again
      </button>
    </div>
  )
}
