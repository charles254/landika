import Link from 'next/link'
import Image from 'next/image'
import WhatsAppButton from './WhatsAppButton'
import { Property } from '@/lib/data_layer'

interface PropertyCardProps {
  property: Property
  locationName: string
}

export default function PropertyCard({ property, locationName }: PropertyCardProps) {
  return (
    <div className="glass glass-card glass-hover" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', borderColor: 'rgba(212, 175, 55, 0.1)' }}>
      <div className="img-container" style={{ height: '280px', position: 'relative' }}>
        <Image 
          src={property.images[0]} 
          alt={`Verified ${property.title} for sale in ${locationName}, Kenya - Landika Real Estate Agent`}
          fill
          className="img-hover"
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {property.verificationStatus === 'verified' ? (
          <div style={{
            position: 'absolute', 
            top: '1.25rem', 
            right: '1.25rem', 
            background: 'rgba(5, 7, 10, 0.8)',
            backdropFilter: 'blur(10px)',
            color: 'var(--primary)',
            padding: '0.5rem 1rem',
            borderRadius: '12px',
            fontSize: '0.7rem',
            fontWeight: '800',
            border: '1px solid var(--primary)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            ✓ Agent Verified
          </div>
        ) : null}
      </div>
      
      <div style={{ padding: '2.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
          <h3 style={{ fontSize: '1.4rem', color: 'var(--foreground)', lineHeight: '1.3' }}>{property.title}</h3>
        </div>
        
        <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem', color: 'var(--text-muted)', fontSize: '0.95rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📏 {property.size}</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>📍 {locationName}</span>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.03)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.3rem' }}>Market Entry</div>
              <div style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--primary)' }}>
                KES {(property.price / 1000000).toFixed(2)}M
              </div>
            </div>
            
            <WhatsAppButton 
              phoneNumber="+254725942927" 
              message={`Hello Landika Agent, I am interested in property: ${property.title} in ${locationName}.`}
              className="btn-primary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

