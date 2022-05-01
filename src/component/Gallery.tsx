import * as React from 'react';
import { Picture } from '../types/global';
import GalleryPicture from './Picture';

type Props = {
  picturesInfo: Picture[];
}

const Gallery = (props: Props): JSX.Element => {

  const { picturesInfo } = props;

  const buildGallery = (): JSX.Element[] => {
    return picturesInfo.map((picture, index) => {
      return (
        <GalleryPicture
          key={index}
          title={picture.title}
          subtitle={picture.subtitle}
          image={picture.image}
          index={index}
        />);
      });
    };

  return (

    <div className='mx-8 mt-4 grid gap-5 lg:mx-12 sm:mx-8 sm:grid-cols-3 sm:grid-rows-[repeat(18,5rem)]'>
      {buildGallery()}
    </div>
  );
};

export default Gallery;

