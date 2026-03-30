'use client'

import { useState } from 'react'
import PropertyCard from './PropertyCard'
import { Property } from '@/lib/data_layer'

interface Props {
  properties: Property[]
}

export default function FeaturedListings({ properties }: Props) {
  const [showAll, setShowAll] = useState(false)
  const initialCount = 4
  
  const displayedProperties = showAll ? properties : properties.slice(0, initialCount)

  return (
    <div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
        gap: '4rem' 
      }}>
        {displayedProperties.map((prop) => (
          <PropertyCard key={prop.id} property={prop} locationName="Kenya" />
        ))}
      </div>

      {/* Use ternary to avoid rendering pitfalls with && (rendering-conditional-render) */}
      {!showAll && properties.length > initialCount ? (
        <div style={{ textAlign: 'center', marginTop: '6rem' }}>
          <button
            onClick={() => setShowAll(true)}
            className="btn btn-primary"
            style={{ padding: '1.5rem 4rem', fontSize: '1.2rem' }}
          >
            More Listings
          </button>
        </div>
      ) : null}
    </div>
  )
}
