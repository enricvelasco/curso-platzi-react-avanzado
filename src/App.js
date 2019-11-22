import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/logo'
import { Home } from './pages/home'
import { Detail } from './pages/detail'

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
    </div>
  );
}

export default App;
