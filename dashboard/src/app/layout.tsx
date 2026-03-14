import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Primis Dashboard',
  description: 'Control Plane for Primis-Inginium Systems',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
