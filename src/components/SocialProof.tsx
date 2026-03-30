'use client'

import { useState, useEffect, useCallback } from 'react'

const SOCIAL_PROOF_DATA = [
  { name: 'James M.', city: 'Nairobi', action: 'bought a plot in', location: 'Ruiru', time: '2 hours ago' },
  { name: 'Faith W.', city: 'Mombasa', action: 'booked a site visit to', location: 'Kitengela', time: '3 hours ago' },
  { name: 'Peter O.', city: 'Diaspora (UK)', action: 'secured land in', location: 'Joska', time: 'yesterday' },
  { name: 'Grace N.', city: 'Nakuru', action: 'completed transfer in', location: 'Naivasha', time: '1 day ago' },
  { name: 'Kevin K.', city: 'Nairobi', action: 'bought 2 plots in', location: 'Juja', time: '2 days ago' },
  { name: 'Mary A.', city: 'Kisumu', action: 'booked a site visit to', location: 'Syokimau', time: '3 days ago' },
  { name: 'David M.', city: 'Diaspora (US)', action: 'secured a plot in', location: 'Ruiru', time: '4 days ago' },
  { name: 'Alice J.', city: 'Nairobi', action: 'bought a plot in', location: 'Kamulu', time: '5 days ago' },
  { name: 'Samuel T.', city: 'Eldoret', action: 'booked a site visit to', location: 'Kitengela', time: 'last week' },
  { name: 'Esther K.', city: 'Mombasa', action: 'completed transfer in', location: 'Joska', time: 'last week' },
  { name: 'Brian W.', city: 'Nairobi', action: 'secured 2 plots in', location: 'Malaa', time: '6 days ago' },
  { name: 'Joyce M.', city: 'Diaspora (UAE)', action: 'bought a plot in', location: 'Naivasha', time: '2 days ago' },
  { name: 'Charles K.', city: 'Thika', action: 'booked a site visit to', location: 'Juja', time: 'just now' },
  { name: 'Winnie O.', city: 'Nairobi', action: 'secured land in', location: 'Kangundo Road', time: '5 hours ago' },
  { name: 'John N.', city: 'Nakuru', action: 'completed transfer in', location: 'Ruiru', time: '3 days ago' },
  { name: 'Angela W.', city: 'Diaspora (Canada)', action: 'bought a plot in', location: 'Kitengela', time: '1 day ago' },
  { name: 'Michael O.', city: 'Nairobi', action: 'booked a site visit to', location: 'Rongai', time: '8 hours ago' },
  { name: 'Lucy M.', city: 'Kisumu', action: 'secured a plot in', location: 'Syokimau', time: '4 days ago' },
  { name: 'Patrick N.', city: 'Nairobi', action: 'bought 3 plots in', location: 'Joska', time: 'last week' },
  { name: 'Catherine A.', city: 'Diaspora (Germany)', action: 'completed transfer in', location: 'Juja', time: '5 days ago' },
]

export default function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const [paused, setPaused] = useState(false)

  const showNext = useCallback(() => {
    if (dismissed || paused) return
    setVisible(true)

    const hideTimer = setTimeout(() => {
      setVisible(false)
    }, 5000)

    return () => clearTimeout(hideTimer)
  }, [dismissed, paused])

  useEffect(() => {
    if (dismissed) return

    // Delay first notification by 5s
    const initialDelay = setTimeout(() => {
      showNext()
    }, 5000)

    return () => clearTimeout(initialDelay)
  }, [dismissed, showNext])

  useEffect(() => {
    if (dismissed) return

    // After each hide, wait 12s then show next
    if (!visible) {
      const nextTimer = setTimeout(() => {
        setCurrentIndex(prev => (prev + 1) % SOCIAL_PROOF_DATA.length)
        showNext()
      }, 12000)

      return () => clearTimeout(nextTimer)
    }
  }, [visible, dismissed, showNext])

  if (dismissed) return null

  const entry = SOCIAL_PROOF_DATA[currentIndex]
  const initial = entry.name.charAt(0)

  return (
    <div
      className={`social-proof-toast ${visible ? 'social-proof-show' : 'social-proof-hide'}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '2rem',
        zIndex: 997,
        maxWidth: '360px',
        padding: '1rem 1.25rem',
        borderRadius: '16px',
        background: 'rgba(5, 7, 10, 0.9)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(212, 175, 55, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.85rem',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Avatar */}
      <div style={{
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        background: 'rgba(212, 175, 55, 0.15)',
        border: '1px solid rgba(212, 175, 55, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--primary)',
        fontWeight: '800',
        fontSize: '1rem',
        flexShrink: 0,
      }}>
        {initial}
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.4' }}>
          <strong style={{ color: '#fff' }}>{entry.name}</strong>
          {' from '}
          <span style={{ color: 'var(--primary)' }}>{entry.city}</span>
          {' '}
          {entry.action}
          {' '}
          <strong style={{ color: '#fff' }}>{entry.location}</strong>
        </div>
        <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {entry.time}
        </div>
      </div>

      {/* Dismiss */}
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          cursor: 'pointer',
          padding: '0.25rem',
          fontSize: '1rem',
          lineHeight: 1,
          flexShrink: 0,
        }}
      >
        &times;
      </button>
    </div>
  )
}
