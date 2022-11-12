import * as React from 'react'
import { HiMoon, HiSearch, HiUser } from 'react-icons/hi'
import { BsFillSunFill } from 'react-icons/bs'
import Link from 'next/link'
import useContext from '../context/useAppContext'
import { toggleDarkMode } from '../utils/changeThemeFunction'

const Header = (): JSX.Element => {
  const { state, changeState } = useContext()
  const changeTheme = () => {
    toggleDarkMode({ state, changeState })
  }

  return (
    <header
      className={
        'fixed top-0 z-20 hidden w-full h-16 text-xl bg-white dark:bg-gray-900 transition md:text-2xl sm:flex md:items-center sm:flex-column dark:text-white'
      }
    >
      <nav className="flex items-center justify-between w-full h-full mx-8 dark:text-white ">
        <div>
          <Link href="/">Platzi Travel</Link>
        </div>
        <div className="flex items-center justify-center dark:text-white">
          <Link href="#recomendations">Locations</Link>
          <Link href="#trending">Stays</Link>
          <Link href="#faqs">FAQs</Link>
          <Link href="#footer">About us</Link>
        </div>
        <div className="flex justify-center">
          <div
            className={`w-8 h-8 mx-4 text-red-700 md:w-10 md:h-10 transition-all  dark:text-white`}
          >
            <Link href="/">
              <HiSearch className="w-full h-full" />
            </Link>
          </div>
          {state.theme === '' ? (
            <div
              className={`w-8 h-8 mx-4 text-red-700 md:w-10 md:h-10 transition-all dark:text-white`}
            >
              <HiMoon
                className="w-full h-full cursor-pointer"
                onClick={changeTheme}
              />
            </div>
          ) : (
            <div
              className={`w-8 h-8 mx-4 text-red-700 md:w-10 md:h-10 transition-all  dark:text-white`}
            >
              <BsFillSunFill
                className="w-full h-full cursor-pointer"
                onClick={changeTheme}
              />
            </div>
          )}
          <div
            className={`w-8 h-8 mx-4 text-red-700 md:w-10 md:h-10 transition-all dark:text-white`}
          >
            <Link href="/">
              <HiUser className="w-full h-full" />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
