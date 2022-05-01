import * as React from 'react';
import Image from 'next/image';
import { Picture } from '../types/global';

const GalleryPicture = (props: Picture): JSX.Element => {

  const { title, subtitle, image, index } = props;

  let imgContCondFormat = '';

  switch (index) {
    case 0:
      imgContCondFormat = 'sm:h-full sm:w-full sm:row-[span_8] sm:col-span-3';
      break;

    case 1:
      imgContCondFormat = 'sm:h-full sm:w-full sm:row-[span_10] sm:col-span-1';
      break;

    case 2:
      imgContCondFormat = 'sm:w-full sm:row-[span_5] sm:col-[span_2]';
      break;

    case 3:
      imgContCondFormat = 'sm:w-full sm:row-[span_5] sm:col-[span_2]';
      break;

    default:
      break;
  }

  return (
    <div className={`relative rounded-lg h-[30rem] ${imgContCondFormat}`}>
      <div className={'w-full h-full rounded-3xl '}>
        <Image src={image} alt={`${title} image`} layout='fill' className='rounded-3xl' objectFit='cover'/>
      </div>
      <h1 className='absolute mx-4 font-sans text-4xl font-bold text-white top-6'>{ title }</h1>
      <p className='absolute mx-4 font-sans text-2xl text-white top-16'>{subtitle}</p>
    </div>
  );
};

export default GalleryPicture;
