import * as React from 'react';
import { HiMoon, HiSearch, HiUser } from 'react-icons/hi';
import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <header className='fixed top-0 z-10 hidden w-full h-16 bg-white sm:flex md:items-center flex-column'>
      <nav className='flex items-center justify-between w-full h-full mx-8'>
        <div>
          <Link href='/'><a className='font-semibold text-primary'>Platzi Travel</a></Link>
        </div>
        <div className='flex items-center justify-center'>
          <Link href='/'><a className='mx-8 font-semibold text-primary'>Locations</a></Link>
          <Link href='/'><a className='mx-8 font-semibold text-primary'>Stays</a></Link>
          <Link href='/'><a className='mx-8 font-semibold text-primary'>FAQs</a></Link>
          <Link href='/'><a className='mx-8 font-semibold text-primary'>About us</a></Link>
        </div>
          <div className='flex justify-center'>
            <div className='h-10'>
              <HiSearch className='w-10 h-10 mx-4 text-red-700'/>
            </div>
            <div className='h-10'>
              <HiMoon className='w-10 h-10 mx-4 text-red-700'/>
            </div>
            <div className='h-10'>
              <HiUser className='w-10 h-10 mx-4 text-red-700'/>
            </div>
          </div>
      </nav>
    </header>
  );
};

export default Header;
