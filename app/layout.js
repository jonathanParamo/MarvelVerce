'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { SnackbarProvider } from 'notistack'
import { useTheme } from 'next-themes'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const { theme, setTheme } = useTheme()
  return (
    <html lang='en'>
      <SnackbarProvider maxSnack={3}>
        <body className={`${inter.className}`}>
          <header className='flex justify-between items-center p-4 h-12'>
            <h1 className='relative mt-2 text-xs md:text-2xl font-extrabold bg-red-700 text-white p-2 rounded-full font-bold'>
              MarvelVerce
            </h1>
          </header>
            <main className={`text-foreground ${theme === 'dark' ? 'dark' : 'light'}-bg-background`}>
              {children}
            </main>
          {/* Incluir el pie de página aquí si */}
        </body>
      </SnackbarProvider>
    </html>
  )
}
