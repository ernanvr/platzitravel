import * as React from 'react';
import { AuthTypeContext } from '../types/global';

export const defaultValue: AuthTypeContext = {
  state: {
    theme: 'light',
    carouselEndScroll: false,
    carouselStartScroll: true,
    carouselScroll: true
  },
  changeState: () => {}
};

const appContext = React.createContext(defaultValue);

export default appContext;
