import * as React from 'react';
import { CardInfo } from '../types/global';
import Card from '../component/Card';
import useContext from '../context/useAppContext';

type Props = {
  cardsInfo: CardInfo[];
  useCarouselRef: React.RefObject<HTMLDivElement>;
}

const Carousel = (props: Props) => {

  const { state, changeState } = useContext();
  const { carouselEndScroll, carouselStartScroll } = state;

  const { cardsInfo, useCarouselRef } = props;

  const handleScroll = () => {
    if (useCarouselRef.current) {
      const { scrollLeft, scrollWidth, offsetWidth } = useCarouselRef.current;
      scrollLeft > 0 && !carouselStartScroll ?
        changeState({
          ...state,
          carouselStartScroll: true,
        }) :
      scrollLeft === 0 && carouselStartScroll ?
        changeState({
          ...state,
          carouselStartScroll: false,
        }) :
        false;
      scrollLeft + offsetWidth === scrollWidth && carouselEndScroll ?
        changeState({
          ...state,
          carouselEndScroll: false
          }) :
      scrollLeft + offsetWidth !== scrollWidth && !carouselEndScroll ?
        changeState({
          ...state,
          carouselEndScroll: true
          }) :
          false;
    }
  };

  const buildCarousel = (): JSX.Element[] => cardsInfo.map((cardsInfo, index) => <Card index={index} key={index} title={cardsInfo.title} subtitle={cardsInfo.subtitle} image={cardsInfo.image}/>);

  return (
    <div className='flex w-full mt-4 overflow-x-auto justify-left translate-all scroll-smooth sm:overflow-hidden' ref={useCarouselRef} onScroll={handleScroll}>
      {buildCarousel()}
    </div>
  );
};

export default Carousel;
