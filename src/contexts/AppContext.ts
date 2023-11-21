import { createContext } from 'react';

type AppContextProps = {
  image: string;
  mode: 'LIGHT' | 'DARK';
  isLooading: boolean;
}

export const AppContext = createContext();

export const appContext = createContext<AppContextProps>({
  image: '',
  mode: 'LIGHT',
  isLoading: false,
});
