'use client'
import { useState } from 'react'

export default function LandCalculators() {
  const [activeTab, setActiveTab] = useState<'stamp' | 'installment'>('stamp')
  
  // Stamp Duty State
  const [propertyValue, setPropertyValue] = useState<number>(1000000)
  const [locationType, setLocationType] = useState<'urban' | 'rural'>('urban')
  
  // Installment State
  const [totalPrice, setTotalPrice] = useState<number>(1000000)
  const [deposit, setDeposit] = useState<number>(300000)
  const [months, setMonths] = useState<number>(6)

  const calcStampDuty = () => {
    const rate = locationType === 'urban' ? 0.04 : 0.02
    return propertyValue * rate
  }

  const calcMonthlyInstallment = () => {
    const balance = totalPrice - deposit
    return balance / months
  }

  return (
    <div className="glass" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '3rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
        <button 
          onClick={() => setActiveTab('stamp')}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: activeTab === 'stamp' ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: '700',
            fontSize: '1.1rem',
            cursor: 'pointer',
            borderBottom: activeTab === 'stamp' ? '2px solid var(--primary)' : 'none',
            paddingBottom: '1rem'
          }}
        >
          Stamp Duty (KE Admin)
        </button>
        <button 
          onClick={() => setActiveTab('installment')}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: activeTab === 'installment' ? 'var(--primary)' : 'var(--text-muted)',
            fontWeight: '700',
            fontSize: '1.1rem',
            cursor: 'pointer',
            borderBottom: activeTab === 'installment' ? '2px solid var(--primary)' : 'none',
            paddingBottom: '1rem'
          }}
        >
          Installment Planner
        </button>
      </div>

      {activeTab === 'stamp' ? (
        <div className="animate-fade-in">
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Property Value (KES)</label>
            <input 
              type="number" 
              className="input-glass" 
              style={{ width: '100%' }}
              value={propertyValue}
              onChange={(e) => setPropertyValue(Number(e.target.value))}
            />
          </div>
          <div style={{ marginBottom: '2.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Location Category</label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button 
                onClick={() => setLocationType('urban')}
                style={{ 
                  flex: 1, 
                  padding: '1rem', 
                  borderRadius: '10px', 
                  border: '1px solid', 
                  borderColor: locationType === 'urban' ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                  background: locationType === 'urban' ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                  color: locationType === 'urban' ? 'var(--primary)' : 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                Urban (4%)
              </button>
              <button 
                onClick={() => setLocationType('rural')}
                style={{ 
                  flex: 1, 
                  padding: '1rem', 
                  borderRadius: '10px', 
                  border: '1px solid', 
                  borderColor: locationType === 'rural' ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                  background: locationType === 'rural' ? 'rgba(212, 175, 55, 0.1)' : 'transparent',
                  color: locationType === 'rural' ? 'var(--primary)' : 'var(--text-muted)',
                  cursor: 'pointer'
                }}
              >
                Rural (2%)
              </button>
            </div>
          </div>
          <div className="glass" style={{ padding: '2rem', textAlign: 'center', background: 'rgba(212, 175, 55, 0.05)' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Estimated Stamp Duty</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)' }}>KES {calcStampDuty().toLocaleString()}</div>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Purchase Price (KES)</label>
              <input 
                type="number" 
                className="input-glass" 
                style={{ width: '100%' }}
                value={totalPrice}
                onChange={(e) => setTotalPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Initial Deposit (KES)</label>
              <input 
                type="number" 
                className="input-glass" 
                style={{ width: '100%' }}
                value={deposit}
                onChange={(e) => setDeposit(Number(e.target.value))}
              />
            </div>
          </div>
          <div style={{ marginBottom: '2.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.8rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Payment Period (Months)</label>
            <input 
              type="range" 
              min="1" 
              max="24" 
              className="range-gold"
              style={{ width: '100%', accentColor: 'var(--primary)' }}
              value={months}
              onChange={(e) => setMonths(Number(e.target.value))}
            />
            <div style={{ textAlign: 'center', marginTop: '0.5rem', fontWeight: '700', color: 'var(--primary)' }}>{months} Months</div>
          </div>
          <div className="glass" style={{ padding: '2rem', textAlign: 'center', background: 'rgba(212, 175, 55, 0.05)' }}>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>Monthly Installment</div>
            <div style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)' }}>KES {calcMonthlyInstallment().toLocaleString()}</div>
          </div>
        </div>
      )}
    </div>
  )
}
