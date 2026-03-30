import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Landika Real Estate Agent',
    short_name: 'Landika',
    description: "Kenya's premier Real Estate Agent specializing in verified plots and land acquisitions.",
    start_url: '/',
    display: 'standalone',
    background_color: '#05070a',
    theme_color: '#d4af37',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
