import type { NextPage } from 'next'
import * as React from 'react'
import Image from 'next/image'
import { HiMoon } from 'react-icons/hi'

import Layout from '../containers/Layout'
import SearchBar from '../component/SearchBar'
import { BsFillSunFill } from 'react-icons/bs'
import PrimaryButton from '../component/PrimaryButton'
import Carousel from '../component/Carousel'
import Gallery from '../component/Gallery'
import heroImage from '../public/img/sanFranciscoDesktop.jpg'
import { cardInfoArray, pictureInfoArray } from '../utils/dbVars'
import useContext from '../context/useAppContext'
import { toggleDarkMode } from '../utils/changeThemeFunction'

const Home: NextPage = () => {
  const globalAppState = useContext()
  const { state, changeState } = globalAppState

  const changeTheme = () => {
    toggleDarkMode({ state, changeState })
  }

  return (
    <Layout>
      <section
        id="home"
        className="flex justify-center sm:mt-16 h-[50rem] md:h-[55rem] bg-cover relative w-full dark:text-white"
      >
        <div className={'w-full h-full relative'}>
          <Image
            src={heroImage}
            alt={'san Francisco hero image'}
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
        <div className="absolute flex items-center justify-center w-24 h-12 transition-all bg-white rounded-3xl top-10 right-5 sm:hidden dark:bg-gray-800">
          {state.theme === '' ? (
            <HiMoon className="text-primary" size={24} onClick={changeTheme} />
          ) : (
            <BsFillSunFill
              className="text-primary dark:text-white"
              size={24}
              onClick={changeTheme}
            />
          )}
        </div>
        <SearchBar />
        <h1 className="absolute hidden text-5xl font-bold text-black w-[32rem] sm:inline top-60 left-24">
          Find more locations like this
        </h1>
        <PrimaryButton content="Explore more" />
      </section>
      <section className={'w-full mt-8  dark:text-white'} id="recomendations">
        <div className="flex justify-between">
          <h1
            className={'mx-8 text-3xl font-bold text-primary dark:text-white'}
          >
            Our Recomendations
          </h1>
        </div>
        <Carousel cardsInfo={cardInfoArray} />
      </section>
      <section className={'w-full mt-8  dark:text-white'} id="trending">
        <h1 className="mx-8 text-3xl font-bold text-primary dark:text-blue dark:text-white">
          Trending stays
        </h1>
        <Gallery picturesInfo={pictureInfoArray} />
      </section>
      <section
        className={'w-full mt-4 font-semibold  dark:text-white'}
        id="faqs"
      >
        <h1
          className={
            'mx-8 my-4 text-3xl font-bold text-primary dark:text-white'
          }
        >
          {' '}
          FAQs
        </h1>
        <h2 className={'mx-8 my-4 text-2xl text-primary dark:text-white'}>
          How can I pay?
        </h2>
        <p className={'mx-8 my-4 dark:text-gray-400'}>
          We accept VISA, Mastercard, American Express, Paypal and Binance
        </p>
        <h2 className={'mx-8 my-4 text-2xl text-primary dark:text-white'}>
          How much time before may I cancel reservation?
        </h2>
        <p className={'mx-8 my-4 dark:text-gray-400'}>
          Cancellation 24h before reservation has not any charges
        </p>
        <h2 className={'mx-8 my-4 text-2xl text-primary dark:text-white'}>
          Are there special discounts?
        </h2>
        <p className={'mx-8 my-4 dark:text-gray-400'}>
          Yes, we provide special discounts to our customers who visit us every
          year
        </p>
      </section>
    </Layout>
  )
}

export default Home
