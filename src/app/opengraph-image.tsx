import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Landika - Premier Real Estate Agent in Kenya'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #05070a 0%, #0a1428 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '40px',
          }}
        >
          <svg width="64" height="64" viewBox="0 0 120 120" fill="none">
            <rect width="120" height="120" rx="24" fill="#0a1428" />
            <path d="M60 14 L102 35 L102 85 L60 106 L18 85 L18 35 Z" fill="none" stroke="#d4af37" strokeWidth="3" />
            <rect x="38" y="48" width="18" height="18" rx="2" fill="#d4af37" opacity="0.9" />
            <rect x="64" y="48" width="18" height="18" rx="2" fill="#d4af37" opacity="0.7" />
            <rect x="38" y="74" width="18" height="18" rx="2" fill="#d4af37" opacity="0.6" />
            <rect x="64" y="74" width="18" height="18" rx="2" fill="#d4af37" opacity="0.4" />
            <line x1="60" y1="20" x2="60" y2="44" stroke="#d4af37" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="60" cy="30" r="7" fill="none" stroke="#d4af37" strokeWidth="3" />
            <circle cx="60" cy="30" r="2.5" fill="#d4af37" />
          </svg>
          <div style={{ fontSize: '56px', fontWeight: 900, color: '#d4af37', letterSpacing: '-0.04em' }}>
            LANDIKA
          </div>
        </div>
        <div
          style={{
            fontSize: '36px',
            fontWeight: 700,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.3,
            marginBottom: '24px',
          }}
        >
          Premier Real Estate Agent in Kenya
        </div>
        <div
          style={{
            fontSize: '20px',
            color: '#a0aec0',
            textAlign: 'center',
            maxWidth: '700px',
          }}
        >
          Verified Plots &bull; Secure Title Transfers &bull; Expert Agent Services
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            fontSize: '16px',
            color: '#d4af37',
            fontWeight: 700,
            letterSpacing: '0.15em',
          }}
        >
          LANDIKA.CO.KE
        </div>
      </div>
    ),
    { ...size }
  )
}
