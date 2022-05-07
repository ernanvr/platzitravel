import * as React from 'react';
import Image from 'next/image';
import { CardInfo } from '../types/global';

const Card = (props: CardInfo) => {

  const { index, title, subtitle, image } = props;

  const cardsBgTheme = index % 2 === 0 ? 'bg-secondary' : 'bg-white';
  const cardsFontTheme = index % 2 === 0 ? 'text-white' : 'text-tertiary';

  return (
    <div className='min-w-[15.4rem] min-h-[18.7rem] mx-4 shadow-md mb-8 my-2 sm:min-h-[25.7rem] sm:min-w-[22.4rem] '>
      <div className='w-full h-1/2 rounded-2xl'>
        <Image src={image} alt={`${title} image`} layout='responsive' className='rounded-t-xl' />
      </div>
      <div className={`flex flex-col items-left justify-center ${cardsBgTheme} rounded-b-xl h-1/2`}>
        <h1 className={`font-semibold text-1xl ml-4 ${cardsFontTheme}`}>{title}</h1>
        <p className={`text-lg ml-4 ${cardsFontTheme}`}>{subtitle}</p>
      </div>
    </div>
  );
};

export default Card;
