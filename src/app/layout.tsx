// src/app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Migración a Next.js + Tailwind',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
