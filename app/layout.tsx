import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Personal Portfolio - BIGDANDEV',
  description: 'My Work Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"
    className='scroll-smooth'>
      <body>
        <Navbar />
       <main className='relative overflow-hidden
        sm:p-6 md:py-10 md:px-8'>
        {children}
        </main>
       <Footer />
      </body>
    </html>
  )
}
