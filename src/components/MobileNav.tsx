'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className="mobile-nav-toggle"
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem',
          minHeight: '48px',
          minWidth: '48px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round">
          {open ? (
            <>
              <line x1="6" y1="6" x2="18" y2="18" />
              <line x1="6" y1="18" x2="18" y2="6" />
            </>
          ) : (
            <>
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div
          className="mobile-nav-overlay"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(5, 7, 10, 0.95)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2.5rem',
          }}
          onClick={() => setOpen(false)}
        >
          <Link href="/plots-for-sale" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Our Portfolio
          </Link>
          <Link href="/plots-for-sale" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Locations
          </Link>
          <Link href="/agent-services" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Agent Services
          </Link>
          <Link href="/guides" style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--foreground)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Guides
          </Link>
          <Link href="/consult" className="btn btn-primary" style={{ padding: '1.2rem 3rem', marginTop: '1rem' }}>
            Consult Agent
          </Link>
        </div>
      )}
    </>
  )
}
