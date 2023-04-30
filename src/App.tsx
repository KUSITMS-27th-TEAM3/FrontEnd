import React from 'react';
import { GlobalStyle } from './styles/GlobalStyle';
import Router from './Router';
import NavBar from './components/Navbar';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
