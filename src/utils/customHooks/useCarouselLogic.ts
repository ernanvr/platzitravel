import * as React from 'react'

export function useCreateRef() {
  const useCarouselRef: React.RefObject<HTMLDivElement> =
    React.useRef<HTMLDivElement>(null)
  const useCarouselLeftButtonRef: React.RefObject<HTMLDivElement> =
    React.useRef<HTMLDivElement>(null)
  const useCarouselRightButtonRef: React.RefObject<HTMLDivElement> =
    React.useRef<HTMLDivElement>(null)

  return { useCarouselRef, useCarouselLeftButtonRef, useCarouselRightButtonRef }
}

export type Params = {
  carousel: React.RefObject<HTMLDivElement>
  carouselLeftButton: React.RefObject<HTMLDivElement>
  carouselRightButton: React.RefObject<HTMLDivElement>
}

export function moveNext(params: Params) {
  const { carousel, carouselLeftButton, carouselRightButton } = params
  if (
    carouselLeftButton.current &&
    carousel.current &&
    carouselRightButton.current
  ) {
    if (
      carouselLeftButton.current.style.visibility === 'hidden' &&
      carousel.current.scrollLeft === 0
    ) {
      carouselLeftButton.current.style.visibility = 'visible'
    }
    carousel.current.scrollLeft += 300
    if (
      Math.round(carousel.current.offsetWidth) +
        Math.round(carousel.current.scrollLeft) +
        300 >=
      Math.round(carousel.current.scrollWidth)
    ) {
      carouselRightButton.current.style.visibility = 'hidden'
    }
  }
}

export function moveBack(params: Params) {
  const { carousel, carouselLeftButton, carouselRightButton } = params
  if (
    carouselLeftButton.current &&
    carousel.current &&
    carouselRightButton.current
  ) {
    if (carouselRightButton.current.style.visibility === 'hidden') {
      carouselRightButton.current.style.visibility = 'visible'
    }
    carousel.current.scrollLeft -= 300
    if (carousel.current.scrollLeft - 300 <= 0) {
      carouselLeftButton.current.style.visibility = 'hidden'
    }
  }
}

function useCarouselLogic(params: Params) {
  const { carousel } = params
  function handleResizeCarousel(params: Params) {
    const { carousel, carouselLeftButton, carouselRightButton } = params

    if (
      carousel.current &&
      carouselLeftButton.current &&
      carouselRightButton.current
    ) {
      carouselLeftButton.current.style.visibility = 'hidden'

      carouselRightButton.current.style.visibility =
        carousel.current.scrollWidth / window.innerWidth < 0.99
          ? 'hidden'
          : 'visible'
    }
  }

  React.useEffect(() => {
    handleResizeCarousel(params)
    window.addEventListener('resize', () => {
      handleResizeCarousel(params)
      if (carousel.current) {
        carousel.current.scrollLeft = 0
      }
    })

    return () =>
      window.removeEventListener('resize', () => {
        handleResizeCarousel(params)
      })
  }, [carousel, params])
}

export default useCarouselLogic
