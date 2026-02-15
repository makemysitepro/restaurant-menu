import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Special Food Menu',
  description: 'Restaurant menu with special offers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
