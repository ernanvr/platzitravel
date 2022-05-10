import * as React from 'react';
import { HiMoon, HiSearch, HiUser } from 'react-icons/hi';
import Link from 'next/link';

const Header = (): JSX.Element => {

  return (
    <header className='fixed top-0 z-20 hidden w-full h-16 text-xl bg-white transition-all md:text-2xl sm:flex md:items-center flex-column'>
      <nav className='flex items-center justify-between w-full h-full mx-8 '>
        <div>
          <Link href='/'><a className='font-semibold transition-all active:border-b-2 active:border-red-500 text-primary'>Platzi Travel</a></Link>
        </div>
        <div className='flex items-center justify-center'>
          <Link href='#recomendations'><a className='mx-8 font-semibold transition-all sm:mx-4 text-primary active:border-b-2 active:border-red-500'>Locations</a></Link>
          <Link href='#trending'><a className='mx-8 font-semibold transition-all sm:mx-4 text-primary active:border-b-2 active:border-red-500'>Stays</a></Link>
          <Link href='#faqs'><a className='mx-8 font-semibold transition-all sm:mx-4 text-primary active:border-b-2 active:border-red-500'>FAQs</a></Link>
          <Link href='#footer'><a className='mx-8 font-semibold transition-all sm:mx-4 text-primary active:border-b-2 active:border-red-500'>About us</a></Link>
        </div>
          <div className='flex justify-center'>
            <div className='w-8 h-8 mx-4 text-red-700 md:w-10 md:h-10 active:border-b-2 active:border-red-500 transition-all'>
              <Link href='/'>
                <a>
                  <HiSearch className='w-full h-full'/>
                </a>
              </Link>
            </div>
            <div className='w-8 h-8 mx-4 text-red-700 md:w-10 md:h-10 active:border-b-2 active:border-red-500 transition-all' >
              <Link href='/'>
                <a>
                  <HiMoon className='w-full h-full'/>
                </a>
              </Link>
            </div>
              <div className='w-8 h-8 mx-4 text-red-700 md:w-10 md:h-10 active:border-b-2 active:border-red-500 transition-all'>
                <Link href='/'>
                  <a>
                    <HiUser className='w-full h-full'/>
                  </a>
                </Link>
              </div>
          </div>
      </nav>
    </header>
  );
};

export default Header;
