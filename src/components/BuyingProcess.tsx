export default function BuyingProcess() {
  const steps = [
    {
      title: 'Property Selection',
      desc: 'Browse our portfolio of strictly vetted plots across Kenya\'s high-growth hubs.',
      icon: '01'
    },
    {
      title: 'Site Visit',
      desc: 'Tour the property with a senior agent to verify boundaries, access, and amenities.',
      icon: '02'
    },
    {
      title: 'Title Search',
      desc: 'Conduct an official search at the Ministry of Lands to verify ownership and encumbrances.',
      icon: '03'
    },
    {
      title: 'Sale Agreement',
      desc: 'Our legal team drafts the sale agreement for both parties to review and sign.',
      icon: '04'
    },
    {
      title: 'Stamp Duty & Fees',
      desc: 'Pay stamp duty (4% urban / 2% rural) and transfer fees through KRA iTax.',
      icon: '05'
    },
    {
      title: 'Title Transfer',
      desc: 'Documents are submitted to the Lands Registry and the title deed is registered in your name.',
      icon: '06'
    }
  ]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1.5rem' }}>
      {steps.map((step, idx) => (
        <div key={idx} className="glass" style={{ padding: '3rem 2rem', position: 'relative', overflow: 'hidden' }}>
          <div style={{ 
            position: 'absolute', 
            top: '-20px', 
            right: '-10px', 
            fontSize: '8rem', 
            fontWeight: '900', 
            color: 'rgba(212, 175, 55, 0.03)',
            zIndex: 0
          }}>
            {step.icon}
          </div>
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ 
              width: '40px', 
              height: '40px', 
              borderRadius: '50%', 
              background: 'var(--primary)', 
              color: '#000', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              fontWeight: '800',
              marginBottom: '1.5rem'
            }}>
              {step.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{step.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7' }}>{step.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
