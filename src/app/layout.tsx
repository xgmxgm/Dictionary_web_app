import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Dictionary app',
  description: 'Find the right words.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}