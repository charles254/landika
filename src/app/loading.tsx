export default function Loading() {
  return (
    <div className="container" style={{
      paddingTop: '16rem',
      paddingBottom: '12rem',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        border: '3px solid rgba(212, 175, 55, 0.15)',
        borderTopColor: 'var(--primary)',
        borderRadius: '50%',
        animation: 'spin 0.8s linear infinite',
      }} />
    </div>
  )
}
