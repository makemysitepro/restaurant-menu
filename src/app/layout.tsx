import type { Metadata } from 'next'
import '../styles/fonts.scss'
import '../styles/globals.scss'

export const metadata: Metadata = {
  title: 'Restaurant QR Menu UI Design',
  description: 'Modern restaurant menu with QR code ordering',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
