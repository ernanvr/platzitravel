import * as React from 'react'
import { CardInfo } from '../types/global'
import { Arrow } from '../types/ArrowEnum'
import Card from '../component/Card'
import CarouselArrowButton from './CarouselArrowButton'
import useCarouselLogic from '../utils/customHooks/useCarouselLogic'

type Props = {
  cardsInfo: CardInfo[]
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

  const useCarouselRef: React.RefObject<HTMLDivElement> =
    React.useRef<HTMLDivElement>(null)
  const useCarouselLeftButtonRef: React.RefObject<HTMLDivElement> =
    React.useRef<HTMLDivElement>(null)
  const useCarouselRightButtonRef: React.RefObject<HTMLDivElement> =
    React.useRef<HTMLDivElement>(null)

  const carousel = useCarouselRef.current
  const leftButton = useCarouselLeftButtonRef.current
  const rightButton = useCarouselRightButtonRef.current

  useCarouselLogic({
    carousel: useCarouselRef,
    carouselLeftButton: useCarouselLeftButtonRef,
    carouselRightButton: useCarouselRightButtonRef
  }) // logic of useEffect of Carousel

  function moveNext() {
    if (leftButton && carousel && rightButton) {
      if (
        leftButton.style.visibility === 'hidden' &&
        carousel.scrollLeft === 0
      ) {
        leftButton.style.visibility = 'visible'
      }
      carousel.scrollLeft += 300
      if (
        Math.round(carousel.offsetWidth) +
          Math.round(carousel.scrollLeft) +
          300 >=
        Math.round(carousel.scrollWidth)
      ) {
        rightButton.style.visibility = 'hidden'
      }
    }
  }

  function moveBack() {
    if (leftButton && carousel && rightButton) {
      if (rightButton.style.visibility === 'hidden') {
        rightButton.style.visibility = 'visible'
      }
      carousel.scrollLeft -= 300
      if (carousel.scrollLeft - 300 <= 0) {
        leftButton.style.visibility = 'hidden'
      }
    }
  }

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
          buttonFunction={moveBack}
          typeOfButton={Arrow.Left}
          reference={useCarouselLeftButtonRef}
        />
        <CarouselArrowButton
          buttonFunction={moveNext}
          typeOfButton={Arrow.Right}
          reference={useCarouselRightButtonRef}
        />
      </div>
    </div>
  )
}

export default Carousel
