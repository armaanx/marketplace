import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Market/Place',
  description: ' ',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='h-full' lang="en">
      <body className={cn('relative h-full font-sans antialiased', inter.className)}>
        <main className='relative flex flex-col min-h-screen'>
          <Navbar />
          <div className='flex-grow flex-1'>{children}</div>
        </main>
      </body>
    </html>
  )
}
