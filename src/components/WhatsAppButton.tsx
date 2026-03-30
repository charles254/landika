'use client'

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function WhatsAppButton({ phoneNumber, message, className, style }: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <button 
      onClick={handleClick} 
      className={`btn ${className}`}
      style={{ backgroundColor: '#25D366', color: '#fff', border: 'none', ...style }}
    >
      💬 Chat on WhatsApp
    </button>
  );
}
