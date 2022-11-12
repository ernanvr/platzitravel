import * as React from 'react'
import { AuthTypeContext } from '../types/global'

export const defaultValue: AuthTypeContext = {
  state: {
    theme: ''
  }
}

const appContext = React.createContext(defaultValue)

export default appContext
