'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import MarvelCharacters from './Characters/page'
import Menu from '../components/Navbar'

const Home = () => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute='class' defaultTheme='dark'>
        <Menu />
        <MarvelCharacters />
      </NextThemesProvider>
    </NextUIProvider>
  )
}

export default Home
