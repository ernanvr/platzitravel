import * as React from 'react'

type Props = {
  content: string
}

const PrimaryButton = (props: Props): JSX.Element => {
  return (
    <button
      className={` absolute transition-all focus:outline-noneshadow-md dark:text-gray-900 
          sm:top-96 left-0 sm:left-24 sm:right-auto right-0 h-20 mx-auto font-semibold 
          bg-white rounded-full w-80 text-primary top-[40rem] text-2.5xl shadow-md`}
    >
      {props.content}
    </button>
  )
}

export default PrimaryButton
