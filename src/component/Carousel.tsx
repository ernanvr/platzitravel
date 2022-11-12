import * as React from 'react'

import { CardDetails } from '../types/global'
import { Arrow } from '../types/ArrowEnum'
import Card from '../component/Card'
import CarouselArrowButton from './CarouselArrowButton'
import useCarouselLogic, {
  moveBack,
  moveNext,
  useCreateRef
} from '../utils/customHooks/useCarouselLogic'

type Props = {
  cardsInfo: CardDetails[]
}

const Carousel = (props: Props) => {
  const { cardsInfo } = props
  const qty = cardsInfo.length

  const buildCarousel = (): JSX.Element[] =>
    cardsInfo.map((cardsInfo, index) => (
      <Card
        index={index}
        key={index}
        title={cardsInfo.title}
        subtitle={cardsInfo.subtitle}
        image={cardsInfo.image}
        count={qty}
      />
    ))

  const {
    useCarouselRef,
    useCarouselLeftButtonRef,
    useCarouselRightButtonRef
  } = useCreateRef()

  useCarouselLogic({
    carousel: useCarouselRef,
    carouselLeftButton: useCarouselLeftButtonRef,
    carouselRightButton: useCarouselRightButtonRef
  }) // logic of useEffect of Carousel

  return (
    <div className="relative mx-8 my-8">
      <div
        className={
          'overflow-hidden whitespace-nowrap scroll-smooth first:ml-0 last:mr-0'
        }
        ref={useCarouselRef}
      >
        {buildCarousel()}
      </div>
      <div className="absolute top-0 left-0 right-0 flex justify-between bottom-2">
        <CarouselArrowButton
          parameters={{
            carousel: useCarouselRef,
            carouselLeftButton: useCarouselLeftButtonRef,
            carouselRightButton: useCarouselRightButtonRef
          }}
          buttonFunction={moveBack}
          typeOfButton={Arrow.Left}
          reference={useCarouselLeftButtonRef}
        />
        <CarouselArrowButton
          parameters={{
            carousel: useCarouselRef,
            carouselLeftButton: useCarouselLeftButtonRef,
            carouselRightButton: useCarouselRightButtonRef
          }}
          buttonFunction={moveNext}
          typeOfButton={Arrow.Right}
          reference={useCarouselRightButtonRef}
        />
      </div>
    </div>
  )
}

export default Carousel
