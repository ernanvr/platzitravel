import * as React from 'react'
import { CardInfo } from '../types/global'
import Card from '../component/Card'

type Props = {
  cardsInfo: CardInfo[]
}

const Carousel = (props: Props) => {
  const { cardsInfo } = props

  const buildCarousel = (): JSX.Element[] =>
    cardsInfo.map((cardsInfo, index) => (
      <Card
        index={index}
        key={index}
        title={cardsInfo.title}
        subtitle={cardsInfo.subtitle}
        image={cardsInfo.image}
      />
    ))

  return (
    <div
      className={
        'relative flex w-full mt-4 justify-left translate-all scroll-smooth '
      }
    >
      {buildCarousel()}
    </div>
  )
}

export default Carousel
