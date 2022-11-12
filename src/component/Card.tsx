import * as React from 'react'
import Image from 'next/image'
import { CardInfo } from '../types/global'

const Card = (props: CardInfo) => {
  const { index, title, subtitle, image, count } = props

  const cardsBgTheme =
    index % 2 === 0
      ? 'bg-secondary dark:bg-gray-700'
      : 'bg-white dark:bg-gray-800'
  const cardsFontTheme = index % 2 === 0 ? 'text-white' : 'text-tertiary'
  const margin = index === 0 ? 'mr-4' : index === count - 1 ? 'ml-4' : 'mx-4'

  return (
    <div
      className={`shadow-md inline-flex items-center ${margin} sm:h-96 h-80 flex-col md:w-80 sm:w-72 w-56 xs:w-64 rounded-2xl mb-2`}
    >
      <div className="relative w-full h-full">
        <Image
          src={image}
          alt={`${title} image`}
          fill
          sizes="30vw"
          className="object-cover rounded-t-xl"
        />
      </div>
      <div
        className={`${cardsBgTheme} rounded-b-xl w-full h-48 flex flex-col justify-center`}
      >
        <h1
          className={`font-semibold text-1xl ml-4 ${cardsFontTheme} dark:text-white`}
        >
          {title}
        </h1>
        <p className={`text-lg ml-4 ${cardsFontTheme} dark:text-gray-300`}>
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export default Card
