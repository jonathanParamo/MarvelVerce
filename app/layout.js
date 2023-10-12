'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { SnackbarProvider } from 'notistack'
import { useTheme } from 'next-themes'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import Menu from '../components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  const { theme, setTheme } = useTheme()

  return (
    <html lang='en'>
      <SnackbarProvider maxSnack={3}>
        <NextUIProvider>
          <NextThemesProvider attribute='class' defaultTheme='dark'>
            <body className={`${inter.className}`}>
              <header className='flex justify-between flex flex-col'>
                <h1 className='relative m-1 text-2xl md:text-4xl font-extrabold bg-red-700 text-white p-2 pl-6 rounded-full font-bold'>
                  MarvelVerce
                </h1>
                <Menu />
              </header>
                <main className={`text-foreground ${theme === 'dark' ? 'dark' : 'light'}-bg-background`}>
                  {children}
                </main>
              {/* Incluir el pie de página aquí si */}
            </body>
          </NextThemesProvider>
        </NextUIProvider>
      </SnackbarProvider>
    </html>
  )
}
