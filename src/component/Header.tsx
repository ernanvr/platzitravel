import * as React from 'react';
import { HiMoon } from 'react-icons/hi';

const Header = (): JSX.Element => {
  return (
    <header className='justify-center hidden w-full md:flex md:items-center h-1/6 flex-column'>
      <nav className='flex flex-col justify-end w-full h-full'>
        <div className='w-0 h-10'>
          <HiMoon className='w-10 h-10 text-red-700'/>
        </div>
      </nav>
    </header>
  );
};

export default Header;
