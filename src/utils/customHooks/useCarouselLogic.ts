import * as React from 'react'

export type Params = {
  carousel: React.RefObject<HTMLDivElement>
  carouselLeftButton: React.RefObject<HTMLDivElement>
  carouselRightButton: React.RefObject<HTMLDivElement>
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
  }, [])
}

export default useCarouselLogic
