import * as React from 'react';
import { CardInfo } from '../types/global';
import Card from '../component/Card';

type Props = {
  cardsInfo: CardInfo[];
  carouselRef: React.RefObject<HTMLDivElement>;
}

const Carousel = (props: Props) => {

  const { cardsInfo, carouselRef } = props;

  const buildCarousel = (): JSX.Element[] => cardsInfo.map((cardsInfo, index) => <Card index={index} key={index} title={cardsInfo.title} subtitle={cardsInfo.subtitle} image={cardsInfo.image}/>);

  return (
    <div className='flex w-full mt-4 overflow-x-auto justify-left translate-all scroll-smooth sm:overflow-hidden' ref={carouselRef}>
      {buildCarousel()}
    </div>
  );
};

export default Carousel;
