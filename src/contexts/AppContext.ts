import { createContext } from 'react';

type AppContextProps = {
  backgroundColor: string;
  image: string;
  isLooading: boolean;
  mode: 'LIGHT' | 'DARK';
}

export const AppContext = createContext();

export const appContext = createContext<AppContextProps>({
  backgroundColor: 'transparent',
  image: '',
  isLoading: false,
  mode: 'LIGHT',
});
