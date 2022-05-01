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
				<section className='flex justify-center h-[50rem] bg-cover bg-sanFrancisco relative w-full'>
					<div className='absolute flex items-center justify-center w-24 h-12 bg-white rounded-3xl top-10 right-5'>
						<HiMoon className='text-primary' size={24}/>
					</div>
					<SearchBar />
          <PrimaryButton content='Explore more' />
				</section>
				<section className='w-full mt-8'>
          <h1 className='mx-8 text-3xl font-bold text-primary'>Our Recomendations</h1>
          <Carousel cardsInfo={cardInfoArray} />
        </section>
				<section className='mt-8'>
          <h1 className='mx-8 text-3xl font-bold text-primary'>Trending stays</h1>
          <Gallery picturesInfo={pictureInfoArray} />
        </section>
				<section className='mt-4 font-semibold'>
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
