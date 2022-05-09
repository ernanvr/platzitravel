import type { NextPage } from 'next';
import * as React from 'react';
import Layout from '../containers/Layout';
import SearchBar from '../component/SearchBar';
import { HiMoon } from 'react-icons/hi';
import PrimaryButton from '../component/PrimaryButton';
import Carousel from '../component/Carousel';
import Gallery from '../component/Gallery';
import { cardInfoArray, pictureInfoArray } from '../utils/dbVars';

const Home: NextPage = () => {

  return (
    <Layout>
				<section id='home' className='flex justify-center sm:mt-16 h-[50rem] md:h-[55rem] bg-cover bg-no-repeat bg-top lg:bg-left bg-sanFrancisco relative w-full'>
					<div className='absolute flex items-center justify-center w-24 h-12 bg-white rounded-3xl top-10 right-5 sm:hidden'>
						<HiMoon className='text-primary' size={24}/>
					</div>
					<SearchBar />
          <h1 className='absolute hidden text-5xl font-bold text-black w-[32rem] sm:inline top-60 left-24'>Find more locations like this</h1>
          <PrimaryButton content='Explore more' />
				</section>
				<section className='w-full mt-8' id='recomendations'>
          <h1 className='mx-8 text-3xl font-bold text-primary'>Our Recomendations</h1>
          <Carousel cardsInfo={cardInfoArray} />
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
