'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeSwitcher } from '../components/themeSwitcher'

const Home = () => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <ThemeSwitcher />
        <p>hola desde home</p>
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default Home
