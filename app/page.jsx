'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeSwitcher } from '../components/themeSwitcher'
import MarvelCharacters from './Characters/page'

const Home = () => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <ThemeSwitcher />
        <MarvelCharacters />
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default Home
