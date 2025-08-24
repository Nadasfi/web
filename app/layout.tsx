import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nadas.fi - Hyperliquid DeFi Automation Platform',
  description: 'Secure, non-custodial DeFi automation platform for Hyperliquid testnet. Experience the future of automated trading without compromising control.',
  keywords: 'DeFi, Hyperliquid, automation, trading, blockchain, cryptocurrency',
  authors: [{ name: 'Nadas.fi Team' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Nadas.fi - Hyperliquid DeFi Automation Platform',
    description: 'Secure, non-custodial DeFi automation platform for Hyperliquid testnet.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nadas.fi - Hyperliquid DeFi Automation Platform',
    description: 'Secure, non-custodial DeFi automation platform for Hyperliquid testnet.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
