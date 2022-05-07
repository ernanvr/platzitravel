import * as React from 'react';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import TabBar from './TabBar';

const Footer: React.FC = () => {
	return (
    <>
		<footer className='text-gray-300 bg-gray-50 border-y-[1px] border-gray-100'>
			<h1 className='mt-4 mb-4 text-3xl font-medium'>About us</h1>

      <div className='flex flex-col justify-start text-[1.4rem] leading-10'>
        <Link href='/'><a>Investors</a></Link>
        <Link href='/'><a>Jobs</a></Link>
        <Link href='/'><a>Privacy Policy</a></Link>
        <Link href='/'><a>Terms and Conditions</a></Link>
        <Link href='/'><a>Platzi Travel, Inc</a></Link>
        <Link href='/'><a>Follow us</a></Link>
      </div>
        <div className='flex justify-start mt-4 mb-28 sm:mb-4'>
          <FaTwitter size={20} className='mr-4' />
          <FaInstagram size={20}/>
        </div>
      <TabBar />
		</footer>
  </>
	);
};

export default Footer;
