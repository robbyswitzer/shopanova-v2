import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopanova — The Shopify Growth Program',
  description: 'Join 600+ Shopify founders inside Bloom — the self-directed growth program with expert playbooks, weekly coaching calls, and a community built to help you scale your store predictably.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
