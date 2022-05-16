import * as React from 'react';
import AppContext from './appContext';
import { globalStateType } from '../types/global';

type Props = {
  children: React.ReactNode
}

const AppContextProvider = (props: Props) => {
  const [state, setState] = React.useState<globalStateType>({
    theme: 'light',
    carouselEndScroll: true,
    carouselStartScroll: false,
    carouselScroll: true
  });

  function changeState(state: globalStateType) {
    setState(state);
  }

  return (
    <AppContext.Provider value={{ state, changeState }}>
      {props.children}
    </AppContext.Provider>
    );
};

export default AppContextProvider;
