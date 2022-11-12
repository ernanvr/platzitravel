import * as React from 'react'
import { AuthTypeContext } from '../types/global'

export const defaultValue: AuthTypeContext = {
  state: {
    theme: '',
    activeIndex: 0
  }
}

const appContext = React.createContext(defaultValue)

export default appContext
