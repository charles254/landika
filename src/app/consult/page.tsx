'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ConsultPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: ''
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setStatus('success')
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (status === 'success') {
    return (
      <div className="container" style={{ paddingTop: '15rem', textAlign: 'center' }}>
        <div className="glass" style={{ padding: '6rem 4rem', maxWidth: '700px', margin: '0 auto', borderRadius: '40px' }}>
          <div style={{ fontSize: '5rem', marginBottom: '2rem' }}>✅</div>
          <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Request Received</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', lineHeight: '1.6', marginBottom: '4rem' }}>
            A Registered Real Estate Agent has been notified. We will review your requirements and reach out via {formData.phone} or {formData.email} within 24 hours.
          </p>
          <Link href="/" className="btn btn-primary" style={{ padding: '1.2rem 3rem' }}>
            Return to Portfolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container" style={{ paddingTop: '12rem', paddingBottom: '12rem' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <section style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <div style={{ 
            display: 'inline-block', 
            padding: '0.6rem 2rem', 
            background: 'rgba(212, 175, 55, 0.08)', 
            borderRadius: '40px', 
            color: 'var(--primary)',
            fontSize: '0.8rem',
            fontWeight: '800',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: '2.5rem',
            border: '1px solid rgba(212, 175, 55, 0.2)'
          }} className="animate-fade-in">
            Agency Consultation
          </div>
          <h1 className="title-xl text-gradient animate-fade-in" style={{ marginBottom: '2.5rem' }}>
            Begin Your <br /> Secure Investment
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.3rem', fontWeight: '300' }} className="animate-fade-in">
            Provide your details below, and our senior real estate agents will guide you through the verified land acquisition process.
          </p>
        </section>

        <form onSubmit={handleSubmit} className="glass animate-fade-in" style={{ padding: 'clamp(2rem, 4vw, 5rem)', border: '1px solid rgba(212, 175, 55, 0.15)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '2.5rem', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Full Name</label>
              <input 
                type="text" 
                name="name"
                required
                placeholder="e.g. John Doe"
                className="input-glass"
                value={formData.name}
                onChange={handleChange}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Email Address</label>
              <input 
                type="email" 
                name="email"
                required
                placeholder="john@example.com"
                className="input-glass"
                value={formData.email}
                onChange={handleChange}
                style={{ width: '100%' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '2.5rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Phone Number</label>
            <input 
              type="tel" 
              name="phone"
              required
              placeholder="+254 700 000 000"
              className="input-glass"
              value={formData.phone}
              onChange={handleChange}
              style={{ width: '100%' }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', marginBottom: '4rem' }}>
            <label style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Investment Interest / Description</label>
            <textarea 
              name="description"
              required
              placeholder="Tell us about the location, budget, or type of land you are looking for..."
              className="input-glass"
              rows={5}
              value={formData.description}
              onChange={handleChange}
              style={{ width: '100%', resize: 'none' }}
            />
          </div>

          <button 
            type="submit" 
            className="btn btn-primary" 
            disabled={status === 'submitting'}
            style={{ width: '100%', padding: '1.5rem', fontSize: '1.2rem' }}
          >
            {status === 'submitting' ? 'Processing Transaction...' : 'Submit Consultation Request'}
          </button>
        </form>
      </div>
    </div>
  )
}
