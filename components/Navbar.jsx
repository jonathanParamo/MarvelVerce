'use client'

import React from 'react'
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem,
  NavbarMenuToggle, NavbarMenuItem, NavbarMenu
} from '@nextui-org/react'
import { useState } from 'react'
import { ThemeSwitcher } from './ThemeSwitcher'
import Link from 'next/link'

const links = [{
  id: 'ugrt',
  label: 'Home',
  route: '/'
}, {
  id: 'efgh',
  label: 'Comics',
  route: '/comics'
},{
  id: 'abcd',
  label: 'Characters',
  route: '/characters'
}, {
  id: 'ijkl',
  label: 'Creator',
  route: '/creators'
}, {
  id: 'mnop',
  label: 'Events',
  route: '/events'
}, {
  id: 'qrst',
  label: 'Series',
  route: '/series'
}, {
  id: 'uvwx',
  label: 'Stores',
  route: '/stores'
}]

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='w-full'>
      <div className='hidden md:flex'>
        <Navbar
          classNames={{
            item: [
              'flex',
              'relative',
              'h-full',
              'items-center',
              'data-[active=true]:after:content-[]',
              'data-[active=true]:after:absolute',
              'data-[active=true]:after:bottom-0',
              'data-[active=true]:after:left-0',
              'data-[active=true]:after:right-0',
              'data-[active=true]:after:h-[2px]',
              'data-[active=true]:after:rounded-[2px]',
              'data-[active=true]:after:bg-primary',
            ],
          }}
        >
          <NavbarBrand className='hidden md:flex'>
          </NavbarBrand>
          <NavbarContent className='hidden md:flex gap-4' justify='center'>
            {links.map(({ id, label, route }) => (
              <NavbarItem isActive={id} key={id}>
                <Link color='foreground' href={route} aria-current='page'>
                  {label}
                </Link>
              </NavbarItem>
            ))}
          </NavbarContent>

          <NavbarContent className='hidden md:flex' justify='end'>
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </div>


      <Navbar className={
        `md:hidden
        ${isMenuOpen && 'bg-opacity-30 bg-gray-800'}`}
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className='w-8 h-8 border border-solid border-black dark:border-white'
          />
          <NavbarBrand>
          </NavbarBrand>
          <NavbarMenu className='mt-[52px] bg-opacity-30 bg-gray-800'>
            {links.map(({ id, label, route }) => (
              <NavbarMenuItem isActive key={id}>
                <Link color='foreground' href={route} aria-current='page'>
                  {label}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>

          <NavbarContent className='md:hidden' justify='end'>
            <NavbarItem>
              <ThemeSwitcher />
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
      </Navbar>
    </div>
  )
}

export default Menu
