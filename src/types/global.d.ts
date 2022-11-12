export type CardInfo = {
  index: number
  title: string
  subtitle: string
  image: string | StaticImageData
  count: number
}

export type Picture = {
  index: number
  title: string
  subtitle: string
  image: string | StaticImageData
}

export type AuthTypeContext = {
  state: {
    theme: string
    activeIndex: number
  }
  changeState?: (state: stateType) => void
}

export interface globalStateType {
  theme: string
  activeIndex: 0
}
