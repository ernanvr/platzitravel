import * as React from 'react';
import { HiSearch } from 'react-icons/hi';

const SearchBar = (): JSX.Element => {
  return (
    <div className='flex items-center justify-center w-4/5 h-20 bg-white rounded-full mt-36'>
      <HiSearch
        className='text-red-700'
        size={20}
      />
      <input
        type='text'
        placeholder='San Francisco'
        className='items-center w-1/3 px-1 text-lg rounded-lg outline-none xs:text-2xl focus:w-3/4 h-3/4 focus:placeholder:opacity-0'
      />
    </div>
  );
};

export default SearchBar;
