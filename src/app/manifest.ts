import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kalaa Iris',
    short_name: 'Kalaa Iris',
    description: 'Kalaa Iris – where art, science, engineering and emotion converge to celebrate the magic that lies within your gaze.',
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