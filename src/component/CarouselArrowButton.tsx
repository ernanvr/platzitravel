import * as React from 'react'
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs'
import { Arrow } from '../types/ArrowEnum'

type Props = {
  typeOfButton: Arrow.Left | Arrow.Right
  reference: React.RefObject<HTMLDivElement>
  buttonFunction: () => void
}

const CarouselArrowButton = (props: Props): JSX.Element => {
  const { typeOfButton, reference, buttonFunction } = props
  const gradientDirection =
    typeOfButton === Arrow.Left ? 'bg-gradient-to-r' : 'bg-gradient-to-l'

  return (
    <div
      className={`flex flex-col rounded-xl justify-center from-black/50 to-transparent ${gradientDirection}`}
      ref={reference}
    >
      <button className="" onClick={() => buttonFunction()}>
        {typeOfButton === Arrow.Left ? (
          <BsArrowLeftSquareFill
            size={32}
            className="shadow-xl text-white/25 border-hidden hover:text-white/75"
          />
        ) : (
          <BsArrowRightSquareFill
            size={32}
            className="shadow-xl text-white/25 border-hidden hover:text-white/75"
          />
        )}
      </button>
    </div>
  )
}

export default CarouselArrowButton
