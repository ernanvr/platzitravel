import * as React from 'react';
import { FaHome, FaSearch, FaHeart, FaUserAlt } from 'react-icons/fa';

const TabBar = (): JSX.Element => {
  return (
    <nav className='fixed bottom-0 flex items-center w-full h-24 text-gray-200 bg-white justify-evenly sm:hidden'>
      <FaHome className='hover:text-red-500 focus:text-red-500 hover:transition-all' size={24} />
      <FaSearch className='hover:text-red-500 focus:text-red-500 hover:transition-all' size={24} />
      <FaHeart className='hover:text-red-500 focus:text-red-500 hover:transition-all' size={24} />
      <FaUserAlt className='hover:text-red-500 focus:text-red-500 hover:transition-all' size={24} />
    </nav>
  );
};

export default TabBar;
