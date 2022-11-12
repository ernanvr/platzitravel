import * as React from 'react'
import Link from 'next/link'
import { FaInstagram, FaTwitter } from 'react-icons/fa'
import TabBar from './TabBar'

const Footer: React.FC = () => {
  return (
    <>
      <footer
        id="footer"
        className="text-gray-900 bg-gray-50 border-y-[1px] border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
      >
        <h1 className="mx-8 mt-4 mb-4 text-3xl font-medium">About us</h1>
        <div className="inline-flex mx-8 flex-col justify-start text-[1.4rem] leading-10 ">
          <Link href="/">Investors</Link>
          <Link href="/">Jobs</Link>
          <Link href="/">Privacy Policy</Link>
          <Link href="/">Terms and Conditions</Link>
          <Link href="/">Platzi Travel, Inc</Link>
          <Link href="/">Follow us</Link>
        </div>
        <div className="flex justify-start mx-8 mt-4 mb-28 sm:mb-4">
          <FaTwitter size={20} className="mr-4" />
          <FaInstagram size={20} />
        </div>
        <TabBar />
      </footer>
    </>
  )
}

export default Footer
