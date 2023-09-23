'use client'

import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
        <body className={`${inter.className}`}>
          <header className='flex justify-between items-center p-4 h-12'>
            <h1 className='relative text-xs md:text-3xl font-extrabold rounded-lg'>
              MarvelVerce
            </h1>
          </header>
            <main className='dark text-foreground bg-background'>
              {children}
            </main>
          {/* Incluir el pie de página aquí si */}
        </body>
    </html>
  )
}
