import * as React from 'react'
import { FaHome, FaSearch, FaHeart, FaUserAlt } from 'react-icons/fa'
import Link from 'next/link'
import useContext from '../context/useAppContext'

const TabBar = (): JSX.Element => {
  const { state } = useContext()

  return (
    <nav className="fixed bottom-0 flex items-center w-full h-24 text-gray-300 bg-white dark:shadow-transparent justify-evenly sm:hidden dark:bg-gray-900 dark:backdrop-blur-3xl dark:opacity-90">
      <Link href="#home">
        <FaHome className={`transition-all `} size={24} />
      </Link>
      <Link href="#search">
        <FaSearch className={`transition-all `} size={24} />
      </Link>
      <Link href="/">
        <FaHeart className={`transition-all `} size={24} />
      </Link>
      <Link href="/">
        <FaUserAlt className={`transition-all `} size={24} />
      </Link>
    </nav>
  )
}

export default TabBar
