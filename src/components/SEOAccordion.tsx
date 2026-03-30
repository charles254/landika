'use client'
import { useState } from 'react'

interface FAQ {
  q: string;
  a: string;
}

export default function SEOAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {faqs.map((faq, idx) => (
        <div 
          key={idx} 
          className="glass" 
          style={{ 
            padding: '1.5rem 2rem', 
            cursor: 'pointer',
            borderColor: openIdx === idx ? 'var(--primary)' : 'rgba(212, 175, 55, 0.1)',
            transition: 'all 0.3s ease'
          }}
          onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: '1.1rem', color: openIdx === idx ? 'var(--primary)' : '#fff' }}>{faq.q}</h4>
            <span style={{ 
              fontSize: '1.5rem', 
              color: 'var(--primary)',
              transform: openIdx === idx ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s ease'
            }}>+</span>
          </div>
          {openIdx === idx && (
            <div style={{ 
              marginTop: '1.5rem', 
              color: 'var(--text-muted)', 
              lineHeight: '1.7',
              fontSize: '1rem',
              animation: 'fadeIn 0.4s ease'
            }}>
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
