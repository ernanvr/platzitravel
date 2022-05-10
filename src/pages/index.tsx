import type { NextPage } from 'next';
import * as React from 'react';
import Layout from '../containers/Layout';
import SearchBar from '../component/SearchBar';
import { HiMoon } from 'react-icons/hi';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md';
import PrimaryButton from '../component/PrimaryButton';
import Carousel from '../component/Carousel';
import Gallery from '../component/Gallery';
import heroImage from '../public/img/sanFranciscoDesktop.jpg';
import Image from 'next/image';
import { cardInfoArray, pictureInfoArray } from '../utils/dbVars';

const Home: NextPage = () => {

  const useCarouselRef = React.createRef <HTMLDivElement>();
  const scrollRight = () => {
    if (useCarouselRef.current) {
      useCarouselRef.current.scrollLeft += 150;
      console.log('scrollWith: ', useCarouselRef.current.scrollWidth);
      console.log('scrollLeft: ', useCarouselRef.current.scrollLeft);
      console.log('scrolloffSetWith: ', useCarouselRef.current.offsetWidth);
      console.log('Windows scroll X: ', window.innerWidth);
    }

  };

  const scrollLeft = () => {
    if (useCarouselRef.current) {
      useCarouselRef.current.scrollLeft -= 150;
      console.log('scrollWith: ', useCarouselRef.current.scrollWidth);
      console.log('scrollLeft: ', useCarouselRef.current.scrollLeft);
      console.log('scrolloffSetWith: ', useCarouselRef.current.offsetWidth);
      console.log('Windows scroll X: ', window.innerWidth);
    }
  };

  return (
    <Layout>
				<section id='home' className='flex justify-center sm:mt-16 h-[50rem] md:h-[55rem] bg-cover relative w-full'>
          <div className={'w-full h-full'}>
            <Image src={heroImage} alt={'san Francisco hero image'} layout='fill' objectFit='cover'/>
          </div>
					<div className='absolute flex items-center justify-center w-24 h-12 bg-white rounded-3xl top-10 right-5 sm:hidden'>
						<HiMoon className='text-primary' size={24}/>
					</div>
					<SearchBar />
          <h1 className='absolute hidden text-5xl font-bold text-black w-[32rem] sm:inline top-60 left-24'>Find more locations like this</h1>
          <PrimaryButton content='Explore more' />
				</section>
				<section className='w-full mt-8' id='recomendations'>
          <div className='flex justify-between'>
            <h1 className='mx-8 text-3xl font-bold text-primary'>Our Recomendations</h1>
            <div className='justify-center hidden w-auto sm:flex'>
              <button className='inline-block w-10 mx-8 active:scale-75' onClick={scrollLeft}>
                <MdOutlineArrowBackIos className='w-8 h-8 text-gray-500'/>
              </button>
              <button className='inline-block w-10 mx-8 active:scale-75' onClick={scrollRight}>
                <MdOutlineArrowForwardIos className='w-8 h-8 text-gray-500'/>
              </button>
          </div>
          </div>
          <Carousel cardsInfo={cardInfoArray} carouselRef={useCarouselRef} />
        </section>
				<section className='w-full mt-8' id='trending'>
          <h1 className='mx-8 text-3xl font-bold text-primary'>Trending stays</h1>
          <Gallery picturesInfo={pictureInfoArray} />
        </section>
				<section className='w-full mt-4 font-semibold' id='faqs'>
          <h1 className='mx-8 my-4 text-3xl font-bold text-primary'> FAQs</h1>
          <h2 className='mx-8 my-4 text-2xl text-primary'>How can I pay?</h2>
          <p className='mx-8 my-4'>We accept VISA, Mastercard, American Express, Paypal and Binance</p>
          <h2 className='mx-8 my-4 text-2xl text-primary'>How much time before may I cancel reservation?</h2>
          <p className='mx-8 my-4'>Cancellation 24h before reservation has not any charges</p>
          <h2 className='mx-8 my-4 text-2xl text-primary'>Are there special discounts?</h2>
          <p className='mx-8 my-4'>Yes, we provide special discounts to our customers who visit us every year</p>
        </section>
    </Layout>
  );
};

export default Home;
