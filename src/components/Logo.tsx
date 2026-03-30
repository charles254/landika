export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Landika logo"
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4af37" />
          <stop offset="50%" stopColor="#f9e8a5" />
          <stop offset="100%" stopColor="#d4af37" />
        </linearGradient>
        <linearGradient id="goldGradDark" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b8960c" />
          <stop offset="100%" stopColor="#d4af37" />
        </linearGradient>
      </defs>

      {/* Outer hexagonal shield shape */}
      <path
        d="M60 8 L108 32 L108 88 L60 112 L12 88 L12 32 Z"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="2.5"
      />

      {/* Inner plot grid — representing surveyed land parcels */}
      <rect x="36" y="44" width="20" height="20" rx="2" fill="url(#goldGrad)" opacity="0.9" />
      <rect x="64" y="44" width="20" height="20" rx="2" fill="url(#goldGradDark)" opacity="0.7" />
      <rect x="36" y="72" width="20" height="20" rx="2" fill="url(#goldGradDark)" opacity="0.6" />
      <rect x="64" y="72" width="20" height="20" rx="2" fill="url(#goldGrad)" opacity="0.4" />

      {/* Upward pin / location marker — the "L" of Landika */}
      <path
        d="M60 16 L60 40"
        stroke="url(#goldGrad)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="60" cy="28" r="7" fill="none" stroke="url(#goldGrad)" strokeWidth="2.5" />
      <circle cx="60" cy="28" r="2.5" fill="url(#goldGrad)" />
    </svg>
  )
}
