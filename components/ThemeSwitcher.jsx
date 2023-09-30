import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className='flex justify-end items-end w-full h-8'>
      <span className='text-gray-500 mr-1'>Light</span>
      <label
        className={`${
          theme === 'dark' ? 'bg-white' : 'bg-black'
        } w-12 h-6 rounded-full p-1 flex items-center cursor-pointer transition-colors ease-in-out duration-300`}
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <div
          className={`${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-0'
          } w-5 h-5 rounded-full bg-slate-500 dark:bg-black shadow-md transform
            transition-transform ease-in-out duration-300`}
        ></div>
      </label>
      <span className='text-gray-500 ml-1'>Dark</span>
    </div>
  )
}
