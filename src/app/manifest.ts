import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kalaa Iris',
    short_name: 'Kalaa Iris',
    description: 'Discover the captivating beauty of your iris with Kalaa Iris. We combine art, science, and technology to transform the unique patterns of your eye into breathtaking works of art.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000',
    theme_color: '#000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}