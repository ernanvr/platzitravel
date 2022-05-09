import * as React from 'react';
import { FaHome, FaSearch, FaHeart, FaUserAlt } from 'react-icons/fa';
import Link from 'next/link';

const TabBar = (): JSX.Element => {
  return (
    <nav className='fixed bottom-0 flex items-center w-full h-24 text-gray-200 bg-white justify-evenly sm:hidden'>
      <Link href='#home'>
        <a>
          <FaHome className='hover:text-red-500 focus:text-red-500 hover:transition-all' size={24} />
        </a>
      </Link>
      <Link href='#search'>
        <a>
          <FaSearch className='hover:text-red-500 focus:text-red-500 hover:transition-all' size={24} />
        </a>
      </Link>
      <Link href=''>
        <a>
          <FaHeart className='hover:text-red-500 focus:text-red-500 hover:transition-all' size={24} />
        </a>
      </Link>
      <Link href=''>
        <a>
          <FaUserAlt className='hover:text-red-500 focus:text-red-500 hover:transition-all' size={24} />
        </a>
      </Link>
    </nav>
  );
};

export default TabBar;