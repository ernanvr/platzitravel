export interface CardDetails {
  index: number
  title: string
  subtitle: string
  image: string | StaticImageData
}

export interface CardInfo extends CardDetails {
  count: number
}

export type Picture = CardDetails

export type AuthTypeContext = {
  state: {
    theme: string
  }
  changeState?: (state: stateType) => void
}

export interface globalStateType {
  theme: string
}
