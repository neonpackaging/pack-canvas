import React, { useState } from 'react';
import Nav from './sections/Nav.tsx';
import Sidebar from './sections/Sidebar.tsx';
import Canvas from './sections/Canvas.tsx';

import { AppContext, AppContextProps } from './contexts/AppContext.ts';

import './styles/App.scss';

function App() {
  const [state, setState] = useState<AppContextProps>({
    backgroundColor: 'transparent',
    image: '',
    mode: 'LIGHT',
    isLoading: false,
  });

  const setImage = image => {
    setState({
      ...state,
      isLoading: true,
    });

    setTimeout(function() {
      setState({
        ...state,
        image,
        isLoading: false,
      })
    }, 300);
  };

  const setBackgroundColor = backgroundColor => {
    setState({
      ...state,
      isLoading: true,
    });

    setTimeout(function() {
      setState({
        ...state,
        backgroundColor,
        isLoading: false
      });
    }, 300);
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        setImage,
        setBackgroundColor,
      }}
    >
      <Nav />
      <main>
        <Sidebar />
        <Canvas />
      </main>
    </AppContext.Provider>
  );
}

export default App;
